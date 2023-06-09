<?php
/**
 * @author Björn Schießle <schiessle@owncloud.com>
 * @author Jan-Christoph Borchardt, http://jancborchardt.net
 * @copyright Copyright (c) 2016, ownCloud, Inc.
 * @license AGPL-3.0
 *
 * This code is free software: you can redistribute it and/or modify
 * it under the terms of the GNU Affero General Public License, version 3,
 * as published by the Free Software Foundation.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
 * GNU Affero General Public License for more details.
 *
 * You should have received a copy of the GNU Affero General Public License, version 3,
 * along with this program.  If not, see <http://www.gnu.org/licenses/>
 */

class OC_Theme {

	/**
	 * Returns the base URL
	 * @return string URL
	 */
	public function getBaseUrl() {
		return 'http://nextcloud.indemo.t-systems.net';
	}

	/**
	 * Returns the documentation URL
	 * @return string URL
	 */
	public function getDocBaseUrl() {
		return 'https://docs.nextcloud.com';
	}

	/**
	 * Returns the title
	 * @return string title
	 */
	public function getTitle() {
		return 'MagentaCLOUD';
	}

	/**
	 * Returns the short name of the software
	 * @return string title
	 */
	public function getName() {
		return 'MagentaCLOUD';
	}

	/**
	 * Returns the short name of the software containing HTML strings
	 * @return string title
	 */
	public function getHTMLName() {
		return 'MagentaCLOUD';
	}

	/**
	 * Returns entity (e.g. company name) - used for footer, copyright
	 * @return string entity name
	 */
	public function getEntity() {
		return 'T-Systems International GmbH';
	}

	/**
	 * Returns slogan
	 * @return string slogan
	 */
	public function getSlogan() {
		return 'Alle Dateien sicher an einem Ort';
	}

	/**
	 * Returns short version of the footer
	 * @return string short footer
	 */
	public function getShortFooter() {
		$footer = '© ' . date('Y') . ' <a href="' . $this->getBaseUrl() . '" target="_blank">' . $this->getEntity() . '</a>' .
			'<br/>' . $this->getSlogan();

		return $footer;
	}

	/**
	 * Returns long version of the footer
	 * @return string long footer
	 */
	public function getLongFooter() {
		$footer = '© ' . date('Y') . ' <a href="' . $this->getBaseUrl() . '" target="_blank">' . $this->getEntity() . '</a>' .
			'<br/>' . $this->getSlogan();

		return $footer;
	}

	/**
	 * Generate a documentation link for a given key
	 * @return string documentation link
	 */
	public function buildDocLinkToKey($key) {
		return $this->getDocBaseUrl() . '/server/15/go.php?to=' . $key;
	}


	/**
	 * Returns mail header color
	 * @return string
	 */
	public function getColorPrimary() {
		return '#E20074';
	}

	/**
	 * Returns variables to overload defaults from core/css/variables.scss
	 * @return array
	 */
	public function getScssVariables() {
		return [
			'color-primary' => '#E20074'
		];
	}

	/**
	 * link to the desktop sync client
	 * @return string
	 * @since 6.0.0
	 */
	// public function getSyncClientUrl(): string {
	// 	return $this->defaults->getSyncClientUrl();
	// }

	/**
	 * link to the iOS client
	 * @return string
	 * @since 8.0.0
	 */
	public function getiOSClientUrl(): string {
		return 'https://apps.apple.com/us/app/magentacloud-cloud-speicher/id312838242';
	}


	/**
	 * Returns the AppId for the App Store for the iOS Client
	 * @return string AppId
	 * @since 8.0.0
	 */
	public function getiTunesAppId(): string {
		return '312838242';
	}

	/**
	 * link to the Android client
	 * @return string
	 * @since 8.0.0
	 */
	public function getAndroidClientUrl(): string {
		return 'https://play.google.com/store/apps/details?=com.t_systems.android.webdav';
	}

	public function __construct() {
		\OCP\Util::addScript('core', 'fileconflict');
		\OCP\Util::addScript('files', 'filelistplugin');
		\OCP\Util::addScript('core', 'search');
		\OCP\Util::addScript('core', 'breadcrumb');
		\OCP\Util::addScript('core', 'theme');
	}
}
