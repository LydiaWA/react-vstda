In this project you are going to build a Todo app using React that allows users to enter their todo items and prioritize them based on their importance.

You will also be able to edit items using the edit link

Lastly, you can mark an item as completed by checking its box.

Step 1 - Plan the UI
Draw out the User Interface (UI) hierarchy. Think about patterns in the UI that repeat, and sections of the UI that show or hide. Also start thinking about the User's Experience (UX). What will change when the user clicks on buttons/links?
Step 2 - Wireframe your Application
Create a wireframe for your application structure, using any tool or format you find effective. Check out draw.io for a good place to get started. Your wireframe should be a comprehensive breakdown of your React component structure, including which components will hold state, and which components will be nested within each other. Often times in React, we end up creating too many or too few components. Planning out the exact components you think you'll need, will help make the development process smoother.
Step 3 - Make a Static App
After you scaffold this project using the desktop app, be sure to initialize a git repository.
Build a static version of the app in React. At this point it doesn't need to have all the styling, or look pretty at all. But, it should have all the basic HTML structure. The key is to get it to the point where you have separate components that act as containers, forms, and items that repeat.
Your app needs to be easily tested programatically. In the real world this is a best practice. It is common to setup automated tests to ensure that your app is always functioning as required, even after updates are made to your code.
Step 5 - Identify the represenation of the state
Consider how you will store/track whether a todo is currently being edited, so you will know when to show the edit form. 
Step 6 - Where Should State Live
Identify where (in which component) your state should live.
Remember to:
Identify every component that renders something based on that state.
Find a common owner component (a single component above all the components that need the state in the hierarchy).
Step 7 - Add custom functions
Add your own custom functions to handle events:
Update the state when the submit button(s) are clicked
Update the view to show the edit form when a link is clicked
Update the state when the delete link is clicked
Update the state when the completed box is checked