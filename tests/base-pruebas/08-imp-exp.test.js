import { getHeroeById, getHeroesByOwner } from "../../src/base-pruebas/08-imp-exp";

describe('Pruebas en 08-imp-exp', () => { 
    test('getHeroeById debe retornar un héroe por ID', () => { 
        const id = 1;
        const hero = getHeroeById( id );

        expect(hero).toEqual({ id: 1, name: 'Batman', owner: 'DC' });
     })
     

     test('getHeroeById debe retornar undefined si no existe el ID', () => { 
        const id = 100;
        const hero = getHeroeById( id );

        expect(hero).toBeFalsy(); // toBeFalsy para false, null y undefined
     })


     //Tarea
     test('getHeroesByOwner debe retornar array con los 3 héroes de DC', () => { 
        const heroes = [
            {
                id: 1,
                name: 'Batman',
                owner: 'DC'
            },
            {
                id: 3,
                name: 'Superman',
                owner: 'DC'
            },
            {
                id: 4,
                name: 'Flash',
                owner: 'DC'
            }
        ];

        const heroesTest = getHeroesByOwner('DC');
        expect(heroesTest.length).toBe(3);
        expect(heroesTest).toEqual(heroes);
      })

      test('getHeroesByOwner debe retornar array con 2 elementos', () => { 
        const heroesTest = getHeroesByOwner('Marvel');
        expect(heroesTest.length).toBe(2);
      })
 })