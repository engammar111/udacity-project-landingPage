/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

/**
 * Define Global Variables
 *
 */

/**
 * Selecting the sections elements and storing them in the sections variables. I used map instead for each so i have to convert the output of the selection to array so i used Array.from() method
 *
 */
const sections = Array.from(document.querySelectorAll("section"));
/**
 * Creating Document element fragment and storing it in variable
 *
 */

const createdNavBar = document.createDocumentFragment();

/**
 * Selecting ul elements and storing it in variable
 *
 */

const ulItem = document.querySelector("ul");

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

//looping through section elements => selecting and creating necessary elements for building the navbar
sections.map((section) => {
  //creating new li elements and storing it in variable
  const newListItem = document.createElement("li");
  //creating new anchor elements and storing it in variable
  const anchorLink = document.createElement("a");
  //selecting attributes from the section elements and storing it in variables
  const attributeID = section.getAttribute("id");
  //selecting attributes from the section elements and storing it in variables
  const navBarItem = section.getAttribute("data-nav");
  //adding classes to anchor element
  anchorLink.classList.add("menu__link");
  //adding attributes to anchor elements
  anchorLink.setAttribute("href", attributeID);
  //adding event listeners to anchor elements and prevent default behavior of the element
  anchorLink.addEventListener("click", (event) => {
    event.preventDefault();
    section.scrollIntoView({ behavior: "smooth" });
  });
  //storing new text for navbar items using the same section name
  const addText = document.createTextNode(navBarItem);
  //creating the text
  anchorLink.appendChild(addText);
  //creating the anchor Links
  newListItem.appendChild(anchorLink);
  //creating the li items
  createdNavBar.appendChild(newListItem);
  //creating the navBar
  ulItem.appendChild(createdNavBar);
});

/**
 *
 *  Helper Functions to  Detect the element location relative to the viewport
 *
 */

pageSections = (section) => {
  const getBoundary = section.getBoundingClientRect();
  if (getBoundary.top >= -40 && getBoundary.top < 400) {
    section.classList.add("your-active-class");

    // Set navBar as active class
    const activeList = document.querySelectorAll(`a[href='${section.id}']`)[0]
      .parentElement;

    activeList.classList.add("active");
  }
};
// Add class 'active' to section when near top of viewport
document.addEventListener("scroll", () => {
  const activeSection = document.querySelector(".your-active-class");
  if (activeSection) {
    activeSection.classList.remove("your-active-class");
  }

  // Check what Section  & remove the navBar class from the nav-bar
  const activeNav = document.querySelector(".active");
  //Checking the sections on screen
  if (activeNav) {
    //Removing the navBar class from the nav-bar
    activeNav.classList.remove("active");
  }
  //invoking the function
  sections.map((section) => {
    pageSections(section);
  });
});
