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
