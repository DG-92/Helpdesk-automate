 cypress/e2e/login.spec.js
describe('Testes de Login', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000')
  })

  it('deve redirecionar para login se não estiver autenticado', () => {
    cy.window().then((win) => {
      win.sessionStorage.clear()
    })
    cy.visit('http://localhost:3000')
    cy.url().should('include', 'login.html')
  })

  it('deve mostrar erro com credenciais inválidas', () => {
    cy.get('input[name="user"]').type('usuario@invalido.com')
    cy.get('input[type="password"]').type('senhaerrada')
    cy.get('button').click()
    // Adicione verificação para mensagem de erro quando implementá-la
  })

  it('deve fazer login com sucesso com credenciais válidas', () => {
    cy.get('input[name="user"]').type('asd@asd')
    cy.get('input[type="password"]').type('asd123')
    cy.get('button').click()
    cy.url().should('include', 'user.html')
  })

  it('deve impedir login com campos vazios', () => {
    cy.get('button').click()
    // Adicione verificação para mensagens de validação quando implementá-las
    cy.url().should('include', 'login.html')
  })
})