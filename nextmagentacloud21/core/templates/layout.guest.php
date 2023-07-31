<!DOCTYPE html>
<html class="ng-csp" data-placeholder-focus="false" lang="<?php p($_['language']); ?>" data-locale="<?php p($_['locale']); ?>">

<head <?php if ($_['user_uid']) { ?> data-user="<?php p($_['user_uid']); ?>" data-user-displayname="<?php p($_['user_displayname']); ?>" <?php } ?> data-requesttoken="<?php p($_['requesttoken']); ?>">
  <meta charset="utf-8">
  <title>
    <?php p($theme->getTitle()); ?>
  </title>
  <meta http-equiv="X-UA-Compatible" content="IE=edge">
  <meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0">
  <?php if ($theme->getiTunesAppId() !== '') { ?>
    <meta name="apple-itunes-app" content="app-id=<?php p($theme->getiTunesAppId()); ?>">
  <?php } ?>
  <meta name="theme-color" content="<?php p($theme->getColorPrimary()); ?>">
  <link rel="icon" href="<?php print_unescaped(image_path('', 'favicon.ico')); /* IE11+ supports png */ ?>">
  <link rel="apple-touch-icon" href="<?php print_unescaped(image_path('', 'favicon-touch.png')); ?>">
  <link rel="mask-icon" sizes="any" href="<?php print_unescaped('/themes/nextmagentacloud21/core/img/favicon-mask.svg'); ?>" color="<?php p($theme->getColorPrimary()); ?>">
  <link rel="manifest" href="<?php print_unescaped('/themes/nextmagentacloud21/core/img/manifest.json'); ?>">
  <?php
  /* Get tealium config  */

  use OC\Security\CSP\ContentSecurityPolicyNonceManager;
  use OCP\IConfig;
  use OCP\IRequest;

  $nonceManager = \OC::$server->get(ContentSecurityPolicyNonceManager::class);
  $request = \OC::$server->get(IRequest::class);
  $config = \OC::$server->get(IConfig::class);

  $tealiumConfig = $config->getSystemValue('tealium');
  if ($tealiumConfig && $tealiumConfig['enable']) { ?>
    <!--TODO :Trying to load Telium library directly from CDN -->
    <script type="text/javascript" nonce="<?php p($nonceManager->getNonce()) ?>" src="<?php echo $tealiumConfig['url']; ?>"></script>
  <?php } ?>
  <?php emit_css_loading_tags($_); ?>
  <?php emit_script_loading_tags($_); ?>
  <?php print_unescaped($_['headers']); ?>
</head>
<?php
$pathInfo = $request->getPathInfo();

$isLoginPage = $pathInfo === '/login';
$isShareAuth = preg_match("#^/s/\w+/authenticate#", $pathInfo) === 1;

$nmcBodyClassList = '';
if ($isLoginPage || $isShareAuth) {
  $nmcBodyClassList = 'nmc-login';
} else {
  $nmcBodyClassList = 'nmc-guest';
}


?>

<body id="<?php p($_['bodyid']); ?>" class="<?php p($nmcBodyClassList); ?>">
  <img src="/themes/nextmagentacloud21/core/img/Consent_layer_buuble-textinvector.svg" class="login-consent-layer-buuble-text">
  <?php include 'layout.noscript.warning.php'; ?>
  <?php foreach ($_['initialStates'] as $app => $initialState) { ?>
    <input type="hidden" id="initial-state-<?php p($app); ?>" value="<?php p(base64_encode($initialState)); ?>">
  <?php } ?>
  <div class="container-fixed">
    <div class="v-align">
      <?php if ($_['bodyid'] === 'body-login') : ?>
        <!-- <header role="banner">
						<div id="header">
							<div class="logo">
								<h1 class="hidden-visually">
									<?php p($theme->getName()); ?>
								</h1>
								<?php if (
                  \OC::$server->getConfig()->getSystemValue('installed', false)
                  && \OC::$server->getConfig()->getAppValue('theming', 'logoMime', false)
                ) : ?>
									<img src="<?php p($theme->getLogo()); ?>"/>
								<?php endif; ?>
							</div>
							<h5>Magenta<span class="logo-title">CLOUD</span></h5>
						</div>
					</header> -->

        <div class="login-header">
          <div class="app-logo brand">
            <img src="/themes/nextmagentacloud21/core/img/1-T-3-logo.svg">
          </div>
        </div>
      <?php endif; ?>
      <main>
        <div class="login-main <?php if($_GET['direct'] != 2 && $isLoginPage){ echo 'login-hidden'; }?>">
          <div class="login-section visibility-hidden">
            <?php print_unescaped($_['content']); ?>
          </div>
        </div>
      </main>
    </div>
  </div>
  <footer role="contentinfo" class="brand-footer login-footer">

    <div class="container-fixed">
      <div class="row brand-footer-bar">
        <div class="col-l-4 col-s-12 text-muted">
          <div class="brand-footer-bar-text">
            © Telekom Deutschland GmbH
          </div>
        </div>
        <div class="col-l-8 col-s-12">
          <ul class="nav brand-footer-nav text-l-right">
            <li><a href="https://static.magentacloud.de/licences/webui.htm" title="Open Source Lizenzen" target="_blank">Open Source Lizenzen</a>
            <li><a href="http://www.telekom.de/impressum" title="Impressum">Impressum</a></li>
            <li><a href="https://static.magentacloud.de/Datenschutz" title="Datenschutz">Datenschutz</a>
            </li>
            <li><a href="https://cloud.telekom-dienste.de/hilfe" title="HilfeAndFAQ">Hilfe & FAQ</a></li>
          </ul>
        </div>
      </div>
    </div>
  </footer>

</body>

</html>
