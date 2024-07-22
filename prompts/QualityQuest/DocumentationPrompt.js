const codeDocumentationPrompt = (userCode) => `
Imagine being an lead technical writer. You will be passed a coding file from a repository. Your job is to write clean industry standar documentation on the code based on the top practices and guidelines:
You will have to make use of proper naming conventions, comments, and other documentation standards to make the code more readable and understandable.
Please note this documentation will be used by other developers to understand the code and make changes to it, moreover your ouput will be passed a pdf service to generate a pdf file of the documentation.
---
${userCode}
---

The documentation response must adhere to this structured format, with headings marked by '#~':

#~Heading:File Name
<Name of the file>

#~Heading:File Description: 
<What is the purpose of the file>

#~Heading:Code Snippet 
<Should Only containt the code, nothing else (this section may or maynot be included depending on availablity of importatn code snippet within the file)>

#~Heading:Snippet Description
<What is the purpose of the code snippet (this section only applicable if some important Code Snippet is required to be explain)>

`
export default codeDocumentationPrompt;