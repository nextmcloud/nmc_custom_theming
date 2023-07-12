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
			<?php p($l->t('This community release of Magentacloud is unsupported and instant notifications are unavailable.')); ?>
		</div>
	</div>
<?php endif; ?>

<div id="personal-settings">
	<h2><?php p($l->t('Account details')); ?></h2>

	<div class="personal-settings-container">
		<div class="personal-settings-setting-box">
			<div id="vue-displayname-section"></div>
		</div>
		<div class="personal-settings-setting-box personal-settings-language-box">
			<div id="vue-language-section"></div>
		</div>
		
		<?php if ($_['profileEnabledGlobally']) : ?>
			
		<?php endif; ?>
	</div>

	<div class="profile-settings-container">
		<?php if ($_['profileEnabledGlobally']) : ?>
			
		<?php endif; ?>
		
		<div class="personal-settings-setting-box">
			<div id="vue-email-section"></div>
		</div>
		
		
		<span class="msg"></span>
	</div>
	<div class="alt-email-text">
	<p>
		<label><?php p($l->t('You can add an alternative email address to receive your notifications there. It will also be used as an address for shared content. Your password can be changed in the')); ?> <a href="https://account.idm.telekom.com/account-manager/index.xhtml" target="_blank"> <?php p($l->t('login settings')); ?></a>
			<?php p($l->t('for all Telekom services.')); ?>
		</label>
    </p>
	</div>
	<div class="storage-utilization">
	
	<div class="personal-settings-setting-box personal-settings-group-box section">
	
		<div id="vue-details-section"></div>
			<div class="extra-details">
				<div>
        			<div id="files-utilization" class="files-usage-utilization"></div>
        			<?php p($l->t('Files')); ?>: <strong></strong>
      			</div>
				<div>
          			<div id="photos-utilization" class="photos-usage-utilization"></div>
					  <?php p($l->t('Photos & videos')); ?>:<strong></strong>
        		</div>
				
				<div>
					<div id="bin-utilization" class="bin-usage-utilization"></div>
					<?php p($l->t('Recycle Bin')); ?>:<strong></strong>
				</div>
			</div>
			<div class="recycle-para">
				<?php print_unescaped($l->t(
							'The recycle bin is automatically tidied up.'
						)); ?>
  			</div>
  			<div class="para-2">
				<?php print_unescaped($l->t(
                'Files that have been in the recycle bin for longer than 30 days are automatically deleted permanently and free up storage space.'
              	)); ?>
			</div>
			
			<div id="tarrifInfo-details" class="tarrifInfo-usage-details">
				<h4><?php p($l->t('Tariff information')); ?></h4>
					<div>
        				<strong><?php p($l->t('Your tariff')); ?></strong>:
							
					</div>
					<div>
        				<strong><?php p($l->t('Storage')); ?></strong>: 
					</div>
					<div>
      					<a href="https://cloud.telekom-dienste.de/tarife" target="_blank">
        				<button><?php print_unescaped($l->t('Expand storage')); ?></button>
						</a>
    				</div>
    		<div>
			</div>

		</div>
	</div>

	<div id="personal-settings-group-container">

	</div>

</div>

<?php if ($_['profileEnabledGlobally']) : ?>
	
<?php endif; ?>
