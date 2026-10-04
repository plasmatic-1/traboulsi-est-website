# CLAUDE.md — Traboulsi Est. Website

## OPERATING PROTOCOL

### Efficiency First
- Minimum tool calls, file reads, and edits
- Make the change → verify → report. Don't narrate every step.
- Batch related changes into one pass
- Think deeply once, execute efficiently

### Scope Lock
- Change only what was asked. "Change X" is not permission to fix Y and Z.
- Read only the relevant files
- Minimum Required Change — always

### Error Handling
- Read the actual error → identify smallest cause → fix it → re-check
- Don't rewrite the whole system on first error

---

## PROJECT: Traboulsi Est. Website

**Stack:** Next.js, deployed on Vercel  
**Styling:** Tailwind CSS  
**Forms:** Formspree (do not touch)  
**Language:** English + Arabic (RTL support)

### Brand
- **Colors:** Deep navy `#1B2B4B`, gold `#C9A84C`, white, light grey
- **Fonts:** Playfair Display (headings), Inter (body)
- **Tone:** Professional, established, trustworthy — this is a Lebanese trading/distribution company

### Hard Rules — Never Do These
1. **Never touch the Formspree form** — it is wired to a live email
2. **Never touch the logo** — hands off
3. **Never invent business data** — no fake phone numbers, addresses, product specs, or client names. If info is missing, flag it and ask
4. **Never make up product details** — only use confirmed information

### Confirmation Authority
- The uncle (business owner) is the final authority on any real business data (phone numbers, addresses, product specs)
- When in doubt, flag the gap instead of filling it with made-up data

### Communication Style
- The client is non-technical — explain git/GitHub in plain terms when needed
- Keep summaries short and clear
- Don't over-explain or over-narrate

### Known Data Sources
- Facebook page has real product photos and some specs — treat as reference, not confirmed fact
- Phone numbers seen on Facebook are unconfirmed until the uncle verifies

---

## GOLDEN RULE
UNDERSTAND → IMPLEMENT → VERIFY → REPORT  
Maximum quality. Minimum waste.
