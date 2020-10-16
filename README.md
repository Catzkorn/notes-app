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
The app has been deployed using Surge (https://surge.sh) and is accessible at http://scratch-pad.surge.sh.

#### Testing
As part of this project, we built and used our own testing framework in javascript. 
 
We have tried to follow the format of a combination of the Jasmine test functions for the test suite,   
and Capybara for the web-based test functions.

Example test function:
```
it ("#getTime / returns the time the note was created", function () {
             let time = new Date(2020, 9, 31, 11, 00, 00, 00);
             let note = new Note('This is a really cool note', time);
             
             expect(note.getTime()).toEqual(time);
           })
```

## TODO: Add screenshot of test UI

## Domain Modelling / Design

### Scratch Pad
#### Classes & Functions
Note:
* getMessage
* getTime

NoteManager:
* addNote
* getNotes

### Mouse Trap (test framework)
TODO

## How to run tests
TODO - 



```
install http-server  
run http-server  
open the http server localhost /test.html
```

## Using the app
* Navigate to http://scratch-pad.surge.sh  
![index](https://i.imgur.com/TNcsqgH.png "Scratch Pad Home")

* Enter your note and click the paws (sound on for effects)
![Enter note](https://i.imgur.com/cjKbXyh.png "Enter note")

* View your list of notes
![View note list](https://i.imgur.com/jDWt5vd.png "View note list")

* View a full note
![View full note](https://i.imgur.com/XoXWkW4.png "View full note")
