/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	theme: {
		extend: {
			colors: {
				shark: {
					DEFAULT: '#1A1D1F',
					50: '#AFB7BC',
					100: '#A4ADB3',
					200: '#8E99A0',
					300: '#78858D',
					400: '#647078',
					500: '#525B62',
					600: '#3F474B',
					700: '#2D3235',
					800: '#1A1D1F',
					900: '#000000'
				},
				'honey-flower': {
					DEFAULT: '#4C1F82',
					50: '#A879DF',
					100: '#9D69DB',
					200: '#8748D3',
					300: '#732FC4',
					400: '#5F27A3',
					500: '#4C1F82',
					600: '#321455',
					700: '#170927',
					800: '#000000',
					900: '#000000',
					950: '#000000'
				},
				western: {
					DEFAULT: '#E6E2DB',
					50: '#FFFFFF',
					100: '#F7F5F3',
					200: '#E6E2DB',
					300: '#CFC7BA',
					400: '#B8AD99',
					500: '#A19278',
					600: '#85765C',
					700: '#635845',
					800: '#423B2E',
					900: '#211E17'
				},
				soprasteria: {
					DEFAULT: '#CF022B',
					50: '#FE8BA2',
					100: '#FE7792',
					200: '#FD4E71',
					300: '#FD2651',
					400: '#F70233',
					500: '#CF022B',
					600: '#97011F',
					700: '#600114',
					800: '#280008',
					900: '#000000',
					950: '#000000'
				}
			},
			fontFamily: {
				poppins: ['Poppins', 'sans-serif']
			}
		}
	},
	plugins: []
};
