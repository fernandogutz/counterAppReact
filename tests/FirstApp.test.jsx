import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp></FirstApp>', () => { 

/*     test('debe hacer match con el snapshot', () => { 
        const subtitle = 'Hola, soy un subtítulo';
        const {container} = render( <FirstApp subTitle={subtitle}/> )

        expect(container).toMatchSnapshot();


     }) */

     test('Debe mostrar el título en un h1', () => { 
        const subtitle = 'Hola, soy un subtítulo';
        const {container, getByText} = render( <FirstApp subTitle={subtitle}/> )
        expect( getByText(subtitle) ).toBeTruthy();

        /* const h2 = container.querySelector('h2');
        expect(h2.innerHTML).toContain(subtitle); */

      })

 })