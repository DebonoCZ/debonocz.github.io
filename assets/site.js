// Sdílený layout pro všechny podstránky Byty Drobovice
// — vkládá navigaci a patičku, řeší scroll animace, horizontální galerii, FAQ.

(function () {
  // Inline mark SVG (currentColor + ID-suffixed mask so multiple instances can coexist)
  function treeSvg(suffix) {
    const id = `tree-mask-${suffix}`;
    return `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 352" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet">
      <g class="tw-trunk">
        <path d="M178.853 84.8013H173.146V311.574H178.853V84.8013Z"/>
        <path d="M178.855 -2.02039H173.148V224.752H178.855V-2.02039Z"/>
        <path d="M174.434 99.0571C162.394 91.1354 142.022 68.0083 140.902 2.10812L146.609 2.01074C147.091 30.2745 151.234 53.2215 158.917 70.1993C165.213 84.1097 172.535 90.9748 177.57 94.2856L174.434 99.0522V99.0571Z"/>
        <path d="M177.571 99.0573L174.436 94.2906C179.47 90.9798 186.793 84.1098 193.088 70.1994C200.776 53.2119 204.915 30.2601 205.397 1.97681L211.103 2.07418C209.983 68.0036 189.612 91.1356 177.571 99.0573Z"/>
      </g>
      <mask id="${id}" style="mask-type:luminance" maskUnits="userSpaceOnUse" x="0" y="0" width="352" height="352">
        <path d="M176 352C273.202 352 352 273.202 352 176C352 78.7979 273.202 0 176 0C78.7979 0 0 78.7979 0 176C0 273.202 78.7979 352 176 352Z" fill="white"/>
      </mask>
      <g mask="url(#${id})">
        <g class="tw-branch tw-b-low">
          <path d="M175.972 221.899H2.06055V227.605H175.972V221.899Z"/>
          <path d="M349.942 221.899H176.031V227.605H349.942V221.899Z"/>
          <path d="M79.1394 226.758C67.3372 214.805 53.8066 204.926 38.9176 197.404C25.3724 190.582 10.7512 185.787 -4.52734 183.148L-3.55844 177.524C12.28 180.26 27.4368 185.231 41.4884 192.311C56.9324 200.116 70.9694 210.355 83.2049 222.751L79.1442 226.758H79.1394Z"/>
          <path d="M272.857 226.758L268.797 222.751C281.032 210.355 295.064 200.116 310.508 192.311C324.565 185.231 339.722 180.26 355.555 177.524L356.524 183.148C341.241 185.787 326.624 190.582 313.074 197.404C298.19 204.926 284.655 214.8 272.853 226.758H272.857Z"/>
          <path d="M20.1913 270.851L19.8164 265.159C41.7069 263.718 60.749 257.072 76.4122 245.406C84.5383 239.33 91.7102 231.934 97.7281 223.423L102.388 226.714C96.024 235.712 88.4334 243.541 79.8301 249.978C63.2662 262.316 43.2065 269.341 20.1962 270.851H20.1913Z"/>
          <path d="M332.009 270.534C308.931 269.02 288.827 261.989 272.263 249.632C263.777 243.332 256.177 235.517 249.682 226.408L254.327 223.097C260.476 231.719 267.658 239.11 275.672 245.055C291.345 256.741 310.421 263.396 332.384 264.842L332.009 270.534Z"/>
        </g>
        <g class="tw-branch tw-b-mid">
          <path d="M174.035 226.821L128.18 183.279L22.6914 83.058L26.6206 78.9243L132.11 179.14L177.965 222.683L174.035 226.821Z"/>
          <path d="M177.962 226.821L174.033 222.683L219.888 179.14L325.377 78.9243L329.306 83.058L223.817 183.279L177.962 226.821Z"/>
          <path d="M87.0277 179.438C86.8183 179.438 86.609 179.438 86.3996 179.438C74.4076 179.345 61.7096 176.555 48.661 171.146C32.4963 164.446 15.7231 153.676 -1.19141 139.138L2.52841 134.81C22.8949 152.313 53.9047 173.279 85.9857 173.726C95.9329 173.873 103.47 171.949 108.047 170.318C113.008 168.551 115.657 166.72 115.686 166.701L118.977 171.365C118.505 171.696 107.341 179.438 87.0374 179.438H87.0277Z"/>
          <path d="M264.975 179.438C244.672 179.438 233.507 171.696 233.035 171.365L236.331 166.71C236.331 166.71 238.995 168.551 243.961 170.318C248.538 171.949 256.084 173.868 266.022 173.726C298.103 173.274 329.113 152.313 349.479 134.81L353.199 139.138C336.284 153.676 319.511 164.446 303.347 171.146C290.298 176.555 277.6 179.345 265.608 179.438C265.399 179.438 265.189 179.438 264.98 179.438H264.975Z"/>
          <path d="M55.4788 133.49C44.0369 133.49 27.8041 128.631 7.82227 109.832L11.732 105.674C45.7946 137.716 66.6967 126.342 70.5382 123.733L70.5869 123.699C70.9423 123.47 71.1371 123.324 71.1371 123.319L74.6281 127.832C74.5696 127.876 74.2532 128.12 73.7127 128.47C71.6142 129.887 65.3139 133.48 55.4739 133.48L55.4788 133.49Z"/>
          <path d="M296.511 133.485C286.675 133.485 280.38 129.896 278.282 128.475C277.736 128.119 277.42 127.881 277.361 127.837L280.852 123.323C280.852 123.323 281.047 123.469 281.402 123.703L281.451 123.737C285.293 126.342 306.2 137.716 340.287 105.649L344.196 109.807C324.195 128.626 307.952 133.49 296.501 133.49L296.511 133.485Z"/>
        </g>
        <g class="tw-branch tw-b-high">
          <path d="M173.345 223.53L140.967 137.458L132.237 114.297L95.4629 16.6129L100.804 14.6021L137.574 112.286L146.304 135.447L178.687 221.524L173.345 223.53Z"/>
          <path d="M178.685 225.755L173.344 223.749L205.697 137.706L214.427 114.535L251.942 14.9182L257.278 16.9291L219.764 116.551L211.034 139.717L178.685 225.755Z"/>
          <path d="M130.702 116.391C117.098 116.391 76.8714 110.835 48.3301 49.502L53.5008 47.0968C66.1794 74.3381 82.5485 93.2391 102.155 103.264C117.488 111.103 130.015 110.85 133.487 110.587C134.051 110.548 134.334 110.494 134.334 110.494L135.497 116.079C135.356 116.108 134.83 116.21 133.905 116.279C133.117 116.337 132.036 116.391 130.697 116.391H130.702Z"/>
          <path d="M221.231 118.615C219.858 118.615 218.792 118.557 218.071 118.499C217.219 118.44 216.747 118.372 216.693 118.362L217.492 112.714C217.492 112.714 217.838 112.763 218.5 112.807C222.025 113.084 234.664 113.367 250.211 105.304C270.042 95.0257 286.537 75.6671 299.231 47.7684L304.426 50.1298C291.192 79.2213 273.834 99.4905 252.84 110.368C239.08 117.496 227.249 118.606 221.236 118.606L221.231 118.615Z"/>
          <path d="M117.007 76.018C109.382 76.018 87.1171 72.2933 69.3359 32.1105L74.5554 29.8026C82.2531 47.1991 91.5283 59.2642 102.128 65.6521C110.307 70.5843 116.608 70.4236 118.346 70.2532L118.453 70.2435C118.711 70.2289 118.862 70.1996 118.867 70.1996L119.953 75.7989C119.846 75.8183 119.446 75.8914 118.843 75.9303C118.39 75.9741 117.776 76.0082 117.012 76.0082L117.007 76.018Z"/>
          <path d="M234.873 78.2625C234.172 78.2625 233.602 78.2333 233.178 78.1943C232.57 78.1554 232.171 78.0823 232.059 78.0629L233.178 72.4685L232.619 75.2681L233.144 72.4637C233.144 72.4637 233.3 72.488 233.558 72.5075H233.641C235.433 72.673 241.923 72.7948 250.215 67.6873C261.038 61.0218 270.464 48.465 278.24 30.3528L283.484 32.6022C265.493 74.5232 242.497 78.2674 234.878 78.2674L234.873 78.2625Z"/>
        </g>
      </g>
    </svg>`;
  }

  const NAV_LINKS = [
    { href: "/", label: "Úvod", key: "home" },
    { href: "/o-projektu", label: "O projektu", key: "about" },
    { href: "/lokalita", label: "Lokalita", key: "location" },
    { href: "/byty", label: "Nabídka bytů", key: "units" },
    { href: "/standardy", label: "Standardy", key: "standards" },
    { href: "/financovani", label: "Financování", key: "finance" },
    { href: "/galerie", label: "Galerie", key: "gallery" },
    { href: "/kontakt", label: "Kontakt", key: "contact" },
  ];

  const FOOTER_LINKS = {
    project: [
      { href: "/o-projektu", label: "O projektu" },
      { href: "/lokalita", label: "Lokalita" },
      { href: "/standardy", label: "Standardy" },
      { href: "/galerie", label: "Galerie" },
    ],
    buy: [
      { href: "/byty", label: "Nabídka bytů" },
      { href: "/financovani", label: "Financování" },
      { href: "/kontakt", label: "Kontakt" },
    ],
  };

  function navHTML(activeKey) {
    const links = NAV_LINKS
      .filter((l) => l.key !== "home")
      .map((l) => `<a href="${l.href}" class="${l.key === activeKey ? "is-active" : ""}">${l.label}</a>`)
      .join("");
    return `
      <nav class="nav" id="site-nav" aria-label="Hlavní navigace">
        <a class="nav__logo" href="/" aria-label="Byty Drobovice">
          <img class="nav__logo-img" src="assets/logo-drobovice-forest.svg" alt="Byty Drobovice" width="180" height="38" />
        </a>
        <div class="nav__links">${links}</div>
        <div class="nav__cta">
          <a class="btn btn-dark" href="/kontakt" data-contact-open>Mám zájem
            <span class="arrow" aria-hidden="true">→</span>
          </a>
          <button class="nav__burger" id="nav-burger" aria-label="Otevřít menu">
            <span></span><span></span><span></span>
          </button>
        </div>
      </nav>
      <div class="drawer" id="drawer" aria-hidden="true">
        <button class="drawer__close" id="drawer-close" aria-label="Zavřít">×</button>
        ${NAV_LINKS.map((l) => `<a href="${l.href}">${l.label}</a>`).join("")}
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-top:32px;">
          <a class="btn btn-primary" href="/kontakt" data-contact-open>Mám zájem <span class="arrow">→</span></a>
          <a class="btn btn-ghost" href="tel:+420776442644">+420 776 442 644</a>
        </div>
      </div>
    `;
  }

  function footerHTML() {
    const treeFoot = treeSvg('foot');
    return `
      <footer class="foot">
        <div class="foot__center">
          <div class="foot__mark" aria-hidden="true">${treeFoot}</div>
          <h2 class="foot__wordmark">Byty <em>Drobovice</em></h2>
          <p class="foot__tagline">Probuďte se uprostřed stromů. Velké město zůstává za rohem.</p>
          <div class="btn-row">
            <a class="btn btn-primary btn-xl" href="/kontakt" data-contact-open>
              Naplánovat prohlídku <span class="arrow" aria-hidden="true">→</span>
            </a>
            <a class="btn btn-ghost btn-xl" href="tel:+420776442644" style="color:var(--cream);border-color:color-mix(in oklab,var(--cream) 30%,transparent);">
              +420 776 442 644
            </a>
          </div>
        </div>
        <div class="foot__cols">
          <div class="foot__col">
            <h5>Projekt</h5>
            <ul>
              ${FOOTER_LINKS.project.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>
          <div class="foot__col">
            <h5>Koupě</h5>
            <ul>
              ${FOOTER_LINKS.buy.map((l) => `<li><a href="${l.href}">${l.label}</a></li>`).join("")}
            </ul>
          </div>
          <div class="foot__col">
            <h5>Developer</h5>
            <address>
              STAVBARTA s.r.o.<br>
              Rodinná stavební firma od 1987<br>
              Čáslav · střední Čechy<br><br>
              <a href="tel:+420776442644">+420 776 442 644</a><br>
              <a href="mailto:info@stavbarta.cz">info@stavbarta.cz</a>
            </address>
          </div>
        </div>
        <div class="foot__bottom">
          <span>© 2026 STAVBARTA s.r.o.</span>
          <span><a href="#" data-cookie-settings style="color:inherit;border-bottom:1px solid color-mix(in oklab,var(--cream) 30%,transparent);">Nastavení cookies</a></span>
          <span>Drobovice 142 · 285 22 · Středočeský kraj</span>
        </div>
      </footer>
    `;
  }

  function injectChrome() {
    const activeKey = document.body.dataset.page || "home";
    const navMount = document.getElementById("site-nav-mount") || (() => {
      const d = document.createElement("div");
      d.id = "site-nav-mount";
      document.body.prepend(d);
      return d;
    })();
    navMount.outerHTML = navHTML(activeKey);

    const footMount = document.getElementById("site-foot-mount") || (() => {
      const d = document.createElement("div");
      d.id = "site-foot-mount";
      document.body.append(d);
      return d;
    })();
    footMount.outerHTML = footerHTML();
  }

  function setupNavScroll() {
    const nav = document.getElementById("site-nav");
    if (!nav) return;
    const onScroll = () => {
      if (window.scrollY > 20) nav.classList.add("scrolled");
      else nav.classList.remove("scrolled");
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
  }

  function setupDrawer() {
    const drawer = document.getElementById("drawer");
    const burger = document.getElementById("nav-burger");
    const close = document.getElementById("drawer-close");
    if (!drawer || !burger) return;
    const open = () => { drawer.classList.add("open"); drawer.setAttribute("aria-hidden", "false"); };
    const shut = () => { drawer.classList.remove("open"); drawer.setAttribute("aria-hidden", "true"); };
    burger.addEventListener("click", open);
    close && close.addEventListener("click", shut);
    drawer.querySelectorAll("a").forEach((a) => a.addEventListener("click", shut));
  }

  function setupReveals() {
    const targets = document.querySelectorAll("[data-reveal]");
    if (!targets.length) return;
    const reveal = (el) => el.classList.add("is-in");
    if (!("IntersectionObserver" in window)) {
      targets.forEach(reveal);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          reveal(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -10% 0px", threshold: 0.05 });
    targets.forEach((el) => io.observe(el));
    // Fallback: pokud IO neodpoví během 300 ms (statické náhledy, html-to-image
    // a podobně), odhalíme alespoň to, co je v aktuálním viewportu.
    const manualSweep = () => {
      const vh = window.innerHeight;
      targets.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) reveal(el);
      });
    };
    setTimeout(manualSweep, 300);
    // Záchranná pojistka — po 2 s odhalíme zbytek bez ohledu na pozici,
    // aby uživatel nezůstal koukat na prázdnou stránku, kdyby IO selhal.
    setTimeout(() => targets.forEach(reveal), 2200);
  }

  function setupFAQ() {
    document.querySelectorAll(".faq__item").forEach((item) => {
      const q = item.querySelector(".faq__q");
      if (!q) return;
      q.addEventListener("click", () => item.classList.toggle("open"));
    });
  }

  function setupHGallery() {
    document.querySelectorAll(".hgallery").forEach((g) => {
      const scroll = g.querySelector(".hgallery__scroll");
      const prev = g.querySelector("[data-hg-prev]");
      const next = g.querySelector("[data-hg-next]");
      const counter = g.querySelector("[data-hg-current]");
      const totalEl = g.querySelector("[data-hg-total]");
      if (!scroll) return;
      const items = scroll.querySelectorAll(".hgallery__item");
      if (totalEl) totalEl.textContent = String(items.length).padStart(2, "0");
      const step = () => (items[1] ? items[1].getBoundingClientRect().left - items[0].getBoundingClientRect().left : 400);
      prev && prev.addEventListener("click", () => scroll.scrollBy({ left: -step(), behavior: "smooth" }));
      next && next.addEventListener("click", () => scroll.scrollBy({ left: step(), behavior: "smooth" }));
      const updateCounter = () => {
        if (!counter) return;
        const left = scroll.scrollLeft;
        let idx = 0;
        items.forEach((it, i) => {
          if (it.offsetLeft - scroll.offsetLeft <= left + 24) idx = i;
        });
        counter.textContent = String(idx + 1).padStart(2, "0");
        if (prev) prev.disabled = idx === 0;
        if (next) next.disabled = idx === items.length - 1;
      };
      updateCounter();
      scroll.addEventListener("scroll", updateCounter, { passive: true });
    });
  }

  function setupCalc() {
    const calc = document.getElementById("calc");
    if (!calc) return;
    const price = calc.querySelector("#calc-price");
    const down = calc.querySelector("#calc-down");
    const years = calc.querySelector("#calc-years");
    const rate = calc.querySelector("#calc-rate");
    const out = {
      price: calc.querySelector("#calc-price-out"),
      down: calc.querySelector("#calc-down-out"),
      years: calc.querySelector("#calc-years-out"),
      rate: calc.querySelector("#calc-rate-out"),
      loan: calc.querySelector("#calc-loan-out"),
      monthly: calc.querySelector("#calc-monthly-out"),
    };
    const fmt = (n) => new Intl.NumberFormat("cs-CZ").format(Math.round(n));
    const update = () => {
      const p = +price.value, d = +down.value, y = +years.value, r = +rate.value;
      const loan = Math.max(0, p - (p * d / 100));
      const monthlyRate = r / 100 / 12;
      const n = y * 12;
      const m = monthlyRate === 0 ? loan / n : (loan * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -n));
      out.price.textContent = fmt(p) + " Kč";
      out.down.textContent = d + " %";
      out.years.textContent = y + " let";
      out.rate.textContent = r.toFixed(2) + " %";
      out.loan.textContent = fmt(loan) + " Kč";
      out.monthly.textContent = fmt(m) + " Kč";
    };
    [price, down, years, rate].forEach((i) => i && i.addEventListener("input", update));
    update();
  }

  function setupTreeWatermarks() {
    const nodes = document.querySelectorAll("[data-tree-watermark]");
    nodes.forEach((el, i) => {
      el.innerHTML = treeSvg(i);
    });
    if (!nodes.length) return;
    const trigger = (el) => el.classList.add("is-in");
    if (!("IntersectionObserver" in window)) {
      nodes.forEach(trigger);
      return;
    }
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          trigger(e.target);
          io.unobserve(e.target);
        }
      });
    }, { rootMargin: "0px 0px -8% 0px", threshold: 0.05 });
    nodes.forEach((el) => io.observe(el));
    const manualSweep = () => {
      const vh = window.innerHeight;
      nodes.forEach((el) => {
        if (el.classList.contains("is-in")) return;
        const r = el.getBoundingClientRect();
        if (r.top < vh * 0.95 && r.bottom > 0) trigger(el);
      });
    };
    setTimeout(manualSweep, 350);
    setTimeout(() => nodes.forEach(trigger), 2400);
  }

  function setupUnitModal() {
    const modal = document.getElementById("unit-modal");
    if (!modal || !window.UNITS) return;
    const card = modal.querySelector(".unit-modal__card");
    const body = modal.querySelector(".unit-modal__body-inner");
    const close = () => {
      modal.classList.remove("open");
      document.body.style.overflow = "";
    };
    modal.addEventListener("click", (e) => {
      if (e.target === modal) close();
    });
    modal.querySelector(".unit-modal__close").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape") close();
    });

    const fmt = (n) => new Intl.NumberFormat("cs-CZ").format(n);
    const statusLabel = { available: "Volné", reserved: "Rezervováno", sold: "Prodáno" };
    const statusClass = { available: "av", reserved: "re", sold: "so" };

    const open = (id) => {
      const u = window.UNITS.find((x) => x.id === id);
      if (!u) return;
      const floorLabel = ({ 0: "Přízemí", 1: "1. patro", 2: "2. patro" })[u.floor];
      const rooms = (u.rooms || []).map((r) => `<li><span class="k">${r.name}</span><span class="v">${r.area.toFixed(1)} m²</span></li>`).join("");
      const outdoor = u.outdoor ? `${u.outdoor.kind} ${u.outdoor.area} m²` : "—";
      body.innerHTML = `
        <div class="unit-modal__hd">
          <span class="label">${u.label}</span>
          <div>
            <h3>${u.type} · ${u.disposition}</h3>
            <p class="meta">${floorLabel} · ${u.area} m² · ${outdoor} · orientace ${u.orientation}</p>
          </div>
          <span class="status ${statusClass[u.status]}">${statusLabel[u.status]}</span>
        </div>
        <div class="unit-modal__body">
          <div>
            <div class="unit-modal__plan">
              <svg viewBox="0 0 400 300" style="width:100%;max-width:380px;" aria-hidden="true">
                <rect x="20" y="20" width="360" height="260" fill="none" stroke="#1A4639" stroke-width="2"/>
                <text x="200" y="156" text-anchor="middle" font-family="ui-monospace" font-size="11" fill="#6B7872" letter-spacing="2">PŮDORYS JEDNOTKY ${u.label}</text>
                <text x="200" y="180" text-anchor="middle" font-family="ui-monospace" font-size="9" fill="#6B7872" letter-spacing="1">${u.disposition} · ${u.area} m²</text>
              </svg>
            </div>
            <p class="unit-modal__desc">${u.description || ""}</p>
          </div>
          <div>
            <div class="unit-modal__rooms">
              <h4>Místnosti</h4>
              <ul>${rooms}</ul>
            </div>
            <div class="unit-modal__props">
              <h4>Parametry</h4>
              <ul>
                <li><span class="k">Patro</span><span class="v">${floorLabel}</span></li>
                <li><span class="k">Dispozice</span><span class="v">${u.disposition}</span></li>
                <li><span class="k">Užitná plocha</span><span class="v">${u.area} m²</span></li>
                <li><span class="k">Venkovní prostor</span><span class="v">${outdoor}</span></li>
                <li><span class="k">Orientace</span><span class="v">${u.orientation}</span></li>
                <li><span class="k">Parkování</span><span class="v">${u.parking} stání</span></li>
                <li><span class="k">Sklep</span><span class="v">${u.cellar ? "ano" : "ne"}</span></li>
                <li><span class="k">Energetická třída</span><span class="v">${u.energy}</span></li>
              </ul>
            </div>
            <div class="unit-modal__price">
              <span class="k">${u.status === "available" ? "Cena od" : "Cena"}</span>
              <span class="v">${u.priceFrom ? fmt(u.priceFrom) + " Kč" : u.priceNote}</span>
            </div>
          </div>
        </div>
        <div class="unit-modal__cta">
          <a class="btn btn-dark btn-xl" href="/kontakt?unit=${u.id}" data-contact-open data-unit="${u.id}">
            Mám zájem o ${u.label} <span class="arrow" aria-hidden="true">→</span>
          </a>
          <a class="btn btn-ghost" href="/financovani#calc">Spočítat splátku</a>
        </div>
      `;
      modal.classList.add("open");
      document.body.style.overflow = "hidden";
      card.scrollTop = 0;
    };

    document.querySelectorAll("[data-unit]").forEach((el) => {
      el.addEventListener("click", (e) => {
        e.preventDefault();
        open(el.dataset.unit);
      });
    });
  }

  function contactModalHTML() {
    return `
      <div class="contact-modal" id="contact-modal" aria-hidden="true" role="dialog" aria-modal="true" aria-labelledby="contact-modal-title">
        <div class="contact-modal__card" role="document">
          <button class="contact-modal__close" aria-label="Zavřít" data-contact-close>×</button>
          <aside class="contact-modal__person">
            <div class="contact-modal__avatar" aria-label="Foto: Dominik Bárta"></div>
            <div>
              <span class="role">Prodej a klientské záležitosti</span>
              <h3>Dominik <em>Bárta</em></h3>
            </div>
            <p class="quote">„Rád se s vámi setkám na stavbě nebo v Drobovicích. Stačí napsat — ozvu se obratem.“</p>
            <div class="links">
              <a href="tel:+420776442644"><span class="ic" aria-hidden="true">☎</span>+420 776 442 644</a>
              <a href="mailto:dominik@stavbarta.cz"><span class="ic" aria-hidden="true">@</span>dominik@stavbarta.cz</a>
            </div>
          </aside>
          <form class="contact-modal__form" id="contact-form" novalidate>
            <p class="eyebrow">Nechám kontakt</p>
            <h4 id="contact-modal-title">Ozvěme se vám <em>do dvou dnů.</em></h4>
            <label>Jméno a příjmení
              <input required name="name" autocomplete="name" placeholder="Jan Novák" />
            </label>
            <div class="row">
              <label>Telefon
                <input required type="tel" name="phone" autocomplete="tel" placeholder="+420 …" />
              </label>
              <label>E‑mail
                <input required type="email" name="email" autocomplete="email" placeholder="vy@email.cz" />
              </label>
            </div>
            <label>Zpráva <span style="opacity:0.6">(nepovinné)</span>
              <textarea name="message" rows="3" placeholder="O kterou jednotku se zajímáte? Chcete prohlídku stavby?"></textarea>
            </label>
            <div class="actions">
              <button type="submit" class="btn btn-dark btn-xl">
                Odeslat <span class="arrow" aria-hidden="true">→</span>
              </button>
              <p class="gdpr">Odesláním souhlasíte se zpracováním osobních údajů za účelem reakce na poptávku.</p>
            </div>
            <div class="thanks">Děkujeme! Dominik se vám ozve do dvou pracovních dnů.</div>
          </form>
        </div>
      </div>
    `;
  }

  function setupContactModal() {
    let modalMount = document.getElementById("contact-modal");
    if (!modalMount) {
      const wrap = document.createElement("div");
      wrap.innerHTML = contactModalHTML().trim();
      modalMount = wrap.firstChild;
      document.body.append(modalMount);
    }
    const modal = modalMount;
    const form = modal.querySelector("#contact-form");
    const open = (unitId) => {
      modal.classList.add("open");
      modal.setAttribute("aria-hidden", "false");
      document.body.style.overflow = "hidden";
      const msg = form.querySelector('[name="message"]');
      if (unitId && msg && !msg.value) msg.value = `Mám zájem o jednotku ${unitId}.`;
      setTimeout(() => form.querySelector('[name="name"]').focus(), 200);
    };
    const close = () => {
      modal.classList.remove("open");
      modal.setAttribute("aria-hidden", "true");
      document.body.style.overflow = "";
    };
    window.openContactModal = open;
    modal.addEventListener("click", (e) => { if (e.target === modal) close(); });
    modal.querySelector("[data-contact-close]").addEventListener("click", close);
    document.addEventListener("keydown", (e) => {
      if (e.key === "Escape" && modal.classList.contains("open")) close();
    });
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      form.classList.add("is-sent");
      setTimeout(() => { close(); form.classList.remove("is-sent"); form.reset(); }, 2200);
    });
    document.addEventListener("click", (e) => {
      const trigger = e.target.closest("[data-contact-open]");
      if (!trigger) return;
      e.preventDefault();
      open(trigger.dataset.unit || null);
    });
  }

  function setupPageLoader() {
    const loader = document.getElementById("page-loader");
    if (!loader) return;
    const hide = () => {
      loader.classList.remove("is-loading");
      setTimeout(() => loader.classList.add("is-hidden"), 280);
    };
    // Wait for critical fonts (Regular + Medium) — much faster than waiting
    // for the whole font set. Hard timeout keeps it snappy.
    let waiter;
    if (document.fonts && document.fonts.load) {
      waiter = Promise.all([
        document.fonts.load('1em "Mona Sans Expanded"'),
        document.fonts.load('500 1em "Mona Sans Expanded"')
      ]).catch(() => {});
    } else {
      waiter = Promise.resolve();
    }
    Promise.race([
      waiter,
      new Promise((r) => setTimeout(r, 450)) // hard cap — never block longer
    ]).then(() => requestAnimationFrame(hide));

    // Intercept internal link clicks to show the loader during navigation.
    document.addEventListener("click", (e) => {
      const a = e.target.closest && e.target.closest("a");
      if (!a) return;
      const href = a.getAttribute("href");
      if (!href) return;
      if (href.startsWith("#") || href.startsWith("mailto:") || href.startsWith("tel:") || href.startsWith("javascript:")) return;
      if (a.target === "_blank" || a.hasAttribute("download")) return;
      if (a.hasAttribute("data-no-loader")) return;
      let url;
      try { url = new URL(href, location.href); } catch (_) { return; }
      if (url.origin !== location.origin) return;
      if (url.pathname === location.pathname && url.search === location.search) return; // same page (anchor)
      e.preventDefault();
      loader.classList.remove("is-hidden");
      requestAnimationFrame(() => loader.classList.add("is-loading"));
      setTimeout(() => { location.href = href; }, 140);
    });

    // bfcache restore — page came back from history
    window.addEventListener("pageshow", (e) => {
      if (e.persisted) {
        loader.classList.remove("is-loading");
        setTimeout(() => loader.classList.add("is-hidden"), 200);
      }
    });
  }

  function init() {
    injectChrome();
    setupNavScroll();
    setupDrawer();
    setupReveals();
    setupFAQ();
    setupHGallery();
    setupCalc();
    setupTreeWatermarks();
    setupContactModal();
    setupUnitModal();
    setupPageLoader();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
