const isProd = process.argv.includes("--prod");
const isDev = !process.argv.includes("--prod");

module.exports = {
    isProd: isProd,
    isDev: isDev,

    htmlmin: {
        collapseWhitespace: isProd
    },

    imagemin: {
        verbose: true
    },

    fonter: {
        formats:["ttf", "woff", "eot", "svg"]
    },
}