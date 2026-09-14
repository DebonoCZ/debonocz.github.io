# CONTENT_TODO — chybějící podklady pro web Debono 2026

Soupis obchodních a obsahových vstupů, které v prototypu (`prototyp.html`) chybí nebo jsou záměrně vynechané, protože nejsou doložené. Bez nich zůstávají příslušná místa obecná („cena podle rozsahu“, „ukázky na vyžádání“). Vychází z auditu / zadání ze 14. 9. 2026.

| # | Co chybí | Kde na webu | Kdo dodá | Poznámka |
| --- | --- | --- | --- | --- |
| 1 | **Schválené reference a case studies s výsledky** (cíl, období, výchozí stav, metrika) | Home, Práce, Case, LP Identita / Weby / Sítě / Kliniky | Jiří Flachs + klienti (souhlas) | Stránka Case je teď bez čísel a bez citace; chybí 5–6 poctivých studií. Laptime a Autobeky lze použít jen s odsouhlaseným rozsahem. |
| 2 | **Metodika statistik** („9 z 10 poptávek“, „98 %“, „95 %“, roky, projekty) | Home (původní sekce Čísla), Studio | Debono (interní evidence) | Odstraněno z webu. Vrátit jen s definovaným obdobím, vzorkem a způsobem měření. |
| 3 | **Ověřený telefonní kontakt** | Kontakt, patička | Jiří Flachs | V prototypu je jen e-mail jirka@debono.cz; telefon nedoplňovat, dokud není potvrzen. |
| 4 | **Anonymizované ukázkové PDF strategie** + způsob doručení | LP Strategie a značka (box „Chcete vidět skutečnou strategii?“) | Debono | Teď řešeno mailto s předmětem „Ukázka strategie“. Potřeba: schválené PDF, kdo odpovídá, do kdy. |
| 5 | **Rozsah a cena „AI výbavy“ identity** (kontext značky, tón s příklady, šablony, zadání, předání) | LP Identita — tabulka dodávky, druhá situace „Máte identitu?“ | Debono (obchod) | Na webu jako návrh nabídky bez ceny. Potvrdit, co je v základu a co je příplatek; jestli se zaškolení dělá on-site/online. |
| 6 | **Ceny a provozní podmínky webových balíčků** (varianty, co obsahují, hosting/údržba, termíny) | LP Weby — blok „Cena podle rozsahu“ | Debono (obchod) | V prototypu záměrně bez částek. Původně navržené varianty nejsou doložené → nezveřejňovat. |
| 7 | **Rozsah a ceny režimů pro sociální sítě** (rozjezd / kompletní správa / kampaň) + objem produkce, mediální rozpočet | LP Sociální sítě | Debono (obchod, produkce) | Karty jsou popisné bez čísel. Doplnit typický rozsah až po potvrzení kapacit. |
| 8 | **Schválené ukázky obsahu pro sítě** (kromě Laptime) | LP Sociální sítě — sekce Reference | Debono + klienti | Prázdné karty skryty; ukázky „na vyžádání“. |
| 9 | **Termíny služeb** (identita, strategie, web) | FAQ na LP | Debono (produkce) | Neuvádět fixní týdny, dokud nejsou potvrzené podle kapacity. |
| 10 | **Fotografie týmu a zázemí** (vlastní, ne stock) | Studio, Home, LP Produkce | Debono produkce | Součást pozice „vlastní produkce“; bez nich působí sekce Studio obecně. |
| 11 | **Vlastníci roadmapy** (kdo schvaluje texty, kdo reference, kdo ceny) | — | Jiří Flachs | Bez určeného vlastníka zůstanou body 1–9 otevřené. |

## Blokace nasazení (nezaměňovat s obsahem)

- **Odesílání formuláře není napojené.** Prototyp po odeslání pravdivě zobrazí zprávu s e-mailem; před spuštěním je nutný backend (Webflow Forms / Netlify Forms) a potvrzené přijetí. Bez toho nesmí formulář tvrdit úspěch.
- **Analytika a souhlas** — v prototypu není žádné měření; před nasazením napojit existující nástroj a rozlišit kliknutí na CTA, zahájení formuláře a backendem potvrzené přijetí.
- **Canonical / sdílecí metadata** — doplnit podle skutečné cílové domény (debono.cz), ne podle stagingu.
