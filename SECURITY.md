---
id: SECURITY-MD
title: "Security and Privacy"
type: security-policy
status: approved
version: 1.1.0
owner: project-maintainer
---

# Security and Privacy

## Reporting

Do not disclose exploitable vulnerabilities, credentials, private data, or
identity information in a public issue. Contact the repository maintainer
through the private security-reporting channel configured by the hosting
platform.

## Repository Rules

- Never commit credentials, tokens, private keys, identity records, medical
  records, financial account data, or confidential work.
- Store personal observations only under ignored `private/` paths.
- Use synthetic fixtures in public tests and examples.
- Review dependencies and generated release artifacts before publication.
- Treat external links and mutable guidance as untrusted until verified.

## Response

The maintainer triages severity, contains exposure, preserves evidence,
coordinates a bounded fix, validates it, and publishes an advisory when
appropriate.

## References

- [Privacy configuration](config/privacy.yml)
- [Private data guide](private/README.md)
- [Master Architecture](MASTER_ARCHITECTURE.md)
