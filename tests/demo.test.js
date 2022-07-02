
describe('Pruebas en <DemoComponet />', () => {
  
    test('esta prueba no debe de fallar', () => {
    
       //inicializacion
        const message1 = "Hola mundo";
        // estimulo
    
        const message2 = message1.trim();
    
        // observar el comportamiento
        expect( message1 ).toBe(message2);
    })
    
})

