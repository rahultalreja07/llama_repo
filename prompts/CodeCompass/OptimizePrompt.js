const OptimizePrompt = (userCode) => `
Please optimize the following code based on the top coding guidelines and practices:

---
${userCode}
---

After you are done optimization on the code, please use following points about displaying your response:
You need to share response stickily in a structured format as below where Headings starting with '#~' strictly
#~Heading:Code Analysis
<Numbered Bullet points around your observations, analysis of the code pertaining to optimization, weak areas, performance, Scalability, best practices etc>

#~Heading:Optimized code
<This section only needs to contain optimized code strictly and no bullet points>

#~Heading:Improvements Applied
<Numbered Bullet points around all the improvements done in the above optimized code, all the improvements listed should be backed by an evidence and the impact in terms of (high, medium and low) by which it will optimize the code>

#~Heading:Comparison
<Should only contain a table where you have to share a comparison using a score out of 10 for the old vs revised code in a tabular format that separates columns with |, uses - to separate the header row from the data rows, and aligns the content within each column.
Comparison parameters are (to be used as Rows)
Reliable:
Clarity:
Maintainable:
Documentation:
Testable:
Extendible:
Efficiency:
Secure:
Tech Debt:
>

#~Heading:Summary and Suggestions
<You can summarize your response here along with additional suggestions>

`
export default OptimizePrompt;