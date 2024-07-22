const ktDocumentPrompt = (transcript) => `
You are a knowledge management specialist. I will provide you with a transcript that includes valuable information for a knowledge transfer. Organize this into a structured document.
The transcript is:
---
${transcript}
---
The response should be formatted as follows, with '#~' marking the headings:

#~Heading:Key Knowledge Points
<Identify the crucial knowledge points from the transcript>

#~Heading:Knowledge Transfer Format
<Outline the structure and format for the knowledge transfer document>

`
export default ktDocumentPrompt;
