<!--
  - @copyright Copyright (c) 2019 John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @author John Molakvoæ <skjnldsv@protonmail.com>
  -
  - @license GNU AGPL version 3 or any later version
  -
  - This program is free software: you can redistribute it and/or modify
  - it under the terms of the GNU Affero General Public License as
  - published by the Free Software Foundation, either version 3 of the
  - License, or (at your option) any later version.
  -
  - This program is distributed in the hope that it will be useful,
  - but WITHOUT ANY WARRANTY; without even the implied warranty of
  - MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
  - GNU Affero General Public License for more details.
  -
  - You should have received a copy of the GNU Affero General Public License
  - along with this program. If not, see <http://www.gnu.org/licenses/>.
  -
  -->

<template>
	<div :class="{ 'icon-loading': loading }">
		<!-- error message -->
		<div v-if="error" class="emptycontent" :class="{ emptyContentWithSections: sections.length > 0 }">
			<div class="icon icon-error" />
			<h2>{{ error }}</h2>
		</div>

		<!-- shares content -->
		<div v-else class="sharingTab__content">
			<div v-if="currentTab == 'default'">
				<!-- shared with me information -->
				<SharingEntrySimple v-if="isSharedWithMe" v-bind="sharedWithMe" class="sharing-entry__reshare">
					<template #avatar>
						<NcAvatar :user="sharedWithMe.user"
							:display-name="sharedWithMe.displayName"
							class="sharing-entry__avatar" />
					</template>
				</SharingEntrySimple>

				<!-- add new share input -->
				<SharingInput v-if="!loading"
					:can-reshare="canReshare"
					:file-info="fileInfo"
					:link-shares="linkShares"
					:reshare="reshare"
					:shares="shares"
					@add:share="addShare" />

				<!-- link shares list -->
				<SharingLinkList v-if="!loading"
					ref="linkShareList"
					:can-reshare="canReshare"
					:file-info="fileInfo"
					:shares="linkShares" />

				<!-- other shares list -->
				<SharingList v-if="!loading"
					ref="shareList"
					:shares="shares"
					:file-info="fileInfo" />
			</div>

		</div>
		<div v-if="currentTab == 'permissions'">
			<!-- sharing permissions -->
			<SharingPermissions
				:share="share"
				:file-info="fileInfo" />
		</div>
		<div v-if="currentTab == 'notes'">
		<!-- sharing notes -->
			<SharingNotes
				:share="share"
				:file-info="fileInfo" />
		</div>
	</div>
</template>

<script>
import Config from '../services/ConfigServiceCustom'
import SharingInput from '../components/SharingInputCustom'
import SharingTab from '../../../../../../../nextcloud/apps/files_sharing/src/views/SharingTab'
import SharingLinkList from './SharingLinkListCustom'
import SharingList from './SharingListCustom.vue'
import SharingPermissions from '../components/SharingPermissions'
import SharingNotes from '../components/SharingNotes'
import { mapGetters } from 'vuex'
import ShareTypes from '../../../../../../../nextcloud/apps/files_sharing/src/mixins/ShareTypes'
export default {
	name: 'SharingTabCustom',
	extends:SharingTab,
	components: {
		SharingInput,
		SharingLinkList,
		SharingList,
		SharingPermissions,
		SharingNotes
	},
	mixins: [ShareTypes],
	data() {
		return {
			config: new Config(),
			error: '',
			expirationInterval: null,
			loading: true,
			fileInfo: null,
			// reshare Share object
			reshare: null,
			sharedWithMe: {},
			shares: [],
			linkShares: [],
			sections: OCA.Sharing.ShareTabSections.getSections(),
		}
	},
	computed: {
		...mapGetters({
			currentTab: 'getCurrentTab',
			share: 'getShare',
		}),
		/**
		 * Is this share shared with me?
		 *
		 * @return {boolean}
		 */
		isSharedWithMe() {
			return Object.keys(this.sharedWithMe).length > 0
		},
		canReshare() {
			return !!(this.fileInfo.permissions & OC.PERMISSION_SHARE)
				|| !!(this.reshare && this.reshare.hasSharePermission && this.config.isResharingAllowed)
		},
				hasShares() {
			return this.shares.length > 0
		},
		hasLinkShares() {
			return this.linkShares.length > 0
		},
	},
	mounted() {
		this.$root.$on('update', data => {
			this.update(data)
		})
	},
	methods: {
		isLinkShare() {
			return this.SHARE_TYPES.SHARE_TYPE_LINK === this.shareType
		},
		isEmailShare() {
			return this.SHARE_TYPES.SHARE_TYPE_EMAIL === this.shareType
		},
	},
}
</script>

<style scoped lang="scss">
.emptyContentWithSections {
	margin: 1rem auto;
}
.sharingTab {
	&__content {
		padding: 0 6px;
	}
	&__additionalContent {
		margin: 44px 0;
	}
}
</style>