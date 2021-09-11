import hexToHsl from 'hex-to-hsl'
const setRgbaColors = () => {
	const root = document.querySelector(':root')
	const colorNames = ['primary', 'white', 'gray']
	colorNames.forEach(e => {
		const hexColor = getComputedStyle(root).getPropertyValue('--' + e).replace(' ', '')
		const [h, s, l] = hexToHsl(hexColor)
		root.style.setProperty(`--${e}-light`, `hsla(${h},${s}%,${l+15}%, 1)`)
		root.style.setProperty(`--${e}-dark`, `hsla(${h},${s}%,${l-15}%, 1)`)
		root.style.setProperty(`--${e}-opacity-25`, `hsla(${h},${s}%,${l}%, 0.25)`)
	})
}
export default setRgbaColors