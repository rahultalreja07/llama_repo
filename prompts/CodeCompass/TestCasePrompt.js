const codeUnitTestCasesPrompt = (userInput) => `
You are a principal software engineer, We are building a quality software product, Based on the code provided as an input, you need to write the unit test cases by following popular unit teting guidelines and frameworks.
You Code input is following:
---
${userInput}
---
You need to share response stickily in a structured format as below where Headings starting with '#~' strictly
#~Heading:Code Analysis
<Numbered Bullet points around your observations, analysis of the code pertaining to unit testing and best practices etc>

#~Heading:Unit Test
<This section only needs to contain unit test code strictly and no bullet points>
`
export default codeUnitTestCasesPrompt;