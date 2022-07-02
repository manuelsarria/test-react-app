import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FisrtApp />', () => {

    test('debe hacer match con el snapshot', () => {

        const title = 'Hola, soy goku';
        render( <FirstApp title={title}/>)
      
    });

    test('debe mostrar el titulo en un h1', () => {

        const title = 'Hola, soy goku';
        const {container, getByText} = render( <FirstApp title={title}/>)
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);
      
    });
    
  
});
