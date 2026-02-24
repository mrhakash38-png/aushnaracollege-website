# Contact Submission Mode
## Updated: 2026-02-24

---

## Decision

- Current production default: `mailto` fallback is acceptable.
- `VITE_CONTACT_ENDPOINT` remains optional.

---

## Contract

- If `VITE_CONTACT_ENDPOINT` is set:
  - Frontend sends `POST` JSON payload.
  - Endpoint must return `2xx` for success.
  - Non-`2xx` is treated as submission failure.
- If `VITE_CONTACT_ENDPOINT` is unset:
  - Frontend redirects to `mailto:` using admissions email.

---

## Payload Shape

```json
{
  "name": "string",
  "email": "string",
  "phone": "string",
  "subject": "string",
  "message": "string",
  "source": "website-contact-form",
  "submittedAt": "ISO-8601 string"
}
```

---

## Validation Checklist

1. Without endpoint env: submit form and confirm mail client opens.
2. With endpoint env: submit form and confirm `2xx` response path.
3. With endpoint env + forced error: confirm error handling path.
