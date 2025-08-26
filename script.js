// Liste des sons à afficher
const TRACKS = [
  { file: "signal_bruit_2_carre.wav", title: "Signal original", desc: "2 signaux carrés + bruit" },
  { file: "signal_reconstruit 2 carrés  90Hz et 240Hz 5s_16000HZ_25jun.wav", title: "Reconstruction", desc: "Reconstruction par la méthode de Sirdey(Reconstruction Sinusoïde + Bruit)." },
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
