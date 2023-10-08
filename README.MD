# Alexous Guard

`AlexousGuard` is a service that offers methods for validating objects and arrays of objects.

## Installation

```bash
npm i alexous-guard
```

## How use

```javascript
 import t from  'alexous-guard';

 const model = {
   name: "string",
   age: "number",
 };

 const object = {
   name: "John",
   age: 25,
 };

 const isValid = t.guardModel({ model, object });
 console.log(isValid);  // Return 'true' or 'false'

```


## Validating an array

```javascript
  const model = {
   name: "string",
   age: "number",
 };

 const array = [
   { name: "John", age: 25 },
   { name: "Doe", age: 30 },
 ];

 const areValid = t.guardModelArray({ model, array });
 console.log(areValid);  // Return 'true' or 'false'

```


