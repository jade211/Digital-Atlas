# Software Requirements Specification (SRS) Template

The document in this file is an annotated outline for specifying software requirements, adapted from the IEEE Guide to Software Requirements Specifications (Std 830-1993).

Tailor this to your needs, removing explanatory comments as you go along. Where you decide to omit a section, you might keep the header, but insert a comment saying why you omit the data.

## CA326 - Digital Atlas
Jade Hudson and Sruthi Santhosh

### Software Requirements Specification Document
#### Version: (1)	Date: (20/11/2023)

## Table of Contents

1. [Introduction](#introduction)
    1.1 [Purpose](#purpose)
    1.2 [Scope](#scope)
    1.3 [Business Context](#business-context)
    1.4 [Glossary: Definitions, Acronyms, and Abbreviations](#glossary-definitions-acronyms-and-abbreviations)
    1.5 [References](#references)
    1.6 [Overview](#overview)
2. [The Overall Description](#overall-description)
    2.1 [Product Perspective](#product-perspective)
        2.1.1 [System Interfaces](#system-interfaces)
        2.1.2 [Interfaces](#interfaces)
        2.1.3 [Hardware Interfaces](#hardware-interfaces)
        2.1.4 [Software Interfaces](#software-interfaces)
        2.1.5 [Communications Interfaces](#communications-interfaces)
        2.1.6 [Memory Constraints](#memory-constraints)
        2.1.7 [Operations](#operations)
        2.1.8 [Site Adaptation Requirements](#site-adaptation-requirements)
    2.2 [Product Functions](#product-functions)
    2.3 [User Characteristics](#user-characteristics)
    2.4 [Constraints](#constraints)
    2.5 [Assumptions and Dependencies](#assumptions-and-dependencies)
    2.6 [Apportioning of Requirements](#apportioning-of-requirements)
3. [Specific Requirements](#specific-requirements)
    3.1 [External Interfaces](#external-interfaces)
    3.2 [Functions](#functions)
        3.2.1 [Operational Scenarios / Use Cases](#operational-scenarios-use-cases)
    3.3 [Performance Requirements](#performance-requirements)
    3.4 [Logical Database Requirement](#logical-database-requirement)
        3.4.1 [System Architecture / Domain Model Diagram](#system-architecture-domain-model-diagram)
    3.5 [Design Constraints](#design-constraints)
        3.5.1 [Standards Compliance](#standards-compliance)
    3.6 [High-Level Design](#high-level-design)
    3.7 [Software System Attributes](#software-system-attributes)
        3.7.1 [Reliability](#reliability)
        3.7.2 [Availability](#availability)
        3.7.3 [Security](#security)
        3.7.4 [Maintainability](#maintainability)
        3.7.5 [Portability and Preliminary Schedules](#portability-and-preliminary-schedules)
    3.8 [Organizing the Specific Requirements](#organizing-the-specific-requirements)
        3.8.1 [System Mode](#system-mode)
        3.8.2 [User Class](#user-class)
        3.8.3 [Objects](#objects)
        3.8.4 [Features](#features)
        3.8.5 [Stimulus](#stimulus)
        3.8.6 [Response](#response)
        3.8.7 [Functional Hierarchy](#functional-hierarchy)
    3.9 [Additional Comments](#additional-comments)
4. [Change Management Process](#change-management-process)




# 1. Introduction

## Purpose
The product specified in this document is the Digital Atlas website. The purpose of this website is to deliver general statistics about an area and user feedback opportunities to users in a concise and comprehensive way. The website will provide information relevant to the user all in one place, saving the user time searching for particular pieces of information. The intended audience of this service will be users interested in purchasing property in a particular area, business owners, and current residents of the area. The information presented on the website will allow these users to make informed decisions on their actions relevant to their situation.

## 1.2 Scope
The product to be discussed is the Digital Atlas website. The scope of this project details how we plan on providing searchable general statistics information, filtering features, and user feedback services for users interested in local information about specific areas. This will involve the gathering of the information to be displayed as well as the implementation of both the user feedback section and the filtering options available. The benefits of this website will include but are not limited to:
- Providing relevant information in one, easily accessible place.
- Delivering a method of prioritisation to users who would like to search for areas depending on their own personal area criterias.
- Allowing users to interact with other users, giving them the opportunity to ask for advice on any queries or concerns about an area of interest.
- Allowing users living in a specified area the opportunity to communicate with fellow neighbours. The goal of this website is to deliver a user experience that allows for fast access to relevant information. We plan on expanding this project further to include more information.

## 1.3 Business Context
The first business context of our website revolves around being an independent, real estate support website. This is a unique idea that has not been developed before. It provides a multitude of statistics in one location. Our website caters towards offering general statistics about areas of interest to users within Ireland. It is aimed towards user who are planning on purchasing a home/ starting a business in an area, or users who are trying to find areas that fit their living criteria(s). Our website also caters towards users who are interested in discovering general statistics about an area. Such users may be residents living in the specified area, or users researching an area(s).

Another business context of Digital atlas is possibly partnering up with a business with a similar target market. Websites such as Daft.ie, MyHome.ie etc provide data on current home prices and the rates on inflation on area pricings. This data combined with the information found on our websites would be a profitable partnership for both businesses.

A further business context to consider is the prospect of having internal advertisements found within the website. This would offer a source of potential income for Digital Atlas.

## 1.4 Glossary: Definitions, Acronyms, and Abbreviations
| Term | Description |
|------|-------------|
| SRS | Software Requirements Specification |
| API | Application Programming Interface |
| CSO | Central Statistics Office |
| OSM | Open Street Map |
| ADA | Americans with Disabilities Act |
| GTFS | General Transit Feed Specification |
| NTA | National Transport Authority |

## 1.5 References
[1] [Datasets - Data.Gov.IE](https://data.gov.ie/dataset/) (accessed Nov. 29, 2023).  
[2] [Home - National Transport Authority](https://www.nationaltransport.ie/) (accessed Nov. 21, 2023).  
[3] [Databases - CSO - Central Statistics Office](https://www.cso.ie/en/databases/) (accessed Nov. 21, 2023).  
[4] [OpenStreetMap](https://www.openstreetmap.org/#map=7/53.465/-8.240) (accessed Nov. 29, 2023).  

## 1.6 Overview
The remainder of this document contains all of the necessary information to do with Digital Atlas. Section 2 contains all of our goals and user information. For developers, all our information regarding setup and implementation can be found at the bottom in Section 3. This document is organized into 3 Sections: Section 1 contains the introduction to the document and a brief explanation of Digital Atlas as well as necessary terms used and references. Section 2 contains all information directed to customers and stakeholders pertaining to our goals and user information. Section 3 contains all of the necessary information regarding the requirements of the software (for developers). Each section has its own series of subsections.



# 2. The Overall Description
## 2.1 Product Perspective

Digital Atlas aims to provide users with general statistics and user feedback about different areas. The product is not independent and self-contained, but rather a component of a larger system that involves data from external sources, web servers, and web browsers. The product interacts with external interfaces such as APIs and datasets to deliver its functionality. The product is a commercial product that aims to provide a practical and user-friendly service, rather than a research prototype that aims to demonstrate a new concept or technique.

Digital Atlas is comparable to other websites that offer information about areas such as Google Maps, Daft, and TripAdvisor. What makes our website different is that it focuses on general statistics about an area, such as local housing prices, education, transportation, crime rate, etc, rather than one specific point of interest, such as restaurants or attractions. Our website is more of an amalgamation of information found on multiple websites displayed in one place, with a specialization in assisting potential home/business owners.

Digital Atlas also allows users to filter areas based on their own criteria, such as school availability, affordability, safety etc rather than having to primarily rely on their own research or ratings. Furthermore, the website enables users to interact with other users who have experience living in the area / who can answer their questions about an area, rather than only displaying user reviews or ratings.

The product targets users who are interested in purchasing property, starting a business, or living in an area, rather than users who are looking for travel or entertainment options.

### 2.1.1 System Interfaces
#### External Interfaces (HTTP Based API’s and Datasets)
- **Gov.ie:** Provides various government services, information, and resources. Digital Atlas harnesses the Attractions dataset and the Primary schools dataset from here.
- **Central Statistics Office / CSO:** Responsible for collecting, analyzing, and disseminating statistical information about various aspects of the country. Digital Atlas queries the Crime dataset to gather crime statistics.
- **OpenStreetMap / OSM:** A collaborative mapping platform. Digital Atlas leverages the National Roads Travel Times API to provide transport information locally.
- **IrelandStats.com:** Provides comprehensive user data about social and public life in Ireland. The schools datasets from this website are used to provide education services data.
- **National Transport Authority:** Provides public transport APIs for Ireland. The General Transit Feed Specification (GTFS) - RealTime API is used by Digital Atlas.

## 2.1.2 Interfaces

### Homepage Interface:
- **About Information:** Display a brief breakdown of Digital Atlas services and a simple guide on how users can search for their queried location/criteria.
- **Search Bar:** A simple search bar providing functionality to search for the desired area.
- **Criteria boxes:** Check/uncheck boxes providing amenities/facilities in an area such as schools, house prices, etc.
- **Navigation bar:** A top navigation bar linking to other pages like About and Contact.

### Searched Area Interface:
- **Statistical Data:** Display pertinent data to the searched area, including local home prices, education, transport, crime, etc.
- **User Feedback/Commenting:** Allows users to share thoughts on the area, read comments from others, fostering a sense of community.

### Contact Page:
- **Email box:** Submission box for users requiring assistance or providing feedback on additional statistics.

### Accessibility:
- The user interfaces comply with ADA standards for web accessibility, providing alternative text for images, captions for videos, keyboard navigation, color contrast, and are responsive across devices.

## 2.1.3 Hardware Interfaces
- The system operates through web browsers (Chrome, Microsoft Edge, Safari, etc) across multiple platforms (Linux, Windows) and is compatible with various devices like PCs, laptops, phones, and lab machines.

## 2.1.4 Software Interfaces

#### Central Statistics Office Crime Dataset
- **Name:** Central Statistics Office (CSO)
- **Mnemonic:** CSO
- **Source:** CSO
- **Discussion:** Holds crime statistics for specified regions, accessed to gather crime-related data.
- **Interface Definition:** Uses internal methods to access the CSO dataset.

#### Gov.ie
- ... (other datasets follow with similar formatting)

## 2.1.5 Communications Interfaces

### The Digital Atlas website primarily operates over standard web communication protocols such as HTTP and HTTPS via the internet, employing typical request-response mechanisms without specific custom protocols.

## 2.1.6 Memory Constraints

### Digital Atlas operates as a web-based application without specific memory constraints on primary or secondary memory within the user environment. Memory utilization depends on the user's device and server architecture.

## 2.1.7 Operations

### Interactive and Unattended Operations:
- Digital Atlas operates primarily in interactive mode, engaging users for information retrieval.

### Data Processing Support:
- Handles data retrieval from trusted sources (CSO, Gov.ie, OSM) efficiently based on user input.

### User Interaction Management:
- Supports the comment section for user feedback; moderation tools may be considered.

## 2.1.8 Site Adaptation Requirements

### Data Source Configuration:
- Configures the existing database server to accommodate new data tables.

### Software Setup:
- Installs software components (Django, React, MySQL Workbench) on designated server machines.

### API Connectivity:
- Sets up necessary configurations and access authorizations for connectivity with external APIs.

### Version Compatibility:
- Ensures compatibility and updates for software tools across development machines.

### User Accessibility:
- Performs compatibility tests on various devices and browsers to ensure wide accessibility.


## 2.2 Product Functions

- **Search for Areas:** Allows users to input and search for a specific area of interest. Users can type in the area, select the correct option that appears as a result, and access that area's information page. This is facilitated through a Search Bar placed at the top of the Homepage.

- **About Information:** This section on the Homepage explains how to use the website. It includes an explanation of the search bar mechanics mentioned above and how users can find areas of interest using the criteria matching boxes.

- **Specification matching user criteria:** Digital Atlas provides a filtering service via criteria boxes. Users can search for areas based on their own specifications, such as school availability, crime rate, local traffic, etc.

- **Website Navigation:** A navigation bar across website interfaces allows users to access other pages like the homepage and contact page.

- **Statistical Data displayed:** Once a user selects an area, they are directed to that area's page detailing its statistics. Information such as the average home price, education opportunities, traffic, amenities, attractions, and crime rate will be presented in a user-friendly manner for a large target audience.

- **Commenting/User Feedback Section:** Enables users to comment on specific areas and view other users' comments. Users can also respond to comments by clicking the reply button. This section serves as a space for users to ask questions to area residents and for residents to engage in discussions about local events or issues.

- **Email Submission Box:** Allows open communication between users and website maintenance. Users can report website issues, provide feedback, or suggest additional data for the website.



## 2.3 User Characteristics

### Educational Level
- **Description:** The intended users of Digital Atlas may have diverse educational backgrounds, catering to multiple demographics without any required educational level.
- **Impact on Design:** Prioritizing considerations for various educational backgrounds, the design will focus on clear visual elements to present data comprehensibly. Complex statistical or technical terms will be minimized.

### Experience
- **Description:** User experience with Digital Atlas may vary, ranging from those well-versed in property knowledge to first-time buyers exploring investment opportunities.
- **Impact on Design:** Statistical information will be presented clearly for all users. The criteria boxes service will aid new homebuyers in finding areas based on their preferences.

### Technical Expertise
- **Description:** The user base of Digital Atlas will encompass a vast demographic without a high requirement for technical expertise.
- **Impact on Design:** A simple and consistent layout will cater to users with varying technical abilities, ensuring ease of use for all.

### Accessibility
- **Description:** User accessibility may differ based on individual needs, where some users might face difficulty accessing specific resources on the website.
- **Impact on Design:** Prioritizing wide accessibility, incorporating features like alternative text for images, intuitive navigation, and clear text. Compatibility across various browsers and devices (Chrome, Edge, Linux, Windows) is crucial.

### Impact on Internal System Design
- **Adaptability:** The system should adapt to different user preferences for customized area searches.
- **User Interaction Design:** Design should encourage user interactions, facilitating comments and feedback sharing. Effective management of user-generated content is vital for a community-driven approach.
- **Testing:** Comprehensive testing and evaluation from users with diverse characteristics to ensure usability and effectiveness of the system.


## 2.4 Constraints

- **Regulatory Policies:** Ensure compliance with data protection laws, safeguarding user data and statistical information according to data privacy regulations.
  
- **Hardware Limitations:** Optimize website performance across varying hardware specifications and internet connection speeds for a seamless user experience on different devices.

- **Interface to Other Applications:** Ensure smooth integration with APIs and datasets from various sources (Central Statistics Office, Gov.ie, Open Street Map) for accurate and updated information.

- **Reliability Requirements:** Maintain consistent and reliable access to datasets and APIs to ensure accurate information availability for website users.

- **User Accessibility:** Design the website to be accessible for users with disabilities, aligning with accessibility standards such as ADA.

- **Performance:** Optimize website performance, especially during queries and data retrieval from external sources, to minimize loading times.

- **Compatibility:** Ensure compatibility across different browsers (Chrome, Microsoft Edge), operating systems (Linux, Windows), and devices (PC, Lab Machines) to reach a wider user base without functional inconsistencies.

## 2.5 Assumptions and Dependencies

- **Data Availability:** Assumes regular and consistent availability of datasets from Central Statistics Office, Gov.ie, and OpenStreetMap. Disruptions or unavailability in these datasets may impact the accuracy of information on the website.

- **API Stability:** Relies on the stability and consistent functioning of APIs provided by mentioned sources. Changes or termination of these APIs could affect data retrieval and website functionality.

- **Technological Changes:** Assumes stability and consistency in technologies like Python, JavaScript, frameworks, and tools, expecting compatibility and support for future updates.

- **User Engagement:** Assumes active engagement with the comment section by users to provide insights. Reliance on user involvement may impact the quality and depth of information accessible to other users.

- **Development Tool Suitability:** Relies on the efficiency and reliability of programming tools (e.g., Django, React, Visual Studio Code) throughout the development process.

- **Browser and Operating System Compatibility:** Assumes reliability of platforms like Chrome, Microsoft Edge, Linux, and Windows for user engagement. Modifications or issues with these platforms may impact website functionality and user experience.

- **Team Collaboration:** Requires efficient cooperation and communication among team members in task management and version control with Trello and Git. Communication breakdowns could hinder project development.


## 2.6 Apportioning of Requirements

### Immediate Development

- **Basic Functionality:** Implementing core functionalities like data extraction from trusted sources (Central Statistics Office, Gov.ie, OpenStreetMap), displaying essential features including area-specific information, search functionality, and user comment section.

- **User Interface:** Designing an intuitive user interface to facilitate website interaction and easy navigation.

- **Backend and Frontend Development:** Establishing backend logic in Python (using Django) and frontend development with JavaScript (using React) to ensure the website’s fundamental architecture works.

- **Data Query and Display:** Ensuring dependable datasets and API queries to present correct data based on user-inputted area.

- **Testing:** Conducting preliminary testing on various platforms (Chrome, Microsoft Edge) and operating systems (Linux, Windows) to ensure basic functionality and usability.

### Deferred to Future Versions

- **Advanced Features:** Including more complex features like personalized user accounts, auto-complete searching, advanced data visualization, or additional data sources beyond the original reliable ones.

- **Enhanced User Interaction:** Extending features for user interactions, including advanced feedback mechanisms or community forums.

- **Performance Optimization:** Conducting additional performance and speed optimization, particularly for complex queries or large datasets.

- **Extended Platform Support:** Extending support to additional platforms or browsers not originally covered in the main scope.


## 3. Specific Requirements

### 3.1 External Interfaces

1. **Digital Atlas Website Interface:**
    - **Description:** Interfaces for users to access and navigate the website and services.
    - **Purpose:** Providing access to information on local statistics like the average price of a home, schools, traffic, amenities, and crime for a specified area in Ireland.
    - **Source/Destination:** Web-based interaction between the user and the website.
    - **Valid Range/Accuracy/Tolerance:** N/A
    - **Units of Measure:** N/A
    - **Timing:** Real-time interaction based on user queries and inputs.
    - **Relationships to Other Inputs/Outputs:** Interacts with backend APIs (Central Statistics Office, Gov.ie, OpenStreetMap, GTFS) for fetching and displaying area-specific data.
    - **Screen Formats/Organization:** Homepage with explanatory information, navigation bar, search bar, specific area details, comment section, contact page.
    - **Window Formats/Organization:** N/A (Assuming browser-based interaction)
    - **Data Formats:** Displayed data in readable and intuitive formats (text, tables, maps).
    - **Command Formats:** N/A (Assuming graphical user interface interaction)
    - **End Message:** Confirmation is the area details displaying, comment(s) posted.

2. **Backend APIs (Central Statistics Office, Gov.ie, GTFS API, OpenStreetMap):**
    - **Description:** APIs providing data for the average price of a home, crime statistics, school information, traffic data, and amenities.
    - **Purpose:** Supply reliable and relevant information for specified areas in Ireland.
    - **Source/Destination:** Communication between the website and respective external APIs.
    - **Valid Range/Accuracy/Tolerance:** Based on the accuracy and timeliness of data from external sources.
    - **Units of Measure:** N/A
    - **Timing:** Dependent on the responsiveness of the external APIs.
    - **Relationships to Other Inputs/Outputs:** Provide requested data based on user queries received from the website.
    - **Data Formats:** JSON, XML, or the specified formats.
    - **Command Formats:** HTTP requests (GET, POST).
    - **End Message:** Response data sent back to the website for display.


## 3.2 Functions

### Functional Requirements

- **The system shall allow the user to search for an area and be redirected to that area's information page.**
  - *Criticality level:* H

- **The system shall allow the user to filter areas based on their specific criteria.**
  - *Criticality level:* H

- **The system shall allow users to interact with other users through the comment / feedback section found below each area page.**
  - *Criticality level:* H

- **The system shall gather its information from the specified API’s and datasets detailed in the specification.**
  - *Criticality level:* H

- **The system shall have a responsive design, ensuring optimal user experience across various devices and screen sizes.**
  - *Criticality level:* M

- **The system shall regularly update its datasets and external APIs to ensure the information is current and accurate.**
  - *Criticality level:* M

- **The system shall allow users to communicate feedback to Digital Atlas through email via the contact page.**
  - *Criticality level:* M

- **The system shall provide an option for users to report inappropriate or misleading comments or information.**
  - *Criticality level:* M

- **The system shall provide an autocomplete feature in the search bar for quicker and more accurate location input.**
  - *Criticality level:* L

- **The system shall allow the user to navigate through the website via the navbar at the top of the page.**
  - *Criticality level:* L


### 3.2.1 Operational Scenarios / Use Cases




## Use Case: User searches for a particular area

**Actors:** User, System  
**Trigger:** User wants to see the statistics for the named area  
**Pre-Conditions:** User has internet access. User has an area they would like to search.  
**Post-Conditions:** The user is successfully redirected to the area contents page.  

### Success Scenario

| USER | SYSTEM |
|------|--------|
| User clicks the search bar and types in the name of the area | |
| | User clicks on the area’s name in the search bar |
| | System acknowledges the user's request and redirects to that area's page. |

**Quality Requirements:** The user does not lose internet access for the duration of the process.

---

## Use Case: User searches for areas based on specific criteria

**Actors:** User, System  
**Trigger:** User wants to see a list of areas containing the specified criteria selected  
**Pre-Conditions:** User has internet access. User has area specifications that they would like included in the area search.  
**Post-Conditions:** The user is successfully provided with a list of areas that satisfy their criteria. User is redirected to the area contents page.  

### Success Scenario

| USER | SYSTEM |
|------|--------|
| User clicks the filter button and selects the boxes that suit their criteria | |
| | System acknowledges and processes the user's selected criteria(s) |
| | System produces a list of areas that meet this criteria |
| User clicks on an area that interests them | |
| | System acknowledges the user's request and redirects to that area's page. |

**Quality Requirements:** The user does not lose internet access for the duration of the process.

---

## Use Case: User creates a comment

**Actors:** User, System  
**Trigger:** User has a question about an area and wants advice / wants to provide feedback on an area.  
**Pre-Conditions:** User has internet access. User is on an area page  
**Post-Conditions:** The User successfully posts a comment on the area page  

### Success Scenario

| USER | SYSTEM |
|------|--------|
| User clicks the comment button and provides a comment | |
| | System acknowledges the action and posts the comment |
| | Other users are able to see the comment appear in the feedback section. |

**Quality Requirements:** The user does not lose internet access for the duration of the process.

---

## Use Case: User replies to another user's comment

**Actors:** User1, User2  
**Trigger:** User1 sees User2's comment and wishes to respond  
**Pre-Conditions:** User1 has internet access. User1 is on the same area page as User2. User1 has a response to User2  
**Post-Conditions:** The User1 successfully posts a reply to User2’s comment.  

### Success Scenario

| USER1 | USER2 |
|-------|-------|
| | User2 clicks the comment button and provides a comment |
| User1 sees User2’s comment and decides to respond | |
| | User1 clicks the reply button on User2’s comment and submits their response. |

**Quality Requirements:** The user does not lose internet access for the duration of the process.


### 3.3 Performance Requirements

#### Static Numerical Requirements:

- **Number of Simultaneous Users:** The system should accommodate a minimum of 100 simultaneous users accessing area-specific information without compromising performance.
  
- **Information Handling:** Efficiently handle and display a variety of data, including crime statistics, school data, traffic information, amenities, and home prices for various areas within Ireland.

- **Response Time:** 95% of area-specific data queries should turn within 3 seconds or less to ensure a responsive user experience.

#### Dynamic Numerical Requirements:

- **Transactions and Queries:** Process a minimum of 500 queries per hour during normal usage and up to 1000 queries per hour during peak times, ensuring consistent performance.
  
- **Data Processing:** Handle at least 100,000 data records each day to provide users with up-to-date information for statistical and information retrieval.
  
- **Comment Section Interaction:** The comment section should handle a minimum of 50 user interactions (comments, replies, etc.) every day without any performance reduction.

### 3.4 Logical Database Requirement

#### Entities:

- The system will manage various data entities such as “Area Details”, “Crime Statistics”, “School Information”, “Traffic Data”, “Transport information”, “Amenities”, and “Home Prices”. Each entity will have attributes relevant to its category.

#### Relationships:

- Relationships between data entities will be established. For instance, “Area Details” will associate with “Crime Statistics,” “School Information,” “Traffic Data,” “Amenities,” and “Home Prices” based on the user's specified area.

#### Data Integrity:

- Implementing constraints such as preventing null values in data fields and maintaining referential integrity among related data entities.

#### Data Retention:

- Specify the duration for retaining user comments and interactions within the system to maintain relevance and manage the database size efficiently.


### 3.4.1 System Architecture / Domain Model Diagram

[Diagram Placeholder]

### 3.5 Design Constraints

#### 3.5.1 Standards Compliance

**Standard Compliance:**

- **Data Naming Conventions:** Consistency and clarity are ensured by adhering to particular naming rules for data entities and properties.
  
- **API Usage:** Compliance with policies and standards on API usage and data retrieval methods established by data sources (e.g., Central Statistics Office, Gov.ie, OpenStreetMap).

**Audit And Traceability:**

- **Data Integrity Auditing:** Mandating periodic audits to guarantee data integrity, especially when fetching and displaying statistical data from external sources.

### 3.6 High-Level Design

[Content Not Provided]

### 3.7 Software System Attributes

#### 3.7.1 Reliability

**Data Accuracy:**

- **Requirements:** The system shall maintain accurate and up-to-date information for all areas and user interactions.
  
- **Verification:** Regular data validation checks and comparisons with trusted external sources to verify the accuracy of information.

**Error Handling:**

- **Requirement:** The system shall effectively handle errors, providing meaningful error messages to users.
  
- **Verification:** Testing scenarios with intentional errors and ensuring the system responds appropriately with clear error messages.

**Performance Stability:**

- **Requirement:** The system shall exhibit stable performance under varying user loads, preventing performance deterioration during peak usage.
  
- **Verification:** Load testing the system with simulated concurrent users and monitoring performance metrics to ensure stability.

#### 3.7.2 Availability

**Recovery Time:**

- **Requirement:** The system shall allow users to restart the application after a failure.
  
- **Verification:** Testing the system’s recovery process, ensuring minimal data loss and efficient restart functionality.

#### 3.7.3 Security

*Not Applicable because the website does not deal with user data.*

#### 3.7.4 Maintainability

**Modularity:**

- **Requirement:** The system shall be designed with reusable components to facilitate ease of maintenance.
  
- **Verification:** Code review and analysis to ensure the modular structure of code blocks and independence of components.

**Documentation:**

- **Requirement:** The system shall have comprehensive documentation to assist future maintainers.
  
- **Verification:** Regular updates to documentation and validation of its completeness.

**Interface Consistency:**

- **Requirement:** The system shall maintain consistent interfaces to ease integration of future updates.
  
- **Verification:** Testing the consistency of interfaces and ensuring backward compatibility.



### 3.7.5 Portability and Preliminary Schedules

**Portability:**

#### Gantt Chart:

| ID | Characteristic     | H/M/L |
|----|--------------------|-------|
| 1  | Correctness        | H     |
| 2  | Efficiency         | M     |
| 3  | Flexibility        | M     |
| 4  | Integrity/Security | L     |
| 5  | Maintainability    | M     |
| 6  | Portability        | H     |
| 7  | Usability          | H     |

- **Correctness (H):**
  - **Rationale:** Correctness is given a high priority because the information provided by Digital Atlas needs to be accurate.
  - **Testing:** Ensuring the APIs and datasets are constantly reviewed and providing up-to-date information.

- **Efficiency (M):**
  - **Rationale:** While efficiency is important, it is not the primary focus. Ensuring the software performs optimally is considered a medium priority.
  - **Testing:** Monitoring website speed and optimizing critical sections of code.

- **Flexibility (M):**
  - **Rationale:** While flexibility is an important aspect, it is not a primary necessity for the website to run currently, therefore it has Medium priority. This medium priority allows for adaptability to changes without compromising current operations.
  - **Testing:** Evaluating the ease of introducing new features without disrupting currently functioning code.

- **Integrity/Security (L):**
  - **Rationale:** Low priority as the main objective of the website is to provide general statistics on an area and providing a place for user interaction. No sensitive personal information is being dealt with.
  - **Testing:** Not Applicable.

- **Maintainability (M):**
  - **Rationale:** A moderate emphasis is placed on maintainability to ensure future updates and modifications can be carried out efficiently.
  - **Testing:** Reviewing the modularity and documentation for ease of maintenance.

- **Portability (H):**
  - **Rationale:** Given the potential need for the website to run on various web browsers and operating systems, prioritizing high portability is essential.
  - **Testing:** Regular testing on different web browsers and operating systems and ensuring compatibility. Measuring the percentage of host-dependent code.

- **Usability / User Interface (H):**
  - **Rationale:** Usability is given high priority as it focuses more on user interaction and experience which is the main goal of Digital Atlas.
  - **Testing:** Assessing the effort required to learn, operate, and interpret the output.

#### Preliminary Schedule:

**November - December**
- Gathering necessary APIs and Datasets needed to provide the general statistics for the website.
- Downloading all packages and required software, etc., to allow for the development of the website.
- Constructing the Function Specification and project proposal.
- Updating blog entries.

**December - January**
*Early December*
- Beginning the backend development of the website.
- Configuring the APIs and ensuring access tokens to be able to fetch the required data.
- Test API links and ensuring data retrieval.
- Adding the dataset information to the databases in MySQL workbench.
- Updating blog entries.

*Late December*
- Frontend development will begin.
- Ensuring the functionality of the area search bar is completed.
- Completing the criteria box functionality.
- Creating the page dedicated to each area using React.
- Creating and configuring the contact page in an email.
- Testing the search-bar functionality to ensure it leads to a working page dedicated to the selected area.
- Component Testing of the functions created.

**January - February**
- Adding comment section functionality to each area page.
- Attempting to add a reporting feature to the comments section.
- Attempting to add autocomplete in the search bar configuration.
- Creating a Technical Specification.
- Component Testing of the commenting functionality.
- Overall System Testing.
- Prioritizing User Testing after passing system testing.

**February**
- Creating a User Guide.
- Video Walkthrough.
- Further User Testing.
- Submission.


### 3.8 Organizing the Specific Requirements 

#### 3.8.1 System Mode
The website may operate in different modes:
- **User mode:** Regular users interact with the interface to access area-specific information.
- **Admin mode:** Administrative users manage comments, user interactions, and possibly have editing capabilities.

#### 3.8.2 User Class
Different classes of users have varied access and capabilities:
- **Regular users:** Access information, view area statistics, and leave feedback.
- **Administrative users:** Moderate comments, manage user interactions, and possibly edit information.

#### 3.8.3 Objects
Objects within the system:
- **Area Details:** Attributes include crime statistics, school information, traffic data, amenities, and home price, etc.
- **Comment and Feedback:** Attributes include user input, timestamps, and area associations.

#### 3.8.4 Features
Each feature may include:
- **Search feature:** Sequence of inputs (area input) leading to the display of area details and related information.
- **Comment section:** Input (user feedback) leading to the display of comments for other users.

#### 3.8.5 Stimulus
The system functions in response to stimuli:
- **User input of area:** Triggers fetching of area-specific information.
- **User comment submission:** Triggers storing and displaying feedback.

#### 3.8.6 Response
Functions within the system support generating responses:
- **Fetching data:** Responds to user queries by displaying area-specific information.
- **Displaying comments:** Responds to user submissions by displaying feedback on the website.

#### 3.8.7 Functional Hierarchy
If none of the above organizational schemes prove helpful, the overall functionality can be organized into a hierarchy:
- **Inputs:** User queries for area information.
- **Outputs:** Display of area-specific statistics and information.
- **Internal data access:** Retrieval and manipulation of data from Irish datasets and APIs.

### 3.9 Additional Comments
**Change Management Process**

1. **Change Identification:** Changes may be identified through various channels:
   - Talks within the team about developments in the project or technical issues.
   - Customer requests or demands submitted formally through designated channels, such as emails through the Contact page.

2. **Change Log and Evaluation:** Following detection, modifications are recorded and assessed for how they may affect the SRS:
   - The team evaluated the suggested modifications for their viability, effect on the project objectives.
   - Technical compatibility and alignment with current functionalities are assessed for each change.

3. **Updating the SRS:** Following review and approval, a change receives the required updates:
   - Modifications that reflect the changed criteria or project scope are formally documented in the SRS.
   - The change’s specifics, including its effect and justification, are recorded for future use.

4. **Change Control and Communication:** Control mechanisms are in place to manage changes:
   - Before implementing modifications, the team must formally approve them.
   - A common understanding is maintained when changes are successfully conveyed to all team members.

5. **Submission of Changes:**
   - To keep a formal record, team changes may adhere to comparable documentation procedures.

6. **Review and Consensus:**
   - The team reviews each suggested modification as a whole to decide how best to proceed with its implementation.
   - Consensus ensures that changes align with project objectives and are technically possible.




