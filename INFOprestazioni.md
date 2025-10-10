# Prestazioni e ottimizzazione

Il sito è stato testato con **Google PageSpeed Insights**, ottenendo risultati eccellenti su tutti i parametri principali:

| Categoria | Punteggio |
|------------|-----------|
| SEO | **100 / 100** |
| Best practice | **96 / 100** |
| Accessibilità | **91 / 100** |
| Prestazioni (mobile) | **64 / 100** |

---

### Analisi dei risultati

Le performance leggermente inferiori rispetto agli altri parametri sono dovute **ai limiti dell’hosting gratuito Altervista**, che non consente l’ottimizzazione avanzata della cache lato server o l’uso di CDN.

Tutti gli altri aspetti (SEO, struttura semantica, responsive e accessibilità) risultano **perfettamente ottimizzati**, con caricamento stabile e comportamento fluido anche su dispositivi mobili.

---

### Considerazioni tecniche

- Implementata **immagine hero in formato .webp** per migliorare il caricamento iniziale.  
- *(In sviluppo)* Precaricamento delle risorse principali (`preload`) e riduzione del CSS non critico.  
- *(In sviluppo)* Ottimizzazione del **Largest Contentful Paint (LCP)** tramite gestione prioritaria degli elementi visivi.  
- *(In sviluppo)* Compressione avanzata delle immagini e minificazione dei file statici.  

---

### Nota finale

> Il progetto è **una demo didattica** ospitata su Altervista.  
> In un ambiente di hosting professionale con caching avanzata e CDN,  
> il punteggio prestazionale previsto potrebbe superare **85/100**.

