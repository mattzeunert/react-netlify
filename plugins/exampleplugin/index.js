const { DebugBear } = require('debugbear');

const {
    DEBUGBEAR_API_KEY,
    DEBUGBEAR_PAGE_IDS,
    COMMIT_REF,
    HEAD,
    PULL_REQUEST,
    DEPLOY_URL, URL
} = process.env


module.exports = {
    async onSuccess() {

        console.log("ENV", process.env)
        console.log("site build finished, site deployed! 🚀", arguments)

        const dbb = new DebugBear(DEBUGBEAR_API_KEY)
        const pageIds = DEBUGBEAR_PAGE_IDS.split(",")

        await Promise.all(pageIds.map(pageId => {
            dbb.pages.analyze(pageId, {
                commitHash: COMMIT_REF,
                commitBranch: HEAD,
                baseUrl: PULL_REQUEST === "true" ? DEPLOY_URL : URL,
                channel: "netlify"
            })
        }))

        // later; make sure it works w/o dbb installed in root npm adsfd

        console.log("Running DebugBear tests")

    }
}