
# Progetto Clinica Privata

Demo di sito web multipagina per un poliambulatorio privato, con sistema di prenotazione visite basato su `localStorage`.

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

🔗 [Vai alla cartella del giorno 01-10-25](./01-10-25/)

---

# 02-10-25 – Terminato Home e costruito pagina servizi offerti dalla struttura

Nella giornata di oggi è stata completata la **homepage**, con particolare attenzione alla resa grafica e alla responsività su più breakpoint.  
Sono stati curati anche dettagli estetici e funzionali (scroll morbido, spaziature, struttura delle card), per offrire un'esperienza utente fluida e professionale.

È stata inoltre realizzata la **pagina delle specialità**, organizzata in modo chiaro e coerente rispetto al wireframe iniziale.  
Il layout è pensato per essere facilmente estendibile, mantenendo una struttura ordinata e leggibile anche da dispositivi mobili.

> Il progetto è sviluppato utilizzando **Bootstrap 5** e **HTML/CSS personalizzati**, con un’attenzione particolare alla pulizia del codice e alla manutenibilità.

Gli screenshot allegati documentano lo stato attuale del lavoro.

🔗 [Vai alla cartella del giorno 01-10-25](./02-10/)

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

🔗 [Vai alla cartella del giorno 01-10-25](./03-10-25/)

---



