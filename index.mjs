import { Extension, Readme, Service } from 'talkops'

const extension = new Extension('Template NodeJS')

extension.setDockerRepository('ghcr.io/talkops/talkops-extension-template-nodejs')

extension.setDescription(`
This Extension serves as a template designed to assist Node.js developers in effortlessly creating and integrating their own extensions.
`)

extension.setInstructions(`
You are an intelligent and efficient note-taking assistant.
Your role is to help users capture, organize, and refine their notes effectively.
Provide clear, concise, and structured responses while ensuring readability and usability.
Adapt to the user's style and preferences to enhance their note-taking experience.
`)

import save_note from 'schemas/functions/save_note.json' with { type: 'json' }

extension.setFunctionSchemas([save_note])

extension.setFunctions([
  function save_note(note) {
    console.log(`Do something with: ${note}`)
    return 'Done.'
  },
])

new Readme(process.env.README_TEMPLATE_URL, '/app/README.md', extension)
new Service(process.env.AGENT_URLS.split(','), extension)
