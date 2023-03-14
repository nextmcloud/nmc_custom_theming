//import tealoium_events from "tealium_event.json";

window.onload = function () {
  brandBarAnimation();
  guestInfoText();
  searchIconLabel();
  searchInputLabel();
  appendFolderName();
  domElementsobserver();
  fileActionButtonSettings();
  breadcrumbAddLabel();
  mobileOnlyClass();
  webTrackingEvents();
  leftSidebarEvents();
  login_tracking();
};

function brandBarAnimation() {
  setTimeout(function () {
    document.getElementsByClassName('header-brandbar')[0] ? document.getElementsByClassName('header-brandbar')[0].classList.add('header-brandbar-translate') : null;
    document.getElementsByClassName('logo-area__inner')[0] ? document.getElementsByClassName('logo-area__inner')[0].classList.add('brandbar-logo-minified') : null;
    document.getElementsByClassName('brandbar')[0] ? document.getElementsByClassName('brandbar')[0].classList.add('brand-bar-translation') : null;
    document.getElementById('app-navigation-toggle') ? document.getElementById('app-navigation-toggle').classList.add('app-navigation-translation') : null;
    var ele = document.getElementById('controls');
    if(ele){
      for (let i = 0; i < ele.length; i++) {
        ele[i] ? ele[i].classList.add('breadcrumb-translation') : null;
      }
    }
    document.getElementById('content') ? document.getElementById('content').classList.add('content-translation', 'translation') : null;
    document.getElementById('content-vue') ? document.getElementById('content-vue').classList.add('content-translation', 'translation') : null;
    document.getElementById('view-toggle') ? document.getElementById('view-toggle').classList.add('view-toggle-translation') : null;
    document.getElementById('app-navigation') ? document.getElementById('app-navigation').classList.add('app-navigation-translation', 'translation') : null;
    document.getElementById('app-navigation-vue') ? document.getElementById('app-navigation-vue').classList.add('app-navigation-translation', 'translation') : null;

  }, 3000);

  var richWorkSpace = document.getElementById('showRichWorkspacesToggle');
  if (richWorkSpace) {
    // richWorkSpace.checked = true;
    richWorkSpace.nextElementSibling.innerHTML = t('core', 'Show folder info text');
    // richWorkSpace.dispatchEvent(new Event('change'));
  }

  document.getElementById('recommendations-setting-enabled') ?
    document.getElementById('recommendations-setting-enabled').classList.add('hide') : null;
}


function guestInfoText() {
  var ele = document.getElementById('closePopUp');
  if (ele) {
    ele.onclick = function () {
      document.getElementsByClassName('content-dialog') ?
        document.getElementsByClassName('content-dialog')[0].classList.add('hide') : null;
      return false;
    }
  }
}

function searchIconLabel() {
  var spanElement = document.createElement('span');
  spanElement.className = 'menu-search-text';
  spanElement.innerText = t('core', 'Search');
  document.getElementsByClassName('header-menu__trigger')[0] ?
    document.getElementsByClassName('header-menu__trigger')[0].appendChild(spanElement) : null;
}

function searchInputLabel() {
  var ele = document.getElementsByClassName('header-menu__trigger')[0];
  if (ele) {
    ele.onclick = function () {
      var labelElement = document.createElement('label');
      labelElement.className = 'search-input-label';
      labelElement.innerText = t('core', 'Search files or folders …');
      document.getElementsByClassName('unified-search__form-input')[0] ?
      document.getElementsByClassName('unified-search__form-input')[0].required = true : null;
      document.getElementsByClassName('unified-search__form')[0] ?
      document.getElementsByClassName('unified-search__form')[0].appendChild(labelElement) : null;
    }
  }
}

function appendFolderName() {
  var ele = document.getElementsByClassName('guest-emptycontent')[0];
  if (ele) {
    var folderName = ele.firstElementChild.getAttribute('data-value');
    var emptyElement = document.getElementById('emptycontent');
    emptyElement.getElementsByClassName('folder-name')[0] ?
      emptyElement.getElementsByClassName('folder-name')[0].innerText = folderName : null;
  }
}

function domElementsobserver() {
  var domObserver = new MutationObserver(function (domMutations) {
    domMutations.forEach(function (mutation) {
      if (mutation.addedNodes && mutation.addedNodes.length > 0) {
        var ele = [].some.call(mutation.addedNodes, function (e) {
          if (e && e.classList) {
            return e.classList.contains('oc-dialog');
          } else {
            return false;
          }
        });
        if (ele && document.getElementById('picker-filestable')) {
          document.getElementById('picker-filestable').classList = '';
          document.getElementById('picker-filestable').classList.add('filelist');
        }
      }
    });
  });

  domObserver.observe(document.body, { attributes: true, childList: true, characterData: true });
}

function fileActionButtonSettings() {
  setTimeout(function () {
  var ele = document.querySelectorAll('.filesSelectMenu ul li, .filesSelectionMenu ul li');
      for(var i=0; li=ele[i]; i++) {
        if(li.className === 'item-toggleSelectionMode'){
          li.parentNode.removeChild(li);
        }
        else if(li.className === 'item-tags'){
          li.parentNode.removeChild(li);
        }
      }
    }, 200);
}

function breadcrumbAddLabel() {
  var ele = document.querySelectorAll('#controls .actions.creatable a')[0];
  var labelElement = document.createElement('label');
      labelElement.className = 'add-label';
      labelElement.innerText = t('core', 'Add');

     if(ele){
       ele.appendChild(labelElement);
     }
  }

/* to resolve rich text area issue on specific to mobile */
function mobileOnlyClass() {
  if( /Android|webOS|iOS/i.test(navigator.userAgent) ) {
    const ele = document.querySelectorAll('#body-public #content');
    if(ele){
      ele[0].classList.add('mobile-content');
    }
  }
}

function webTrackingEvents() {
if(typeof utag!=='undefined' && utag.view()) {
  $('.filesSelectionMenu ul li').click(function(e) {
    var targetElement = e.target;
    if(targetElement.innerHTML=="Move or copy" || targetElement.innerHTML=="Verschieben oder kopieren"){
      var utag_data = {
        wt_link_id: "content.button.hover-move",
        page_content_id : "files.list.select", // page name
        page_type : "files" // page type
        }
        utag.view(utag_data);
    }

    if(targetElement.innerHTML=="Delete" || targetElement.innerHTML=="Löschen"){
      var utag_data = {
        wt_link_id: "content.button.hover-delete",
        page_content_id : "files.list.select", // page name
        page_type : "files" // page type
        }
        utag.view(utag_data);
    }

    if(targetElement.innerHTML=="Download" || targetElement.innerHTML=="Herunterladen"){
      var utag_data = {
        wt_link_id: "content.button.hover-download",
        page_content_id : "files.list.select", // page name
        page_type : "files" // page type
        }
        utag.view(utag_data);
      }
  });

  $('#tab-sharing .add-new-link-btn').click(function(){
    var utag_data = {
      wt_link_id: "share.view.create.newlink",
      page_content_id : "share.view.start", // page name
      page_type : "files" // page type
      }
      utag.view(utag_data);

  });

  $('#filestable a.action.action-share.permanent').click(function(){
    var pageContentId='';
    if(document.getElementById("filestable").classList.contains("view-grid")){
      pageContentId="files.grid.shareicon";
    }
    else{
      pageContentId="files.list.shareicon";
    }
    var utag_data = {
      wt_link_id: "content.grid.shareicon",
      page_content_id : pageContentId, // page name
      page_type : "files" // page type
      }
      utag.view(utag_data);

});

  window.addEventListener('click',function(e){
    var targetElement = e.target || e.srcElement;
    try{

      if(document.getElementById("filestable").classList.contains("view-grid")){


        if(targetElement.id=="select_alselect_all_filesl_files"){
          var utag_data = {
            wt_link_id: "content.checkbox.selectall",
            page_content_id : "files.grid.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);

        }

        if(targetElement.innerHTML=="Download" || targetElement.innerHTML=="Herunterladen"){
          var utag_data = {
            wt_link_id: "content.button.hover-download",
            page_content_id : "files.grid.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
          }

        if(targetElement.innerText=="Select all"){
          var utag_data = {
            wt_link_id: "content.checkbox.selectall",
            page_content_id : "files.grid.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }

        if(targetElement.innerHTML=="Delete" || targetElement.innerHTML=="Löschen"){
          var utag_data = {
            wt_link_id: "content.button.hover-delete",
            page_content_id : "files.grid.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }


        if(targetElement.innerHTML=="Move" || targetElement.innerHTML=="Verschieben"){
          var utag_data = {
            wt_link_id: "content.button.hover-move",
            page_content_id : "files.grid.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }


        if(targetElement.innerHTML=="Copy" || targetElement.innerHTML=="Kopieren"){
          var utag_data = {
            wt_link_id: "content.button.hover-copy",
            page_content_id : "files.grid.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }
      }
      else{
        if(targetElement.id=="select_alselect_all_filesl_files"){
          var utag_data = {
            wt_link_id: "content.checkbox.selectall",
            page_content_id : "files.list.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);

        }

        if(targetElement.innerText=="Select all"){
          var utag_data = {
            wt_link_id: "content.checkbox.selectall",
            page_content_id : "files.list.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }

        if(targetElement.innerHTML=="Delete" || targetElement.innerHTML=="Löschen"){
          var utag_data = {
            wt_link_id: "content.button.hover-delete",
            page_content_id : "files.list.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }


        if(targetElement.innerHTML=="Move" || targetElement.innerHTML=="Verschieben"){
          var utag_data = {
            wt_link_id: "content.button.hover-move",
            page_content_id : "files.list.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }


        if(targetElement.innerHTML=="Copy" || targetElement.innerHTML=="Kopieren"){
          var utag_data = {
            wt_link_id: "content.button.hover-copy",
            page_content_id : "files.list.select", // page name
            page_type : "files" // page type
            }
            utag.view(utag_data);
        }

      }



      if(targetElement.innerHTML=="Upload file" || targetElement.innerHTML=="Datei hochladen"){
        var utag_data = {
          wt_link_id: "plus.button.upload",
          page_content_id : "files.list.select", // page name
          page_type : "files" // page type
          }
          utag.view(utag_data);
      }

      if(targetElement.innerHTML=="Password protect" || targetElement.innerHTML=="Passwortschutz"){
        var utag_data = {
          wt_link_id: "share.view.setting.password",
          page_content_id : "share.view.settings", // page name
          page_type : "files share" // page type
          }
          utag.view(utag_data);
      }


      if(targetElement.innerHTML=="Can edit" || targetElement.innerHTML=="Kann bearbeiten"){
        var utag_data = {
          wt_link_id: "share.view.setting.edit",
          page_content_id : "share.view.settings", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);
      }


      if(targetElement.innerHTML=="Search" || targetElement.innerHTML=="Suche"){
        var utag_data = {
          wt_link_id: "top.bar.menu.search",
          page_content_id : "top.bar.menu", // page name
          page_type : "top bar" // page type
          }
          utag.view(utag_data);
      }



      if(targetElement.innerHTML=="Set expiration date" || targetElement.innerHTML=="Ablaufdatum setzen"){
        var utag_data = {
          wt_link_id: "share.view.setting.timelimit",
          page_content_id : "share.view.settings", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);
      }

      if(targetElement.innerHTML=="File drop only" || targetElement.innerHTML=="Sammelbox"){
        var utag_data = {
          wt_link_id: "share.view.setting.droponly",
          page_content_id : "share.view.settings", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);
      }



      if(e.target.innerHTML=="New folder" || e.target.innerHTML=="Neuer Ordner"){
        var utag_data = {
          wt_link_id: "plus.button.createfolder",
          page_content_id : "files.list.select", // page name
          page_type : "theme" // page type
          }
          utag.view(utag_data);
      }
      var title = $(targetElement).attr('title');
      if(title!='' && title!='undefined' && title!=undefined){

        if(title=="All media"){
          var utag_data = {
            wt_link_id: "files.view.media.allmedia",
            page_content_id : "files.view.media.all", // page name
            page_type : "Media" // page type
            }
            utag.view(utag_data);
        }

        if(title=="My photos"){
          var utag_data = {
            wt_link_id: "files.view.media.myphotos",
            page_content_id : "files.view.media.myphotos", // page name
            page_type : "theme" // page type
            }
            utag.view(utag_data);
        }

        if(title=="My videos"){
          var utag_data = {
            wt_link_id: "files.view.media.myvideos",
            page_content_id : "files.view.media.myvideos", // page name
            page_type : "theme" // page type
            }
            utag.view(utag_data);
        }
        if(title=="Favorites"){
          var utag_data = {
            wt_link_id: "files.view.media.favorites",
            page_content_id : "files.view.media.favorites",
            page_type : "theme" // page type
            }
            utag.view(utag_data);
        }
        if(title=="Shared with me"){
          var utag_data = {
            wt_link_id: "files.view.media.shares",
            page_content_id : "files.view.media.receivedshares", // page name
            page_type : "theme" // page type
            }
            utag.view(utag_data);
        }


      }

      if(targetElement.className=="status-buttons__primary primary"){
        var utag_data = {
          wt_link_id: "content.button.send",
          page_content_id : "share.SendTo", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);
      }

      if(targetElement.className=="status-buttons__select"){
        var utag_data = {
          wt_link_id: "content.button.cancel",
          page_content_id : "share.SendTo", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);
      }

      if(targetElement.className=="app-sidebar__close icon-close"){
        var utag_data = {
          wt_link_id: "share.view.create.cancel",
          page_content_id : "share.view.create", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);
      }
      if(targetElement.className=="add-new-link-btn"){
        var utag_data = {
          wt_link_id: "share.view.create.newlink",
          page_content_id : "share.view.create", // page name
          page_type : "share" // page type
          }
          utag.view(utag_data);

      }
      if(targetElement.className!=="" && targetElement.className !=="active"  &&  targetElement.className !=="selected"){
        var elementClassname = targetElement.className;
        if(elementClassname!==''){
          if(!elementClassname.includes('-menu-')){

            var eventClassName = targetElement.className;
            var envent_class = eventClassName.split("nav-icon-");
            if(envent_class[0].includes('unified-search__trigger')){
              var utag_data = {
                wt_link_id: "top.bar.menu.search",
                page_content_id : "top.bar.menu", // page name
                page_type : "theme" // page type
                }
                utag.view(utag_data);
              }

            else if(envent_class[0].includes('emailmenu')){
                var utag_data = {
                  wt_link_id: "top.bar.menu.emailcenter",
                  page_content_id : "top.bar.menu", // page name
                  page_type : "theme" // page type
                  }
                  utag.view(utag_data);
              }

              if(envent_class[0]!==""){
                  var envent_class0 = envent_class[0].split("svg");
                  if($.trim(envent_class0[0])=="favorites"){
                    var utag_data = {
                      wt_link_id: "left.menu.favorites",
                      page_content_id : "left.menu", // page name
                      page_type : "theme" // page type
                      }
                      utag.view(utag_data);
                  }
              }

              if(envent_class[1]!==""){
                  var envent_class1 = envent_class[1].split("svg");
                  if($.trim(envent_class1[0])=="favorites"){
                    var utag_data = {
                      wt_link_id: "left.menu.favorites",
                      page_content_id : "left.menu", // page name
                      page_type : "files" // page type
                      }
                    utag.view(utag_data);
                  }
                  else if($.trim(envent_class1[0])=="files"){
                    var utag_data = {
                      wt_link_id: "left.menu.allfiles",
                      page_content_id : "left.menu", // page name
                      page_type : "files" // page type
                      }
                      utag.view(utag_data);

                  }
                  else if($.trim(envent_class1[0])=="sharingout"){
                    var utag_data = {
                      wt_link_id: "left.menu.sharesfromme",
                      page_content_id : "left.menu", // page name
                      page_type : "theme" // page type
                      }
                      utag.view(utag_data);
                  }
                  else if($.trim(envent_class1[0])=="sharingin"){
                    var utag_data = {
                      wt_link_id: "left.menu.sharesfromothers",
                      page_content_id : "left.menu", // page name
                      page_type : "theme" // page type
                      }
                      utag.view(utag_data);
                  }
                }
          }
          else if(elementClassname.contains('menu-')){
          }
        }
      }
      else if(targetElement.attributes){
        if(targetElement.attributes.href.value.includes('apps/')){
          var envent_class = targetElement.attributes.href.value.split('apps/')
          if(envent_class[1]=="files/"){
            var utag_data = {
              wt_link_id: "top.bar.menu.myfiles",
              page_content_id : "top.bar.menu", // page name
              page_type : "top bar" // page type
              }
              utag.view(utag_data);
          }
          else if(envent_class[1]=="dashboard/"){
            var utag_data = {
              wt_link_id: "top.bar.menu.welcome",
              page_content_id : "top.bar.menu", // page name
              page_type : "top bar" // page type
              }
              utag.view(utag_data);
          }
          else if(envent_class[1]=="photos/"){
            var utag_data = {
              wt_link_id: "top.bar.menu.media",
              page_content_id : "top.bar.menu", // page name
              page_type : "top bar" // page type
              }
              utag.view(utag_data);
          }
          else if(envent_class[1]=="photos/videos"){
            var utag_data = {
              wt_link_id: "top.bar.menu.media",
              page_content_id : "top.bar.menu", // page name
              page_type : "theme" // page type
              }
              utag.view(utag_data);
          }
        }
        else{
          if(targetElement.attributes.href.value=="/index.php/settings/user"){
            var utag_data = {
              wt_link_id: "top.bar.menu.userprofile",
              page_content_id : "top.bar.menu", // page name
              page_type : "theme" // page type
              }
              utag.view(utag_data);
          }
        }
      }
      else if(targetElement=="Object HTMLSpanElement"){
      }
      else if(targetElement && targetElement.id== 'sharingout'){
        }
      }
      catch(err){

      }
      });
  }
}

function leftSidebarEvents() {
  $('.nav-icon-sharingout').click(function(){
    window._nc_event_bus.emit('files:navigation:changed')
  })

  $('.nav-icon-sharingin').click(function(){
    window._nc_event_bus.emit('files:navigation:changed')
  })

  $('.nav-icon-favorites').click(function(){
    window._nc_event_bus.emit('files:navigation:changed')
  })

  $('.nav-icon-trashbin').click(function(){
    window._nc_event_bus.emit('files:navigation:changed')
  })
}

function login_tracking_details(){
    // tracking event
    if(typeof utag!=='undefined' && utag.view()) {
      var utag_data = {
        page_content_id : "magentacloud.de.privatkunden.consentlayer",
        page_type : "theme"
        }
        utag.view(utag_data);
        }

  // telkom redirection
  urlSearchParams = new URLSearchParams(window.location.search);
  if(urlSearchParams.get('direct')!="1"){
    var telLoginButton = document.getElementById('alternative-logins');
    telLoginButton.children[0].click();
  }else{
    document.getElementsByClassName('login-section')[0].style.visibility = 'visible';
  }
}

function login_tracking() {
    var constLayerAccButton = document.querySelector('#consentAcceptAll');
    var onlyReqAccButton = document.querySelector('#rejectAll');

    if(constLayerAccButton){
      constLayerAccButton.addEventListener('click', function() {
        login_tracking_details();
    }, false);
    }

    if(onlyReqAccButton){
      onlyReqAccButton.addEventListener('click', function() {
        login_tracking_details();
    }, false);
    }

    document.addEventListener("click", function(e){
      const target = e.target.closest("#consentSettingsAcceptAll");
      if(target){
        login_tracking_details();
      }
    })
}






