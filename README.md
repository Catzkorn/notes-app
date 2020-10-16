# Scratch Pad =^._.^=
A notes app for cool cats.
Check meeoowt here - http://scratch-pad.surge.sh

### Team Members

* Charlotte Brandhorst-Satzkorn
* Cristina Fujiname
* Louis Kirkham
* Ollie Smith
* Veronica Lee


## User Stories

**US1 - Create note**  
As a programmer  
I want to create a new note  
So I can record something I need to remember

**US2 - View abbreviated notes**  
As a programmer  
I want to see a list of my notes, where each note is abbreviated to the first 20 characters    
So I can find the one I want

**US3 - View abbreviated notes**  
As a programmer  
I want to see the full text of an individual note on its own page  
So I can see all of the information in the note


## Technologies used
#### Frontend
Scratch pad is a single page web app, implemented using javascript, HTML and CSS.  

#### Deployment


Class Diagrams
Class diagrams were created to give a basic structure to class expectations during the project.

Class Diagrams

Management classes were used to interact with the database by passing in space, booking or user objects.

Space Management class:
Methods:

show all spaces

create space(space_object), with name, price and description

shows user_spaces(user_id)

shows specific spaces view_spaces(space_id)

shows specific spaces according to availability

shows specific spaces according to availability

contains a method for converting string month to a date object

User Management class:
Methods:

has a sign up functionality

has a log in functionality

note that logout functionality is implemented by destroying a session, no need for a method itself.
Booking Management class:
Methods:

show customer bookings

show host listings booked

confirm booking

request booking

show host pending bookings

CRC Diagrams
CRC diagrams were initially created to mock the structure of databases and what datatypes may be suitable for use.

CRC Diagram

MVC Diagram
A MVC diagram was created to visually represent the log between the client, controller, model and viewer.

MVC Diagram

Database
Structure
Test environment consisting of 2 Databases;


To set-up databases:
Test database
Run:

psql -c 'CREATE DATABASE makersbnb_test;'
psql -d makersbnb_test -f db/migrations/test_database_setup.sql
Live database
Run:

psql -c 'CREATE DATABASE makersbnb;'
psql -d makersbnb -f db/migrations/database_setup.sql

How to run tests
Run bundle in the directory to install required gems:

charlotte@Charlottes-MBP makersbnb % bundle
Run rspec to test:

charlotte@Charlottes-MBP makersbnb % rspec
How to use
Start local server
run rackup
charlotte@Charlottes-MBP makersbnb % rackup
[2020-10-02 12:36:47] INFO  WEBrick 1.6.0
[2020-10-02 12:36:47] INFO  ruby 2.7.0 (2019-12-25) [x86_64-darwin19]
[2020-10-02 12:36:47] INFO  WEBrick::HTTPServer#start: pid=9084 port=9292
Navigate to http://localhost:9292/ in your web browser
Sign Up
Required Information:
Unique Email
Name
Password
Log In
Required Information:
Email
Password
Add Spaces
Requirements:
User must be logged in.
Required Information:
Name
Price
Description
View Spaces
View spaces hosted by logged in user.
Accept or decline booking requests on spaces.
My Bookings
View confirmed, pending or declined booking requests