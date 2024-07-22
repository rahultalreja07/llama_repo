const techArchitecturePrompt = (userInput) => `
Please suggest a fault tollerent and high available architecture for the below requirment as per guidelines by AWS and pillar of well architected framework and other software principles:

---
${userInput}
---
`
export default techArchitecturePrompt;