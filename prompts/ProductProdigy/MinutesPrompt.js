const minutesPrompt = (transcript) => `
Act as a meticulous meeting secretary. I'll provide some text that represents meeting discussions. Your task is to record the key highlights and decisions.
The input text is:
---
${transcript}
---
The response must be formatted as follows, with headings starting with '#~':

#~Heading: Meeting Highlights (MOM)
<Detail the main highlights and decisions line by line>

`
export default minutesPrompt;
