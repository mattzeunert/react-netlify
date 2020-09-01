function netlifyPlugin(conf) {
    return {
        // Hook into lifecycle
        onEnd: function () {
            console.log("ENV", process.env)
            console.log("site build finished, site deployed! 🚀", arguments)
        }
    }
}

module.exports = netlifyPlugin