import React from 'react'; // Primero importamos react
import ReactDOM from 'react-dom/client'; // Luego importamos alguna herramienta para renderizar(dom, electron, native)

import {FirstApp} from './FirstApp';
import {CounterApp} from './CounterApp';
import './styles.css'; // Cargando los estilos globales en el main.jsx

ReactDOM.createRoot( document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={999}/>
    </React.StrictMode>
);
    