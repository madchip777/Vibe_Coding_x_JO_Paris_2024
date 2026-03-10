export const navLinks = [
  { href: "/", label: "Accueil" },
  { href: "/ecosysteme", label: "Écosystème" },
  { href: "/performances", label: "Performances" },
  { href: "/heritage", label: "Héritage" },
  { href: "/innovations", label: "Innovations" },
] as const;

export const homeCards = [
  {
    href: "/ecosysteme",
    title: "Écosystème JO",
    description: "Gouvernance, sites, budget et héritage des Jeux",
    accent: "blue",
  },
  {
    href: "/performances",
    title: "Performances Athlète",
    description: "Dashboard interactif des résultats 2024 en VTT cross-country",
    accent: "red",
  },
  {
    href: "/heritage",
    title: "Héritage Olympique",
    description: "L'impact des Jeux vu par un habitant de Seine-Saint-Denis",
    accent: "gold",
  },
  {
    href: "/innovations",
    title: "Innovations Technologiques",
    description: "Les 5 grandes innovations tech des JO Paris 2024",
    accent: "green",
  },
] as const;

export const ecosystemSections = [
  {
    title: "Gouvernance",
    subtitle: "Qui dirigeait quoi ?",
    cards: [
      {
        title: "Le CIO",
        summary:
          "Institution suprême du mouvement olympique, supervise et approuve les grandes décisions.",
        details:
          "Le Comité International Olympique est l'institution suprême du mouvement olympique. Il délègue l'organisation des Jeux au comité national du pays hôte et supervise l'ensemble du projet en validant les décisions majeures sur la structure et la gouvernance.",
      },
      {
        title: "Le COJOP",
        summary:
          "Créé en janvier 2018, organise, finance et livre les Jeux sous la présidence de Tony Estanguet.",
        details:
          "Le Comité d'Organisation des Jeux Olympiques et Paralympiques de Paris 2024 a été créé le 18 janvier 2018. Il planifie, organise, finance et livre les Jeux, gère compétitions, sites, cérémonies et sécurité, tout en assurant la liaison avec le CIO.",
      },
      {
        title: "La SOLIDEO",
        summary:
          "Livre les infrastructures olympiques avec un budget de 4,4 Mds€ dont 2,3 Mds€ publics.",
        details:
          "La Société de Livraison des Ouvrages Olympiques est un établissement public créé en 2018 et dirigé par Nicolas Ferrand. Elle centralise les financements publics, garantit les délais et coordonne les maîtres d'ouvrage. Seuls deux nouveaux sites majeurs ont été construits : le Centre Aquatique Olympique et le site d'escalade du Bourget.",
      },
      {
        title: "La Délégation interministérielle",
        summary:
          "Coordonne l'action de l'État, avec Jean Castex comme délégué interministériel.",
        details:
          "Elle garantit la cohérence de l'action de l'État et mobilise Sports, Culture, Logement, Affaires étrangères et Transition énergétique. Jean Castex a été nommé au lendemain de l'attribution des Jeux et supervise aussi le Conseil Olympique et Paralympique.",
      },
    ],
  },
  {
    title: "Sites des épreuves",
    subtitle: "Où se déroulaient les Jeux ?",
    cards: [
      {
        title: "Paris",
        summary:
          "Bercy, Roland-Garros, Grand Palais, Concorde, Champ-de-Mars, Invalides et d'autres sites iconiques.",
        details:
          "Arena Bercy, Roland-Garros, Grand Palais, Place de la Concorde, Champ-de-Mars, Esplanade des Invalides, Pont Alexandre III, Parc des Princes, Arena Porte de la Chapelle et Arena Paris Sud ont porté la programmation olympique au cœur de Paris.",
      },
      {
        title: "Seine-Saint-Denis",
        summary:
          "Stade de France, Centre Aquatique Olympique, site d'escalade du Bourget et pôles para-sportifs.",
        details:
          "Le Stade de France a accueilli l'athlétisme et le rugby à 7, le Centre Aquatique Olympique les sports aquatiques, le Bourget l'escalade et Villepinte plusieurs disciplines indoor. Le parc Georges Valbon a aussi servi au para marathon.",
      },
      {
        title: "Île-de-France",
        summary:
          "Versailles, Paris La Défense Arena, Saint-Quentin-en-Yvelines et Colombes.",
        details:
          "La natation et le water-polo se sont déroulés à Nanterre, l'équitation à Versailles, le cyclisme sur piste au Vélodrome National de Saint-Quentin-en-Yvelines et le hockey au stade Yves-du-Manoir de Colombes.",
      },
      {
        title: "Province & Outre-mer",
        summary:
          "Marseille, Lille, Lyon, Bordeaux, Nantes, Nice, Saint-Étienne et Teahupo'o à Tahiti.",
        details:
          "La voile a pris place à Marseille, le football dans plusieurs grandes villes françaises, le tir sportif à Châteauroux, et le surf à Teahupo'o à Tahiti, élargissant la géographie des Jeux au-delà de Paris.",
      },
    ],
  },
  {
    title: "Budget",
    subtitle: "Comment les Jeux ont-ils été financés ?",
    cards: [
      {
        title: "Budget COJOP",
        summary: "4,481 Mds€, 96% de financement privé et un excédent de 26,8 M€.",
        details:
          "Le budget final du COJOP atteint 4,481 milliards d'euros, contre 3,3 milliards à la candidature. Le financement est assuré à 96% par des ressources privées. La part publique de 204,1 millions d'euros est dédiée aux Jeux Paralympiques.",
      },
      {
        title: "Budget SOLIDEO",
        summary:
          "4,4 Mds€ pour les infrastructures pérennes, dont le Village olympique et les transports.",
        details:
          "La SOLIDEO porte 4,4 milliards d'euros d'investissement, dont environ 2,3 milliards de fonds publics. Les grands postes couvrent le Village olympique, le Centre Aquatique Olympique, le site d'escalade du Bourget et les aménagements de mobilité.",
      },
      {
        title: "Sources de financement",
        summary:
          "Billetterie 32%, partenariats 28%, CIO 28%, autres revenus 12%.",
        details:
          "La billetterie et l'hospitalité représentent 1,333 Md€, les partenariats domestiques 1,238 Md€, les contributions du CIO 1,228 Md€ et les autres revenus commerciaux complètent la structure financière.",
      },
      {
        title: "Comparaison internationale",
        summary:
          "Une édition plus sobre que la moyenne des neuf dernières olympiades.",
        details:
          "Le coût moyen des neuf dernières éditions depuis Séoul 1988 est estimé à 14,4 milliards d'euros. Paris 2024 se situe entre 9 et 11,8 milliards d'euros, grâce à la réutilisation d'infrastructures existantes ou temporaires à 95%.",
      },
    ],
  },
  {
    title: "Héritage durable",
    subtitle: "Ce qui reste après les Jeux",
    cards: [
      {
        title: "Infrastructures sportives",
        summary:
          "Centre Aquatique Olympique, site d'escalade, Arena Porte de la Chapelle et piscines rénovées.",
        details:
          "Le Centre Aquatique Olympique a ouvert au public le 2 juin 2025. S'ajoutent le site d'escalade du Bourget, l'Arena Porte de la Chapelle, huit nouvelles piscines et plus de quinze sites sportifs rénovés.",
      },
      {
        title: "Transports & mobilités",
        summary:
          "Ligne 14 prolongée, RER E étendu et 415 km de pistes cyclables renforcées.",
        details:
          "Le prolongement de la ligne 14 vers Saint-Denis Pleyel et Orly, l'extension du RER E et d'autres lignes, ainsi que 415 km de réseau cyclable et 12 000 places vélo, structurent un héritage concret pour les déplacements quotidiens.",
      },
      {
        title: "Logements",
        summary:
          "4 000 logements, dont 40% sociaux, après reconversion du Village des Athlètes.",
        details:
          "Le Village des Athlètes devient un écoquartier mêlant logements familiaux, logements étudiants et seniors, équipements publics, commerces et services. Le Village des Médias de Dugny suit une logique comparable.",
      },
      {
        title: "Environnement",
        summary:
          "Baisse de 54,6% des émissions face à Londres et Rio, Seine baignable et nouveaux usages sobres.",
        details:
          "Paris 2024 revendique une réduction de 54,6% des émissions par rapport à Londres 2012 et Rio 2016, l'amélioration de la qualité de la Seine avec 23 sites de baignade en 2025, ainsi que des constructions en bois, béton bas carbone, géothermie et photovoltaïque.",
      },
      {
        title: "Social & emploi",
        summary:
          "96% des recrutés ont un emploi stable et 72 000 nouvelles adhésions ont rejoint les clubs sportifs.",
        details:
          "L'héritage social met en avant 30 000 recrutements, 270 701 heures d'insertion, 467 habitants en contrat d'insertion et une hausse des adhésions sportives, notamment chez les femmes et dans les disciplines olympiques.",
      },
    ],
  },
] as const;

export const performanceResults = [
  ["05/09/2024", "Championnats Europe", "Roumanie", "XCC", "Victoire", "1"],
  ["05/12/2024", "Championnats Europe", "Roumanie", "XCO", "Abandon", "-"],
  ["05/25/2024", "Coupe du Monde #3", "Nové Město", "XCC", "Médaille argent", "2"],
  ["05/26/2024", "Coupe du Monde #3", "Nové Město", "XCO", "Victoire", "1"],
  ["06/15/2024", "Coupe du Monde #4", "Val di Sole", "XCC", "Médaille argent", "2"],
  ["06/16/2024", "Coupe du Monde #4", "Val di Sole", "XCO", "Victoire", "1"],
  ["07/28/2024", "Jeux Olympiques", "Paris", "XCO", "Médaille OR", "1"],
  ["08/29/2024", "Championnats Monde", "Andorre", "XCC", "Médaille argent", "2"],
  ["09/01/2024", "Championnats Monde", "Andorre", "XCO", "Hors podium", "14"],
] as const;

export const heritageBlocks = [
  {
    icon: "🏘️",
    title: "Logements & Territoire",
    text:
      "Le plus visible, c'est le village olympique sur l'Île-Saint-Denis. Il a accueilli les athlètes puis s'est transformé rapidement en logements. Des résidences neuves, une passerelle piétonne qui facilite la traversée de la Seine, et des espaces publics qui n'existaient pas avant.",
    before: [
      "Terrain industriel sous-utilisé",
      "Peu d'espaces publics de qualité",
      "Traversée de la Seine difficile",
    ],
    after: [
      "4 000 logements dont 40% sociaux",
      "Éco-quartier avec commerces et services",
      "Nouvelle passerelle piétonne et routière",
    ],
  },
  {
    icon: "🚇",
    title: "Transports & Mobilité",
    text:
      "L'arrivée de la nouvelle desserte autour de Pleyel a rendu les trajets plus rapides. Certains jeunes du quartier se vantent d'aller faire des études ou des stages plus facilement dans l'ouest parisien. Ces gains de mobilité rendent plus réaliste l'accès à des emplois loin du département.",
    before: [
      "Trajets longs et peu pratiques vers Paris",
      "Accès limité aux opportunités d'emploi",
      "Réseau de transport saturé",
    ],
    after: [
      "Ligne 14 prolongée jusqu'à Saint-Denis Pleyel",
      "415 km de réseau cyclable olympique",
      "12 000 nouvelles places de stationnement vélo",
    ],
  },
  {
    icon: "🛠️",
    title: "Emploi & Chantiers",
    text:
      "J'ai vu des chantiers embaucher massivement pendant les années 2021-2023. Des amis et cousins ont trouvé du travail sur les constructions, certains en insertion, d'autres en intérim prolongé. La promesse d'un basculement massif vers l'emploi pérenne reste discutée.",
    before: [
      "Taux de chômage élevé en Seine-Saint-Denis",
      "Peu d'opportunités d'insertion locale",
      "Chantiers extérieurs au territoire",
    ],
    after: [
      "96% des recrutés ont un emploi stable",
      "270 701 heures d'insertion réalisées",
      "467 habitants avec contrat d'insertion",
    ],
  },
  {
    icon: "🏊",
    title: "Équipements sportifs",
    text:
      "Les équipements sportifs laissés par les Jeux existent : piscines, gymnases rénovés, espaces publics le long de la Seine. J'ai commencé à inscrire mes enfants à la nouvelle piscine municipale, avant il fallait attendre des mois. Mais les moyens d'encadrement ne suivent pas toujours la même cadence que les nouveaux équipements.",
    before: [
      "Files d'attente de plusieurs mois pour les piscines",
      "Gymnases vétustes et surchargés",
      "Peu d'espaces sportifs de qualité",
    ],
    after: [
      "Centre Aquatique Olympique ouvert au public",
      "18 bassins construits ou rénovés",
      "72 000 nouvelles adhésions dans les clubs sportifs",
    ],
  },
  {
    icon: "🤝",
    title: "Cohésion sociale",
    text:
      "Les Jeux ont créé un sentiment de fierté locale pendant quelques mois. Mais j'observe des réactions mixtes : des voisins qui disent que l'on a gagné des équipements, et des familles inquiètes par la hausse des loyers autour des nouveaux quartiers. Les débats sur la gentrification restent présents.",
    before: [
      "Sentiment d'être oublié des grands projets",
      "Peu d'événements ouverts au grand public",
      "Image négative du département",
    ],
    after: [
      "Distribution de places gratuites aux habitants",
      "Animations dans les quartiers pendant les Jeux",
      "Visibilité internationale pour la Seine-Saint-Denis",
    ],
  },
] as const;

export const innovationCards = [
  {
    slug: "ia-sport",
    icon: "🧠",
    title: "IA pour le sport",
    category: "Sport",
    badgeClass: "blue",
    summary:
      "Analyse biomécanique, prédiction de blessures et détection de talents via vision par ordinateur.",
    details:
      "La plateforme Intel AI Everywhere permet d'analyser des vidéos, de générer des modèles 3D biomécaniques, de prédire certaines blessures et de détecter des talents. Le potentiel est fort, mais suppose une gouvernance nette sur les données et leur usage.",
    scores: [3, 2, 3],
  },
  {
    slug: "securite",
    icon: "🛡️",
    title: "Sécurité intelligente & biométrie",
    category: "Sécurité",
    badgeClass: "red",
    summary:
      "Scanners corporels, vidéo-IA pour la détection d'anomalies et contrôle d'accès en temps réel.",
    details:
      "Les systèmes de détection d'anomalies et de contrôle biométrique améliorent l'efficacité opérationnelle, mais posent des questions fortes sur la vie privée, le cadre légal et l'acceptabilité sociale.",
    scores: [3, 2, 2],
  },
  {
    slug: "medias",
    icon: "📡",
    title: "Diffusion & médias avancés",
    category: "Médias",
    badgeClass: "violet",
    summary:
      "Streaming 8K, replays multi-caméras 3D et génération automatique de highlights.",
    details:
      "La diffusion cloud, la 8K, les replays immersifs et la production automatisée de temps forts enrichissent l'expérience média, avec une adoption qui reste liée au matériel disponible côté spectateur.",
    scores: [3, 3, 2],
  },
  {
    slug: "spectateurs",
    icon: "🎟️",
    title: "Billetterie numérique & expérience spectateur",
    category: "Spectateurs",
    badgeClass: "gold",
    summary:
      "Billets numériques, QR codes et usages AR/VR pour les spectateurs sur site et à distance.",
    details:
      "La billetterie 100% numérique avec QR codes et expériences augmentées en AR/VR offre un modèle facilement réutilisable pour d'autres événements si l'infrastructure et le support sont maintenus.",
    scores: [3, 3, 3],
  },
  {
    slug: "durabilite",
    icon: "🌱",
    title: "Durabilité & infrastructures intelligentes",
    category: "Durabilité",
    badgeClass: "green",
    summary:
      "Jumeaux numériques, gestion énergétique en temps réel et matériaux sobres.",
    details:
      "Les jumeaux numériques des sites, les énergies renouvelables, les matériaux biosourcés et le béton bas carbone composent l'innovation au profil le plus équilibré en efficacité, acceptabilité et pérennité.",
    scores: [3, 2, 3],
  },
] as const;

export const scenarios = [
  {
    title: "Scénario A — Standardisation globale",
    borderColor: "#2D8B57",
    description:
      "Les technologies deviennent la norme pour tous les grands événements sportifs. Billetterie numérique, diffusion 8K et jumeaux numériques s'installent dans les cahiers des charges.",
    impact: "Fort — transformation systémique",
    condition: "Coûts raisonnables, standardisation, formation et gouvernance claire.",
  },
  {
    title: "Scénario B — Diffusion fragmentée",
    borderColor: "#FCB131",
    description:
      "Durabilité et billetterie se diffusent largement, mais la sécurité IA et l'ultra-HD restent réservées aux plus grands événements.",
    impact: "Modéré — avancées localisées",
    condition: "Retour sur investissement variable selon les contextes.",
  },
  {
    title: "Scénario C — Retournement",
    borderColor: "#EE334E",
    description:
      "Certaines technologies sont abandonnées à cause des coûts, de controverses sur la vie privée ou d'une faible adoption massive.",
    impact: "Faible — perte d'opportunité",
    condition: "Scandales, crise financière ou adoption insuffisante.",
  },
] as const;
