describe('FileUpload', () => {
  before(() => {
    cy.visit('/cypress/fileupload');
  });
  
  describe('Display', () => {
    it('Should render component in controlled mode', () => {
      cy.get('.controlled')
        .should('be.visible')
        .contains('Загрузить')
        .should('be.visible')
        .parents('.controlled')
        .snapshot()
    });

    it('Should render description text', () => {
      cy.get('.partialcustom')
        .find('span')
        .should('have.text', 'Я частично изменен!')
        .and('be.visible');
    });

    it('Should render customizated component', () => {
      cy.get('.custom')
        .children()
        .should('be.visible')
        .parent()
        .snapshot()
    });

    it('Should render loading when using isLoading prop', () => {
      cy.get('.loaded')
        .contains('загрузка')
        .should('be.visible')
        .parents('.loaded')
        .should('be.visible')
        .snapshot()
    });

    it('Should render conponent in custom wrapper', () => {
      cy.get('.partialcustom')
        .should('be.visible')
        .and('have.class', 'width-10')
        .and('have.prop', 'style')
    });

    it('Shouud attach class names', () => {
      cy.get('.loaded')
        .should('have.class', 'underlining')
        .and('have.class', 'className');
    });
  });

  describe('Events', () => {
    beforeEach(() => {
      cy.visit('/cypress/fileupload', {
        onBeforeLoad(win) {
          cy.stub(win.console, 'log').as('consoleLog');
        },
      });
    });

    it('Should call onClick event and have correct event format', () => {
      cy.get('.loaded')
        .click()
        .get('@consoleLog')
        .should('be.calledWith', 'Clicked');
    });
  });

  describe('Interaction', () => {
    it('Customization mode', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      const fileName = 'test.png';

      cy.get('.custom')
        .contains('Загрузить')
        .click();
      cy.fixture('test.png').then((uploadFile) => {
        cy.get('#customFileUpload')
          .attachFile(fileName, uploadFile, 'image/png')
          .get('button')
          .should('have.class', 'loading')
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

      cy.get('.controlled')
        .contains('Загрузить')
        .click();
      cy.fixture('test.png').then((uploadFile) => {
        cy.get('#controlledFileUpload')
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
      cy.get('.partialcustom')
        .contains('частично')
        .click();
      cy.fixture('txtFile.txt').then((uploadInvalidFile) => {
        cy.get('#partialCustomFileUpload')
          .attachFile(invalidFile, uploadInvalidFile, 'text/*')
          .get('.partialcustom')
          .should('contain', 'загружаю')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'Недопустимый формат файла'
            );
          });
      });
    });

    it('Upload big files', () => {
      const stub = cy.stub();
      const bigFile = 'bigFile.jpeg';
      cy.on('window:alert', stub);

      cy.get('.partialcustom')
        .contains('частично')
        .click();
      cy.fixture('bigFile.jpeg').then((uploadBigFile) => {
        cy.get('#partialCustomFileUpload')
          .attachFile(bigFile, uploadBigFile, 'image/jpg')
          .get('.partialcustom')
          .should('contain', 'загружаю')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'Превышен максимальный размер файла'
            );
          });
      });
    });
    
    it('Upload small files', () => {
      const stub = cy.stub();
      const smallFile = 'test.png';
      cy.on('window:alert', stub);

      cy.get('.partialcustom')
        .contains('частично')
        .click();
      cy.fixture('test.png').then((uploadSmallFile) => {
        cy.get('#partialCustomFileUpload')
          .attachFile(smallFile, uploadSmallFile, 'image/png')
          .get('.partialcustom')
          .should('contain', 'загружаю')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'Файл меньше допустимого размера'
            );
          });
      });
    });

    it('Upload file with too long name', () => {
      const stub = cy.stub();
      cy.on('window:alert', stub);
      const fileName = 'bigFile.jpeg';

      cy.get('.controlled')
        .contains('Загрузить')
        .click();
      cy.fixture('bigFile.jpeg').then((uploadLongNameFile) => {
        cy.get('#controlledFileUpload')
          .attachFile(fileName, uploadLongNameFile, 'image/jpg')
          .get('.controlled')
          .should('contain', 'Загрузка')
          .wait(3000)
          .then(() => {
            expect(stub.getCall(0)).to.be.calledWith(
              'Превышена максимальная длина имени файла'
            );
          });
      });
    });
  });
});
