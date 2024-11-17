# XAcademy
# Actividad para el 12/11

## Método de entrega:

1. Subir un archivo comprimido 
2. Subir el trabajo a github y adjuntar el link del repositorio

---

- Visita https://automationintesting.online/ para realizar la actividad.
- Implementa los siguientes métodos de Cypress que hemos revisado:

- Verifica que la información del hotel esté presente en la página.

![image](https://github.com/user-attachments/assets/42271623-a754-483b-9460-6dba38774a86)


- Asegurate de que haya al menos una imagen visible.

![image](https://github.com/user-attachments/assets/44b64b9b-437b-435d-a043-5931a52bb392)


![image](https://github.com/user-attachments/assets/64cbf452-5208-45aa-838c-6b0897698a45)


- Confirma que el texto de la descripción del hotel sea el esperado.
    
![image](https://github.com/user-attachments/assets/5d0438e0-a8ee-49e1-a327-f44ad06f6b7a)
    

(OPCIONAL)

- Crea comandos personalizados para reutilizar el código (basado en el código proporcionado).

Código de ejemplo:

```jsx
describe('Enviar mensaje',{testIsolation:false},() =>{

    it('Validar envío de form vacío', () => {
        cy.visit('https://automationintesting.online/')
        cy.log('Envío de form de contacto en blanco...')
        cy.get('#submitContact').click()
        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Subject must be between 5 and 100 characters.')
        cy.get('p').contains('Subject may not be blank')
        cy.get('p').contains('Name may not be blank')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
        cy.get('p').contains('Message may not be blank')
        cy.get('p').contains('Email may not be blank')
        cy.get('p').contains('Phone may not be blank')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
    })

    it('Validar envío de form con data incorrecta',()=>{
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('asd')
        cy.get('input[placeholder="Email"]').type('asdasd')
        cy.get('input[placeholder="Phone"]').type('asdasd')
        cy.get('input[placeholder="Subject"]').type('asdasd')
        cy.get('[data-testid="ContactDescription"]').type('asdasd')
        cy.get('#submitContact').click()

        cy.get('.alert').should('be.visible')
        cy.get('p').contains('Phone must be between 11 and 21 characters.')
        cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto')
        cy.get('p').contains('Message must be between 20 and 2000 characters.')
    })

    it('Validar envío de form con data correcta',()=>{
        cy.log('Set de datos incorrectos...')
        cy.get('input[placeholder="Name"]').type('Juan Pérez')
        cy.get('input[placeholder="Email"]').type('juan@gmail.com')
        cy.get('input[placeholder="Phone"]').type('35123696457')
        cy.get('input[placeholder="Subject"]').type('Reserva de habitación para fecha X')
        cy.get('[data-testid="ContactDescription"]').type('loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo') 
        cy.get('#submitContact').click()
    })

})
```
