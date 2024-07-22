const sentimentsPrompt = (transcript) => `
Assume the role of a sentiment analyst. You're given a transcript of a conversation or meeting. Analyze it to determine the overall mood and sentiments of the participants.
The conversation transcript:
---
${transcript}
---
Please follow this structured format for your response, with headings starting with '#~':

#~Heading:Overall Sentiment
<Describe the general mood or sentiment of the conversation>

#~Heading:Sentiment by Participant
<Break down the sentiment for each key participant>

`
export default sentimentsPrompt;
