<template>
	<div>
		<lv-form-group :label="label" :validation="validation">
			<input type="text" v-model="label">
		</lv-form-group>
		<lv-button :loading="true" class="primary">
			<div class="test" v-if="!loading">
				Test
			</div>
			<lv-spinner class="white" v-else />
		</lv-button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			label      : 'tes',
			validation : {},
			loading    : true
		}
	},
	watch : {
		label() {
			this.loading = !this.loading
		}
	}
}
</script>
