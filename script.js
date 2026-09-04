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

    function applyLanguage(language) {
        const dictionary = translations[language] || translations.pt;
        translationNodes.forEach((node) => {
            const text = dictionary[node.dataset.i18n];
            if (text) {
                node.textContent = text;
            }
        });
        document.documentElement.lang = language === 'ar' ? 'ar-LB' : language;
        document.documentElement.dir = language === 'ar' ? 'rtl' : 'ltr';
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
