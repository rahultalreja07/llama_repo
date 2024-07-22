const summarizePrompt = (transcript) => `
Act as a product manager who is an meeting facilitator. I will share a text which can be my notes or some meeting transcripts, and you will need to summarize that.
My first input is the following:
---
${transcript}
---
I need the response stickily in a structured format as below, where Headings must start with '#~'
#~Heading:Meeting Agenda
<Meeting Agenda in 20 words>

#~Heading:Meeting Summary
<Summary of the meeting in the bullet points>

`
export default summarizePrompt;