# pdl library

The physics diagram language, based on p5js.

A physics language for developing static and interactive diagrams on the web

## update: to celeebrate release on P5js

The manual is now a Wiki, here.

THe latest refactoring is pdlComponents.js.
 
##

The manual is updated more or less in sync with the environment...working principle is that the environment is lways a superset of the manual.

## sample 

You'll need to fix the paths to the p5js libraries (/sample/index.html) and set your own fonts(/sample/pdlWorkZone.js), as well as fontface URLs in the css(/__support/PDL.css). The css supports the physics markup language, as a way of displaying editable technical text for physics within diagrams, and the display of DOM elements.

## a rationale

Expressing physics diagrammatically on a web page with the fruitful precision required in order to best support learning tends to be seen as a demanding technical task for technical illustrators.  Few teachers or authors develop the necessary familiarity with illustration software in order to generate their own diagrams. This tends to lead to diagrammatic representation becoming a second-class citizen in communicating physics to young people. 

A second issue is that such diagrams often combine technical conventions, textual and diagrammatic, that act as tripwires for the authors, and perhaps even more so for any non-PER aware technical illustrators or animators brought in as external resources to execute the diagrams.

A third issues is one of maintainability, especially with respect to textual elements. Whereas many high-end illustration packages do have hierarchical symbol sets, which allow a change to be propagated though a set of diagrams, they do not do so well when faced with similar tasks based on technical text.

## some affordances

Life is easier with a real text editor, with all the power that this implies, including support for code-completion, snippets and syntax highlighting.

The primities are designed to match the construction of diagrams to the thinking patterns of teachers of physics (Think “force with magnitude and rotation”, rather then “that arrow, with the right style of head, of the right length, varying the length stem but not the head of the arrow, and other graphic details).

There are elements to allow for interaction such as sliders, dividers, buttons and checkboxes, as well as the ability to work in the three dimensional space and two separately engineered implementations of an infinite canvas.

