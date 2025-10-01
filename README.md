
# Progetto Clinica Privata

Demo di sito web multipagina per un poliambulatorio privato, con sistema di prenotazione visite basato su `localStorage`.

Il progetto è stato realizzato come esercizio per la **Missione Lavorativa Openjob Front End — Ottobre 2025.

---

## Obiettivi principali

- Simulare un sito web moderno e responsive per una clinica privata
- Permettere all'utente di visualizzare i servizi, scegliere un medico e prenotare una visita
- Salvare e gestire le prenotazioni **senza database**, usando `localStorage`
- Mantenere un'esperienza utente fluida su **desktop e mobile**

---

## Struttura progettuale

Prima dello sviluppo, è stata realizzata una fase di analisi e progettazione dell’interfaccia attraverso **wireframe** desktop e mobile.

---

## Wireframe

I wireframe realizzati per desktop e smartphone sono disponibili qui:  
[Vai alla cartella wireframes](./wireframes)

# 01-10-25 – Struttura base del sito e componenti principali

In questa giornata ho impostato la struttura del sito e costruito i primi elementi fondamentali, concentrandomi su accessibilità, responsività e qualità visiva:

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
