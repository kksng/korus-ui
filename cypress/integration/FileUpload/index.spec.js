describe('FileUpload', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/fileupload');
  });

  describe('Interaction', () => {
    it.only('Controlled mode', () => {
      cy.server();
      cy.route(
        'GET',
        'http://localhost:9000/cypress/fileupload',
        'fixtures: test.png'
      );
      cy.contains('Загрузить').click();
    });

    it('Customization mode', () => {
      const stub = cy.stub();
      cy.on('window:confirm', stub);
      cy.get('.controlled')
        .find('span')
        .contains('Загрузить')
        .then((upload) => {
          cy.wrap(upload)
            .click()
            .attachFile('test.png', { subjectType: 'input' })
            .then(() => {
              expect(stub.getCall(0)).to.be.calledWith('Alert!');
            });
        });
    });

    it('PartialCustomization mode', () => {
      const stub = cy.stub();
      cy.on('window:confirm', stub);
      cy.get('.controlled')
        .find('span')
        .contains('Загрузить')
        .then((upload) => {
          cy.wrap(upload)
            .click()
            .attachFile('test.png', { subjectType: 'input' })
            .then(() => {
              expect(stub.getCall(0)).to.be.calledWith('Alert!');
            });
        });
    });
  });
});
