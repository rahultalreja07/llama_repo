const keyUpdatesPrompt = (transcript) => `
Act as a strategic analyst. I'm providing you with a transcript that includes several key updates from a meeting. Your task is to distill these into a coherent summary.
Here's the meeting transcript:
---
${transcript}
---
The response should be in the structured format below, with '#~' for headings:

#~Heading:Crucial Updates
<List the most important updates from the meeting>

#~Heading:Implications of Updates
<Discuss the potential implications or actions needed based on these updates>

`
export default keyUpdatesPrompt;
