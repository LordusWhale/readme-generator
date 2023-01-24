const { liscenseBadges, liscenseBoilerPlate } = require("./liscenseTypes");

function licenseRender(liscense) {
  function renderBadge() {
    if (!liscenseBadges[liscense]) return "";
    return liscenseBadges[liscense];
  }
  function renderLink() {}
  function renderSection() {
    if (!liscenseBoilerPlate[liscense]) return "";
    return liscenseBoilerPlate[liscense];
  }

  return { renderBadge, renderLink, renderSection };
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    testing,
    liscense,
  } = data;
  const liscenceRenderer = licenseRender(liscense);
  return `# ${title}
${liscense && liscenceRenderer.renderBadge()}
${description && `## Description
${installation}`}

${installation && `## Installation
${usage}`}

${usage && `## Usage
${contributing}`}

${contributing && `## Contributing
${testing}`}

${testing && `## Testing
${testing}`}

${liscense && `## Liscense
${liscenceRenderer.renderSection()}`}
`;
}

module.exports = generateMarkdown;
