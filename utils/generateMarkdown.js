const { licenceBadges, licenceBoilerPlate } = require("./liscenseTypes");


// Liscense renderer

function licenceRender(licence) {
  function renderBadge() {
    if (!licenceBadges[licence]) return "";
    return licenceBadges[licence];
  }
  function renderSection() {
    if (!licenceBoilerPlate[licence]) return "";
    return licenceBoilerPlate[licence];
  }

  return { renderBadge, renderSection };
}
// Generating markdown text with supplied data
function generateMarkdown(data) {
  const {
    title,
    description,
    installation,
    usage,
    contributing,
    testing,
    licence,
    github,
    email
  } = data;
  const licenceRenderer = licenceRender(licence);
  return `# ${title}
${licence && licenceRenderer.renderBadge()}
${description && `## **Description**
${installation}`}

## **Table of contents**
${installation && `- [Installation](#installation)`}
${usage && `- [usage](#usage)`}
${contributing && `- [Contributing](#contributing)`}
${testing && `- [Testing](#testing)`}
${licence && `- [Licence](#licence)`}
- [Questions](#questions)

${installation && `## **Installation**
${usage}`}

${usage && `## **Usage**
${contributing}`}

${contributing && `## **Contributing**
${testing}`}

${testing && `## **Testing**
${testing}`}

${licence && `## **Licence**
${licenceRenderer.renderSection()}`}

## **Questions**
To reach out and ask questions please contact me through github or email
<ol>
  ${github && `<li>Github: <a href=${`https://github.com/${github}`}>${github}</a></li>`}
  ${email && `<li>Email: <a href=${`mailto:${email}`}>${email}</a></li>`}
</ol>
`
}

module.exports = generateMarkdown;
