// Define a function called introduction that takes a parameter called name
// Return the phrase: "Hi, my name is [name]."
function introduction(name) {
    return `Hi, my name is ${name}.`;
  }
  
  // Define a function named introductionWithLanguage
  // It should have two parameters: name and language
  // Return the phrase: "Hi, my name is [name] and I am learning to program in [language]."
  function introductionWithLanguage(name, language) {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  
  // Copy the function you created for the second part and name it introductionWithLanguageOptional
  // It should have two parameters: name and language
  // The language parameter should have a default value of "JavaScript"
  // Return the phrase: "Hi, my name is [name] and I am learning to program in [language]."
  function introductionWithLanguageOptional(name, language = "JavaScript") {
    return `Hi, my name is ${name} and I am learning to program in ${language}.`;
  }
  