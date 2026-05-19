document.addEventListener('DOMContentLoaded', () => {
    const seuNumeroWhatsApp = '5591981803393';

    // ── DADOS ──────────────────────────────────────────────
    const r = typeof produtosRacco !== 'undefined' ? produtosRacco : [];
    const o = typeof produtosOdorata !== 'undefined' ? produtosOdorata : [];
    const a = typeof produtosAbelha !== 'undefined' ? produtosAbelha : [];
    const produtos = [...r, ...o, ...a];

    const catalogos = {
        'Racco':         document.getElementById('catalogo-racco'),
        'Abelha Rainha': document.getElementById('catalogo-abelha-rainha'),
        'Odorata':       document.getElementById('catalogo-odorata')
    };

    // ── TOPBAR CLOSE ───────────────────────────────────────
    document.getElementById('topbar-close')?.addEventListener('click', () => {
        document.getElementById('topbar').style.display = 'none';
    });

    // ── MENU TOGGLE (mobile) ───────────────────────────────
    const menuToggle = document.getElementById('menu-toggle');
    const mobileNav  = document.getElementById('mobile-nav');
    menuToggle?.addEventListener('click', () => {
        mobileNav.classList.toggle('open');
        menuToggle.classList.toggle('open');
    });
    mobileNav?.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileNav.classList.remove('open');
            menuToggle.classList.remove('open');
        });
    });

    // ── HEADER STICKY ──────────────────────────────────────
    const siteHeader = document.getElementById('site-header');
    window.addEventListener('scroll', () => {
        siteHeader.classList.toggle('scrolled', window.scrollY > 40);
    }, { passive: true });

    // ── CARREGAR PRODUTOS ──────────────────────────────────
    function carregarTodaVitrine() {
        Object.keys(catalogos).forEach(marca => {
            const div = catalogos[marca];
            if (!div) return;
            const lista = produtos.filter(p => p.marca === marca);
            let html = '';
            lista.forEach(p => {
                html += `
                    <div class="produto">
                        <img src="${p.imagem || 'imagens/logo4.png'}" loading="lazy" alt="${p.nome}" onerror="this.src='imagens/logo4.png'">
                        <p class="produto-marca-tag">${p.marca}</p>
                        <h3>${p.nome}</h3>
                        <p class="descricao">${p.descricao || ''}</p>
                        <button onclick="adicionarAoCarrinho(${p.id})">+ Adicionar</button>
                    </div>`;
            });
            div.innerHTML = html;
        });
    }

    // ── SEÇÕES RECOLHÍVEIS ─────────────────────────────────
    document.querySelectorAll('.secao-header').forEach(header => {
        header.addEventListener('click', (e) => {
            if (e.target.closest('button.btn-toggle') || e.target === header || e.target.closest('.secao-left')) {
                const targetId = header.dataset.target;
                const catalogo = document.getElementById(targetId);
                const btn = header.querySelector('.btn-toggle');
                const isOpen = !catalogo.classList.contains('recolhido');
                if (isOpen) {
                    catalogo.classList.add('recolhido');
                    btn.classList.remove('open');
                    header.classList.remove('open');
                } else {
                    catalogo.classList.remove('recolhido');
                    btn.classList.add('open');
                    header.classList.add('open');
                }
            }
        });
    });

    // Função global para abrir uma seção e scrollar
    window.abrirSecao = (secaoId, catalogoId) => {
        const secao   = document.getElementById(secaoId);
        const catalogo = document.getElementById(catalogoId);
        const header  = secao.querySelector('.secao-header');
        const btn     = header.querySelector('.btn-toggle');
        catalogo.classList.remove('recolhido');
        btn.classList.add('open');
        header.classList.add('open');
        setTimeout(() => secao.scrollIntoView({ behavior: 'smooth', block: 'start' }), 80);
    };

    // ── PESQUISA ───────────────────────────────────────────
    document.getElementById('input-pesquisa')?.addEventListener('input', function () {
        const termo = this.value.toLowerCase().trim();

        if (!termo) {
            // Restaurar todos os produtos
            Object.keys(catalogos).forEach(marca => {
                const div = catalogos[marca];
                if (!div) return;
                div.querySelectorAll('.produto').forEach(el => el.style.display = '');
            });
            return;
        }

        // Abrir todas as seções na pesquisa
        document.querySelectorAll('.catalogo-produtos').forEach(c => {
            c.classList.remove('recolhido');
        });
        document.querySelectorAll('.btn-toggle').forEach(b => b.classList.add('open'));
        document.querySelectorAll('.secao-header').forEach(h => h.classList.add('open'));

        Object.keys(catalogos).forEach(marca => {
            const div = catalogos[marca];
            if (!div) return;
            div.querySelectorAll('.produto').forEach(card => {
                const nome = card.querySelector('h3')?.textContent.toLowerCase() || '';
                const desc = card.querySelector('.descricao')?.textContent.toLowerCase() || '';
                const marcaTxt = card.querySelector('.produto-marca-tag')?.textContent.toLowerCase() || '';
                const match = nome.includes(termo) || desc.includes(termo) || marcaTxt.includes(termo);
                card.style.display = match ? '' : 'none';
            });
        });
    });

    document.getElementById('form-pesquisa')?.addEventListener('submit', e => e.preventDefault());

    // ── SACOLA ─────────────────────────────────────────────
    let sacola = JSON.parse(localStorage.getItem('sacola-regia')) || [];
    const modal                = document.getElementById('modal-sacola');
    const sacolaItensDiv       = document.getElementById('sacola-itens');
    const contadorSpan         = document.getElementById('contador-sacola');
    const totalFooterSpan      = document.getElementById('total-sacola');
    const totalModalSpan       = document.getElementById('sacola-total-valor');
    const stickyFooter         = document.getElementById('sticky-footer');
    const btnFinalizarFooter   = document.getElementById('finalizar-pedido');
    const btnFinalizarModal    = document.getElementById('finalizar-pedido-modal');

    window.adicionarAoCarrinho = (id) => {
        id = Number(id);
        const p = produtos.find(i => i.id === id);
        if (!p) return;
        const item = sacola.find(i => i.id === id);
        if (item) item.quantidade++;
        else sacola.push({ id: p.id, quantidade: 1 });
        atualizarSacola();
        mostrarToast(`"${p.nome.substring(0, 28)}…" adicionado!`);
    };

    window.removerDoCarrinho = (id) => {
        id = Number(id);
        sacola = sacola.filter(i => i.id !== id);
        atualizarSacola();
    };

    window.alterarQuantidade = (id, delta) => {
        id = Number(id);
        const item = sacola.find(i => i.id === id);
        if (!item) return;
        item.quantidade += delta;
        if (item.quantidade <= 0) removerDoCarrinho(id);
        else atualizarSacola();
    };

    function renderizarItensSacola() {
        if (!sacolaItensDiv) return;
        if (sacola.length === 0) {
            sacolaItensDiv.innerHTML = '<p style="color:var(--text-muted);font-size:.9rem;text-align:center;padding:32px 0;">Sua sacola está vazia.</p>';
            return;
        }
        sacolaItensDiv.innerHTML = sacola.map(itemSacola => {
            const pd = produtos.find(p => p.id === itemSacola.id);
            if (!pd) return '';
            return `
                <div class="sacola-item">
                    <img src="${pd.imagem || 'imagens/logo4.png'}" alt="${pd.nome}" onerror="this.src='imagens/logo4.png'">
                    <div class="sacola-item-info">
                        <h4>${pd.nome}</h4>
                        <p>${pd.marca}</p>
                    </div>
                    <div class="sacola-item-controles">
                        <button onclick="alterarQuantidade(${itemSacola.id}, -1)">−</button>
                        <span>${itemSacola.quantidade}</span>
                        <button onclick="alterarQuantidade(${itemSacola.id}, 1)">+</button>
                        <button class="remover-item" onclick="removerDoCarrinho(${itemSacola.id})">
                            <i class="fas fa-trash-alt"></i>
                        </button>
                    </div>
                </div>`;
        }).join('');
    }

    function atualizarSacola() {
        localStorage.setItem('sacola-regia', JSON.stringify(sacola));
        const totalItens = sacola.reduce((acc, i) => acc + i.quantidade, 0);
        if (contadorSpan) contadorSpan.textContent = totalItens;

        let totalValor = 0;
        sacola.forEach(i => {
            const pd = produtos.find(p => p.id === i.id);
            if (pd) totalValor += (pd.preco || 0) * i.quantidade;
        });

        if (totalFooterSpan) totalFooterSpan.textContent = '';
        if (totalModalSpan)  totalModalSpan.textContent  = '';

        // Mostrar/esconder sticky footer
        if (stickyFooter) {
            stickyFooter.classList.toggle('visible', totalItens > 0);
        }

        renderizarItensSacola();
    }

    function gerarMensagemWhatsApp() {
        if (sacola.length === 0) {
            alert('Sua sacola está vazia. Adicione produtos antes de finalizar.');
            return;
        }
        let msg = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
        sacola.forEach(i => {
            const pd = produtos.find(p => p.id === i.id);
            if (pd) msg += `- ${i.quantidade}x ${pd.nome} (${pd.marca})\n`;
        });
        msg += '\nAguardo confirmação dos valores. 😊';
        window.open(`https://api.whatsapp.com/send?phone=${seuNumeroWhatsApp}&text=${encodeURIComponent(msg)}`, '_blank');
    }

    // Modal controls
    document.getElementById('sacola-icone')?.addEventListener('click', () => {
        modal.classList.add('ativo');
        renderizarItensSacola();
    });
    document.querySelector('.modal-fechar')?.addEventListener('click', () => modal.classList.remove('ativo'));
    modal?.addEventListener('click', (e) => { if (e.target === modal) modal.classList.remove('ativo'); });

    btnFinalizarFooter?.addEventListener('click', gerarMensagemWhatsApp);
    btnFinalizarModal?.addEventListener('click', gerarMensagemWhatsApp);

    // ── TOAST ──────────────────────────────────────────────
    function mostrarToast(msg) {
        const toast = document.getElementById('toast');
        const msgEl = document.getElementById('toast-msg');
        if (!toast || !msgEl) return;
        msgEl.textContent = msg;
        toast.classList.add('show');
        setTimeout(() => toast.classList.remove('show'), 2800);
    }

    // ── SMOOTH SCROLL para links internos ──────────────────
    document.querySelectorAll('a[href^="#"]').forEach(link => {
        link.addEventListener('click', e => {
            const target = document.querySelector(link.getAttribute('href'));
            if (target) {
                e.preventDefault();
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });

    // ── INIT ───────────────────────────────────────────────
    carregarTodaVitrine();
    atualizarSacola();
    // Inicia todas as seções fechadas
    document.querySelectorAll('.catalogo-produtos').forEach(c => c.classList.add('recolhido'));
});