# NBA - database project 

This project is part of UFRJ’s Computer Science BSc Program - Database class (2023.2);

# The Dataset

This dataset was provided by Nathan Lauga, on Kaggle. It is available on https://www.kaggle.com/datasets/nathanlauga/nba-games/data.

# Stack

- MySQL database containing all the dataset used
- SpringBoot application for the backend
- React.js for frontend

# Running 

First, you'll need to install Docker on your worskstation. You can do that by following the instructions on Docker official page: https://www.docker.com/get-started/.
After intalling it, clone this project into your workspace.

```shell
git clone project
cd disciplina-banco-de-dadoos
```

Then, go to the aplicativo-backend subdirectory. 

```shell
cd aplicativo-backend/
```

Before executing the docker compose command you need to create a .env file with the variables to start and create the database. You can use the .env-template for reference.
After that, just run the docker compose comand.

```shell
docker compose up
```

MySQL server will start first, and after the data insertion, SpringBoot Application will start.

