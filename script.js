document.addEventListener('DOMContentLoaded', () => {
    // Elementos da DOM
    const catalogoRaccoDiv = document.getElementById('catalogo-racco');
    const catalogoAbelhaRainhaDiv = document.getElementById('catalogo-abelha-rainha');
    const catalogoOdorataDiv = document.getElementById('catalogo-odorata');
    const contadorSacolaSpan = document.getElementById('contador-sacola');
    const totalSacolaSpan = document.getElementById('total-sacola');
    const finalizarPedidoButton = document.getElementById('finalizar-pedido');
    const sacolaIcone = document.getElementById('sacola-icone');
    const modalSacola = document.getElementById('modal-sacola');
    const modalFechar = document.querySelector('.modal-fechar');
    const sacolaItensDiv = document.getElementById('sacola-itens');
    const sacolaTotalValorSpan = document.getElementById('sacola-total-valor');
    const finalizarPedidoModalButton = document.getElementById('finalizar-pedido-modal');

    // Configuração
    const seuNumeroWhatsApp = '5591981803393';

    // Lista de Produtos Completa
    const produtos = [
     
  // Array de produtos da Racco com preços atualizados conforme o site oficial.

    {
        id: 1,
        marca: 'Racco',
        nome: 'DEO COLÔNIA FEMININA ALLUMAGE RACCO 100ml',
        descricao: 'Corpo frutal exótico marcado por Groselha Negra e Pera, notas de fundo de Baunilha, Almíscar, Cedro e Sândalo.',
        preco: 179.90, // Preço atualizado
        imagem: 'imagens/racco/img115.png'
    },
    {
        id: 2,
        marca: 'Racco',
        nome: 'DEO COLÔNIA FEMININA LILAC RACCO 100ml',
        descricao: 'Combinação intensa e vibrante de Cassis, Grapefruit e Mandarina, com fundo de Sândalo, Vanilla e Musk.',
        preco: 179.90, // Preço correto
        imagem: 'imagens/racco/img86.png'
    },
    {
        id: 3,
        marca: 'Racco',
        nome: 'DEO COLÔNIA FEMININA KIAORA RACCO 100ml',
        descricao: 'Acordes florientais frutais com Notas Verdes, Laranja e Mandarina, combinadas a Neroli, Jasmim e Lírio do Vale.',
        preco: 179.90, // Preço correto
        imagem: 'imagens/racco/img103.png'
    },
    {
        id: 4,
        marca: 'Racco',
        nome: 'DEO COLÔNIA FEMININA YUNICK RACCO 100ml',
        descricao: 'Gourmand floral delicado, com Baunilha, Flor de Laranjeira e Pera, criando uma fragrância exótica e marcante.',
        preco: 169.90, // Preço atualizado
        imagem: 'imagens/racco/img99.png'
    },
    {
        id: 5,
        marca: 'Racco',
        nome: 'HIDRATANTE CORPORAL GI RACCO 130ml',
        descricao: 'Com Óleo de Rosa Mosqueta e Polissacarídeos para manter a hidratação natural da pele, proporcionando conforto e maciez.',
        preco: 72.90, // Preço atualizado
        imagem: 'imagens/racco/img111.png'
    },
    {
        id: 6,
        marca: 'Racco',
        nome: 'HIDRATANTE DESODORANTE CORPORAL ILUMINADOR ALLUMAGE RACCO 55g',
        descricao: 'Com partículas de brilho para efeito glow, textura leve e toque seco. Hidrata, ilumina e perfuma com a fragrância Allumage.',
        preco: 39.90, // Preço atualizado
        imagem: 'imagens/racco/img115.png'
    },
    {
        id: 7,
        marca: 'Racco',
        nome: 'DEO COLÔNIA MASCULINA LF RACCO 100ml',
        descricao: 'Notas cítricas, especiadas e amadeiradas, com Pimenta-da-Jamaica, Hortelã, Âmbar, Musk e Cedro.',
        preco: 299.90, // Preço correto
        imagem: 'imagens/racco/img338.png'
    },
    {
        id: 8,
        marca: 'Racco',
        nome: 'DEO COLÔNIA FEMININA GI RACCO 100ml',
        descricao: 'Explosão frutada e picante de Lichia, Pimenta Rosa e Mandarina, com notas de Jasmim, Rosa e Caramelo e fundo de Âmbar, Vetiver, Musk e Vanilla.',
        preco: 299.90, // Preço correto
        imagem: 'imagens/racco/img342.png'
    },
    {
        id: 9,
        marca: 'Racco',
        nome: 'DEO COLÔNIA MASCULINA NU RACCO 100ml',
        descricao: 'Notas de Limão Siciliano, Lavanda e Gerânio sobre fundo de Sândalo e Musk.',
        preco: 159.90, // Preço correto
        imagem: 'imagens/racco/img452.png'
    },
    {
        id: 10,
        marca: 'Racco',
        nome: 'DEO COLÔNIA MASCULINA THESU RACCO 100ml',
        descricao: 'Notas de Gengibre, Pimenta e Noz-moscada associadas a Âmbar, Cedro e Musk, criando fragrância luxuosa e ousada.',
        preco: 169.90, // Preço correto
        imagem: 'imagens/racco/img463.png'
    },
    {
        id: 11,
        marca: 'Racco',
        nome: 'DEO COLÔNIA MASCULINA OXUS RACCO 100ml',
        descricao: 'Mistura de Lima, Pamplemousse, Gengibre, Cardamomo, Pimenta e Madeira Seca, resultando em perfume oriental amadeirado moderno.',
        preco: 169.90, // Preço correto
        imagem: 'imagens/racco/img467.png'
    },
    {
        id: 12,
        marca: 'Racco',
        nome: 'DEO COLÔNIA EMOÇÕES MASCULINA ROBERTO CARLOS RACCO 50ml',
        descricao: 'Acordes de Bergamota, Mandarina, Grapefruit, Damasco, Cedro, Sândalo, Musk, Âmbar e Patchouli.',
        preco: 169.90, // Preço correto
        imagem: 'imagens/racco/img606.png'
    },
    {
        id: 13,
        marca: 'Racco',
        nome: 'DEO COLÔNIA LEANDRO RACCO 100ml',
        descricao: 'Notas de Absinto, Artemísia, Flor de Laranjeira, Bergamota, Cardamomo, Lavanda, Cedro, Sândalo, Âmbar amadeirado, Canela, Cominho, Menta e Baunilha.',
        preco: 149.90, // Preço correto
        imagem: 'imagens/racco/img602.png'
    },
    {
        id: 14,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO ÍNTIMO MASCULINO FOR MEN RACCO 180ml',
        descricao: 'Frescor duradouro, equilíbrio do pH e ação calmante com Provitamina B5 e Óleo de Menta.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img610.png'
    },
    {
        id: 15,
        marca: 'Racco',
        nome: 'DESODORANTE ÍNTIMO JATO SECO FOR MEN RACCO 100ml',
        descricao: 'Ação refrescante, perfume suave, toque seco e teste urológico aprovado.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img614.png'
    },
    {
        id: 16,
        marca: 'Racco',
        nome: 'ÁGUA PERFUMADA DESODORANTE REFRESCANTE CORPORAL - LAVANDA & ROSA & MUSK 100ml',
        descricao: 'Aroma suave e delicado de Lavanda, Rosa e Almíscar para frescor e tranquilidade.',
        preco: 34.90, // Preço correto
        imagem: 'imagens/racco/img815.png'
    },
    {
        id: 17,
        marca: 'Racco',
        nome: 'ÁGUA PERFUMADA DESODORANTE ENERGIZANTE CORPORAL - CÍTRICOS & GENGIBRE & MUSK 100ml',
        descricao: 'Notas cítricas e especiadas para energia e alegria no dia.',
        preco: 34.90, // Preço correto
        imagem: 'imagens/racco/img823.png'
    },
    {
        id: 18,
        marca: 'Racco',
        nome: 'ÁGUA PERFUMADA DESODORANTE RELAXANTE PARA CORPO E AMBIENTES - LAVANDA & CAMOMILA 100ml',
        descricao: 'Fragrâncias relaxantes que aliviam o estresse e ajudam no sono.',
        preco: 34.90, // Preço correto
        imagem: 'imagens/racco/img819.png'
    },
    {
        id: 19,
        marca: 'Racco',
        nome: 'KIT ÁGUAS PERFUMADAS RACCO 3 frascos de 100ml',
        descricao: 'Conjunto com 3 fragrâncias: Calma, Energia e Encanto.',
        preco: 99.90, // Preço correto
        imagem: 'imagens/racco/img811.png'
    },
    {
        id: 20,
        marca: 'Racco',
        nome: 'HIDRATANTE CORPORAL KARITÉ MAIS PURA RACCO 250g',
        descricao: 'Hidrata e deixa a pele macia com fragrância suave de Baunilha.',
        preco: 69.90, // Preço correto
        imagem: 'imagens/racco/img1006.png'
    },
    {
        id: 21,
        marca: 'Racco',
        nome: 'HIDRATANTE CORPORAL ALGODÃO MAIS PURA RACCO 250g',
        descricao: 'Hidratação profunda, pele macia e aveludada com fragrância suave.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img1002.png'
    },
    {
        id: 22,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO MAIS PURA RACCO 250ml',
        descricao: 'Espuma cremosa que proporciona sensação agradável no banho.',
        preco: 45.90, // Preço correto
        imagem: 'imagens/racco/img998.png'
    },
    {
        id: 23,
        marca: 'Racco',
        nome: 'SHAMPOO MAIS PURA RACCO 250ml',
        descricao: 'Melhora o aspecto dos fios, deixando-os mais macios e sedosos.',
        preco: 42.90, // Preço atualizado
        imagem: 'imagens/racco/img994.png'
    },
    {
        id: 24,
        marca: 'Racco',
        nome: 'CONDICIONADOR MAIS PURA RACCO 250g',
        descricao: 'Facilita o pentear e mantém a fragrância por mais tempo.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img995.png'
    },
    {
        id: 25,
        marca: 'Racco',
        nome: 'ÁGUA PERFUMADA OVERDOSE SENSUAL RACCO 210ml',
        descricao: 'Fragrância oriental sensual com notas de Laranja Brasil, Bergamota, Pêssego, Flor de Laranjeira, Jasmim, Rosa, Sândalo, Chocolate e Baunilha.',
        preco: 149.90, // Preço correto
        imagem: 'imagens/racco/img982.png'
    },
    {
        id: 26,
        marca: 'Racco',
        nome: 'HIDRATANTE DESODORANTE CORPORAL CHOCOBLANC OVERDOSE RACCO 150g',
        descricao: 'Com Manteiga de Karité e notas de Chocolate Branco para toque doce e aveludado.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img986.png'
    },
    {
        id: 27,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO ÍNTIMO FEMININO RACCO 210ml',
        descricao: 'Higiene íntima diária, limpeza delicada e sensação de frescor.',
        preco: 43.90, // Preço correto
        imagem: 'imagens/racco/img1230.png'
    },
    {
        id: 28,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO ÍNTIMO MORANGO FEMININO RACCO 210ml',
        descricao: 'Com Óleo Essencial de Menta para refrescância e limpeza delicada.',
        preco: 43.90, // Preço correto
        imagem: 'imagens/racco/img1254.png'
    },
    {
        id: 29,
        marca: 'Racco',
        nome: 'SPRAY PERFUMADO DESODORANTE ÍNTIMO MORANGO FEMININO RACCO 120ml',
        descricao: 'Desodorização eficaz e fragrância deliciosa de Morango.',
        preco: 39.90, // Preço correto
        imagem: 'imagens/racco/img1258.png'
    },
    {
        id: 30,
        marca: 'Racco',
        nome: 'DESODORANTE ÍNTIMO JATO SECO RACCO 100ml',
        descricao: 'Fragrância suave e refrescante de longa duração, com jato seco.',
        preco: 43.90, // Preço correto
        imagem: 'imagens/racco/img1234.png'
    },
    {
        id: 31,
        marca: 'Racco',
        nome: 'ESPUMA DE HIGIENE ÍNTIMA REFRESCANTE INTIMO RACCO 50ml',
        descricao: 'Higiene íntima sem enxágue, hidrata e perfuma com sensação refrescante.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img1250.png'
    },
    {
        id: 32,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO ÍNTIMO PROCTO RACCO 120ml',
        descricao: 'Com Camomila, Arruda, Gingko Biloba e Castanha-da-índia para limpeza segura e efeito calmante.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img1242.png'
    },
    {
        id: 33,
        marca: 'Racco',
        nome: 'DESODORANTE ÍNTIMO TEC RACCO 50ml',
        descricao: 'Hidrata, suaviza e perfuma com tecnologia de controle de odor.',
        preco: 65.90, // Preço correto
        imagem: 'imagens/racco/img1246.png'
    },
    {
        id: 34,
        marca: 'Racco',
        nome: 'GEL HIDRATANTE DE MASSAGEM ÍNTIMO MORANGO RACCO 65ml',
        descricao: 'Gel para massagem íntima com fragrância de morango, hidrata e proporciona sensação agradável.',
        preco: 46.90, // Preço correto
        imagem: 'imagens/racco/img1469.png'
    },
    {
        id: 35,
        marca: 'Racco',
        nome: 'GEL HIDRATANTE DE MASSAGEM ÍNTIMO RACCO 65ml',
        descricao: 'À base de Glicerina Vegetal, hidrata e amacia a pele sem álcool e sem pegajosidade.',
        preco: 46.90, // Preço correto
        imagem: 'imagens/racco/img1465.png'
    },
    {
        id: 36,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO ÍNTIMO 50+ FEMININO RACCO 180ml',
        descricao: 'Com Ácido Hialurônico, prebióticos e extratos calmantes, hidrata e protege a região íntima.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img1473.png'
    },
    {
        id: 37,
        marca: 'Racco',
        nome: 'MOUSSE SPRAY DEPILATÓRIO DEPEELING SOFT RACCO 150ml',
        descricao: 'Depilação prática e hidratante com tecnologia antiodor, sem dor ou esforço.',
        preco: 99.90, // Preço correto
        imagem: 'imagens/racco/img1591.png'
    },
    {
        id: 38,
        marca: 'Racco',
        nome: 'MOUSSE SPRAY DEPILATÓRIO DEPEELING RACCO 150ml',
        descricao: 'Fácil aplicação, elimina pelos em minutos deixando a pele lisa e macia.',
        preco: 89.90, // Preço correto
        imagem: 'imagens/racco/img1601.png'
    },
    {
        id: 39,
        marca: 'Racco',
        nome: 'CREME DEPILATÓRIO DEPEELING RACCO 150g',
        descricao: 'Com Manteiga de Karité, Pantenol, Calêndula e Aloe Vera, hidrata enquanto remove os pelos.',
        preco: 79.90, // Preço correto
        imagem: 'imagens/racco/img1605.png'
    },
    {
        id: 40,
        marca: 'Racco',
        nome: 'CREME REVITALIZANTE PARA FACE E CORPO MULTI ALOE RACCO 50g',
        descricao: 'Com extratos de Aloe e Confrei, hidrata profundamente e tem propriedades calmantes.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img1836.png'
    },
    {
        id: 41,
        marca: 'Racco',
        nome: 'CREME RELAXANTE PARA AS PERNAS DEFATIGANT MULTI ALOE RACCO 120g',
        descricao: 'Relaxante e refrescante para pernas e pés cansados, aumenta tonicidade da pele.',
        preco: 58.90, // Preço correto
        imagem: 'imagens/racco/img1840.png'
    },
    {
        id: 42,
        marca: 'Racco',
        nome: 'CREME DENTAL COM FLÚOR MULTI ALOE RACCO 90g',
        descricao: 'Com sabor menta, previne cáries e gengivite, deixando os dentes mais brancos.',
        preco: 29.90, // Preço correto
        imagem: 'imagens/racco/img1844.png'
    },
    {
        id: 43,
        marca: 'Racco',
        nome: 'ÓLEO RELAXANTE DESODORANTE PARA AS PERNAS DEFATIGANT MULTI ALOE RACCO 100ml',
        descricao: 'Proporciona relaxamento e hidratação para pernas e pés cansados.',
        preco: 55.90, // Preço correto
        imagem: 'imagens/racco/img1832.png'
    },
    {
        id: 44,
        marca: 'Racco',
        nome: 'S.O.S ALOE SPRAY MULTIFUNCIONAL MULTI ALOE RACCO 200ml',
        descricao: 'Hidrata, acalma e refresca a pele, indicado como pós-sol e para cabelos.',
        preco: 69.90, // Preço correto
        imagem: 'imagens/racco/img1824.png'
    },
    {
        id: 45,
        marca: 'Racco',
        nome: 'GEL DE ALOE VERA FORTIFIER MULTI ALOE RACCO 100g',
        descricao: 'Gel concentrado de Aloe Vera, hidrata e refresca a pele sem resíduos.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img1828.png'
    },
    {
        id: 46,
        marca: 'Racco',
        nome: 'SPRAY DE HIDRATAÇÃO INTENSIVA PARA OS PÉS PRINCIPLES RACCO 50ml',
        descricao: 'Com derivado da ureia para tratar ressecamentos e asperezas dos pés.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img2082.png'
    },
    {
        id: 47,
        marca: 'Racco',
        nome: 'CREME DESODORANTE PARA OS PÉS PRINCIPLES RACCO 50g',
        descricao: 'Com cânfora e mentol, combate odores e mantém a pele hidratada.',
        preco: 29.90, // Preço correto
        imagem: 'imagens/racco/img2086.png'
    },
    {
        id: 48,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO CINTILANTE RUBI RACCO 150ml',
        descricao: 'Textura sofisticada com brilho e fragrância sensual de flores e rubis.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img2090.png'
    },
    {
        id: 49,
        marca: 'Racco',
        nome: 'DESODORANTE ROLL-ON LUTTI RACCO 55ml',
        descricao: 'Proteção eficaz contra odores com fragrância suave e ação prebiótica.',
        preco: 29.90, // Preço correto
        imagem: 'imagens/racco/img2273.png'
    },
    {
        id: 50,
        marca: 'Racco',
        nome: 'CREME DESODORANTE ANTITRANSPIRANTE REGULATEUR RACCO POTE 60g',
        descricao: 'Potente ação antitranspirante com fragrância unissex, evita ressecamento das axilas.',
        preco: 27.90, // Preço correto
        imagem: 'imagens/racco/img2283.png'
    },
    {
        id: 51,
        marca: 'Racco',
        nome: 'DESODORANTE ROLL-ON ANTIPERSPIRANTE REGULATEUR RACCO 55ml',
        descricao: 'Ação antiperspirante, combate o mau odor e mantém sensação refrescante.',
        preco: 27.90, // Preço correto
        imagem: 'imagens/racco/img2287.png'
    },
    {
        id: 52,
        marca: 'Racco',
        nome: 'CREME HIDRATANTE FACIAL PRIORAGE 60+ CICLOS D’RACCO 30g',
        descricao: 'Proteção e hidratação potentes, melhora contorno facial e reduz sinais de envelhecimento.',
        preco: 159.90, // Preço correto
        imagem: 'imagens/racco/img2525.png'
    },
    {
        id: 53,
        marca: 'Racco',
        nome: 'CREME HIDRATANTE FACIAL PRIORAGE 30+ CICLOS D’RACCO 30g',
        descricao: 'Acelera a produção de colágeno, melhora linhas de expressão e combate envelhecimento precoce.',
        preco: 159.90, // Preço correto
        imagem: 'imagens/racco/img2553.png'
    },
    {
        id: 54,
        marca: 'Racco',
        nome: 'SÉRUM FACIAL NOITE CICLOS D’RACCO 30ml',
        descricao: 'Contém diamante, peptídeos, DMAE e ativos de uva vermelha para hidratar e firmar a pele.',
        preco: 169.90, // Preço correto
        imagem: 'imagens/racco/img2533.png'
    },
    {
        id: 55,
        marca: 'Racco',
        nome: 'SÉRUM ÁCIDO HIALURÔNICO CICLOS D’RACCO 40ml',
        descricao: 'Hidrata, melhora rugas finas e linhas de expressão, deixando a pele firme e saudável.',
        preco: 158.90, // Preço correto
        imagem: 'imagens/racco/img2541.png'
    },
    {
        id: 56,
        marca: 'Racco',
        nome: 'CREME ESFOLIANTE FACIAL COM BAMBU CICLOS PEELING RACCO 50g',
        descricao: 'Esfoliação física suave com extrato de bambu e pró-vitamina B5.',
        preco: 159.90, // Preço correto
        imagem: 'imagens/racco/img2517.png'
    },
    {
        id: 57,
        marca: 'Racco',
        nome: 'SÉRUM HIDRATANTE PARA ÁREA DOS OLHOS OPTIQUE CICLOS D’RACCO 15ml',
        descricao: 'Com ouro em pó, DMAE e caviar negro, ação antioxidante e anti-idade.',
        preco: 99.90, // Preço correto
        imagem: 'imagens/racco/img2537.png'
    },
    {
        id: 58,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO FACIAL DE ALGAS MARINHAS ARL RACCO 150g',
        descricao: 'Com extrato de algas e pantenol, limpa, hidrata e combate radicais livres.',
        preco: 45.90, // Preço correto
        imagem: 'imagens/racco/img2865.png'
    },
    {
        id: 59,
        marca: 'Racco',
        nome: 'SABONETE DE ALGAS MARINHAS SAVONETTE ARL RACCO 90g',
        descricao: 'Extrato de algas para limpeza diária, hidratação e ação antioxidante.',
        preco: 29.90, // Preço correto
        imagem: 'imagens/racco/img2861.png'
    },
    {
        id: 60,
        marca: 'Racco',
        nome: 'TÔNICO FACIAL CICLOS D’RACCO 150ml',
        descricao: 'Complementa a limpeza diária, regula pH e reduz poros dilatados.',
        preco: 69.90, // Preço correto
        imagem: 'imagens/racco/img2873.png'
    },
    {
        id: 61,
        marca: 'Racco',
        nome: 'SABONETE LÍQUIDO LIPOGEL RACCO 120ml',
        descricao: 'Com óleo de melaleuca, ácido salicílico, niacinamida e pantenol, controla oleosidade.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img3015.png'
    },
    {
        id: 62,
        marca: 'Racco',
        nome: 'GEL HIDRATANTE REDUTOR DE OLEOSIDADE LIPOGEL RACCO 60g',
        descricao: 'Hidrata peles oleosas, equilibra oleosidade sem obstruir poros.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img3007.png'
    },
    {
        id: 63,
        marca: 'Racco',
        nome: 'MÁSCARA FACIAL DE ARGILA VERDE LIPOGEL RACCO 60g',
        descricao: 'Com argila verde, algas, pepino e pantenol, reduz oleosidade e previne acne.',
        preco: 79.90, // Preço correto
        imagem: 'imagens/racco/img3003.png'
    },
    {
        id: 64,
        marca: 'Racco',
        nome: 'GEL SECATIVO PARA PELES ACNEICAS LIPOGEL RACCO 60g',
        descricao: 'Previne acne e reduz inflamações com ação rápida e invisível.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img3011.png'
    },
    {
        id: 65,
        marca: 'Racco',
        nome: 'SABONETE PARA PELES OLEOSAS E ACNEICAS LIPOGEL RACCO 90g',
        descricao: 'Com enxofre e glicerina, remove impurezas e oleosidade.',
        preco: 29.90, // Preço correto
        imagem: 'imagens/racco/img3019.png'
    },
    {
        id: 66,
        marca: 'Racco',
        nome: 'ESPUMA MICELAR DE LIMPEZA FACIAL PRIORAGE RACCO 100ml',
        descricao: 'Limpeza suave com ácido hialurônico e extrato de madressilva, inclui escovinha de silicone.',
        preco: 89.90, // Preço correto
        imagem: 'imagens/racco/img3231.png'
    },
    {
        id: 67,
        marca: 'Racco',
        nome: 'CREME HIDRATANTE FACIAL PRIORAGE 50+ RACCO 30g',
        descricao: 'Com phyto retinol, niacinamida, ácido hialurônico e vitamina B5 para hidratar, firmar e iluminar peles maduras.',
        preco: 139.90, // Preço correto
        imagem: 'imagens/racco/img3227(1).png'
    },
    {
        id: 68,
        marca: 'Racco',
        nome: 'GEL CREME FACIAL GLICERINA + VITAMINA E RACCODERMA 60g',
        descricao: 'Hidratação antioxidante para primeiros sinais de envelhecimento, com toque seco.',
        preco: 89.90, // Preço correto
        imagem: 'imagens/racco/img3471.png'
    },
    {
        id: 69,
        marca: 'Racco',
        nome: 'CREME HIDRATANTE FACIAL PANTENOL + MANTEIGA DE KARITÉ RACCODERMA 60g',
        descricao: 'Hidrata, repara áreas ressecadas e combate radicais livres.',
        preco: 89.90, // Preço correto
        imagem: 'imagens/racco/img3479.png'
    },
    {
        id: 70,
        marca: 'Racco',
        nome: 'MÁSCARA FACIAL RACCODERMA 60g',
        descricao: 'Refresca, suaviza textura, hidrata e purifica a pele.',
        preco: 69.90, // Preço correto
        imagem: 'imagens/racco/img3443.png'
    },
    {
        id: 71,
        marca: 'Racco',
        nome: 'CREME HIDRATANTE PARA MÃOS E UNHAS RACCODERMA 60g',
        descricao: 'Com ureia, pantenol e óleo de amêndoas para hidratar e proteger mãos e unhas.',
        preco: 49.90, // Preço correto
        imagem: 'imagens/racco/img3447.png'
    },
    {
        id: 72,
        marca: 'Racco',
        nome: 'SÉRUM ÁCIDO GLICÓLICO + NIACINAMIDA RACCODERMA 10ml',
        descricao: 'Hidrata e realiza peeling suave para renovação celular.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img3451.png'
    },
    {
        id: 73,
        marca: 'Racco',
        nome: 'SÉRUM DMAE + POLISSACARÍDEOS RACCODERMA 10ml',
        descricao: 'Efeito tensor e antipoluição, repara e reestrutura a pele.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img3459.png'
    },
    {
        id: 74,
        marca: 'Racco',
        nome: 'SÉRUM ROSA MOSQUETA + ESQUALANO VEGETAL RACCODERMA 10ml',
        descricao: 'Hidrata, protege e restaura elasticidade da pele.',
        preco: 59.90, // Preço correto
        imagem: 'imagens/racco/img3467.png'
    },
    {
        id: 75,
        marca: 'Racco',
        nome: 'GEL CORPORAL REDUTOR DE MEDIDAS CICLOS D’RACCO 190g',
        descricao: 'Com mentol e cânfora, tonifica a pele e ajuda a eliminar toxinas.',
        preco: 76.90, // Preço correto
        imagem: 'imagens/racco/img3830.png'
    },
    {
        id: 76,
        marca: 'Racco',
        nome: 'SÉRUM CORPORAL ANTICELULITE COM DMAE CICLOS D’RACCO 200ml',
        descricao: 'Ativos que reduzem celulite, atenuam flacidez e hidratam a pele.',
        preco: 159.90, // Preço correto
        imagem: 'imagens/racco/img3834.png'
    },
    {
        id: 77,
        marca: 'Racco',
        nome: 'SÉRUM CORPORAL CARNIVORE CICLOS D’RACCO 10ml',
        descricao: 'Com hidrolisado de planta carnívora, estimula quebra de gordura e melhora contornos corporais.',
        preco: 89.90, // Preço correto
        imagem: 'imagens/racco/img3838.png'
    },
    {
        id: 78,
        marca: 'Racco',
        nome: 'PROTETOR SOLAR CORPORAL FPS 30 SOLEIL RACCO 100g',
        descricao: 'Com óleo de café verde e alistin, indicado para peles claras que desejam maior bronzeamento.',
        preco: 99.90, // Preço correto
        imagem: 'imagens/racco/img4003.png'
    },
    {
        id: 79,
        marca: 'Racco',
        nome: 'PROTETOR SOLAR FACIAL FPS 70 SOLEIL RACCO 40g',
        descricao: 'Altíssima proteção facial, ação antioxidante e prevenção do fotoenvelhecimento.',
        preco: 99.90, // Preço correto
        imagem: 'imagens/racco/img3999.png'
    },
    {
        id: 80,
        marca: 'Racco',
        nome: 'PROTETOR SOLAR FACIAL FPS 30 SOLEIL RACCO 40g',
        descricao: 'Protege contra sinais de fotoenvelhecimento, com ação antioxidante.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4007.png'
    },
    {
        id: 81,
        marca: 'Racco',
        nome: 'PROTETOR SOLAR FACIAL FPS 50 COM COR SOLEIL RACCO 40g',
        descricao: 'Proteção avançada com efeito tonalizante natural e toque seco.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4015.png'
    },
    {
        id: 82,
        marca: 'Racco',
        nome: 'FLUIDO ENDURECEDOR DE UNHAS LUZES 7ml',
        descricao: 'Fortalece e hidrata unhas com queratina hidrolisada, pantenol e biotina.',
        preco: 39.90, // Preço correto
        imagem: 'imagens/racco/img4011.png'
    },
    {
        id: 83,
        marca: 'Racco',
        nome: 'BASE CREMOSA COM ÁCIDO HIALURÔNICO E VITAMINA E LUZES RACCO 40g',
        descricao: 'Alta cobertura, hidratação e ação antioxidante para pele facial.',
        preco: 69.90, // Preço correto
        imagem: 'imagens/racco/img4019.png'
    },
    {
        id: 84,
        marca: 'Racco',
        nome: 'CANETA MASSAGEADORA FACIAL E CORPORAL VIBRA SKIN RACCO',
        descricao: 'Ponteira elétrica vibratória que massageia e ajuda na permeação de ativos.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4020.png'
    },
    {
        id: 85,
        marca: 'Racco',
        nome: 'ÓLEO ESSENCIAL CORPORAL ALECRIM BIO THERAPY RACCO 10ml',
        descricao: 'Estimula e revigora corpo e mente, aumentando disposição e concentração.',
        preco: 119.90, // Preço correto
        imagem: 'imagens/racco/img4260.png'
    },
    {
        id: 86,
        marca: 'Racco',
        nome: 'ÓLEO ESSENCIAL CORPORAL LAVANDA BIO THERAPY 10ml',
        descricao: 'Propriedades calmantes e relaxantes para corpo e mente.',
        preco: 119.90, // Preço correto
        imagem: 'imagens/racco/img4268.png'
    },
    {
        id: 87,
        marca: 'Racco',
        nome: 'IOS COLLAGEN LIFE – COLÁGENO HIDROLISADO EM PÓ RACCO 200g',
        descricao: 'Peptídeos de colágeno que melhoram firmeza e elasticidade da pele.',
        preco: 145.90, // Preço correto
        imagem: 'imagens/racco/img4439.png'
    },
    {
        id: 88,
        marca: 'Racco',
        nome: 'IOS MAXXI 30+ EM CÁPSULAS RACCO 30 cápsulas',
        descricao: 'Minerais antioxidantes que estimulam colágeno e elastina.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4443.png'
    },
    {
        id: 89,
        marca: 'Racco',
        nome: 'IOS COENZIMA Q10 - SUPLEMENTO ALIMENTAR EM CÁPSULAS RACCO 30 cápsulas',
        descricao: 'Coenzima Q10 e vitamina E para energia celular e saúde cardiovascular.',
        preco: 159.90, // Preço correto
        imagem: 'imagens/racco/img4420.png'
    },
    {
        id: 90,
        marca: 'Racco',
        nome: 'IOS ÔMEGA 3 EM CÁPSULAS RACCO 30 cápsulas',
        descricao: 'Fonte de EPA e DHA para saúde cardiovascular e anti-inflamatória.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4447.png'
    },
    {
        id: 91,
        marca: 'Racco',
        nome: 'IOS ALOE LIFE - SUPLEMENTO DE VITAMINA C SABOR ALOE VERA E LARANJA RACCO 1l',
        descricao: 'Suplemento de vitamina C com sabor refrescante para imunidade.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4435.png'
    },
    {
        id: 92,
        marca: 'Racco',
        nome: 'IOS ALOE LIFE – SUPLEMENTO PRONTO PARA BEBER COM VITAMINA C E SABOR ALOE VERA RACCO 1l',
        descricao: 'Pronto para beber, reforça imunidade com sabor aloe vera.',
        preco: 129.90, // Preço correto
        imagem: 'imagens/racco/img4436.png'
    },
    {
        id: 93,
        marca: 'Racco',
        nome: 'FIBRA LIFE REFRESH - PÓ PARA BEBIDA COM FIBRA PREBIÓTICA - CHÁ VERDE SABOR LIMÃO RACCO 200g',
        descricao: 'Com chá verde e mate, equilibra flora intestinal e ajuda no controle de peso.',
        preco: 69.90, // Preço atualizado
        imagem: 'imagens/racco/img4767.png'
    },
    {
        id: 94,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Retinollike Champagne Rose 3,8g",
        descricao: "Batom com tecnologia Retinollike que auxilia na renovação celular dos lábios, proporcionando cor intensa, acabamento uniforme e hidratação prolongada.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159215-300-300"
    },
    {
        id: 95,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Balm Labial Ultra Regenerador 3,5 G",
        descricao: "Balm labial com FPS 15 que promove regeneração intensa, hidratação profunda e proteção contra o ressecamento, deixando os lábios macios e saudáveis.",
        preco: 12,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159263-300-300"
    },
    {
        id: 96,
        marca: "Abelha Rainha",
        nome: "Amostra Ar Maquiagem Fps 15 Batom Lipchick 3 Em 1 Coral 0,9 G",
        descricao: "Amostra do batom Lipchick 3 em 1. Ideal para experimentar a cor Coral vibrante, com os benefícios de hidratação e proteção solar.",
        preco: 0.75,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159399-300-300"
    },
    {
        id: 97,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Acido Hialuronico Nude Romantico 3,8 G",
        descricao: "Batom enriquecido com ácido hialurônico e FPS 15 que hidrata intensamente, preenche linhas finas e proporciona cor sofisticada com proteção solar.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159267-300-300"
    },
    {
        id: 96,
        marca: "Abelha Rainha",
        nome: "Amostra Ar Maquiagem Fps 15 Batom Lipchick 3 Em 1 Coral 0,9 G",
        descricao: "Amostra do batom Lipchick 3 em 1. Ideal para experimentar a cor Coral vibrante com proteção solar.",
        preco: 0.75,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159399-300-300"
    },
    {
        id: 97,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Acido Hialuronico Nude Romantico 3,8 G",
        descricao: "Batom com ácido hialurônico e FPS 15. Hidrata, preenche linhas finas e protege os lábios.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159267-300-300"
    },
    {
        id: 98,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Lipchick 3 Em 1 Nude 4 G Fps",
        descricao: "Batom 3 em 1 com FPS 15: cobertura uniforme, hidratação e proteção solar em um tom nude elegante.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159292-300-300"
    },
    {
        id: 99,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Mascara Para Cilios Maximo Efeito 4g",
        descricao: "Máscara de cílios para volume incrível e hidratação. Pincel especial para fios alongados e curvados.",
        preco: 34.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159260-300-300"
    },
    {
        id: 100,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Lipchick 3 Em 1 Malva 4 G Fps",
        descricao: "Batom multifuncional 3 em 1 com FPS 15. Oferece cor Malva sofisticada, hidratação e proteção solar.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159293-300-300"
    },
    {
        id: 101,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Corretivo Multibeneficios Claro 2 4g",
        descricao: "Corretivo líquido com FPS 15 e Vitamina E. Trata bolsas, olheiras e previne a flacidez na área dos olhos.",
        preco: 35.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159195-300-300"
    },
    {
        id: 102,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Gel Preenchedor de Sobrancelhas 4g",
        descricao: "Gel que preenche de forma suave e marcante, corrigindo falhas e definindo o olhar com naturalidade.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159169-300-300"
    },
    {
        id: 103,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Retinollike Bourbon Nude 3,8g",
        descricao: "Batom com tecnologia Retinollike que renova, hidrata e suaviza linhas finas dos lábios.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159505-300-300"
    },
    {
        id: 104,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Lipchick 3 Em 1 Coral 4 G Fps",
        descricao: "Batom 3 em 1 com FPS 15. Proporciona cor Coral vibrante, hidratação e proteção solar.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159294-300-300"
    },
    {
        id: 105,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Blush In Love 5g",
        descricao: "Blush compacto com textura fina e toque aveludado para um ar de saúde com acabamento natural.",
        preco: 31.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159172-300-300"
    },
    {
        id: 106,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Acido Hialuronico Cobre Luxo 3,8g",
        descricao: "Batom com Ácido Hialurônico e FPS 15. Hidrata, preenche e protege os lábios na cor Cobre Luxo.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159273-300-300"
    },
    {
        id: 107,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Acido Hialuronico Rosa Envolvente 3,8g",
        descricao: "Batom cremoso com Ácido Hialurônico e FPS 15. Oferece hidratação e proteção na cor Rosa Envolvente.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159272-300-300"
    },
    {
        id: 108,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Fps 15 Batom Acido Hialuronico Vermelho Ousado 3,8 G",
        descricao: "Batom com Ácido Hialurônico e FPS 15. Hidratação intensa e proteção na cor Vermelho Ousado.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159265-300-300"
    },
    {
        id: 109,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Ultrafix Cafe Antigo 4ml",
        descricao: "Batom líquido matte de longa duração que não transfere. Cor intensa e confortável nos lábios.",
        preco: 42.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159508-300-300"
    },
    {
        id: 110,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Retinollike Noite de Avela 3,8g",
        descricao: "Batom com tecnologia Retinollike que repara, suaviza linhas finas e hidrata por mais tempo.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159504-300-300"
    },
    {
        id: 111,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Base Segunda Pele Bege Claro N1 30ml",
        descricao: "Base Tint Segunda Pele com FPS 15 e Vitamina E. Controla a oleosidade e disfarça poros.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159187-300-300"
    },
    {
        id: 112,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Corretivo Multibeneficios Medio 4g",
        descricao: "Corretivo líquido com FPS 15 e Vitamina E. Trata bolsas, olheiras e previne a flacidez na área dos olhos.",
        preco: 35.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159279-300-300"
    },
    {
        id: 113,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Ultra Fix Vermelho Bordo 4 G",
        descricao: "Batom líquido matte de longa duração que não transfere. Cor intensa e confortável nos lábios.",
        preco: 42.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159270-300-300"
    },
    {
        id: 114,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Lipchick 3 Em 1 Fps15 Rosa Intenso 4g",
        descricao: "Batom multifuncional 3 em 1 com FPS 15. Cor Rosa Intenso, hidratação e proteção solar.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159185-300-300"
    },
    {
        id: 115,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Iluminador Entardecer 5g",
        descricao: "Iluminador compacto com partículas de brilho para um efeito glow sofisticado e natural.",
        preco: 39.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159175-300-300"
    },
    {
        id: 116,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Gloss Diamond Cute 3g",
        descricao: "Gloss labial com partículas de brilho, Vitamina E e Óleo de Semente de Uva para brilho e hidratação.",
        preco: 34.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159206-300-300"
    },
    {
        id: 117,
        marca: "Abelha Rainha",
        nome: "Ar Maquiagem Batom Ultra Fix 4g Cacau Intenso",
        descricao: "Batom líquido matte de longa duração que não transfere. Cor intensa e confortável nos lábios.",
        preco: 42.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159203-300-300"
    },
    {
        id: 118,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Hidratante Desodorante Corporal Kinds 180g",
        descricao: "Hidratante corporal infantil com fragrância suave e divertida. Deixa a pele macia e perfumada.",
        preco: 19.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159390-300-300"
    },
    {
        id: 119,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Gloss Labial Infantil Princesa 3g",
        descricao: "Gloss labial infantil com tema de Princesa, brilho suave e aroma delicioso para as crianças.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159488-300-300"
    },
    {
        id: 120,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Gloss Labial Infantil Unicornio 3g",
        descricao: "Gloss labial infantil com tema de Unicórnio. Oferece um brilho mágico e aroma doce para as crianças.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159486-300-300"
    },
    {
        id: 121,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Hidrantante Corporal Doce de Leite 180g",
        descricao: "Hidratante corporal com deliciosa fragrância de Doce de Leite. Nutre e perfuma a pele.",
        preco: 32.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159379-300-300"
    },
    {
        id: 122,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Creme de Pentear Cupcake de Morango 130ml",
        descricao: "Creme de pentear infantil com cheirinho de Cupcake de Morango. Facilita o desembaraço e hidrata.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159378-300-300"
    },
    {
        id: 123,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Finalizador e Modelador de Cachos Cupcake de Morango 200ml",
        descricao: "Finalizador e modelador para cabelos cacheados infantis. Define os cachos e controla o frizz.",
        preco: 32.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159380-300-300"
    },
    {
        id: 124,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Colonia Infantil Feminina 100ml",
        descricao: "Colônia infantil feminina com fragrância delicada e alegre, para a pele sensível das crianças.",
        preco: 39.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159373-300-300"
    },
    {
        id: 125,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Batom Hidratante Pessego C/glitter 3,7 G",
        descricao: "Batom hidratante infantil com sabor de pêssego e glitter. Colore suavemente enquanto hidrata.",
        preco: 19.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159386-300-300"
    },
    {
        id: 126,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Shampoo Marshmallow Para Todos os Tipos de Cabelos 200ml",
        descricao: "Shampoo infantil com cheirinho de Marshmallow. Limpa suavemente todos os tipos de cabelo.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159376-300-300"
    },
    {
        id: 127,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Condicionador Marshmallow Para Todos os Tipos de Cabelos 200ml",
        descricao: "Condicionador infantil com aroma de Marshmallow. Desembaraça, hidrata e deixa os cabelos fáceis de pentear.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159375-300-300"
    },
    {
        id: 128,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Shampoo e Condicionador Sorvete Ceu Azul 2 Em 1 Para Todos os Tipos de Cabelos 200ml",
        descricao: "Produto 2 em 1, shampoo e condicionador infantil com fragrância de Sorvete Céu Azul.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159377-300-300"
    },
    {
        id: 129,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Brilho Labial Moranguinho Tutti Frutti C/glitter 14 G",
        descricao: "Brilho labial infantil com sabor de Tutti-Frutti e glitter. O clássico Moranguinho que hidrata e diverte.",
        preco: 24.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159387-300-300"
    },
    {
        id: 130,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Batom Hidratante Rosa Bebe 3,7g Fps",
        descricao: "Batom hidratante infantil com FPS. Colore suavemente com um tom de rosa bebê, enquanto protege e hidrata.",
        preco: 19.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159385-300-300"
    },
    {
        id: 131,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Brilho Labial Moranguinho Glitter 14 G",
        descricao: "Brilho labial infantil com sabor de Morango e partículas de glitter. Um clássico que hidrata e adiciona brilho.",
        preco: 24.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159388-300-300"
    },
    {
        id: 132,
        marca: "Abelha Rainha",
        nome: "Doce Infancia Colonia Infantil Masculina 100ml",
        descricao: "Colônia infantil masculina com uma fragrância fresca e aventureira, ideal para os meninos.",
        preco: 39.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159374-300-300"
    },
    {
        id: 135,
        marca: "Abelha Rainha",
        nome: "Desodorante Rollon Antitranspirante Sem Perfume Unissex 50 Ml",
        descricao: "Desodorante roll-on sem perfume com proteção 24 horas. Ideal para peles sensíveis.",
        preco: 18.99,
        imagem: "https://abelharainha.vtexassets.com/arquivos/ids/158897-300-300"
    },
    {
        id: 136,
        marca: "Abelha Rainha",
        nome: "Kit Melancia no banho – Hidratação, Perfume e Cuidado para a Pele",
        descricao: "Kit completo com a fragrância refrescante de melancia para hidratação e cuidado da pele.",
        preco: 106.98,
        imagem: "https://abelharainha.vtexassets.com/arquivos/ids/158853-300-300"
    },
    {
        id: 137,
        marca: "Abelha Rainha",
        nome: "Kit Casa Luxo Jasmim e Alecrim (4330 + 4333)",
        descricao: "Kit para casa com difusor e água perfumada na fragrância Jasmim e Alecrim. Traz frescor e leveza.",
        preco: 62.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159786-300-300"
    },
    {
        id: 138,
        marca: "Abelha Rainha",
        nome: "Kit Casa Luxo Pessego e Lotus (4332 + 4335)",
        descricao: "Kit para casa com difusor e água perfumada na fragrância Pêssego e Lótus. Perfuma com suavidade.",
        preco: 62.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159787-300-300"
    },
    {
        id: 139,
        marca: "Abelha Rainha",
        nome: "Kit Casa Luxo Figo e Folhas Verdes (4331 + 4334)",
        descricao: "Kit para casa com difusor e água perfumada na fragrância Figo e Folhas Verdes. Aroma marcante.",
        preco: 62.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159785-300-300"
    },
    {
        id: 140,
        marca: "Abelha Rainha",
        nome: "Caixa Presenteavel Com Cinta Vermelha",
        descricao: "Caixa elegante com cinta vermelha, ideal para montar presentes especiais com produtos Abelha Rainha.",
        preco: 9.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159500-300-300"
    },
    {
        id: 141,
        marca: "Abelha Rainha",
        nome: "Casa Agua Para Lencol e Tecidos e Ambiente Lavanda e Cha Verde 250ml",
        descricao: "Água perfumada multiuso com aroma relaxante de Lavanda e Chá Verde para tecidos e ambientes.",
        preco: 22.49,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159222-300-300"
    },
    {
        id: 142,
        marca: "Abelha Rainha",
        nome: "Casa Agua Para Lencol e Tecido e Ambiente Orquidea e Flor de Cerejeira 250ml",
        descricao: "Água perfumada multiuso com fragrância floral de Orquídea e Flor de Cerejeira para tecidos e ambientes.",
        preco: 22.49,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159223-300-300"
    },
    {
        id: 143,
        marca: "Abelha Rainha",
        nome: "Casa Agua Para Lencol e Tecido e Ambiente Jasmim e Limao 250ml",
        descricao: "Água perfumada multiuso com aroma cítrico-floral de Jasmim e Limão para tecidos e ambientes.",
        preco: 22.49,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159224-300-300"
    },
    {
        id: 144,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Oleo de Menta Puro Aromatizante Bucal 10ml",
        descricao: "Óleo de menta puro para um hálito fresco instantâneo. Aromatizante bucal concentrado e refrescante.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159062-300-300"
    },
    {
        id: 145,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Po Dental Branqueador Com Carvao Ativado 12g",
        descricao: "Pó dental com carvão ativado que auxilia no branqueamento dos dentes, removendo manchas.",
        preco: 21.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158925-300-300"
    },
    {
        id: 146,
        marca: "Abelha Rainha",
        nome: "Suplemento Alimentar Suplemento Osso Forte 110g",
        descricao: "Suplemento com Cálcio e Vitaminas D3 e K2. Fortalece a estrutura óssea e melhora a saúde.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159405-300-300"
    },
    {
        id: 147,
        marca: "Abelha Rainha",
        nome: "Bem Estar Repelente Adeus Mosquito 120ml",
        descricao: "Repelente de mosquitos com DEET 15% e Citronela. Oferece até 10 horas de proteção para toda a família.",
        preco: 31.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159119-300-300"
    },
    {
        id: 148,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Serum Matizador Dental 30ml",
        descricao: "Sérum dental com efeito matizador que ajuda a neutralizar tons amarelados para um sorriso mais branco.",
        preco: 21.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158946-300-300"
    },
    {
        id: 149,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Creme Dental Em Gel C/aloe Vera e Propolis 50 G",
        descricao: "Creme dental em gel com Aloe Vera e Própolis. Limpa os dentes, protege as gengivas e proporciona hálito fresco.",
        preco: 23.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158923-300-300"
    },
    {
        id: 150,
        marca: "Abelha Rainha",
        nome: "Bem Estar Pocket Bloqueador de Odores Sanitarios 15ml",
        descricao: "Versão de bolso do bloqueador de odores sanitários. Crie uma barreira antiodores no vaso sanitário.",
        preco: 19.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159495-300-300"
    },
    {
        id: 151,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Spray Bucal Hortela 16 Ml",
        descricao: "Spray bucal com sabor de hortelã para um hálito fresco a qualquer hora. Prático e eficiente.",
        preco: 21.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158901-300-300"
    },
    {
        id: 152,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Gel Dental Branqueador 30g",
        descricao: "Gel dental com fórmula branqueadora que ajuda a remover manchas para um sorriso mais branco.",
        preco: 23.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158924-300-300"
    },
    {
        id: 153,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Enxaguante Bucal Propolis Cravo da India e Hortela5 250ml",
        descricao: "Enxaguante bucal com Própolis, Cravo da Índia e Hortelã para uma limpeza profunda e hálito fresco.",
        preco: 34.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158945-300-300"
    },
    {
        id: 154,
        marca: "Abelha Rainha",
        nome: "Casa Sabonete Para as Maos Erva Doce 500ml",
        descricao: "Sabonete líquido para as mãos com a suave e clássica fragrância de Erva Doce. Limpa e perfuma.",
        preco: 32.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159226-300-300"
    },
    {
        id: 155,
        marca: "Abelha Rainha",
        nome: "Talco Perfumado Talco Perfumado Multiuso Maciez do Algodao 100g",
        descricao: "Talco perfumado multiuso com fragrância Maciez do Algodão. Deixa a pele seca e aveludada.",
        preco: 26.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159297-300-300"
    },
    {
        id: 156,
        marca: "Abelha Rainha",
        nome: "Casa Sabonete Para as Maos Petalas de Rosas 500ml",
        descricao: "Sabonete líquido para as mãos com a delicada fragrância de Pétalas de Rosas. Limpa e perfuma.",
        preco: 32.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159225-300-300"
    },
    {
        id: 157,
        marca: "Abelha Rainha",
        nome: "Talco Perfumado Talco Perfumado Multiuso Meu Cheirinho 100g",
        descricao: "Talco perfumado multiuso com a clássica fragrância Meu Cheirinho. Protege contra atrito e umidade.",
        preco: 26.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159290-300-300"
    },
    {
        id: 158,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Spray Bucal Propolis 16 Ml",
        descricao: "Spray bucal com própolis, conhecido por suas propriedades antissépticas. Promove hálito fresco.",
        preco: 21.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158938-300-300"
    },
    {
        id: 159,
        marca: "Abelha Rainha",
        nome: "Talco Perfumado Talco Perfumado Multiuso Petalas de Rosas 100g",
        descricao: "Talco perfumado multiuso com a delicada fragrância de Pétalas de Rosas. Mantém a pele seca e suave.",
        preco: 26.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159332-300-300"
    },
    {
        id: 160,
        marca: "Abelha Rainha",
        nome: "Casa Bloqueador de Odores Sanitarios Bem Estar 60 Ml",
        descricao: "Bloqueador de odores sanitários. Borrife na água do vaso antes de usar para criar uma barreira antiodores.",
        preco: 31.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159491-300-300"
    },
    {
        id: 161,
        marca: "Abelha Rainha",
        nome: "Casa Desodorizador Bloqueador de Maus Odores P/ Ambientes Acao Repelente 60ml",
        descricao: "Desodorizador de ambientes que bloqueia maus odores e possui ação repelente. Casa fresca e protegida.",
        preco: 35.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159221-300-300"
    },
    {
        id: 162,
        marca: "Abelha Rainha",
        nome: "Talco Perfumado Talco Perfumado Multiuso Campos de Lavanda 100g",
        descricao: "Talco perfumado multiuso com a relaxante fragrância de Campos de Lavanda. Deixa a pele seca e macia.",
        preco: 26.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159055-300-300"
    },
    {
        id: 163,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Gel Dental Branqueador Carvao Ativado 30g",
        descricao: "Gel dental branqueador com carvão ativado. Ajuda a remover impurezas e manchas para um sorriso mais branco.",
        preco: 21.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158926-300-300"
    },
    {
        id: 164,
        marca: "Abelha Rainha",
        nome: "Halito Fresco Higienizador de Dentaduras 30 Ml",
        descricao: "Solução higienizadora para dentaduras. Limpa profundamente, remove manchas e elimina bactérias.",
        preco: 21.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158937-300-300"
    },
    {
        id: 165,
        marca: "Abelha Rainha",
        nome: "Ella Slim Suplemento Alimentar Em Capsulas 60 Cap. de 450 Mg",
        descricao: "Suplemento alimentar em cápsulas que auxilia em processos de emagrecimento e bem-estar.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/158551-300-300"
    },
    {
        id: 166,
        marca: "Abelha Rainha",
        nome: "Unica Deo Parfum Feminino 50ml",
        descricao: "Deo Parfum feminino com fragrância marcante e única, para a mulher que expressa sua personalidade.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159814-300-300"
    },
    {
        id: 167,
        marca: "Abelha Rainha",
        nome: "Essencial For Men Deo Parfum Masculino 100ml",
        descricao: "Fragrância amadeirada aromática. Fresca, mas também sensual e envolvente, para o homem moderno.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159790-300-300"
    },
    {
        id: 168,
        marca: "Abelha Rainha",
        nome: "Kit Dália Deo Parfum + Body Splash Feminino",
        descricao: "Kit com Deo Parfum e Body Splash da linha Dália. Uma fragrância que simboliza força e resiliência.",
        preco: 150.98,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159767-300-300"
    },
    {
        id: 169,
        marca: "Abelha Rainha",
        nome: "Kit Marcelle Fantasy: Colônia, Body Splash e Hidratante",
        descricao: "Kit completo da linha Marcelle Fantasy. Inclui Colônia, Body Splash e Hidratante.",
        preco: 118.98,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159655-300-300"
    },
    {
        id: 170,
        marca: "Abelha Rainha",
        nome: "Kit Geleia Real: Sabonete + Sérum Facial Preenchedor",
        descricao: "Kit de tratamento facial com Geleia Real. O sabonete nutre e o sérum preenchedor restaura a elasticidade.",
        preco: 72.98,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159654-300-300"
    },
    {
        id: 171,
        marca: "Abelha Rainha",
        nome: "Kit Rubi Intense Deo Parfum 100ml + Miniatura 12ml",
        descricao: "Kit com a fragrância Rubi Intense em dois tamanhos. Um perfume elegante, perfeito para levar na bolsa.",
        preco: 98.98,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159651-300-300"
    },
    {
        id: 172,
        marca: "Abelha Rainha",
        nome: "Kit Eterna Deo Parfum 100ml +Óleos Multifuncionais",
        descricao: "Kit da linha Eterna, com Deo Parfum e Óleo Multifuncional para corpo e cabelo. Para a mulher romântica.",
        preco: 118.98,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159652-300-300"
    },
    {
        id: 173,
        marca: "Abelha Rainha",
        nome: "Marcelle Deo Parfum Feminino 100 Ml",
        descricao: "Fragrância floral floral para mulheres que levam a vida com alto astral, personalidade e atitude.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159302-300-300"
    },
    {
        id: 174,
        marca: "Abelha Rainha",
        nome: "Todo Cuidado Mais Body Splash Melancia 200ml",
        descricao: "Body splash com a fragrância suculenta e refrescante de melancia. Perfuma e refresca a pele.",
        preco: 65.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159132-300-300"
    },
    {
        id: 175,
        marca: "Abelha Rainha",
        nome: "Dalia Body Splash Agua Deo Colonia Feminina 200ml",
        descricao: "Body Splash com fragrância âmbar amadeirada. Simboliza força e resiliência para mulheres que vencem desafios.",
        preco: 68.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159462-300-300"
    },
    {
        id: 176,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Gold Deo Colonia Masculina 50 Ml",
        descricao: "Fragrância oriental amadeirada. Um coquetel envolvente e poderoso que deixa rastros.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159299-300-300"
    },
    {
        id: 177,
        marca: "Abelha Rainha",
        nome: "Floralle Deo Parfum Feminino 90 Ml",
        descricao: "Fragrância oriental amadeirada que representa mulheres prontas para enfrentar desafios com poder e sedução.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159300-300-300"
    },
    {
        id: 178,
        marca: "Abelha Rainha",
        nome: "Magnato Deo Parfum Masculino 100ml",
        descricao: "Fragrância aromática fougère, intensa e ousada. Um perfume marcante para homens elegantes.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159343-300-300"
    },
    {
        id: 179,
        marca: "Abelha Rainha",
        nome: "Irresistivel Deo Parfum Masculino 100ml",
        descricao: "Fragrância oriental fougère. Charme e intensidade traduzidos em um perfume com notas fortes e sofisticadas.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159341-300-300"
    },
    {
        id: 180,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Luxo Man Deo Parfum Masculino 50ml",
        descricao: "Fragrância aromática amadeirada. Para o homem que é único, um perfume à altura de sua presença.",
        preco: 89.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159318-300-300"
    },
    {
        id: 181,
        marca: "Abelha Rainha",
        nome: "Rubi Glamour Deo Parfum Feminina 50 Ml",
        descricao: "Fragrância floral amadeirada que exala intensidade e feminilidade, com notas de amêndoas e jasmim.",
        preco: 99.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159296-300-300"
    },
    {
        id: 182,
        marca: "Abelha Rainha",
        nome: "Body Splash Marcelle Fantasy 200ml",
        descricao: "Body splash com a fragrância floral floral de Marcelle Fantasy. Perfuma e refresca a pele.",
        preco: 68.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159353-300-300"
    },
    {
        id: 183,
        marca: "Abelha Rainha",
        nome: "Rubi Intense Deo Parfum Feminina 100ml",
        descricao: "Fragrância que exala elegância e personalidade. Une modernidade e sofisticação de forma fascinante.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159320-300-300"
    },
    {
        id: 184,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Homem Deo Colonia Masculina 50 Ml",
        descricao: "Fragrância aromática fougère inspirada no calor do deserto, com notas marcantes e duradouras.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159291-300-300"
    },
    {
        id: 185,
        marca: "Abelha Rainha",
        nome: "Floralle Mystery Deo Parfum Feminino 90 Ml",
        descricao: "Fragrância chipre floral moderna, que expressa sensualidade e emoção para mulheres criativas.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159308-300-300"
    },
    {
        id: 186,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Classic Deo Colonia Masculina 50 Ml",
        descricao: "Fragrância cítrica amadeirada inspirada no calor do deserto, para o homem clássico.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159288-300-300"
    },
    {
        id: 187,
        marca: "Abelha Rainha",
        nome: "Irresistivel Irresistivel Deo Parfum Feminino 100ml",
        descricao: "Fragrância feminina que traduz o poder e a sedução da mulher moderna com notas envolventes.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159333-300-300"
    },
    {
        id: 188,
        marca: "Abelha Rainha",
        nome: "Brisa Suave Verbena e Agua de Coco Deo Colonia 200ml",
        descricao: "Fragrância oriental cítrica que proporciona uma sensação de frescor e leveza para a rotina.",
        preco: 44.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159334-300-300"
    },
    {
        id: 189,
        marca: "Abelha Rainha",
        nome: "Marcelle Fantasy Deo Parfum Feminino 100 Ml",
        descricao: "Fragrância floral floral para mulheres que levam a vida com alto astral, personalidade e atitude.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159312-300-300"
    },
    {
        id: 190,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Femme Deo Colonia 50 Ml",
        descricao: "Fragrância oriental floral que representa a mulher moderna, cheia de personalidade e atitude.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159295-300-300"
    },
    {
        id: 191,
        marca: "Abelha Rainha",
        nome: "Lendario Gold Deo Parfum Masculino 100ml",
        descricao: "Fragrância amadeirada especiada. Deixe sua marca de poder e determinação com este perfume marcante.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159311-300-300"
    },
    {
        id: 192,
        marca: "Abelha Rainha",
        nome: "Confidence Carmim Deo Colonia Feminina 100 Ml",
        descricao: "Fragrância oriental baunilha para mulheres apaixonadas, que irradiam feminilidade com estilo único.",
        preco: 99.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159289-300-300"
    },
    {
        id: 193,
        marca: "Abelha Rainha",
        nome: "Volupia Deo Parfum Feminino 50 Ml",
        descricao: "Fragrância oriental amadeirada para mulheres fortes e cheias de personalidade.",
        preco: 99.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159304-300-300"
    },
    {
        id: 194,
        marca: "Abelha Rainha",
        nome: "Brisa Suave Deo Colonia Refrescante Desodorante Rosas 200ml",
        descricao: "Fragrância floral fresh que proporciona uma sensação de frescor e acalma a pele. Perfume e leveza.",
        preco: 44.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159316-300-300"
    },
    {
        id: 195,
        marca: "Abelha Rainha",
        nome: "Narcizo Strong Miniatura 12ml",
        descricao: "Versão miniatura da fragrância amadeirada aromática Narcizo Strong. Perfeita para levar na bolsa.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159345-300-300"
    },
    {
        id: 196,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Deo Colonia Intense Femme Spray 50 Ml",
        descricao: "Fragrância chipre floral que exala elegância e sofisticação, traduzindo a essência da mulher.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159305-300-300"
    },
    {
        id: 197,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Absoluto Deo Colonia Masculina 50 Ml",
        descricao: "Fragrância oriental amadeirada sofisticada para homens enigmáticos e sedutores.",
        preco: 59.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159298-300-300"
    },
    {
        id: 198,
        marca: "Abelha Rainha",
        nome: "Lendario Deo Parfum Masculino 100 Ml",
        descricao: "Fragrância aromática fresca para homens que desafiam os limites e buscam superar recordes.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159306-300-300"
    },
    {
        id: 199,
        marca: "Abelha Rainha",
        nome: "Volupia Midnight Deo Parfum Feminino 50ml",
        descricao: "Fragrância floral oriental que exala elegância e personalidade. Une modernidade e sofisticação.",
        preco: 99.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159344-300-300"
    },
    {
        id: 200,
        marca: "Abelha Rainha",
        nome: "Narcizo Stroger Deo Parfum Masculino 100 Ml",
        descricao: "Fragrância amadeirada aromática que transforma sua presença em pura confiança.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159313-300-300"
    },
    {
        id: 201,
        marca: "Abelha Rainha",
        nome: "Lendario Acqua Deo Parfum Masculino 100ml",
        descricao: "Fragrância aromática fougère para homens que desafiam os limites. Uma versão mais fresca do Lendário.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159309-300-300"
    },
    {
        id: 202,
        marca: "Abelha Rainha",
        nome: "Brisa Suave Deo Colonia Rerescante Desodorante Iris e Pimenta Rosa 200 Ml",
        descricao: "Fragrância floral aquosa que proporciona uma sensação de frescor e acalma a pele.",
        preco: 44.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159317-300-300"
    },
    {
        id: 203,
        marca: "Abelha Rainha",
        nome: "Rubi Intense Miniatura 12ml",
        descricao: "Versão miniatura da fragrância Rubi Intense. Um perfume elegante, perfeito para levar na bolsa.",
        preco: 29.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159346-300-300"
    },
    {
        id: 204,
        marca: "Abelha Rainha",
        nome: "Voo Livre Atitude Deo Colonia Spray Masculino 200ml",
        descricao: "Fragrância especiada aromática que traz a adrenalina de um novo desafio. Para o dia a dia.",
        preco: 69.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159327-300-300"
    },
    {
        id: 205,
        marca: "Abelha Rainha",
        nome: "Marcelle Fantasy Creme Hidratante Desodorante Corporal 100ml",
        descricao: "Creme hidratante acetinado com a fragrância floral de Marcelle Fantasy. Deixa a pele macia e perfumada.",
        preco: 37.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159321-300-300"
    },
    {
        id: 206,
        marca: "Abelha Rainha",
        nome: "Dalia Deo Parfum Feminino 100ml",
        descricao: "Fragrância âmbar amadeirada. A flor Dália simboliza força e resiliência, para mulheres que vencem desafios.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159460-300-300"
    },
    {
        id: 207,
        marca: "Abelha Rainha",
        nome: "Narcizo Deo Parfum Masculino 100 Ml",
        descricao: "Fragrância oriental especiada que é a identidade olfativa do homem moderno. Sofisticado e sedutor.",
        preco: 129.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159303-300-300"
    },
    {
        id: 208,
        marca: "Abelha Rainha",
        nome: "Voo Livre Aventura Deo Colonia Spray Masculino 200ml",
        descricao: "Fragrância fougère fresh que traz a adrenalina de uma nova aventura. Para estar sempre perfumado.",
        preco: 69.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159328-300-300"
    },
    {
        id: 209,
        marca: "Abelha Rainha",
        nome: "Madeira do Oriente Luxo Woman Deo Parfum Feminino 50ml",
        descricao: "Fragrância floral floral para mulheres apaixonantes. Uma versão luxuosa e sofisticada da fragrância clássica.",
        preco: 89.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159319-300-300"
    },
    {
        id: 210,
        marca: "Abelha Rainha",
        nome: "Eterna Deo Parfum Feminino 90ml",
        descricao: "Fragrância oriental floral. Delicadeza e feminilidade definem a mulher romântica e intensa.",
        preco: 149.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159336-300-300"
    },
    {
        id: 211,
        marca: "Abelha Rainha",
        nome: "Voo Livre Intenso Deo Colonia Spray Masculino 200ml",
        descricao: "Fragrância aromática amadeirada que traz o poder de uma conquista. Para estar sempre protegido.",
        preco: 69.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159329-300-300"
    },
    {
        id: 212,
        marca: "Abelha Rainha",
        nome: "Talco Perfumado Multiuso Suavidade da Erva Doce 100g",
        descricao: "Talco perfumado multiuso com a fragrância suave de Erva Doce. Deixa a pele seca e aveludada.",
        preco: 26.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159352-300-300"
    },
    {
        id: 213,
        marca: "Abelha Rainha",
        nome: "Voo Livre Energia Deo Colonia Spray Masculina 200ml",
        descricao: "Fragrância amadeirada aromática que renova as energias para os desafios do dia a dia.",
        preco: 69.99,
        imagem: "https://tfddmr.vtexassets.com/arquivos/ids/159457-300-300"
    },

    // --- CUIDADO COM AS UNHAS ---
    {
        id: 214,
        marca: "Odorata",
        nome: "Base Amarga 3 em 1 Viva Unhas 9 ml",
        descricao: "Base 3 em 1 com sabor amargo que inibe o hábito de roer as unhas, fortalecendo e estimulando o crescimento.",
        preco: 17.49,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/Base_amarga.jpg"
    },
    {
        id: 215,
        marca: "Odorata",
        nome: "Base Antimicose Antibactericida e Antifúngica Viva Unhas 9 ml",
        descricao: "Base de tratamento com ação antimicose, antibactericida e antifúngica para unhas mais saudáveis.",
        preco: 24.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/Base_anti_micose.jpg"
    },
    {
        id: 216,
        marca: "Odorata",
        nome: "Base Bomba de Crescimento Viva Unhas 9ml",
        descricao: "Base fortalecedora enriquecida com vitaminas que acelera o crescimento e previne a quebra das unhas.",
        preco: 9.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/Base_bomba.jpg"
    },
    {
        id: 217,
        marca: "Odorata",
        nome: "Base Branqueadora para Unhas Amareladas Secagem Rápida Viva Unhas 9ml",
        descricao: "Base de secagem rápida que neutraliza o tom amarelado das unhas, deixando-as com aspecto mais claro.",
        preco: 24.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/Base_Branqueadora.jpg"
    },
    {
        id: 234,
        marca: "Odorata",
        nome: "Base Verniz Extra Brilho Viva Unhas 9 ml",
        descricao: "Finalizador que proporciona brilho intenso ao esmalte, efeito verniz e maior durabilidade da cor.",
        preco: 24.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/Base_verniz_extra_brilho.jpg"
    },
    // --- BASES PARA O ROSTO ---
    {
        id: 222,
        marca: "Odorata",
        nome: "Base Líquida Matte Pró-Age Bege Claro 30 ml Viva Luxo",
        descricao: "Base líquida matte com tratamento Pró-Age, que ajuda a combater os sinais do envelhecimento.",
        preco: 72.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/02/bege-claro.jpg"
    },
    {
        id: 224,
        marca: "Odorata",
        nome: "Base Líquida Matte Pró-Age Bege Médio 30 ml Viva Luxo",
        descricao: "Base líquida matte com tratamento Pró-Age, que ajuda a combater os sinais do envelhecimento.",
        preco: 72.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/02/Bege-Medio.jpg"
    },
    {
        id: 223,
        marca: "Odorata",
        nome: "Base Líquida Matte Pró-Age Bege Escuro 30 ml Viva Luxo",
        descricao: "Base líquida matte com tratamento Pró-Age, que ajuda a combater os sinais do envelhecimento.",
        preco: 72.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/02/bege-escuro.jpg"
    },
    {
        id: 219,
        marca: "Odorata",
        nome: "Base Compacta 3 em 1 Bege Claro 10 g Viva Luxo",
        descricao: "Base compacta 3 em 1: base, pó e corretivo. Oferece alta cobertura e efeito matte.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/2632-Bege-Claro-1-rotated.jpg"
    },
    {
        id: 221,
        marca: "Odorata",
        nome: "Base Compacta 3 em 1 Bege Médio 10 g Viva Luxo",
        descricao: "Base compacta 3 em 1: base, pó e corretivo. Oferece alta cobertura e efeito matte.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/2633-Bege-Medio-1-rotated.jpg"
    },
    {
        id: 220,
        marca: "Odorata",
        nome: "Base Compacta 3 em 1 Bege Escuro 10 g Viva Luxo",
        descricao: "Base compacta 3 em 1: base, pó e corretivo. Oferece alta cobertura e efeito matte.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/2635-Bege-Escuro-1-rotated.jpg"
    },
    {
        id: 231,
        marca: "Odorata",
        nome: "Base Mousse Bege Claro 15 g Viva Luxo",
        descricao: "Base com textura mousse aveludada, que proporciona cobertura uniforme e efeito matte.",
        preco: 69.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/06/cor1_Mousse.png"
    },
    {
        id: 233,
        marca: "Odorata",
        nome: "Base Mousse Bege Médio 15 g Viva Luxo",
        descricao: "Base com textura mousse aveludada, que proporciona cobertura uniforme e efeito matte.",
        preco: 69.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/cor_2_Mousse.png"
    },
    // --- BATONS ---
    {
        id: 238,
        marca: "Odorata",
        nome: "Batom com FPS 8 De Boa 3",
        descricao: "Batom cremoso com FPS 8. Cor suave e casual para um look 'de boa', com hidratação e proteção.",
        preco: 19.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/2393-Batom-Minha-Make-De-Boa.jpg"
    },
    {
        id: 242,
        marca: "Odorata",
        nome: "Batom com FPS 8 Rosa Chá 3,8 g Minha Make",
        descricao: "Batom cremoso com FPS 8. Cor clássica Rosa Chá, que combina com tudo, com hidratação.",
        preco: 19.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/01/Batom-com-FPS-8-Rosa-Cha-38-g-Minha-Make.png"
    },
    {
        id: 245,
        marca: "Odorata",
        nome: "Batom com FPS 8 Vermelho Energia 3",
        descricao: "Batom cremoso com FPS 8. Cor Vermelho Energia, vibrante e poderosa, com hidratação e proteção.",
        preco: 19.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/03/Prancheta-3-1.png"
    },
    {
        id: 236,
        marca: "Odorata",
        nome: "Batom com FPS 8 Bordô Ponta Negra 3,8 g Minha Make",
        descricao: "Batom cremoso com FPS 8. Cor Bordô Ponta Negra, intensa e sofisticada, com proteção solar.",
        preco: 19.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/12/Design-sem-nome-2022-12-23T143957.869.png"
    },
    {
        id: 248,
        marca: "Odorata",
        nome: "Batom Ice Cereja 3",
        descricao: "Batom com efeito refrescante. Cor Cereja, que hidrata e deixa uma sensação geladinha nos lábios.",
        preco: 23.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/07/1000-x-10001.jpg"
    },
    {
        id: 249,
        marca: "Odorata",
        nome: "Batom Ice Coffee 3",
        descricao: "Batom com efeito refrescante. Cor Coffee, que hidrata e deixa uma sensação geladinha nos lábios.",
        preco: 23.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/Ice-Coffee.jpg"
    },
    // --- CUIDADOS FACIAIS ---
    {
        id: 275,
        marca: "Odorata",
        nome: "Acne Trat – Máscara Facial Peel Off Antiacne Com Pepino 60 g",
        descricao: "Máscara peel off com pepino que ajuda a controlar a oleosidade e combater a acne.",
        preco: 26.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/02/Gel-hidratante-com-extrato-de-Pepino-mascara-300x300-1.png"
    },
    {
        id: 276,
        marca: "Odorata",
        nome: "Acne Trat – Sabonete Liquido Antiacne 100 ml",
        descricao: "Sabonete líquido para peles oleosas e acneicas, que limpa profundamente e controla a oleosidade.",
        preco: 22.79,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Acnetrat-Sabonete-e-commerce.png"
    },
    {
        id: 284,
        marca: "Odorata",
        nome: "Clari Plus – Creme Clareador Noite 50 g",
        descricao: "Creme noturno que atua no clareamento de manchas e uniformização do tom da pele.",
        preco: 71.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/creme-clareador-noite-50g-4346.jpg"
    },
    {
        id: 288,
        marca: "Odorata",
        nome: "Cyclus – Caneta Botox Serum Preenchedor 15ml",
        descricao: "Sérum em caneta com efeito botox-like que preenche linhas finas e rugas de expressão.",
        preco: 74.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2025/02/Cyclus-Caneta.jpg"
    },
    {
        id: 306,
        marca: "Odorata",
        nome: "Regenerador Labial FPS 15 3",
        descricao: "Regenerador labial com FPS 15 que hidrata, repara e protege os lábios contra o ressecamento.",
        preco: 43.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/Cyclus-Regenerador.jpg"
    },
    // --- PERFUMARIA ---
    {
        id: 336,
        marca: "Odorata",
        nome: "Anne Deo Parfum Feminino 100 ml",
        descricao: "Deo Parfum feminino com fragrância sofisticada e marcante, para mulheres elegantes.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/04/Anne-Deo-Parfum-Spray-Feminino-100-ml-1.png"
    },
    {
        id: 337,
        marca: "Odorata",
        nome: "Black City Deo Parfum Spray Masculino 100 ml",
        descricao: "Deo Parfum masculino com fragrância urbana e moderna, para o homem cosmopolita.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Design-sem-nome-2022-11-21T154729.070.png"
    },
    {
        id: 340,
        marca: "Odorata",
        nome: "Black Gold Deo Parfum Spray Feminino 100 ml",
        descricao: "Deo Parfum feminino com fragrância luxuosa e envolvente, para mulheres poderosas.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/BLACK-GOLD-DEO-COLONIA-SPRAY-FEMININA-3163.jpg"
    },
    {
        id: 341,
        marca: "Odorata",
        nome: "Black Sport Deo Parfum Spray Masculina 100 ml",
        descricao: "Deo Parfum masculino com fragrância fresca e energética, ideal para o homem esportista.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/BLACK-SPORT-DEO-COLONIA-SPRAY-MASCULINA-3162.jpg"
    },
    {
        id: 343,
        marca: "Odorata",
        nome: "Botanicals Body Splash Lavanda e Peônia 200 ml",
        descricao: "Body splash com fragrância relaxante de Lavanda e Peônia para perfumar e refrescar a pele.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Lavanda-e-Peonia.jpg"
    },
    {
        id: 344,
        marca: "Odorata",
        nome: "Botanicals Body Splash Morango e Framboesa 200 ml",
        descricao: "Body splash com fragrância frutal de Morango e Framboesa para perfumar e refrescar a pele.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Morango-e-Framboesa.jpg"
    },
    {
        id: 370,
        marca: "Odorata",
        nome: "Marco Deo Parfum Spray Masculino 100 ml",
        descricao: "Deo Parfum masculino com fragrância marcante e clássica, para o homem de presença.",
        preco: 169.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Design-sem-nome-2022-11-21T161502.885.png"
    },
    {
        id: 382,
        marca: "Odorata",
        nome: "Porto Deo Parfum Spray Masculino 100ml",
        descricao: "Deo Parfum masculino com fragrância fresca e amadeirada, inspirada na brisa do mar.",
        preco: 169.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/06/3013.jpg"
    },
    {
        id: 383,
        marca: "Odorata",
        nome: "Royal Ametista Deo Parfum Spray Feminino – 60ml",
        descricao: "Deo Parfum feminino com fragrância sofisticada e misteriosa, para mulheres de presença marcante.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2025/02/Royal-Ametista-Deo-Parfum-Spray-Feminino.jpg"
    },
    {
        id: 384,
        marca: "Odorata",
        nome: "Royal Ametista Perfume Capilar – 25ml",
        descricao: "Perfume capilar que deixa os fios com a fragrância sofisticada de Royal Ametista, sem ressecar.",
        preco: 69.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2025/02/Royal-Ametista-Perfume-Capilar.jpg"
    },
    {
        id: 385,
        marca: "Odorata",
        nome: "Royal Turquesa Deo Parfum Spray Feminino 60 ml",
        descricao: "Fragrância fresca e elegante, inspirada na energia da pedra turquesa, para mulheres radiantes.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/02/Royal-Turquesa-1.jpg"
    },
    {
        id: 386,
        marca: "Odorata",
        nome: "Valentina Deo Parfum Spray Feminina 100 ml",
        descricao: "Fragrância intensa e apaixonante para mulheres que deixam sua marca por onde passam.",
        preco: 189.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/03/Valentina.png"
    },
    {
        id: 387,
        marca: "Odorata",
        nome: "Viva Luxo Deo Parfum Spray Feminino 100 ml",
        descricao: "Fragrância que representa o luxo e a sofisticação, ideal para momentos especiais e marcantes.",
        preco: 164.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Produtos-Odorata-.png"
    },
    {
        id: 388,
        marca: "Odorata",
        nome: "Zenit Acqua Deo Colônia Refrescante Masculina 100 ml",
        descricao: "Colônia masculina refrescante com notas aquáticas, perfeita para o uso diário e dias quentes.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Zenit-Acqua-Deo-Colonia.png"
    },
    {
        id: 389,
        marca: "Odorata",
        nome: "Zenit Air Deo Colônia Refrescante Masculina 100 ml",
        descricao: "Colônia masculina com fragrância leve e fresca, inspirada na liberdade e na brisa do ar.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/01/3252-zenit-air.jpg"
    },
    {
        id: 390,
        marca: "Odorata",
        nome: "Zenit Forest Deo Colônia Refrescante Masculina 100 ml",
        descricao: "Colônia masculina com notas amadeiradas e verdes, inspirada na força e no frescor da floresta.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/12/Design-sem-nome-2022-12-01T115322.048.png"
    },
    {
        id: 391,
        marca: "Odorata",
        nome: "Zenit Rustic Deo Colônia Refrescante Masculina 100 ml",
        descricao: "Colônia masculina com fragrância rústica e marcante, para o homem autêntico e aventureiro.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/3232-zenit-rustic-deo-colonia-refrescante.jpg"
    },
    {
        id: 392,
        marca: "Odorata",
        nome: "Zenit Urban Deo Colônia Refrescante Masculina 100 ml",
        descricao: "Colônia masculina com fragrância moderna e vibrante, ideal para o homem da cidade.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/04/Zenit.png"
    },
    {
        id: 402,
        marca: "Odorata",
        nome: "Black City Miniatura Deo Parfum Masculino 25 ml",
        descricao: "Versão miniatura do Black City Deo Parfum, ideal para levar em viagens e manter-se perfumado.",
        preco: 52.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/3247.jpg"
    },
    {
        id: 403,
        marca: "Odorata",
        nome: "Black Deep Man Deo Parfum 100ml",
        descricao: "Fragrância masculina intensa e profunda, com notas marcantes para noites inesquecíveis.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Design-sem-nome-2022-11-21T152948.933.png"
    },
{
        id: 404,
        marca: "Odorata",
        nome: "Black Gold Deo Parfum Spray Feminino 100 ml",
        descricao: "Deo Parfum feminino com fragrância luxuosa e envolvente, para mulheres poderosas e marcantes.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/BLACK-GOLD-DEO-COLONIA-SPRAY-FEMININA-3163.jpg"
    },
    {
        id: 405,
        marca: "Odorata",
        nome: "Black Sport Deo Parfum Spray Masculina 100 ml",
        descricao: "Deo Parfum masculino com fragrância fresca e energética, ideal para o homem esportista e dinâmico.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/BLACK-SPORT-DEO-COLONIA-SPRAY-MASCULINA-3162.jpg"
    },
    {
        id: 406,
        marca: "Odorata",
        nome: "Botanicals Body Splash Bergamota e Frésia 200 ml",
        descricao: "Body splash com fragrância cítrica e floral de Bergamota e Frésia para perfumar e refrescar a pele.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Bergamota-e-Fresia.jpg"
    },
    {
        id: 407,
        marca: "Odorata",
        nome: "Botanicals Body Splash Lavanda e Peônia 200 ml",
        descricao: "Body splash com fragrância relaxante de Lavanda e Peônia para perfumar e acalmar a pele.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Lavanda-e-Peonia.jpg"
    },
    {
        id: 408,
        marca: "Odorata",
        nome: "Botanicals Body Splash Morango e Framboesa 200 ml",
        descricao: "Body splash com fragrância frutal adocicada de Morango e Framboesa para perfumar a pele.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Morango-e-Framboesa.jpg"
    },
    {
        id: 409,
        marca: "Odorata",
        nome: "Botanicals Body Splash Nectarina e Hibisco 200 ml",
        descricao: "Body splash com fragrância frutal floral de Nectarina e Hibisco para uma pele perfumada e fresca.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Nectarina-e-Hibisco.jpg"
    },
    {
        id: 410,
        marca: "Odorata",
        nome: "Botanicals Body Splash Orquídea e Blueberry 200 ml",
        descricao: "Body splash com fragrância exótica de Orquídea e Blueberry para uma pele perfumada e revitalizada.",
        preco: 59.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2024/04/Orquidea-e-Blueberry.jpg"
    },
    {
        id: 411,
        marca: "Odorata",
        nome: "Água Perfumada Melancia 100ml",
        descricao: "Água perfumada com a fragrância suculenta e refrescante de melancia. Perfuma e hidrata a pele.",
        preco: 54.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2025/01/Prancheta-13.jpg"
    },
    {
        id: 412,
        marca: "Odorata",
        nome: "Anne Deo Parfum Feminino 100 ml",
        descricao: "Deo Parfum feminino com fragrância sofisticada e marcante, para mulheres elegantes e inesquecíveis.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/04/Anne-Deo-Parfum-Spray-Feminino-100-ml-1.png"
    },
    {
        id: 413,
        marca: "Odorata",
        nome: "Black City Deo Parfum Spray Masculino 100 ml",
        descricao: "Deo Parfum masculino com fragrância urbana e moderna, para o homem cosmopolita e confiante.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Design-sem-nome-2022-11-21T154729.070.png"
    },
    {
        id: 414,
        marca: "Odorata",
        nome: "Black City Miniatura Deo Parfum Masculino 25 ml",
        descricao: "Versão miniatura do Black City Deo Parfum, ideal para levar em viagens e manter-se perfumado.",
        preco: 52.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2023/07/3247.jpg"
    },
    {
        id: 415,
        marca: "Odorata",
        nome: "Black Deep Man Deo Parfum 100ml",
        descricao: "Fragrância masculina intensa e profunda, com notas marcantes para noites inesquecíveis.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2022/01/Design-sem-nome-2022-11-21T152948.933.png"
    },
    {
        id: 416,
        marca: "Odorata",
        nome: "Black Gold Deo Parfum Spray Feminino 100 ml",
        descricao: "Deo Parfum feminino com fragrância luxuosa e envolvente, para mulheres poderosas e marcantes.",
        preco: 149.99,
        imagem: "https://odorata.com.br/wp-content/uploads/2021/11/BLACK-GOLD-DEO-COLONIA-SPRAY-FEMININA-3163.jpg"
    }
    
    ];
    

    // Estado da Aplicação
    let sacola = []; // Armazena objetos com id e quantidade

    // --- FUNÇÕES ---

    function renderizarProdutos() {
        // Limpa os catálogos antes de renderizar
        catalogoRaccoDiv.innerHTML = '';
        catalogoAbelhaRainhaDiv.innerHTML = '';
        catalogoOdorataDiv.innerHTML = '';

        produtos.forEach(produto => {
            const produtoHtml = `
                <div class="produto" data-id="${produto.id}">
                    <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.onerror=null;this.src='https.placehold.co/300x300/f0f0f0/ccc?text=Imagem+Indisponível';">
                    <p class="marca">${produto.marca}</p>
                    <h3>${produto.nome}</h3>
                    <p class="descricao">${produto.descricao}</p>
                    <p class="preco">R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                    <button class="add-sacola-btn">Adicionar à Sacola</button>
                </div>
            `;

            // Adiciona o produto à sua respectiva seção de marca
            if (produto.marca === 'Racco') {
                catalogoRaccoDiv.innerHTML += produtoHtml;
            } else if (produto.marca === 'Abelha Rainha') {
                catalogoAbelhaRainhaDiv.innerHTML += produtoHtml;
            } else if (produto.marca === 'Odorata') {
                catalogoOdorataDiv.innerHTML += produtoHtml;
            }
        });
    }

    function adicionarASacola(produtoId) {
        const itemExistente = sacola.find(item => item.id === produtoId);
        if (itemExistente) {
            itemExistente.quantidade++;
        } else {
            sacola.push({ id: produtoId, quantidade: 1 });
        }
        atualizarTudo();
    }
    
    function alterarQuantidade(produtoId, acao) {
        const itemNaSacola = sacola.find(item => item.id === produtoId);
        if (!itemNaSacola) return;

        if (acao === 'aumentar') {
            itemNaSacola.quantidade++;
        } else if (acao === 'diminuir') {
            itemNaSacola.quantidade--;
            if (itemNaSacola.quantidade <= 0) {
                removerDaSacola(produtoId);
            }
        }
        atualizarTudo();
    }

    function removerDaSacola(produtoId) {
        sacola = sacola.filter(item => item.id !== produtoId);
        atualizarTudo();
    }

    function renderizarSacola() {
        sacolaItensDiv.innerHTML = '';
        if (sacola.length === 0) {
            sacolaItensDiv.innerHTML = '<p>Sua sacola está vazia.</p>';
            return;
        }

        sacola.forEach(item => {
            const produto = produtos.find(p => p.id === item.id);
            if (!produto) return; // Adiciona uma verificação de segurança
            
            const itemDiv = document.createElement('div');
            itemDiv.className = 'sacola-item';
            itemDiv.dataset.id = item.id; // Adiciona o ID para referência no event listener
            itemDiv.innerHTML = `
                <img src="${produto.imagem}" alt="${produto.nome}" onerror="this.onerror=null;this.src='https.placehold.co/300x300/f0f0f0/ccc?text=Imagem+Indisponível';">
                <div class="sacola-item-info">
                    <h4>${produto.nome}</h4>
                    <p>R$ ${produto.preco.toFixed(2).replace('.', ',')}</p>
                </div>
                <div class="sacola-item-controles">
                    <button class="sacola-btn-diminuir" title="Diminuir quantidade">-</button>
                    <span>${item.quantidade}</span>
                    <button class="sacola-btn-aumentar" title="Aumentar quantidade">+</button>
                    <button class="remover-item" title="Remover item"><i class="fas fa-trash"></i></button>
                </div>
            `;
            sacolaItensDiv.appendChild(itemDiv);
        });
    }
    
    function atualizarContadoresETotais() {
        const totalItens = sacola.reduce((total, item) => total + item.quantidade, 0);
        contadorSacolaSpan.innerText = totalItens;

        const valorTotal = sacola.reduce((total, item) => {
            const produto = produtos.find(p => p.id === item.id);
            return total + (produto.preco * item.quantidade);
        }, 0);

        const valorFormatado = `R$ ${valorTotal.toFixed(2).replace('.', ',')}`;
        totalSacolaSpan.innerText = valorFormatado;
        sacolaTotalValorSpan.innerText = valorFormatado;
    }
    
    function atualizarTudo() {
        atualizarContadoresETotais();
        renderizarSacola();
        // Futuramente, podemos salvar no localStorage para persistir os dados
    }

    function toggleModal() {
        modalSacola.classList.toggle('ativo');
    }

    function enviarPedidoWhatsApp() {
        if (sacola.length === 0) {
            alert('Sua sacola está vazia!');
            return;
        }

        let mensagem = 'Olá! Gostaria de fazer o seguinte pedido:\n\n';
        let valorTotal = 0;

        sacola.forEach(item => {
            const produto = produtos.find(p => p.id === item.id);
            mensagem += `${item.quantidade}x - ${produto.nome} (R$ ${produto.preco.toFixed(2).replace('.', ',')})\n`;
            valorTotal += produto.preco * item.quantidade;
        });

        mensagem += `\n*Valor Total: R$ ${valorTotal.toFixed(2).replace('.', ',')}*`;
        const linkWhatsApp = `https://wa.me/${seuNumeroWhatsApp}?text=${encodeURIComponent(mensagem)}`;
        window.open(linkWhatsApp, '_blank');
    }

    // --- EVENT LISTENERS ---

    document.querySelector('main').addEventListener('click', (event) => {
        if (event.target.classList.contains('add-sacola-btn')) {
            const produtoId = parseInt(event.target.closest('.produto').dataset.id);
            adicionarASacola(produtoId);
        }
    });

    // Event listener para os controles dentro da sacola (usando delegação)
    sacolaItensDiv.addEventListener('click', (event) => {
        const target = event.target;
        const itemDiv = target.closest('.sacola-item');
        if (!itemDiv) return;

        const produtoId = parseInt(itemDiv.dataset.id);

        if (target.closest('.sacola-btn-aumentar')) {
            alterarQuantidade(produtoId, 'aumentar');
        } else if (target.closest('.sacola-btn-diminuir')) {
            alterarQuantidade(produtoId, 'diminuir');
        } else if (target.closest('.remover-item')) {
            removerDaSacola(produtoId);
        }
    });

    // Adiciona o evento de clique para os dois botões de finalizar
    finalizarPedidoButton.addEventListener('click', enviarPedidoWhatsApp);
    finalizarPedidoModalButton.addEventListener('click', enviarPedidoWhatsApp);

    // Listeners para abrir e fechar o modal
    sacolaIcone.addEventListener('click', toggleModal);
    modalFechar.addEventListener('click', toggleModal);
    modalSacola.addEventListener('click', (event) => {
        if (event.target === modalSacola) {
            toggleModal();
        }
    });
    
    // --- INICIALIZAÇÃO ---
    renderizarProdutos();
    atualizarTudo();
});
