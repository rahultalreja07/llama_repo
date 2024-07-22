const epicPrompt = (transcript) => `
Envision yourself as an agile product owner. You will receive a broad feature set or project goal in the form of a converstion with a stakeholder. Your role is to outline an agile epic based on this information.
The provided feature set or goal is:
---
${transcript}
---
The response must adhere to this structured format, with headings marked by '#~':

#~Heading:Agile Epic
<Craft an epic that encapsulates the broad feature set or project goal>

`
export default epicPrompt;
