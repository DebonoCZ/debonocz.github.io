# Byty Drobovice — Publish bundle

Připraveno k nahrání na FTP do kořenového adresáře webhostingu.

## Co nahrát

Vše uvnitř této složky (publish/) — včetně skrytého souboru:
- `.htaccess` — pravidla pro Apache (clean URLs, cache, komprese)

Fotky jsou uložené jako běžné soubory v `assets/photos/` a `assets/` — nic skrytého navíc.

## Doména

Skripty jsou nastavené na `https://bytydrobovice.cz`. Pokud bude doména jiná,
přepiš tyto soubory:
- `sitemap.xml` (8× `https://bytydrobovice.cz/`)
- `robots.txt` (1×)
- `index.html` a všechny *.html — meta tagy (canonical, og:url, twitter:image)
- `site.webmanifest` (`start_url`, `scope`)

## HTTPS

Po instalaci SSL certifikátu odkomentuj sekci "Force HTTPS" v `.htaccess`.

## Hosting requirements

- Apache + mod_rewrite, mod_deflate, mod_expires, mod_headers (standardní výbava)
- PHP NENÍ potřeba — statický web

## Po nahrání ověřit

- https://tvojedomena.cz/ → domovská
- https://tvojedomena.cz/o-projektu → bez .html
- https://tvojedomena.cz/o-projektu.html → 301 redirect na clean URL
- https://tvojedomena.cz/sitemap.xml → XML
- https://tvojedomena.cz/robots.txt → text
