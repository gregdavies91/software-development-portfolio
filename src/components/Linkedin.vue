<template>
		<div id="linkedin" class="badge-base LI-profile-badge" data-locale="en_US" data-size="medium" data-theme="dark" data-type="HORIZONTAL" data-vanity="gregdavies91" data-version="v1"><a class="badge-base__link LI-simple-link" href="https://uk.linkedin.com/in/gregdavies91?trk=profile-badge">View LinkedIn Profile</a></div>
</template>

<style>
	
</style>

<script>

import { defineComponent } from 'vue';
import postscribe from 'postscribe';

export default defineComponent({
	name: 'Linkedin',
	setup() {
		return {
		}
	},
	mounted() {
		postscribe('#linkedin', '<script src="https://platform.linkedin.com/badges/js/profile.js"><\/script>') //eslint-disable-line
}
});
</script>

