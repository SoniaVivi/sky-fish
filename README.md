**Sky Fish**

A browser extension to retrieve manga description and tags from title

**Installing as user**

Download from releases, extract the archive, then either:

Double click the extracted .xpi to open and add to Firefox

--- or ---

Go to Add-ons and Themes in Firefox -> Install Add-on From File -> select the .xpi in Firefox

**Installing as developer**

To install, clone repository then run `npm install`

To run in a browser run `npx webpack` then `web-ext run`

To generate styles for config run `sass src/config.scss dist/config/config.css`


**Signing**

To sign extension run `web-ext sign --api-key [api-key/JWT issuer] --api-secret [api-secret/JWT secret] --no-config-discovery --ignore-files src/*`
