# gotoinc-test

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).


# Project structure

## Entities
- [Deliver](/src/entities/Deliver) 
- [Request](/src/entities/Request)
- [Order](/src/entities/Order)

## Layouts
Layout components define the overall structure and arrangement of the pages or sections of the application.

## Shared
Reusable components (I added als my custom components)

## Utils
Utility functions and helper classes used across the application.

## Views
Views represent the different pages or sections of the application.

## Examples:

### /3/create
- **Description**: Switch between different forms for creating orders or deliveries.
- **Routes**:
  - `/3/create/order`: Navigate to the order form.
  - `/3/create/deliver`: Navigate to the deliver form.

### /3/requests
- **Description**: View requests that match the criteria set in the deliver form.
- **Route**: `/3/requests`

### /requests
- **Description**: View all requests.
- **Route**: `/requests`