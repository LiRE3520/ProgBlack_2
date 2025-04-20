# Learning Log
## Week 1
### Learning Figma
The first learning curve for me was the introduction to Figma. I have used other mind-mapping software before, so I felt somewhat confident. Before I started, I created a personal Figma account so I could explore its resources. I noticed the default files in a project are the Concept Map, Flowchart and Wireframe. The team decided we should focus on the Concept Map. After watching a short introduction on YouTube, then following Figma's own tutorial and testing things out on my own account, I felt ready to contribute.

### Contribution to the Concept Map
Firstly, I decided to contribute to the decomposition map. On the back end of the pint pricing side of the website, I noticed the idea to store all required information in JSON files. While I agree with this, editing what is stored in those files, like prices of pints, may be difficult. Thus, I added an extra node describing an easy way to edit these details for developers.

### Contribution to the Ideas Board
The ideas board was already filled with good ideas involving front and back end design. However, I noticed missing features involving bar crawl routes. I thought a good idea was to be able to save favourite bar crawl routes to a favourites page, assuming we will use accounts for individual users. Or, similarly, a user could export a bar crawl route as text, or a picture.

## Week 2
### Getting my head round the tech stack
The next new concepts for me consisted of React itself, Next.js and TailwindCSS. Going into this project, I only had a very rough idea of what React is, and I'd never heard of Next.js or TailwindCSS. The first way I chose to introduce myself was a ten minute Youtube tutorial and explanation on what React is, before using generative AI models to teach myself what TailwindCSS and Next.js are.

### Creating react_test with Next.js
Realising Next.js and React are npm modules made sense for me. I created a Next.js project using their automatic installation I found in their docs, where I then answered questions for the set up. Running the Next developer mode was very convenient, which reminded me of nodemon.

### Creating a React element
After learning what an element is in React, I created a test div, which contained a header, paragraph and button.

### Using TailwindCSS
Using the docs, I was able to use TailwindCSS to add some custome styles to the element, including centering the div, adding text colours and fonts and hover transitions for the button.

### Finishing the full test project
I finished off the test project by adding some dynamic functionality to the button by using React's 'useState'. When the button is clicked, the text changes on the button. Also, I learnt about the ability TailwindCSS has to change formatting depending on the screen size, which I used to reduce the font size of the header and paragraph when the screen size is small.

## Week 3
### Cleaning up the Git repo
After my first git clone, I noticed node_modules for both frontend and backend were in the repo - likely because .gitignore was added after the folders were created. I fixed it by deleting node_modules, committing the removal, then adding the correct paths to .gitignore, after I noticed the frontend node_modules folder was missing, and committing that.

### Learning and using Leaflet
Before using Leaflet, I spent some time researching how it works, particularly with React, since we chose it as a free alternative to Google Maps. The map container and markers were already set up by someone else. Through my research, I discovered Leaflet’s popup feature, which I then used to display the name and details of each pub when its marker is clicked.

### Adding a navbar
I have used Bootstrap and navbars before, so creating a navbar and adding CSS was tedious, but simple. However, I struggled when it came to making the navbar buttons functional, where I wanted each button to link to a part of the page. This was not as simple as using the DOM and plain HTML. I had to learn how to create activeSection as a state, then pass setActiveSection as a prop down to the navbar from the app.js file. I also had to send activeSection as a prop to the top layout page, where I had to learn and use conditionality to decide which section to show.

## Week 4
### Making "View on Map" Functional
I set out to add functionality the "View on Map" buttons on the pubs list so that clicking one would navigate to the pub map with its popup already open. My first approach was to create a custom open-popup component that recieved the selected pub's ID, and manually created a popup if there was a selected ID. However, this led to "cannot update state during rendering" errors, since I was calling a setState during the render.

### Debugging with useEffect
To get around the error, I changed the logic to use a useEffect, that watched for changes in the selected pub ID. I'd never used useEffect before, but I was hoping that once the ID was set, the effect would trigger and open the popup. But when I tried it, the popup wouldn't consistently open and sometimes I'd land on the map with no marker highlighted, or the popup would only flash briefly.

### Switching Leaflet’s Event Handlers
I decided to do some more research into the Leaflet docs, I discovered the openPopup method and the ability to attach event listeners directly to markers at render time. I switched strategies, where in the map's setup routine, when looping through the pubs, two event handlers are added on the chosen pub. One to add the popup, and one to clear the value of the chosen pub.

### Reflection and State Management Practice
I also used this process as an opportunity to reinforce my knowledge of React's useState and passing down props. I had to use another useState to store the value of the selected pub from the pubs list, and this had to be passed up and then down to the map page. While concept was already somewhat familiar now, I had to get my head around the syntax, especially for passing down both the variable and the updater function together.