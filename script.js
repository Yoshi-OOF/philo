const notions = [
  {
    name: "La culture",
    quotes: [
      '"La culture sert à nous rappeler que la nature n\'est pas tout." - Albert Camus',
      '"La culture est ce qui reste quand on a tout oublié." - Édouard Herriot',
      '"La culture est le meilleur rempart contre la barbarie." - Albert Einstein'
    ]
  },
  {
    name: "Le langage",
    quotes: [
      '"Le langage est la source de malentendus." - Antoine de Saint-Exupéry',
      '"Le langage est un jeu subtil avec la réalité." - Jean-Paul Sartre',
      '"Le langage est un vêtement plus ou moins ajusté que l\'on donne à la pensée." - Paul Valéry'
    ]
  },
  {
    name: "La raison et le réel",
    quotes: [
      '"La raison est ce qui rend l\'homme capable de comprendre le monde." - René Descartes',
      '"Le réel est ce qui résiste à l\'effacement." - Jacques Lacan',
      '"La raison est la folie du plus fort." - Herbert Marcuse'
    ]
  },
  {
    name: "La politique",
    quotes: [
      '"La politique est l\'art d\'empêcher les gens de se mêler de ce qui les regarde." - Paul Valéry',
      '"La politique est la guerre sans effusion de sang, et la guerre la politique avec effusion de sang." - Mao Zedong',
      '"La politique est la science de l\'égalité." - Benjamin Constant'
    ]
  },
  {
    name: "La justice et le droit",
    quotes: [
      '"La justice sans la force est impuissante, la force sans la justice est tyrannique." - Blaise Pascal',
      '"Le droit est l\'ensemble des conditions qui permettent à la liberté de chacun de s\'accorder à la liberté de tous." - Immanuel Kant',
      '"La justice est la première vertu des institutions sociales, comme la vérité l\'est des systèmes de pensée." - John Rawls'
    ]
  },
  {
    name: "Le travail et la technique",
    quotes: [
      '"Le travail éloigne de nous trois grands maux : l\'ennui, le vice et le besoin." - Voltaire',
      '"La technique, c\'est ce qui permet à l\'homme de transformer le monde." - Boris Vian',
      '"Le travail est l\'opium du peuple." - Karl Marx'
    ]
  },
  {
    name: "La religion",
    quotes: [
      '"La religion est l\'opium du peuple." - Karl Marx',
      '"La religion est le soupir de la créature opprimée, l\'âme d\'un monde sans cœur, comme elle est l\'esprit de conditions sociales d\'où l\'esprit est exclu." - Karl Marx',
      '"La religion est la réponse de l\'homme à la condition qui lui est faite dans le monde." - Simone Weil'
    ]
  },
  {
    name: "La démonstration",
    quotes: [
      '"La démonstration est une espèce de violence que l\'on fait à sa propre intelligence pour la contraindre à croire ce que la preuve n\'établit pas." - Paul Valéry',
      '"La démonstration est une convention." - Ludwig Wittgenstein',
      '"La démonstration est une preuve qui ne prouve rien." - Paul Valéry'
    ]
  },
  {
    name: "L'histoire",
    quotes: [
      '"L\'histoire est un perpétuel recommencement." - Thucydide',
      '"L\'histoire est un cauchemar dont je suis en train de m\'éveiller." - James Joyce',
      '"L\'histoire est un roman qui a été, le roman est de l\'histoire qui aurait pu être." - Édouard Herriot'
    ]
  },
  {
    name: "La vérité",
    quotes: [
      '"La vérité est en marche et rien ne l\'arrêtera." - Émile Zola',
      '"La vérité est une chose terrible et belle, et donc doit être traitée avec grande attention." - J.K. Rowling',
      '"La vérité est comme le soleil. Elle fait tout voir et ne se laisse pas regarder." - Victor Hugo'
    ]
  },
  {
    name: "La liberté",
    quotes: [
      '"La liberté consiste à pouvoir faire tout ce qui ne nuit pas à autrui." - Déclaration des droits de l\'homme et du citoyen de 1789',
      '"La liberté est le droit de faire tout ce que les lois permettent." - Montesquieu',
      '"La liberté est le pouvoir de faire tout ce qui ne nuit pas à autrui." - John Stuart Mill'
    ]
  },
  {
    name: "Le devoir",
    quotes: [
      '"Le devoir est ce que l\'on exige de soi-même." - Albert Camus',
      '"Le devoir est ce que l\'on attend de moi." - Antoine de Saint-Exupéry',
      '"Le devoir est ce qui s\'impose à nous, même si cela ne nous plaît pas." - Emmanuel Kant'
    ]
  },
  {
    name: "Le bonheur",
    quotes: [
      '"Le bonheur est la seule chose qui se double si on le partage." - Albert Schweitzer',
      '"Le bonheur est un parfum que l\'on ne peut répandre sur autrui sans en faire rejaillir quelques gouttes sur soi-même." - Ralph Waldo Emerson',
      '"Le bonheur est un rêve d\'enfant réalisé dans l\'âge adulte." - Sigmund Freud'
    ]
  },
  {
    name: "L'art",
    quotes: [
      '"L\'art est le plus court chemin de l\'homme à l\'homme." - André Malraux',
      '"L\'art est un mensonge qui dit la vérité." - Pablo Picasso',
      '"L\'art est la plus sublime mission de l\'homme puisque c\'est l\'exercice de la pensée qui cherche à comprendre le monde et à le faire comprendre." - Auguste Rodin'
    ]
  },
  {
    name: "La technique",
    quotes: [
      '"La technique, c\'est ce qui permet à l\'homme de transformer le monde." - Boris Vian',
      '"La technique est l\'ensemble des procédés qui permettent de produire des biens et des services." - Jean-Pierre Bréchet',
      '"La technique est l\'art de tirer parti de toutes les ressources de la nature sans en épuiser aucune." - Jacques Ellul'
    ]
  },
  {
    name: "La perception",
    quotes: [
      '"La perception est la clé de la connaissance." - Aristote',
      '"La perception est une opération de l\'esprit qui consiste à connaître les objets par les sens." - Emmanuel Kant',
      '"La perception est une interprétation." - Friedrich Nietzsche'
    ]
  },
  {
    name: "La conscience",
    quotes: [
      '"La conscience est la voix de l\'âme, les passions sont la voix du corps." - Jean-Jacques Rousseau',
      '"La conscience est la lumière de l\'intelligence pour distinguer le bien du mal." - Cicéron',
      '"La conscience est la connaissance réflexive que l\'esprit prend de ses propres actes." - Emmanuel Kant'
    ]
  }
];

function toggle(notion) {
  const notionDiv = document.getElementById(notion);
  notionDiv.classList.toggle("hidden");
}

const notionList = document.querySelector("ul");
for (let i = 0; i < notions.length; i++) {
  const notion = notions[i];
  const notionHTML = `
    <li>
      <h2>${notion.name}</h2>
      <button onclick="toggle('${notion.name.toLowerCase()}')">Voir les citations</button>
      <div id="${notion.name.toLowerCase()}" class="hidden">
        <ol>
          <li>${notion.quotes[0]}</li>
          <li>${notion.quotes[1]}</li>
          <li>${notion.quotes[2]}</li>
        </ol>
      </div>
    </li>
  `;
  notionList.innerHTML += notionHTML;
}
