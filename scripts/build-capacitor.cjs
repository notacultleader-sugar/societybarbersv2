const fs = require("fs");
const path = require("path");

const clientDir = path.join(__dirname, "..", "dist", "client");
const assetsDir = path.join(clientDir, "assets");

function findFile(pattern) {
  const files = fs.readdirSync(assetsDir);
  const match = files.find((f) => pattern.test(f));
  if (!match) throw new Error(`No asset matching ${pattern} found`);
  return `./assets/${match}`;
}

const indexJs = findFile(/^index-.*\.js$/);
const stylesCss = findFile(/^styles-.*\.css$/);

const html = `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1, viewport-fit=cover" />
    <meta name="theme-color" content="#0a0815" />
    <title>Society Barbers</title>
    <link rel="icon" type="image/png" href="./favicon.png" />
    <link rel="apple-touch-icon" href="./apple-touch-icon.png" />
    <link rel="manifest" href="./manifest.webmanifest" />
    <link rel="stylesheet" crossorigin href="${stylesCss}" />
  </head>
  <body>
    <div id="root"></div>
    <script type="module" crossorigin src="${indexJs}"></script>
  </body>
</html>
`;

fs.writeFileSync(path.join(clientDir, "index.html"), html);
console.log("Wrote dist/client/index.html");
