
# Api Rest with Docker

It is a project where a simple dockerized rest api is exposed

It is based on NodeJs with Express as the main library.

It uses postgres image as database and pgAdmin as graphical interface of DB.


## Installation

The installation of the app consists of two parts, first the app image is built and then it is run with docker-compose

```bash
  docker build -t apirest .

  docker-compose up -d

```
    
## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PGADMIN_DEFAULT_EMAIL`

`PGADMIN_DEFAULT_PASSWORD`

`PGDATABASE`

`PGUSER`

`PGPASSWORD`

`APP_PORT`

`HOST_DB`

`DB_PORT`

Inside the files is .envExample where you can also see the environment variables needed to run the app
## Author
Twitter
- [@Ramiro_P_](https://twitter.com/Ramiro_P_)

Github
- [@DeployRama](https://github.com/deployRama) 