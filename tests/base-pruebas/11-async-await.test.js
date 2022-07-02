import { getImagen } from "../../src/base-pruebas/11-async-await"


describe('pruebas en 11-async-await.js', () => {
  
    test('getimagen debe retornar url de imagen ', async() => {

        const url = await getImagen();

        expect( typeof url ).toBe('string');
      
    })
    
})
