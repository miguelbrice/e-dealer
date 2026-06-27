(() => {
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
