window.onload = function() {
    brandBarAnimation();
};

function brandBarAnimation() {
    setTimeout(function() {
        document.getElementsByClassName('header-brandbar')[0] ? document.getElementsByClassName('header-brandbar')[0].classList.add('header-brandbar-translate') : null;
        document.getElementsByClassName('logo-area__inner')[0] ? document.getElementsByClassName('logo-area__inner')[0].classList.add('brandbar-logo-minified') : null;
        document.getElementsByClassName('brandbar')[0] ? document.getElementsByClassName('brandbar')[0].classList.add('brand-bar-translation') : null;
        document.getElementById('app-navigation-toggle') ? document.getElementById('app-navigation-toggle').classList.add('app-navigation-translation') : null;
        document.getElementsByClassName('full-width-breadcrumb')[0] ? document.getElementsByClassName('full-width-breadcrumb')[0].classList.add('breadcrumb-translation') : null;
    }, 3000);
    // let workSpaceelement = document.getElementById('showRichWorkspacesToggle');
    // let workSpaceevent = new Event('change');
    // workSpaceelement.dispatchEvent(workSpaceevent);
    // document.getElementById('showRichWorkspacesToggle').checked = true;
    // document.getElementById('showRichWorkspacesToggle').nextElementSibling.innerHTML = 'Show folder info text';
}