describe ('Collapse', () => {
    before (() => {
        cy.visit('http://localhost:9000/cypress/collapse');
    });

    describe ('Display', () => {
        it('Should be render elements', () => {
            cy.get('.demo-story')
                .should('be.visible')
        });
    });

    describe ('Interaction', () => {
        it('Should be open on click', () => {
            cy.get('.collapse-main')
            .find('.collapse-heading-wrapper').each(collapse => {
                cy.wrap(collapse).click()
                cy.get('.inner-main')
                .should('be.visible')
            })                             
        });

        it('Should be accordion', () => {
            cy.get('.collapse-accordion')
            .find('.collapse-heading-wrapper').each(collapse => {
                cy.wrap(collapse).click()
                cy.get('.inner-accordion-first')
                .should('be.visible')
                .parent()
                .find('.inner-accordion-second')
                .should('not.be.visible')
            })                                                               
        });

        it('Should be disabled', () => {
            cy.get('.collapse-disabled') 
                .find('.collapse-heading-wrapper')
                .contains('1 Disabled')
                .click()
                .get('.inner-disabled')
                .should('be.visible')
                .parents()
                .find('.collapse-heading-wrapper', '2 Disabled')
                .should('have.class', 'heading-disabled')           
        });
    });
});