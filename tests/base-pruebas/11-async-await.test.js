import { getImagen } from "../../src/base-pruebas/11-async-await"

describe('pruebas en 11-async-await', () => { 
    test('getImagen debe retornar url de img ', async() => { 
        const url = await getImagen(); //await detiene el código hasta terminar de ejecutar, eso nos permite evitar usar done()
        expect(typeof url).toBe('string');
     })
 })