# AvailableFlatSurface

[Live Demo](https://available-flat-surface.herokuapp.com/ "AvailableFlatSurface")

AvailableFlatSurface is a clone of [OpenTable](opentable.com "OpenTable") using a React + Redux front end calling to a Rails + PostgreSQL backend.

CRUD features include reservations, reviews, and saved restaurants.

## Index

- [Technologies](https://github.com/MasonChinkin/availableFlatSurface/blob/master/README.md#Technologies)
- [Highlights](https://github.com/MasonChinkin/availableFlatSurface/blob/master/README.md#highlights)
  - [Making Reservations with Redux](https://github.com/MasonChinkin/availableFlatSurface/blob/master/README.md#Making-Reservations-with-redux)
  - [Dynamic icons with React](https://github.com/MasonChinkin/availableFlatSurface/blob/master/README.md#Dynamic-icons-with-react)
  - [Make, edit, and delete reviews](https://github.com/MasonChinkin/availableFlatSurface/blob/master/README.md#Make-edit-and-delete-reviews)
  - [Styling: Attention to Detail!](https://github.com/MasonChinkin/availableFlatSurface/blob/master/README.md#styling-attention-to-detail)

## Technologies

- Ruby on Rails backend using a normalized PostgreSQL database, RESTful routes, and JBuilder
- React + Redux front end with SASS styling
- Secure photo hosting on Amazon Web Services S3 with Rails Active Storage
- Compiled to ES5 using Webpack and Babel.js

## Highlights

### Making Reservations with redux

One of the biggest functional challenges was gathering all necessary data to make a reservation upon clicking the time buttons on the search page. Hello Redux! I tracked the party size and dateTime of a reservation using the ui slice of state.

![](/app/assets/images/readme/reservation-demo.gif?raw=true)

```javascript
// UI REDUCER
Object.freeze(oldState);
let newState = Object.assign({}, oldState);
switch (action.type) {
  case RECEIVE_RESERVATION_FORM_CHANGE:
    newState.reservationForm = action.reservationData
    return newState

// RESERVATION BUTTON CONTAINER
const mapStateToProps = ({ ui, session }) => ({
  searchedDateTime: ui.reservationForm.resDateTime || null,
  numPeople: ui.reservationForm.numPeople,
  userId: (session.currentUser === null) ? null : session.currentUser.id
});

// RESERVATION BUTTON COMPONENT
handleReservation(e) {
  e.preventDefault();

  if (this.props.userId === null) return this.props.history.push(`/search/signin`);

  let reservation = {
    reservation: (this.props.searchedDateTime.getTime()) / 1000, // divide by 1000 for rails
    num_people: this.props.numPeople,
    user_id: this.props.userId,
    restaurant_id: this.props.restaurantId // threaded in from above
  };

  this.props.makeReservation(reservation)
    .then(this.props.history.push(`/profile/${this.props.userId}/reservations`));
}

// RESERVATION BUTTON RENDER
<Link onClick={this.handleReservation}
  key={i}
  className="submit-button res-submit-button"
  to={`/profile/${this.props.userId}/reservations`}>{buttonTime}
</Link>
```

### Dynamic icons with React

Early in the project, when I was thinking about how to implement OpenTable's heavy use of icons in a clean, dynamic way, I had one of those Beautiful Mind/orchestral background music moments when React really started to make sense to me. Below, you can see how I built and then mapped over a nested array library to make the restaurant page sidebar.

|                   AvailableFlatSurface                    |                            OpenTable                             |
| :-------------------------------------------------------: | :--------------------------------------------------------------: |
| ![](/app/assets/images/readme/myShowDetails.png?raw=true) | ![](/app/assets/images/readme/openTableShowDetails.png?raw=true) |

```javascript
function sidebarDataArr(rest) {
  let details = [
    ["Address", rest.address, "fas fa-map-marker-alt"],
    ["Cross Street", rest.crossStreet, "fas fa-car-alt"],
    ["Neighborhood", rest.neighborhood, "far fa-building"],
    ["Hours", rest.hours, "far fa-clock"],
    ["Cuisine", rest.cuisine, "fas fa-utensils"],
    ["Dress Code", rest.dressCode, "fas fa-tshirt"],
    ["Parking Details", rest.parkingDetails, "fas fa-parking"],
    ["Payment Options", rest.paymentOptions, "fas fa-credit-card"],
    ["Phone Number", rest.phone, "fas fa-phone"],
    ["Website", rest.website, "far fa-share-square"],
  ];

  return details.map((detail, i) => {
    if (!details[1]) return null;

    let label = detail[0];
    let val = detail[1] || "N/A";
    let icon = detail[2];

    val = label === "Website" && val !== "N/A" ? <a href={val}>{val}</a> : val;

    return (
      <li key={i}>
        <i className={icon} />
        <div>
          <label>{label}</label>
          <p>{val}</p>
        </div>
      </li>
    );
  });
}
```

### Make, edit, and delete reviews

![](/app/assets/images/readme/review-demo.gif?raw=true)

### Styling: Attention to Detail!

This project sought to closely replicate the design of OpenTable. At times (see below), one could argue that AvailableFlatSurface has a more even, aesthetically pleasing arrangement of elements.

|                  AvailableFlatSurface                  |                           OpenTable                           |
| :----------------------------------------------------: | :-----------------------------------------------------------: |
| ![](/app/assets/images/readme/myListItem.png?raw=true) | ![](/app/assets/images/readme/openTableListItem.png?raw=true) |

# opentable-images-mern

# 🚀 Javascript full-stack 🚀

## MERN Stack

### React / Express / MongoDB / Redux

https://github.com/coding-to-music/opentable-images-mern

https://opentable-images-mern.herokuapp.com

by Abhishek Kalavadiya https://github.com/AbhishekKalavadiya

https://github.com/AbhishekKalavadiya/maper

## About the Website: Maper

- A location-based website using React as Frontend and NodeJs, ExpressJS as backend, and MongoDB as Database. On this website, I had use MapBox for the world map and React-Mapbox-gl for configuration. We can select the place where we had visited and added the photo URL, so the entry will be seen on the map and in the visited place area. We can delete or modify the changes in the Entry we had created. It is a responsive website with live location of a point on the map. The Backend is deployed on Heroku and the frontend is deployed on Netlify.

#### The Password for the Entry: maper01

## Technology Stack

- React js
- Node js
- Express js
- MongoDB
- MapBox, React Mapbox-gl
- Heroku
- Netlify
- Flexbox
- Material-ui

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## GitHub

```java
git init
git add .
git remote remove origin
git commit -m "first commit"
git branch -M main
git remote add origin git@github.com:coding-to-music/opentable-images-mern.git
git push -u origin main
```

## Heroku

```java
heroku create opentable-images-mern
```

## Heroku MongoDB Environment Variables

```java
heroku config:set


heroku config:set MONGODB_URI="mongodb+srv://<userid>:<password>@cluster0.zadqe.mongodb.net/opentable-images-mern?retryWrites=true&w=majority"
heroku config:set PASSWORD="something-secret"

heroku config:set PUBLIC_URL="https://opentable-images-mern.herokuapp.com"
```

## Push to Heroku

```java
git push heroku

# or

npm run deploy
```

### Heroku Buildpack

See this repo for more info about setting up a node/react app on heroku:

https://github.com/mars/heroku-cra-node

```java
heroku buildpacks

heroku buildpacks --help

heroku buildpacks:clear

```

```java
heroku buildpacks
```

Output:

```java
=== opentable-images-mern Buildpack URL
heroku/nodejs
```

### Notice we are doing a SET and then and ADD

```java
heroku buildpacks:set heroku/nodejs

heroku buildpacks:add mars/create-react-app
```

Output:

```java
Buildpack added. Next release on opentable-images-mern will use:
  1. heroku/nodejs
  2. mars/create-react-app
Run git push heroku main to create a new release using these buildpacks.
```

### Lets try reversing the order

```java
heroku buildpacks:set mars/create-react-app

heroku buildpacks:add heroku/nodejs
```

```java
heroku buildpacks
```

Output:

```java
=== opentable-images-mern Buildpack URL
heroku/nodejs
```

### Push to Heroku

```
git push heroku
```

## Error:

```java
2022-04-09T03:12:56.076028+00:00 app[web.1]: ls: cannot access '/app/build/static/js/*.js': No such file or directory
2022-04-09T03:12:56.076252+00:00 app[web.1]: Error injecting runtime env: bundle not found '/app/build/static/js/*.js'. See: https://github.com/mars/create-react-app-buildpack/blob/master/README.md#user-content-custom-bundle-location
2022-04-09T03:12:56.253505+00:00 app[web.1]: Starting log redirection...
2022-04-09T03:12:56.253698+00:00 app[web.1]: Starting nginx...
```

Attempted this:

```java
heroku config:set JS_RUNTIME_TARGET_BUNDLE=./client/build/static/js/*.js

heroku config:set JS_RUNTIME_TARGET_BUNDLE=/build/static/js/*.js

# and to remote it:

heroku config:unset JS_RUNTIME_TARGET_BUNDLE

```

## update npm packages

```java
npm install -g npm-check-updates
```

Output:

```java
removed 3 packages, changed 263 packages, and audited 264 packages in 10s

29 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

```java
ncu -u
```

Output:

```java
Upgrading /mnt/volume_nyc1_01/opentable-images-mern/package.json
[====================] 15/15 100%

 axios                ^0.21.0  →  ^0.26.1
 bcrypt                ^5.0.0  →   ^5.0.1
 body-parser          ^1.19.0  →  ^1.20.0
 cookie-parser         ^1.4.5  →   ^1.4.6
 dotenv                ^8.2.0  →  ^16.0.0
 express              ^4.17.1  →  ^4.17.3
 express-fileupload    ^1.2.0  →   ^1.3.1
 js-cookie             ^2.2.1  →   ^3.0.1
 mongoose            ^5.10.13  →  ^6.2.10
 nodemon               ^2.0.6  →  ^2.0.15
 reactjs-popup         ^2.0.4  →   ^2.0.5
 validator           ^13.1.17  →  ^13.7.0

Run npm install to install new versions.
```

```java
npm install
```

Output:

```java
added 58 packages, removed 42 packages, changed 89 packages, and audited 299 packages in 7s

32 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
```

## Client directory

```java
cd client

ncu -u
```

```java
Upgrading /mnt/volume_nyc1_01/opentable-images-mern/client/package.json
[====================] 18/18 100%

 @testing-library/jest-dom     ^5.11.4  →  ^5.16.4
 @testing-library/react        ^11.1.0  →  ^13.0.0
 @testing-library/user-event  ^12.1.10  →  ^14.0.4
 axios                         ^0.21.0  →  ^0.26.1
 dotenv                         ^8.2.0  →  ^16.0.0
 js-cookie                      ^2.2.1  →   ^3.0.1
 node-sass                     ^4.14.1  →   ^7.0.1
 react                         ^17.0.1  →  ^18.0.0
 react-dom                     ^17.0.1  →  ^18.0.0
 react-redux                    ^7.2.2  →   ^7.2.8
 react-router-dom               ^5.2.0  →   ^6.3.0
 react-scripts                   4.0.0  →    5.0.0
 reactjs-popup                  ^2.0.4  →   ^2.0.5
 redux                          ^4.0.5  →   ^4.1.2
 redux-thunk                    ^2.3.0  →   ^2.4.1
 web-vitals                     ^0.2.4  →   ^2.1.4

Run npm install to install new versions.
```
