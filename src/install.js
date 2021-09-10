import { FormGroup } from './components/'
export default {
	async install(Vue, variable) {
		Vue.component('lv-form-group', FormGroup)
	}
}