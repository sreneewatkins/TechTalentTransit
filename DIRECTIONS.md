# Test Addresses

We now have a fully functional app! Remember that this is for Atlanta's 
transit system and we hardcoded "GA" into our API request, so it's only 
valid to test locations in Georgia. Here are a few:

Address: 65 Alabama St SW
City: Atlanta

Address: 1761 Howell Mill Rd NW
City: Atlanta

Address: 215 College Cir
City: Buchanan

# Homework

1. Currently, the map shows all bus locations and centers the map on the closest bus. 
   Change the map so that in addition to buses, it also shows the user's location. 
   Each bus pin should be a picture of a bus and the map should center on the user's 
   location.

2. Add text to the map so that when you click on a bus pin, it opens a popup that 
   includes the bus number.

3. Add error handling. Currently, if an invalid address/city is entered, the geocoding 
   API returns an error which causes the page to error out.

4. Play around with the page layout so that the map is next to the table, not below it. 