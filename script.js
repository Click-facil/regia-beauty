document.addEventListener('DOMContentLoaded', () => {
    // 1. JUNÇÃO DOS DADOS (Com proteção para não travar o i5 se um arquivo falhar)
    const r = typeof produtosRacco !== 'undefined' ? produtosRacco : [];
    const o = typeof produtosOdorata !== 'undefined' ? produtosOdorata : [];
    const a = typeof produtosAbelha !== 'undefined' ? produtosAbelha : [];
    
    const produtos = [...r, ...o, ...a];

    // 2. ELEMENTOS DA DOM
    const catalogoRaccoDiv = document.getElementById('catalogo-racco');
    const catalogoAbelhaRainhaDiv = document.getElementById('catalogo-abelha-rainha');
    const catalogoOdorataDiv = document.getElementById('catalogo-odorata');
    const contadorSacolaSpan = document.getElementById('contador-sacola');
    const totalSacolaSpan = document.getElementById('total-sacola');
    const sacolaItensDiv = document.getElementById('sacola-itens');
    const sacolaTotalValorSpan = document.getElementById('sacola-total-valor');

    let sacola = JSON.parse(localStorage.getItem('sacola-regia')) || [];

    // --- FUNÇÃO PARA ATUALIZAR A SACOLA ---
    function atualizarSacola() {
        if (contadorSacolaSpan) contadorSacolaSpan.innerText = sacola.length;
        
        let total = 0;
        if (sacolaItensDiv) sacolaItensDiv.innerHTML = '';

        sacola.forEach((item, index) => {
            const preco = (item.preco && typeof item.preco === 'number') ? item.preco : 0;
            total += preco;

            if (sacolaItensDiv) {
                sacolaItensDiv.innerHTML += `
                    <div class="sacola-item">
                        <img src="${item.imagem}" alt="${item.nome}">
                        <div class="sacola-item-info">
                            <h4>${item.nome}</h4>
                            <p>R$ ${preco.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <button onclick="removerDaSacola(${index})" class="remover-item">&times;</button>
                    </div>`;
            }
        });

        const totalTxt = `R$ ${total.toFixed(2).replace('.', ',')}`;
        if (totalSacolaSpan) totalSacolaSpan.innerText = totalTxt;
        if (sacolaTotalValorSpan) sacolaTotalValorSpan.innerText = totalTxt;
        
        localStorage.setItem('sacola-regia', JSON.stringify(sacola));
    }

    // --- FUNÇÃO DE RENDERIZAR PRODUTOS ---
    function renderizarProdutos(lista = produtos) {
        if(catalogoRaccoDiv) catalogoRaccoDiv.innerHTML = '';
        if(catalogoAbelhaRainhaDiv) catalogoAbelhaRainhaDiv.innerHTML = '';
        if(catalogoOdorataDiv) catalogoOdorataDiv.innerHTML = '';

        lista.forEach(produto => {
            const precoValido = typeof produto.preco === 'number';
            const precoTxt = precoValido ? `R$ ${produto.preco.toFixed(2).replace('.', ',')}` : 'Sob consulta';

            const html = `
                <div class="produto">
                    <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.src='imagens/logo4.png'">
                    <span class="marca">${produto.marca}</span>
                    <h3>${produto.nome}</h3>
                    <p class="descricao">${produto.descricao || ''}</p>
                    <p class="preco">${precoTxt}</p>
                    <button onclick="adicionarAoCarrinho(${produto.id})">Adicionar à Sacola</button>
                </div>`;

            if (produto.marca === 'Racco' && catalogoRaccoDiv) catalogoRaccoDiv.innerHTML += html;
            if (produto.marca === 'Abelha Rainha' && catalogoAbelhaRainhaDiv) catalogoAbelhaRainhaDiv.innerHTML += html;
            if (produto.marca === 'Odorata' && catalogoOdorataDiv) catalogoOdorataDiv.innerHTML += html;
        });
    }

    // --- LÓGICA DAS ABAS (CORRIGIDA) ---
    const titulos = document.querySelectorAll('.titulo-recolhivel');
    titulos.forEach(titulo => {
        const conteudo = titulo.nextElementSibling;
        
        if (conteudo) {
            conteudo.classList.add('recolhido'); // Garante que comece fechado
        }

        titulo.addEventListener('click', () => {
            titulo.classList.toggle('ativo');
            if (conteudo) {
                conteudo.classList.toggle('recolhido');
            }
        });
    });

    // --- FUNÇÕES GLOBAIS ---
    window.adicionarAoCarrinho = (id) => {
        const p = produtos.find(item => item.id === id);
        if (p) {
            sacola.push(p);
            atualizarSacola();
        }
    };

    window.removerDaSacola = (index) => {
        sacola.splice(index, 1);
        atualizarSacola();
    };

    // --- INICIALIZAÇÃO ---
    renderizarProdutos();
    atualizarSacola();
});