Time spent 3h 30 - 4h
# Notes: Only main requirements without refactoring!

## React Developer Recruitment Task
### The task:
Fork/Copy starting application from https://github.com/MaciejDonarski/Skunexus-Start-Wars-Recruitment/tree/master​.
At the start you have a simple application which displays planets from Star Wars in grid. Your task is to upgrade it respecting the principles from Tech Stack, Must-have (Good to have and paying attention also)
1. Replace dummy data with dynamic data from ​https://swapi.dev/api/planets/
2. Planets grid have two buttons - follow the instructions in console.logs
 
3. Create
4. Create
another action which will redirect to Planet details page
another action which will open modal with form with fields:
○ name - text
○ rotation_period - number
○ orbital_period - number
○ diameter - number
○ climate - text
○ gravity - text
○ terrain - dropdown
○ surface_water - number
● all fields should be required,
● on form submit, close modal and show random success/error message (there
is no endpoint)
5. UpdateGrid component so that the display of actions is conditional
6. Make displaying ‘​Go to Films​’ and ‘​Go to Residents​’ whether or not they exist
7. Update Grid component so header data will contain type of value and if it’s number
align to right
8. Add two custom columns to Planet grid - ​Residents​ and ​Films​ which will contain
number of them. Try to do that by modify Planets component in App component and only prepare Planets component to be more customizable, in case we would like to use origin Planet components in other places
Mockups:
● no mockups but would be great if you make that app pretty :)
Tech stack:
● react (CRA starter) ● react-router
● redux