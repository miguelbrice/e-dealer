(() => {
    const pageName = document.body?.dataset.page || 'inicio';
    const title = document.body?.dataset.title;
    const navLinks = Array.from(document.querySelectorAll('[data-nav-link]'));

    if (title) {
        document.title = title;
    }

    function normalizeHref(value) {
        const url = new URL(value, window.location.href);
        return url.pathname.replace(/\/$/, '').split('/').pop() || 'index.html';
    }

    function isModifiedEvent(event) {
        return event.metaKey || event.ctrlKey || event.shiftKey || event.altKey || event.button !== 0;
    }

    function markCurrentPage() {
        navLinks.forEach((link) => {
            const route = normalizeHref(link.getAttribute('href') || 'index.html');
            const current = normalizeHref(window.location.href);

            if (route === current) {
                link.setAttribute('aria-current', 'page');
            } else {
                link.removeAttribute('aria-current');
            }
        });
    }

    function navigate(event) {
        const link = event.currentTarget;
        const href = link.getAttribute('href');

        if (!href || href.startsWith('http') || isModifiedEvent(event)) {
            return;
        }

        const target = normalizeHref(href);
        const current = normalizeHref(window.location.href);

        if (target === current) {
            return;
        }

        event.preventDefault();
        document.body.classList.add('is-leaving');

        window.setTimeout(() => {
            window.location.href = href;
        }, 240);
    }

    navLinks.forEach((link) => {
        link.addEventListener('click', navigate);
    });

    window.addEventListener('pageshow', () => {
        document.body.classList.remove('is-leaving');
        document.body.classList.add('is-entered');
        markCurrentPage();
    });

    requestAnimationFrame(() => {
        document.body.classList.add('is-entered');
        markCurrentPage();
    });

    window.history.scrollRestoration = 'manual';

    console.log(`%cPágina ativa: ${pageName}`, 'font-size: 12px; color: #9db1d1;');
})();