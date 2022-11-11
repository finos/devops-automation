# How are banks orchestrating DevOps and the 'Glue' utilised to create existing self-service workflows?

## Description

This document has been created to gather notes regarding the 'Glue' and 'Self-Service Workflow Automation' that banking teams have produced to ensure proper controls are created and laid down to deliver software whilst adhering to internal banking policy.

This document can also include the existence of internal registry integrations where projects and namespaces have a known lifecycle and association with systems, CIDB, etc.

Individual tools that are selected, automated, and orchestrated will constantly change, but the integrations between these tools and internal systems could be an interesting problem to collaborate on, or at the very least, share approaches and learnings, etc.

## DevOps Automation Meeting Notes

Date and Time : Thursday 30th July @ 1pm ET / 6pm BST - https://github.com/finos/community/issues/52#issuecomment-669343645

- _Orchestration tools have been created but gluing them together is the interesting part. Tools out of the box also don't give metrics, so they need to be glued together to obtain._

- _It was added that self service is important so things can be setup in a secure and right way by the team. Self service in cloud is important, especially considering banking is wedded to approval mechanisms and raising multiple tickets for orders._

- _It was suggested an orchestration engine should be open sourced so external parties can integrate their tools. This way we reach a financial services unified voice. Open sourcing and comparing notes is a valuable conversation._

- _Also, self services gives the change frequency, regulatory compliance and security needed whilst being super important_

- _The group was asked, is there value having a whirlwind tour of people who represent their current pipeline orchestration over a call? The group agree there is value with many volunteers._

- _The group was also asked to add vulnerability scanning tools to the discussion topic list as group representatives don't want to roll their own solutions._

- _The group fed back that we might find many members are following the same principles of DevOps orchestration with some differences. If one bank leads, we can say whether we're the same or different._

- _The group would like to answer the question of where we've been forced to build bespoke DevOps orchestration solutions and therefore duplicating effort._

## Suggestion

We can start by mapping the various automation tools and their main categories. For example Infrastructure as code, configuration management, Container Management (Kubernetes) and than we can describe how a potential integration between those tools may look like.

## DevOps Tool Mapping Table

### Resource Type Table

Describes the type of DevOps resource to be categorised.
| Resource Type | _Description_ |
|:----|:----|
| Infrastructure as Code | _Description Here_ |
| Configuration Management | _Description Here_ |
| Container Management (Kubernetes) | _Description Here_ |

### Resource Table

Describes the resource being utilised in banking DevOps teams.
| Resource | _Description_ | Resource Type |
|:----|:----|:----|
| Name Example | _Description Example_ | Infrastructure as Code |
| Name Example | _Description Example_ | Configuration Management |
| Name Example | _Description Example_ | Container Management (Kubernetes) |

### Resource Integration Mapping Table

Describes resource integration, the direction of integration and how the resources are being integrated.
| Resource Primary | Resource Secondary | Integration Direction* | \_Integration Description* |
|:----|:----|:----|:----|
| Resource Name | Resource Name | _Integration Direction Example_ | _Integration Description Example_ |

## DevOps Automation Meeting Minutes

**Date and Time** : Thursday 24th September @ 12:30pm ET / 5:30pm BST

- **How is infrastructure provisioned against the SDLC?**
  - Infrastructure and code deployment happening through SDLC.
  - Terraform and other such technologies like Bit Bucket being engaged.
- **How does a developer run a security scan before merge?**
  - This happens prior to pull request merge.
  - Developers can trigger from IDEs using SonarCube, Black Duck and others
  - Build time is a factor for being able to run security tests in realtime. Software should build fast to enable.
  - Dependencies are a particular problem as you can pull in multiple dependencies from external sources.
    - How is this reflected in build tickets and evidence stores?
  - Getting a complete view of dependencies is ideal end state depending on the tech stack.
  - Dependency information is obtained according to the build tools.
  - Xray is used depending on the tech stack.
  - Docker images are also scanned.
  - Dependency information is also known within C++ tech stacks.
- **Shifting left on engineering gates was a subject matter of interest that was raised by the group.**
- **The following items were highlighted as areas of interest for future deep dives**
  - **SDLC/CIM**
  - **Group Specific Controls / Gates**
  - **Self Service Portal**
  - **Metrics - Collection and Reporting**
- **Evidence store within the SDLC toolchain was selected as the deep dive by the group**
- **When is performance testing done?**
  - Project owners define the test criteria
      - The tooling defines that criteria
      - The testing is done as part of the release pipeline and is collected as evidence
- **Defining what should go into an evidence store manifest will be a good aspect for mutualization**
- **Self service portal and DevOps tools wrappers**
  - Is there was a terraform script for all the tools, it would be great to standardise on that.
