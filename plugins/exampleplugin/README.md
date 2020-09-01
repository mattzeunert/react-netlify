# DebugBear Netlify Build Plugin

This Build Plugin automatically tests each Netlify deployment with DebugBear.

You need a [DebugBear](https://www.debugbear.com) account to use this plugin.

todo: screenshot

## Setup

1. Install DebugBear Build Plugin

```npm i netlify-build-plugin-debugbear```

2. Add the plugin in your netlify.toml file:

[[plugins]]
package = "netlify-build-plugin-debugbear"

3. Set the DEBUGBEAR_API_KEY and DEBUGBEAR_PAGE_IDS environment variables

[Generate a DebugBear API key and find the ID of your pages](https://docs.netlify.com/configure-builds/environment-variables/).

Then set these variables in your Netlify build settings.

![](https://user-images.githubusercontent.com/1303660/91851003-6095e400-ec56-11ea-90e2-ccced761eddb.png)

asdf