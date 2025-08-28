# Google GenAI Hackathon

## Problem statement (Provided by NASSCOM)

### Automating Test Case Generation with AI

Develop an AI-powered system that automatically converts healthcare software requirements into compliant, traceable test cases integrated with enterprise toolchains.

### Challenge

Healthcare software development is constrained by complex regulatory requirements, diverse data formats, and the heavy burden of manual test c reation. QA teams spend enormous time converting specifications into test cases, ensuring compliance, and maintaining traceability across tools. This slows product cycles and limits scalability in a highly regulated domain where precision and compliance are critical.

### Objective

Build an AI-powered system that autonomously generates test cases from requirements and specifications, reducing manual testing effort while ensuring compliance, scalability, and integration with existing enterprise toolchains.

### Solution Capabilities

- **Automate Test Case Generation:** Convert natural language and structured specifications into test cases and datasets across multiple formats (PDF, Word, XML, Markup).
- **Understand Complex Requirements**:Accurately interpret healthcare-specific regulations and domain-heavy specifications.
- **Integrate with Toolchains**: Seamlessly connect with ALM platforms such as Jira, Polarion, and Azure DevOps.
- **Ensure Compliance & Traceability**: Support FDA, IEC 62304, ISO 9001, ISO 13485, and ISO 27001 standards with full requirement-to-test traceability.
- **Enable GDPR-Compliant Pilots**:Provide readiness for GDPR-compliant Proof of Concepts (PoCs) to demonstrate solution scalability.
- **Tech Stack**: Use of Google AI technologies (Gemini, Vertex AI, BigQuery, Firebase, Agent Builder).

## Product USP

Our GenAI platform directly integrates with tools like JIRA to automatically create and deploy auditable and compliant test cases for every new change, accelerating time-to-market while keeping compliance in check.

## Product Pitch

Every new change in a highly compliance regulated environment can be really scary and time consuming to get it right. Our GenAI based platform directly integrates with JIRA and similar tools to automatically generate testcases that are compliant to your chosen standards to reduce your time to market while ensuring its compliant.

## Prototype

### **Core MVP Features (Must-Haves)**

These features form the essential, end-to-end user journey you'll demonstrate.

- **Authentication & JIRA Integration:** Securely connect the user's account to their JIRA instance using the JIRA API. This allows the user to select a specific JIRA project.

- **Requirements Ingestion (Dual Path):**
  - **Path A: JIRA Ingestion:** The user selects an existing user story or issue from the connected JIRA project. The system then pulls the requirement details from the JIRA ticket's description field.
  - **Path B: Direct File Upload:** Users can upload a file containing requirements in various formats (PDF, Word, etc.). The system performs automated text extraction from the uploaded document.

- **GenAI Test Case Generation:** Use Google's AI models, such as **Gemini** and **Vertex AI**, to take the ingested requirement text and generate a list of detailed test cases. The generated test cases must adhere to a user-selected compliance standard (e.g., IEC 62304, ISO 13485).

- **Human-in-the-Loop Review:** Display the generated test cases to the user in a clear, editable format. This allows the user to review, edit, or remove test cases before deployment.

- **JIRA Deployment & Traceability:** A "Deploy to JIRA" button will use the JIRA API to automatically add the finalized test cases to the original JIRA issue. The test cases should be added as sub-tasks, comments, or a checklist, ensuring full **traceability** from requirement to test case.

### **"Stand-Out" MVP Enhancements (Highly Recommended)**

These are the extra features that will make your project shine and go beyond a basic MVP. You should choose one or two of these to implement.

- **Automated JIRA Story Creation from Document:** After a user uploads a document, provide the option to "Create a new JIRA story." The AI will infer and pre-populate the new JIRA story's summary and description. The system will then generate and attach the test cases to this newly created JIRA story, establishing a traceable link from the start.

- **Test Case Explainability (XAI):** Next to each generated test case, provide a small button or hover-over feature. Clicking it will show a brief explanation from the AI, highlighting **why** the test case was generated and how it relates to a specific compliance standard or part of the original requirement.

- **Automated Negative Test Case Generation:** Based on the requirement, the AI can generate not only positive ("happy path") test cases but also a few key **negative test cases** (e.g., what happens when invalid data is entered). This demonstrates a more comprehensive and intelligent approach to testing.

By focusing on these features, you will have a solid, demonstrable, and impressive solution that directly addresses the core problem statement while showcasing the advanced capabilities of Google's GenAI tools.

---

### Features to consider

- **Dataset creation for testcase :** Your AI could not only generate the test case but also the corresponding test data. For example, if a test case requires a patient with a specific set of medical conditions, the AI could generate anonymized, compliant data for that exact scenario.

- **Dashboard for tracking :** Once test cases are generated and deployed to JIRA, the system could provide a dashboard with real-time analytics on test execution status, test coverage, and a compliance score. This moves the value proposition from a pure generation tool to a comprehensive test management and quality assurance platform

- **Requirements validation assistant:** system could analyze the requirements document before generating test cases. It could flag sections that are vague, incomplete, or contradictory, and even suggest questions for the author to clarify. This turns the tool from a reactive test case generator into a proactive requirements validation assistant
