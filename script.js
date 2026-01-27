document.addEventListener('DOMContentLoaded', () => {
    // 1. CARREGAMENTO E VERIFICAÇÃO DE DADOS
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
    let sacola = JSON.parse(localStorage.getItem('sacola-regia')) || [];
    const modal = document.getElementById('modal-sacola');

    window.adicionarAoCarrinho = (id) => {
        const p = produtos.find(i => i.id === id);
        if (p) {
            sacola.push(p);
            atualizarSacola();
        }
    };

    function atualizarSacola() {
        localStorage.setItem('sacola-regia', JSON.stringify(sacola));
        document.getElementById('contador-sacola').innerText = sacola.length;
        const total = sacola.reduce((acc, i) => acc + (i.preco || 0), 0);
        document.getElementById('total-sacola').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
        document.getElementById('sacola-total-valor').innerText = `R$ ${total.toFixed(2).replace('.', ',')}`;
    }

    // Controles do Modal
    document.getElementById('sacola-icone').onclick = () => modal.classList.add('ativo');
    document.querySelector('.modal-fechar').onclick = () => modal.classList.remove('ativo');

    // Inicialização
    carregarTodaVitrine(); 
    atualizarSacola();
    // Inicia fechado para manter o layout limpo
    document.querySelectorAll('.catalogo-produtos').forEach(c => c.classList.add('recolhido'));
});