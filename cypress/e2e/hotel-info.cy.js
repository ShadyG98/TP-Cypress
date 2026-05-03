describe('Hotel Information Tests', { testIsolation: false }, () => {
  const getText = (divClass, index) => {
    return cy.get(divClass)
      .find('p')
      .eq(index)
      .invoke('text');
  };

  it('Verify hotel information', () => {
    cy.visit('/');

    getText('div.col-sm-5', 0).then((text) => {
      expect(text).to.include('Shady Meadows B&B');
    });

    getText('div.col-sm-5', 1).then((text) => {
      expect(text).to.include('The Old Farmhouse, Shady Street, Newfordburyshire, NE1 410S');
    });

    getText('div.col-sm-5', 2).then((text) => {
      expect(text).to.include('012345678901');
    });

    getText('div.col-sm-5', 3).then((text) => {
      expect(text).to.include('fake@fakeemail.com');
    });

    cy.get('img[src="/images/rbp-logo.jpg"], img[alt="Preview image of room101"]')
      .should('have.length.greaterThan', 0)
      .first()
      .should('be.visible');

    getText('div.col-sm-10', 0).then((text) => {
      cy.log(text);
      expect(text).to.equal(
        'Welcome to Shady Meadows, a delightful Bed & Breakfast nestled in the hills on Newingtonfordburyshire. A place so beautiful you will never want to leave. All our rooms have comfortable beds and we provide breakfast from the locally sourced supermarket. It is a delightful place.'
      );
    });
  });
});