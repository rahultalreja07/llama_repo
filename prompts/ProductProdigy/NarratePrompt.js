const narratePrompt = (transcript) => `
Play the role of a storyteller. You have a conversation transcript, and your task is to narrate the perspective of each participant, highlighting their views and contributions.
The conversation transcript:
---
${transcript}
---
Structure your response in the format below, with headings indicated by '#~':

#~Heading:Participant Perspectives
<Narrate the viewpoints and contributions of each participant>

#~Heading:Combined Narrative
<Weave together the individual narratives into a cohesive story>

`
export default narratePrompt;
