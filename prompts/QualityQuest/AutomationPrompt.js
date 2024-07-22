const codeAutomationTestPrompt = (userInput) => `
You are an expert QA automation engineer, We are building a quality software product, Based on the developer's code provided as an input, you need to write the automation test cases by following popular automation guidelines,
For UI automation you can use some dummy selectors and write testcases preferably using knightwatch js and for c# or any other server side language provided as input, prefer selenium as your target automation:

You Code input is following:
---
${userInput}
---

You need to share response stickily in a structured format as below where Headings starting with '#~' strictly
#~Heading:Code Analysis
<Numbered Bullet points around your observations, analysis of the code pertaining to automation, and best practices etc>

#~Heading:Automation Code
<This section only needs to contain Automation code strictly and no bullet points>
`
export default codeAutomationTestPrompt;