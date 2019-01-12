# _pug-practice_

#### _rendering a site with pug, 01.11.2019_

#### By _**planeswalker1**_

## Description

_This repository has been created in order to showcase a programming challenge about front end servers, completed using express._

## challenge

Create a front end server. Users should be able to visit a home page rendered with pug. Also, if a user visits any other URL render a 404 page.

**Extra challenge**

* organize your files following mvc and use express's router object.

* use stylus for your css and grunt to minify your files

**Function Description**

Create an app.get function for a single url '/'. The callback function should render a view.

The first endpoint should be:

```javascript
app.get('/', function (req, res, next) {
    return res.render('index');
});
 ```

if using router

```javascript
router.get('/', function (req, res, next) {
    return res.render('index');
});
 ```

**Constraints**

* Use Pug as your view engine

* Have error handling

**Output Format**

respond with a view.

## Setup/Installation Requirements

* _Clone repository_
* _Navigate to the cloned repository_
* _open app.js with code editor of choice to see my solution_

## Known Bugs

_I don't think there are any bugs_

## Support and contact details

_If you run into any issues or have questions, ideas or concerns contact me at daniel.munozdev@gmail.com_

## Technologies Used

_JavaScript_

_Node_

_Express_

_Pug_

_Stylus_

_Grunt_