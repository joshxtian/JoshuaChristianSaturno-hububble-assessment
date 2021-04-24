Question 2: Find the errors
===========================

### DOCTYPE
There is no declaration of DOCTYPE, this html won't be 
able to instruct whatever version the code was written

## SCRIPT
The Script tag on the head should be placed right before the </body>. 
The reason behind this is the website loads from top to bottom there 
for when the page loads the script won't find any elements to interact with.
## STYLING
The recommended way to style an html is by the use of an external css. 
This way seperates css from html code, and also allows styles to be shared 
to other html files. 

## .page-heading
The reason for this is the ::after pseudo element needs a content for it to show. Therefore it needs to have a "content: ' ' " attribute. The position attribute also needs to be modified from "absolute" to "relative", by doing that we could remove the bottom and left attribute. Also display attribute needs to be set to block because ::before and ::after elements

## CLASS-NAMING
the .div class is a wrong way of naming elements
INVISIBLE-DIV - The invisble div is still showing because 
.div class overrides .hidden-div's display element to "none"