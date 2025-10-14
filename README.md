[![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)](./INFOhtml.md)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](./INFOcss.md)
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)](./INFOjs.md)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=white)](./INFObootstrap.md)
[![Firebase](https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=black)](./INFOfirebase.md)
[![Hosting AlterVista](https://img.shields.io/badge/Hosting-AlterVista-orange?style=for-the-badge)](./INFOaltervista.md)
[![Librerie Esterne](https://img.shields.io/badge/Librerie%20Esterne-EmailJS%20%7C%20SweetAlert2%20%7C%20Iubenda-blueviolet?style=for-the-badge)](./INFOlibrerie.md)
[![Responsive Design](https://img.shields.io/badge/Responsive%20Design-Mobile%20First%20%7C%20Cross%20Browser%20%7C%20SEO%20Ready-009688?style=for-the-badge)](./INFOresponsive.md)
[![SEO Optimization](https://img.shields.io/badge/SEO%20Optimization-Meta%20Tag%20%7C%20Open%20Graph%20%7C%20JSON--LD-4CAF50?style=for-the-badge)](./INFOseo.md)
[![Prestazioni](https://img.shields.io/badge/Prestazioni-Analisi%20PageSpeed%20%7C%20Hosting%20Altervista-FF9800?style=for-the-badge)](./INFOprestazioni.md)


# [Visualizza il sito](https://democlinicaprivata.altervista.org/)


# Progetto Clinica Privata

Demo di sito web multipagina per un poliambulatorio privato, con sistema di prenotazione visite basato su `localStorage`.
**(Aggiornamento successivo)**
In una fase più avanzata del progetto, il sistema di gestione delle prenotazioni è stato migrato da localStorage a Firebase Realtime Database, per garantire scalabilità, affidabilità e sincronizzazione in tempo reale.
Questa evoluzione ha trasformato il progetto da demo locale a applicazione web completa, con dati persistenti e interfaccia dinamica.

Il progetto è stato realizzato come esercizio per la **Missione Lavorativa Openjob Front End — Ottobre 2025.


## Obiettivi principali

- Simulare un sito web moderno e responsive per una clinica privata
- Permettere all'utente di visualizzare i servizi, scegliere un medico e prenotare una visita
- Salvare e gestire le prenotazioni **senza database**, usando `localStorage`
- Mantenere un'esperienza utente fluida su **desktop e mobile**



## Struttura progettuale

Prima dello sviluppo, è stata realizzata una fase di analisi e progettazione dell’interfaccia attraverso **wireframe** desktop e mobile.



## Wireframe

I wireframe realizzati per desktop e smartphone sono disponibili qui:  
[Vai alla cartella wireframes](./wireframes)

---

# 01-10-25 – Struttura base del sito e componenti principali

## In questa giornata ho impostato la struttura del sito e costruito i primi elementi fondamentali, concentrandomi su accessibilità, responsività e qualità visiva:

-  **Impostato layout full responsive** usando Bootstrap 5 con classi `container-xl` per adattarsi a ogni dispositivo, mantenendo una **larghezza fluida ma contenuta**.
-  **Verificato comportamento con zoom del browser**: tutti gli elementi (navbar, contenuti, footer) si ridimensionano in modo proporzionato grazie a unità relative e container ben impostati.
-  **Creata navbar completamente responsive**, con:
  - Logo cliccabile (apre immagine a schermo intero)
  - Numero di telefono cliccabile (link `tel:` per chiamata immediata)
  - Pulsante per "Richiedi informazioni" (ancora al form in fondo)
  - Voci di menu con `active` e `hover` personalizzati, colori coerenti con il tema sanitario.
-  **Creato form contatti** che invia una mail (via `mailto:`), accessibile anche tramite link nella navbar e nel footer.
-  **Footer elegante e responsive**, suddiviso in 4 colonne:
  - Social
  - Contatti
  - Informazioni legali
  - Logo e copyright
  Il layout passa a colonne verticali su schermi piccoli per una leggibilità ottimale.

[Vai alla cartella del giorno 01-10-25](./01-10-25/)

---

# 02-10-25 – Terminato Home e costruito pagina servizi offerti dalla struttura

Nella giornata di oggi è stata completata la **homepage**, con particolare attenzione alla resa grafica e alla responsività su più breakpoint.  
Sono stati curati anche dettagli estetici e funzionali (scroll morbido, spaziature, struttura delle card), per offrire un'esperienza utente fluida e professionale.

È stata inoltre realizzata la **pagina delle specialità**, organizzata in modo chiaro e coerente rispetto al wireframe iniziale.  
Il layout è pensato per essere facilmente estendibile, mantenendo una struttura ordinata e leggibile anche da dispositivi mobili.

> Il progetto è sviluppato utilizzando **Bootstrap 5** e **HTML/CSS personalizzati**, con un’attenzione particolare alla pulizia del codice e alla manutenibilità.

Gli screenshot allegati documentano lo stato attuale del lavoro.

[Vai alla cartella del giorno 01-10-25](./02-10/)

---


# 03/10/2025 - costruito pagina medici e implementato filtri specialità

Oggi ho lavorato soprattutto sulla **pagina degli specialisti**, portandola ad uno stpato già utilizzabile.  
L’obiettivo era creare un sistema che permetta all’urtente di **filtrare i medici per specialità**, così da trovare velocemente il professionista di cuiha bisogno.

La pagina ora consente:
- Di visualizzare i medici suddivisi per disciplina in modo charo e ordinato.
- Di filtrare dinamicamente i professionisti tramite una **tendina elegante**, senza dover ricaricare la pagina..
- Di tornare alla lista completa di tutti i medici con un solo clic.

In questo modo, chi arriva da altre sezioni del sito può essere indirizzato subito al reparto di interesse, senza confusione.  
Il sistema è già pronto per essere collegato alla sezione di prenotazione.

---

## Tecnologie utilizzate

- HTML5 e CSS3
- [Bootstrap 5.3](https://getbootstrap.com/) per la struttura responsive
- JavaScript Vanilla per la logica dinamica
- Font Awesome 6.5 per le icone

*(Le prenotsazioni verranno gestite in seguito tramite LocalStorage.)*

---

##  Stato attuale

La **pagina degli specialisti** è già operativa nella sua logica base:  
filtri, testi dinamici e gestione dei reparti funzionano correttamente.  
La home page è stata aggiornata con sezioni introduttive, maq il focus principale di oggi è stato creare una struttura **chisara e navigabile** per i medici.

[Vai alla cartella del giorno 03-10-25](./03-10-25/)

---

# 06-10-2025 — Completata la pagina dei professionisti, proseguito lo sviluppo della sezione prenotazioni e avviato il collegamento al futuro database Firebase

## Aggiornamenti del progetto

### Sistema di invio email completato
- Sistemato il **form di contatto** e gli **invii verso la clinica** tramite Formspree.  
- Implementato un **sistema automatico di conferma email** per l’utente al momento della prenotazione (EmailJS).  
- Testato e funzionante: viene inviata una mail di riepilogo all’indirizzo inserito nel form.

---

### Pagina Professionisti
- Pagina completata con **filtri per specialità**, **modali dinamiche** e **descrizioni personalizzate**.  
- Ogni modale include **foto, informazioni, contatti e form di richiesta visita** con invio automatico.

---

### Pagina Prenotazione
- Implementata la **logica di selezione** tra specialità, medico, data e ora.  
- Salvataggio locale dei dati con `localStorage` per simulare un database.  
- Gestione degli stati dell’interfaccia: disabilitazione campi, reset, alert di conferma e invio email.  
- Struttura pronta per integrazione futura con **Firebase Firestore**.

---

### Area Riservata (in sviluppo)
- Avviata la creazione di una sezione dedicata alla **ricerca delle prenotazioni salvate** nel database.  
- Implementata interfaccia grafica e logica di base con connessione a **Firebase Firestore**.  
- Attualmente in fase di test: la funzionalità di visualizzazione e cancellazione sarà completata nei prossimi giorni.

---
[Vai alla cartella del giorno 06-10-25](./06-10/)

---

# 07-10-2025 — Lavorato alla pagina prenotazione, implementeto funzioni importanti, lavorato al collegamento con database

**Obiettivo attuale:** consolidare la parte logica delle prenotazioni e completare l’integrazione con Firestore per permettere la gestione completa (creazione, ricerca, cancellazione e conferma via email) delle visite prenotate.

## Aggiornamento progetto – Pagina Prenotazioni & Integrazione Database

Oggi ho lavorato in modo approfondito sulla struttura del progetto, portando **quasi a completamento la pagina di prenotazione** del poliambulatorio.

### Lavori svolti
- Implementata la logica completa di prenotazione, con gestione dinamica di **data e orario tramite librerie esterne (Flatpickr)**.  
- Lavorato alla funzionalità per **rendere automaticamente non selezionabili gli orari già prenotati**, mipgliorando la coerenza dei dati.  
- Lavorato al **Collegamento con il database (Firebase)** per l’inserimento e la futura ricerca delle visite salvate.  
- Rifinita la **veste grafica** genedrale della pagina, mantenendo un design coerente e pulito.  
- Sistemate le **questioni legali**: aggiunta informativa su **cookie e privacy**, con pagina dedicata e link nel footer.

### Prosssimi passi
- Ottimizzare la ricerca e la modifica delle prenotazioni salvate.  
- Effettuare test completi sull’interazione con il database e la gestione errori.

---
[Vai alla cartella del giorno 07-10-25](./07-10/)

---

# 08-10-2025 — Avanzamento gestionne prenotazioni e creazione sezione Blog

**Obiettivo attuale:** ottimizzare la gestione delle prenotazioni salvate e ampliare il progetto con una sezione dedicata ai contenuti informativvi, per migliorare la visibilità e il posizionamento SEO del sito.

Oggi ho proseguito il lavoro sulla logica del sistema di prenotazioni,, concentrandomi su **ricerca, modifica e aggiornamento delle visite salvate** nel database  
In parallelo, ho avviato lo sviluppo di una nuova area del sito dedicata agli approfondimenti medici.

### Lavori svolti
- Migliorata a **ricerca e modifica delle prenotazioni salvate**, ottimizzando il flusso di aggiornamento dati.  
- Eseguiti test sull’**interazione con il database**, con particolare attenzione alla gestione degli errori e alla validazione dei dati.  
- Creata una **nuova pagina “Blog”** per ospitare articoli tematici scritti dai medici, con sistema di apertura tramite **modali dinamiche** estruttura SEO-ready.   
- Preparata la base per una futura **ottimizzazione on-page** (schema JSON-LD, canonical link, Open Graph).

### Prossimi passi
- Completare i test finali sul database e ottimizzare il sistema di ricerca prenotazioni.  
- Finalizzare la **SEO on-page** e aggiungere la mappa JSON-LD per la clinica.  
- Rifinire idettagli grafici e responsive della sezipone Blog.

---
[Vai alla cartella del giorno 08-10-25](./08/10/)

---

# 09-10-2025 — Completamento sezione Blog e stabilizzazione del sistema prenotazioni

**Obiettivo attuale:** concludere lo sviluppo della sezione Blog e completare i test di stabilità del sistema di gestione prenotazioni, raggiungendo una versione pienamente funzionale e pronta per la fase di ottimizzazione SEO.

Oggi hop terminato la realizzazione della **pagina Blog**,includendo la **selezione per specialità** che consente di filtrare gli articoli in base al reparto medico.  
In parallelo, ho completato i **test finali sul database Firebase**, verificando il corretto salvatagguio, recupero e cancellazione delle prenotazioni.  
Il sistema risulta ora **stabile, fluido e completamente operativo**.

### Lavori svolti
- Completatya la sezione **Blog**, con fltri dinamici per specialità mediche.  
- Testato e validato il **database Firebase**, assicurando coerenza e stabilità dei dati.  
- Ottimizzata la **gestione degli errori e dei messaggi di feedback** nelle operazioni utente.  

### Prossimi passi
- Migliorae la **SEO on-page** e la struttura di indicizzazione (meta, Open Graph, schema JSON-LD).  
- Aumentare la **visibilità del sito** tramite ricerca e ottimizzazione contenuti.  
- Effettuare **migliorie grafiche non strutturali**: colori, font, microanimazioni e rifiniture visive.

---
[Vai alla cartella del giorno 09-10-25](./09-10/)

---

# 10-10-2025 — Ottimizzazione SEO on-page e miglioramento estetico

**Obiettivo attuale:** consolidare l struttura SEO del sito, implementado gli script di markup strutturato (JSON-LD) e migliorando l’esperienza visiva attraverso anmimazioni e transizioni più fluide e coerenti.

Oggi ho completato la **revisione SEO on-page**, ottimizzando meta tag, titoli e descrizioni per tutte le sezioni principiali del sito.  
Ho inoltre integrato **script JSON-LD** per arrichire la struttura dei dati e migliorare l’indicizzazione sui moori di ricerca.  
Infine, sono state introdotte **microanimazioni e transizioni grafiche più morbide**, per un’esperienza visiva professionale, fluida e coerente con il tono della clinica.

### Lavori svolti
- Sistemata la **SEO on-page** (meta title, description, heading structure, alt text).  
- Inseriti e validati gli **script JSON-LD** per le entità `MedicalClinic` e `LocalBusiness`.  
- Migliorata l’esperienza grafica con **animazioni e transizioni più fluide**, coerenti con lo stile elegante e rassicurante della clinica.

### Prossimi passi
- Implementare **nuovi contenuti ottimizzati** per il blog e le specialità mediche.  
- Effettuare **test cross-browser e mobile** per garantire uniformità e reatività del layout.

---
[Vai alla cartella del giorno 10-10-25](./10-10/)

---

# 13-10-2025 — Conclusione del progetto e pubblicazione online
## [Visualizza il sito](https://democlinicaprivata.altervista.org/)

**Obiettivo attuale:** completarre le ultime modifiche strutturali, pubblicare il sito online e preparare la versione definitiva del codice per il caricamento su GitHub.

### Lavori svolti
- Portate avanti e terminate tutte le modifiche sostanziali e strutturali al sito.  
- Effettuata la pubblicazione online del progetto completo.  
- Caricato il link del sito nella repository GitHub.  
- Creata la **mappa completa del flusso del sito**, con rappresentazione delle pagine, modali e logiche di prenotazione.
  [Mappa del sito](13-10/flusso-sitoo.png)
- Avviata la fase di pulizia e riordino del codice, con ottimizzazione finale dei file e dei commenti.

### Prossimi passi
- Completare entro domani la **pulizia definitiva del codice**.  
- Effettuare il **caricamento finale su GitHub**, chiudendo ufficialmente il progetto “Clinica Privata”.

---

[Vai alla cartella del giorno 13-10-25](13-10/)

---

# [Visualizza il sito](https://democlinicaprivata.altervista.org/)

## Conclusione del progetto — 14-10-2025

Il progeytto **Clinica Privata** è stato portato a termine in modo completo, includendo tutte le funzionalità previste e una strutura solida, ottimizzata e professionale.  
L’obiettivo iniziale — creare un sito per un poliambulatorio moderno, accessibile e intuitivo — è stato pienamente raggiunto attraerso un equilibrio tra **design pulito**, **usabilità**, **performance** e **gestione dei dati in tempo reale**.

---

### Struttura tecnica e funzionalità principali

- **Prenotazione dinamica:** sistema sviluppato n JavaScript con gestione su **Firebase Realtime Database**, che permette di creare, modificare o cancellare una prenotazione tramite interfaccia grafica semplice e imediata.  
  Lutente può selezionare medico, data e orario; il tutto viene salvato e recuperato in tempo reale, con sincronizzazione automatica e conferma visiva tramite **SweetAlert2**.

- **Invio email automatico:** integrazione con **Formspree** per l’invio sicuro dei moduli dicontatto e prenotazione, senza necessita di backend dedicato.

- **Modali dinamiche per i medici:** ogni specialista dispone di una **scheda dinamica** generata in JavaScript,con foto (essendo un dem le immagini sono differenziate solamente per uomo/dona, ma la logica di differenziazione è perfettamente operativa), descrizione, contatti e modulo di prenotazione dedicato.  
  Le modali sono collegate ai dati strutturali e completamente responsive.

- **Sistema di feedback utente:** utilizzo di **SweetAlert2** conloader animati e messaggi di conferma per ogni azione (prenotazione, inviomodulo, cancellazione), migliorando l’esperienza d’uso e la fiducia dell’utente.

- **Struttura SEO avanzata:** ottimizzazione completa di **meta tag**, **heading structure**, **alt text** e **link interni**; implementazione di **script JSON-LD** per le entità `MedicalClinic` e `LocalBusiness`, migliorando l’indicizzazione sui motori di ricerca.  
  Tutte le pagine principali sono ottimizzate per la leggibilità e il posizionamento locale.

- **Performance e accessibilità:** ottimizzazione di parte dele immagini in formato **WebP/AVIF**, utilizzo di **lazy loading** e script asincroni per ridurre i tempi di caricamento.  
  Il sito è completamente **responsive** grazie a **Bootstrap 5**, con attenzione a contrasti, spaziature e leggibilità su ogni dispositivo.

- **Animazioni e transizioni:** uso di **AOS.js** e microtransizioni CSS per una navigazione fluida e coerente con il tono rassicurante della clinica, senza appesantire il caricamento.

- **Architettura visiva:** creata ua **mappa completa del flusso del sito** per visualizzare l’interazione tra sezioni, modali e sistema di prenotazione, utile per future espansioni o refactoring.

- **Layout e usabilità** sviluppati per guidare l’utente nella selezione del medico, unendo chiarezza funzionale e cura estetica in ogni dettaglio.
---

### Tecniche e strumenti impiegati
- **HTML5**, **CSS3**, **JavaScript (ES6)**  
- **Bootstrap 5** per layout responsive  
- **Firebase Realtime Database** per la gestione delle prenotazioni  
- **Formspree** per l’invio email  
- **SweetAlert2** per messaggi dinamicci  
- **AOS.js** per animazioni allo scroll  
- **JSON-LD**, **meta tag**, **alt text** e **heading structure** per la SEO  
- **Immagini ottimizzate WebP/AVIF** e **lazy loading** per performance elevate  
- **Iubenda** per la gestione legale di **cookie, privacy policy e termini di servizio**


---

### Stato finale
Il siyto è stato **pubblicato online**, testato e validato in tutte le sue parti.  
Il codice è stato **pulito, ordinato e commentato**, pronto per il caricamento definitivo su GitHub.  
Con questo aggiornamento, il progetto **Clinica Privata** può considerarsi ufficialmente **completato e documentato** in ogni sua parte.

[Vai alla cartella del giorno 14-10-25](14-10/)






