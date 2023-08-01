// Tealium

//Create URLSearchParams object
var urlParams = new URLSearchParams(window.location.search);

//Path to Telekom Login
var path = "/apps/user_oidc/login/1";

//Check if the page is the login page
var checkIsLoginPage = function () {
  return window.location.pathname === "/login";
};

//Check if url has redirect_url parameter
var checkIsRedirectUrl = function () {
  return urlParams.has('redirect_url');
};

//Check if the page is the alternative login page
var checkIsAlternativeLogin = function () {
  return document.getElementById("alternative-logins");
};

//Add event listener to the consentChanged event. When the consent is given, redirect to Telekom Login
if (checkIsLoginPage() && !checkIsRedirectUrl()) {
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
