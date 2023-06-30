<?php

/**
 * @copyright Copyright (c) 2017 Arthur Schiwon <blizzz@arthur-schiwon.de>
 *
 * @author Arthur Schiwon <blizzz@arthur-schiwon.de>
 * @author Thomas Citharel <tcit@tcit.fr>
 *
 * @license GNU AGPL version 3 or any later version
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License as
 * published by the Free Software Foundation, either version 3 of the
 * License, or (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 *
 */

/** @var \OCP\IL10N $l */
/** @var array $_ */

script('settings', [
	'usersettings',
	'templates',
	'federationsettingsview',
	'federationscopemenu',
	'settings/personalInfo',
	'vue-settings-personal-info',
]);
?>
<?php if (!$_['isFairUseOfFreePushService']) : ?>
	<div class="section">
		<div class="warning">
			<?php p($l->t('This community release of Nextcloud is unsupported and instant notifications are unavailable.')); ?>
		</div>
	</div>
<?php endif; ?>

<div id="personal-settings">
	<h2 class="hidden-visually"><?php p($l->t('Personal info')); ?></h2>
	<div id="personal-settings-avatar-container" class="personal-settings-container">
		<div id="vue-avatar-section"></div>
		<div class="personal-settings-setting-box personal-settings-group-box section">
			<div id="vue-details-section"></div>
		</div>
	</div>

	<div class="personal-settings-container">
		<div class="personal-settings-setting-box">
			<div id="vue-displayname-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-email-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-phone-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-location-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-website-section"></div>
		</div>
		<div class="personal-settings-setting-box">
			<div id="vue-twitter-section"></div>
		</div>
		<?php if ($_['profileEnabledGlobally']) : ?>
			<div class="personal-settings-setting-box">
				<div id="vue-organisation-section"></div>
			</div>
			<div class="personal-settings-setting-box">
				<div id="vue-role-section"></div>
			</div>
			<div class="personal-settings-setting-box">
				<div id="vue-headline-section"></div>
			</div>
			<div class="personal-settings-setting-box">
				<div id="vue-biography-section"></div>
			</div>
		<?php endif; ?>
	</div>

	<div class="profile-settings-container">
		<?php if ($_['profileEnabledGlobally']) : ?>
			<div class="personal-settings-setting-box">
				<div id="vue-profile-section"></div>
			</div>
		<?php endif; ?>
		<div class="personal-settings-setting-box personal-settings-language-box">
			<div id="vue-language-section"></div>
		</div>
		<div class="personal-settings-setting-box personal-settings-locale-box">
			<div id="vue-locale-section"></div>
		</div>
		<span class="msg"></span>
	</div>

	<?php
		$totalSpaceInGB = null;
		if($_['quota']>=1024){ // bytes converted
		$totalSpaceInKB = round($_['quota'] / 1024, 1);
		$totalSpaceInMB = round($totalSpaceInKB / 1024, 1);
		$totalSpaceInGB = round($totalSpaceInMB / 1024, 1);
		}

	?>	
	<div id="tarrifInfo" class="personal-settings-tarrif personal-settings-tarrif-box">
	<h4><?php p($l->t('Tariff information')); ?></h4>
		<div>
			<strong><?php p($l->t('Your tariff')); ?></strong>:
			<?php
				if ($_['quota'] == 0) {
					p($l->t('No space allocated'));
				}elseif($_['quota'] === \OCP\Files\FileInfo::SPACE_UNLIMITED){
					p($l->t('Unlimited'));
				}elseif($_['quota'] === \OCP\Files\FileInfo::SPACE_UNKNOWN){
					p($l->t('Space unknown'));
				}elseif($_['quota'] === \OCP\Files\FileInfo::SPACE_NOT_COMPUTED){
					p($l->t('Space not computed'));
				}elseif ($totalSpaceInGB  == 3 || $totalSpaceInGB == 10){
					p($l->t('MagentaCLOUD Free'));
				}elseif ($totalSpaceInGB  == 15 || $totalSpaceInGB == 25){
					p($l->t('MagentaCLOUD S'));
				}elseif ($totalSpaceInGB == 100){
					p($l->t('MagentaCLOUD M'));
				}else if ($totalSpaceInGB == 500){
					p($l->t('MagentaCLOUD L'));
				}else if ($totalSpaceInGB == 1024){
					p($l->t('MagentaCLOUD XL'));
				}else if ($totalSpaceInGB == 5120){
					p($l->t('MagentaCLOUD XXL'));
				}
			?>
		</div>
		<div>
		<strong><?php p($l->t('Storage')); ?></strong>: <?php p($_['totalSpace']); ?>
		</div>
		<div>
			<button>
			<?php print_unescaped($l->t('Expand storage')); ?>
			</button>
		</div>
	<div>
	<div class="extra-details">
      <div>
        <div id="files" class="files-usage"></div>
        <?php p($l->t('Files')); ?>:<strong><?php isset($_['filesSize'])?p($_['filesSize']):""; ?></strong>
      </div>
        <div>
          <div id="photos" class="photos-usage"></div>
            <?php p($l->t('Photos & videos')); ?>:<strong><?php isset($_['photoVideoSize'])?p($_['photoVideoSize']):""; ?></strong>
        </div>
        <div>
        <div>
          <div id="bin" class="bin-usage"></div>
          <?php p($l->t('Recycle Bin')); ?>:<strong><?php isset($_['trashSize'])?p($_['trashSize']):""; ?></strong>
        </div>
    </div>
				
	<div id="personal-settings-group-container">

	</div>

</div>

<?php if ($_['profileEnabledGlobally']) : ?>
	<div class="personal-settings-section">
		<div id="vue-profile-visibility-section"></div>
	</div>
<?php endif; ?>
