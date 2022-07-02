import { render } from "@testing-library/react"
import { FirstApp } from "../src/FirstApp"


describe('Pruebas en <FisrtApp />', () => {

    const title = 'Hola, soy goku';
    
    test('debe hacer match con el snapshot', () => {

        render( <FirstApp title={title}/>)
      
    });

    test('debe mostrar el titulo en un h1', () => {

        const title = 'Hola, soy goku';
        const {container, getByText, getByTestId} = render( <FirstApp title={title}/>)
        expect( getByText(title) ).toBeTruthy();

        const h1 = container.querySelector('h1');
        expect(h1.innerHTML).toContain(title);

        expect( getByTestId('test-title').innerHTML).toContain(title)
      
    });

    test('Debe mostrar el subtirulo enviado por props ', () => {

        const title = 'Hola, soy goku';
        const subTitle = 'soy un subtitulo';
        const {getByText} = render( 
            <FirstApp 
                title={title}
                subtitle={subTitle}
            />)
        expect( getByText(subTitle) ).toBeTruthy();
      
    })
    
    
  
});
