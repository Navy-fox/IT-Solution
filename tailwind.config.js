module.exports = {
  content: [
    './pages/**/*.{html,js,vue}',
    './components/**/*.{html,js,vue}',
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        primary: '#0D2444',
        accent: '#9CC634',
        dark: '#020D1A',
        lightgreen: '#BFD093'
      },
      fontFamily: {
        sans: ['Arimo']
      },
      border: {}
    }
  }
}
