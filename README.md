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

## useContext

- `useContext` conecta todos los componentes permitiendo pasar la información que deseemos sin tener que enviarla a traves de los props.
- Para usarlo debemos usar `React.createContext`
  - `const ThemeContext = React.createContext({});`
- Luego debemos usar el provider del respectivo contexto y asignarle los valores que deseamos encapsular para usarlo en toda la aplicación.
  - `<ThemeContext.Provider value={{ isDarkModeTheme, setIsDarkModeTheme }}>`
- Debemos "importar" el provider en index.js (el archivo superior de nuestra aplicación) y encapusar el componente principal (<App/>)

```sh
  ReactDOM.render(
    <React.StrictMode>
      <ThemeContextProvider>
        <App />
      </ThemeContextProvider>
    </React.StrictMode>,
    document.getElementById("root")
  );
```

- En el componente donde deseemos usar o modificar alguno de estos valores, debemos usar importar nuestro contexto y usar `useContext` de react para obtener los valores.

### Ejemplo

```
import { useContext } from "react";
import ThemeContext from "../context/ThemeContext";

const Header = () => {
  const { isDarkModeTheme, setIsDarkModeTheme } = useContext(ThemeContext);
.
.
.
}
```

## useReducer

- Cumple funciones similares a `useState` pero es mas escalable.
- Te permite tener un valor inicial, un reducer y un dispatch para enviar la información.
- `useReducer` esta basada en la filosofia de Redux.

## useMemo

- Nos ayuda a evitar calculos inecesarios guardando en memoria los resultados de funciones repetitivas.
- `useMemo` nos permitirá usar la memoización (Memoization)
- Un ejemplo donde podemos usar useMemo es para filtrar datos fijos.
- Para usarlo se importa `useMemo` de react.
- `useMemo` requiere dos parametros en una función anonima , el primero la logica que queremos memoizar y el segundo parametro el conjunto de valores que debe escuchar para posteriormente ejecutar la funcionalidad.
- ```
  const filteredCharacters = useMemo(
      () =>
        charactersData.filter((characterFiltered) => {
          return characterFiltered.name
            .toLowerCase()
            .includes(searchCharacter.toLowerCase());
        }),
      [charactersData, searchCharacter]
    );
  ```
