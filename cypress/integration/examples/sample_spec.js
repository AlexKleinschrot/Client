
describe('My First Test', function() {
  it('Visit our Todo Site', function() {

    cy.visit('http://localhost:3000/')



  })
  it('Add new Todo',function(){

  cy.get('.inputAddNew').type("TestToDo")

  if(cy.get('input').length<5){

  }

   if(cy.get('input').length){

   }
  cy.get('.addBtn').click()
  cy.get('.Element').contains("TestToDo")
  })
  it('Manage Todo',function(){
  cy.get('[type="checkbox"]').check()

  cy.get('button').click()



  })
})

