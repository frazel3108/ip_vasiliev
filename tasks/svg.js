const svg = () => {
    return $.gulp.src($.path.img_svg.src)
        .pipe($.gp.svgmin({
            js2svg: {
                pretty: true
            }
        }))
        .pipe($.gp.cheerio({
            run: function ($) {
                $('[fill]').removeAttr('fill');
                $('[stroke]').removeAttr('stroke');
                $('[style]').removeAttr('style');
            },
            parserOptions: {xmlMode: true}
        }))
        .pipe($.gp.replace("&gt;",">"))
        .pipe($.gp.svgSprite({
            mode: {
                symbol: {
                    sprite: "../sprite.svg"
                }
            }
        }))
        .pipe($.gulp.dest($.path.img_svg.dest))
        .pipe($.browserSync.stream())
}

module.exports = svg;