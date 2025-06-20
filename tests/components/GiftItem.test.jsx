import { render, screen } from "@testing-library/react"
import { GiftItem } from "../../src/components/GiftItem";

describe('Pruebas en <GiftItem />', () => {

    const title = 'Saitama';
    const url = 'https://one-punch.com/saitama.jpg'

  test('debe hacer match con el snapshot', () => {
    
    const { container } = render( <GiftItem title={ title } url={ url } /> );
    expect( container ).toMatchSnapshot();
  })

  test('debe mostrar la imagen con el URL y el ALT indicado', () => {

    render( <GiftItem title={ title } url={ url } /> );
    // screen.debug();
    // expect( screen.getByRole('img').src ).toBe( url );
    const { src, alt } = screen.getByRole('img');
    expect( src ).toBe( url );
    expect( alt ).toBe( alt );
  })

  test('debe mostrar el título en el componente ', () => {

    render( <GiftItem title={ title } url={ url } /> );
    expect( screen.getByText( title ) ).toBeTruthy();
  })
  
  
  
})
