# Design

Two APIs are exposed, one to take a whole URL and generate a shortened URL from it, which can be random or user-provided and the other, which takes a shortened URL and triggers a redirect to the original URL.

The required information is maintained in a simple postgres table which has columns for the id, the shortened code and the actual link. The id is used as the primary key and is an integer representation of the value in the code column inorder to act as a better index for the table as well as provide a one-to-one mapping to the link. Creating a new short code is as simple as choosing a random number in the required range and converting it to a string. A base64 string consisting of characters a-z,A-Z,0-9,-,\_ is used here. Choosing a 7 character string, allows us to shorten 64^7 URLs which should scale quite well.
