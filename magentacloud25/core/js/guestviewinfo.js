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