function breadcrumbAddLabel() {
	var ele = document.querySelectorAll('.files-controls .actions.creatable a')[0];
	var labelElement = document.createElement('label');
		labelElement.className = 'add-label';
		labelElement.innerText = t('core', 'Add');

	if(ele){
		ele.appendChild(labelElement);
	}
}
