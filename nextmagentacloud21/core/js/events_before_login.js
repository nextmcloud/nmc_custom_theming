
window.onload = function () {
activateConsentLayer()
trackingEvent()
};

function activateConsentLayer() {
  setTimeout(() => {
    var constLayerAccButton = document.querySelector('#consentAcceptAll');
    constLayerAccButton.addEventListener('click', function() {
    urlSearchParams = new URLSearchParams(window.location.search);
    if(urlSearchParams.get('direct')!="1"){
      var telLoginButton = document.getElementById('alternative-logins');
      telLoginButton.children[0].click();
    }
  }, false);

  }, "200");
}

function trackingEvent(){
  if(typeof utag!=='undefined' && utag.view()) {
  var utag_data = {
    page_content_id : "magentacloud.de.privatkunden.consentlayer", 
    page_type : "theme"
    }
    utag.view(utag_data);
  }
}





