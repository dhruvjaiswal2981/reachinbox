## ReachInbox - Email Management Web App
- This is a simple email management web application built with React. The app fetches a list of emails from an API, allows users to view email details, delete emails, and reply to them through a clean and intuitive user interface.

# Table of Contents

Features
Technologies Used
Installation
Usage
Project Structure

# Features
Fetch and display a list of emails from an external API.
View email details (Subject, From, To, Sent Date).
Reply to emails with a rich text editor.
Delete emails with a single button press.
Keyboard shortcuts for quick actions:
Press D to delete the selected email.
Press R to open the reply editor.
Smooth animations and an enhanced UI/UX using custom CSS.

# Technologies Used
- Frontend: React, CSS (custom styles with animations)
- Backend API: Axios (for HTTP requests)
- Styling: CSS (for component styling and layout)

# Installation

Follow these steps to run the project locally.

Prerequisites
Ensure that you have the following installed on your machine:


Setup Instructions
Clone this repository to your local machine:

bash

git clone https://github.com/dhruvjaiswal2981/reachinbox.git
Navigate to the project directory:

bash

cd reachinbox
Install the dependencies:

bash
npm install

Start the development server:

bash
npm start
Open your browser and navigate to http://localhost:3000 to view the app.

# Usage
Once the app is running, you will be able to:

View a list of emails fetched from the API.
Select an email to view its details.
Delete emails by pressing the "Delete" button or using the D key.
Reply to emails by pressing the "Reply" button or using the R key, and compose a message in the reply editor.

# API Endpoints
- GET Emails: GET https://hiring.reachinbox.xyz/api/v1/onebox/list

- DELETE Email: DELETE https://hiring.reachinbox.xyz/api/v1/onebox/messages/:threadId

- POST Reply: POST https://hiring.reachinbox.xyz/api/v1/onebox/reply/:threadId

# Keyboard Shortcuts
D - Delete selected email
R - Reply to the selected email