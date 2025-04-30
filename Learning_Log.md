# Learning Log

## Week 1

**Goals (Week 1):**
- Master Figma basics (frames, groups, components, auto-layout).
- Collaborate effectively in our shared Concept Map file.
- Contribute a node that guides development.

### What I Did
I started by creating a personal Figma account and exploring the three default templates: Concept Map, Flowchart, and Wireframe. After joining our team's workspace, I duplicated the shared Concept Map into my own project. To build foundational skills, I completed Figma's official "Getting Started" tutorial, then watched a YouTube overview of key shortcuts and best practices.

Firstly, I decided to contribute to the decomposition map. On the back end of the pint pricing side of the website, I noticed the idea to store all required information in JSON files. While I agree with this, editing what is stored in those files, like prices of pints, may be difficult. Thus, I added an extra node describing an easy way to edit these details for developers.

On our ideas board, I contributed detailed text proposals:
1. **Save Favourite Routes** – Keep user-defined bar-crawl routes (noting that future authentication would be required).
2. **Export Route** – Enable download of route data as text, JSON, or an image.

I gathered initial feedback by tagging teammates in comments and discussing feasibility.

### What I Learned
- **Figma Interface**: Difference between frames and groups; creating and detaching instances; auto-layout's padding/margin controls.
- **Component Management**: How to use component properties and variants to support light/dark UI mocks.
- **Collaboration Features**: Version history branching, comment resolution, and file-permission settings to control edit rights.

### Changes to Goals
Originally I planned only to add a single node. By mid-week, I expanded my scope to include low-fidelity prototyping and plugin exploration to support future design tasks more robustly.

### Next Steps
- Prototype click-through flows by linking concept nodes to wireframe frames in Figma's Prototype tab.
- Explore Figma plugins for developer handoff.
- Draft and share preliminary home-screen and map-view wireframes for peer review.

**Resources consulted:**
- [Figma "Getting Started" tutorial](https://www.figma.com/resources/learn-design/)
- YouTube: "Getting started with Figma: A beginner's guide" by Kevin Powell

---

## Week 2

**Goals (Week 2):**
- Understand React components, Next.js routing, and TailwindCSS styling.
- Build a responsive Next.js demo showcasing state management and dark mode.

### What I Did
I began with a 10-minute video explaining React's core ideas (JSX, components, props) and a separate crash course on Next.js file-based routing versus the new App Router paradigm. To fill knowledge gaps on utility-first CSS, I used ChatGPT to discuss TailwindCSS and its utility classes.

Next, I created a new project via npx create-next-app, choosing TypeScript and Tailwind support. Over two days, I created a simple Card component that displayed a heading, paragraph, and toggle button. Clicking the button switched its label, demonstrating useState. I then styled the card using Tailwind classes, centering content, adding rounded corners, shadow, hover transitions, and responsive font sizes. I also implemented a dark-mode toggle by conditionally applying a dark class and adjusting utilities accordingly.

### What I Learned
- **Next.js Structure**: Differences between pages and App Router, server vs client components.
- **TailwindCSS**: How the compiler generates only used classes, best practices for organising utility classes and customising themes.
- **TypeScript Benefits**: Improved IDE support, catching type errors in props/state before runtime.

### Changes to Goals
Initially I planned only to experiment with React and Tailwind. After seeing the benefits, I added TypeScript support and a linting setup to the week's objectives.

### Next Steps
- Research global state management with React Context or a lightweight library.
- Extend the demo by adding routing: create separate pages for Map and Settings.
- Draft a component hierarchy diagram for our bar-crawl app (Header, MapView, RouteList, Controls).

**Resources consulted:**
- [React docs: Getting Started](https://reactjs.org/docs/getting-started.html)
- [Next.js documentation](https://nextjs.org/docs)
- [TailwindCSS Guide](https://tailwindcss.com/docs)

---

## Week 3

**Goals (Week 3):**
- Clean the Git repository and configure the gitignore.
- Integrate an interactive map in React using React-Leaflet and OpenStreetMap.

### What I Did
I looked at the repo and saw that both frontend/node_modules and backend/node_modules were tracked. I removed them, updated .gitignore to ignore /node_modules, /dist, and environment files, then confirmed cleanliness with git status. Merging these fixes improved clone performance for all team members.

I configured popups to display pub names and details on click.

To improve navigation, I added a Bootstrap navbar and lifted an activeSection state into the layout. Clicking a navbar link updated activeSection, and a useEffect hook scrolled the matching section into view smoothly.

### What I Learned
- **React-Leaflet Integration**: Setting up Popup components.
- **CSS & Layout**: Combining Bootstrap's utility classes with custom styles to build a responsive navbar.
- **Git Clean Up**: Removing large folders early to keep repo size manageable and applying gitignore effectively.

### Changes to Goals
Originally, I planned to focus only on cleaning the repository, but I expanded my goals to include frontend improvements after reviewing the map integration. This included enhancing user interaction with popups and adding navigation with a responsive navbar.

### Next Steps
- Design and integrate custom marker icons (e.g. beer mug icons).
- Implement marker clustering for areas with many pubs using react-leaflet-markercluster.
- Write end-to-end tests to validate map loading and popup behaviour.

**Resources consulted:**
- [Leaflet Reference](https://leafletjs.com/reference.html)
- [React-Leaflet Documentation](https://react-leaflet.js.org/)

---

## Week 4

**Goals (Week 4):**
- Implement "View on Map": selecting a pub in the list opens its popup.
- Deepen understanding of React hooks and third-party API timing.

### What I Did
My initial approach passed a selectedPubId prop to PubMap and triggered openPopup() during render, which produced React warnings about state updates in render. To address this, I refactored to use a useEffect hook inside PubMap that watched for selectedPubId changes, accessed marker instances via refs, and invoked openPopup(). However, because markers mounted asynchronously, popups sometimes failed or flashed.

Reviewing Leaflet's API, I discovered that attaching the popup logic at marker creation time is more reliable. I updated the marker-loop to check each pub's ID and call openPopup() immediately when matched, and added a popupclose event listener to reset selectedPubId in state. This ensured consistent behaviour across re-renders and navigations.

To improve maintainability, I began outlining a custom usePubMap hook that abstracts map initialisation, marker management, and popup controls.

### What I Learned
- **Hook Patterns**: Why side effects belong in useEffect and not in render.
- **Leaflet Events**: Using openPopup() and reacting to popupclose for clean state management.
- **Asynchronous Mounts**: Ensuring third-party components are fully initialised before interacting with them.

### Changes to Goals
Mid-week, I added a goal to encapsulate map logic into a reusable usePubMap hook for clarity and reusability.

### Next Steps
- Complete the usePubMap hook: accept pubs list and selected ID, return control methods.
- Add a loading spinner while map tiles and markers initialise.
- Document the "View on Map" sequence with a simple flowchart in Figma.

**Resources consulted:**
- [React Hooks: useEffect](https://reactjs.org/docs/hooks-effect.html)
- [Leaflet API: openPopup & popupclose](https://leafletjs.com/reference.html)

---

## Week 5
 
**Goals (Week 5):**
- Optimise layout: full-height map under a fixed navbar.
- Store user-created routes using browser Web Storage.

### What I Did
I measured the navbar's height in Chrome DevTools and applied viewport-height units: setting the navbar to 13vh and the map container to 87vh, which eliminated empty space below the map. To store routes without authentication, I researched MDN's Web Storage API and chose localStorage.

I added save and clear buttons to the UI. The handleSave function reads the savedRoutes array from localStorage (or initialises an empty array), appends the current route, and writes the updated array back as a JSON string. The handleClear function removes the key and resets React state accordingly. A useEffect hook watches savedRoutes in localStorage and updates component state whenever it changes. Finally, I populated a dropdown menu listing each saved route, selecting an item reloads that route into the page.

### What I Learned
- **Viewport CSS**: Practical use of vh units for responsive full-screen layouts.
- **Web Storage Patterns**: JSON and parsing, state synchronisation via useEffect.

### Changes to Goals
While initially I only planned to implement route saving, I decided the option to delete individual saved routes to improve flexibility and user control could be added.

### Next Steps
- Add a delete icon next to each saved route in the dropdown for single-item removal.
- Explore exporting saved routes as downloadable JSON files for sharing.
- Research lightweight backend options to enable authenticated users.

**Resources consulted:**
- MDN Web Docs: [Window.localStorage](https://developer.mozilla.org/docs/Web/API/Window/localStorage)
- Bootstrap 5: [Dropdowns](https://getbootstrap.com/docs/5.0/components/dropdowns/)