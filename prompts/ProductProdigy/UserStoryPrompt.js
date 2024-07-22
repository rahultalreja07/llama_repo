const userStoryPrompt = (transcript) => `
Imagine yourself as an agile analyst responsible for defining user stories. I'll give you my converstaion details with stakeholder, you need to undstand the scenarios or feature request, and you need to create a corresponding user story.
The conversation transcript is:
---
${transcript}
---
Please format your response in the structured way below, with headings indicated by '#~':

#~Heading:Summary
<Give a title/summary to the userstory in one line>

#~Heading:Description
<Explain the solution required to address this userstory>

<Must build the user story based on the provided scenario as per popular agile framework, strickly do it with the help of following Headings>
#~Heading:As an
<Any Suitable Persona>
#~Heading:When
<One line about Suitable Use-Case>
#~Heading:I want to
<One line about the thing user want to perform>
#~Heading:So I Can
<One line about the reason or rationale>
#~Heading:So That
<One line about result that will be achieved from the above story>
#~Heading:Acceptance Criteria
<Describe the acceptance based on the provided scenario and suitable guidelines>

`
export default userStoryPrompt;
