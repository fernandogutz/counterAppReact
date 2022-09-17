import { getSaludo } from "../../src/base-pruebas/02-template-string";

describe('Pruebas en 02-template-string', () => { 

    test('getSaludo debe retornar "Hola Fernando"', () => { 
        const name = 'Fernando';
        const msg = getSaludo(name);

        expect(msg).toBe(`Hola ${name}`);
    });

});