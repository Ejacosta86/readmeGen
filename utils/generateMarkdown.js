function renderLicensesBadge(license) {
    if (license === "MIT") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if (license === "Apache 2.0") {
        return "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if (license === "Boost") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"   
}

}
function renderLicenseSection(license){
    if (license === "") {
        return "N/A"
    } else {
        return license
    }
}

function renderLicenseLink(license) {
    if (license === "MIT") {
        return "https://opensource.org/licenses/MIT"
    }else if (license === "Apache 2.0") {
        return "https://opensource.org/license/apache-2-0"
    }else if (license === "Boost") {
        return "https://opensource.org/license/bsl-1-0"
    }
}


function generateMarkdown(data) {
    const badge = renderLicensesBadge(data.license)
    const link = renderLicenseLink(data.license)
    const licenseSection = renderLicenseSection(data.license)
    
    return `# ${data.title}
    ${badge}
   
    ## Description
    ${data.description}

    ## Table of Contents
    - [Installation](#installation)
    - [Usage](#usage)
    - [Contributing](#contributing)
    - [License](#license)
    - [Tests](#tests)
    - [Questions](#questions)

    ## Installation 
    ${data.install}
    
    ## Usage 
    ${data.usage}

    ## Contributing 
    ${data.contribution}

    ## License 
    ${licenseSection}
    ${link}

    ## Test
    ${data.test}

    ## Questions
    
    My GitHub is [${data.username}](https://github.com/${data.username}).
    If you have any further questions, you can email me at ${data.email}.
    
    `;     
}

    module.exports = generateMarkdown;












