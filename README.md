# Jamea Peru

The API explores the many exciting tastes of Peruvian food. The project is under active development.

## Table of contents
- [System Requirements](#system-requirements)
- [Run project](#run-project)
  - [Local Environment](#local-environment)
  - [Using Docker container](#using-docker-container)
- [API Reference](#api-reference)

## System requirements
* [Node.js](https://nodejs.org/) v20.15.1
* [@nest/cli](https://www.npmjs.com/package/@nestjs/cli) v10.4.2

## Run project

You can run this project either locally on your machine or within a Docker container. Choose the method that best suits your environment.

## Local environment

To run this project locally, verify that your system meets the specified requirements. Upon confirmation, begin the installation of required dependencies:

```bash
npm run ci
```

With dependencies installed, start the web server by running:
  
```bash
npm run dev
```

## Using Docker container

Work in progress...

## API reference

This API reference categorizes resources by type. Below is a list of available resources.

### Appetizers

###### List all main courses

This endpoint provides a list of all main courses.

###### Request
```http request
GET /v1/appetizers
```

###### Response
```json lines
{
    "appetizers": [
        {
            "id": "ensalada-de-palta",
            "name": "Ensalada de Palta"
        },
        {
            "id": "empanadas-peruanas",
            "name": "Empanadas Peruanas"
        },
        ...
    ]
}
```

### Desserts

| Method | HTTP request         | Description                                      |
|--------|----------------------|--------------------------------------------------|
| get    | GET /v1/desserts     | Retrieve desserts menu                           |
| get    | GET /v1/desserts/:id | Retrieve dessert recipe by its unique identifier |

### Drinks

| Method | HTTP request       | Description                                    |
|--------|--------------------|------------------------------------------------|
| get    | GET /v1/drinks     | Retrieve drinks menu                           |
| get    | GET /v1/drinks/:id | Retrieve drink recipe by its unique identifier |

### Main Courses

| Method | HTTP request             | Description                                          |
|--------|--------------------------|------------------------------------------------------|
| get    | GET /v1/main-courses     | Retrieve main courses menu                           |
| get    | GET /v1/main-courses/:id | Retrieve main course recipe by its unique identifier |

### Side Dishes

| Method | HTTP request            | Description                                        |
|--------|-------------------------|----------------------------------------------------|
| get    | GET /v1/side-dishes     | Retrieve side dishes menu                          |
| get    | GET /v1/side-dishes/:id | Retrieve side dish recipe by its unique identifier |


### Soups

| Method | HTTP request         | Description                                   |
|--------|----------------------|-----------------------------------------------|
| get    | GET /v1/soups        | Retrieve soups menu                           |
| get    | GET /v1/soups/:id    | Retrieve soup recipe by its unique identifier |
