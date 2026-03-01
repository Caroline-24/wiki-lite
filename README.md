# WikiLite

Original Wikipedia link: https://www.wikipedia.org/
WikiLite is a simplified react-based rebuild of Wikipedia. 

## How to Run WikiLite
1. Clone repository
2. npm install
3. npm run dev

## Scope of Recreation
- This project recreates the core user flows of Wikipedia and recreates the home page with search function, article previews, individual article pages, and Wikimedia projects. It focuses on a cleaner navigation and highlighting Wikimedia projects.

## Features Implemented
- Implemented a search feature that filters articles based on user input
- Clickable article previews
- Individual article pages using route parameters
- “Projects” page for Wikimedia projects
- Navigation bar with Home and Projects links
- Dark and light mode
- Added conditional rendering to show a message when no articles match the search.

## Technical Implementation
- State is managed using useState hook within the Home page
- Used React Router to got to home page and search and see article previews, go to individual article pages using dynamic route parameters, and see the Wikimedia projects page
- Used useState to manage search input and filtering
- Used useParams to retrieve article ID 
- Used React Router navigation hooks for page transitions

## Live Site URL

## Repository URL

## Future Improvements
- Integrate real Wikipedia data 
- Improve mobile responsiveness
- Add related article suggestions
- Expand article content structure with headings and sections

