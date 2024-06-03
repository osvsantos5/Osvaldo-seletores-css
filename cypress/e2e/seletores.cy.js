///<reference types = "cypress"/>

describe('Seletores avançados com cypress', () => {

  beforeEach(() => {
    // Visita a página antes de cada teste
    cy.visit('../../seletores.html')
  });

  it('Seleciona elementos que contêm um Texto específico', () => {
     // Verifica se um elemento que contém o texto "Item 3" existe na página
     cy.contains('Item 3').should('exist');
     // Clica no botão Enviar
     cy.contains('Enviar').click();
     // Verifica se a mensagem de feedback é exibida
     cy.get('#mensagemFeedback').should('be.visible');
  });
  
  it('Seleciona o elemento com a classe pai', () => {
    // Verifica se um elemento com a classe "pai" existe na página
    cy.get('.pai').should('exist')
  })

  it('Seleciona o elemento com o id Filho', () => {
    // Verifica se um elemento com o ID "id-filho" tem a classe "filho-4"
    cy.get('#id-filho').should('have.attr', 'class' , 'filho-4')
   })

  it('Seleciona um elemento filho dentro do elemento com a classe pai', () => {
    // Verifica se um elemento com a classe "filho-4" está dentro de um elemento com a classe "pai"
    cy.get('.pai').find('.filho-4').should('contain', 'Item solto')
  });

  it('Seleciona o segundo elemento <span> com a classe irmao', () => {
    // Verifica se o segundo elemento <span> com a classe "irmao" contém o texto "Irmão 2"
    cy.get('.irmao + .irmao').should('contain', 'Irmão 2')
    // Seleciona o segundo elemento <span> com a classe "irmao"
    cy.get('.irmao').eq(1).should('contain', 'Irmão 2');
  });


  it('Seleciona o próximo elemento irmão', () => {
    // Verifica se o próximo elemento irmão de um elemento com a classe "item-especial" contém o texto "Item 3"
    cy.get('.item-especial').next().should('contain', 'Item 3')
    // Seleciona o próximo elemento irmão após o primeiro <span> com a classe "irmao"
    cy.get('#irmao-1').next().should('have.id', 'irmao-2');
  });

  it('Seleciona o elemento irmão anterior', () => {
    // Verifica se o elemento irmão anterior de um elemento com a classe "item-especial" contém o texto "Item 1"
    cy.get('.item-especial').prev().should('contain', 'Item 1')
    // Seleciona o elemento irmão anterior ao segundo <span> com a classe "irmao"
    cy.get('#irmao-2').prev().should('have.id', 'irmao-1');
  });


  it('Seleciona o irmão da div anterior', () => {
    // Verifica se o irmão da div anterior contém o texto "Irmão 1"
    cy.get('.pai-tio-2').prev().should('contain', 'Irmão 1') 
  });


  it('Seleciona o irmão da div anterior', () => {
    // Verifica se o irmão da div anterior contém o texto "Irmão 1"
    cy.get('.pai-tio-2').prev().should('contain', 'Irmão 1') 

  });
 
  it('Seleciona o terceiro elemento <li> encontrado', () => {
    // Verifica se o terceiro elemento <li> contém o texto "Item 3"
    cy.get('li').eq(2).should('contain', 'Item 3')
  });

  it('Seleciona o elemento com o atributo data-test', () => {
    // Verifica se um elemento com o atributo data-test igual a "div-pai" contém o texto "Item solto"
    cy.get('[data-test="div-pai"]').should('contain', 'Item solto')
    // Verifica se um elemento com o atributo data-test igual a "div-pai" existe na página
    cy.get('[data-test="div-pai"]').should('exist');
  });

  it('Seleciona o elemento com a classe pai do elemento com a classe filho', () => {
    // Verifica se o elemento pai de um elemento com a classe "filho-4" tem o atributo data-test igual a "div-pai"
    cy.get('#id-filho').parent('.pai').should('have.attr', 'data-test' , 'div-pai')
    // Verifica se o elemento pai de um elemento com a classe "filho-4" tem a classe "pai"
    cy.get('.filho-4').parent().should('have.class', 'pai');
  });


  it('Seleciona o elemento com um valor em um select', () => {
     // Seleciona a opção "Pouco" em um elemento <select>
     cy.get('select').select('Pouco')
     // Clica no botão de envio
     cy.get('[type="submit"]').click()
     // Verifica se a mensagem de feedback contém o texto "Obrigado por compartilhar conosco!"
     cy.get('#mensagemFeedback').should('contain', 'Obrigado por compartilhar conosco!')
     // Verifica se a mensagem de feedback existe na página
     cy.contains('Obrigado por compartilhar conosco!').should('exist')

    // Seleciona um elemento <option> com o valor "muito" em um <select>
     cy.get('select[name="opcao"]').select('muito').should('have.value', 'muito');
  });


  it('Seleciona um elemento com checkbox', () => {
    // Marca o checkbox com o ID "aceitar-termos"
    cy.get('#aceitar-termos').check()
  });

})

