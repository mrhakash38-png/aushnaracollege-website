import { CONTACT_INFO } from '../config/siteContent'

function buildMailtoUrl(formData, recipient) {
  const subject = encodeURIComponent(`[Website Inquiry] ${formData.subject || 'General Inquiry'}`)
  const body = encodeURIComponent(
    [
      `Name: ${formData.name}`,
      `Email: ${formData.email}`,
      `Phone: ${formData.phone || 'Not provided'}`,
      `Subject: ${formData.subject}`,
      '',
      'Message:',
      formData.message,
      '',
      `Submitted At: ${new Date().toISOString()}`,
      'Source: website-contact-form'
    ].join('\n')
  )

  return `mailto:${recipient}?subject=${subject}&body=${body}`
}

export async function submitContactForm(formData) {
  const endpoint = import.meta.env.VITE_CONTACT_ENDPOINT
  const payload = {
    ...formData,
    source: 'website-contact-form',
    submittedAt: new Date().toISOString()
  }

  if (endpoint) {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(payload)
    })

    if (!response.ok) {
      throw new Error(`Contact endpoint returned ${response.status}`)
    }

    return { mode: 'api' }
  }

  const mailtoUrl = buildMailtoUrl(formData, CONTACT_INFO.admissionsEmail)
  window.location.href = mailtoUrl
  return { mode: 'mailto' }
}

