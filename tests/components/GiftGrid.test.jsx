import { render, screen } from "@testing-library/react";
import GiftGrid from "../../src/components/GiftGrid"
import useFetchGifs from "../../src/hooks/useFetchGifs";

jest.mock('../../src/hooks/useFetchGifs');

describe('Pruebas en <GiftGrid/>', () => {

    const category = 'One Punch';

    test('debe mostrar el loading inicialmente', () => {

        useFetchGifs.mockReturnValue({
            images: [],
            isLoading: true
        })

        render( <GiftGrid category={ category }/> );
        expect( screen.getByText('Cargando...') );
        expect( screen.getByText( category ) );
    })
    
    test('debe mostrar items cuando se cargan las imagenes useFetchGifs', () => {

        const gifs = [
            {
                id: 'ABC',
                title: 'Saitama',
                url: 'https://localhost/saitama.jpg'
            },
            {
                id: '123',
                title: 'Goku',
                url: 'https://localhost/goku.jpg'
            },
        ]

        useFetchGifs.mockReturnValue({
            images: gifs,
            isLoading: true
        })

        render( <GiftGrid category={ category }/> );
        expect( screen.getAllByRole('img').length ).toBe(2);

    })
    
})
