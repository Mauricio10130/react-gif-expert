import { renderHook, waitFor } from "@testing-library/react"
import useFetchGifs from "../../src/hooks/useFetchGifs"

describe('Pruebas en el hook useFetchGifs', () => {

    test('debe ingresar el estado inicial', () => {

        renderHook( () => useFetchGifs('One Punch') );
        const { result } = renderHook( () => useFetchGifs('One Punch') );
        const { images, isLoading } = result.current;

        expect( images.length ).toBe(0);
        expect( isLoading ).toBeTruthy();
    })

    test('debe retornar un arreglo de imagenes y el isloading en false', async() => {

        const { result } = renderHook( () => useFetchGifs('One Punch') );
        
        await waitFor(
            () => expect( result.current.images.length ).toBeGreaterThan(0)
        )

        const { images, isLoading } = result.current;

        expect( images.length ).toBeGreaterThan(0);
        expect( isLoading ).toBeFalsy();
    })
    
})
