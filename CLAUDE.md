# Context for Claude Code Sessions

This file contains important context for Claude Code to remember across sessions when working on the devops-automation repository.

## SDLC Controls Framework Working Group

### Overview
The SDLC Controls Framework initiative is establishing a shared, open reference library for software governance controls within the financial services industry. This addresses systemic inefficiencies where each institution independently develops and maintains SDLC controls, resulting in duplication, drift, and fragmentation.

### Key Resources

#### Primary Repository
- **Main Repo**: https://github.com/finos-labs/SDLC-Controls-Framework
- Contains all control definitions, documentation, and reference implementations
- Licensed under Creative Commons Attribution 4.0 International (CC-BY-4.0)

#### DevOps Automation Repo
- **Main Repo**: https://github.com/finos/devops-automation
- Contains meeting announcements and working group documentation
- Documentation site at: docs/working-groups/sdlc.mdx

#### Key Issues

**Issue #261** (finos/devops-automation)
- Title: "Proposal: Software Development Lifecycle Common Controls Catalogue Framework"
- Contains the original proposal and roadmap
- URL: https://github.com/finos/devops-automation/issues/261
- Status: Approved by majority vote
- Workshop: Scheduled for September 22, 2025

**SDLC Controls Framework Issues** (finos-labs/SDLC-Controls-Framework)
- Issue #15: Proposal to rename project to SDLC³
- Issue #9: Update README with logistics
- Issue #8: Fix gh_pages site
- Issue #6: Site logo
- Issue #4: Getting Started - Landing Page
- Issue #2: FINOS All Community Call prep

### Key Maintainers
- Aaron Searle (Morgan Stanley)
- Mike Long (Kosli)
- Toby Weston (Deutsche Bank)
- Contributors from: Kosli, ControlPlane, GitLab

### Project Objectives
1. Establish unified terminology for software controls
2. Provide reference implementations and examples
3. Enable cross-institutional collaboration
4. Reduce redundant work through reusability

### Target Audiences
- **Primary**: Platform engineers, control owners, auditors
- **Secondary**: Regulators, governance software vendors, compliance teams

### Roadmap

**Short-term (0-6 months)**
- Repository infrastructure and governance
- Define core taxonomy and standardized language
- Develop project website and documentation
- Onboard contributors and establish working group processes

**Medium-term (6-12 months)**
- Populate core control domains (peer review, change management, access control)
- Expand to advanced controls and emerging practices
- Map controls to regulatory standards and frameworks
- Build reference implementations and examples

### Meeting Structure
- **Cadence**: Bi-weekly meetings
- **Calendar**: Available on [FINOS Community Calendar](https://calendar.google.com/calendar/u/0/embed?src=finos.org_fac8mo1rfc6ehscg0d80fi8jig@group.calendar.google.com)
- Announcements via GitHub issues in finos/devops-automation
- Meeting notes added as comments to announcement issues
- Format: Open discussion focused on:
  - [inform] - Informing the group
  - [ideation] - Brainstorming and divergent thinking
  - [analysis] - Critical review and feedback
  - [quest] - Seeking information and answers
- Recent meeting issues: #273 (Oct 13), #271 (Sep 29), #269 (Sep 15), #267 (Aug 18 - KICKOFF)

## Recent Changes

### Migration from ACM to SDLC
- Renamed `docs/working-groups/acm.mdx` to `docs/working-groups/sdlc.mdx`
- Updated `website/src/components/featuresTwo-config.js` to reference SDLC instead of ACM
- Removed lean coffee references from documentation
- Updated content to focus on SDLC Controls Framework instead of Automated Change Management

## Documentation Site Structure
- Built with Docusaurus
- Working group pages located in: `docs/working-groups/`
- Component configuration: `website/src/components/`
