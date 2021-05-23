# Design

Table columns are [id, code, link]
Number.MAX*SAFE_INTEGER = 9007199254740991 -> max value we can use in JS
This is a 4B integer less than 7 bytes VARCHAR string size which we were thinking of using for the code column in the DB
The code can be kept as VARCHAR(7), but we can set primary key id of table as base 10 of a base 64 string we use for the code (A-Z,a-z,0-9,* => 64)
This integer can be used as primary key instead of a self incrementing id because we can use this calculated id to search code
Using a number for b + tree is better for storage and searching performance
Code is base64, id is calculated from it by converting to base 10 integer

Persistence/model layer => ORM in node -> sequelize
routes layer => to redirect to target page
Controller/Service layer => logic
