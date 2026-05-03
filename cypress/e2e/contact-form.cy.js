describe('Contact Form Tests', { testIsolation: false }, () => {
  const invalidData = {
    name: 'asd',
    email: 'asdasd',
    phone: 'asdasd',
    subject: 'asdasd',
    message: 'asdasd',
  };

  const validData = {
    name: 'Juan Pérez',
    email: 'juan@gmail.com',
    phone: '35123696457',
    subject: 'Room reservation for date X',
    message: 'loremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestloremTestlo',
  };

  const formSelectors = {
    name: 'input[placeholder="Name"]',
    email: 'input[placeholder="Email"]',
    phone: 'input[placeholder="Phone"]',
    subject: 'input[placeholder="Subject"]',
    message: '[data-testid="ContactDescription"]',
    submitBtn: '#submitContact',
    alert: '.alert',
  };

  const validateCommonErrors = () => {
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

  it('Validate empty form submission', () => {
    cy.visit('/');
    cy.log('Submitting blank contact form...');
    cy.get(formSelectors.submitBtn).click();
    validateCommonErrors();
  });

  it('Validate form submission with invalid data', () => {
    cy.visit('/');
    cy.log('Setting invalid data...');

    cy.get(formSelectors.name).type(invalidData.name);
    cy.get(formSelectors.email).type(invalidData.email);
    cy.get(formSelectors.phone).type(invalidData.phone);
    cy.get(formSelectors.subject).type(invalidData.subject);
    cy.get(formSelectors.message).type(invalidData.message);

    cy.get(formSelectors.submitBtn).click();
    cy.get('.alert').should('be.visible');
    cy.get('p').contains('Phone must be between 11 and 21 characters.');
    cy.get('p').contains('debe ser una dirección de correo electrónico con formato correcto');
    cy.get('p').contains('Message must be between 20 and 2000 characters.');
  });

  it('Validate form submission with valid data', () => {
    cy.visit('/');
    cy.log('Setting valid data...');

    cy.get(formSelectors.name).type(validData.name);
    cy.get(formSelectors.email).type(validData.email);
    cy.get(formSelectors.phone).type(validData.phone);
    cy.get(formSelectors.subject).type(validData.subject);
    cy.get(formSelectors.message).type(validData.message);
    cy.get(formSelectors.submitBtn).click();
  });
});