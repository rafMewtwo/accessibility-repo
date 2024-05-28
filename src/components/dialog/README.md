# Modal Não Acessível
---
Neste exemplo de modal não acessível, não estamos gerenciando o foco do teclado, não fornecemos uma maneira clara para fechar a modal usando apenas o teclado e não usamos atributos ARIA para melhorar a acessibilidade.


# Modal Acessível
---

Neste exemplo de modal acessível, estamos gerenciando o foco do teclado usando tabindex e o método focus(). Além disso, fornecemos um atributo aria-modal="true" para indicar que é uma modal, e um atributo aria-labelledby para associar a modal a um título acessível. Também adicionamos um evento de teclado para fechar a modal quando a tecla "Esc" for pressionada.

## Principais Diferenças e Importância
---

Foco do Teclado: Na modal acessível, o foco é movido para a modal quando ela é aberta, permitindo que os usuários naveguem dentro dela usando o teclado. Isso é importante para usuários que dependem de dispositivos de entrada alternativos.

Atributos ARIA: Na modal acessível, usamos atributos ARIA para fornecer informações adicionais sobre a modal para leitores de tela e outros dispositivos assistivos. Isso melhora a compreensão da modal para usuários com deficiência.

Tecla "Esc" para Fechar: Na modal acessível, fornecemos uma maneira clara e óbvia para os usuários fecharem a modal usando apenas o teclado. Isso é crucial para usuários que não podem usar um mouse.

Semântica HTML Adequada: Na modal acessível, usamos semântica HTML adequada, como <h2> para o título e <button> para o botão de fechar. Isso ajuda os usuários a entenderem melhor a estrutura da modal.