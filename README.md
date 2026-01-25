 # Catálogo de Vendas Interativo (WhatsApp)
 
 ![Demonstração do Projeto](https://placehold.co/800x400/f7e4e4/6d2e46?text=Demonstra%C3%A7%C3%A3o+do+Site)
 
 ## 📝 Descrição
 
 Este projeto é um front-end de um site de vendas (catálogo digital) projetado para consultores de vendas diretas. Ele exibe produtos de diversas marcas (Racco, Abelha Rainha, Odorata) de forma organizada, permitindo que os clientes montem um pedido em uma sacola virtual e o finalizem enviando uma mensagem pronta via WhatsApp.
 
 O layout é limpo, elegante e totalmente responsivo, adaptando-se a desktops, tablets e celulares.
 
 ## ✨ Funcionalidades Principais
 
 - **Catálogo de Produtos Dinâmico**: Os produtos são carregados a partir de um array de objetos em JavaScript, facilitando a adição, remoção ou atualização de itens.
 - **Agrupamento por Marca**: Os produtos são automaticamente separados em seções recolhíveis para cada marca, melhorando a organização.
 - **Busca Inteligente**: Uma barra de pesquisa permite filtrar produtos em tempo real por nome, marca ou descrição.
 - **Sacola de Compras Virtual**:
   - Adicione produtos à sacola com um clique.
   - Visualize os itens, altere quantidades ou remova produtos em um modal.
   - O contador de itens na sacola é atualizado automaticamente.
 - **Finalização de Pedido via WhatsApp**: Ao clicar em "Finalizar Pedido", uma nova aba do WhatsApp é aberta com uma mensagem pré-formatada contendo a lista de produtos, quantidades e o valor total do pedido.
 - **Design Responsivo**: A interface se ajusta perfeitamente a diferentes tamanhos de tela.
 - **Seções Recolhíveis**: As seções de marcas podem ser expandidas ou recolhidas para uma navegação mais limpa.
 
 ## 🚀 Tecnologias Utilizadas
 
 - **HTML5**: Estrutura semântica do site.
 - **CSS3**: Estilização completa, utilizando Flexbox e Grid Layout para um design moderno e responsivo.
 - **JavaScript (Vanilla)**: Toda a interatividade do site, incluindo:
   - Manipulação do DOM para renderizar produtos e a sacola.
   - Lógica de busca e filtro.
   - Gerenciamento de eventos (cliques, digitação).
   - Geração da mensagem para o WhatsApp.
 
 ## 🔧 Como Configurar e Usar
 
 Este é um projeto front-end estático, o que torna sua configuração muito simples.
 
 1.  **Clone o repositório** (ou baixe os arquivos):
     ```bash
     git clone <https://github.com/Click-facil/regia-beauty.git>
     ```
 2.  **Navegue até a pasta do projeto**:
     ```bash
     cd sitedevendas
     ```
 3.  **Abra o arquivo `index.html`** em seu navegador de preferência. Pronto! O site estará funcionando localmente.
 
 ### Personalização
 
 Para adaptar o site para seu próprio uso, você precisará editar principalmente o arquivo `script.js`:
 
 - **Alterar o número de WhatsApp**:
   - No arquivo `script.js`, encontre a constante `seuNumeroWhatsApp` e substitua pelo seu número com o código do país e DDD (ex: `5511999998888`).
     ```javascript
     const seuNumeroWhatsApp = '5591981803393'; // <-- Altere este valor
     ```
 
 - **Modificar os Produtos**:
   - No mesmo arquivo `script.js`, localize a constante `produtos`. Este é um array de objetos, onde cada objeto representa um produto. Você pode adicionar, editar ou remover objetos para customizar seu catálogo.
     ```javascript
     const produtos = [
         {
             id: 1,
             marca: "Sua Marca",
             nome: "Nome do Produto",
             descricao: "Descrição do produto.",
             preco: 99.90,
             imagem: "caminho/para/imagem.jpg"
         },
         // ... outros produtos
     ];
     ```
 
 - **Ajustar o Estilo**:
   - As cores principais, fontes e outros aspectos visuais podem ser facilmente alterados no arquivo `style.css`. A paleta de cores está convenientemente documentada no topo do arquivo.
 
 ## 📂 Estrutura de Arquivos
 
 ```
 /sitedevendas
 ├── index.html         # Arquivo principal com a estrutura da página
 ├── style.css          # Folha de estilos com todo o design
 ├── script.js          # Código JavaScript com a lógica e os dados dos produtos
 ├── README.md          # Este arquivo
 └── /imagens           # Pasta para armazenar as imagens dos produtos e logos
 ```
