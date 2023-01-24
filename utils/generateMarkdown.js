const { licenceBadges, licenceBoilerPlate } = require("./liscenseTypes");

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
    github,
    email
  } = data;
  const licenceRenderer = licenceRender(liscense);
  return `# ${title}
${liscense && licenceRenderer.renderBadge()}
${description && `## **Description**
${installation}`}

${installation && `## **Installation**
${usage}`}

${usage && `## **Usage**
${contributing}`}

${contributing && `## **Contributing**
${testing}`}

${testing && `## **Testing**
${testing}`}

${liscense && `## **Liscense**
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
