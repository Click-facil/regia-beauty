document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGAMENTO E VERIFICAÇÃO DE DADOS
    // Número de WhatsApp para contato (com código do país e DDD)
    const seuNumeroWhatsApp = '5591981803393'; // <-- ALtere este valor para o seu número!

    const r = typeof produtosRacco !== 'undefined' ? produtosRacco : [];
    const o = typeof produtosOdorata !== 'undefined' ? produtosOdorata : [];
    const a = typeof produtosAbelha !== 'undefined' ? produtosAbelha : [];
    
    const produtos = [...r, ...o, ...a];

    const catalogos = {
        'Racco': document.getElementById('catalogo-racco'),
        'Abelha Rainha': document.getElementById('catalogo-abelha-rainha'),
        'Odorata': document.getElementById('catalogo-odorata')
    };

    // 2. RENDERIZAÇÃO OTIMIZADA (Injeção Única)
    function carregarTodaVitrine() {
        Object.keys(catalogos).forEach(marca => {
            const div = catalogos[marca];
            if (!div) return;

            const listaFiltrada = produtos.filter(p => p.marca === marca);
            let htmlFinal = ''; // Acumula aqui para não travar a CPU

            listaFiltrada.forEach(p => {
                const preco = (p.preco && typeof p.preco === 'number') ? p.preco : 0;
                const precoTxt = preco > 0 ? `R$ ${preco.toFixed(2).replace('.', ',')}` : 'Sob consulta';

                htmlFinal += `
                    <div class="produto">
                        <img src="${p.imagem}" loading="lazy" alt="${p.nome}" onerror="this.src='imagens/logo4.png'">
                        <h3>${p.nome}</h3>
                        <p class="descricao">${p.descricao || ''}</p>
                        <p class="preco">${precoTxt}</p>
                        <button onclick="adicionarAoCarrinho(${p.id})">Adicionar</button>
                    </div>`;
            });

            div.innerHTML = htmlFinal; // Injeta tudo de uma vez
        });
    }

    // 3. LÓGICA DAS ABAS (Toggles)
    document.addEventListener('click', (e) => {
        const titulo = e.target.closest('.titulo-recolhivel');
        if (titulo) {
            const secao = titulo.nextElementSibling;
            titulo.classList.toggle('ativo');
            secao.classList.toggle('recolhido');
        }
    });

    // 4. LÓGICA DA SACOLA E MODAL
    // A sacola agora armazena objetos com { id: produtoId, quantidade: N }
    let sacola = JSON.parse(localStorage.getItem('sacola-regia')) || []; 
    const modal = document.getElementById('modal-sacola');
    const sacolaItensDiv = document.getElementById('sacola-itens');
    const contadorSacolaSpan = document.getElementById('contador-sacola');
    const totalSacolaFooterSpan = document.getElementById('total-sacola');
    const totalSacolaModalSpan = document.getElementById('sacola-total-valor');
    const btnFinalizarPedidoFooter = document.getElementById('finalizar-pedido');
    const btnFinalizarPedidoModal = document.getElementById('finalizar-pedido-modal');

    window.adicionarAoCarrinho = (id) => {
        const p = produtos.find(i => i.id === id);
        if (p) {
            const itemExistente = sacola.find(item => item.id === id);
            if (itemExistente) {
                itemExistente.quantidade++;
            } else {
                sacola.push({ id: p.id, quantidade: 1 });
            }
            atualizarSacola();
        }
    };

    window.removerDoCarrinho = (id) => {
        sacola = sacola.filter(item => item.id !== id);
        atualizarSacola();
    };

    window.alterarQuantidade = (id, delta) => {
        const item = sacola.find(i => i.id === id);
        if (item) {
            item.quantidade += delta;
            if (item.quantidade <= 0) {
                removerDoCarrinho(id);
            } else {
                atualizarSacola();
            }
        }
    };

    function renderizarItensSacola() {
        sacolaItensDiv.innerHTML = ''; // Limpa o conteúdo atual
        if (sacola.length === 0) {
            sacolaItensDiv.innerHTML = '<p>Sua sacola está vazia.</p>';
            return;
        }

        sacola.forEach(itemSacola => {
            const produtoDetalhes = produtos.find(p => p.id === itemSacola.id);
            if (produtoDetalhes) {
                const precoUnitario = (produtoDetalhes.preco && typeof produtoDetalhes.preco === 'number') ? produtoDetalhes.preco : 0;
                const precoTotalItem = precoUnitario * itemSacola.quantidade;

                const itemHtml = `
                    <div class="sacola-item">
                        <img src="${produtoDetalhes.imagem}" alt="${produtoDetalhes.nome}" onerror="this.src='imagens/logo4.png'">
                        <div class="sacola-item-info">
                            <h4>${produtoDetalhes.nome}</h4>
                            <p>R$ ${precoUnitario.toFixed(2).replace('.', ',')} x ${itemSacola.quantidade}</p>
                            <p>Total: R$ ${precoTotalItem.toFixed(2).replace('.', ',')}</p>
                        </div>
                        <div class="sacola-item-controles">
                            <button onclick="alterarQuantidade(${itemSacola.id}, -1)">-</button>
                            <span>${itemSacola.quantidade}</span>
                            <button onclick="alterarQuantidade(${itemSacola.id}, 1)">+</button>
                            <button class="remover-item" onclick="removerDoCarrinho(${itemSacola.id})">
                                <i class="fas fa-trash-alt"></i>
                            </button>
                        </div>
                    </div>
                `;
                sacolaItensDiv.innerHTML += itemHtml;
            }
        });
    }

    function atualizarSacola() {
        localStorage.setItem('sacola-regia', JSON.stringify(sacola));
        
        const totalItens = sacola.reduce((acc, item) => acc + item.quantidade, 0);
        contadorSacolaSpan.innerText = totalItens;

        let totalValor = 0;
        sacola.forEach(itemSacola => {
            const produtoDetalhes = produtos.find(p => p.id === itemSacola.id);
            if (produtoDetalhes) {
                totalValor += (produtoDetalhes.preco || 0) * itemSacola.quantidade;
            }
        });

        totalSacolaFooterSpan.innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;
        totalSacolaModalSpan.innerText = `R$ ${totalValor.toFixed(2).replace('.', ',')}`;

        renderizarItensSacola(); // Renderiza os itens no modal
    }

    function gerarMensagemWhatsApp() {
        if (sacola.length === 0) {
            alert('Sua sacola está vazia. Adicione produtos antes de finalizar o pedido.');
            return;
        }

        let mensagem = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
        let totalPedido = 0;

        sacola.forEach(itemSacola => {
            const produtoDetalhes = produtos.find(p => p.id === itemSacola.id);
            if (produtoDetalhes) {
                const precoUnitario = (produtoDetalhes.preco && typeof produtoDetalhes.preco === 'number') ? produtoDetalhes.preco : 0;
                mensagem += `- ${itemSacola.quantidade}x ${produtoDetalhes.nome} (${produtoDetalhes.marca}) - R$ ${(precoUnitario * itemSacola.quantidade).toFixed(2).replace('.', ',')}\n`;
                totalPedido += precoUnitario * itemSacola.quantidade;
            }
        });

        mensagem += `\nTotal do pedido: R$ ${totalPedido.toFixed(2).replace('.', ',')}`;
        const urlWhatsApp = `https://api.whatsapp.com/send?phone=${seuNumeroWhatsApp}&text=${encodeURIComponent(mensagem)}`;
        window.open(urlWhatsApp, '_blank');
    }

    // Controles do Modal
    document.getElementById('sacola-icone').onclick = () => {
        modal.classList.add('ativo');
        renderizarItensSacola(); // Garante que os itens sejam renderizados ao abrir o modal
    };
    document.querySelector('.modal-fechar').onclick = () => modal.classList.remove('ativo');

    // Event Listeners para os botões de finalizar pedido
    btnFinalizarPedidoFooter.addEventListener('click', gerarMensagemWhatsApp);
    btnFinalizarPedidoModal.addEventListener('click', gerarMensagemWhatsApp);

    // Inicialização
    carregarTodaVitrine(); 
    atualizarSacola();
    // Inicia fechado para manter o layout limpo
    document.querySelectorAll('.catalogo-produtos').forEach(c => c.classList.add('recolhido'));
});