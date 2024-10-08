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

##### List all appetizers

This endpoint provides a list of all appetizers.

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

##### Retrieve appetizer by ID

To retrieve a particular appetizer, use its ID, which is available when you get the full list of appetizers.

###### Request
```http request
GET /v1/appetizers/:id
```

###### Response
```json lines
{
  "recipe": {
    "id": "palta-rellena",
    "name": "Palta Rellena",
    "ingredients": [
      "palta",
      "atún",
      "mayonesa",
      "limón"
    ]
  }
}
```

### Desserts

##### List all desserts

This endpoint gives you access to a list of all desserts.

###### Request
```http request
GET /v1/desserts
```

###### Response
```json lines
{
  "desserts": [
    {
      "id": "chocotejas",
      "name": "Chocotejas"
    },
    {
      "id": "budin-de-pan",
      "name": "Budín de Pan"
    },
    {
      "id": "alfajores",
      "name": "Alfajores"
    },
    ...
  ]
}
```

##### Retrieve dessert by ID

This endpoint lets you get a dessert using its ID, which you can find in the list of all desserts.

###### Request
```http request
GET /v1/desserts/:id
```

###### Response
```json lines
{
  "recipe": {
    "id": "alfajores",
    "name": "Alfajores",
    "ingredients": [
      "harina",
      "azúcar",
      "manteca",
      "dulce de leche"
    ]
  }
}
```

### Drinks

##### List all drinks

This endpoint shows all available drinks.

###### Request
```http request
GET /v1/drinks
```

###### Response
```json lines
{
  "drinks": [
    {
      "id": "limonada-frozen",
      "name": "Limonada Frozen"
    },
    ...
  ]
}
```

##### Retrieve drink by ID

To access a specific drink, use its ID, which you can find when retrieving the complete list of drinks.

###### Request
```http request
GET /v1/drinks/:id
```

###### Response
```json lines
{
  "recipe": {
    "id": "limonada-frozen",
    "name": "Limonada Frozen",
    "ingredients": [
      "limón",
      "azúcar",
      "hielo"
    ]
  }
}
```

### Main Courses

##### List all main courses

This endpoint shows a list of all the main courses available.

###### Request
```http request
GET /v1/main-courses
```

###### Response
```json lines
{
  "mainCourses": [
    {
      "id": "arroz-a-la-cubana",
      "name": "Arroz a la Cubana"
    },
    {
      "id": "pollo-con-champinones",
      "name": "Pollo con Champiñones"
    },
    ...
  ]
}
```

##### Retrieve main course by ID

To find a specific main course, use its unique number, which you can see when you look at the complete list of main courses.

###### Request
```http request
GET /v1/main-courses/:id
```

###### Response
```json lines
{
  "recipe": {
    "id": "lomo-saltado",
    "name": "Lomo Saltado",
    "ingredients": [
      "carne de res",
      "cebolla",
      "tomate",
      "papas fritas",
      "arroz"
    ]
  }
}
```

### Side Dishes

##### List all side dishes

This is where you can find our entire selection of side dishes.

###### Request
```http request
GET /v1/side-dishes
```

###### Response
```json lines
{
  "sideDishes": [
    {
      "id": "chifles-piuranos",
      "name": "Chifles Piuranos"
    },
    {
      "id": "salsa-criolla",
      "name": "Salsa Criolla"
    },
    {
      "id": "cancha-serrana",
      "name": "Cancha Serrana"
    }
  ]
}
```

##### Retrieve side dish by ID

To get a specific side dish, use its unique number, which you can find when you see the complete list of side dishes.

###### Request
```http request
GET /v1/side-dishes/:id
```

###### Response
```json lines
{
  "recipe": {
    "id": "chifles-piuranos",
    "name": "Chifles Piuranos",
    "ingredients": [
      "Platano",
      "Aceite",
      "Sal"
    ]
  }
}
```
### Soups

##### List all soups

This endpoint provides a list of all soups.

###### Request
```http request
GET /v1/soups
```

###### Response
```json lines
{
  "soups": [
    {
      "id": "sopa-wantan",
      "name": "Sopa Wantan"
    },
    {
      "id": "chilcano-de-pescado",
      "name": "Chilcano de Pescado"
    },
    {
      "id": "menestron-de-carne",
      "name": "Menestrón de Carne"
    },
    {
      "id": "caldo-de-gallina",
      "name": "Caldo de Gallina"
    }
  ]
}
```

##### Retrieve soup by ID

To retrieve a particular soup, use its ID, which is available when you get the full list of soups.

###### Request
```http request
GET /v1/soups/:id
```

###### Response
```json lines
{
  "recipe": {
    "id": "sopa-wantan",
    "name": "Sopa Wantan",
    "ingredients": [
      "pollo",
      "verduras",
      "fideos",
      "huevo"
    ]
  }
}
```
