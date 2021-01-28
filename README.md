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

## useEffect

- User useEffect nos hace olvidar de los ciclos de vida que se usan con los componentes de clase y nos hace pensar en efectos.
- Los efectos son transmitidos en nuestros componentes funcionales, como por ejemplo, traer la data de una API
- `useEffect` esta compuesta por una funcion anonima y la variable (o variables) que estara escuchando, o en su defecto se dejara un array vacio y este se ejecutaria cuando se renderiza cuando se carga el componenten la primer vez.
- Para usarlo se importa `useEffect` de react

### Ejemplo

```sh
const [charactersData, setCharactersData] = useState([]);

useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharactersData(data.results));
  }, []);
```
