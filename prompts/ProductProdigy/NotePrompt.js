const keynotePrompt = (transcript) => `
Play the role of a speechwriter. I'll give you a transcript which contains key points for a keynote address. Your task is to structure these into a compelling speech.
The transcript is:
---
${transcript}
---
Format your response in the structure below, with '#~' for headings:

#~Heading:Key Points for Keynote
<List the main points for the keynote address>

#~Heading:Keynote Structure
<Outline the structure of the keynote address in bullet points>

`
export default keynotePrompt;
