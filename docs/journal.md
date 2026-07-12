# dockerizing this app caused build issues
## node 25 incompatible

## Code Review - Row.js
- useState and useeffect used -- need to understand
- already using movies.map to generate ui
- returns html

- fetch concept  -- store concept -- render concept --> we need only render fetch and store need to be removed and placed elsewhere
- dead code removed
- add more props to better define the data
- ui enhancements later on

- Questions: syntax related, useEffect working, can we use show and hide functions here or do it while rendering applications

## Current Project Understanding
- Separate files for different functionalities
- ContentCard function exports a card which will be used inside a row in row.js
- row.js should not contain any dead code
- problem 01 - row.js takes data from tmdb, i am using a set of movie objects in an array --> refactoring will mean connecting api but that should be done in another file --> how can i refactor row.js to render contentcard
