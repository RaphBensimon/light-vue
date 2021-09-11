<template>
	<div class="lv-spinner" />
</template>
<script>
</script>
<style scoped>
.lv-spinner {
	display: flex;
	width: 1.5rem;
	height: 1.5rem;
	border-radius: 50%;
	animation: spinner-border 0.75s linear infinite;
}

@keyframes spinner-border {
	from {
		transform: rotate(0);
	}
	to {
		transform: rotate(360deg);
	}
}
</style>