/**
 * @jest-environment jsdom
 */

import '@testing-library/jest-dom';
import { render, screen } from "@testing-library/react";
import { BrowserRouter } from 'react-router-dom';
import NavbarApp from '../src/components/navbar';

describe("pruebas interfaz de navbar", () => {
    beforeEach(() => {
        render(
            <BrowserRouter>
                <NavbarApp />
            </BrowserRouter>);
    })

    test("Titulo de la pagina presente", () => {
        expect(screen.getByText("Turbo")).toBeInTheDocument();
    });
    test("Boton Facturacion presente", () => {
        expect(screen.getByRole("link", { name: "Facturacion" })).toBeInTheDocument();
    });
    test("Boton Facturacion presente", () => {
        expect(screen.getByRole("link", { name: "Productos" })).toBeInTheDocument();
    });
});