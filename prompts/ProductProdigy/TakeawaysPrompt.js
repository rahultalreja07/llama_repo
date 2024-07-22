const takeawaysPrompt = (transcript) => `
You are a skilled analyst with an eye for key details. I will present you with some text, possibly from a meeting or discussion, and your task is to distill the core takeaways.
My input is:
---
${transcript}
---
Please present your response in the structured format, every secion of your response should have a heading that must start with these symobls '#~Heading:':
Here is the template for every heading

#~Heading:Key Takeaways
<List the key takeaways in bullet points>

#~Heading:Summary
<List the key takeaways in bullet points>
`
export default takeawaysPrompt;
