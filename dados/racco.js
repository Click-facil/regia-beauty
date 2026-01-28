const produtosRacco = [
    // Array de produtos da Racco com preços atualizados conforme o site oficial.
      {
        id: 2,
        marca: "Racco",
        nome: "Mousse Spray Depilatório Depeeling Racco, 150ml",
        descricao: "Remove os pelos de forma rápida, prática e sem dor, garantindo uma pele lisa e macia em poucos minutos.",
        preco: 99.9,
        imagem: "https://acdn-us.mitiendanube.com/stores/002/001/491/products/1610_mousse-spray-depilatorio-depeeling-ceef7e1570b98299ee17387541819472-480-0.webp"
      },
      {
        id: 3,
        marca: "Racco",
        nome: "Desodorante Íntimo Jato Seco, 100ml",
        descricao: "Proporciona frescor imediato e proteção prolongada com jato seco, mantendo o conforto durante todo o dia.",
        preco: 49.9,
        imagem: "https://acdn-us.mitiendanube.com/stores/002/001/491/products/desodorante-intimo-jato-seco-racco-f98f96964b3678f3d817387543970419-480-0.webp"
      },
      {
        id: 4,
        marca: "Racco",
        nome: "Sabonete Líquido Íntimo Feminino, 210ml",
        descricao: "Limpeza suave com pH balanceado, ginecologicamente testado para manter a saúde da região íntima.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/intimo-nova-embalagem-racco-995cf88427faf5549717504305750319-1024-1024.webp"
      },
      {
        id: 5,
        marca: "Racco",
        nome: "Creme Desodorante Antitranspirante Regulateur Racco, 60g",
        descricao: "Fórmula clássica de alta performance que controla a transpiração e o odor por tempo prolongado.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/47e1af9c-2c4d-4e60-9ec9-4d73c1c16e2e-8d8010bbf1add6cba817635576375351-1024-1024.webp"
      },
      {
        id: 6,
        marca: "Racco",
        nome: "Creme Desodorante Antitranspirante Regulateur Racco, 60g",
        descricao: "Proteção intensa e hidratação para as axilas, ideal para peles que precisam de controle extra de suor.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-desodorante-antitranspirante-regulateur-racco-60g-36d46eb7508f55390f17387592097485-1024-1024.webp"
      },
      {
        id: 7,
        marca: "Racco",
        nome: "Desodorante Roll-on Antiperspirante Regulateur Racco, 55ml",
        descricao: "Prático e eficiente, oferece proteção seca e segura contra o mau odor sem irritar a pele.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1002_desodorante-roll-on-regulateur-63c473c8e8ee2c036417387591692771-1024-1024.webp"
      },
      {
        id: 8,
        marca: "Racco",
        nome: "Gel Hidratante de Massagem Intimo Racco, 65ml",
        descricao: "Textura leve e deslizante, ideal para massagens sensoriais com fragrância delicada.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1018_gel-hidratante-de-massagem-intimo-racco-0d9c5705cb8ad4e6cc17387542736267-1024-1024.webp"
      },
      {
        id: 9,
        marca: "Racco",
        nome: "Sabonete Líquido Íntimo For Men Racco, 180ml",
        descricao: "Higiene específica para o homem, garantindo refrescância e controle de odores naturais.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ce79509f-35bc-46a1-9ac4-0d1b7f2bf553-16204f1df4879ca74317506857583761-1024-1024.webp"
      },
      {
        id: 10,
        marca: "Racco",
        nome: "Spray Perfumado Desodorante Intimo Morango Feminino Racco, 120ml",
        descricao: "Fragrância irresistível de morango que proporciona sensação de limpeza e sedução.",
        preco: 43.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1036_spray-perfumado-desodorante-intimo-morango-f6fd81394ef00fa5be17387543142824-1024-1024.webp"
      },
      {
        id: 11,
        marca: "Racco",
        nome: "Sabonete Líquido Intimo Feminino Morango Racco, 210ml",
        descricao: "Une a proteção do sabonete íntimo clássico com o aroma envolvente de morango.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1026_intimo-morango-8f455eceab1ac964b717387542935185-1024-1024.webp"
      },
      {
        id: 12,
        marca: "Racco",
        nome: "Deo Colônia Leandro Racco, 100ml",
        descricao: "Fragrância masculina marcante e sofisticada para homens de personalidade forte.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-leandro-racco-3914f225a5ca8aeb9817387570392670-1024-1024.webp"
      },
      {
        id: 13,
        marca: "Racco",
        nome: "S.O.S Aloe Spray Multifuncional Multi Aloe Racco, 200ml",
        descricao: "Rico em Aloe Vera, acalma, hidrata e recupera a pele e cabelos expostos a agressões externas.",
        preco: 76.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/s-o-s-aloe-spray-multifuncional-multi-aloe-racco-f291268be577022d4d17387561306538-1024-1024.webp"
      },
      {
        id: 14,
        marca: "Racco",
        nome: "Sabonete Líquido Intimo 50+ Feminino Racco, 180ml",
        descricao: "Desenvolvido para as necessidades específicas da mulher na maturidade, mantendo a hidratação.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/812fb799-5bb5-4cb4-99a5-e2684200b7a6-8e6bd4f4863eb79b8317635777854950-1024-1024.webp"
      },
      {
        id: 15,
        marca: "Racco",
        nome: "Gel de Aloe Vera Fortifier Multi Aloe, 100ml",
        descricao: "Poderoso hidratante regenerador que utiliza as propriedades curativas da Aloe Vera pura.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1189_gel-de-aloe-vera-fortifier-multi-aloe-55911da7a36518605017387560272519-1024-1024.webp"
      },
      {
        id: 16,
        marca: "Racco",
        nome: "Creme Dental com Flúor Multi Aloe Racco, 90g",
        descricao: "Saúde bucal com o toque suave e protetor da Aloe Vera, combatendo cáries e placas.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1194_creme-dental-multi-aloe-ad3465be7c304acf9717387560562689-1024-1024.webp"
      },
      {
        id: 17,
        marca: "Racco",
        nome: "Espuma de Higiene Íntima Refrescante Intimo Racco, 50ml",
        descricao: "Praticidade em espuma para uma limpeza refrescante em qualquer lugar, sem necessidade de enxágue imediato.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/espuma-de-higiene-intima-refrescante-intimo-racco-50ml-87f9a9725b814b223617387544780466-1024-1024.webp"
      },
      {
        id: 18,
        marca: "Racco",
        nome: "Creme Desodorante para os Pés Principles Racco, 50g",
        descricao: "Hidratação profunda e controle de odores para manter os pés secos, macios e perfumados.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-desodorante-para-os-pes-principles-racco-50g-6c585438a0eb070b9117387575253741-1024-1024.webp"
      },
      {
        id: 19,
        marca: "Racco",
        nome: "Desodorante Íntimo Jato Seco For Men Racco, 100ml",
        descricao: "Conforto e segurança masculina com tecnologia de jato seco para a região íntima.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1153_formen_desodorante-intimo-8fd2fa6ff883bc84e517387542270554-1024-1024.webp"
      },
      {
        id: 20,
        marca: "Racco",
        nome: "Creme Depilatório Depeeling Racco, 150g",
        descricao: "Versão em creme para uma depilação rente e suave, ideal para pernas e braços.",
        preco: 84.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1612_creme-depilatorio-depeeling-b58d693f9120a6062a17387542024795-1024-1024.webp"
      },
      {
        id: 21,
        marca: "Racco",
        nome: "IOS Aloe Life - Suplemento Pronto para Beber com Vitamina C - Sabor Aloe Vera Racco, 1l",
        descricao: "Auxilia na imunidade e no equilíbrio do organismo com o poder nutritivo da Aloe Vera.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/949_ios-aloe-life-suplemento-pronto-para-beber-com-vitamina-c-sabor-aloe-vera-456763d7e83e742f8f17387546505217-1024-1024.webp"
      },
      {
        id: 22,
        marca: "Racco",
        nome: "Deo Colônia Nu Racco, 100ml",
        descricao: "Uma fragrância minimalista e moderna que exalta a beleza natural de quem a usa.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-nu-racco-135b9a6e94491d15cd17387571629471-1024-1024.webp"
      },
      {
        id: 23,
        marca: "Racco",
        nome: "IOS Maxxi 30+ em Cápsulas Racco, 30 cápsulas",
        descricao: "Suplemento vitamínico focado na saúde e vigor para pessoas acima de 30 anos.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/954_ios-maxxi30-2e7a90b81f7f03b56417394689335018-1024-1024.webp"
      },
      {
        id: 24,
        marca: "Racco",
        nome: "Desodorante Intimo Tec Racco, 50ml",
        descricao: "Alta tecnologia em proteção íntima para momentos de maior atividade física ou calor.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/desodorante-intimo-tec-racco-1032-403829e632da2ab01817387544276150-1024-1024.webp"
      },
      {
        id: 25,
        marca: "Racco",
        nome: "Sérum DMAE + Polissacarídeos RaccoDerma,10ml",
        descricao: "Efeito lifting imediato e tratamento firmeza para uma pele rejuvenescida e tonificada.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5537_serum-dmae-e-polissacarideos-raccoderma-ea3c545baf336f901a17387587492684-1024-1024.webp"
      },
      {
        id: 26,
        marca: "Racco",
        nome: "Gel Hidratante de Massagem Morango Intimo Racco, 65ml",
        descricao: "Desperta os sentidos com um aroma doce e textura perfeita para momentos a dois.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/gel-hidratante-de-massagem-intimo-morango-racco-0760d2d4e9f8bc710617387545056388-1024-1024.webp"
      },
      {
        id: 27,
        marca: "Racco",
        nome: "Sabonete Líquido Facial de Algas Marinhas ARL Racco, 150g",
        descricao: "Limpeza facial profunda que remove impurezas sem ressecar, com o poder das algas.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/sabonete-liquido-facial-de-algas-marinhas-arl-racco-150g-316f76faf25d0f90f517387527416699-1024-1024.webp"
      },
      {
        id: 28,
        marca: "Racco",
        nome: "Deo Colônia Masculina LF Racco, 100ml",
        descricao: "Fragrância intensa para o homem contemporâneo que busca elegância e durabilidade.",
        preco: 299.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/220_deo-colonia-lf-a6a78c0bdad2da7c4917387564604827-1024-1024.webp"
      },
      {
        id: 29,
        marca: "Racco",
        nome: "IOS Coffee - Suplemento Alimentar em Pó com Ácido Clorogênico Sabor Chocovanilla, 200g",
        descricao: "Bebida termogênica deliciosa que auxilia no foco e no controle de peso.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ios-coffee-suplemento-alimentar-em-po-com-acido-clorogenico-sabor-chocovanilla-b4ec6f669ca37cf1b217387547965180-1024-1024.webp"
      },
      {
        id: 30,
        marca: "Racco",
        nome: "Sérum Corporal Carnivore Ciclos Racco, 10ml",
        descricao: "Focado no combate à celulite e gordura localizada, melhora visivelmente a textura da pele.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5529_serum-carnivore-9e975f9079b72a0cc017387529331510-1024-1024.webp"
      },
      {
        id: 31,
        marca: "Racco",
        nome: "Spray de Hidratação Intensiva para os Pés Principles Racco, 50ml",
        descricao: "Alívio imediato para pés cansados e ressecados com rápida absorção.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1307_spray-de-hidratacao-intensiva-para-os-pes-principles-racco-cf938dfcb2c453db7517412044602810-1024-1024.webp"
      },
      {
        id: 32,
        marca: "Racco",
        nome: "Creme Revitalizante para Face e Corpo Multi Aloe Racco, 50g",
        descricao: "Cuidado completo para áreas que precisam de renovação e hidratação profunda.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-revitalizante-para-face-e-corpo-multi-aloe-racco-62a8ff5ffd08e6af5817387560961069-1024-1024.webp"
      },
      {
        id: 33,
        marca: "Racco",
        nome: "Deo Colônia Emoções Masculino Roberto Carlos Racco, 50ml",
        descricao: "Fragrância clássica e romântica assinada pelo Rei, ideal para momentos especiais.",
        preco: 179.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/368_deo-colonia-emocoes-60cd994a5a163cecf317387566479003-1024-1024.webp"
      },
      {
        id: 34,
        marca: "Racco",
        nome: "Protetor Solar Facial FPS 70 Soleil Racco, 40g",
        descricao: "Alta proteção contra raios UVA/UVB com toque seco e ação antienvelhecimento.",
        preco: 79.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/3054_protetor-solar-facial-fps-70-soleil-racco-65faf9da3a4ccba11b17387595480631-1024-1024.webp"
      },
      {
        id: 35,
        marca: "Racco",
        nome: "Base Cremosa com Ácido Hialurônico e Vitamina E Luzes, 40g",
        descricao: "Maquiagem que trata a pele, oferecendo cobertura perfeita e hidratação profunda.",
        preco: 76.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/base-racco-5df0a5c8635f88112917653892099806-1024-1024.webp"
      },
      {
        id: 36,
        marca: "Racco",
        nome: "IOS Aloe Life - Suplemento Pronto para Beber com Vitamina C - Sabor Aloe Vera e Laranja, 1l",
        descricao: "A união da Aloe Vera com o sabor da laranja para um detox diário e refrescante.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ios-aloe-life-suplemento-pronto-para-beber-com-vitamina-c-sabor-aloe-vera-e-laranja-d9813863420ec9ad4d17387547276191-1024-1024.webp"
      },
      {
        id: 37,
        marca: "Racco",
        nome: "Deo Colônia Feminina Lilac Racco, 100ml",
        descricao: "Fragrância floral delicada e encantadora que evoca feminilidade e frescor.",
        preco: 179.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/214_deocolonia_lilac-f66e77fb36b546d16f17387563959765-1024-1024.webp"
      },
      {
        id: 38,
        marca: "Racco",
        nome: "Sabonete de Algas Marinhas Savonette ARL Racco - 90g",
        descricao: "Sabonete em barra com propriedades remineralizantes para uma pele renovada.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1380_sabonete-algas-arl-7354a393ce1eb18c3017387527101005-1024-1024.webp"
      },
      {
        id: 39,
        marca: "Racco",
        nome: "IOS Collagen Life - Colágeno Hidrolisado em Pó Racco, 200g",
        descricao: "Fortalece unhas, cabelos e melhora a elasticidade da pele de dentro para fora.",
        preco: 154.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/928_ios-collagen-life-823abb9b0c033673e217387546283025-1024-1024.webp"
      },
      {
        id: 40,
        marca: "Racco",
        nome: "Deo Colônia Feminina Gi Racco, 100ml",
        descricao: "Fragrância luxuosa e envolvente para mulheres que não passam despercebidas.",
        preco: 299.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/216_deo-colonia-gi-23c786a5c4677eaaf617387564257100-1024-1024.webp"
      },
      {
        id: 41,
        marca: "Racco",
        nome: "Gel Hidratante Facial Lipogel Racco, 60g",
        descricao: "Ideal para peles oleosas, controla o brilho enquanto mantém a hidratação equilibrada.",
        preco: 64.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1478_gel-hidratante-facial-lipogel-0526442e1464ee129317484339488407-1024-1024.webp"
      },
      {
        id: 42,
        marca: "Racco",
        nome: "Deo Colônia Feminina Racco Oriental, 45ml",
        descricao: "Toques exóticos e sensuais em uma embalagem compacta, perfeita para levar na bolsa.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/221_deo-colonia-racco-oriental_feminino_frasco-e38a1b515483ac6d5d17387565019943-1024-1024.webp"
      },
      {
        id: 43,
        marca: "Racco",
        nome: "Água Perfumada Overdose Sensual Racco, 210ml",
        descricao: "Leveza e perfumação prolongada para o corpo com um toque de mistério e sedução.",
        preco: 159.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/agua-perfumada-overdose-sensual-racco-f50c1e18fde47ed99417387561778329-1024-1024.webp"
      },
      {
        id: 44,
        marca: "Racco",
        nome: "Protetor Solar Facial FPS 30 Soleil Racco, 40g",
        descricao: "Proteção diária essencial contra o sol com textura confortável para todos os tipos de pele.",
        preco: 79.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/protetor-solar-facial-fps-30-soleil-racco-d5ac7f1b26778dd7f117387595924420-1024-1024.webp"
      },
      {
        id: 45,
        marca: "Racco",
        nome: "Deo Colônia Feminina Kiaora Racco, 100ml",
        descricao: "Fragrância vibrante que celebra a alegria de viver com notas refrescantes.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-feminina-kiaora-racco-c4a3498ad1d25de19c17387569710644-1024-1024.webp"
      },
      {
        id: 46,
        marca: "Racco",
        nome: "Deo Colônia Masculina Thesu Racco, 100ml",
        descricao: "Elegância atemporal para o homem que busca uma marca registrada marcante.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-masculina-thesu-racco-87d3b6336267c635e717387570744527-1024-1024.webp"
      },
      {
        id: 47,
        marca: "Racco",
        nome: "Gel Creme Facial Glicerina + Vitamina E RaccoDerma, 60g",
        descricao: "Hidratação calmante e antioxidante para peles sensíveis ou irritadas.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5531_gel-creme-facial-glicerina-e-vitamina-e-raccoderma-ec38ca1b1b23c4f36217387587138594-1024-1024.webp"
      },
      {
        id: 48,
        marca: "Racco",
        nome: "Fibra Life Refresh - Pó para Bebida com Fibra Prebiótica - Chá Verde Sabor Limão Racco, 200g",
        descricao: "Auxilia no trânsito intestinal e na desintoxicação corporal com sabor leve.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/915_fibra-refresh-cha-verde-limao-5b0911084081855a1617387549590361-1024-1024.webp"
      },
      {
        id: 49,
        marca: "Racco",
        nome: "IOS Coenzima Q10 - Suplemento Alimentar de Coenzima Q10 com Vitamina E em Cápsulas Racco, 30 cápsulas",
        descricao: "Energia celular e potente ação antioxidante para proteger o coração e a pele.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/965_ios-coenzima-q10-suplemento-alimentar-de-coenzima-q10-vitamina-e-b42f26e039de297d6817485262247084-1024-1024.webp"
      },
      {
        id: 51,
        marca: "Racco",
        nome: "Óleo Relaxante Desodorante para as Pernas Defatigant Multi Aloe Racco, 100ml",
        descricao: "Alívio imediato para pernas cansadas, estimulando a circulação e o descanso.",
        preco: 59.9,
        imagem: "https://acdn-us.mitiendanube.com/stores/002/001/491/products/oleo-relaxante-desodorante-para-as-pernas-defatigant-multi-aloe-racco-214295ffae22756ccb17387561109169-480-0.webp"
      },
      {
        id: 52,
        marca: "Racco",
        nome: "Deo Colônia Masculina Malle – 100ml",
        descricao: "Fragrância vigorosa e refrescante, ideal para o uso diário do homem dinâmico.",
        preco: 169.9,
        imagem: "https://acdn-us.mitiendanube.com/stores/002/001/491/products/310_deo_colonia_malle-031dabe231d8479d0e17544132343118-480-0.webp"
      },
      {
        id: 53,
        marca: "Racco",
        nome: "Creme Relaxante para as Pernas Defatigant Multi Aloe, 120g",
        descricao: "Textura cremosa que nutre enquanto relaxa e desincha as pernas ao fim do dia.",
        preco: 62.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1425_creme-relaxante-para-as-pernas-defatigant-multi-aloe-1e486824d5d2452cf517387560705558-1024-1024.webp"
      },
      {
        id: 54,
        marca: "Racco",
        nome: "Hidratante Corporal Gi, 130ml",
        descricao: "Complementa a fragrância Gi com uma pele acetinada e intensamente perfumada.",
        preco: 69.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/2925_hidratante-gi-33695b9403dacade3417387567426473-1024-1024.webp"
      },
      {
        id: 55,
        marca: "Racco",
        nome: "Deo Colônia Masculina Oxus Racco, 100ml",
        descricao: "Mistura de notas quentes e frias para um perfume masculino intrigante e persistente.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/177_deo-colonia-oxus-1e75bde904c3c61fcf17387563363339-1024-1024.webp"
      },
      {
        id: 56,
        marca: "Racco",
        nome: "Creme Hidratante Facial Priorage 50+ Racco, 30g",
        descricao: "Tratamento antissinais potente para peles maduras, devolvendo densidade e viço.",
        preco: 154.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5539_creme-facial-50-81e909b280aba47c6a17476614565615-1024-1024.webp"
      },
      {
        id: 57,
        marca: "Racco",
        nome: "Sabonete Líquido Lipogel Racco, 120ml",
        descricao: "Higiene facial para peles com acne, removendo a oleosidade sem agredir.",
        preco: 64.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/sabonete-liquido-lipogel-49d7e1383b6177b99a17387557705223-1024-1024.webp"
      },
      {
        id: 58,
        marca: "Racco",
        nome: "Máscara Nanotecnológica Serie Premium Tratamento Racco, 230g",
        descricao: "Reconstrução capilar profunda com nanotecnologia que atua no interior do fio.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1810_mascara-nano-serie-premium-ae2e8b12b3d8ee765617387594966268-1024-1024.webp"
      },
      {
        id: 59,
        marca: "Racco",
        nome: "Água Micelar Ciclos Racco, 150ml",
        descricao: "5 benefícios em 1: limpa, demaquila, purifica, suaviza e reequilibra a pele facial.",
        preco: 77.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/agua-micelar-ciclos-d-racco-d62591279fecd5016717387530384496-1024-1024.webp"
      },
      {
        id: 60,
        marca: "Racco",
        nome: "Deo Colônia Feminina Yunick, 100ml",
        descricao: "Para jovens autênticas, uma fragrância doce e divertida que exprime liberdade.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-feminina-yunick-db7416ebd42289d4fd17387570076545-1024-1024.webp"
      },
      {
        id: 61,
        marca: "Racco",
        nome: "Hidratante Corporal Efervescente Lilac Racco 100ml",
        descricao: "Sensação única de 'estalos' na pele com hidratação gelada e perfume floral.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/6411df05-16ee-43f5-bf85-ec20c10e15c1-c41de03c2a9b46f2e217643520117299-1024-1024.webp"
      },
      {
        id: 62,
        marca: "Racco",
        nome: "Deo Colônia Feminina Allumage Racco, 100ml",
        descricao: "Fragrância luminosa e radiante que destaca o brilho pessoal de cada mulher.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/212-16fae5f2c84220d79417374793027457-1024-1024.webp"
      },
      {
        id: 63,
        marca: "Racco",
        nome: "Batom Líquido Luzes Racco – Cereja, 3,5g",
        descricao: "Alta pigmentação e acabamento duradouro para lábios destacados e definidos.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/batom-02-26_cereja-a6cc2f7ee1487fd46617425648803909-1024-1024.webp"
      },
      {
        id: 64,
        marca: "Racco",
        nome: "Body Splash Desodorante Secret Berry Overdose Racco, 200ml",
        descricao: "Mistura explosiva de frutas vermelhas para uma perfumação leve e marcante após o banho.",
        preco: 94.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1146_overdose_bs-secretberry-2c2d24c5ce33dc256b17466251689719-1024-1024.webp"
      },
      {
        id: 65,
        marca: "Racco",
        nome: "Creme Hidratante Facial Pantenol + Manteiga de Karité RaccoDerma, 60g",
        descricao: "Nutrição intensa para peles muito secas ou que precisam de recuperação da barreira cutânea.",
        preco: 89.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5532_creme-hidratante-facial-pantenol-e-manteiga-karite-raccoderma-f86ddaa9dc09cb6c0f17387587313919-1024-1024.webp"
      },
      {
        id: 66,
        marca: "Racco",
        nome: "Sabonete Líquido Cintilante Rubi Racco, 150ml",
        descricao: "Sofisticação no banho com partículas cintilantes e perfume envolvente de frutas.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1178_sabonete-cintilante-rubi-879acf59a12603523317387593894832-1024-1024.webp"
      },
      {
        id: 67,
        marca: "Racco",
        nome: "Óleo Essencial Corporal Alecrim Bio Therapy Racco, 10ml",
        descricao: "Auxilia no foco e na vitalidade, perfeito para aromaterapia e massagens estimulantes.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1098_oleo-alecrim-bio-therapy-26ec5ee75c7c7b4a4417387528401567-1024-1024.webp"
      },
      {
        id: 68,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Iluminador Allumage Racco, 55g",
        descricao: "Dá um glow imediato à pele enquanto hidrata e perfuma delicadamente.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1195_hidratante-iluminador-allumage-0563fce90d62063cea17389564098349-1024-1024.webp"
      },
      {
        id: 69,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Secret Berry Overdose Racco, 220g",
        descricao: "Pele macia e intensamente perfumada com o aroma viciante de Secret Berry.",
        preco: 64.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1145_overdose_hid-secretberry-8a4f4674665468bef817466252507286-1024-1024.webp"
      },
      {
        id: 70,
        marca: "Racco",
        nome: "Deo Colônia Masculina Racco Oriental, 45ml",
        descricao: "Versão masculina da fragrância oriental, com notas amadeiradas e especiadas.",
        preco: 119.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/222_deo-colonia-racco-oriental_masculino_frasco-6849aa6fa7e6ad8beb17387566101163-1024-1024.webp"
      },
      {
        id: 71,
        marca: "Racco",
        nome: "Sabonete Líquido Corporal Erva Doce Racco, 250ml",
        descricao: "Ideal para o banho relaxante de toda a família, com propriedades calmantes.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1917-a65ed4c9c502e540f017374867055519-1024-1024.webp"
      },
      {
        id: 72,
        marca: "Racco",
        nome: "Kit Águas Perfumadas Racco, 3 frascos de 100ml",
        descricao: "Três opções de frescor para diferentes momentos do dia: relax, refresh e energy.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/93852_kit-aguas-92ad4d26e05c270e8617387567970183-1024-1024.webp"
      },
      {
        id: 73,
        marca: "Racco",
        nome: "Desodorante Roll-on Lutti Racco, 55ml",
        descricao: "Perfume suave e proteção eficaz para a rotina diária com a delicadeza de Lutti.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/341_desodorante-roll-on-lutti-dd692f4801ef7fa76717387581906361-1024-1024.webp"
      },
      {
        id: 74,
        marca: "Racco",
        nome: "Creme Hidratante Facial Priorage 30+ Ciclos Racco, 30g",
        descricao: "Prevenção das primeiras linhas de expressão e hidratação focada no público 30+.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/creme-hidratante-facial-priorage-30-ciclos-racco-d91599e31f5d0e084f17387538372493-1024-1024.webp"
      },
      {
        id: 75,
        marca: "Racco",
        nome: "Protetor Solar Corporal FPS 30 Soleil Racco, 100g",
        descricao: "Proteção completa para o corpo com espalhabilidade fácil e resistência à água.",
        preco: 99.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/protetor-solar-corporal-fps-30-soleil-racco-100g-b3f2c490362d5d65d717387595717456-1024-1024.webp"
      },
      {
        id: 76,
        marca: "Racco",
        nome: "IOS Ômega 3 em Cápsulas Racco, 30 cápsulas",
        descricao: "Gordura boa essencial para a saúde cardiovascular, cognitiva e visual.",
        preco: 129.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/ios-omega-3-em-capsulas-racco-274e0cd83f1b216db717387548666487-1024-1024.webp"
      },
      {
        id: 77,
        marca: "Racco",
        nome: "Deo Colônia Feminina Fantaisie Racco, 100ml",
        descricao: "Uma viagem sensorial doce e fantasiosa para mulheres que gostam de sonhar.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/deo-colonia-feminina-fantaisie-racco-809cbbaed7c2d72d0817387569464703-1024-1024.webp"
      },
      {
        id: 78,
        marca: "Racco",
        nome: "Deo Colônia Masculina Malle Intense – 100ml",
        descricao: "Uma versão mais profunda e noturna do clássico Malle, para homens intensos.",
        preco: 169.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/148_deo_colonia_malle_intense-e7d19559769412733417544134615866-1024-1024.webp"
      },
      {
        id: 79,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Sugar Dream Overdose Racco, 220g",
        descricao: "Fragrância adocicada 'gourmand' que deixa a pele incrivelmente macia.",
        preco: 64.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1114_overdose_hid-sugardream-1b067b0d06450d6e1f17466250203622-1024-1024.webp"
      },
      {
        id: 80,
        marca: "Racco",
        nome: "Body Splash Desodorante Sugar Dream Overdose Racco, 200ml",
        descricao: "Perfumação leve para o dia a dia com o toque doce e sonhador de Sugar Dream.",
        preco: 94.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1115_overdose_bs-sugardream-28399d6bb8f7f872c217466247243072-1024-1024.webp"
      },
      {
        id: 81,
        marca: "Racco",
        nome: "Kit SOLAR FPS30",
        descricao: "Combo essencial para a exposição ao sol com proteção facial e corporal.",
        preco: 139.8,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/94168-kit-solar-11d3b35c1b61ddaca017677824562400-1024-1024.webp"
      },
      {
        id: 82,
        marca: "Racco",
        nome: "Kit Cuidados Íntimos",
        descricao: "Higiene e frescor completo para a saúde íntima com produtos especializados.",
        preco: 91.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/94163-kit-cuidados-intimos-2f2a96e011bf9995fd17677816361518-1024-1024.webp"
      },
      {
        id: 83,
        marca: "Racco",
        nome: "Caixa de Presente Racco",
        descricao: "Embalagem charmosa para valorizar os produtos em datas especiais.",
        preco: 9.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/78f91345-4789-4d4f-b35c-47ef4b135c3b-d75c5e3e988ce45fa017652836290431-1024-1024.webp"
      },
      {
        id: 84,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Preto, 60g",
        descricao: "Cor intensa e cobertura total dos fios brancos com proteção e brilho.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1961_coloraction-fd33973cf41d9058ab17449105012977-1024-1024.webp"
      },
      {
        id: 85,
        marca: "Racco",
        nome: "Caneta Massageadora Facial e Corporal Vibra Skin",
        descricao: "Acessório tecnológico para potencializar a absorção de cremes e relaxar a pele.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/14_caneta-massageadora-vibra-skin-1465df6a7f352fb84817411971266104-1024-1024.webp"
      },
      {
        id: 86,
        marca: "Racco",
        nome: "Creme Hidratante para Mãos e Unhas RaccoDerma, 60G",
        descricao: "Barreira protetora para mãos expostas a agentes externos, fortalecendo unhas.",
        preco: 49.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5534_raccoderma_creme-maos-37da2c8387505e20d917459510827363-1024-1024.webp"
      },
      {
        id: 87,
        marca: "Racco",
        nome: "Creme Hidratante para Mãos Erva Doce Racco, 60g",
        descricao: "Toque aveludado com perfume suave para mãos sempre protegidas e macias.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1923-17e14403d1a5dcffbe17374868133695-1024-1024.webp"
      },
      {
        id: 88,
        marca: "Racco",
        nome: "Deo Colônia La Folie Femme Racco 100 ml",
        descricao: "Fragrância sofisticada de alta fixação para mulheres marcantes.",
        preco: 199.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/a4fc0546-b0b5-4022-85d1-07b84b6bdf3f-e4bd56149a97bb737917647608311035-1024-1024.webp"
      },
      {
        id: 89,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Médio Acobreado, 60g",
        descricao: "Tom ruivo vibrante e elegante com fórmulas que preservam a integridade capilar.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1978_coloraction-9f8c11360c7f8b9cca17449084562823-1024-1024.webp"
      },
      {
        id: 90,
        marca: "Racco",
        nome: "Água Perfumada Desodorante Energizante Corporal - Cítricos & Gengibre & Musk, 100ml",
        descricao: "Explosão de vitalidade para começar o dia com ânimo e frescor cítrico.",
        preco: 34.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/219_agua-energizante-36e838b517a6a2024a17418641362105-1024-1024.webp"
      },
      {
        id: 91,
        marca: "Racco",
        nome: "Água Perfumada Desodorante Refrescante Corporal - Lavanda & Rosa & Musk, 100ml",
        descricao: "Equilíbrio entre o floral clássico e o musk, perfeita para momentos de pausa.",
        preco: 34.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/218_agua-refrescante-e775ad33fef7a40c0217418640630487-1024-1024.webp"
      },
      {
        id: 92,
        marca: "Racco",
        nome: "Água Perfumada Desodorante Relaxante para Corpo e Ambientes - Lavanda & Camomila, 100ml",
        descricao: "Prepara o corpo e o ambiente para o descanso e uma noite de sono tranquila.",
        preco: 34.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/217_agua-relaxante-20c377fbc95508a87817418639704610-1024-1024.webp"
      },
      {
        id: 93,
        marca: "Racco",
        nome: "Refil Espuma Micelar de Limpeza Facial Priorage Racco, 100ml",
        descricao: "Praticidade e economia para manter sua rotina de limpeza facial micelar em dia.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/5541-r_espuma-micelar-facial_refil-9f91db650333e4740917374644049647-1024-1024.webp"
      },
      {
        id: 94,
        marca: "Racco",
        nome: "Deo Colônia Masculina Zimbros Racco, 100ml",
        descricao: "Perfume aromático faugére para homens clássicos que preferem fragrâncias atemporais.",
        preco: 139.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/zimbros-vidro-ff25b051c900ca678417387574091874-1024-1024.webp"
      },
      {
        id: 95,
        marca: "Racco",
        nome: "Óleo Desodorante Corporal Vanilla Caramel Overdose Racco, 100ml",
        descricao: "Nutrição profunda e brilho acetinado com aroma viciante de baunilha e caramelo.",
        preco: 59.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/9cd76a43-d021-40f8-80c3-d42779a22106-359c1bb23da0e6948217649391979652-1024-1024.webp"
      },
      {
        id: 96,
        marca: "Racco",
        nome: "Emulsão Oxidante 20 Volumes Color.Action Racco, 90ml (1985)",
        descricao: "Revelador de cor equilibrado para garantir o tom desejado com menor agressão.",
        preco: 19.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1985_coloraction_emulsao-oxidante-ca77440ef265f0654217516334779185-1024-1024.webp"
      },
      {
        id: 97,
        marca: "Racco",
        nome: "Kit MULTI ALOE",
        descricao: "O poder regenerativo da Aloe Vera em um conjunto de cuidados diários.",
        preco: 65.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/94167-kit-multi-aloe-b861d3d87a8739b20b17677822927235-1024-1024.webp"
      },
      {
        id: 98,
        marca: "Racco",
        nome: "Body Splash Desodorante Vanilla Caramel Overdose Racco, 200ml",
        descricao: "Perfume adocicado e confortável para ser usado em abundância após o banho.",
        preco: 94.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/9e34cd7e-66d9-4dac-8c34-de114e4f4c2c-5581a916d3027f5e7c17649391375187-1024-1024.webp"
      },
      {
        id: 100,
        marca: "Racco",
        nome: "Hidratante Desodorante Corporal Karité Mais Pura Racco,250g",
        descricao: "Hidratação de longa duração para peles secas, rica em manteiga de karité.",
        preco: 69.9,
        imagem: "https://acdn-us.mitiendanube.com/stores/002/001/491/products/6b08414c-158e-45d3-9772-ba2eee3854b7-7ee763c17c419eb71617648753493153-480-0.webp"
      },
      {
        id: 101,
        marca: "Racco",
        nome: "Condicionador Mais Pura Racco, 250 g",
        descricao: "Desembaraço imediato e brilho natural com fórmula focada em pureza e leveza.",
        preco: 49.9,
        imagem: "https://acdn-us.mitiendanube.com/stores/002/001/491/products/aca3d964-46cf-4bbf-99e9-fb31e505235d-7e7995e6c9dfb5824a17640069381051-480-0.webp"
      },
      {
        id: 102,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Loiro Muito Claro, 60g",
        descricao: "Tom de loiro ultra iluminado com alta durabilidade e brilho radiante.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1963_coloraction-37ff01e74ef927d7b417449103242343-1024-1024.webp"
      },
      {
        id: 103,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Castanho Médio, 60g",
        descricao: "Cor natural e cobertura uniforme para quem busca um tom castanho equilibrado.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1966_coloraction-9d3c219ae6449eeda817449101013717-1024-1024.webp"
      },
      {
        id: 104,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Castanho Claro, 60g",
        descricao: "Suavidade e brilho em um tom de castanho que ilumina o rosto naturalmente.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1967_coloraction-e4d2c64cd9f342778017449099937778-1024-1024.webp"
      },
      {
        id: 105,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Médio, 60g",
        descricao: "Tom clássico de louro, perfeito para uma mudança de visual sofisticada.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1975_coloraction-d8ae8d25beb5b8bac417449086843813-1024-1024.webp"
      },
      {
        id: 106,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Médio Marrom, 60g",
        descricao: "Mistura elegante de loiro com reflexos chocolate para profundidade e brilho.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1979_coloraction-d0d45834a7744da55717449083283525-1024-1024.webp"
      },
      {
        id: 107,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Claro, 60g",
        descricao: "Loiro aberto e vibrante para um visual solar e cheio de brilho.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1981_coloraction-b1691cb7c7ac4e0fcb17449082069371-1024-1024.webp"
      },
      {
        id: 108,
        marca: "Racco",
        nome: "Caixa Presente Premium Racco",
        descricao: "A escolha certa para quem quer impressionar com um presente luxuoso.",
        preco: 32.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/635-920726c3a3877feb6317374832060251-1024-1024.webp"
      },
      {
        id: 109,
        marca: "Racco",
        nome: "Kit Mulher 50+",
        descricao: "Higiene e cuidado específicos para a nova fase da mulher madura.",
        preco: 154.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/94165-kit-mulher-50-6d09b4dd0f5f31338e17677821020481-1024-1024.webp"
      },
      {
        id: 110,
        marca: "Racco",
        nome: "Kit Cuidados Íntimos II",
        descricao: "Variedade de cuidados íntimos para garantir frescor o dia todo.",
        preco: 95.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/94164-kit-cuidados-intimosii-5786914c94ba46268a17677819017657-1024-1024.webp"
      },
      {
        id: 111,
        marca: "Racco",
        nome: "Sabonete Liquido Mais Pura Racco, 250ml",
        descricao: "Limpeza corporal refrescante com fragrância limpa e ingredientes puros.",
        preco: 45.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/2eca2f5a-14e5-430e-b13b-36fa3260249d-87426a024749f30f3117648756502873-1024-1024.webp"
      },
      {
        id: 112,
        marca: "Racco",
        nome: "Deo Colônia La Folie Homme Racco 100 ml",
        descricao: "Fragrância amadeirada poderosa que exala masculinidade e conquista.",
        preco: 199.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/b0c0eb26-ffe2-4b7c-bfe7-6ae192b03511-bb4d7f1c274829f05817647610754702-1024-1024.webp"
      },
      {
        id: 113,
        marca: "Racco",
        nome: "Necessaire Branca com Logo Racco",
        descricao: "Acessório prático para organizar seus produtos de beleza no dia a dia.",
        preco: 29.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/48a583d7-e2d9-406f-9111-3c9d68a1d86e-ffe12239809d0ac95e17643522847604-1024-1024.webp"
      },
      {
        id: 114,
        marca: "Racco",
        nome: "SHAMPOO MAIS PURA RACCO, 250 ml",
        descricao: "Lava os fios sem agredir, deixando-os leves e prontos para o condicionamento.",
        preco: 39.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/8fb7d4bf-c2fd-44d8-b260-6ee8644e169c-6a14c2ee58dbc295eb17640065607837-1024-1024.webp"
      },
      {
        id: 115,
        marca: "Racco",
        nome: "Emulsão Oxidante 30 Volumes Color.Action Racco, 90ml",
        descricao: "Potencializa o clareamento e a fixação da cor com segurança para os fios.",
        preco: 19.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/d7efdc3e-68e0-4690-9a65-2dbc101269e7-5b37ccc1732d9bba6a17516336358293-1024-1024.webp"
      },
      {
        id: 116,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Preto Azulado, 60g",
        descricao: "Cor profunda com reflexos frios para um visual preto ultra intenso.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1962_coloraction-8f08cb921b6cce7f2017449104156777-1024-1024.webp"
      },
      {
        id: 117,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Castanho Escuro, 60g",
        descricao: "Preenche os fios com cor rica e sólida, ideal para quem busca sobriedade.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1964_coloraction-244e353bea03e9d96a17449102050516-1024-1024.webp"
      },
      {
        id: 118,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Marsala, 60g",
        descricao: "O tom do momento, unindo vinho e violeta para um visual moderno e autêntico.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1968_coloraction-508d87897487034cb917449098461642-1024-1024.webp"
      },
      {
        id: 119,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Castanho Tabaco Escuro, 60g",
        descricao: "Tom amadeirado profundo com excelente cobertura e durabilidade.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1969_coloraction-f6579e314981401c2117449094023005-1024-1024.webp"
      },
      {
        id: 120,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Escuro, 60g",
        descricao: "Cor sóbria e elegante, ideal como base para mechas ou cobertura total.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1971_coloraction-578689afe16f253c2017449092556896-1024-1024.webp"
      },
      {
        id: 121,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Escuro Acinzentado, 60g",
        descricao: "Elimina reflexos amarelados e alaranjados indesejados para um loiro frio.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1972_coloraction-6106669af0b4dae62817449090557802-1024-1024.webp"
      },
      {
        id: 122,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Escuro Vermelho Intenso, 60g",
        descricao: "Vermelho marcante e vibrante que não desbota com facilidade.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1973_coloraction-7efc8a3fceba14b71317449089298894-1024-1024.webp"
      },
      {
        id: 123,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Escuro Marrom, 60g",
        descricao: "Combinação de loiro e chocolate para um visual quente e acolhedor.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1974_coloraction-8338a8cc82f94dcd5c17449088118060-1024-1024.webp"
      },
      {
        id: 124,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Médio Acinzentado, 60g",
        descricao: "Equilíbrio perfeito de brilho e reflexos platinados para um loiro médio natural.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1976_coloraction-a58f38886580a843f217449085643435-1024-1024.webp"
      },
      {
        id: 125,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Claro Acinzentado, 60g",
        descricao: "Máxima iluminação com neutralização total de tons quentes residuais.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1982_coloraction-91613b53742d8cb49117449080511569-1024-1024.webp"
      },
      {
        id: 126,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Muito Claro Acinzentado, 60g",
        descricao: "Platinado de alto nível com cobertura uniforme e muita luminosidade.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1983_coloraction-98f1bf46832141376317449022209295-1024-1024.webp"
      },
      {
        id: 127,
        marca: "Racco",
        nome: "Coloração Creme Color.Action Racco - Louro Muito Claro Pérola, 60g",
        descricao: "Reflexos perolados que conferem um brilho luxuoso e sofisticado ao loiro.",
        preco: 54.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/1984_coloraction-04d771071e10c6303817449018495811-1024-1024.webp"
      },
      {
        id: 128,
        marca: "Racco",
        nome: "Caixa de Presente - Preta Racco",
        descricao: "Elegância clássica em preto para presentear com estilo.",
        preco: 19.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/0013-f999976ae39b275d0d17374834125281-1024-1024.webp"
      },
      {
        id: 129,
        marca: "Racco",
        nome: "Caixa de presente - Rose Racco",
        descricao: "Toque romântico e delicado na cor rose para embalagens especiais.",
        preco: 19.9,
        imagem: "//acdn-us.mitiendanube.com/stores/002/001/491/products/0012-aedd697a056e93cd8717374833115421-1024-1024.webp"
      }, 
    // ... todos os outros 300+ produtos Racco aqui
];