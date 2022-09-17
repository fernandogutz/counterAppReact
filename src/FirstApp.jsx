import PropTypes from 'prop-types';

const newMsg = {
    msg: 'Hola',
    name: 'fer'
}; // Podemos usar esta variable en el componente
// Entre llaves podemos imprimir datos de js en el componente, excepto objetos, para ello usamos JSON.stringify(objetoJs)

// Tarea: Retornar una función en el componente
const saludar = (name) => `Hola ${name}`; // Lo dejamos fuera del componente para que no se use este espacio en memoria cada vez que se renderice

const FirstApp = ({title, subTitle='sasdasd'}) => {

    return (
        <>
            <h1>{title}</h1>
            <code>{ JSON.stringify(newMsg) }</code>
            <h2>{subTitle}</h2>
        </>
    )
}

export {
    FirstApp
}

// Importamos el paquete con npm install prop-types y lo usamos con PropTypes
FirstApp.propTypes = {
    title: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
};

//Tomamos nuestro functional component FirstApp y le asignamos valores por defecto a sus proptypes
FirstApp.defaultProps = {
    title: 'No hay title',
    //subTitle: 'No hay subtitle',
    name: 'Fernando Gutz' //También podemos añadir nuevos proptypes
};