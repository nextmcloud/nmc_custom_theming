(function() {

	const FilesPlugin = {
		attach(fileList) {
			var self = this;
			const actionHandler = () => {
				this._onClickCancelSelected(fileList);
			}
		},
       
        _markFileAsShared: function($tr, hasShares, hasLink) {
			var action = $tr.find('.fileactions .action[data-action="Share"]')
			var type = $tr.data('type')
			var icon = action.find('.icon')
			var message, recipients, avatars
			var ownerId = $tr.attr('data-share-owner-id')
			var owner = $tr.attr('data-share-owner')
			var mountType = $tr.attr('data-mounttype')
			var shareFolderIcon
			var iconClass = 'icon-shared'
			action.removeClass('shared-style')
			// update folder icon
			if (type === 'dir' && (hasShares || hasLink || ownerId)) {
				if (typeof mountType !== 'undefined' && mountType !== 'shared-root' && mountType !== 'shared') {
					shareFolderIcon = OC.MimeType.getIconUrl('dir-' + mountType)
				} else if (hasLink) {
					shareFolderIcon = OC.MimeType.getIconUrl('dir-public')
				} else {
					shareFolderIcon = OC.MimeType.getIconUrl('dir-shared')
				}
				$tr.find('.filename .thumbnail').css('background-image', 'url(' + shareFolderIcon + ')')
				$tr.attr('data-icon', shareFolderIcon)
			} else if (type === 'dir') {
				var isEncrypted = $tr.attr('data-e2eencrypted')
				// FIXME: duplicate of FileList._createRow logic for external folder,
				// need to refactor the icon logic into a single code path eventually
				if (isEncrypted === 'true') {
					shareFolderIcon = OC.MimeType.getIconUrl('dir-encrypted')
					$tr.attr('data-icon', shareFolderIcon)
				} else if (mountType && mountType.indexOf('external') === 0) {
					shareFolderIcon = OC.MimeType.getIconUrl('dir-external')
					$tr.attr('data-icon', shareFolderIcon)
				} else {
					shareFolderIcon = OC.MimeType.getIconUrl('dir')
					// back to default
					$tr.removeAttr('data-icon')
				}
				$tr.find('.filename .thumbnail').css('background-image', 'url(' + shareFolderIcon + ')')
			}
			// update share action text / icon
			var url_string = window.location.href;
			var url = new URL(url_string);
			var c = url.searchParams.get("view");
            alert("ys in ")
			if (hasShares || ownerId) {
				recipients = $tr.data('share-recipient-data')
				var shareTypes1 = $tr.data('share-types');

				action.addClass('shared-style')

				if(c=="sharingout"){
				  avatars='';
				if (ownerId) {
					message = t('files_sharing', 'Shared by');
					avatars= OCA.Sharing.Util._formatRemoteShare(ownerId, owner, message);
				} else if (recipients) {
					avatars = OCA.Sharing.Util._formatShareList(recipients);
				}
				if(shareTypes1 ==3 || typeof shareTypes1 == "string" && shareTypes1.includes('3')){
					avatars += '<span class="icon icon-share-link">' + t('files_sharing', '') + '</span>'; // even if reshared, only show "Shared by"
				  }
				}
				else{
				avatars = '<span>' + t('files_sharing', 'Shared') + '</span>';  // even if reshared, only show "Shared by"
				if (ownerId) {
					message = t('files_sharing', 'Shared by');
					avatars = OCA.Sharing.Util._formatRemoteShare(ownerId, owner, message);
				} else if (recipients) {
					avatars = OCA.Sharing.Util._formatShareList(recipients);
				}
				}
				action.html(avatars).prepend(icon)

				if (ownerId || recipients) {
					var avatarElement = action.find('.avatar')
					avatarElement.each(function() {
						$(this).avatar($(this).data('username'), 32)
					})
					action.find('span[title]').tooltip({ placement: 'top' })
				}
			} else {
				action.html('<span class="hidden-visually">' + t('files_sharing', 'Shared') + '</span>').prepend(icon)
			}
			if(c=="sharingout"){
				iconClass = '';
				icon.removeClass('icon-shared icon-public').addClass(iconClass);
			  }
			  else{
				iconClass = 'icon-public';
				icon.removeClass('icon-shared icon-public').addClass(iconClass);
			  }
		},

        _formatRemoteShare: function(shareWith, shareWithDisplayName, message) {
			var parts = OCA.Sharing.Util._REMOTE_OWNER_REGEXP.exec(shareWith)
			//console.error(parts);
			if (!parts || !parts[7]) {
				// display avatar of the user
				var avatar = '<span class="avatar" data-username="' + escapeHTML(shareWith) + '" title="' + message + ' ' + escapeHTML(shareWithDisplayName) + '"></span>'
				var hidden = '<span class="receiveData">' + t('files_sharing', 'Received') + '</span> '
				return avatar + hidden
			}

			var userName = parts[2]
			var userDomain = parts[4]
			var server = parts[5]
			var protocol = parts[6]
			var serverPath = parts[8] ? parts[7] : ''; // no trailing slash on root

			var tooltip = message + ' ' + userName
			if (userDomain) {
				tooltip += '@' + userDomain
			}
			if (server) {
				tooltip += '@' + server.replace(protocol, '') + serverPath
			}

			var html = '<span class="remoteAddress" title="' + escapeHTML(tooltip) + '">'
			html += '<span class="username">' + escapeHTML(userName) + '</span>'
			if (userDomain) {
				html += '<span class="userDomain">@' + escapeHTML(userDomain) + '</span>'
			}
			html += '</span> '
			return html
		},

		/**
		 * Format a remote address
		 *
		 * @param {String} shareWith userid, full remote share, or whatever
		 * @param {String} shareWithDisplayName
		 * @param {String} message
		 * @returns {String} HTML code to display
		 */
		 _formatRemoteSharewith: function(shareWith, shareWithDisplayName, message) {
			var parts = OCA.Sharing.Util._REMOTE_OWNER_REGEXP.exec(shareWith)
			if(this.validateEmail(shareWith))
			{
				if (!parts || !parts[7]) {
					// display avatar of the user
					var avatar = '<span class="icon icon-share-magenta-user" data-username="' + escapeHTML(shareWith) + '" title="' + message + ' ' + escapeHTML(shareWithDisplayName) + '"></span>'
					var hidden = '<span class="hidden-visually">' + message + ' ' + escapeHTML(shareWithDisplayName) + '</span> '
					return avatar + hidden
				}
			}
			else{
				if (!parts || !parts[7]) {
					// display avatar of the user
					var avatar = '<span class="avatar" data-username="' + escapeHTML(shareWith) + '" title="' + message + ' ' + escapeHTML(shareWithDisplayName) + '"></span>'
					var hidden = '<span class="hidden-visually">' + message + ' ' + escapeHTML(shareWithDisplayName) + '</span> '
					return avatar + hidden
				}
			}


			var userName = parts[2]
			var userDomain = parts[4]
			var server = parts[5]
			var protocol = parts[6]
			var serverPath = parts[8] ? parts[7] : ''; // no trailing slash on root

			var tooltip = message + ' ' + userName
			if (userDomain) {
				tooltip += '@' + userDomain
			}
			if (server) {
				tooltip += '@' + server.replace(protocol, '') + serverPath
			}

			var html = '<span class="remoteAddress" title="' + escapeHTML(tooltip) + '">'
			html += '<span class="username">' + escapeHTML(userName) + '</span>'
			if (userDomain) {
				html += '<span class="userDomain">@' + escapeHTML(userDomain) + '</span>'
			}
			html += '</span> '
			return html
		},
		/**
		 * Loop over all recipients in the list and format them using
		 * all kind of fancy magic.
		 *
		* @param {Object} recipients array of all the recipients
		* @returns {String[]} modified list of recipients
		*/
		_formatShareList: function(recipients) {
			var _parent = this;
			var returnVal='';
			var firstname='';
			var Normalfirstname='';
			var externalShare='';
			var finalVal='';
			var internalCount=0;
			var externalCount=0;
			var externalSkip=0;
			var internalSkip=0;
			recipients = _.toArray(recipients);
            alert('hello')
			$.each(recipients, function(key,val) {
				if (_parent.validateEmail(val.shareWith)) {
					externalCount+=1;
					if(externalCount >2 && externalSkip==0){
					  externalShare +="...";
					  externalSkip=1;
					}
					else{
					  firstname = val.shareWith;
					  externalShare += val.shareWithDisplayName + ", ";
					}
				  } else {
					internalCount+=1;
					if(internalCount >2 && internalSkip==0){
					  returnVal +=  "...";
					  internalSkip=1;
					}
					else{
					  Normalfirstname = val.shareWith;
					  returnVal += val.shareWithDisplayName + ", ";
					}
				}
			});

			externalShare = externalShare.replace(/,\s*$/, "");
			if(externalShare!==""){
				finalVal+= _parent._formatRemoteSharewith(firstname, externalShare, t('files_sharing', 'Shared with'));

			  }
			returnVal = returnVal.replace(/,\s*$/, "");
			if(returnVal!==""){
				finalVal+= _parent._formatRemoteSharewith(Normalfirstname, returnVal, t('files_sharing', 'Shared with'));
			}

			 return finalVal;
		},

		/* validate email */

		validateEmail:function _validateEmail(emailAdress)
		{
		  let regexEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
		  if (emailAdress.match(regexEmail)) {
			return true;
		  } else {
			return false;
		  }
		},

}

	OC.Plugins.register('OCA.Files.FileList', FilesPlugin)
})()
