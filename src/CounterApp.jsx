/* 
----------------------
Tarea
-----------------------
1. Crear un nuevo componente dentro de la carpeta SRC llamado CounterApp

2. El CounterApp debe de ser un Functional Component

3. El contenido del CounterApp debe de ser:

    <h1>CounterApp</h1>
    <h2> { value } </h2>

4. Donde "value" es una propiedad enviada desde el padre hacia el componente CounterApp (Debe ser númerica validada con PropTypes)

5. Reemplazar en el index.js ó main.jsx el componente de <PrimeraApp /> por el componente <CounterApp /> (no se olviden del value que debe de ser un número)

6. Asegúrense de no tener errores ni warnings (Cualquier warning no usado, comentar el código)
*/
import { useState } from 'react'; //Importando nuestro primer hook
import PropTypes from 'prop-types';

const handleAddTest = (event, name) => { // Al declarar la función fuera del componente, no se asignará un espacio en memoria cada vez que se renderice el elemento
    console.log(name);  
    console.log(event);  
    //console.log(value);  // Esto da error, si queremos usarlo debemos poner la función dentro del functional component
} 


const CounterApp = ( {value} ) => {

    console.log('render'); //Cada vez que hay un cambio en el estado, se dispara el functional component, es decir, se renderiza todo el componente nuevamente

    const [ counter, setCounter ] = useState( value );
    
    const handleAdd = () => {
        setCounter( counter + 1 );
        //setCounter( (c) => c + 1 ); // Si no tenemos referencia a counter podríamos hacer la suma así con una función
    }

    const handleSubstract = () => {
        setCounter(counter - 1);
    }
    
    const handleReset = () => {
        setCounter(value);
    }

    return (
        <>
            <h1>CounterApp</h1>
            <h2> { counter } </h2>  
            <button onClick={ (event) => handleAddTest(event, 'Fer', counter) }>
                Test Evento click
            </button>

            <button onClick={ handleAdd }> +1 </button>         
            <button onClick={ handleSubstract }> -1 </button>         
            <button onClick={ handleReset }> Reset </button>         
        </>
    );
}

CounterApp.propTypes = {
    value: PropTypes.number
}

CounterApp.defaultProps = {
    value: 0
}

export {
    CounterApp
}

