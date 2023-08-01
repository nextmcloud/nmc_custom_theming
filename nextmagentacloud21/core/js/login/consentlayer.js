// Tealium

//Create URLSearchParams object
const urlParams = new URLSearchParams(window.location.search);

//Path to Telekom Login
let path = "/apps/user_oidc/login/1";

//Check if the page is the login page
const checkIsLoginPage = function () {
  return window.location.pathname === "/login";
};

//Check if url has redirect_url parameter
const checkIsRedirectUrl = function () {
  return urlParams.has('redirect_url');
};

//Add event listener to the consentChanged event. When the consent is given, redirect to Telekom Login
if (checkIsLoginPage()) {
  window.addEventListener("consentChanged", function () {
    return redirectToTelekomLogin();
  });
}

//If the page is loaded with consent given, redirect to Telekom Login
if ("object" === typeof utag &&
  "object" === typeof utag.gdpr &&
  utag.gdpr.getConsentState() !== 0) {
  //Redirect to Telekom Login
  redirectToTelekomLogin();
}

function redirectToTelekomLogin() {
  if (checkIsRedirectUrl()) {
    redirect(path += "?redirectUrl=" + encodeURIComponent(urlParams.get('redirect_url')));
  } else if (!checkIsLoginPage() && !checkIsRedirectUrl()) {
    redirect(path += "&redirectUrl=" + window.location.pathname);
  } else {
    redirect(path)
  }
}

function redirect(url) {
  window.location.href = url;
}
