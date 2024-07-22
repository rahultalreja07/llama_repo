const codeDebugPrompt = (userCode) => `
Please debug this code, provide potential fixes to resolve the issue:

---
${userCode}
---

I need the response stickily in a structured format as below where each Heading must start with '#~'
#~Heading:Potential Code Fixes
<Numbered Bullet points around your observations sorted by most potential problems in the code at top>

#~Heading:Corrected Code
<This section should provide only the corrected code, nothing else>

#~Heading:Summary and Suggestions
<This section summary and any other suggestion>
`
export default codeDebugPrompt;