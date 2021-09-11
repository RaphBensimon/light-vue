<template>
	<button :class="{'loading': loading}">
		<lv-spinner v-if="loading" variant="white" />
		<div class="btn-content">
			<slot />
		</div>
	</button>
</template>
<script>
export default {
	props : {
		loading : {
			type     : Boolean,
			required : false,
			default  : false
		}
	},
}
</script>
<style scoped>

</style>