import { getUser, getUserActive } from "../../src/base-pruebas/05-funciones"

describe('Pruebas en 05-funciones', () => { 

    test('getUser debe retornar un objeto', () => { 
        const getUserTest = {
            uid: 'ABC123',
            username: 'El_Papi1502'
        };

        const user = getUser();

        expect(getUserTest).toEqual(user);
    });

    test('getUserActive debe retornar un objeto', () => { 
        const name = 'Fernando';
        const getUserActiveTest = {
            uid: 'ABC567',
            username: name
        };

        const userActive = getUserActive(name);

        expect(getUserActiveTest).toEqual(userActive);
     })

})