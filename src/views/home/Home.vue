<template>
	<div>
		<lv-form-group :label="label" :validation="validation">
			<input type="text" v-model="label">
		</lv-form-group>
	</div>
</template>
<script setup>
import { ref, defineComponent } from 'vue'
const label = ref('test')
const validation = {
	$dirty   : true,
	$invalid : true,
	$errors  : [
		{ $message: 't' }
	]
}
</script>
