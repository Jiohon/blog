/* eslint-disable @typescript-eslint/no-var-requires */
/* eslint-disable no-undef */
const fs = require("fs")
const path = require("path")

const pkgPath = path.resolve(__dirname, "../package.json")
const pkg = JSON.parse(fs.readFileSync(pkgPath, "utf-8"))

function bumpPatchVersion(version) {
  const semverRegex =
    /^(\d+)\.(\d+)\.(\d+)(?:-([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?(?:\+([0-9A-Za-z-]+(?:\.[0-9A-Za-z-]+)*))?$/

  const match = semverRegex.exec(version)
  if (!match) {
    console.error(`Invalid version format: ${version}`)
    process.exit(1)
  }

  let [_, major, minor, patch] = match
  patch = parseInt(patch) + 1
  return `${major}.${minor}.${patch}`
}

const newVersion = bumpPatchVersion(pkg.version)
pkg.version = newVersion

fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + "\n")
// eslint-disable-next-line no-console
console.log(`✔ Version bumped to ${newVersion}`)
