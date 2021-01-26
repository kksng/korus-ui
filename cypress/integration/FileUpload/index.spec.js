describe('FileUpload', () => {
  before(() => {
    cy.visit('http://localhost:9000/cypress/fileupload', {
      onBeforeLoad(win) {
        cy.stub(win.console, 'log').as('consoleLog');
      },
    });
  });

  describe('Interaction', () => {
    it('Customization mode', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      const fileName = 'test.png';
      cy.get('.custom').contains('Загрузить').click();
      cy.fixture('test.png').then((uploadFile) => {
        cy.get('input[type="file"]')
          .eq(1)
          .attachFile(fileName, uploadFile, 'image/png')
          .get('button')
          .should('have.class', 'loading')
          .get('@consoleLog')
          .should('be.calledWith', 'Вы загрузили файл!')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith('Файл загружен!');
          });
      });
    });

    it('Controlled mode', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      const fileName = 'test.png';
      cy.get('.controlled').contains('Загрузить').click();
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

    it('Upload invalid files', () => {
      const stub = cy.stub();
      const invalidFile = 'txtFile.txt';
      cy.on('window:alert', stub);
      cy.get('.partialcustom').contains('частично').click();
      cy.fixture('txtFile.txt').then((uploadInvalidFile) => {
        cy.get('input[type="file"]')
          .eq(2)
          .attachFile(invalidFile, uploadInvalidFile, 'text/*')
          .get('.partialcustom')
          .should('contain', 'загружаю')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'При загрузке возникла ошибка!'
            );
          });
      });
    });
    it('Upload big files', () => {
      const stub = cy.stub();
      const bigFile = 'bigFile.jpeg';
      cy.on('window:alert', stub);
      cy.get('.partialcustom').contains('частично').click();
      cy.fixture('bigFile.jpeg').then((uploadBigFile) => {
        cy.get('input[type="file"]')
          .eq(2)
          .attachFile(bigFile, uploadBigFile, 'image/jpg')
          .get('.partialcustom')
          .should('contain', 'загружаю')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'При загрузке возникла ошибка!'
            );
          });
      });
    });
    it('Upload small files', () => {
      const stub = cy.stub();
      const smallFile = 'test.png';
      cy.on('window:alert', stub);
      cy.get('.partialcustom').contains('частично').click();
      cy.fixture('test.png').then((uploadSmallFile) => {
        cy.get('input[type="file"]')
          .eq(2)
          .attachFile(smallFile, uploadSmallFile, 'image/png')
          .get('.partialcustom')
          .should('contain', 'загружаю')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'При загрузке возникла ошибка!'
            );
          });
      });
    });
  });
});
