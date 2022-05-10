// Плагины
const svg4everybody = require('svg4everybody');

const js = () => {
    return $.gulp.src($.path.js.src, {sourceMap: $.app.isDev})
        .pipe($.gp.babel())
        .pipe($.gulp.dest($.path.js.dest, {sourceMap: $.app.isDev}))
        .pipe($.gp.uglify())
        .pipe($.browserSync.stream())
}

module.exports = js;