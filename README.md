# Beer Bonuses

Installation:

```
createdb beer-bonuses
npm install
cp .env.example .env
knex migrate:latest
```

# TODO:

- document knex setup w/ dotenv / .gitignore
- document process more

# Create User
- require knex
- check email, name, and password are all there
  -  if not, return an error
- check to see if the email already exists in the db
  -  if so, return an error
- if we're OK
  -  hash password
  -  knex insert stuff from req.body
  -  create a token
  -  send back id, email, name, token

# Create Angular App

- cdn angular + router
- ng-app / module
- two routes
- html5mode
- express wildcard route
- maybe layout??
- home controller / template
  - show the current user's name
- signup controller / template
  - form / on submit
  - http call
    - handles success
      - store token
      - redirect to home page
    - handles error
      - show errors

-------
