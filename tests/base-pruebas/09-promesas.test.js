import { getHeroeByIdAsync } from "../../src/base-pruebas/09-promesas";

describe('pruebas en 09-promesas', () => { 
    test('getHeroesByIdAsync debe retornar un héroe', (done) => { //Usar done para prevenir **PROBLEMA
        const id = 1;
        getHeroeByIdAsync(id) //**PROBLEMA: Veremos que jest ejecuta todo el código de manera síncrona, y la promesa, al ser asíncrona, se ejecutará al final, jest marcará que la prueba ha sido superada hasta que la promesa termine de ejecutarse
            .then((hero) => {
                expect(hero).toEqual({
                    id: 1,
                    name: 'Batman',
                    owner: 'DC'
                });
                done(); //Acá llamamos a done() indicando a jest que recién terminamos de ejecutar el código
            })
     })

     test('getHeroesByIdAsync debe obtener error si heroe no existe', (done) => { //Usar done para prevenir **PROBLEMA
        const id = 100;
        getHeroeByIdAsync(id) //**PROBLEMA: Veremos que jest ejecuta todo el código de manera síncrona, y la promesa, al ser asíncrona, se ejecutará al final, jest marcará que la prueba ha sido superada hasta que la promesa termine de ejecutarse
            .catch( error => {
                expect(error).toBe(`No se pudo encontrar el héroe ${id}`);
                done();
            })
     })
 })