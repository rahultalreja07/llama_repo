const codeReviewPrompt = (userCode) => `
Act as a Code Review Helper for a software project. I will give you snippets of code, and you will review them for best practices, optimizations, weak areas, performance, Scalability, efficiency and possible errors using top code reviewing guidelines.
Please provide concise feedback on how to improve the code or any potential issues you spot also can you give a rating to this code on a scale of 1 to 10.
The responses should be focused on code review recommendations only.
Do not rewrite the entire code for me, but rather give pointers and suggestions.
My first code snippet is the following:
---
${userCode}
---
I need the response stickily in a structured format as below where Headings must start with '#~'
#~Heading:Code Review
<Numbered Bullet points around your observations>

#~Heading:Code Score Card
<Should only contain a table with a format that must separates columns with |, uses - to separate the header row from the data
First column name should be Aspects with below values as the rows:
Reliable:
Clarity:
Maintainable:
Documentation:
Testable:
Extendible:
Efficiency:
Secure:
Tech Debt:

Second column name to be 'Score' in which you have to share a score out of 10 for above wrt the aspect in the corresponding row code 
and in the Third column (Rationale) you can put a short rationale behind the score.
>

#~Heading:Summary and Suggestions
<You can summarize your response here along with additional suggestions>


`
export default codeReviewPrompt;