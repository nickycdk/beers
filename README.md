# beerapp

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Deploy to firebase
```
firebase login
```

```
firebase deploy
```

This requires that you have access to the project in the firebase console

### Lints and fixes files
```
npm run lint
```

### Short about the project
I chose to use Firebase/Firestore for authentication and as a backend to store all data. 
I could have used localstorage, however, that is not persistent if the user clear application data.
And for the fun of it, it was a good exercise to play around with firebase. 

All styling is done by using #vuetifyjs, which is a component framework for VueJS. 
The main reason for using this is for fast prototyping, also the exercise was about building a SPA, good architecture, coding style etc, which is why I chose to focus more on the JS.

DEMO can be found at: https://beerapp-3a6ae.firebaseapp.com/#/

### Login / Application
At the moment, there are 2 active accounts created, which I created in my firebase backend

Use one of these two to login to the dashboard:
```
nicky@wearewebstars.dk / demo1234
```
```
casetest@impact.dk / demo1234
```

