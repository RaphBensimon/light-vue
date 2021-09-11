<template>
	<div>
		<lv-form-group :label="label" :validation="validation">
			<input type="text" v-model="label">
		</lv-form-group>
		<lv-button :loading="true">
			Test
		</lv-button>
	</div>
</template>
<script>
export default {
	data() {
		return {
			label      : '',
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
