import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr"

describe('pruebas en 07-deses-arr', () => { 

    test('retornaArreglo debe retornar un string y un number', () => { 
        const [letters, numbers] = retornaArreglo();

        expect(typeof letters).toBe('string');
        expect(typeof numbers).toBe('number');
     })
 })