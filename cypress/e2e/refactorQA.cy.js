describe('Enviar mensaje', { testIsolation: false }, () => {

  // Datos para los test
  const datosIncorrectos = {
    name: 'asd',
    email: 'asdasd',
    phone: 'asdasd',
    subject: 'asdasd',
    message: 'asdasd',
  };

  const datosCorrectos = {
    name: 'Juan Pérez',
    email: 'juan@gmail.com',
    phone: '35123696457',
    subject: 'Reserva de habitación para fecha X',
    message: 'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo',
  };

  // Selectores necesarios
  const formSelectors = {
    name: 'input[placeholder="Name"]',
    email: 'input[placeholder="Email"]',
    phone: 'input[placeholder="Phone"]',
    subject: 'input[placeholder="Subject"]',
    message: '[data-testid="ContactDescription"]',
    submitBtn: '#submitContact',
    alert: '.alert',
  };

  //----------------------------------------------------------------------------------------------------------------------------------------------------------------//

  // Test case: Validaciones comunes
  const commonValidations = () => {
    cy.get('.alert').should('be.visible');
    cy.get('p').contains('Subject must be between 5 and 100 characters.');
    cy.get('p').contains('Subject may not be blank');
    cy.get('p').contains('Name may not be blank');
    cy.get('p').contains('Message must be between 20 and 2000 characters.');
    cy.get('p').contains('Message may not be blank');
    cy.get('p').contains('Email may not be blank');
    cy.get('p').contains('Phone may not be blank');
    cy.get('p').contains('Phone must be between 11 and 21 characters.');
  };

  // Test case: Formulario vacío
  it('Validar envío de form vacío', () => {
    cy.visit('https://automationintesting.online/');
    cy.log('Envío de form de contacto en blanco...');
    cy.get(formSelectors.submitBtn).click();
    commonValidations();
  });

  // Test case: Formulario con datos incorrectos
  it('Validar envío de form con data incorrecta', () => {
    cy.visit('https://automationintesting.online/');
    cy.log('Set de datos incorrectos...');

    cy.get(formSelectors.name).type(datosIncorrectos.name);
    cy.get(formSelectors.email).type(datosIncorrectos.email);
    cy.get(formSelectors.phone).type(datosIncorrectos.phone);
    cy.get(formSelectors.subject).type(datosIncorrectos.subject);
    cy.get(formSelectors.message).type(datosIncorrectos.message);

    cy.get(formSelectors.submitBtn).click();
    cy.get('.alert').should('be.visible');
    cy.get('p').contains('Phone must be between 11 and 21 characters.');
    cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto');
    cy.get('p').contains('Message must be between 20 and 2000 characters.');
  });

  // Test case: Formulario con datos correctos
  it('Validar envío de form con data correcta', () => {
    cy.visit('https://automationintesting.online/');
    cy.log('Set de datos correctos...');

    cy.get(formSelectors.name).type(datosCorrectos.name);
    cy.get(formSelectors.email).type(datosCorrectos.email);
    cy.get(formSelectors.phone).type(datosCorrectos.phone);
    cy.get(formSelectors.subject).type(datosCorrectos.subject);
    cy.get(formSelectors.message).type(datosCorrectos.message);
    cy.get(formSelectors.submitBtn).click();
  });
});
