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
        id: 417,
        marca: "Racco",
        nome: "Mousse Spray Depilatório Depeeling Racco, 150ml",
        descricao: "Depilação prática e sem dor. Remove os pelos em minutos, deixando a pele lisa, macia e hidratada.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1610_mousse-spray-depilatorio-depeeling-ceef7e1570b98299ee17387541819472-1024-1024.webp"
    },
    {
        id: 418,
        marca: "Racco",
        nome: "Desodorante Íntimo Jato Seco, 100ml",
        descricao: "Fragrância suave e refrescante de longa duração para a região íntima, com jato seco para maior conforto.",
        preco: 43.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/desodorante-intimo-jato-seco-racco-f98f96964b3678f3d817387543970419-1024-1024.webp"
    },
    {
        id: 419,
        marca: "Racco",
        nome: "Sabonete Líquido Íntimo Feminino, 210ml",
        descricao: "Para a higiene íntima diária, promove uma limpeza delicada e proporciona uma agradável sensação de frescor.",
        preco: 43.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/intimo-nova-embalagem-racco-995cf88427faf5549717504305750319-1024-1024.webp"
    },
    {
        id: 420,
        marca: "Racco",
        nome: "Mousse Spray Depilatório Depeeling Soft Racco, 150ml",
        descricao: "Fórmula suave para depilação sem dor. Equilibra eficiência e hidratação, com tecnologia antiodor.",
        preco: 82.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1616_depeeling-soft-f92e78f66be5088cc217465502919485-1024-1024.webp"
    },
    {
        id: 421,
        marca: "Racco",
        nome: "Creme Desodorante Antitranspirante Regulateur Racco, 60g",
        descricao: "Potente ação antitranspirante em bisnaga, reduz o mau odor e evita o ressecamento das axilas.",
        preco: 23.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1011_creme-desodorante-antitranspirante-regulateur-racco-bisnaga-b0f47ad9718d0f6e5d17387591856778-1024-1024.webp"
    },
    {
        id: 422,
        marca: "Racco",
        nome: "Creme Desodorante Antitranspirante Regulateur Racco, 60g",
        descricao: "Potente ação antitranspirante em pote, reduz o mau odor e evita o ressecamento das axilas.",
        preco: 27.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-desodorante-antitranspirante-regulateur-racco-60g-36d46eb7508f55390f17387592097485-1024-1024.webp"
    },
    {
        id: 423,
        marca: "Racco",
        nome: "Sérum Corporal Anticelulite Com DMAE Ciclos Racco, 190ml",
        descricao: "Sérum com DMAE e ativos que reduzem a celulite, atenuam a flacidez e hidratam a pele.",
        preco: 159.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5501_serum-anticelulite-ciclos_valvula-3efe091abb7f7cced217387528762158-1024-1024.webp"
    },
    {
        id: 424,
        marca: "Racco",
        nome: "Gel Hidratante de Massagem Intimo Racco, 65ml",
        descricao: "Gel à base de Glicerina Vegetal que hidrata e amacia a pele, ideal para massagens íntimas.",
        preco: 38.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1018_gel-hidratante-de-massagem-intimo-racco-0d9c5705cb8ad4e6cc17387542736267-1024-1024.webp"
    },
    {
        id: 425,
        marca: "Racco",
        nome: "Desodorante Roll-on Antiperspirante Regulateur Racco, 55ml",
        descricao: "Potente ação antiperspirante que combate o mau odor, com aplicação prática e sensação refrescante.",
        preco: 24.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1002_desodorante-roll-on-regulateur-63c473c8e8ee2c036417387591692771-1024-1024.webp"
    },
    {
        id: 426,
        marca: "Racco",
        nome: "Deo Colônia Leandro Racco, 100ml",
        descricao: "Fragrância herbal sensual com notas de Absinto, Artemísia, Flor de Laranjeira, Lavanda e Baunilha.",
        preco: 149.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-leandro-racco-3914f225a5ca8aeb9817387570392670-1024-1024.webp"
    },
    {
        id: 427,
        marca: "Racco",
        nome: "Sabonete Líquido Íntimo For Men Racco, 180ml",
        descricao: "Proporciona frescor duradouro, equilibra o pH e tem ação calmante com Provitamina B5 e Óleo de Menta.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ce79509f-35bc-46a1-9ac4-0d1b7f2bf553-16204f1df4879ca74317506857583761-1024-1024.webp"
    },
    {
        id: 428,
        marca: "Racco",
        nome: "Spray Perfumado Desodorante Intimo Morango Feminino Racco, 120ml",
        descricao: "Desodorização eficaz da área íntima com uma deliciosa e suave fragrância de Morango.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1036_spray-perfumado-desodorante-intimo-morango-f6fd81394ef00fa5be17387543142824-1024-1024.webp"
    },
    {
        id: 429,
        marca: "Racco",
        nome: "Sabonete Líquido Intimo Feminino Morango Racco, 210ml",
        descricao: "Com Óleo Essencial de Menta para uma agradável sensação de refrescância e limpeza delicada.",
        preco: 43.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1026_intimo-morango-8f455eceab1ac964b717387542935185-1024-1024.webp"
    },
    {
        id: 430,
        marca: "Racco",
        nome: "Sabonete Líquido para Cuidado da Região Anal Procto Íntimo, 120ml",
        descricao: "Com Camomila e Arruda, proporciona limpeza segura, conforto, bem-estar e efeito calmante.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/3bad6eaa-15f0-4aa3-9199-1e83de2a65db-dfd2802a9e36bd37f517501652712626-1024-1024.webp"
    },
    {
        id: 431,
        marca: "Racco",
        nome: "Creme Desodorante para os Pés Principles Racco, 50g",
        descricao: "Com cânfora e mentol, combate odores dos pés, previne frieiras e mantém a pele hidratada.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-desodorante-para-os-pes-principles-racco-50g-6c585438a0eb070b9117387575253741-1024-1024.webp"
    },
    {
        id: 432,
        marca: "Racco",
        nome: "Creme Dental com Flúor Multi Aloe Racco, 90g",
        descricao: "Com sabor de menta, previne cáries e gengivite, deixando os dentes mais brancos e o hálito agradável.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1194_creme-dental-multi-aloe-ad3465be7c304acf9717387560562689-1024-1024.webp"
    },
    {
        id: 433,
        marca: "Racco",
        nome: "Desodorante Íntimo Jato Seco For Men Racco, 100ml",
        descricao: "Ação refrescante e perfume suave que prolongam a sensação de limpeza, com toque seco.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1153_formen_desodorante-intimo-8fd2fa6ff883bc84e517387542270554-1024-1024.webp"
    },
    {
        id: 434,
        marca: "Racco",
        nome: "Sabonete Líquido Intimo 50+ Feminino Racco, 180ml",
        descricao: "Com Ácido Hialurônico e prebióticos, limpa, hidrata e protege a região íntima da mulher madura.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1045_sabonete-intimo-50-5e6cabd4bacc62ebc317387543525924-1024-1024.webp"
    },
    {
        id: 435,
        marca: "Racco",
        nome: "Gel de Aloe Vera Fortifier Multi Aloe, 100ml",
        descricao: "Gel concentrado de Aloe Vera que hidrata e refresca. Perfeito para aplicar sobre a pele irritada.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1189_gel-de-aloe-vera-fortifier-multi-aloe-55911da7a36518605017387560272519-1024-1024.webp"
    },
    {
        id: 436,
        marca: "Racco",
        nome: "IOS Coffee - Suplemento Alimentar em Pó com Ácido Clorogênico Sabor Chocovanilla, 200g",
        descricao: "Bebida cremosa sabor Café com Chocovanilla que auxilia na perda de peso e tem ação antioxidante.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ios-coffee-suplemento-alimentar-em-po-com-acido-clorogenico-sabor-chocovanilla-b4ec6f669ca37cf1b217387547965180-1024-1024.webp"
    },
    {
        id: 437,
        marca: "Racco",
        nome: "Deo Colônia Nu Racco, 100ml",
        descricao: "Fragrância masculina moderna e marcante, com notas refrescantes de Limão Siciliano, Lavanda e Gerânio.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-nu-racco-135b9a6e94491d15cd17387571629471-1024-1024.webp"
    },
    {
        id: 438,
        marca: "Racco",
        nome: "IOS Aloe Life - Suplemento Pronto para Beber com Vitamina C - Sabor Aloe Vera Racco, 1l",
        descricao: "Suplemento de Vitamina C pronto para beber com sabor de Aloe Vera, que protege e fortalece o organismo.",
        preco: 129.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/949_ios-aloe-life-suplemento-pronto-para-beber-com-vitamina-c-sabor-aloe-vera-456763d7e83e742f8f17387546505217-1024-1024.webp"
    },
    {
        id: 439,
        marca: "Racco",
        nome: "Desodorante Intimo Tec Racco, 50ml",
        descricao: "Renova a aparência, hidrata e perfuma a região íntima com exclusiva tecnologia de controle de odor.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/desodorante-intimo-tec-racco-1032-403829e632da2ab01817387544276150-1024-1024.webp"
    },
    {
        id: 440,
        marca: "Racco",
        nome: "S.O.S Aloe Spray Multifuncional Multi Aloe Racco, 200ml",
        descricao: "Spray com alto teor de Aloe Vera que hidrata, acalma e refresca a pele. Indicado como pós-sol e para cabelos.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/s-o-s-aloe-spray-multifuncional-multi-aloe-racco-f291268be577022d4d17387561306538-1024-1024.webp"
    },
    {
        id: 441,
        marca: "Racco",
        nome: "Kit Intimo",
        descricao: "Kit com produtos essenciais para o cuidado íntimo, proporcionando limpeza, frescor e proteção.",
        preco: 83.41,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/kit-1006_1015-637f9b5dc7a27e38ff17423201958418-1024-1024.webp"
    },
    {
        id: 442,
        marca: "Racco",
        nome: "Deo Colônia Masculina LF Racco, 100ml",
        descricao: "Fragrância icônica que celebra o poder masculino, com notas cítricas, especiadas e amadeiradas.",
        preco: 149.95,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/220_deo-colonia-lf-a6a78c0bdad2da7c4917387564604827-1024-1024.webp"
    },
    {
        id: 443,
        marca: "Racco",
        nome: "IOS Maxxi 30+ em Cápsulas Racco, 30 cápsulas",
        descricao: "Suplemento com minerais antioxidantes que previnem o envelhecimento e estimulam a produção de colágeno.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/954_ios-maxxi30-2e7a90b81f7f03b56417394689335018-1024-1024.webp"
    },
    {
        id: 444,
        marca: "Racco",
        nome: "Spray de Hidratação Intensiva para os Pés Principles Racco, 50ml",
        descricao: "Com derivado da Ureia, trata ressecamentos, fissuras e asperezas dos pés, com hidratação intensiva.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1307_spray-de-hidratacao-intensiva-para-os-pes-principles-racco-cf938dfcb2c453db7517412044602810-1024-1024.webp"
    },
    {
        id: 445,
        marca: "Racco",
        nome: "Sérum DMAE + Polissacarídeos RaccoDerma,10ml",
        descricao: "Sérum com efeito tensor e ação antipoluição, que repara e reestrutura a pele, deixando-a mais firme.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5537_serum-dmae-e-polissacarideos-raccoderma-ea3c545baf336f901a17387587492684-1024-1024.webp"
    },
    {
        id: 446,
        marca: "Racco",
        nome: "Creme Revitalizante para Face e Corpo Multi Aloe Racco, 50g",
        descricao: "Com extratos de Aloe e Confrei, hidrata profundamente, protege a pele e possui propriedades calmantes.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-revitalizante-para-face-e-corpo-multi-aloe-racco-62a8ff5ffd08e6af5817387560961069-1024-1024.webp"
    },
    {
        id: 447,
        marca: "Racco",
        nome: "Deo Colônia Emoções Masculino Roberto Carlos Racco, 50ml",
        descricao: "Fragrância com acordes refrescantes de Bergamota, Mandarina, Grapefruit e notas amadeiradas.",
        preco: 149.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/368_deo-colonia-emocoes-60cd994a5a163cecf317387566479003-1024-1024.webp"
    },
    {
        id: 448,
        marca: "Racco",
        nome: "Sabonete Líquido Facial de Algas Marinhas ARL Racco, 150g",
        descricao: "Com extrato de Algas e Pantenol, limpa, hidrata e combate os radicais livres. Para peles normais a secas.",
        preco: 45.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/sabonete-liquido-facial-de-algas-marinhas-arl-racco-150g-316f76faf25d0f90f517387527416699-1024-1024.webp"
    },
    {
        id: 449,
        marca: "Racco",
        nome: "Batom Líquido Luzes Racco – Cor de Boca, 3,5g",
        descricao: "Batom líquido com acabamento matte, alta cobertura e longa duração na clássica Cor de Boca.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/batom-02-25_cor-de-boca-babd04c728edee51c817425646033449-1024-1024.webp"
    },
    {
        id: 450,
        marca: "Racco",
        nome: "Gel Hidratante de Massagem Morango Intimo Racco, 65ml",
        descricao: "Gel para massagem íntima com deliciosa fragrância de morango. Hidrata e proporciona sensação agradável.",
        preco: 46.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/gel-hidratante-de-massagem-intimo-morango-racco-0760d2d4e9f8bc710617387545056388-1024-1024.webp"
    },
    {
        id: 451,
        marca: "Racco",
        nome: "Espuma Micelar de Limpeza Facial Priorage Racco, 100ml",
        descricao: "Limpeza suave com Ácido Hialurônico e escovinha de silicone para massagem. Pele macia e purificada.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5541_espuma-micelar-facial-af17480b025eb5404217374642964891-1024-1024.webp"
    },
    {
        id: 452,
        marca: "Racco",
        nome: "Base Cremosa com Ácido Hialurônico e Vitamina E Luzes, 40g",
        descricao: "Base de alta cobertura com Ácido Hialurônico e Vitamina E, que hidrata e tem ação antioxidante.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/12-11_base-cremosa-luzes-66d80114fd726b78e117401618110384-1024-1024.webp"
    },
    {
        id: 453,
        marca: "Racco",
        nome: "IOS Aloe Life - Suplemento Pronto para Beber com Vitamina C - Sabor Aloe Vera e Laranja, 1l",
        descricao: "Suplemento de Vitamina C com sabor de Aloe Vera e Laranja, que protege e fortalece o organismo.",
        preco: 109.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ios-aloe-life-suplemento-pronto-para-beber-com-vitamina-c-sabor-aloe-vera-e-laranja-d9813863420ec9ad4d17387547276191-1024-1024.webp"
    },
    {
        id: 454,
        marca: "Racco",
        nome: "Sabonete de Algas Marinhas Savonette ARL Racco - 90g",
        descricao: "Sabonete em barra com extrato de algas para limpeza diária, hidratação e ação antioxidante.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1380_sabonete-algas-arl-7354a393ce1eb18c3017387527101005-1024-1024.webp"
    },
    {
        id: 455,
        marca: "Racco",
        nome: "Deo Colônia Feminina Racco Oriental, 45ml",
        descricao: "Combinação de notas florais e amadeiradas que exalta a feminilidade e proporciona presença marcante.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/221_deo-colonia-racco-oriental_feminino_frasco-e38a1b515483ac6d5d17387565019943-1024-1024.webp"
    },
    {
        id: 456,
        marca: "Racco",
        nome: "Deo Colônia Feminina Gi Racco, 100ml",
        descricao: "Fragrância que traz uma explosão frutada e picante de Lichia, Pimenta Rosa e Mandarina.",
        preco: 299.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/216_deo-colonia-gi-23c786a5c4677eaaf617387564257100-1024-1024.webp"
    },
    {
        id: 457,
        marca: "Racco",
        nome: "Deo Colônia Feminina Lilac Racco, 100ml",
        descricao: "Combinação intensa e vibrante de Cassis, Grapefruit e Mandarina com Jasmim, Muguet e Damasco.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/214_deocolonia_lilac-f66e77fb36b546d16f17387563959765-1024-1024.webp"
    },
    {
        id: 458,
        marca: "Racco",
        nome: "Sérum Ácido Glicólico + Niacinamida Raccoderma, 10ml",
        descricao: "Sérum concentrado que hidrata e promove um peeling suave, acelerando a renovação celular.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/serum-acido-glicolico-niacinamida-raccoderma-07a609e1c73b45d07517413549559761-1024-1024.webp"
    },
    {
        id: 459,
        marca: "Racco",
        nome: "Máscara Facial Raccoderma, 60g",
        descricao: "Máscara com Argila Branca que refresca, suaviza a textura, hidrata e purifica a pele.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/mascara-facial-raccoderma-15b89b08e74fc2981717387589033140-1024-1024.webp"
    },
    {
        id: 460,
        marca: "Racco",
        nome: "IOS Collagen Life - Colágeno Hidrolisado em Pó Racco, 200g",
        descricao: "100% Peptídeos de Colágeno que melhoram a aparência, a elasticidade e a firmeza da pele.",
        preco: 145.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/928_ios-collagen-life-823abb9b0c033673e217387546283025-1024-1024.webp"
    },
    {
        id: 461,
        marca: "Racco",
        nome: "Deo Colônia Feminina Yunick, 100ml",
        descricao: "Fragrância gourmand floral marcante, com doçura da Baunilha e refrescância da Flor de Laranjeira.",
        preco: 165.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-feminina-yunick-db7416ebd42289d4fd17387570076545-1024-1024.webp"
    },
    {
        id: 462,
        marca: "Racco",
        nome: "Sérum Corporal Carnivore Ciclos Racco, 10ml",
        descricao: "Com hidrolisado de planta carnívora, estimula a quebra da gordura e melhora os contornos corporais.",
        preco: 44.95,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5529_serum-carnivore-9e975f9079b72a0cc017387529331510-1024-1024.webp"
    },
    {
        id: 463,
        marca: "Racco",
        nome: "Hidratante Corporal Gi, 130ml",
        descricao: "Hidratante desodorante com textura leve, Óleo de Rosa Mosqueta e Polissacarídeos para maciez.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/2925_hidratante-gi-33695b9403dacade3417387567426473-1024-1024.webp"
    },
    {
        id: 464,
        marca: "Racco",
        nome: "IOS Coenzima Q10 - Suplemento Alimentar de Coenzima Q10 com Vitamina E em Cápsulas Racco, 30 cápsulas",
        descricao: "Suplemento com Coenzima Q10 e Vitamina E para energia celular, saúde cardiovascular e pele saudável.",
        preco: 129.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/965_ios-coenzima-q10-suplemento-alimentar-de-coenzima-q10-vitamina-e-b42f26e039de297d6817485262247084-1024-1024.webp"
    },
    {
        id: 465,
        marca: "Racco",
        nome: "Máscara Nanotecnológica Serie Premium Tratamento Racco, 230g",
        descricao: "Máscara com Nanopartículas de Sericina, Queratina e Colágeno para regeneração e hidratação dos fios.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1810_mascara-nano-serie-premium-ae2e8b12b3d8ee765617387594966268-1024-1024.webp"
    },
    {
        id: 466,
        marca: "Racco",
        nome: "Água Micelar Ciclos Racco, 150ml",
        descricao: "Água micelar que limpa, demaquila, purifica, suaviza e reequilibra a pele em um único passo.",
        preco: 77.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/agua-micelar-ciclos-d-racco-d62591279fecd5016717387530384496-1024-1024.webp"
    },
    {
        id: 467,
        marca: "Racco",
        nome: "Batom Líquido Luzes Racco – Rosa Nude, 3,5g",
        descricao: "Batom líquido com acabamento matte, alta cobertura e longa duração na elegante cor Rosa Nude.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/batom-02-27_rosa-nude-d65832cb5aff85124417425650381384-1024-1024.webp"
    },
    {
        id: 468,
        marca: "Racco",
        nome: "Protetor Solar Facial FPS 50 com Cor Soleil Racco, 40g",
        descricao: "Alta proteção solar com Vitamina E, efeito tonalizante natural e toque seco com acabamento matte.",
        preco: 129.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/3051_protetor-facial-com-cor-soleil_novo-bfc75d60f555af62b117387595212533-1024-1024.webp"
    },
    {
        id: 469,
        marca: "Racco",
        nome: "Gel Creme Facial Glicerina + Vitamina E RaccoDerma, 60g",
        descricao: "Hidratante antioxidante para os primeiros sinais de envelhecimento, com textura refrescante e toque seco.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5531_gel-creme-facial-glicerina-e-vitamina-e-raccoderma-ec38ca1b1b23c4f36217387587138594-1024-1024.webp"
    },
    {
        id: 470,
        marca: "Racco",
        nome: "Fibra Life Refresh - Pó para Bebida com Fibra Prebiótica - Chá Verde Sabor Limão Racco, 200g",
        descricao: "Bebida refrescante com Chá Verde e Mate que equilibra a flora intestinal e ajuda a gerenciar o peso.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/915_fibra-refresh-cha-verde-limao-5b0911084081855a1617387549590361-1024-1024.webp"
    },
    {
        id: 471,
        marca: "Racco",
        nome: "Creme Relaxante para as Pernas Defatigant Multi Aloe, 120g",
        descricao: "Creme com Aloe Vera que relaxa e refresca pernas e pés cansados, aumentando a tonicidade da pele.",
        preco: 58.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1425_creme-relaxante-para-as-pernas-defatigant-multi-aloe-1e486824d5d2452cf517387560705558-1024-1024.webp"
    },
    {
        id: 472,
        marca: "Racco",
        nome: "FLUIDO ENDURECEDOR DE UNHAS LUZES RACCODERMA 7 ML - 50/10",
        descricao: "Fortalece e hidrata unhas com Queratina, Pantenol e Biotina, evitando quebra e lascas.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/50-10_fluido-endurecedor-de-unhas-luzes-4c466ade7b10c535ff17387559202374-1024-1024.webp"
    },
    {
        id: 473,
        marca: "Racco",
        nome: "Protetor Solar Facial FPS 70 Soleil Racco, 40g",
        descricao: "Altíssima proteção facial com ação antioxidante, que previne os sinais do fotoenvelhecimento.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/3054_protetor-solar-facial-fps-70-soleil-racco-65faf9da3a4ccba11b17387595480631-1024-1024.webp"
    },
    {
        id: 474,
        marca: "Racco",
        nome: "Deo Colônia Masculina Oxus Racco, 100ml",
        descricao: "Perfume oriental amadeirado com notas de Lima, Gengibre e Pimenta, para homens de estilo autêntico.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/177_deo-colonia-oxus-1e75bde904c3c61fcf17387563363339-1024-1024.webp"
    },
    {
        id: 475,
        marca: "Racco",
        nome: "Deo Colônia Masculina Thesu Racco, 100ml",
        descricao: "Fragrância luxuosa e ousada com notas quentes de Gengibre, Pimenta e Noz-moscada.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-masculina-thesu-racco-87d3b6336267c635e717387570744527-1024-1024.webp"
    },
    {
        id: 476,
        marca: "Racco",
        nome: "Sérum Rosa Mosqueta + Esqualano Vegetal RaccoDerma, 10ml",
        descricao: "Sérum com textura leve que hidrata, protege e restaura a elasticidade da pele.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5538_serum-rosa-mosqueta-e-esqualano-vegetal-raccoderma-096b38012d2ec90cf117387587665125-1024-1024.webp"
    },
    {
        id: 477,
        marca: "Racco",
        nome: "Água Perfumada Overdose Sensual Racco, 210ml",
        descricao: "Fragrância oriental sensual com notas de Laranja, Pêssego, Jasmim, Chocolate e Baunilha.",
        preco: 149.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/agua-perfumada-overdose-sensual-racco-f50c1e18fde47ed99417387561778329-1024-1024.webp"
    },
    {
        id: 478,
        marca: "Racco",
        nome: "Óleo Relaxante Desodorante para as Pernas Defatigant Multi Aloe Racco, 100ml",
        descricao: "Óleo com Aloe Vera que proporciona relaxamento, refrescância e hidratação para pernas e pés cansados.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/oleo-relaxante-desodorante-para-as-pernas-defatigant-multi-aloe-racco-214295ffae22756ccb17387561109169-1024-1024.webp"
    },
    {
        id: 479,
        marca: "Racco",
        nome: "Batom Líquido Luzes Racco – Cereja, 3,5g",
        descricao: "Batom líquido com acabamento matte, alta cobertura e longa duração na vibrante cor Cereja.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/batom-02-26_cereja-a6cc2f7ee1487fd46617425648803909-1024-1024.webp"
    },
    {
        id: 480,
        marca: "Racco",
        nome: "Overdose Blanc Hidratante Desodorante Corporal Chocolate Branco Racco, 150g",
        descricao: "Hidratante com Manteiga de Karité e notas de Chocolate Branco para um toque doce e aveludado.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1121_overdose_chocoblanc-cef562e0df3c960fa917387561549436-1024-1024.webp"
    },
    {
        id: 481,
        marca: "Racco",
        nome: "Óleo Essencial Corporal Alecrim Bio Therapy Racco, 10ml",
        descricao: "Óleo essencial de Alecrim que estimula e revigora o corpo e a mente, aumentando a disposição.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1098_oleo-alecrim-bio-therapy-26ec5ee75c7c7b4a4417387528401567-1024-1024.webp"
    },
    {
        id: 482,
        marca: "Racco",
        nome: "Desodorante Roll-on Lutti Racco, 55ml",
        descricao: "Proteção eficaz contra odores com fragrância suave e delicada, com ação prebiótica.",
        preco: 21.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/341_desodorante-roll-on-lutti-dd692f4801ef7fa76717387581906361-1024-1024.webp"
    },
    {
        id: 483,
        marca: "Racco",
        nome: "Deo Colônia Feminina Kiaora Racco, 100ml",
        descricao: "Fragrância floriental frutal que evoca sensualidade, com notas de Laranja, Jasmim e Lírio do Vale.",
        preco: 165.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-feminina-kiaora-racco-c4a3498ad1d25de19c17387569710644-1024-1024.webp"
    },
    {
        id: 484,
        marca: "Racco",
        nome: "Protetor Solar Facial FPS 30 Soleil Racco, 40g",
        descricao: "Protege a pele contra os sinais de fotoenvelhecimento, com ação antioxidante e toque seco.",
        preco: 79.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/protetor-solar-facial-fps-30-soleil-racco-d5ac7f1b26778dd7f117387595924420-1024-1024.webp"
    },
    {
        id: 485,
        marca: "Racco",
        nome: "Sabonete Líquido Mais Pura Racco, 250ml",
        descricao: "Sabonete líquido com espuma cremosa que proporciona uma agradável sensação no banho.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/sabonete-liquido-mais-pura-racco-68c282b4070c4ee33917387560063314-1024-1024.webp"
    },
    {
        id: 486,
        marca: "Racco",
        nome: "Sérum Ácido Hialurônico Ciclos Racco, 40ml",
        descricao: "Sérum que hidrata, melhora rugas finas e deixa a pele mais firme, elástica e viçosa.",
        preco: 158.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/serum-acido-hialuronico-34a19ede614b9c3fe817387539461291-1024-1024.webp"
    },
    {
        id: 487,
        marca: "Racco",
        nome: "Creme Hidratante Facial Priorage 60+ Ciclos Racco, 30g",
        descricao: "Creme com proteção e hidratação potentes que restaura a pele, melhora o contorno facial e reduz sinais.",
        preco: 159.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ciclos-priorage-60-racco-c2f5850d9e9f562d3817387537230302-1024-1024.webp"
    },
    {
        id: 488,
        marca: "Racco",
        nome: "Tônico Facial Ciclos Racco, 150ml",
        descricao: "Tônico sem álcool que complementa a limpeza diária, regula o pH da pele e normaliza os poros dilatados.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/tonico-facial-ciclos-dracco-76db459b3003a33ce217387541178490-1024-1024.webp"
    },
    {
        id: 489,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Secret Berry Overdose Racco, 220g",
        descricao: "Hidratante corporal com fragrância envolvente de frutas vermelhas, deixando a pele macia e perfumada.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1145_overdose_hid-secretberry-8a4f4674665468bef817466252507286-1024-1024.webp"
    },
    {
        id: 490,
        marca: "Racco",
        nome: "Body Splash Desodorante Secret Berry Overdose Racco, 200ml",
        descricao: "Body splash com fragrância de frutas vermelhas para perfumar e refrescar a pele ao longo do dia.",
        preco: 72.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1146_overdose_bs-secretberry-2c2d24c5ce33dc256b17466251689719-1024-1024.webp"
    },
    {
        id: 491,
        marca: "Racco",
        nome: "Sabonete Líquido Corporal Erva Doce Racco, 250ml",
        descricao: "Sabonete líquido com a clássica e suave fragrância de Erva Doce, que limpa e perfuma a pele.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1917-a65ed4c9c502e540f017374867055519-1024-1024.webp"
    },
    {
        id: 492,
        marca: "Racco",
        nome: "Gel Hidratante Facial Lipogel Racco, 60g",
        descricao: "Hidratação suave para peles oleosas. Equilibra a oleosidade excessiva sem obstruir os poros.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1478_gel-hidratante-facial-lipogel-0526442e1464ee129317484339488407-1024-1024.webp"
    },
    {
        id: 493,
        marca: "Racco",
        nome: "Creme Hidratante Facial Priorage 30+ Ciclos Racco, 30g",
        descricao: "Creme que acelera a produção de colágeno, melhora linhas de expressão e combate o envelhecimento precoce.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-hidratante-facial-priorage-30-ciclos-racco-d91599e31f5d0e084f17387538372493-1024-1024.webp"
    },
    {
        id: 494,
        marca: "Racco",
        nome: "Condicionador Mais Pura Racco, 250g",
        descricao: "Condicionador que torna o pentear mais fácil e mantém a fragrância nos fios por mais tempo.",
        preco: 23.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/condicionador-mais-pura-8e87970bb3fa1fa0e417387559726337-1024-1024.webp"
    },
    {
        id: 495,
        marca: "Racco",
        nome: "Creme Hidratante Facial Priorage 50+ Racco, 30g",
        descricao: "Creme com Phyto Retinol e Ácido Hialurônico que hidrata, firma e ilumina as peles maduras.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5539_creme-facial-50-81e909b280aba47c6a17476614565615-1024-1024.webp"
    },
    {
        id: 496,
        marca: "Racco",
        nome: "Sabonete Líquido Cintilante Rubi Racco, 150ml",
        descricao: "Sabonete líquido com partículas cintilantes e fragrância sensual para uma pele macia e perfumada.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1178_sabonete-cintilante-rubi-879acf59a12603523317387593894832-1024-1024.webp"
    },
    {
        id: 497,
        marca: "Racco",
        nome: "Sérum Hidratante para a Área dos Olhos Optique Ciclos Racco, 15ml",
        descricao: "Sérum com Ouro em pó, DMAE e Caviar Negro. Possui ação antioxidante e anti-idade para a área dos olhos.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5527_serum-hidratante-para-area-dos-olhos-optique-ciclos-bc50a144668468a6d417387529084494-1024-1024.webp"
    },
    {
        id: 498,
        marca: "Racco",
        nome: "Sérum Facial Noite Ciclos Racco, 30ml",
        descricao: "Sérum noturno com Diamante e Peptídeos que hidrata e firma a pele, reduzindo sinais de fadiga.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/serum-facial-noite-ciclos-30ml-7505b54bad94bcec5b17387540520704-1024-1024.webp"
    },
    {
        id: 499,
        marca: "Racco",
        nome: "Creme Hidratante para Mãos e Unhas RaccoDerma, 60G",
        descricao: "Creme com Ureia e Pantenol que hidrata profundamente, regenera e protege mãos, unhas e cutículas.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5534_raccoderma_creme-maos-37da2c8387505e20d917459510827363-1024-1024.webp"
    },
    {
        id: 500,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Iluminador Allumage Racco, 55g",
        descricao: "Hidratante corporal com partículas de brilho para um efeito glow, com textura leve e toque seco.",
        preco: 35.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1195_hidratante-iluminador-allumage-0563fce90d62063cea17389564098349-1024-1024.webp"
    },
    {
        id: 501,
        marca: "Racco",
        nome: "Deo Colônia Feminina Allumage Racco, 100ml",
        descricao: "Fragrância que celebra o magnetismo, com corpo frutal exótico de Groselha Negra e Pera.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/212-16fae5f2c84220d79417374793027457-1024-1024.webp"
    },
    {
        id: 502,
        marca: "Racco",
        nome: "IOS Ômega 3 em Cápsulas Racco, 30 cápsulas",
        descricao: "Suplemento de Óleo de Peixe concentrado, fonte de EPA e DHA para saúde cardiovascular e ação anti-inflamatória.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ios-omega-3-em-capsulas-racco-274e0cd83f1b216db717387548666487-1024-1024.webp"
    },
    {
        id: 503,
        marca: "Racco",
        nome: "Sabonete Líquido Lipogel Racco, 120ml",
        descricao: "Sabonete com Óleo de Melaleuca e Ácido Salicílico para limpeza e controle da oleosidade excessiva.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/sabonete-liquido-lipogel-49d7e1383b6177b99a17387557705223-1024-1024.webp"
    },
    {
        id: 504,
        marca: "Racco",
        nome: "Deo Colônia Masculina Malle – 100ml",
        descricao: "Fragrância masculina marcante e sofisticada, ideal para o homem de personalidade forte.",
        preco: 149.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/310_deo_colonia_malle-031dabe231d8479d0e17544132343118-1024-1024.webp"
    },
    {
        id: 505,
        marca: "Racco",
        nome: "Caneta Massageadora Facial e Corporal Vibra Skin",
        descricao: "Ponteira elétrica vibratória que massageia, ajuda a espalhar cremes e favorece a absorção dos ativos.",
        preco: 129.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/14_caneta-massageadora-vibra-skin-1465df6a7f352fb84817411971266104-1024-1024.webp"
    },
    {
        id: 506,
        marca: "Racco",
        nome: "Deo Colônia Masculina Racco Oriental, 45ml",
        descricao: "Fragrância masculina com notas de Bergamota, Limão Siciliano e um fundo amadeirado de Patchouli e Musk.",
        preco: 109.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/222_deo-colonia-racco-oriental_masculino_frasco-6849aa6fa7e6ad8beb17387566101163-1024-1024.webp"
    },
    {
        id: 507,
        marca: "Racco",
        nome: "Creme Hidratante Facial Pantenol + Manteiga de Karité RaccoDerma, 60g",
        descricao: "Hidratação prolongada com toque seco. Repara áreas ressecadas e combate os radicais livres.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5532_creme-hidratante-facial-pantenol-e-manteiga-karite-raccoderma-f86ddaa9dc09cb6c0f17387587313919-1024-1024.webp"
    },
    {
        id: 508,
        marca: "Racco",
        nome: "Água Perfumada Desodorante Energizante Corporal - Cítricos & Gengibre & Musk, 100ml",
        descricao: "Fragrância cítrica especiada que transforma o fim do dia em um momento de alegria e energia.",
        preco: 34.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/219_agua-energizante-36e838b517a6a2024a17418641362105-1024-1024.webp"
    },
    {
        id: 509,
        marca: "Racco",
        nome: "Água Perfumada Desodorante Refrescante Corporal - Lavanda & Rosa & Musk, 100ml",
        descricao: "Aroma suave de Lavanda, Rosa e Almíscar que envolve o corpo, proporcionando um início de dia radiante.",
        preco: 34.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/218_agua-refrescante-e775ad33fef7a40c0217418640630487-1024-1024.webp"
    },
    {
        id: 510,
        marca: "Racco",
        nome: "Água Perfumada Desodorante Relaxante para Corpo e Ambientes - Lavanda & Camomila, 100ml",
        descricao: "Fragrância relaxante de Lavanda e Camomila que cria um ambiente sereno e alivia o estresse.",
        preco: 34.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/217_agua-relaxante-20c377fbc95508a87817418639704610-1024-1024.webp"
    },
    {
        id: 511,
        marca: "Racco",
        nome: "Creme Hidratante para Mãos Erva Doce Racco, 60g",
        descricao: "Creme para as mãos com a fragrância clássica de Erva Doce, que hidrata e perfuma suavemente.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1923-17e14403d1a5dcffbe17374868133695-1024-1024.webp"
    },
    {
        id: 512,
        marca: "Racco",
        nome: "Kit Águas Perfumadas Racco, 3 frascos de 100ml",
        descricao: "Kit com três águas perfumadas: Calma, Encanto e Energia, para diferentes momentos do seu dia.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/93852_kit-aguas-92ad4d26e05c270e8617387567970183-1024-1024.webp"
    },
    {
        id: 513,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Sugar Dream Overdose Racco, 220g",
        descricao: "Hidratante corporal com fragrância doce e envolvente, deixando a pele macia e perfumada.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1114_overdose_hid-sugardream-1b067b0d06450d6e1f17466250203622-1024-1024.webp"
    },
    {
        id: 514,
        marca: "Racco",
        nome: "Body Splash Desodorante Sugar Dream Overdose Racco, 200ml",
        descricao: "Body splash com fragrância doce e marcante para perfumar e refrescar a pele ao longo do dia.",
        preco: 72.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1115_overdose_bs-sugardream-28399d6bb8f7f872c217466247243072-1024-1024.webp"
    },
    {
        id: 516,
        marca: "Racco",
        nome: "Gel Secativo para Peles Acneicas Lipogel Racco, 60g",
        descricao: "Tratamento emergencial que diminui o tamanho e a vermelhidão das espinhas, com ação secativa.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1477_gel-secativo-lipogel-f51af5c2508083708217387557284806-1024-1024.webp"
    },
    {
        id: 517,
        marca: "Racco",
        nome: "Protetor Solar Corporal FPS 30 Soleil Racco, 100g",
        descricao: "Protetor solar corporal com Óleo de Café Verde, que protege e estimula as estruturas de colágeno da pele.",
        preco: 79.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/protetor-solar-corporal-fps-30-soleil-racco-100g-b3f2c490362d5d65d717387595717456-1024-1024.webp"
    },
    {
        id: 518,
        marca: "Racco",
        nome: "Hidratante Corporal Karité Mais Pura, 250g",
        descricao: "Hidratante com Manteiga de Karité que deixa a pele macia, aveludada e com uma leve fragrância de Baunilha.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1350_hidratante-corporal-karite-mais-pura-5f15d8e74c2b7f30e517387559556187-1024-1024.webp"
    },
    {
        id: 519,
        marca: "Racco",
        nome: "Emulsão Oxidante 20 Volumes Color.Action Racco, 90ml (1985)",
        descricao: "Emulsão oxidante cremosa e estabilizada, indicada para utilizar com a Coloração Creme Color.Action.",
        preco: 13.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1985_coloraction_emulsao-oxidante-ca77440ef265f0654217516334779185-1024-1024.webp"
    },
    {
        id: 520,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Preto, 60g",
        descricao: "Coloração em creme com micropigmentos que garantem cor intensa, duradoura e hidratação aos fios.",
        preco: 37.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1961_coloraction-fd33973cf41d9058ab17449105012977-1024-1024.webp"
    },
    {
        id: 521,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Claro, 60g",
        descricao: "Coloração em creme com micropigmentos que garantem cor intensa, duradoura e hidratação aos fios.",
        preco: 37.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1981_coloraction-b1691cb7c7ac4e0fcb17449082069371-1024-1024.webp"
    },
    {
        id: 522,
        marca: "Racco",
        nome: "Caixa Presente Premium Racco",
        descricao: "Caixa de presente sofisticada e elegante, ideal para montar kits e presentear com os produtos Racco.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/635-920726c3a3877feb6317374832060251-1024-1024.webp"
    },
    {
        id: 523,
        marca: "Racco",
        nome: "Refil Espuma Micelar de Limpeza Facial Priorage Racco, 100ml",
        descricao: "Refil da Espuma Micelar de Limpeza, uma opção econômica e sustentável para o seu cuidado diário.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5541-r_espuma-micelar-facial_refil-9f91db650333e4740917374644049647-1024-1024.webp"
    },
    {
        id: 524,
        marca: "Racco",
        nome: "Óleo Essencial Corporal Lavanda Bio Therapy, 10ml",
        descricao: "Óleo essencial de Lavanda, reconhecido por suas propriedades calmantes e relaxantes para corpo e mente.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1088_oleo-lavanda-bio-therapy-434069203c1714f89917387527990781-1024-1024.webp"
    },
    {
        id: 525,
        marca: "Racco",
        nome: "Deo Colônia Masculina Malle Intense – 100ml",
        descricao: "Uma versão mais intensa e marcante da fragrância Malle, para o homem de personalidade forte.",
        preco: 149.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/148_deo_colonia_malle_intense-e7d19559769412733417544134615866-1024-1024.webp"
    },
    {
        id: 526,
        marca: "Racco",
        nome: "Kit Facial 50+",
        descricao: "Kit com produtos de tratamento facial específicos para as necessidades da pele madura 50+.",
        preco: 127.7,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/design-sem-nome-18-a542a06e79e23f096d17543141566735-1024-1024.webp"
    },
    {
        id: 527,
        marca: "Racco",
        nome: "Emulsão Oxidante 30 Volumes Color.Action Racco, 90ml",
        descricao: "Emulsão oxidante cremosa e estabilizada, indicada para utilizar com a Coloração Creme Color.Action.",
        preco: 13.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/d7efdc3e-68e0-4690-9a65-2dbc101269e7-5b37ccc1732d9bba6a17516336358293-1024-1024.webp"
    },
    {
        id: 545,
        marca: "Racco",
        nome: "Caixa de Presente - Preta Racco",
        descricao: "Caixa de presente sofisticada e elegante, ideal para montar kits e presentear com os produtos Racco.",
        preco: 19.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/0013-f999976ae39b275d0d17374834125281-1024-1024.webp"
    },
    {
        id: 546,
        marca: "Racco",
        nome: "Caixa de presente - Rose Racco",
        descricao: "Caixa de presente sofisticada e elegante, ideal para montar kits e presentear com os produtos Racco.",
        preco: 19.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/0012-aedd697a056e93cd8717374833115421-1024-1024.webp"
    },
    {
        id: 547,
        marca: "Racco",
        nome: "Batom Lutti Colors Racco - Rosa, 3,5g",
        descricao: "Batom com cor rosa vibrante, hidratação e acabamento cremoso para os lábios.",
        preco: 24.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/30-21_batom-lutti-rosa-71bbd3d7fe6ac1266b17387558593620-1024-1024.webp"
    },
    {
        id: 548,
        marca: "Racco",
        nome: "Hidratante Corporal Algodão Mais Pura Racco, 250g",
        descricao: "Hidratante de hidratação profunda e prolongada que deixa a pele macia e aveludada como o Algodão.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/hidratante-corporal-algodao-mais-pura-racco-250g-43b96ca1d25a6e18e417387559889788-1024-1024.webp"
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
        imagem: "imagens/odorata/zenit.png"
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
                    <img loading="lazy" src="${produto.imagem}" alt="${produto.nome}" onerror="this.onerror=null;this.src='https.placehold.co/300x300/f0f0f0/ccc?text=Imagem+Indisponível';">
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
