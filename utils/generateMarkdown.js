function renderLicensesBadge(license) {
    if (license === "None") {
        return ""
    }else if (license === "MIT License") {
        return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)"
    }else if (license === "Apache 2.0 License") {
        return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)"
    }else if (license === "Boost License") {
        return "[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)"
   
}

}

function renderLicenseLink(license) {
    if (license === "None") {
        return ""
    }else if (license === "MIT License") {
        return "https://opensource.org/licenses/MIT"
    }else if (license === "Apache License 2.0") {
        return "https://opensource.org/licenses/Apache-2.0"
    }else if (license === "Boost License") {
        return "https://www.boost.org/LICENSE_1_0.txt"
    }
}


function generateMarkdown(data) {
    const badge = renderLicensesBadge(data.license)
    const link = renderLicenseLink(data.license)
    
    return `
    ${badge}
    # ${data.title}
    
    ## Description
    ${response.description}

    ## Table of Contents
    1. [Installation](#installation)
    2. [Usage](#usage)
    3. [Contributing](#contributing)
    4. [License](#license)
    5. [Tests](#tests)
    6. [Questions](#questions)

    ## Installation 
    ${data.install}
    
    ## Usage 
    ${data.usage}

    ## Contributing 
    ${data.contributing}

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












