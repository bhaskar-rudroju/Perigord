# Perigord Dynamic Form Generation

## Features

- Dynamically render all fields from the schema
- Manage form state internally
- On form submit, display the form data as formatted JSON below the form
- Show validation for required fields
- Basic field validation messages
- Modular architecture (reusable field components)

## Technologies
- React: 19.1.0
- Vite: 6.3.5
- Context API
-  Moduler architecture
-  React Testing Library, vitest 

## Installation

``` 
git clone https://github.com/your-username/your-repo-name.git
cd your-repo-name
npm install
```
## Running and Testing the APP

```
npm run dev
npm run test
````

## Project Structure
```
.
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── public
│   └── vite.svg
├── README.md
├── src
│   ├── App.css
│   ├── App.jsx
│   ├── assets
│   │   └── react.svg
│   ├── components
│   │   ├── FormField
│   │   │   ├── FormField.jsx
│   │   │   └── index.js
│   │   └── Inputs
│   │       ├── Checkbox
│   │       │   └── Checkbox.jsx
│   │       ├── index.js
│   │       ├── Select
│   │       │   └── Select.jsx
│   │       └── TextInput
│   │           └── TextInput.jsx
│   ├── config
│   │   └── registration.metadata.json
│   ├── context
│   │   └── FormContext.jsx
│   ├── index.css
│   ├── main.jsx
│   └── pages
│       └── DynamicForm
│           ├── __tests__
│           │   ├── DynamicForm.test.jsx
│           │   └── mock_data.metadata.json
│           ├── DynamicForm.css
│           ├── DynamicForm.jsx
│           └── index.js
└── vite.config.js
```


