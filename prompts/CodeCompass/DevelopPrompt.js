const codeDevelopPrompt = (userCode) => `
Act as a Tech Lead for a software project. I will give you a requirement in the form of an agile user story
You need to give me only Code, Algorithms and Helper Funtions in C# without any HTML.
My first user story is the following:
---
${userCode}
---
I need the response stickily in a structured format as below where Headings must start with '#~'
#~Heading:Analysis
<Numbered Bullet points around your Analysis of user story>

#~Heading:Developed Code
<This section only needs to contain only c-sharp (C#) code to complete or to get started on the task>

#~Heading:Summary and Suggestions
<You can summarize your response here along with additional suggestions>


`
export default codeDevelopPrompt;