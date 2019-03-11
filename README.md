# Node-simple-REST
My Playground for learning Node.js Backend Programming Language by making a simple REST API using MongoDB.

## Project description
Make tree of users that each user can have one leader and many members

## Installation
``` bash
#clone repo
git clone https://github.com/HendraPB/Node-simple-REST.git

# change your directory to project directory
cd Node-simple-REST

# install project dependencies
npm install

# run your MongoDB
cd { MongoDB dir } && mongod

# run it locally on localhost:3000
npm run start
```

## API documentation
| Verb | URI | Description |
| ---- | --- | ----------- |
| GET | /user | Get all users |
| GET | /user/{ userId } | Get user by Id |
| POST | /user | Create new user without leader |
| POST | /user/{ userId } | Create new user as member of user with userId |
| PUT | /user/{ userId } | Update user personal data(name, address) |
| DELETE | /user/{ userId } | Delete user that haven't member |