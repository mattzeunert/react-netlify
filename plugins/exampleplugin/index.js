function netlifyPlugin(conf) {
    return {
        // Hook into lifecycle
        onEnd: function () {
            console.log("site build finished, site deployed! 🚀", arguments)
        }
    }
}

module.exports = netlifyPlugin