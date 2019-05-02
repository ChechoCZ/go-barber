# Go - Barber
This app allows users to register as barbers or users and make appointments for barber services

## Tech Stack
This app uses Node.js, PostgreSQL, Sequelize ORM and Nunucjks Template Engine.

### How to use
As I'm not using Docker, at least for now, it is necessary that You have PostgreSQL up and running on your machine in order to run this app.

Open up your terminal and run:
```
yarn install
```
This will install all the dependencies. Then, go to /src/config/database.js and set all the parameters of your connection to PostgreSQL.

In order to create the structure of the database, run the following command:
```
npx sequelize db:migrate
```

Now, everything should be ready to start using the application.

To start the app run:
```
yarn dev
```
