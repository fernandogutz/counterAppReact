describe('Pruebas en <DemoComponent/>', () => { 
    
    test('Esta prueba no debe de fallar', ()=> {
        
        // 1. inicialización
        const msg1 = 'Hola mundo';
    
        // 2. estímulo
        const msg2 = msg1.trim();
    
        // 3. observar el comportamiento
        expect(msg1).toBe(msg2);
    
    })

})