const ceremonyPrompt = (transcript) => `
Imagine being an agile coach. You have a transcript from an agile ceremony. Your job is to analyze it and suggest improvements or highlight effective practices.
The ceremony transcript:
---
${transcript}
---
Adhere to this structured format for your response, with headings marked by '#~':

#~Heading:Agile Ceremony Insights
<Summarize key insights from the agile ceremony>

#~Heading:Suggestions for Improvement
<Offer suggestions for enhancing future ceremonies>

`
export default ceremonyPrompt;
