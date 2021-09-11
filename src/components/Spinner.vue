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
.lv-spinner.white {
	border: 0.25em solid var(--white-opacity-25);
	border-bottom-color: var(--white);
}
.lv-spinner.primary {
	border: 0.25em solid var(--primary-opacity-25);
	border-bottom-color: var(--primary);
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