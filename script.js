(() => {
    const languageSelect = document.querySelector('[data-language]');
    const translationNodes = document.querySelectorAll('[data-i18n]');
    const translations = {
        pt: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'Marca boa não pede licença. Ocupa espaço.', heroText: 'Estratégia, design e conteúdo para transformar presença digital em negócio.', start: 'Começar conversa', servicesLink: 'Ver o que faço', methodLabel: '02 / método', methodText: 'Clareza para posicionar. Forma para marcar. Sistema para crescer.', identityTitle: 'Identidade', identityText: 'Direção visual e verbal para a marca ser reconhecida.', contentTitle: 'Conteúdo', contentText: 'Peças que conversam com pessoas e movimentam canais.', presenceTitle: 'Presença', presenceText: 'Web, social e campanhas funcionando como um só sistema.', bannerLabel: '03 / formatos', bannerTitle: 'Banners que entram em movimento.', adHeadline: 'Sua marca em movimento.', adShort: 'Marca com presença.', adCta: 'Comece agora ↗'
        },
        en: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'A good brand does not ask permission. It takes space.', heroText: 'Strategy, design and content that turn digital presence into business.', start: 'Start a conversation', servicesLink: 'See what I do', methodLabel: '02 / method', methodText: 'Clarity to position. Form to mark. A system to grow.', identityTitle: 'Identity', identityText: 'Visual and verbal direction people can recognize.', contentTitle: 'Content', contentText: 'Creative pieces that speak to people and move channels.', presenceTitle: 'Presence', presenceText: 'Web, social and campaigns working as one system.', bannerLabel: '03 / formats', bannerTitle: 'Banners that move with your brand.', adHeadline: 'Put your brand in motion.', adShort: 'A brand with presence.', adCta: 'Start now ↗'
        },
        es: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'Una buena marca no pide permiso. Ocupa espacio.', heroText: 'Estrategia, diseño y contenido para convertir presencia digital en negocio.', start: 'Empezar conversación', servicesLink: 'Ver lo que hago', methodLabel: '02 / método', methodText: 'Claridad para posicionar. Forma para marcar. Sistema para crecer.', identityTitle: 'Identidad', identityText: 'Dirección visual y verbal para que tu marca sea reconocida.', contentTitle: 'Contenido', contentText: 'Piezas que conectan con personas y activan tus canales.', presenceTitle: 'Presencia', presenceText: 'Web, redes y campañas funcionando como un solo sistema.', bannerLabel: '03 / formatos', bannerTitle: 'Banners que ponen tu marca en movimiento.', adHeadline: 'Tu marca en movimiento.', adShort: 'Marca con presencia.', adCta: 'Empieza ahora ↗'
        },
        zh: {
            eyebrow: '电子品牌业务 / 01', heroTitle: '好品牌不需要许可，它自然占据空间。', heroText: '用策略、设计和内容，把数字形象转化为业务。', start: '开始沟通', servicesLink: '查看服务', methodLabel: '02 / 方法', methodText: '清晰定位。鲜明表达。持续成长。', identityTitle: '品牌识别', identityText: '让人记住你的视觉与语言方向。', contentTitle: '内容', contentText: '与受众对话并推动渠道的创意内容。', presenceTitle: '数字存在', presenceText: '网站、社交媒体和广告成为一个系统。', bannerLabel: '03 / 格式', bannerTitle: '让品牌动起来的横幅。', adHeadline: '让你的品牌动起来。', adShort: '有存在感的品牌。', adCta: '立即开始 ↗'
        },
        ru: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'Хороший бренд не просит разрешения. Он занимает место.', heroText: 'Стратегия, дизайн и контент, превращающие цифровое присутствие в бизнес.', start: 'Начать разговор', servicesLink: 'Посмотреть услуги', methodLabel: '02 / метод', methodText: 'Ясность для позиции. Форма для узнаваемости. Система для роста.', identityTitle: 'Идентичность', identityText: 'Визуальное и вербальное направление, которое запоминают.', contentTitle: 'Контент', contentText: 'Материалы, которые говорят с людьми и развивают каналы.', presenceTitle: 'Присутствие', presenceText: 'Сайт, соцсети и кампании работают как единая система.', bannerLabel: '03 / форматы', bannerTitle: 'Баннеры, которые двигают бренд.', adHeadline: 'Ваш бренд в движении.', adShort: 'Бренд с присутствием.', adCta: 'Начать сейчас ↗'
        },
        de: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'Eine gute Marke bittet nicht um Erlaubnis. Sie nimmt Raum ein.', heroText: 'Strategie, Design und Inhalte, die digitale Präsenz in Geschäft verwandeln.', start: 'Gespräch beginnen', servicesLink: 'Leistungen ansehen', methodLabel: '02 / Methode', methodText: 'Klar positionieren. Stark gestalten. Nachhaltig wachsen.', identityTitle: 'Identität', identityText: 'Visuelle und verbale Richtung, die im Gedächtnis bleibt.', contentTitle: 'Inhalt', contentText: 'Inhalte, die Menschen erreichen und Kanäle bewegen.', presenceTitle: 'Präsenz', presenceText: 'Web, Social und Kampagnen als ein gemeinsames System.', bannerLabel: '03 / Formate', bannerTitle: 'Banner, die deine Marke bewegen.', adHeadline: 'Deine Marke in Bewegung.', adShort: 'Eine Marke mit Präsenz.', adCta: 'Jetzt starten ↗'
        },
        fr: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'Une bonne marque ne demande pas la permission. Elle prend sa place.', heroText: 'Stratégie, design et contenu pour transformer votre présence digitale en activité.', start: 'Commencer la conversation', servicesLink: 'Voir mes services', methodLabel: '02 / méthode', methodText: 'De la clarté pour se positionner. Une forme pour marquer. Un système pour grandir.', identityTitle: 'Identité', identityText: 'Une direction visuelle et verbale que l’on reconnaît.', contentTitle: 'Contenu', contentText: 'Des créations qui parlent aux personnes et activent vos canaux.', presenceTitle: 'Présence', presenceText: 'Le web, le social et les campagnes dans un seul système.', bannerLabel: '03 / formats', bannerTitle: 'Des bannières qui mettent votre marque en mouvement.', adHeadline: 'Votre marque en mouvement.', adShort: 'Une marque présente.', adCta: 'Commencer maintenant ↗'
        },
        it: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'Un buon brand non chiede permesso. Si prende il suo spazio.', heroText: 'Strategia, design e contenuti per trasformare la presenza digitale in business.', start: 'Inizia una conversazione', servicesLink: 'Scopri cosa faccio', methodLabel: '02 / metodo', methodText: 'Chiarezza per posizionare. Forma per distinguersi. Sistema per crescere.', identityTitle: 'Identità', identityText: 'Una direzione visiva e verbale riconoscibile.', contentTitle: 'Contenuti', contentText: 'Materiali che parlano alle persone e fanno crescere i canali.', presenceTitle: 'Presenza', presenceText: 'Web, social e campagne che lavorano come un unico sistema.', bannerLabel: '03 / formati', bannerTitle: 'Banner che mettono il brand in movimento.', adHeadline: 'Il tuo brand in movimento.', adShort: 'Un brand presente.', adCta: 'Inizia ora ↗'
        },
        ar: {
            eyebrow: 'E-Branding Business / 01', heroTitle: 'العلامة الجيدة لا تطلب الإذن. إنها تشغل مساحة.', heroText: 'استراتيجية وتصميم ومحتوى يحوّل حضورك الرقمي إلى أعمال.', start: 'ابدأ محادثة', servicesLink: 'اكتشف خدماتي', methodLabel: '02 / المنهج', methodText: 'وضوح للتموضع. شكل للتميّز. نظام للنمو.', identityTitle: 'الهوية', identityText: 'توجيه بصري ولغوي يجعل علامتك معروفة.', contentTitle: 'المحتوى', contentText: 'مواد تتحدث إلى الناس وتحرك قنواتك.', presenceTitle: 'الحضور', presenceText: 'الموقع والشبكات والحملات تعمل كنظام واحد.', bannerLabel: '03 / الصيغ', bannerTitle: 'لافتات تحرك علامتك التجارية.', adHeadline: 'علامتك التجارية في حركة.', adShort: 'علامة لها حضور.', adCta: 'ابدأ الآن ↗'
        }
    };

    const pageTranslations = {
        pt: { navHome: 'Início', navMethod: 'Método', navServices: 'Serviços', navWork: 'Procuro emprego', navContact: 'Contato', servicesEyebrow: 'MIGUELBRICE / Serviços', servicesTitle: 'Aprenda o próximo passo.', frontendTitle: 'Introduction for front-end', frontendDesc: 'Primeiro contato prático com interfaces e fundamentos da web.', backendTitle: 'Introduction for back-end', backendDesc: 'Visão inicial sobre lógica, servidores e o que acontece por trás da interface.', cyberTitle: 'Introduction for cybersecurity', cyberDesc: 'Introdução aos fundamentos de segurança digital e proteção de sistemas.', bookTitle: 'Agende uma introdução', bookDesc: 'Escolha um tema e converse diretamente com MIGUELBRICE.', bookCta: 'Falar comigo ↗', contactEyebrow: 'Contato', contactTitle: 'Vamos falar', contactIntro: 'Se a ideia for conversar sobre vaga, trabalho ou parceria, estes são os canais diretos.', directContact: 'Contato direto', mainInfo: 'Informações principais', quickAction: 'Ação rápida', copyTitle: 'Copiar tudo de uma vez', copyDesc: 'Útil para enviar o contato em uma conversa, sem precisar abrir cada canal manualmente.', copyButton: 'Copiar contato', workEyebrow: 'Procuro emprego', workTitle: 'Busco uma vaga para somar', workIntro: 'Meu foco é encontrar uma oportunidade onde eu possa contribuir com trabalho diário, programação e apoio criativo.' },
        en: { navHome: 'Home', navMethod: 'Method', navServices: 'Services', navWork: 'Work with me', navContact: 'Contact', servicesEyebrow: 'MIGUELBRICE / Services', servicesTitle: 'Learn your next step.', frontendTitle: 'Introduction to front-end', frontendDesc: 'A practical first look at interfaces and web fundamentals.', backendTitle: 'Introduction to back-end', backendDesc: 'A first view of logic, servers and what happens behind the interface.', cyberTitle: 'Introduction to cybersecurity', cyberDesc: 'An introduction to digital security and system protection fundamentals.', bookTitle: 'Book an introduction', bookDesc: 'Choose a topic and speak directly with MIGUELBRICE.', bookCta: 'Talk to me ↗', contactEyebrow: 'Contact', contactTitle: 'Let’s talk', contactIntro: 'For opportunities, work or partnerships, these are the direct channels.', directContact: 'Direct contact', mainInfo: 'Main information', quickAction: 'Quick action', copyTitle: 'Copy everything at once', copyDesc: 'Useful for sending the contact details in one conversation.', copyButton: 'Copy contact', workEyebrow: 'Work with me', workTitle: 'Looking for a chance to contribute', workIntro: 'I am looking for an opportunity where I can contribute with daily work, programming and creative support.' },
        es: { navHome: 'Inicio', navMethod: 'Método', navServices: 'Servicios', navWork: 'Trabaja conmigo', navContact: 'Contacto', servicesEyebrow: 'MIGUELBRICE / Servicios', servicesTitle: 'Aprende el siguiente paso.', frontendTitle: 'Introducción al front-end', frontendDesc: 'Primer contacto práctico con interfaces y fundamentos web.', backendTitle: 'Introducción al back-end', backendDesc: 'Una primera mirada a la lógica, los servidores y lo que ocurre detrás de la interfaz.', cyberTitle: 'Introducción a la ciberseguridad', cyberDesc: 'Introducción a la seguridad digital y la protección de sistemas.', bookTitle: 'Agenda una introducción', bookDesc: 'Elige un tema y habla directamente con MIGUELBRICE.', bookCta: 'Hablar conmigo ↗', contactEyebrow: 'Contacto', contactTitle: 'Hablemos', contactIntro: 'Para oportunidades, trabajos o alianzas, estos son los canales directos.', directContact: 'Contacto directo', mainInfo: 'Información principal', quickAction: 'Acción rápida', copyTitle: 'Copiar todo de una vez', copyDesc: 'Útil para enviar el contacto en una sola conversación.', copyButton: 'Copiar contacto', workEyebrow: 'Trabaja conmigo', workTitle: 'Busco una oportunidad para aportar', workIntro: 'Busco una oportunidad donde pueda contribuir con trabajo diario, programación y apoyo creativo.' },
        zh: { navHome: '首页', navServices: '服务', navWork: '与我合作', navContact: '联系', servicesEyebrow: 'MIGUELBRICE / 服务', servicesTitle: '学习下一步。', frontendTitle: '前端入门', frontendDesc: '了解界面和网页基础的实践入门。', backendTitle: '后端入门', backendDesc: '了解逻辑、服务器以及界面背后的运行方式。', cyberTitle: '网络安全入门', cyberDesc: '了解数字安全和系统保护的基础。', bookTitle: '预约入门课程', bookDesc: '选择主题，直接联系 MIGUELBRICE。', bookCta: '联系我 ↗', contactEyebrow: '联系', contactTitle: '聊聊吧', contactIntro: '关于机会、工作或合作，请使用以下直接渠道。', directContact: '直接联系', mainInfo: '主要信息', quickAction: '快速操作', copyTitle: '一键复制全部', copyDesc: '方便在一次对话中发送联系方式。', copyButton: '复制联系方式', workEyebrow: '与我合作', workTitle: '寻找可以贡献的机会', workIntro: '寻找能够贡献日常工作、编程和创意支持的机会。' },
        ru: { navHome: 'Главная', navServices: 'Услуги', navWork: 'Работа со мной', navContact: 'Контакты', servicesEyebrow: 'MIGUELBRICE / Услуги', servicesTitle: 'Изучите следующий шаг.', frontendTitle: 'Введение во front-end', frontendDesc: 'Практическое знакомство с интерфейсами и основами веба.', backendTitle: 'Введение в back-end', backendDesc: 'Знакомство с логикой, серверами и работой за интерфейсом.', cyberTitle: 'Введение в кибербезопасность', cyberDesc: 'Основы цифровой безопасности и защиты систем.', bookTitle: 'Записаться на введение', bookDesc: 'Выберите тему и свяжитесь напрямую с MIGUELBRICE.', bookCta: 'Связаться ↗', contactEyebrow: 'Контакты', contactTitle: 'Давайте поговорим', contactIntro: 'Для предложений, работы или сотрудничества используйте эти каналы.', directContact: 'Прямой контакт', mainInfo: 'Основная информация', quickAction: 'Быстрое действие', copyTitle: 'Скопировать всё', copyDesc: 'Удобно отправить контакты одним сообщением.', copyButton: 'Скопировать', workEyebrow: 'Работа со мной', workTitle: 'Ищу возможность быть полезным', workIntro: 'Ищу возможность помогать ежедневной работой, программированием и творческой поддержкой.' },
        de: { navHome: 'Startseite', navServices: 'Leistungen', navWork: 'Zusammenarbeit', navContact: 'Kontakt', servicesEyebrow: 'MIGUELBRICE / Leistungen', servicesTitle: 'Lerne deinen nächsten Schritt.', frontendTitle: 'Einführung in Front-end', frontendDesc: 'Praktischer Einstieg in Interfaces und Web-Grundlagen.', backendTitle: 'Einführung in Back-end', backendDesc: 'Ein erster Blick auf Logik, Server und die Vorgänge hinter der Oberfläche.', cyberTitle: 'Einführung in Cybersecurity', cyberDesc: 'Grundlagen digitaler Sicherheit und Systemschutz.', bookTitle: 'Einführung buchen', bookDesc: 'Wähle ein Thema und sprich direkt mit MIGUELBRICE.', bookCta: 'Kontakt aufnehmen ↗', contactEyebrow: 'Kontakt', contactTitle: 'Lass uns sprechen', contactIntro: 'Für Chancen, Projekte oder Partnerschaften sind dies die direkten Kanäle.', directContact: 'Direkter Kontakt', mainInfo: 'Wichtige Informationen', quickAction: 'Schnellaktion', copyTitle: 'Alles auf einmal kopieren', copyDesc: 'Praktisch, um die Kontaktdaten in einer Nachricht zu senden.', copyButton: 'Kontakt kopieren', workEyebrow: 'Zusammenarbeit', workTitle: 'Suche eine Chance, beizutragen', workIntro: 'Ich suche eine Gelegenheit für tägliche Arbeit, Programmierung und kreative Unterstützung.' },
        fr: { navHome: 'Accueil', navServices: 'Services', navWork: 'Travailler avec moi', navContact: 'Contact', servicesEyebrow: 'MIGUELBRICE / Services', servicesTitle: 'Apprenez la prochaine étape.', frontendTitle: 'Introduction au front-end', frontendDesc: 'Premier contact pratique avec les interfaces et les bases du web.', backendTitle: 'Introduction au back-end', backendDesc: 'Première approche de la logique, des serveurs et de ce qui se passe derrière l’interface.', cyberTitle: 'Introduction à la cybersécurité', cyberDesc: 'Introduction aux bases de la sécurité numérique et de la protection des systèmes.', bookTitle: 'Réserver une introduction', bookDesc: 'Choisissez un sujet et échangez directement avec MIGUELBRICE.', bookCta: 'Me contacter ↗', contactEyebrow: 'Contact', contactTitle: 'Parlons-en', contactIntro: 'Pour une opportunité, un projet ou un partenariat, voici les canaux directs.', directContact: 'Contact direct', mainInfo: 'Informations principales', quickAction: 'Action rapide', copyTitle: 'Tout copier en une fois', copyDesc: 'Pratique pour envoyer les coordonnées dans une conversation.', copyButton: 'Copier le contact', workEyebrow: 'Travailler avec moi', workTitle: 'Je cherche une occasion de contribuer', workIntro: 'Je cherche une opportunité pour contribuer au quotidien, en programmation et en soutien créatif.' },
        it: { navHome: 'Home', navServices: 'Servizi', navWork: 'Collabora con me', navContact: 'Contatti', servicesEyebrow: 'MIGUELBRICE / Servizi', servicesTitle: 'Impara il prossimo passo.', frontendTitle: 'Introduzione al front-end', frontendDesc: 'Primo approccio pratico alle interfacce e alle basi del web.', backendTitle: 'Introduzione al back-end', backendDesc: 'Una prima visione di logica, server e ciò che accade dietro l’interfaccia.', cyberTitle: 'Introduzione alla cybersecurity', cyberDesc: 'Introduzione ai fondamenti della sicurezza digitale e della protezione dei sistemi.', bookTitle: 'Prenota un’introduzione', bookDesc: 'Scegli un argomento e parla direttamente con MIGUELBRICE.', bookCta: 'Parla con me ↗', contactEyebrow: 'Contatti', contactTitle: 'Parliamone', contactIntro: 'Per opportunità, lavori o collaborazioni, questi sono i canali diretti.', directContact: 'Contatto diretto', mainInfo: 'Informazioni principali', quickAction: 'Azione rapida', copyTitle: 'Copia tutto insieme', copyDesc: 'Utile per inviare i contatti in una sola conversazione.', copyButton: 'Copia contatto', workEyebrow: 'Collabora con me', workTitle: 'Cerco un’opportunità per contribuire', workIntro: 'Cerco un’opportunità per contribuire con lavoro quotidiano, programmazione e supporto creativo.' },
        ar: { navHome: 'الرئيسية', navServices: 'الخدمات', navWork: 'اعمل معي', navContact: 'اتصل', servicesEyebrow: 'MIGUELBRICE / الخدمات', servicesTitle: 'تعلّم خطوتك التالية.', frontendTitle: 'مقدمة في الواجهة الأمامية', frontendDesc: 'تعرّف عملي على الواجهات وأساسيات الويب.', backendTitle: 'مقدمة في الواجهة الخلفية', backendDesc: 'نظرة أولى على المنطق والخوادم وما يحدث خلف الواجهة.', cyberTitle: 'مقدمة في الأمن السيبراني', cyberDesc: 'مقدمة إلى أساسيات الأمن الرقمي وحماية الأنظمة.', bookTitle: 'احجز جلسة مقدمة', bookDesc: 'اختر موضوعاً وتحدث مباشرة مع MIGUELBRICE.', bookCta: 'تحدث معي ↗', contactEyebrow: 'اتصل', contactTitle: 'لنتحدث', contactIntro: 'للفرص والعمل والشراكات، هذه هي قنوات التواصل المباشرة.', directContact: 'تواصل مباشر', mainInfo: 'المعلومات الرئيسية', quickAction: 'إجراء سريع', copyTitle: 'انسخ كل شيء مرة واحدة', copyDesc: 'مفيد لإرسال معلومات التواصل في محادثة واحدة.', copyButton: 'نسخ جهة الاتصال', workEyebrow: 'اعمل معي', workTitle: 'أبحث عن فرصة لأساهم', workIntro: 'أبحث عن فرصة أساهم فيها بالعمل اليومي والبرمجة والدعم الإبداعي.' }
    };

    const landingTranslations = {
        pt: { mainTitle: 'Business & Full Stack.', mainText: 'Estratégia, tecnologia e conteúdo para transformar ideias em presença digital.', founderText: 'Founder de projetos que conectam liderança, publicidade, notícias e tecnologia.', founderTitle: 'Founder', adsTitle: 'Ads & mídia', projectsTitle: 'Projetos' },
        en: { mainTitle: 'Business & Full Stack.', mainText: 'Strategy, technology and content that turn ideas into digital presence.', founderText: 'Founder of projects connecting leadership, advertising, news and technology.', founderTitle: 'Founder', adsTitle: 'Ads & media', projectsTitle: 'Projects' },
        es: { mainTitle: 'Business & Full Stack.', mainText: 'Estrategia, tecnología y contenido para convertir ideas en presencia digital.', founderText: 'Founder de proyectos que conectan liderazgo, publicidad, noticias y tecnología.', founderTitle: 'Founder', adsTitle: 'Ads y medios', projectsTitle: 'Proyectos' },
        zh: { mainTitle: '商业与全栈。', mainText: '用策略、技术和内容，将想法转化为数字影响力。', founderText: '创立连接领导力、广告、新闻与技术的项目。', founderTitle: '创始人', adsTitle: '广告与媒体', projectsTitle: '项目' },
        ru: { mainTitle: 'Бизнес и Full Stack.', mainText: 'Стратегия, технологии и контент превращают идеи в цифровое присутствие.', founderText: 'Основатель проектов на стыке лидерства, рекламы, новостей и технологий.', founderTitle: 'Основатель', adsTitle: 'Реклама и медиа', projectsTitle: 'Проекты' },
        de: { mainTitle: 'Business & Full Stack.', mainText: 'Strategie, Technologie und Inhalte machen aus Ideen digitale Präsenz.', founderText: 'Gründer von Projekten rund um Führung, Werbung, Nachrichten und Technologie.', founderTitle: 'Gründer', adsTitle: 'Werbung & Medien', projectsTitle: 'Projekte' },
        fr: { mainTitle: 'Business & Full Stack.', mainText: 'Stratégie, technologie et contenu pour transformer les idées en présence digitale.', founderText: 'Fondateur de projets qui relient leadership, publicité, actualités et technologie.', founderTitle: 'Fondateur', adsTitle: 'Publicité & médias', projectsTitle: 'Projets' },
        it: { mainTitle: 'Business & Full Stack.', mainText: 'Strategia, tecnologia e contenuti per trasformare le idee in presenza digitale.', founderText: 'Founder di progetti che uniscono leadership, pubblicità, notizie e tecnologia.', founderTitle: 'Founder', adsTitle: 'Ads e media', projectsTitle: 'Progetti' },
        ar: { mainTitle: 'الأعمال والتطوير الشامل.', mainText: 'استراتيجية وتقنية ومحتوى لتحويل الأفكار إلى حضور رقمي.', founderText: 'مؤسس مشاريع تربط بين القيادة والإعلان والأخبار والتقنية.', founderTitle: 'المؤسس', adsTitle: 'الإعلانات والإعلام', projectsTitle: 'المشاريع' }
    };

    function applyLanguage(language) {
        const dictionary = { ...(translations[language] || translations.pt), ...(pageTranslations[language] || pageTranslations.pt), ...(landingTranslations[language] || landingTranslations.pt) };
        dictionary.navMethod = { pt: 'Método', en: 'Method', es: 'Método', zh: '方法', ru: 'Метод', de: 'Methode', fr: 'Méthode', it: 'Metodo', ar: 'المنهج' }[language] || 'Método';
        translationNodes.forEach((node) => {
            const text = dictionary[node.dataset.i18n];
            if (text) {
                node.textContent = text;
            }
        });
        document.documentElement.lang = language === 'ar' ? 'ar-LB' : language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
        const pageTitles = { inicio: 'Business & Full Stack', servicos: dictionary.servicesTitle, contato: dictionary.contactTitle, emprego: dictionary.workTitle };
        const currentPage = document.body?.dataset.page;
        if (currentPage && pageTitles[currentPage]) {
            document.title = `MIGUELBRICE | ${pageTitles[currentPage]}`;
        }
        if (languageSelect) {
            languageSelect.value = language;
        }
        window.localStorage.setItem('site-language', language);
    }

    const savedLanguage = window.localStorage.getItem('site-language') || 'pt';
    applyLanguage(savedLanguage);
    languageSelect?.addEventListener('change', (event) => applyLanguage(event.target.value));

    const contactText = [
        'miguelbrice',
        'miguelbrice@gmail.com',
        '48988437879',
        'Instagram: @miguelbrice',
        'LinkedIn: @miguelbrice',
        'Tubarão, Santa Catarina'
    ].join('\n');

    const toastTimeout = 2400;
    const avatar = document.querySelector('[data-pixel-avatar]');
    const copyButtons = document.querySelectorAll('[data-copy-contact]');
    const cells = [];

    const avatarPattern = [
        '....HHHH....',
        '...HHHHHH...',
        '..HHOOOOHH..',
        '.HHOSSSSOHH.',
        '.HOSSEESSOH.',
        '.HOSSSSSSOH.',
        '.HOSSMMSSOH.',
        '.HOSSSSSSOH.',
        '..HOSSSSOH..',
        '...HTTTTH...',
        '...HTTTTH...',
        '....H..H....'
    ];

    const toneMap = {
        '.': 'tone-empty',
        H: 'tone-hair',
        O: 'tone-outline',
        S: 'tone-skin',
        T: 'tone-shirt',
        E: 'tone-eye',
        M: 'tone-mouth'
    };

    function showToast(message, variant = 'success') {
        const toast = document.createElement('div');
        toast.className = `toast toast--${variant}`;
        toast.textContent = message;
        document.body.appendChild(toast);
        requestAnimationFrame(() => toast.classList.add('toast--visible'));

        window.setTimeout(() => {
            toast.classList.remove('toast--visible');
            window.setTimeout(() => toast.remove(), 220);
        }, toastTimeout);
    }

    async function copyContact() {
        try {
            if (navigator.clipboard && navigator.clipboard.writeText) {
                await navigator.clipboard.writeText(contactText);
            } else {
                const fallback = document.createElement('textarea');
                fallback.value = contactText;
                fallback.setAttribute('readonly', 'true');
                fallback.style.position = 'absolute';
                fallback.style.left = '-9999px';
                document.body.appendChild(fallback);
                fallback.select();
                document.execCommand('copy');
                fallback.remove();
            }

            showToast('Contato copiado para a área de transferência.');
        } catch (error) {
            console.error('Não foi possível copiar o contato:', error);
            showToast('Não foi possível copiar o contato.', 'error');
        }
    }

    function renderPixelAvatar(container) {
        if (!container) {
            return;
        }

        const normalized = avatarPattern.map((row) => row.padEnd(avatarPattern[0].length, '.'));
        container.style.gridTemplateColumns = `repeat(${normalized[0].length}, 1fr)`;
        container.innerHTML = '';

        normalized.forEach((row, rowIndex) => {
            row.split('').forEach((tone, columnIndex) => {
                const cell = document.createElement('span');
                cell.className = `pixel-cell ${toneMap[tone] || toneMap['.']}`;
                cell.style.animationDelay = `${(rowIndex + columnIndex) * 22}ms`;
                cell.dataset.tone = tone;
                container.appendChild(cell);
                cells.push(cell);
            });
        });
    }

    function triggerBlink() {
        if (!avatar) {
            return;
        }

        avatar.dataset.blink = 'true';
        cells.forEach((cell) => {
            if (cell.dataset.tone === 'E') {
                cell.classList.add('pixel-cell--blink');
            }
        });

        window.setTimeout(() => {
            avatar.dataset.blink = 'false';
            cells.forEach((cell) => cell.classList.remove('pixel-cell--blink'));
        }, 160);
    }

    copyButtons.forEach((button) => {
        button.addEventListener('click', copyContact);
    });

    renderPixelAvatar(avatar);

    if (avatar) {
        window.setInterval(triggerBlink, 3200);
    }

    document.documentElement.style.scrollBehavior = 'smooth';
    console.log('%cmiguelbrice | Open to work', 'font-size: 16px; font-weight: 700; color: #8ef3c5;');
    console.log('%cTubarão, Santa Catarina', 'font-size: 12px; color: #aac1d6;');
})();
