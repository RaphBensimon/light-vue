<template>
	<div class="lv-form-group" :class="{'error': validation.$invalid && validation.$dirty,
		'valid': !validation.$invalid && validation.$dirty }">
		<label v-if="label">
			{{ label }}
			<span v-if="validation.required || validation.requiredIf">*</span> :
		</label>
		<slot />
		<div class="invalid-feedback" v-for="(err, i) in validation.$errors" :key="i">
			<div>
				{{ err.$message }}
			</div>
		</div>
	</div>
</template>
<script setup>
import { defineProps } from 'vue'
const props = defineProps({
	validation : {
		type     : Object,
		required : false,
		default() {
			return {}
		}
	},
	label : {
		type     : String,
		required : false,
		default  : null
	},
	invalidFeedback : {
		type     : String,
		required : false,
		default  : ''
	}
})

</script>
<style scoped>
label {
	display: flex;
	margin-bottom: 0.5rem;
}
.invalid-feedback,
.description {
	margin-top: 0.25rem;
	font-weight: lighter;
	font-size: 80%;
	display: none;
}
</style>