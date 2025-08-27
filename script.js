// Liste des sons à afficher
const TRACKS = [
  { file: "signal_carré_200Hz_N_20_ESPRIT_16000HZ_26aug.wav", title: "Figure 14", desc: "Signal originale : 20 sinusoids." },
  { file: "signal_carré_reconstruit_200Hz_N_3_ESPRIT_16000HZ_26aug.wav", title: "Figure 14", desc: "Signal reconstruit : 3 sinusoids." },
  { file: "signal_carré_reconstruit_200Hz_N_8_ESPRIT_16000HZ_26aug.wav", title: "Figure 14", desc: "Signal reconstruit : 8 sinusoids." },
  { file: "signal_carré_reconstruit_200Hz_N_16_ESPRIT_16000HZ_26aug.wav", title: "Figure 14", desc: "Signal reconstruit : 16 sinusoids." },
  
  { file: "signal_originale_200_550_1070_Hz_ESPRIT_16000HZ_26aug.wav", title: "Figure 16", desc: "Signal original : 3 sinusoids." },
  { file: "signal_reconstruit_200_550_1070_Hz_ESPRIT_16000HZ_26aug.wav", title: "Figure 16", desc: "Signal reconstruit : 3 sinusoids." },
  
  { file: "signal_bruit_2_carre.wav", title: "Figure 18", desc: "Signal original : 2 signaux carrés + bruit" },
  { file: "signal_reconstruit 2 carrés  90Hz et 240Hz 5s_16000HZ_25jun.wav", title: "Figure 18", desc: "Reconstruction : méthode de Sirdey(Reconstruction Sinusoïde + Bruit)." },
  { file: "signal_reconstruit_carré de fréquence 90Hz et 240Hz et de bruit_ESPRIT_16000HZ_25jun.wav", title: "Figure 18", desc: "Reconstruction par la méthode EDS." }
];

// Récupère le container
const container = document.getElementById("audio-list");

// Génère une carte audio pour chaque piste
TRACKS.forEach(track => {
  const card = document.createElement("div");
  card.className = "audio-card";

  card.innerHTML = `
    <h2>${track.title}</h2>
    <p>${track.desc}</p>
    <audio controls>
      <source src="${track.file}" type="audio/wav">
      Votre navigateur ne supporte pas la lecture audio.
    </audio>
  `;

  container.appendChild(card);
});
