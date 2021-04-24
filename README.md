# Hububble Front-end Developer Assessment

Welcome to our developer assessment for junior front-end developer candidates! The assessment is divided into two parts: written responses and coding exercises.

To complete the assessment: 

- clone this repository
- complete the tasks listed below
- create your own git repo using the name format \[your-name\]-hububble-assessment
- email your repository link to hsiang@hububble.co

We expect this assessment to take around 4-6 hours for a proficient front-end developer. You should aim to spend at most 1 hour on the written portion and the rest of your time on the coding portion.


## Part 1: Written

This part of the assessment will test your understanding of the front-end development process, your verbal communication skills, and problem solving skills.

Note that this is not an English test; we are not assessing your grammar or fluency - but we will look at how well you communicate ideas about coding and development, as this is an important part of collaborative development. 

### Question 1: Think before you code

![screenshot](/Written/question-1/reference.png?raw=true)

The image above is a screenshot from our blog homepage. If you were given this design to turn into a coded HTML template, how would you approach it? _Without writing any CSS or HTML code_, explain your thinking process and approach to this design. 

What questions would you have? What considerations would you need to take to implement all of the features as seen in the design? What obstacles or challenges might you encounter when coding this design? How would you implement the small details in the design?

Remember that the code for this design will be implemented in a CMS with dynamically generated content, and is not just a flat layout. How does that affect your approach? 

**Submitting**

To submit this answer, create a file in the `Written/question-1` folder titled `answer.md` (.txt format is also acceptable)

----

### Question 2: Find the errors

Review the sample HTML in `Written/question-2/buggy.html`. Identify as many errors / mistakes as you can, related to HTML/CSS/Javascript. As this is part of the written assessment, we prefer you to describe the problems in plain English - and explain how they can be fixed.

**Submitting**

To submit this answer, create a file in the `Written/question-2` folder titled `answer.md` (.txt format is also acceptable)

----

### Question 3: Share a story

Tell a story of a time you improved your skills as a front-end developer. Take the time to explain how you solved the problem and what you learned from the process

Choose one of the two following options:

- Share a time you encountered, and solved, really frustrating bug.
- Share a time you learned a new tool or methodology to solve a challenging problem.

**Submitting**

To submit this answer, create a file in the `Written/question-3` folder titled `answer.md` (.txt format is also acceptable)

----

## Part 2: Coding

This part of the assessment will test your grasp of fundamental aspects of front-end development, and your competency with HTML, CSS, and Javascript. We will be looking at: 

- accuracy / completeness (did you meet all the requirements of the task?)
- code quality / format (is your code easy to read, written with best practices?)
- browser compatibility (how well does your code work on different devices and browsers?)

**Submitting Exercises**

Although we provide Submitting instructions for each exercise, we understand if you wish to create your own folder structure/build environment for the coding exercises. This is fine as long as they are well-organized and clearly documented.

**Preprocessors and Frameworks**

All of the exercises can be completed without build tools or environment setup.

All javascript should be written in plain vanilla javascript syntax (no jQuery).

CSS can be written as basic CSS, or using preprocessors like SASS, SCSS, or PostCSS


### Exercise 1: PokeFetch

In this assignment you will use javascript to fetch data from the [PokeAPI](https://monosnap.com/file/9RGVewjicuP2ls5RXKRyZITzfOj2f1) and display it to the user. 

Using the simple HTML boilerplate in `Coding/exercise-1/pokefetch.html` as a starting point, write javascript that will return a pokemon's **sprite, types, and base stats** to the user when searched in the text field.

A basic example is demonstrated in the screenshot below: 

![screenshot](/Coding/exercise-1/pokefetch-screenshot.png?raw=true)

**Requirements**

- the Types (if there are more than one) should all be presented in one comma-separated string within a single HTML tag.
- the Stats must be displayed in an unordered list, one `li` tag per entry
- No jQuery
- Your code should be able to run on a local development server like [http-server](https://www.npmjs.com/package/http-server)

**Other notes**

- If you use other build tools, please provide documentation and place it in the `Coding/exercise-1` folder as `poke-readme.md` (.txt format also acceptable)
- For this exercise you don't need to worry about CSS or styling
- It is up to you to determine how to handle issues like client-side validation and error handling.

**Submitting** 

Any files you create for this project should be placed into the `Coding/exercise-1` folder along with any readme or instructions you wish to provide.

---

### Exercise 2: Make a Slider

In this assignment you will be asked to create a bare-bones HTML/JS/CSS responsive slider. Given the HTML in `Coding/exercise-2/index.html`, use CSS and Javascript to create a functional interactive. 

You may use 3rd-party libraries as long as they are ES6/ES5-based javascript libraries (no jQuery). 

This assignment will be assessed on the following criteria:

- does the slider work?
- are the transitions smooth? 
- is it easy to use?

Feel free to get creative with how you style the slider, buttons, and pagination - but we are not assessing your design or creative abilities. 

**Requirements** 

- You must not edit any HTML in `index.html` (the only exception is you can remove the text from the prev/next buttons and pagination list items for the purpose of adjusting the appearance).
- The slider should loop (forwards and backwards)
- The pagination buttons should be clickable
- The prev/next buttons should work
- The slider should be functional on any size screen (and work with touch inputs)

**Submitting** 

Any files you create for this project should be placed into the `Coding/exercise-2` folder along with any readme or instructions you wish to provide.

---

### Exercise 3: Clone Google Homepage

In this exercise you will clone the layout of [Google's homepage](https://google.com) with **HTML and CSS Only** (no javascript!). Your code should copy the look and feel of the google homepage as closely as possible, and recreate the user interactions and user experience as closely as possible. 

You do not need to make the links or search features work; focus instead on layout, interaction and design.

You can use any CSS preprocessor or build tools that you like for this exercise.

You will be evaluated on:

- accuracy
- quality of interactions
- CSS code quality (class naming, structure, readability)
- proper use of semantic HTML
- responsiveness 

**Requirements**

**Submitting** 

Place all your files in the `Coding/exercise-3` folder along with any readme or instructions you wish to provide.