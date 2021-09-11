import { FormGroup, Button, Spinner } from './components/'
export default {
	async install(Vue) {
		Vue.component('lv-spinner', Spinner)
		Vue.component('lv-button', Button)
		Vue.component('lv-form-group', FormGroup)
	}
}