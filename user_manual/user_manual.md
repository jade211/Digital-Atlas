# User Manual: Digital Atlas
Jade Hudson and Sruthi Santhosh  
18/02/2024

## Table of Contents
1. [Introduction](#introduction)  
   1.1 [Overview](#overview)  
   1.2 [Glossary](#glossary)  
   1.3 [Purpose](#purpose)  
   1.4 [Target Audience](#target-audience)  
2. [Getting Started](#getting-started)  
   2.1 [Accessing the Website](#accessing-the-website)  
   2.2 [Navigating to the Homepage](#navigating-to-the-homepage)  
3. [Homepage Navigation](#homepage-navigation)  
   3.1 [Header](#header)  
   3.2 [Hero Section](#hero-section)  
   3.3 [Search Bar](#search-bar)  
   3.4 [Informational Content](#informational-content)  
   3.5 [Footer](#footer)  
   3.6 [Visual Design](#visual-design)  
4. [Searching for Area Information](#searching-for-area-information)  
   4.1 [Inputting Desired Area](#inputting-desired-area)  
   4.2 [Submitting Search Query](#submitting-search-query)  
5. [Search Area Details Page](#search-area-details-page)  
   5.1 [Overview](#overview-1)  
   5.2 [Types of Information Available](#types-of-information-available)  
   5.3 [Information Display](#information-display)  
6. [Features Pages](#features-pages)  
   6.1 [Overview](#overview-2)  
   6.2 [Types of Information Available](#types-of-information-available-1)  
   6.3 [Display of Information](#display-of-information)  
7. [Interacting with the Website](#interacting-with-the-website)  
   7.1 [Website Features Interaction](#website-features-interaction)  
   7.2 [Comment Section Interaction](#comment-section-interaction)  
   7.3 [Benefits of Comment Section](#benefits-of-comment-section)  
8. [Technical Details](#technical-details)  
   8.1 [Technologies Used](#technologies-used)  
   8.2 [Querying APIs and Datasets](#querying-apis-and-datasets)  
   8.3 [Technical Requirements](#technical-requirements)  
9. [Conclusion](#conclusion)  


# 1. Introduction
## 1.1 Overview
Welcome to the user manual for Digital Atlas! Our website is designed to provide users with comprehensive data and analysis on specific areas of Ireland. Regardless of the reason for wanting to know about local statistics, buying a property, starting a business, or simply being inquisitive, Digital Atlas provides you with the information you need to decide what to do next.

## 1.2 Glossary
| Term      | Definition                                                                                     |
|-----------|-----------------------------------------------------------------------------------------------|
| CSO       | Central Statistics Office                                                                     |
| GTFS      | General Transit Feed Specification                                                           |
| API       | Application Programming Interface: Allows different software systems to communicate with each other |
| Backend   | Refers to the server-side of the application, which processes user requests                  |
| Frontend  | The user interface and user experience part of the application                                |
| Geocoding | The process of converting location-based information, such as addresses or place names, into geographic coordinates (latitude and longitude) |
| Component | A modular and self-contained unit of the system responsible for specific functionality         |


## 1.3 Purpose
Beyond compiling data, Digital Atlas aims to arm users with the knowledge they need to successfully negotiate the challenges involved in selecting the ideal location inside Ireland. Digital Atlas strives to make informed decisions easier by combining a variety of data, such as housing costs, school information, transportation options, crime data, and local amenities, into a single, user-friendly platform. Our goal is to give users the resources they need to thoroughly investigate areas of interest. This will enable them to weigh important aspects like cost, safety, accessibility, and lifestyle amenities, enabling them to make well-informed decisions that suit their unique needs and preferences. Whether you're an investor looking to buy a property, a homeowner looking to expand, or just someone who is interested in learning more about the varied aspects of different parts of Ireland, Digital Atlas is dedicated to assisting you in making informed and confident decisions along the way.

## 1.4 Target Audience
The target audience of Digital Atlas includes potential homebuyers/renters, company owners, tourists, and anybody else interested in area statistical information in Ireland. Whether you're trying to find a place to buy a home, searching for business opportunities, or researching potential communities, Digital Atlas provides useful information tailored to your requirements.

# 2. Getting Started

## 2.1 Accessing the Website

Digital Atlas cannot be accessed via a URL since it has not yet been made publicly available. Nevertheless, by following these steps, you can still access the website for testing and development needs:

- **Local Development Environment**: Ensure your PC is configured with a local development environment. Usually, this entails installing the required tools, like Node.js and Python.

- **Clone the Repository**: If you haven’t already done so, from the version control system, i.e. GitLab, where the Digital Atlas repository is located, run this command:

`git clone https://gitlab.computing.dcu.ie/hudsonj5/2024-ca326-jhudson-digitalatlas.git`


- **Install Dependencies**: Install the dependencies needed for the Django backend and the React frontend by navigating to the project’s root directory. To accomplish this, run commands as follows:

For React:

`cd DigitalAtlas/2024-ca326-jhudson-digitalatlas/code/frontend/atlas
npm install/ npm i`

For Django:

`cd DigitalAtlas/2024-ca326-jhudson-digitalatlas/code/backend/digitalatlas
pip install -r requirements.txt`


- **Run the Development Servers**: To operate the website’s backend, launch the Django development server in the `/code/backend/atlas` directory. Use the command:

`python3 manage.py runserver`

Similarly, to launch the frontend on the react development server run the following command in the `code/frontend/digitalatlas` directory:

`npm start`


- **Accessing the Website Locally**: After the development servers are up and running, you may open the browser and go to:
- [http://127.0.0.1:8000](http://127.0.0.1:8000) for Django backend, and
- [http://localhost:3000](http://localhost:3000) for React frontend
to access the Digital Atlas website.

The website can only be accessed on your computer because it is operating locally. Unless it is placed on a public server, others won’t be able to access it.

## 2.2 Navigating to the Homepage

After accessing the website, users will be directed to the homepage of Digital Atlas. The website’s user-friendly style makes it simple for users to find the information they need about specific areas of Ireland.

The homepage includes:

- **Informational Content**: An overview of the website and its goals is included on the homepage.
- **Search Bar**: A noticeable search bar where you can input the desired area of interest and will be redirected to the search page with information about all of the local features.
- **Navigation Menu**: Access to the website’s many sections, including search, amenities, crime, transport, education, housing, and contact, which are available via the navigation menu. This extensive navigation menu guarantees quick navigation across many areas of interest, improving browsing experience for users.

To navigate back to the homepage from any other page on the website, simply click on the Digital Atlas logo in the navigation menu.

# 3. Homepage Navigation

## Overview

With its simple and easy-to-use layout, Digital Atlas’s homepage makes it simple for users to acquire area-specific information in Ireland. The main components of the homepage are broken down as follows:

### 3.1 Header

The header section situated at the top of the homepage includes:

- The Digital Atlas logo, which serves as a direct link to the homepage.
- The navigation menu, containing various links to different sections of the website such as “Search”, “Amenities”, “Crime”, “Transport”, “Education”, “Housing”, and “Contact” 

### 3.2 Hero Section

The hero section, which appears beneath the header, includes the following:

- A visually appealing banner image that depicts different locations in Ireland.
- Brief but interesting welcome paragraph for users to Digital Atlas that emphasises the goal of the website.

### 3.3 Search Bar

The search bar is the main feature of the homepage and is prominently displayed beneath the hero section. Users can retrieve information specific to a given location by entering the area of interest into the search field. Upon entering the desired location, users are redirected to the search page which displays all of the features the users may be interested in.

### 3.4 Informational Content

Surrounding the search bar are sections of informational content, including:

- Brief descriptions or bullet points outlining the types of information available on the website (e.g., crime statistics, education data, transport information, amenities, average home/rent prices).
- Call-to-action buttons encouraging users to explore specific sections of the website or perform actions such as searching for an area.

### 3.5 Footer

The footer area, located at the bottom of the homepage contains the following links; quick access to key pages such as the homepage, searchpage and contact us page. It also contains copyright information.

### 3.6 Visual Design

The homepage has a visually appealing and unified design that incorporates artwork, typefaces, and colours that are consistent with Digital Atlas's branding.


# 4. Searching for Area Information

## 4.1 Inputting Desired Area

### Locating the Search Bar

When users arrive at Digital Atlas' homepage, they will instantly notice the search bar, which is prominently displayed and placed to make it simple to find information related to a specific area. This site feature acts as the entry point to an extensive database, allowing readers to explore the specifics of the locations in Ireland they are interested in.

### Entering Area of Interest

Users only need to click the search bar to activate it and start exploring. After it's turned on, users may easily enter the name or address of the place they want to look into more.

### Connecting to Search Page

It is important to note that the Digital Atlas search feature is directly linked to the homepage search bar. Users are automatically routed to the specialised search page after entering their area of interest and starting a search, where they may examine detailed results specific to their request. Users will be able to easily obtain comprehensive information about the locations they have selected thanks to this smooth transition, which guarantees a seamless transition from exploration to analysis. 

By integrating a user-friendly search bar directly into the homepage and seamlessly connecting it to the search functionality of Digital Atlas, we aim to provide users with a streamlined and intuitive browsing experience. Whether you're researching potential neighbourhoods, evaluating housing markets, or planning your next business venture, Digital Atlas is here to empower you every step of the way.


## 4.2 Submitting Search Query

### Initiating the Search

Once the desired area has been entered into the search bar, users can start a search query by clicking on the search icon or button next to the search bar. By taking this step, the user is informing Digital Atlas that they are prepared to retrieve information about the designated location.

### Viewing Search Results

When a user submits a search query, Digital Atlas quickly handles the request and uses the input to retrieve key area-specific data. A vast array of information linked to the designated location is included in the set of search results that users are shown. This covers a variety of topics, such as home prices or rent, transportation information, education data, crime statistics, and amenities. Each factual item has been carefully selected to give users a comprehensive understanding of the topic at hand.

### Exploring Area Details

Users can explore the several aspects that comprise the selected locality and get deeper into the area information once the search results are displayed. Users can explore in-depth information about crime rates, school information, transportation, amenities, and house prices/rent by navigating through the various sections of the search results. Information availability may differ based on the given location.


# 5. Search Area Details Page

## 5.1 Overview

The Digital Atlas area details page is an extensive information resource that provides users with a thorough understanding of the designated area in Ireland. Here, users get access to a wide range of data covering many areas that are essential for gaining a thorough picture of the locality. The area details page is made to give users a comprehensive overview of the area they have selected, covering everything from crime rates to school information, transport to amenities, housing costs and rent costs.

## 5.2 Types of Information Available

Upon clicking the search button, viewers are directed to a side navbar with all of the feature titles, which they can select to view based on their preferences. The search page has the following features:

- **Local Crime:** Information about crime rates and categories of reported crimes in the designated area is available to users. Data on theft, vandalism, burglaries, and other criminal activity may be included in this.
- **Schools:** Details on local schools, universities, and colleges are provided, along with an address and an eircode.
- **Transportation:** Information is accessible on train and bus stops as well as buses like Dublin Bus and Bus Eireann.
- **Amenities:** Information regarding the parks, retail establishments,restaurants, medical services, and leisure spaces that are close by.
- **Average Home Price:** Details about the typical cost of homes in the neighbourhood are provided, along with information on the typical rent for such homes.

## 5.3 Information Display

- **Charts:** To make statistical data on local crime rates easier to grasp and improve user experience, visual representations like bar charts are employed to portray the data.
- **Maps:** You can examine interactive maps that are integrated into the search page to see how the area you have specified is distributed geographically. 
- **Navigation Links:** To enable more investigation or research into particular topics of interest, links to related areas or other resources are provided inside the side navbar in the search page. This makes it easy for users to move between different sections and retrieve pertinent information as needed.


# 6. Features pages

## 6.1 Overview:

Rather than a conventional region details page, Digital Atlas has features pages that are specifically designed to offer in-depth details about each particular feature based on specific areas in Ireland. These feature pages let users enter a place and get comprehensive information about a range of topics, including average property prices, area crime, transportation, schools, and amenities. The features sections provide an easy-to-use way to get relevant information and make decisions, whether you're looking at possible neighbourhoods, or just interested about statistics for the area.

## 6.2 Types of Information Available:

- **Amenities:** Users can obtain information on the parks, retail establishments, dining options, medical facilities, and leisure spaces that are present in the designated area.
- **Schools:** Details such as name, address, and eircode for local schools, colleges, and universities.
- **Transportation:** Details are provided regarding train and bus stations, in addition to buses such as Dublin Bus and Bus Eireann.
- **Local Crime:** Information about the types and rates of crimes that have been reported in a given area, including theft, vandalism, burglaries, and other criminal activity.
- **Average House Price:** Details on the typical cost of homes in the neighbourhood as well as the typical rental price.

## 6.3 Display of Information:

- **Charts:** To improve user experience, statistical data about local crime rates is displayed using visual representations like bar charts.
- **Tables:** Tabular data arranged in tables to give users a clear and concise summary of information such as local crime rates and their ranking.

# 7. Interacting with the Website

## 7.1 Website Features Interaction

- **Search Functionality:** Users can input their desired area into the search bar on the homepage to access area-specific information.
- **Navigation Menu:** Explore the website's various areas, including "Home", "Contact”, "Search", etc by utilising the navigation menu situated in the header.
- **Interactive Maps:** Interact with interactive maps to visualise geographical distribution of the specified area.

## 7.2 Comment Section Interaction

- **Locating the Comment Section:** To locate the comment area, after searching the desired area, scroll to the bottom of the search results page.
- **Leaving Feedback:** Users can fill up the offered comment box with their thoughts, questions and observations.
- **Submitting Comments:** After writing their message, users can click the "Submit Comment" button to send it in.
- **Interacting with Other Users:** Users can interact with other users by leaving comments, adding more details, or indicating agreement or disagreement with others by liking or disliking comments.

## 7.3 Benefits of Comment Section

- **Community Engagement:** Encourages a feeling of community among users by facilitating the exchange of questions, experiences, and guidance.
- **User Empowerment:** Enables users to share their expertise and thoughts, improving the overall user experience and offering insightful data to others who are thinking about the field.


# 8. Technical Details

## 8.1 Technologies Used

### Back-end:
The Digital Atlas website's back-end is developed using the high-level Python web framework Django. Strong features like database management, URL routing, authentication, and session management are all included in Django, which makes it easy to create scalable and secure online applications.

### Front-end:
Digital Atlas's front-end development makes use of React, a JavaScript user interface toolkit. With React, it is possible to create dynamic, interactive user interfaces that work seamlessly on a variety of devices.

## 8.2 Querying APIs and Datasets

### API Integration:
To obtain area-specific data, including crime statistics, school information, transportation data, amenities, and typical house prices, Digital Atlas searches external APIs and databases. Reputable sources including Geoapify API, GTFS, Mapbox Geocoding API and the Central Statistics Office are the source of these datasets and APIs.

### Data Processing:
The Django back-end's Python scripts are in charge of sending HTTP requests to the APIs in order to retrieve the necessary data, process it, and display it on the website. After being retrieved, the data is saved in the database and dynamically displayed on the front end through the use of React components.

## 8.3 Technical Requirements

### Supported Browsers:
Google Chrome, Mozilla Firefox, Safari, Microsoft Edge, and other contemporary web browsers are all optimised for use with Digital Atlas. For optimal performance, users are advised to utilise the most recent versions of these browsers.

### Internet Connection Speed:
To use the Digital Atlas website and quickly retrieve area-specific data, you must have a reliable internet connection. Although the website uses optimisation measures to reduce loading times, users will have a better overall experience if they have quicker internet connections.


# 9. Conclusion

In this user guide, we’ve provided you with all the information required to successfully browse and use the Digital Atlas website in this user guide. Below is a synopsis of the main ideas discussed:

1. **Accessing the Website:** Guides explaining how to get to the website locally or via a URL for testing and development.
2. **Navigating the Homepage:** A thorough rundown of the navigation menu, search bar, and informative items on the site.
3. **Using the Website:** Instructions on how users can use Digital Atlas's features, such as commenting on areas and offering their opinions.
4. **Technological Overview:** Details regarding the technologies utilised, datasets and querying APIs, as well as the technological specifications needed to see the website.

## Thank You!

We really appreciate that you have made Digital Atlas as your go-to source for area specific information in Ireland. With our platform, we strive to improve your entire user experience and give the insights and functionality you need to make wise decisions.

### Closing Remarks

Your opinions and comments are very important to us as we develop and grow Digital Atlas further. We welcome your feedback, questions, and suggestions for future improvements. Once again, I want to thank you for joining the community at Digital Atlas. As you go through and discover Ireland's various regions, we look forward to being of service to you.
