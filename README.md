# Motaz Image Processing API Project

 
## Table of Contents

* [Summary](#Summary)

* [Technologies](#Technologies)

* [Structure](#Structure)

* [Usage and Installation](#usage-and-installation)

* [Build](#Build)

* [Testing](#Testing)

## Summary
An image processing API that I built as part of Udacity's Advanced Full-Stack Web Development Nanodegree Program.
 
Currently, the functionality is limited to resizing of the image.

## Technologies


| Technology   |  Usage       |
| -----------  | ------------ |
|**NodeJS**    |Runtime         |
|**Express**   |Backend web application framework           |
|**Jasmine**   |Unit testing         |
|**Sharp**     |Image Processing     |
|**Typescript**|Programming language | 
 

 


## Structure 
```
+---images
|   |   sea.jpg
|   |   landscape.jpg
|   |   car.jpg
|   |    
|   |
|   \---resizedImages
|
+---spec
|   |
|   \---helpers
|   |
|   \---support
|           jasmine.json
|
\---src
    |   server.ts
    |
    +---middleware
    |      mylogger.ts
    |      resizeValidator.ts
    |
    +---routes
    |   |   index.ts
    |   |
    |   \---api
    |       index.ts    
    |       resize.ts
    |
    +---tests
    |   |
    |   |   serverSpec.ts
    |   |
    |   +---helpers
    |   |       reporter.ts
    |   |
    |   \---utilitiesSpec
    |           formaterSpec.ts
    |           fileUtilSpec.ts
    |           imageUtilSpec.ts           
    |
    |
    \---Utilities
            fileUtil.ts
            ImageUtil.ts
            formater.ts
```


## Usage and Installation


**Endpoints**

| Endpoint | Request | Parameters | Response | Usage
| ------------ | ------------ | ------------ | ------------ | ------------ |
| **/** | **GET** | **N/A** | **200** | **Root Route** |
| **/api** | **GET** | **N/A** | **200** | **list of Api** |
| **/api/resize** | **GET** | **filename, width, heigh** | **200**| **Resize Images** |

it requires [Node.js](https://nodejs.org/) v16+ to run.

Install the dependencies and devDependencies and start the server.
``` 
npm run start
```

in your browser us the following endpoint to process your images.
```
http://localhost:4000/api/resize?filename=car&width=100&height=500
```
## Build

To build the project use the following command
```
npm run build
```

## Testing

A comprehensive tests are available to test the server endpoints and functions

To start the unit testing
```
npm run test
```
