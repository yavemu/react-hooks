# REACT HOOKS

## useState

- Nos sirve para utilizar los estados en componentes funcionales

- Para usarlo se importa `useState` de react
  - Creamos la variable y la "funcion para cambiar su valor" , adicional le asignamos el valor por defecto
    - `const [isDarkMode, setIsDarkMode] = useState(false);`
  - Para cambiar su valor usamos la funcion y le asignamos el valor deseado
    - `setIsDarkMode(!isDarkMode);`
  - Para usar su valor usamos el nombre de la variable
    - `{isDarkMode ? "Dark Mode" : "Light Mode"}`
