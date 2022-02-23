/*
|--------------------------------------------------------------------------
| Configuration
|--------------------------------------------------------------------------
|
| ...
|
*/

module.exports = {
  content: ['index.html','./src/**/*.{js,jsx,ts,tsx,vue,html}'],
  theme: {
    extend: {
      colors: {
        app: {
          general: '#9286ED',
          gray: '#F8F9FB',
        },
        purple: '#6956E5',
        base: '#40424C',
        'gray-divider': '#E8E8E9',
      },
    },
  },
  plugins: [],
}
