# Beer Bonuses

Installation:

```
createdb beer-bonuses
npm install
cp .env.example .env
knex migrate:latest
```

# TODO: document knex setup w/ dotenv / .gitignore

# Create User
  // require knex
  // check email, name, and password are all there
  //  if not, return an error
  // check to see if the email already exists in the db
  //  if so, return an error
  // if we're OK
  //  hash password
  //  knex insert stuff from req.body
  //  create a token
  //  send back id, email, name, token
