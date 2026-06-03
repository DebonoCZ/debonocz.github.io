/* ============================================================
   Byty Drobovice — souhlas s cookies (GDPR / ePrivacy, CZ)
   ------------------------------------------------------------
   • Google Analytics (G-TBLRCK3YFX) se spustí AŽ PO udělení
     souhlasu — skript GA se do té doby vůbec nenačítá
     (Google Consent Mode v2, výchozí stav „denied").
   • Nezbytné cookies běží vždy (technicky nutné, bez souhlasu).
   • Souhlas lze kdykoli změnit/odvolat (odkaz „Nastavení cookies"
     nebo libovolný prvek s atributem data-cookie-settings).
   Stačí vložit na každou stránku:
     <script src="assets/cookie-consent.js"></script>
   ============================================================ */
(function () {
  "use strict";

  var GA_ID = "G-TBLRCK3YFX";
  var STORE_KEY = "cookie-consent-v1";

  /* ---- Consent Mode v2: výchozí stav = vše zakázáno --------- */
  window.dataLayer = window.dataLayer || [];
  function gtag() { window.dataLayer.push(arguments); }
  window.gtag = window.gtag || gtag;
  gtag("consent", "default", {
    ad_storage: "denied",
    ad_user_data: "denied",
    ad_personalization: "denied",
    analytics_storage: "denied",
    functionality_storage: "granted",
    security_storage: "granted",
    wait_for_update: 500
  });
  gtag("js", new Date());

  /* ---- Uložení / načtení souhlasu -------------------------- */
  function readConsent() {
    try { return JSON.parse(localStorage.getItem(STORE_KEY) || "null"); }
    catch (e) { return null; }
  }
  function writeConsent(analytics) {
    var data = { necessary: true, analytics: !!analytics, ts: new Date().toISOString(), v: 1 };
    try { localStorage.setItem(STORE_KEY, JSON.stringify(data)); } catch (e) {}
    return data;
  }

  /* ---- Načtení Google Analytics (až po souhlasu) ----------- */
  var gaLoaded = false;
  function loadGA() {
    if (gaLoaded) return;
    gaLoaded = true;
    var s = document.createElement("script");
    s.async = true;
    s.src = "https://www.googletagmanager.com/gtag/js?id=" + encodeURIComponent(GA_ID);
    document.head.appendChild(s);
    gtag("config", GA_ID, { anonymize_ip: true });
  }
  function applyConsent(analytics) {
    gtag("consent", "update", {
      analytics_storage: analytics ? "granted" : "denied"
    });
    if (analytics) loadGA();
  }

  /* ---- Styl ------------------------------------------------- */
  function injectStyles() {
    if (document.getElementById("cookie-consent-styles")) return;
    var css = ""
+ ":root{--cc-forest:#1A4639;--cc-forest-deep:#0F2A22;--cc-lime:#CDE98E;--cc-lime-deep:#B5D866;--cc-cream:#F5F2EA;--cc-paper:#FFFFFF;--cc-ink:#0F2A22;--cc-muted:#6B7872;--cc-line:#DCD6C9;}"
+ ".cc-font{font-family:'Mona Sans Expanded','Mona Sans',ui-sans-serif,system-ui,-apple-system,sans-serif;}"
+ ".cc-banner{position:fixed;left:18px;right:18px;bottom:18px;z-index:9000;max-width:520px;background:var(--cc-cream);color:var(--cc-ink);border:1px solid color-mix(in oklab,var(--cc-forest) 14%,transparent);border-radius:24px;box-shadow:0 18px 50px rgba(15,42,34,.18),0 50px 110px rgba(15,42,34,.12);padding:26px 26px 22px;opacity:0;transform:translateY(16px);transition:opacity .4s cubic-bezier(.2,.8,.2,1),transform .4s cubic-bezier(.2,.8,.2,1);}"
+ ".cc-banner.cc-in{opacity:1;transform:none;}"
+ "@media(min-width:560px){.cc-banner{left:auto;right:24px;bottom:24px;}}"
+ ".cc-banner h2{font-size:1.18rem;font-weight:500;letter-spacing:-.01em;margin:0 0 8px;color:var(--cc-forest);}"
+ ".cc-banner p{font-size:.92rem;line-height:1.55;color:var(--cc-ink);opacity:.86;margin:0 0 14px;text-wrap:pretty;}"
+ ".cc-banner a.cc-link{color:var(--cc-forest);text-decoration:underline;text-underline-offset:3px;}"
+ ".cc-banner a.cc-link:hover{opacity:.7;}"
+ ".cc-actions{display:flex;flex-wrap:wrap;gap:10px;}"
+ ".cc-btn{font:inherit;cursor:pointer;border:0;border-radius:999px;padding:13px 22px;font-size:.92rem;font-weight:500;letter-spacing:-.005em;line-height:1;transition:transform .25s,background .2s,border-color .2s,color .2s;white-space:nowrap;}"
+ ".cc-btn:hover{transform:translateY(-1px);}"
+ ".cc-btn--primary{background:var(--cc-lime);color:var(--cc-forest);}"
+ ".cc-btn--primary:hover{background:var(--cc-lime-deep);}"
+ ".cc-btn--dark{background:var(--cc-forest);color:var(--cc-cream);}"
+ ".cc-btn--dark:hover{background:var(--cc-forest-deep);}"
+ ".cc-btn--ghost{background:transparent;color:var(--cc-forest);border:1.5px solid color-mix(in oklab,var(--cc-forest) 24%,transparent);}"
+ ".cc-btn--ghost:hover{border-color:var(--cc-forest);background:color-mix(in oklab,var(--cc-forest) 6%,transparent);}"
+ ".cc-actions .cc-grow{flex:1 1 auto;}"
+ ".cc-overlay{position:fixed;inset:0;z-index:9100;background:color-mix(in oklab,var(--cc-forest-deep) 74%,transparent);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);display:none;align-items:center;justify-content:center;padding:16px;}"
+ ".cc-overlay.cc-open{display:flex;}"
+ ".cc-modal{background:var(--cc-cream);color:var(--cc-ink);width:100%;max-width:620px;max-height:90vh;overflow:auto;border-radius:24px;position:relative;box-shadow:0 18px 50px rgba(15,42,34,.2);}"
+ ".cc-modal__hd{position:sticky;top:0;background:var(--cc-cream);padding:28px 30px 16px;border-bottom:1px solid var(--cc-line);z-index:1;}"
+ ".cc-modal__hd h2{margin:0 0 6px;font-size:1.35rem;font-weight:500;letter-spacing:-.015em;color:var(--cc-forest);}"
+ ".cc-modal__hd p{margin:0;font-size:.9rem;line-height:1.5;color:var(--cc-muted);}"
+ ".cc-close{position:absolute;top:20px;right:20px;width:40px;height:40px;border-radius:50%;border:0;cursor:pointer;background:color-mix(in oklab,var(--cc-forest) 10%,transparent);color:var(--cc-forest);font-size:1.3rem;line-height:1;display:flex;align-items:center;justify-content:center;transition:background .2s;}"
+ ".cc-close:hover{background:color-mix(in oklab,var(--cc-forest) 18%,transparent);}"
+ ".cc-modal__bd{padding:22px 30px 8px;}"
+ ".cc-cat{padding:18px 0;border-bottom:1px solid var(--cc-line);}"
+ ".cc-cat:last-of-type{border-bottom:0;}"
+ ".cc-cat__top{display:flex;align-items:center;justify-content:space-between;gap:16px;}"
+ ".cc-cat__name{font-size:1.04rem;font-weight:500;letter-spacing:-.01em;color:var(--cc-forest);margin:0;}"
+ ".cc-cat__desc{font-size:.88rem;line-height:1.55;color:var(--cc-ink);opacity:.82;margin:8px 0 0;text-wrap:pretty;}"
+ ".cc-cat__list{margin:10px 0 0;padding:0;list-style:none;font-size:.78rem;color:var(--cc-muted);display:flex;flex-direction:column;gap:3px;}"
+ ".cc-cat__list code{font-family:ui-monospace,SFMono-Regular,Menlo,monospace;color:var(--cc-forest);}"
+ ".cc-switch{position:relative;flex:0 0 auto;width:48px;height:28px;border-radius:999px;background:color-mix(in oklab,var(--cc-forest) 22%,transparent);border:0;cursor:pointer;transition:background .25s;}"
+ ".cc-switch::after{content:'';position:absolute;top:3px;left:3px;width:22px;height:22px;border-radius:50%;background:#fff;transition:transform .25s;box-shadow:0 1px 3px rgba(0,0,0,.25);}"
+ ".cc-switch[aria-checked='true']{background:var(--cc-forest);}"
+ ".cc-switch[aria-checked='true']::after{transform:translateX(20px);}"
+ ".cc-switch[aria-disabled='true']{background:var(--cc-lime);cursor:not-allowed;opacity:.9;}"
+ ".cc-switch[aria-disabled='true']::after{transform:translateX(20px);}"
+ ".cc-modal__ft{position:sticky;bottom:0;background:var(--cc-cream);display:flex;flex-wrap:wrap;gap:10px;padding:18px 30px 26px;border-top:1px solid var(--cc-line);}"
+ ".cc-legal{font-size:.78rem;line-height:1.55;color:var(--cc-muted);margin:4px 0 0;}"
+ ".cc-legal a{color:var(--cc-forest);text-decoration:underline;text-underline-offset:2px;}"
+ "@media(prefers-reduced-motion:reduce){.cc-banner{transition:none;}.cc-btn{transition:none;}}";
    var st = document.createElement("style");
    st.id = "cookie-consent-styles";
    st.textContent = css;
    document.head.appendChild(st);
  }

  /* ---- Texty (CZ) ------------------------------------------ */
  var CONTROLLER = "STAVBARTA s.r.o.";
  var CONTROLLER_MAIL = "info@stavbarta.cz";

  /* ---- Banner ---------------------------------------------- */
  var bannerEl = null, overlayEl = null, analyticsOn = false;

  function buildBanner() {
    var b = document.createElement("section");
    b.className = "cc-banner cc-font";
    b.setAttribute("role", "dialog");
    b.setAttribute("aria-live", "polite");
    b.setAttribute("aria-label", "Souhlas s používáním cookies");
    b.innerHTML =
      '<h2>Záleží nám na vašem soukromí</h2>'
    + '<p>Nezbytné cookies používáme pro správné fungování webu — ty běží vždy. '
    + 'Se souhlasem k nim přidáme i&nbsp;<strong>analytické cookies</strong> (Google Analytics), které nám anonymně pomáhají měřit návštěvnost. '
    + 'Souhlas je dobrovolný a můžete ho kdykoli odvolat. Více v&nbsp;<a href="#" class="cc-link" data-cookie-settings>nastavení cookies</a>.</p>'
    + '<div class="cc-actions">'
    + '  <button type="button" class="cc-btn cc-btn--primary cc-grow" data-cc="accept">Přijmout vše</button>'
    + '  <button type="button" class="cc-btn cc-btn--dark cc-grow" data-cc="reject">Odmítnout</button>'
    + '  <button type="button" class="cc-btn cc-btn--ghost" data-cc="settings">Nastavení</button>'
    + '</div>';
    document.body.appendChild(b);
    bannerEl = b;
    requestAnimationFrame(function () { requestAnimationFrame(function () { b.classList.add("cc-in"); }); });

    b.addEventListener("click", function (e) {
      var t = e.target.closest("[data-cc]");
      if (!t) return;
      var a = t.getAttribute("data-cc");
      if (a === "accept") { decide(true); }
      else if (a === "reject") { decide(false); }
      else if (a === "settings") { openSettings(); }
    });
  }
  function hideBanner() {
    if (!bannerEl) return;
    bannerEl.classList.remove("cc-in");
    setTimeout(function () { if (bannerEl) { bannerEl.remove(); bannerEl = null; } }, 420);
  }
  function decide(analytics) {
    writeConsent(analytics);
    applyConsent(analytics);
    hideBanner();
  }

  /* ---- Modal s nastavením ---------------------------------- */
  function buildOverlay() {
    var o = document.createElement("div");
    o.className = "cc-overlay cc-font";
    o.innerHTML =
      '<div class="cc-modal" role="dialog" aria-modal="true" aria-labelledby="cc-modal-title">'
    + '  <div class="cc-modal__hd">'
    + '    <button type="button" class="cc-close" data-cc="close" aria-label="Zavřít">×</button>'
    + '    <h2 id="cc-modal-title">Nastavení cookies</h2>'
    + '    <p>Spravujte, které soubory cookies smíme používat. Nezbytné cookies nelze vypnout, protože bez nich web nefunguje.</p>'
    + '  </div>'
    + '  <div class="cc-modal__bd">'
    + '    <div class="cc-cat">'
    + '      <div class="cc-cat__top">'
    + '        <p class="cc-cat__name">Nezbytné cookies</p>'
    + '        <span class="cc-switch" role="switch" aria-checked="true" aria-disabled="true" aria-label="Nezbytné cookies (vždy aktivní)"></span>'
    + '      </div>'
    + '      <p class="cc-cat__desc">Technicky nutné pro základní funkce — zapamatování vašeho rozhodnutí o cookies a bezpečné zobrazení stránek. Zpracováváme je na základě oprávněného zájmu, bez nich se web neobejde, a proto nevyžadují souhlas.</p>'
    + '      <ul class="cc-cat__list"><li><code>cookie-consent-v1</code> — uložení vaší volby · web · 12 měsíců</li></ul>'
    + '    </div>'
    + '    <div class="cc-cat">'
    + '      <div class="cc-cat__top">'
    + '        <p class="cc-cat__name">Analytické cookies</p>'
    + '        <button type="button" class="cc-switch" role="switch" aria-checked="false" data-cc-toggle="analytics" aria-label="Analytické cookies"></button>'
    + '      </div>'
    + '      <p class="cc-cat__desc">Google Analytics (Google Ireland Ltd.) — anonymně měří návštěvnost a chování na webu, aby se nám dařilo ho zlepšovat. IP adresa je anonymizována. Spustí se výhradně s vaším souhlasem.</p>'
    + '      <ul class="cc-cat__list">'
    + '        <li><code>_ga</code> — rozlišení návštěvníků · Google · 2 roky</li>'
    + '        <li><code>_ga_TBLRCK3YFX</code> — stav relace měření · Google · 2 roky</li>'
    + '      </ul>'
    + '    </div>'
    + '    <p class="cc-legal">Správcem osobních údajů je ' + CONTROLLER + ', kontakt <a href="mailto:' + CONTROLLER_MAIL + '">' + CONTROLLER_MAIL + '</a>. '
    + 'Souhlas udělujete dobrovolně a můžete jej kdykoli zdarma odvolat opětovným otevřením tohoto nastavení. Máte právo na přístup k údajům, jejich opravu či výmaz a právo podat stížnost u Úřadu pro ochranu osobních údajů (uoou.gov.cz).</p>'
    + '  </div>'
    + '  <div class="cc-modal__ft">'
    + '    <button type="button" class="cc-btn cc-btn--ghost" data-cc="reject">Odmítnout vše</button>'
    + '    <button type="button" class="cc-btn cc-btn--dark cc-grow" data-cc="save">Uložit volbu</button>'
    + '    <button type="button" class="cc-btn cc-btn--primary cc-grow" data-cc="accept">Přijmout vše</button>'
    + '  </div>'
    + '</div>';
    document.body.appendChild(o);
    overlayEl = o;

    o.addEventListener("click", function (e) {
      if (e.target === o) { closeSettings(); return; }
      var tg = e.target.closest("[data-cc-toggle]");
      if (tg) {
        analyticsOn = !analyticsOn;
        tg.setAttribute("aria-checked", analyticsOn ? "true" : "false");
        return;
      }
      var t = e.target.closest("[data-cc]");
      if (!t) return;
      var a = t.getAttribute("data-cc");
      if (a === "close") closeSettings();
      else if (a === "save") { decide(analyticsOn); closeSettings(); }
      else if (a === "reject") { analyticsOn = false; syncToggle(); decide(false); closeSettings(); }
      else if (a === "accept") { analyticsOn = true; syncToggle(); decide(true); closeSettings(); }
    });
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && overlayEl && overlayEl.classList.contains("cc-open")) closeSettings();
    });
  }
  function syncToggle() {
    if (!overlayEl) return;
    var tg = overlayEl.querySelector("[data-cc-toggle='analytics']");
    if (tg) tg.setAttribute("aria-checked", analyticsOn ? "true" : "false");
  }
  function openSettings() {
    if (!overlayEl) buildOverlay();
    var saved = readConsent();
    analyticsOn = saved ? !!saved.analytics : false;
    syncToggle();
    overlayEl.classList.add("cc-open");
    document.documentElement.style.overflow = "hidden";
  }
  function closeSettings() {
    if (!overlayEl) return;
    overlayEl.classList.remove("cc-open");
    document.documentElement.style.overflow = "";
  }

  /* ---- Veřejné API + odkazy „Nastavení cookies" ------------ */
  window.openCookieSettings = openSettings;
  document.addEventListener("click", function (e) {
    var t = e.target.closest("[data-cookie-settings]");
    if (!t) return;
    e.preventDefault();
    openSettings();
  });

  /* ---- Start ----------------------------------------------- */
  function start() {
    injectStyles();
    var saved = readConsent();
    if (saved) {
      // Rozhodnutí už padlo — jen aplikujeme (případně načteme GA)
      applyConsent(!!saved.analytics);
    } else {
      // Bez rozhodnutí: GA se nespouští, ukážeme lištu
      buildBanner();
    }
  }
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
