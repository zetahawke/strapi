# Preunic Ecommerce Strapi application CMS

A quick description of your strapi application

## Introducción

Ecommerce de Preunic

## Stack

- Node > 12.13
- Strapi 3.6.8
- MySql >= 8
- Docker

## Como iniciar el proyecto

### Requisitos

- Docker
- Docker Compose


### Dependencias

- entity relationship graph [plugin](https://github.com/node-vision/strapi-plugin-entity-relationship-chart)
- testing suite [plugin](https://github.com/Antoine-lb/strapi-plugin-testing)

Para comenzar a utilizar Docker y Docker Compose es necesario descargar Docker [aqui](https://www.docker.com/).


### Copiar .env.example

```
cp .env.example .env
```

(Solicitar valores completos a un integrante del equipo)

### Crear volumen para almacenar las gems instaladas

```
docker volume create --name strapi_node_modules
```

### Build de los distintos containers

```
docker-compose build
```

### Bundle Install

```
docker-compose run app bundle install
```

### Iniciar los servicios

```
docker-compose up
```
