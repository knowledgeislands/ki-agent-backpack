# MCP shared-code inventory, 24 September 2026

A dated finding, not a rule: the read-only inventory of shared utility code across the MCP servers that the [MCP shared-code standard](standard-mcp-shared-code.md) rests on, with what it concluded and its repository matrix, as they stood on 24 September 2026. It is not kept current; a later inventory replaces it, and it names repositories as they were then, the Notion mirror among them, deleted on 26 October 2026. It moved out of the standard on 19 November 2026 under MCP-INVENTORY.

## 1. Inventory scope

This report records the 2026-09-24 read-only inventory of every repository that declares both `ki-engineering` and `ki-repo-mcp`. It classifies shared utility candidates before any canonical asset or receiver migration is chosen.

The inventory compared physical file digests, exports, SDK package family, colocated utility tests, imports, and behaviour-bearing differences. A matching filename or similar control flow is not evidence that two files have the same ownership or privacy contract.

## 2. Conclusions

- `access-level.ts` contains one stable algorithm but two SDK import profiles. Three modern repositories are byte-identical; two legacy housekeeping repositories are byte-identical. The remaining files differ mostly in comments, type aliases, or wrapper shape, except the WhatsApp variant's older SDK boundary.
- Every `annotations.ts` is byte-distinct because each server exposes a different capability set. The stable reusable concept is a complete preset vocabulary, not the current per-repository file bytes.
- Every `audit-log.ts` is byte-distinct. Rotation and callback wrapping are shared, while server identity, argument redaction, maximum preview length, and error extraction carry repository-specific security behaviour. A managed audit engine therefore needs an explicit repository-owned sanitizer seam; copying a majority file would be unsafe.
- Seven repositories have `results.ts`. ChatGPT and Codex housekeeping are byte-identical. Git Audit and Notion Mirror differ only in export order. Other differences are explainable by SDK result profile, text-result support, and domain error-envelope needs.
- `mcp-housekeeping-claude` and `mcp-acquire-whatsapp` currently construct results elsewhere. A profile must not create a new helper until its consumers are deliberately migrated.

## 3. Exact-copy clusters

| Surface | Exact current cluster | Classification |
| ------- | --------------------- | -------------- |
| Access gate | `mcp-gsuite`, `mcp-ki-kb-fs`, `mcp-m365` | Modern v2 candidate |
| Access gate | `mcp-housekeeping-chatgpt` | Legacy v1 candidate |
| Results | `mcp-housekeeping-chatgpt` | Legacy result candidate |
| Annotations | None | Capability variants |
| Audit log | None | Shared engine plus local security seam required |

## 4. Repository matrix

| Repository | SDK | Utility tests | Current classification | Receiver disposition |
| ---------- | --- | ------------: | ---------------------- | -------------------- |
| `mcp-acquire-whatsapp` | v1 | 3 | Legacy access variant; unique acquisition annotations and privacy redaction; no result helper | Keep repository-specific until legacy profile and sanitizer seam are proven |
| `mcp-git-audit` | v2 | 6 | Modern access near-match; full preset vocabulary; Git URL redaction; modern result helper | Candidate for modern profile pilot after asset fixtures pass |
| `mcp-gsuite` | v2 | 5 | Exact modern access cluster; remote annotations; mail/body redaction; text plus modern results | Candidate after local mail sanitizer seam is explicit |
| `mcp-housekeeping-chatgpt` | v1 | 4 | Exact legacy access and result clusters; read-only annotations; host-specific audit redaction | Existing host-configuration warning remains owned locally; profile migration separate |
| `mcp-housekeeping-claude` | v2 | 4 | Modern access near-match; destructive local annotations; host audit redaction; no result helper | Do not create result helper speculatively |
| `mcp-ki-kb-fs` | v2 | 4 | Exact modern access cluster; local read/write annotations; KB-path redaction; extended results | Candidate after local KB sanitizer and result extensions are explicit |
| `mcp-m365` | v2 | 7 | Exact modern access cluster; broad remote annotations; mail/body redaction; extended results | Candidate after local mail sanitizer and result extensions are explicit |
