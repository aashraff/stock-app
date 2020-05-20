
## Project description
App to retrieve stock time series data from public API (Quandl) and visualise stock codes over time

## Features
- REST API to retrieve stock codes and time series data from Quandl Financial API for a given stock code
    - Get all supported codes: ```/codes```
    - Get code data: ```/series/<code>```
- Front end to visualise the time series data by available stock code

## Tech stack
- CSS
- PUG HTML Template
- NodeJs
- ExpressJs
- REST with Axios
- Typescript
- Docker
- AWS

## Quick Start
Starting the application

```bash
$ cd ./api
$ npm start
```
