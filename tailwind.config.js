module.exports = {
    purge: [
        './{src,templates}/**/*.{html,js,ts,tsx}',
    ],
    darkMode: false,
    theme: {
        extend: {
			colors: {
				'twitter': {
					100: '#f0f8ff',
					200: '#c6e2ff',
					300: '#7fdfff',
					400: '#00c6ff',
					500: '#00b5e3',
					600: '#0099c6',
					700: '#0080b1',
					800: '#006699',
					900: '#004d80',
				},
				'twitter-dark': {
					100: '#eff3f4',
					500: '#5b7083',
					600: '#536471',
				}
			}
		},
    },
    variants: {},
    plugins: [],
}
