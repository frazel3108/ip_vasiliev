const sass = require("gulp-sass")(require("sass"));

const scss = () => {
    return $.gulp.src($.path.scss.src, {sourceMap: $.app.isDev})
        .pipe($.gp.sassGlob())
        .pipe(sass())
        .pipe($.gp.webpCss())
        .pipe($.gp.autoprefixer(
            {
                cascade: $.app.isDev,
                grid: "autoplace"
            }))
        .pipe($.gp.shorthand())
        .pipe($.gp.groupCssMediaQueries())
        .pipe($.gp.size({title: "main.css"}))
        .pipe($.gulp.dest($.path.scss.dest, {sourceMap: $.app.isDev}))
        .pipe($.gp.rename({
            suffix: ".min"
        }))
        .pipe($.gp.csso())
        .pipe($.gp.size({title: "main.min.css"}))
        .pipe($.gulp.dest($.path.css.dest, {sourceMap: $.app.isDev}))
        .pipe($.browserSync.stream())
}

module.exports = scss;