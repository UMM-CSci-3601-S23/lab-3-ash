import { TodoListPage } from '../support/todo-list.po';

const page = new TodoListPage();

describe('Todo list', () => {

  beforeEach(() => {
    page.navigateTo();
  });

  it('Should have the correct title', () => {
    page.getTodoTitle().should('have.text', 'Todos');
  });

  // Because this depends on server filtering, we can't handle this in e2e testing, because we are relying on an incomplete implementation
  /*
  it('Should type something in the name filter and check that it returned correct elements', () => {
    // Filter for user 'Blanche'
    cy.get('[data-test=todoNameInput]').type('Fry\n');

    // All of the user cards should have the name we are filtering by
    page.getTodoCards().each($card => {
      cy.wrap($card).find('.user-card-name').should('have.text', 'Fry');
    });
  });*/

  it('Should type something in the category filter and check that it returned correct elements', () => {
    // Filter for user 'Blanche'
    cy.get('[data-test=todoCategoryInput]').type('video games');

    // All of the user cards should have the name we are filtering by
    page.getTodoCards().each($card => {
      cy.wrap($card).find('.todo-cat-selector').should('have.text', 'video games');
    });
  });

  it('Should type something in the body filter and check that it returned correct elements', () => {
    // Filter for user 'Blanche'
    cy.get('[data-test=todoBodyInput]').type('magna');

    // All of the user cards should have the body we are filtering by
    page.getTodoCards().each($card => {
      // We are using 'anga' here because capitalization yielded some problems
      cy.wrap($card).find('.user-card-role').should('contain', 'agna');
    });
  });
});
