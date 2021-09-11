import { FormGroup, Button, Spinner } from './components/'
import setColors from './utils/color'
export default {
	install(Vue) {
		setColors()
		Vue.component('lv-spinner', Spinner)
		Vue.component('lv-button', Button)
		Vue.component('lv-form-group', FormGroup)
	}
}