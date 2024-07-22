const actionItemsPrompt = (transcript) => `
Assume the role of an efficient project coordinator. Here's some text for you, which could be notes or meeting transcripts. Your job is to identify and list the action items.
Here is the input:
---
${transcript}
---
Your response should strictly follow this structured format, using '#~' for headings:

#~Heading:Action Items
<Enumerate the action items identified from the text in bullet points>

`
export default actionItemsPrompt;
