/**
 * @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
 *
 * @author John Molakvoæ <skjnldsv@protonmail.com>
 * @author Julius Härtl <jus@bitgrid.net>
 *
 * @license AGPL-3.0-or-later
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
 * along with this program. If not, see <http://www.gnu.org/licenses/>.
 *
 */

import Vue from 'vue'
import { translate as t, translatePlural as n } from '@nextcloud/l10n'

import SharingTab from './views/SharingTab.vue'
//import SharingTab from './views/SharingTab.vue'
import ShareSearch from '../../../../../../nextcloud/apps/files_sharing/src/services/ShareSearch'
import ExternalLinkActions from '../../../../../../nextcloud/apps/files_sharing/src/services/ExternalLinkActions'
import ExternalShareActions from '../../../../../../nextcloud/apps/files_sharing/src/services/ExternalShareActions'
import TabSections from '../../../../../../nextcloud/apps/files_sharing/src/services/TabSections'
import store from './store'
// Init Sharing Tab Service
if (!window.OCA.Sharing) {
	window.OCA.Sharing = {}
}
Object.assign(window.OCA.Sharing, { ShareSearch: new ShareSearch() })
Object.assign(window.OCA.Sharing, { ExternalLinkActions: new ExternalLinkActions() })
Object.assign(window.OCA.Sharing, { ExternalShareActions: new ExternalShareActions() })
Object.assign(window.OCA.Sharing, { ShareTabSections: new TabSections() })

Vue.prototype.t = t
Vue.prototype.n = n

// Init Sharing tab component
const View = Vue.extend(SharingTab)
let TabInstance = null

window.addEventListener('DOMContentLoaded', function() {
	if (OCA.Files && OCA.Files.Sidebar) {
		OCA.Files.Sidebar.registerTab(new OCA.Files.Sidebar.Tab({
			id: 'sharing',
			name: t('files_sharing', 'Sharing'),
			icon: 'icon-share',

			async mount(el, fileInfo, context) {
				if (TabInstance) {
					TabInstance.$destroy()
				}
				TabInstance = new View({
					// Better integration with vue parent component
					parent: context,
					store
				})
				// Only mount after we have all the info we need
				await TabInstance.update(fileInfo)
				TabInstance.$mount(el)
				OCA.Files.Sidebar.setActiveTab('sharing')
			},
			update(fileInfo) {
				TabInstance.update(fileInfo)
				store.commit('addCurrentTab', 'default')
			},
			destroy() {
				TabInstance.$destroy()
				store.commit('addCurrentTab', 'default')
				TabInstance = null
			},
		}))
	}
})