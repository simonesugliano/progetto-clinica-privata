  //Progetto: Clinica Privata Torino
  //Autore: Simone Sugliano
  //Descrizione: Sito dimostrativo full responsive con gestione prenotazioni, database e ottimizzazione SEO.
  //Tecnologie: HTML5, CSS3, JavaScript, Bootstrap, Firebase
  //Data: Ottobre 2025

// 1. Mappa testi delle specialità
const testiDiscipline = {
  ortopedia: "L’ortopedia si occupa della diagnosi e del trattamento delle patologie dell’apparato muscolo-scheletrico. I nostri specialisti offrono soluzioni per traumi, dolori articolari e problemi posturali, aiutandoti a recuperare mobilità e qualità di vita.",
  otorinolaringoiatria: "L’otorinolaringoiatria si concentra sulla cura delle patologie che interessano orecchie, naso, gola e laringe. Trattiamo sinusiti, otiti, problemi dell’udito e alterazioni della voce.",
  neurologia: "La neurologia studia il funzionamento del sistema nervoso. I nostri neurologi si occupano di epilessia, Parkinson, sclerosi multipla, emicranie e neuropatie.",
  oncologia: "L’oncologia si occupa della diagnosi e cura dei tumori. Il nostro team segue ogni paziente con attenzione e accesso a protocolli terapeutici aggiornati.",
  cardiologia: "La cardiologia studia il cuore e l’apparato circolatorio. Diagnostichiamo e trattiamo ipertensione, aritmie e altre patologie cardiovascolari.",
  pediatria: "La pediatria si occupa della salute e dello sviluppo del bambino. Offriamo visite, controlli di crescita e vaccinazioni.",
  ginecologia: "La ginecologia si concentra sulla salute dell’apparato riproduttivo femminile. Visite, ecografie, monitoraggi della gravidanza e supporto completo.",
  "chirurgia-plastica": "La chirurgia plastica corregge difetti estetici e funzionali, offrendo soluzioni ricostruttive ed estetiche in sicurezza.",
  dermatologia: "La dermatologia tratta patologie della pelle, dei capelli e delle unghie. Acne, dermatiti, psoriasi, nei e altro ancora."
};

// 2. Ottieni parasmetro disciplina dall'URL
const urlParams = new URLSearchParams(window.location.search);
const disciplina = urlParams.get("disciplina");

document.addEventListener("DOMContentLoaded", function () {
  const titolo = document.getElementById("titolo-disciplina");
  const testo = document.getElementById("testo-disciplina");
  const btnMostraTutti = document.getElementById("mostraTuttiBtn");
  const filtroSelect = document.getElementById("filtro-discipline");
  const blocchi = document.querySelectorAll(".blocco-disciplina");

  if (disciplina && testiDiscipline[disciplina]) {
    // Mostra solo la disciplina selezionata
    titolo.textContent = disciplina.toUpperCase();
    testo.textContent = testiDiscipline[disciplina];

    document.querySelectorAll(".blocco-disciplina").forEach((blocco) => {
      blocco.style.display = "none";
    });

    const bloccoCorrente = document.querySelector(`[data-disciplina="${disciplina}"]`);
    if (bloccoCorrente) {
      bloccoCorrente.style.display = "block";
    }

    // Imposta la selezione nella tendina
    if (filtroSelect) {
      filtroSelect.value = disciplina;
    }

    // Mostra il pulsante "Mostra tutti"
    if (btnMostraTutti) {
      btnMostraTutti.style.display = "block";
    }

  } else {
    // Nessuna disciplina → mostra tutto
    //titolo.textContent = "Il nostro Team";
    //testo.textContent = "Consulta i nostri specialisti divisi per area medica.";

    blocchi.forEach((blocco) => {
      blocco.style.display = "block";
    });

    // Nascondi il pulsante "Mostra tutti"
    if (btnMostraTutti) {
      btnMostraTutti.style.display = "none";
    }

    // Imposta il valore selezionato su "tutte"
    if (filtroSelect) {
      filtroSelect.value = "tutte";
    }
  }

  // Listener per pulsante "Mostra tutti"
  if (btnMostraTutti) {
    btnMostraTutti.addEventListener("click", function () {
      blocchi.forEach((blocco) => {
        blocco.style.display = "block";
      });

      const bloccoSpecialita = document.getElementById("blocco-specialita");
      if (bloccoSpecialita) {
        bloccoSpecialita.style.display = "none";
      }

      const titoloPrincipale = document.querySelector("h2.text-center.mb-5");
      if (titoloPrincipale) {
        titoloPrincipale.textContent = "Tutti i nostri specialisti";
      }

      //  Nascondi di nuovo il pulsante
      btnMostraTutti.style.display = "none";

      // Pulisce l'URL
      history.replaceState({}, document.title, "professionisti.html");

      // Resetta la tendina su "tutte"
      if (filtroSelect) {
        filtroSelect.value = "tutte";
      }

      // Reset testo
      titolo.textContent = "Il nostro Team";
      testo.textContent = "Consulta i nostri specialisti divisi per area medica.";
    });
  }

  // Listener per filtro a tendina
  if (filtroSelect) {
    filtroSelect.addEventListener("change", function () {
      const valore = this.value;

      blocchi.forEach(blocco => {
        const d = blocco.getAttribute("data-disciplina");
        blocco.style.display = (valore === "tutte" || d === valore) ? "block" : "none";
      });

      // Aggiorna testi commento funzione che non mostrava spiegazione della disciplina se premuta dal menu a tandina. funzione sotto la mostra sia da servizi che da tendina
    //   if (valore === "tutte") {
    //     titolo.textContent = "Il nostro Team";
    //     testo.textContent = "Consulta i nostri specialisti divisi per area medica.";
    //     if (btnMostraTutti) btnMostraTutti.style.display = "none"; //  nascondi
    //   } else {
    //     titolo.textContent = valore.toUpperCase();
    //     testo.textContent = testiDiscipline[valore] || "";
    //     if (btnMostraTutti) btnMostraTutti.style.display = "block"; //  mostra
    //   }
    if (valore === "tutte") {
  titolo.textContent = "Il nostro Team";
  testo.textContent = "Consulta i nostri specialisti divisi per area medica.";
  if (btnMostraTutti) btnMostraTutti.style.display = "none";

  const bloccoSpecialita = document.getElementById("blocco-specialita");
  if (bloccoSpecialita) {
    bloccoSpecialita.style.display = "none";
  }

} else {
  titolo.textContent = valore.toUpperCase();
  testo.textContent = testiDiscipline[valore] || "";
  if (btnMostraTutti) btnMostraTutti.style.display = "block";

  const bloccoSpecialita = document.getElementById("blocco-specialita");
  if (bloccoSpecialita) {
    bloccoSpecialita.style.display = "block";
  }
}

    });

    // Forza il cambio se arrivo con parametro URL
    if (disciplina) {
      filtroSelect.dispatchEvent(new Event("change"));
    }
  }

});



// ----------------------------------------------------------------------------------------------modale presentazione medico
//la  mail viene inviata a me.
//per una eventuale produzione la mail sarebbe quella della clinica 
const medici = {
  // ORTOPEDIA
  rossi: {
    nome: "Dr. Marco Rossi",
    descrizione: "Specialista in Ortopedia e Traumatologia. Si occupa di anca, ginocchio e colonna vertebrale con approccio mininvasivo.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "marco.rossi@clinic.it",
    telefono: "+39 0123 456789",
    ricevimento: "Lunedì e Giovedì pomeriggio"
  },
  bianchi: {
    nome: "Dott.ssa Laura Bianchi",
    descrizione: "Esperta in chirurgia ortopedica mininvasiva.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "laura.bianchi@clinic.it",
    telefono: "+39 0123 456790",
    ricevimento: "Martedì mattina"
  },
  verdi: {
    nome: "Dr. Luca Verdi",
    descrizione: "Riabilitazione ortopedica e medicina dello sport.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "luca.verdi@clinic.it",
    telefono: "+39 0123 456791",
    ricevimento: "Mercoledì pomeriggio"
  },

  // OTORINO
  azzurro: {
    nome: "Dr. Mario Azzurro",
    descrizione: "Specialista in Disturbi dell’equilibrio e vertigini.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "mario.azzurro@clinic.it",
    telefono: "+39 0123 456792",
    ricevimento: "Giovedì mattina"
  },
  mazza: {
    nome: "Dott.ssa Lara Mazza",
    descrizione: "Esperta in Apnee notturne e russamento.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "lara.mazza@clinic.it",
    telefono: "+39 0123 456793",
    ricevimento: "Venerdì mattina"
  },
  anselmi: {
    nome: "Dr. Bruno Anselmi",
    descrizione: "Patologie del naso e dei seni paranasali.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "bruno.anselmi@clinic.it",
    telefono: "+39 0123 456794",
    ricevimento: "Lunedì pomeriggio"
  },

  // NEUROLOGIA
  azzurri: {
    nome: "Dr. Mario Azzurri",
    descrizione: "Specialista in Epilessia e disturbi convulsivi.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "mario.azzurri@clinic.it",
    telefono: "+39 0123 456795",
    ricevimento: "Martedì pomeriggio"
  },
  mori: {
    nome: "Dott.ssa Laura Mori",
    descrizione: "Esperta in Malattie neurodegenerative.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "laura.mori@clinic.it",
    telefono: "+39 0123 456796",
    ricevimento: "Mercoledì mattina"
  },
  bruna: {
    nome: "Dr. Aldo Bruna",
    descrizione: "Cefalee ed emicranie croniche.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "aldo.bruna@clinic.it",
    telefono: "+39 0123 456797",
    ricevimento: "Giovedì pomeriggio"
  },

  // ONCOLOGIA
  sampo: {
    nome: "Dr. Fabio Sampo",
    descrizione: "Specialista in Tumori del seno.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "fabio.sampo@clinic.it",
    telefono: "+39 0123 456798",
    ricevimento: "Venerdì pomeriggio"
  },
  luona: {
    nome: "Dott.ssa Maura Luona",
    descrizione: "Esperta in Tumori gastrointestinali.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "maura.luona@clinic.it",
    telefono: "+39 0123 456799",
    ricevimento: "Martedì pomeriggio"
  },
  cucci: {
    nome: "Dr. Bruno Cucci",
    descrizione: "Oncologia polmonare.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "bruno.cucci@clinic.it",
    telefono: "+39 0123 456800",
    ricevimento: "Giovedì mattina"
  },

  // CARDIOLOGIA
  sampi: {
    nome: "Dr. Paolo Sampi",
    descrizione: "Specialista in Ipertensione arteriosa.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "paolo.sampi@clinic.it",
    telefono: "+39 0123 456801",
    ricevimento: "Lunedì mattina"
  },
  messina: {
    nome: "Dott.ssa Sandra Messina",
    descrizione: "Esperta in Scompenso cardiaco.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "sandra.messina@clinic.it",
    telefono: "+39 0123 456802",
    ricevimento: "Mercoledì pomeriggio"
  },
  bodelli: {
    nome: "Dr. Lillo Bodelli",
    descrizione: "Prevenzione cardiovascolare.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "lillo.bodelli@clinic.it",
    telefono: "+39 0123 456803",
    ricevimento: "Venerdì mattina"
  },

  // PEDIATRIA
  veretti: {
    nome: "Dott.ssa Fabia Veretti",
    descrizione: "Specialista in Controlli di crescita e sviluppo.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "fabia.veretti@clinic.it",
    telefono: "+39 0123 456804",
    ricevimento: "Martedì mattina"
  },
  cotta: {
    nome: "Dott.ssa Monica Cotta",
    descrizione: "Esperta in Vaccinazioni e prevenzione.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "monica.cotta@clinic.it",
    telefono: "+39 0123 456805",
    ricevimento: "Giovedì mattina"
  },
  sulano: {
    nome: "Dr. Claudio Sulano",
    descrizione: "Malattie respiratorie pediatriche.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "claudio.sulano@clinic.it",
    telefono: "+39 0123 456806",
    ricevimento: "Venerdì pomeriggio"
  },

  // GINECOLOGIA
  callo: {
    nome: "Dr. Federico Callo",
    descrizione: "Specialista in Fertilità e PMA (Procreazione Medicalmente Assistita).",
    foto: "/assets/img/medicoUomo.jpg",
    email: "federico.callo@clinic.it",
    telefono: "+39 0123 456807",
    ricevimento: "Lunedì pomeriggio"
  },
  sularo: {
    nome: "Dott.ssa Sandra Sularo",
    descrizione: "Esperta in Menopausa e disturbi ormonali.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "sandra.sularo@clinic.it",
    telefono: "+39 0123 456808",
    ricevimento: "Mercoledì mattina"
  },
  lallo: {
    nome: "Dr. Massimo Lallo",
    descrizione: "Pap test e prevenzione tumore al collo dell’utero.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "massimo.lallo@clinic.it",
    telefono: "+39 0123 456809",
    ricevimento: "Giovedì pomeriggio"
  },

  // CHIRURGIA PLASTICA
  bistefanis: {
    nome: "Dr. Corrado Bistefanis",
    descrizione: "Specialista in Ricostruzione post-trauma o post-tumore.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "corrado.bistefanis@clinic.it",
    telefono: "+39 0123 456810",
    ricevimento: "Martedì pomeriggio"
  },
  varetto: {
    nome: "Dott.ssa Sara Varetto",
    descrizione: "Esperta in Chirurgia estetica del volto.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "sara.varetto@clinic.it",
    telefono: "+39 0123 456811",
    ricevimento: "Venerdì mattina"
  },
  milo: {
    nome: "Dott.ssa Maria Milo",
    descrizione: "Liposuzione e rimodellamento corporeo.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "maria.milo@clinic.it",
    telefono: "+39 0123 456812",
    ricevimento: "Lunedì mattina"
  },

  // DERMATOLOGIA
  ville: {
    nome: "Dr. Gian Paolo Ville",
    descrizione: "Specialista in Acne e dermatite seborroica.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "gianpaolo.ville@clinic.it",
    telefono: "+39 0123 456813",
    ricevimento: "Martedì mattina"
  },
  boccovani: {
    nome: "Dott.ssa Giulia Boccovani",
    descrizione: "Esperta in Controllo dei nei e prevenzione melanoma.",
    foto: "/assets/img/medicoDonna.jpg",
    email: "giulia.boccovani@clinic.it",
    telefono: "+39 0123 456814",
    ricevimento: "Mercoledì pomeriggio"
  },
  ghigliola: {
    nome: "Dr. Roberto Ghigliola",
    descrizione: "Psoriasi ed eczema.",
    foto: "/assets/img/medicoUomo.jpg",
    email: "roberto.ghigliola@clinic.it",
    telefono: "+39 0123 456815",
    ricevimento: "Giovedì mattina"
  }
};


function apriModaleMedico(id) {
  const m = medici[id];
  if (!m) return;

  document.getElementById("titoloMedico").textContent = m.nome;
  document.getElementById("descrizioneMedico").textContent = m.descrizione;
  document.getElementById("fotoMedico").src = m.foto;
  document.getElementById("fotoMedico").alt = m.nome;
  document.getElementById("emailMedico").textContent = m.email;
  document.getElementById("telefonoMedico").textContent = m.telefono;
  document.getElementById("ricevimentoMedico").textContent = m.ricevimento;
  document.getElementById("linkPrenota").href = `/html/prenota.html?medico=${id}`;

  const modal = new bootstrap.Modal(document.getElementById("modaleMedico"));
  modal.show();
}

//--------------------------------------------------------------------------------------toggle mod chiaro/scuro--------------------------------------------------------------------------------
const toggleButton = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  // Funzione per applicare il tema
  function setTheme(dark) {
    if (dark) {
      document.body.classList.add('dark-mode');
      themeIcon.classList.replace('fa-moon', 'fa-sun');
      localStorage.setItem('theme', 'dark');
    } else {
      document.body.classList.remove('dark-mode');
      themeIcon.classList.replace('fa-sun', 'fa-moon');
      localStorage.setItem('theme', 'light');
    }
  }

  // Al caricamento: controlla preferenza salvata
  const savedTheme = localStorage.getItem('theme');
  if (savedTheme === 'dark') {
    setTheme(true);
  }

  // Al click: cambia tema
  toggleButton.addEventListener('click', () => {
    const isDark = document.body.classList.toggle('dark-mode');
    setTheme(isDark);
  });
  //--------------------------------------------------------------------------------------fine  toggle mod chiaro/scuro--------------------------------------------------------------------------------

  //--------------------------------------------------------------------------------------fine  pulsante condivisione programmi device cliente--------------------------------------------------------------------------------

  const shareBtn = document.getElementById('shareBtn');

  if (navigator.share) {
    shareBtn.addEventListener('click', async () => {
      try {
        await navigator.share({
          title: "Clinica Privata Torino",
          text: "Scopri la Clinica Privata di Torino: visite specialistiche, diagnostica e prenotazioni online.",
          url: "https://democlinicaprivata.altervista.org/"  //condividi sempre la home
        });
      } catch (err) {
        console.log("Condivisione annullata o non supportata:", err);
      }
    });
  } else {
    shareBtn.addEventListener('click', () => {
      alert("La condivisione automatica non è supportata su questo browser.");
    });
  }

    //--------------------------------------------------------------------------------------fine pulsante condivisione programmi device cliente--------------------------------------------------------------------------------
