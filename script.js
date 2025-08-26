// Liste des sons à afficher
const TRACKS = [
  { file: "signal_bruit_2_carre.wav", title: "Reconstruction Sinusoïde + Bruit", desc: "signal_bruité 2" },
  { file: "m5.wav", title: "Impact métallique M5", desc: "Son d'impact utilisé dans l'analyse ESPRIT + Gabor." },
  { file: "piano_ddsp.wav", title: "Exemple DDSP Piano", desc: "Extrait généré avec un modèle différentiable." }
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
