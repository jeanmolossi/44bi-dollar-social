module.exports = {
    plugins: [
        require('tailwindcss'),
        require('postcss-import'),
        require('autoprefixer'),
        require('cssnano')({ preset: 'default' }),
    ]
}