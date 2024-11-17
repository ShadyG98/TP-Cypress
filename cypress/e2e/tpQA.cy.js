describe('Test Trabajo Practico', { testIsolation: false }, () => {

    // Función para evitar repetir los patrones del primer punto, extraidos de un div
    const getText = (divClass, index) => {
        return cy.get(divClass)
            .find('p')
            .eq(index)
            .invoke('text');
    };

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

    it('Verificación de información del hotel', () => {
        cy.visit('https://automationintesting.online/');

        // Verifica el primer <p> que contenga el nombne del hotel
        getText('div.col-sm-5', 0).then((texto) => {
            expect(texto).to.include('Shady Meadows B&B');
        });

        // Verifica el segundo <p> que contenga la dirección del hotel
        getText('div.col-sm-5', 1).then((texto) => {
            expect(texto).to.include('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');
        });

        // Verifica el tercer <p> que contenga el número de teléfono
        getText('div.col-sm-5', 2).then((texto) => {
            expect(texto).to.include('012345678901');
        });

        // Verifica el cuarto <p> que contenga el email
        getText('div.col-sm-5', 3).then((texto) => {
            expect(texto).to.include('fake@fakeemail.com');
        });

//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

        // Asegúrate de que al menos una imagen esté visible
        cy.get('img[src="/images/rbp-logo.jpg"], img[alt="Preview image of room101"]') //ambas imagenes agregadas con test de source y alt
            .should('have.length.greaterThan', 0)  // Asegura que al menos una imagen esté encontrada
            .first()  // Selecciona la primera imagen
            .should('be.visible');  // Verifica que esté visible
            
//----------------------------------------------------------------------------------------------------------------------------------------------------------------//

        // Verifica que el texto de la descripción del hotel sea el esperado
        getText('div.col-sm-10', 0).then((texto) => {
            cy.log(texto);
            expect(texto).to.equal('Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.');
            //el motivo por el cual no use el ".to.include" , es que hice pruebas y si borras un punto al final no lo considera, podia usar expresiones regulares como "/" o "?" como opcional al final del texto, no me agradó la idea y busque otra alternativa, equal fue la solucion.
        });
    });
});
