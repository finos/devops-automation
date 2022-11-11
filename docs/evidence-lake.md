## Evidence Lake

This document has been created to capture and iterate the compliance evidence required by banking and fintech DevOps teams.

## DevOps Automation Meeting Notes

Date and Time : Thursday 30th July @ 1pm ET / 6pm BST - https://github.com/finos/community/issues/52#issuecomment-669343645

- _Software Supply Chain with Grafeas and Kritis introduced was shown via a slide._
- _The question was asked, "**How do we create a taxonomy around the metadata to gather a software supply chain?**"_
- _It was explained that Grafias stores information and validity tests whilst Kritish enforces policy for the data stores in the Grafias database._
- _It was asked whether a straw man of common pieces of metadata should be created that could include the aspects below ..._
  - _Record of code review/4-eyes check_
  - _Record of test execution_
  - _Record of test result acceptance/sign off_
  - _Record of code/image/vulnerability scanning_
  - _Environment deployment history/promotion_
  - _Record of ITIL related control points_
  - _Conformance to other control points – CSO or Architecture compliance_
  - _Code/config changes - commit id/PR/etc_
  - _Traceability to requirements/jira issues, etc_
  - _Test plan_
  - _Change classification - material/minor - impact and testing scope, risk, etc_
  - _Change/risk assessment - maybe some automated risk assessment, blast radius assessment"_
- _The group was then asked, "**Do these common factors sound reasonable and what else can we add to the list?**"_
- _It was agreed all points strike as necessary and certain teams like to gather evidence surrounding the changes that get added to code._
- _It was also pointed out that change types and requirements are missing from the list._
- _A question of the "artefact types" expected to be collected was asked and also items like "technical design documents"?_
- _The group fed back collecting information makes a lot of sense._
- _It was agreed that we need to collect the information, change types and audit trail related to all software changes._
- _The group was asked, "**Is all the information actually needed as not every commit is a perfect business requirement and edge cases are difficult to track?**"_
- _It was explained the change type does often influence how software changes move through the release pipeline._
- _It was explained there is work being done on how to identify material change as audit trails should change to something more reliable than human, risk based, self categorisation._
- _The approach should be more artefact related in order to reduce the risk surrounding making a change._
- _The question "**Is there some form of automated risk assessment that improves the speed of deployment whilst reducing risk to live systems?**" was asked to the group._
- _It was added that people want to know the blast radius of change in any given environment and architecture often influences the blast radius. Tightly coupled architectures have a greater blast radius to microservices._
- _It was also added, items not thought through whilst coding are the areas that hit teams. Hitting deadlines with last minute changes are also the types of behaviour that increases risk of breakage._
- _The group fed back that ticking boxes manually on change requests is a horrible way to determine success as too much paperwork with standard responses. The intent behind the change process is good, but the mechanism is wrong._
- _The group was asked, "**Do we also need to consider what is a release and what's the difference compared to a commit?"**_
- _It was noted the team should capture the "What" around the topics and and focus on the "How" at a later date whilst implementing the change._
- _Group members agree the topic is close to their heart and an initial set of taxonomy is useful as we won't need to reinvent._
- _The question "**Is there a good way to store and share the information?**" was asked to the group._
- _A clarification of sharing artefacts or sharing policies was asked as risk and policy teams have implemented homegrown systems across 20 years to collect evidence._
- _These teams are now moving towards industry solutions like **JIRA** and **Service Now** where attachments can be added to immutable stores._
- _The question, "**What are the things, how are we tackling, should we share notes and get regulators involved in a more automated way?**" was asked to inform a standardised way of presenting the information across banks so regulators can understand._
- _It was added that we should go above what the regulator wants and build a secure pipeline that reduces lead times from a security point of view as security requirements are more strict as they want demonstrable proof._
- _The group agreed we should show the regulators what good looks like._
- _It was explained that many silos have been removed through DevOps but there are now lots of data silos. Getting visibility across data is important to consider._

## Grafeas and Kritis Reference Materials

[Grafeas](https://grafeas.io) provides the metadata store with [Kritis](https://github.com/grafeas/kritis) performing the enforcement of the metadata at deploy time into Kubernetes. For more details see the InfoQ [presentation and slides](https://www.infoq.com/presentations/supply-grafeas-kritis/). These are used within the [GCP Binary Authorisation process](https://cloud.google.com/binary-authorization/docs/overview). An alternative (which looks similar at first glance) is [Open Policy Agent](https://www.openpolicyagent.org).
