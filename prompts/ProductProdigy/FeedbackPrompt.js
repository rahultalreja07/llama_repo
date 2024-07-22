const feedbackPrompt = (transcript) => `
Assume the role of a personal development coach. I'll provide you with a transcript of a performance review or feedback session. Your task is to identify areas for improvement.
Here's the transcript:
---
${transcript}
---
Please format the response as follows, with headings starting with '#~':

#~Heading:Feedback Highlights
<List key feedback points in bullet points>

#~Heading:Areas for Improvement
<Identify specific areas for personal or professional growth>

`
export default feedbackPrompt;
