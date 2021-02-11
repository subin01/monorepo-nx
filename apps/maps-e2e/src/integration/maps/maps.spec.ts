describe('maps: Maps component', () => {
  beforeEach(() => cy.visit('/iframe.html?id=maps--primary'));
    
    it('should render the component', () => {
      cy.get('h1').should('contain', 'Welcome to maps!');
    });
});
