const {DebugBear} = require('debugbear');

const {
    DEBUGBEAR_API_KEY,
    DEBUGBEAR_PAGE_IDS,
    COMMIT_REF
} = process.env


module.exports = {
    async onSuccess() {
        try {
            console.log("ENV", process.env)
            console.log("site build finished, site deployed! 🚀", arguments)

            const dbb = new DebugBear(DEBUGBEAR_API_KEY)
            const pageIds = DEBUGBEAR_PAGE_IDS.split(",")

            // await Promise.all(pageIds.map(pageId => {
            //     dbb.pages.analyze(pageId)
            // }))

            console.log("Running DebugBear tests")
        } catch (error) {
            return failBuild('DebugBear tests failed', { error })
        }
    }
}
