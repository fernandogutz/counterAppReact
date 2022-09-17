import { screen, render, fireEvent } from "@testing-library/react";
import { CounterApp } from "../src/CounterApp";

describe('pruebas en <CounterApp/>', () => { 
    
    test('debe hacer match con el snapshot', () => { 
        const { container } = render(<CounterApp value={100}/>);
        expect(container).toMatchSnapshot();
    });

    test('debe mostrar el valor inicial 100', () => { 
        render(<CounterApp value={100}/>);
        expect( screen.getByText('100') ).toBeTruthy();
    });

    test('debe incrementar con el btn +1', () => { 
        render(<CounterApp value={100}/>);
        fireEvent.click(screen.getByText('+1'));
        expect(screen.getByText('101')).toBeTruthy();
    });

    test('debe decrementar con el btn -1', () => { 
        render(<CounterApp value={100}/>);
        fireEvent.click(screen.getByText('-1'));
        //screen.debug(); //Puedes ver el screen en todo momento
        expect(screen.getByText('99')).toBeTruthy();
    });

    test('debe funcionar reset btn', () => { 
        render(<CounterApp value={100}/>);
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        fireEvent.click(screen.getByText('-1'));
        //fireEvent.click(screen.getByText('Reset')); // Si te incomoda seleccionar por texto, puedes usar el id/aria-label/etc
        fireEvent.click(screen.getByRole('button', {name:'btn-reset'}));
        expect(screen.getByText('100')).toBeTruthy();
    });

})