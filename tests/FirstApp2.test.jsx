import { render, screen } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"

describe('Pruebas en <FirstApp></FirstApp>', () => { 
   const subtitle = 'Hola, soy un subtituloo';

   test('debe hacer macth con el snapshot', () => { 
      const {container} = render(<FirstApp subTitle={subtitle}/> )
      expect(container).toMatchSnapshot();
   });

   test('debe mostrar el mensaje Hola, soy un subtituloo', () => { 
      render(<FirstApp subTitle={subtitle}/> );
      expect( screen.getByText(subtitle) ).toBeTruthy();
   
   });

   test('debe mostar el subtitulo en un h2', () => { 
      render(<FirstApp subTitle={subtitle}/> );
      expect( screen.getByRole('heading', { level: 2 }).innerHTML ).toContain(subtitle);
   })

})