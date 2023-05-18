window.onload = function () {
  renderCustomFileConflictWidget();
};

function renderCustomFileConflictWidget() {
  $.widget('oc.ocdialogconflictpredlg', {
    options: {
      width: 'auto',
      height: 'auto',
      closeButton: true,
      closeOnEscape: true,
      closeCallback: null,
      modal: false,
    },
    _create() {
      const self = this
  
      this.originalCss = {
        display: this.element[0].style.display,
        width: this.element[0].style.width,
        height: this.element[0].style.height,
      }
  
      this.originalTitle = this.element.attr('title')
      this.options.title = this.options.title || this.originalTitle
  
      this.$dialog = $('<div class="oc-dialog oc-conflict-pre-dlg" />')
        .attr({
          // Setting tabIndex makes the div focusable
          tabIndex: -1,
          role: 'dialog',
        })
        .insertBefore(this.element)
      this.$dialog.append(this.element.detach())
      this.element.removeAttr('title').addClass('oc-dialog-content').appendTo(this.$dialog)
  
      this.$dialog.css({
        display: 'inline-block',
        position: 'fixed',
      })
  
      this.enterCallback = null
  
      $(document).on('keydown keyup', function(event) {
        if (
          event.target !== self.$dialog.get(0)
          && self.$dialog.find($(event.target)).length === 0
        ) {
          return
        }
        // Escape
        if (
          event.keyCode === 27
          && event.type === 'keydown'
          && self.options.closeOnEscape
        ) {
          event.stopImmediatePropagation()
          self.close()
          return false
        }
        // Enter
        if (event.keyCode === 13) {
          event.stopImmediatePropagation()
          if (self.enterCallback !== null) {
            self.enterCallback()
            event.preventDefault()
            return false
          }
          if (event.type === 'keyup') {
            event.preventDefault()
            return false
          }
          // If no button is selected we trigger the primary
          if (
            self.$buttonrow
            && self.$buttonrow.find($(event.target)).length === 0
          ) {
            const $button = self.$buttonrow.find('button.primary')
            if ($button && !$button.prop('disabled')) {
              $button.trigger('click')
            }
          } else if (self.$buttonrow) {
            $(event.target).trigger('click')
          }
          return false
        }
      })
  
      this._setOptions(this.options)
      this._createOverlay()
    },
    _init() {
      this.$dialog.focus()
      this._trigger('open')
    },
    _setOption(key, value) {
      const self = this
      switch (key) {
      case 'title':
        if (this.$title) {
          this.$title.text(value)
        } else {
          const $title = $('<div class="flex-container"><div class="oc-conflict-pre-dlg-title-div"><h2 class="oc-conflct-pre-dlg-title">'
              + value
              + '</h2></div><div class="oc-conflict-pre-dlg-close-div"><a class="close-conflict-pre-dlg">&nbsp;</a></div></div>')
          this.$title = $title.prependTo(this.$dialog)
        }
        this._setSizes()
        break
      case 'buttons':
        if (this.$buttonrow) {
          this.$buttonrow.empty()
        } else {
          const $buttonrow = $('<div class="" />')
          this.$buttonrow = $buttonrow.appendTo(this.$dialog)
        }
        if (value.length === 1) {
          this.$buttonrow.addClass('onebutton')
        } else if (value.length === 2) {
          this.$buttonrow.addClass('twobuttons')
        } else if (value.length === 3) {
          this.$buttonrow.addClass('threebuttons')
        } else if (value.length === 4) {
          this.$buttonrow.addClass('fourbuttons')
        }
  
        $.each(value, function(idx, val) {
          const $button = $('<button>').text(val.text)
          if (val.classes) {
            $button.addClass(val.classes)
          }
  
          if (val.defaultButton) {
            $button.addClass('primary')
            self.$defaultButton = $button
          }
          self.$buttonrow.append($button)
          $button.click(function() {
            val.click.apply(self.element[0], arguments)
          })
        })
        this.$buttonrow.find('button')
          .on('focus', function(event) {
            self.$buttonrow.find('button').removeClass('primary')
            $(this).addClass('primary')
          })
        this._setSizes()
        break
      case 'style':
        if (value.buttons !== undefined) {
          this.$buttonrow.addClass(value.buttons)
        }
        break
      case 'closeButton':
        if (value) {
          const $closeButton = $('<a class="oc-dialog-close"></a>')
          this.$dialog.prepend($closeButton)
          $closeButton.on('click', function() {
            self.options.closeCallback && self.options.closeCallback()
            self.close()
          })
        } else {
          this.$dialog.find('.oc-dialog-close').remove()
        }
        break
      case 'width':
        this.$dialog.css('width', value)
        break
      case 'height':
        this.$dialog.css('height', value)
        break
      case 'close':
        this.closeCB = value
        break
      }
      // this._super(key, value);
      $.Widget.prototype._setOption.apply(this, arguments)
    },
    _setOptions(options) {
      // this._super(options);
      $.Widget.prototype._setOptions.apply(this, arguments)
    },
    _setSizes() {
      let lessHeight = 0
      if (this.$title) {
        lessHeight += this.$title.outerHeight(true)
      }
      if (this.$buttonrow) {
        lessHeight += this.$buttonrow.outerHeight(true)
      }
      this.element.css({
        height: 'calc(100% - ' + lessHeight + 'px)',
      })
    },
    _createOverlay() {
      if (!this.options.modal) {
        return
      }
  
      const self = this
      let contentDiv = $('#content')
      if (contentDiv.length === 0) {
        // nextcloud-vue compatibility
        contentDiv = $('.content')
      }
      this.overlay = $('<div>')
        .addClass('oc-dialog-dim')
        .appendTo(contentDiv)
      this.overlay.on('click keydown keyup', function(event) {
        if (event.target !== self.$dialog.get(0) && self.$dialog.find($(event.target)).length === 0) {
          event.preventDefault()
          event.stopPropagation()
  
        }
      })
    },
    _destroyOverlay() {
      if (!this.options.modal) {
        return
      }
  
      if (this.overlay) {
        this.overlay.off('click keydown keyup')
        this.overlay.remove()
        this.overlay = null
      }
    },
    widget() {
      return this.$dialog
    },
    setEnterCallback(callback) {
      this.enterCallback = callback
    },
    unsetEnterCallback() {
      this.enterCallback = null
    },
    close() {
      this._destroyOverlay()
      const self = this
      setTimeout(function() {
        self._trigger('close', self)
      }, 200)
  
      self.$dialog.remove()
      this.destroy()
    },
    destroy() {
      if (this.$title) {
        this.$title.remove()
      }
      if (this.$buttonrow) {
        this.$buttonrow.remove()
      }
  
      if (this.originalTitle) {
        this.element.attr('title', this.originalTitle)
      }
      this.element.removeClass('oc-dialog-content')
        .css(this.originalCss).detach().insertBefore(this.$dialog)
      this.$dialog.remove()
    },
  }) 
}
