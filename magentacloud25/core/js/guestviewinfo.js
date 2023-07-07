function guestInfoText() {
  var closePopUp = document.getElementById('closePopUp');
  if (closePopUp) {
    closePopUp.onclick = function() {
      var contentDialogs = document.getElementsByClassName('content-dialog');
      for (var i = 0; i < contentDialogs.length; i++) {
        contentDialogs[i].style.visibility ='hidden';
      }
      return false;
    };
  }
}
