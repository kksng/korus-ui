describe('FileUpload', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/fileupload');
  });

  describe('Interaction', () => {
    it.only('Controlled mode', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      const fileName = 'test.png';
      cy.contains('Загрузить').click();
      cy.fixture('test.png').then((uploadFile) => {
        cy.get('input[type="file"]')
          .first()
          .attachFile(fileName, uploadFile, 'image/png')
          .get('.controlled')
          .should('contain', 'Загрузка')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Файл загружен!');
          });
      });
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
            .attachFile('test.png', { subjectType: 'drag-n-drop' })
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
