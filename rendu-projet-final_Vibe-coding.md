# Recaptitulatif du projet

### Membres :
- Timothé Clément
- Maxime Cordonnier
- Emmanuel Conde Reis

### URL de l'application web : [`https://vibe-coding-x-jo-paris-2024.vercel.app/`](https://vibe-coding-x-jo-paris-2024.vercel.app/)

## Prompts de génération et vibe-coding

Prompt de génération de l'app web :
```prompt
Crée une Webapp multi-pages sur le thème des JO Paris 2024
en utilisant Next.js 14 avec App Router pour la navigation entre pages.

---

## IDENTITÉ VISUELLE GLOBALE

Palette de couleurs à appliquer sur toute la Webapp :
- Bleu principal : #0081C8
- Rouge : #EE334E
- Or : #FCB131
- Blanc : #FFFFFF
- Fond sombre : #1a1a2e
- Vert (secondaire) : #2D8B57
- Violet (secondaire) : #7B2D8B

Typographie : Inter ou Poppins via Google Fonts
Style général : design épuré, cartes avec ombres légères
et coins arrondis, espacements généreux.

---

## STRUCTURE DE LA WEBAPP (5 pages)

### PAGE 0 — Accueil (route "/")
- Grand titre centré : "JO Paris 2024 — Tableau de bord interactif"
- Sous-titre : "Explorez l'écosystème, les performances,
  l'héritage et les innovations des Jeux Olympiques de Paris 2024"
- Anneaux olympiques en SVG stylisés aux couleurs officielles
- 4 grandes cartes de navigation cliquables :

  CARTE 1 — Écosystème JO
  Description : "Gouvernance, sites, budget et héritage des Jeux"
  Lien vers : /ecosysteme

  CARTE 2 — Performances Athlète
  Description : "Dashboard interactif des résultats 2024 en VTT cross-country"
  Lien vers : /performances

  CARTE 3 — Héritage Olympique
  Description : "L'impact des Jeux vu par un habitant de Seine-Saint-Denis"
  Lien vers : /heritage

  CARTE 4 — Innovations Technologiques
  Description : "Les 5 grandes innovations tech des JO Paris 2024"
  Lien vers : /innovations

### PAGE 1 — Écosystème JO (route "/ecosysteme")
[contenu fourni dans un prompt séparé]

### PAGE 2 — Performances Athlète (route "/performances")
[contenu fourni dans un prompt séparé]

### PAGE 3 — Héritage Olympique (route "/heritage")
[contenu fourni dans un prompt séparé]

### PAGE 4 — Innovations Technologiques (route "/innovations")
[contenu fourni dans un prompt séparé]

---

## NAVIGATION (commune à toutes les pages)

Barre de navigation sticky avec :
- Logo à gauche : anneaux olympiques miniatures + "Paris 2024"
- Liens à droite : "Accueil" | "Écosystème" | "Performances"
  | "Héritage" | "Innovations"
- Lien de la page active souligné ou en gras
- Sur mobile : menu hamburger avec menu déroulant
- Fond navbar : blanc avec bordure dorée (#FCB131) en bas

---

## FOOTER (commun à toutes les pages)

- Texte centré : "Projet Vibe Coding — JO Paris 2024"
- Mention : "Réalisé avec Next.js dans le cadre d'un projet pédagogique B2"
- Fond : #1a1a2e, texte blanc

---

## COMPORTEMENT GLOBAL DES POPUPS

- Fond semi-transparent sombre derrière la popup
- Animation d'ouverture fluide (scale + opacity)
- Fermeture via croix en haut à droite OU clic en dehors
- Scroll de la page bloqué quand une popup est ouverte

---

## LIBRAIRIES AUTORISÉES

- Next.js 14 App Router (navigation)
- Chart.js via CDN (pages Performances et Innovations)
- Google Fonts : Inter ou Poppins
- IntersectionObserver API native (page Héritage)
- Tailwind CSS pour le styling
- Aucune autre dépendance externe

---

## CONTRAINTES TECHNIQUES

- 100% responsive (mobile, tablette, desktop)
- Transitions fluides entre les pages
- Couleurs, typographie et espacements cohérents sur toutes les pages
- Déploiement sur Vercel
```



Prompt de remplissage de la 'Section 1' :
```prompt
Dans la page /ecosysteme de la Webapp Next.js JO Paris 2024,
crée le contenu suivant. Respecte l'identité visuelle globale
(bleu #0081C8, rouge #EE334E, or #FCB131, blanc #FFFFFF,
fond sombre #1a1a2e). Inclus la navbar et le footer communs.

La page est divisée en 4 sections verticales, chacune avec
un titre, un sous-titre et une grille de cartes cliquables.
Au clic sur une carte, une popup s'ouvre avec le détail.
La popup se ferme avec une croix en haut à droite
ou en cliquant en dehors. Le scroll est bloqué quand
une popup est ouverte.

---

## SECTION 1 — Gouvernance
Sous-titre : "Qui dirigeait quoi ?"

CARTE 1 — Le CIO
Résumé : Institution suprême du mouvement olympique —
supervise et approuve toutes les décisions majeures des Jeux.
Popup : Le Comité International Olympique est l'institution
suprême du mouvement olympique. Il délègue l'organisation
des Jeux au Comité National Olympique du pays hôte.
Il supervise l'ensemble du projet et approuve toutes
les décisions majeures concernant la structure
et la gouvernance des Jeux.

CARTE 2 — Le COJOP
Résumé : Créé en janvier 2018 — organise, finance
et livre les Jeux — Président : Tony Estanguet.
Popup : Le Comité d'Organisation des Jeux Olympiques
et Paralympiques (Paris 2024) a été créé le 18 janvier 2018.
Président : Tony Estanguet (triple champion olympique
de canoë-kayak). Missions : planifier, organiser, financer
et livrer les Jeux — gérer les compétitions, les sites,
les cérémonies et la sécurité — assurer la liaison avec le CIO.

CARTE 3 — La SOLIDEO
Résumé : Livre toutes les infrastructures —
budget de 4,4 Mds€ dont 2,3 Mds€ publics.
Popup : La Société de Livraison des Ouvrages Olympiques
est un établissement public créé par une loi en 2018.
Dirigée par Nicolas Ferrand. Missions : centraliser
les financements publics (1,5 Md€), garantir la livraison
dans les délais, piloter et coordonner les maîtres d'ouvrage.
Seulement 2 nouveaux sites construits : le Centre Aquatique
Olympique et le site d'escalade du Bourget.

CARTE 4 — 🇫🇷 La Délégation Interministérielle
Résumé : Coordonne l'action de l'État —
Délégué interministériel : Jean Castex.
Popup : Garantit la cohérence de l'action de l'État.
Jean Castex nommé délégué interministériel au lendemain
de l'attribution des Jeux. Ministères impliqués : Sports,
Culture, Logement, Affaires étrangères,
Transition énergétique. Supervise le Conseil Olympique
et Paralympique (présidé par le Président de la République).

---

## SECTION 2 — Sites des épreuves
Sous-titre : "Où se déroulaient les Jeux ?"

CARTE 1 — Paris (13 sites principaux)
Résumé : Bercy, Roland-Garros, Grand Palais,
Concorde, Champ-de-Mars, Invalides...
Popup : Arena Bercy (basketball, gymnastique, trampoline) —
Stade Roland-Garros (tennis, boxe) — Le Grand Palais
(escrime, taekwondo) — Place de la Concorde (basketball 3x3,
breaking, BMX, skateboard) — Champ-de-Mars
(beach-volley, judo, lutte) — Esplanade des Invalides
(tir à l'arc, arrivée marathon) — Pont Alexandre III
(arrivée triathlon et natation marathon) —
Parc des Princes (football) — Arena Porte de la Chapelle
(badminton, gymnastique rythmique) — Arena Paris Sud
(haltérophilie, handball, volleyball).

CARTE 2 — Seine-Saint-Denis
Résumé : Stade de France, Centre Aquatique Olympique,
Site d'escalade du Bourget...
Popup : Stade de France à Saint-Denis
(athlétisme, rugby à 7) — Centre Aquatique Olympique
(plongeon, water-polo, natation artistique) —
Site d'escalade du Bourget (escalade sportive) —
Arena Paris Nord à Villepinte
(boxe, pentathlon moderne, volleyball assis) —
Parc Georges Valbon à La Courneuve
(départ du para marathon).

CARTE 3 — Île-de-France
Résumé : Versailles (équitation), La Défense Arena
(natation), Saint-Quentin (cyclisme sur piste)...
Popup : Paris La Défense Arena à Nanterre
(natation, water-polo) — Château de Versailles
(équitation, para équitation) — Vélodrome National
de Saint-Quentin-en-Yvelines (cyclisme sur piste) —
Stade Yves-du-Manoir à Colombes (hockey sur gazon).

CARTE 4 — 🇫🇷 Province & Outre-mer
Résumé : Marseille, Lille, Lyon, Bordeaux,
Nantes, Nice, Saint-Étienne, Tahiti...
Popup : Marseille (voile, football) —
Lille/Villeneuve-d'Ascq (handball, basketball) —
Châteauroux (tir sportif) — Football dans 6 villes :
Bordeaux, Nantes, Lyon, Saint-Étienne, Nice, Paris.
Site en outre-mer : Teahupo'o à Tahiti (surf).

---

## SECTION 3 — Budget
Sous-titre : "Comment les Jeux ont-ils été financés ?"

CARTE 1 — Budget COJOP
Résumé : 4,481 Mds€ — 96% de financement privé —
excédent de 26,8 M€.
Popup : Budget final : 4,481 milliards d'euros
(vs 3,3 Mds€ lors de la candidature, soit +17%).
Financement à 96% privé. Excédent de 26,8 millions d'euros
annoncé en décembre 2024. Part publique : 204,1 millions
d'euros, exclusivement dédiée aux Jeux Paralympiques.

CARTE 2 — Budget SOLIDEO
Résumé : 4,4 Mds€ pour les infrastructures pérennes —
Village olympique inclus.
Popup : Budget SOLIDEO : 4,4 milliards d'euros.
Environ 2,3 Mds€ publics + recettes de la vente
des constructions. Principales dépenses : Village olympique
(646 M€ dont 542 M€ de l'État), Centre Aquatique Olympique,
Site d'escalade du Bourget, infrastructures de transport.

CARTE 3 — Sources de financement
Résumé : Billetterie 32% — Partenariats 28% —
CIO 28% — Autres 12%.
Popup : Billetterie et hospitalités 1,333 Md€ (32%) —
Partenariats domestiques 1,238 Md€ (28%) —
Contributions du CIO 1,228 Md€ (28%, dont droits TV
750 M€ et partenariats mondiaux 470 M€) —
Autres revenus commerciaux 12%.

CARTE 4 — Comparaison internationale
Résumé : En dessous de la moyenne des 9 dernières éditions —
l'une des éditions les plus sobres depuis 20 ans.
Popup : Coût moyen des 9 dernières éditions depuis
Séoul 1988 : 14,4 milliards d'euros. Paris 2024 se situe
en dessous avec un budget total estimé entre 9 et 11,8 Mds€.
Économies réalisées : environ 300 millions d'euros.
95% d'infrastructures temporaires ou existantes.

---

## SECTION 4 — Héritage durable
Sous-titre : "Ce qui reste après les Jeux"

CARTE 1 — Infrastructures sportives
Résumé : 18 bassins rénovés, Centre Aquatique Olympique,
Site d'escalade, Arena Porte de la Chapelle.
Popup : Centre Aquatique Olympique ouvert au public
le 2 juin 2025 — Site d'escalade du Bourget (5 murs) —
Arena Porte de la Chapelle (80% de surfaces végétalisées) —
8 nouvelles piscines — Plus de 15 sites sportifs rénovés —
Plan 5000 équipements (terrains de beach-volley, basket 3x3).

CARTE 2 — Transports & mobilités
Résumé : Ligne 14 prolongée, RER E étendu,
415 km de pistes cyclables en Île-de-France.
Popup : Ligne 14 prolongée vers Saint-Denis Pleyel
et l'aéroport d'Orly — RER E étendu de Saint-Lazare
à Nanterre — Ligne 11 vers Rosny Bois-Perrier —
Ligne 12 vers Mairie d'Aubervilliers —
Tramway T3b reliant Porte d'Asnières à Porte Dauphine —
415 km de réseau cyclable — 12 000 places vélo.

CARTE 3 — Logements
Résumé : 4 000 logements dont 40% sociaux —
Village des Athlètes reconverti en éco-quartier.
Popup : 2 200 logements familiaux + 800 logements
étudiants et personnes âgées — près de 40% sociaux —
premiers occupants dès septembre 2025 —
nouveaux équipements publics, commerces et services.
Village des Médias à Dugny également reconverti.

CARTE 4 — Environnement
Résumé : -54,6% CO₂ vs Londres/Rio —
Seine baignable — 34 espèces de poissons.
Popup : Réduction de -54,6% des émissions vs moyenne
Londres 2012 et Rio 2016 — 23 sites de baignade en 2025
dont 3 à Paris — 34 espèces de poissons contre 2
il y a 40 ans — constructions en bois, béton bas carbone,
géothermie, panneaux photovoltaïques.

CARTE 5 — Social & emploi
Résumé : 96% des recrutés ont un emploi stable —
72 000 nouvelles adhésions dans les clubs sportifs.
Popup : 96% des 30 000 demandeurs d'emploi recrutés
ont un emploi stable — 98% des agents de sécurité
ont un emploi (73% en CDI) — 467 habitants
avec contrat d'insertion — 270 701 heures d'insertion.
Pratique sportive : 72 000 nouvelles adhésions —
+8% disciplines olympiques — +6% adhésions femmes.

---

## CONTRAINTES TECHNIQUES

- Responsive (mobile et desktop)
- Couleurs : bleu #0081C8, rouge #EE334E, or #FCB131,
  blanc #FFFFFF
- Cartes : ombre légère, coins arrondis, effet hover subtil
- Popup : fond semi-transparent, animation fluide,
  croix + clic extérieur pour fermer
- Sections alternant fond blanc et gris très clair
```





Prompt de remplissage de la 'Section 2' :
```prompt
Dans la page /performances de la Webapp Next.js JO Paris 2024,
crée le contenu suivant. Respecte l'identité visuelle globale
(bleu #0081C8, rouge #EE334E, or #FCB131, blanc #FFFFFF).
Inclus la navbar et le footer communs.
Importe Chart.js via CDN dans le composant client.

---

## BLOC 1 — Carte Moment Clé

Grande carte avec fond doré (#FCB131) et texte sombre.
Titre : "Médaille d'Or — Jeux Olympiques Paris 2024"
Sous-titre : "28 juillet 2024 — XCO — Paris"
3 statistiques côte à côte :
- Temps : 1h26'02
- Classement : 1ère place
- Écart sur le 2ème : +177 secondes

---

## BLOC 2 — Graphique d'évolution

Graphique en lignes avec Chart.js.

Axe X (dates chronologiques) :
05/09 | 05/25 | 05/26 | 06/15 | 06/16 | 07/28 | 08/29 | 09/01

Ligne 1 — XCC (couleur #0081C8) :
05/09 → 1 | 05/25 → 2 | 06/15 → 2 | 08/29 → 2
(autres dates : null)

Ligne 2 — XCO (couleur #EE334E) :
05/26 → 1 | 06/16 → 1 | 07/28 → 1 | 09/01 → 14
(autres dates : null)

Point spécial 07/28 sur XCO :
couleur or (#FCB131), taille plus grande,
tooltip : "JO Paris 2024"

Axe Y inversé (1 en haut = meilleur classement).
Titre axe Y : "Classement". Titre axe X : "Date".

Deux boutons filtres au-dessus du graphique :
"XCC" et "XCO"
Clic sur un bouton affiche ou masque la ligne correspondante.
État actif/inactif clairement visible.

---

## BLOC 3 — Tableau des résultats

Tableau responsive avec 3 boutons filtres au-dessus :
"Toutes" | "XCC seulement" | "XCO seulement"
Style pill, un seul actif à la fois.

Colonnes : Date | Compétition | Lieu | Type | Résultat | Classement

Données (9 lignes) :
05/09/2024 | Championnats Europe | Roumanie   | XCC | Victoire        | 1
05/12/2024 | Championnats Europe | Roumanie   | XCO | Abandon         | -
05/25/2024 | Coupe du Monde #3   | Nové Město | XCC | Médaille argent | 2
05/26/2024 | Coupe du Monde #3   | Nové Město | XCO | Victoire        | 1
06/15/2024 | Coupe du Monde #4   | Val di Sole| XCC | Médaille argent | 2
06/16/2024 | Coupe du Monde #4   | Val di Sole| XCO | Victoire        | 1
07/28/2024 | Jeux Olympiques     | Paris      | XCO | Médaille OR     | 1
08/29/2024 | Championnats Monde  | Andorre    | XCC | Médaille argent | 2
09/01/2024 | Championnats Monde  | Andorre    | XCO | Hors podium     | 14

Ligne 07/28/2024 : fond doré (#FCB131 à 30% d'opacité).

---

## CONTRAINTES TECHNIQUES

- Responsive (mobile et desktop)
- Chart.js importé via CDN dans un composant client ('use client')
- Boutons filtres avec état actif/inactif visible
- Aucune dépendance autre que Chart.js
```





Prompt de remplissage de la 'Section 3' :
```prompt
Dans la page /heritage de la Webapp Next.js JO Paris 2024,
crée le contenu suivant. Respecte l'identité visuelle globale
(bleu #0081C8, rouge #EE334E, or #FCB131, blanc #FFFFFF,
fond sombre #1a1a2e). Inclus la navbar et le footer communs.

Page de scroll storytelling : les blocs apparaissent
progressivement au scroll via IntersectionObserver API
(fade-in : opacity 0→1 + légère translation vers le haut).
Chaque bloc apparaît avec un délai légèrement décalé
pour un effet cascade. Aucune librairie externe
pour les animations.

---

## BLOC 0 — Accroche
Fond sombre #1a1a2e, texte blanc centré.
Citation en italique, typographie large :
"Je vis en Seine-Saint-Denis depuis trente ans.
Quand on parlait des Jeux, beaucoup autour de moi
pensaient : encore un grand projet qui nous traversera."
Sous-titre : "Aujourd'hui, voici ce qui est resté."

---

## BLOCS 1 à 5 — Structure répétée

Chaque bloc :
- Icône + Titre thématique
- Texte narratif à la première personne
- Composant Avant/Après : deux colonnes,
  gauche fond gris clair label "AVANT",
  droite fond bleu clair label "APRÈS",
  2-3 points en bullets chacune.
  Sur mobile : colonnes empilées verticalement.

---

BLOC 1 — Logements & Territoire

Texte :
"Le plus visible, c'est le village olympique
sur l'Île-Saint-Denis. Il a accueilli les athlètes
puis s'est transformé rapidement en logements.
Des résidences neuves, une passerelle piétonne
qui facilite la traversée de la Seine,
et des espaces publics qui n'existaient pas avant."

AVANT :
- Terrain industriel sous-utilisé
- Peu d'espaces publics de qualité
- Traversée de la Seine difficile

APRÈS :
- 4 000 logements dont 40% sociaux
- Éco-quartier avec commerces et services
- Nouvelle passerelle piétonne/routière

---

BLOC 2 — Transports & Mobilité

Texte :
"L'arrivée de la nouvelle desserte autour de Pleyel
a rendu les trajets plus rapides. Certains jeunes
du quartier se vantent d'aller faire des études
ou des stages plus facilement dans l'ouest parisien.
Ces gains de mobilité rendent plus réaliste
l'accès à des emplois loin du département."

AVANT :
- Trajets longs et peu pratiques vers Paris
- Accès limité aux opportunités d'emploi
- Réseau de transport saturé

APRÈS :
- Ligne 14 prolongée jusqu'à Saint-Denis Pleyel
- 415 km de réseau cyclable olympique
- 12 000 nouvelles places de stationnement vélo

---

BLOC 3 — Emploi & Chantiers

Texte :
"J'ai vu des chantiers embaucher massivement
pendant les années 2021-2023. Des amis et cousins
ont trouvé du travail sur les constructions,
certains en insertion, d'autres en intérim prolongé.
La promesse d'un basculement massif vers l'emploi
pérenne reste discutée."

AVANT :
- Taux de chômage élevé en Seine-Saint-Denis
- Peu d'opportunités d'insertion locale
- Chantiers extérieurs au territoire

APRÈS :
- 96% des recrutés ont un emploi stable
- 270 701 heures d'insertion réalisées
- 467 habitants avec contrat d'insertion

---

BLOC 4 — Équipements sportifs

Texte :
"Les équipements sportifs laissés par les Jeux existent :
piscines, gymnases rénovés, espaces publics
le long de la Seine. J'ai commencé à inscrire
mes enfants à la nouvelle piscine municipale —
avant, il fallait attendre des mois. Mais les moyens
d'encadrement ne suivent pas toujours la même cadence
que les nouveaux équipements."

AVANT :
- Files d'attente de plusieurs mois pour les piscines
- Gymnases vétustes et surchargés
- Peu d'espaces sportifs de qualité

APRÈS :
- Centre Aquatique Olympique ouvert au public
- 18 bassins de natation construits ou rénovés
- 72 000 nouvelles adhésions dans les clubs sportifs

---

BLOC 5 — Cohésion sociale

Texte :
"Les Jeux ont créé un sentiment de fierté locale
pendant quelques mois. Mais j'observe des réactions
mixtes : des voisins qui disent 'on a gagné
des équipements', et des familles inquiètes
par la hausse des loyers autour des nouveaux quartiers.
Les débats sur la gentrification restent présents."

AVANT :
- Sentiment d'être oublié des grands projets
- Peu d'événements ouverts au grand public
- Image négative du département

APRÈS :
- Distribution de places gratuites aux habitants
- Animations dans les quartiers pendant les Jeux
- Visibilité internationale pour Seine-Saint-Denis

---

## BLOC FINAL — Conclusion
Fond sombre #1a1a2e, texte blanc centré.
Citation en italique, typographie imposante :
"Les Jeux ont été un accélérateur. Mais l'essentiel
pour nous, habitants de Seine-Saint-Denis,
c'est ce qu'on met derrière — politiques d'emploi locales,
soutien aux associations sportives, protection
des ménages vulnérables. Si ces conditions sont suivies
d'actes, alors le changement restera."

---

## CONTRAINTES TECHNIQUES

- Animations fade-in via IntersectionObserver API uniquement
- Responsive (mobile et desktop)
- Colonnes Avant/Après empilées sur mobile
- Aucune dépendance externe
```




Prompt de remplissage de la 'Section 4' :
```prompt
Dans la page /innovations de la Webapp Next.js JO Paris 2024,
crée le contenu suivant. Respecte l'identité visuelle globale
(bleu #0081C8, rouge #EE334E, or #FCB131, blanc #FFFFFF,
vert #2D8B57, violet #7B2D8B). Inclus la navbar
et le footer communs.
Importe Chart.js via CDN dans le composant client.

---

## BLOC 1 — Innovations filtrables

### Barre de filtres
6 boutons pill, un seul actif à la fois :
"Toutes" | "Sport" | "Sécurité" | "Médias"
| "Spectateurs" | "Durabilité"
"Toutes" actif par défaut.

### Grille de 5 cartes cliquables
Chaque carte : icône + titre + badge catégorie + résumé 2 lignes.
Au clic : popup avec description complète + graphique
en barres horizontales Chart.js (3 barres :
Efficacité / Acceptabilité / Pérennité,
valeurs : Haute=3, Moyenne=2, Faible=1).
Popup : fermeture via croix en haut à droite
OU clic en dehors.
Chaque popup crée son canvas Chart.js à l'ouverture
et le détruit à la fermeture (évite les conflits de canvas).

---

CARTE 1 — IA pour le sport
Catégorie : Sport (badge #0081C8)
Résumé : Analyse biomécanique, prédiction de blessures,
détection de talents via vision par ordinateur.
Popup : La plateforme Intel "AI Everywhere" permet
de scanner des vidéos, utiliser la vision par ordinateur,
générer des modèles 3D biomécaniques, prédire des blessures
et détecter des talents. Très prometteuse mais dépend
d'une gouvernance claire sur les données.
Scores : Efficacité Haute (3) | Acceptabilité Moyenne (2)
| Pérennité Haute (3)

CARTE 2 — Sécurité intelligente & biométrie
Catégorie : Sécurité (badge #EE334E)
Résumé : Scanners corporels, vidéo-IA pour détection
d'anomalies, contrôle d'accès performant en temps réel.
Popup : Systèmes de détection d'anomalies en temps réel
via caméras intelligentes et biométrie. Très efficace
opérationnellement mais soulève des questions importantes
sur la vie privée et le cadre légal.
Scores : Efficacité Haute (3) | Acceptabilité Moyenne (2)
| Pérennité Moyenne (2)

CARTE 3 — Diffusion & médias avancés
Catégorie : Médias (badge #7B2D8B)
Résumé : Streaming 8K, replays multi-caméras en 3D,
génération automatique de highlights par IA.
Popup : Diffusion via cloud, streaming en 8K, replays
multi-caméras en 3D et génération automatique de moments
forts grâce à l'IA. Adoption dépend du matériel
disponible côté spectateur.
Scores : Efficacité Haute (3) | Acceptabilité Haute (3)
| Pérennité Moyenne (2)

CARTE 4 — Billetterie numérique & expérience spectateur
Catégorie : Spectateurs (badge #FCB131, texte sombre)
Résumé : Billets numériques, QR codes, AR/VR
pour spectateurs in situ et à distance.
Popup : Billetterie 100% numérique avec QR codes,
expérience augmentée via AR/VR. Modèle facilement
applicable à d'autres événements si l'infrastructure
est maintenue.
Scores : Efficacité Haute (3) | Acceptabilité Haute (3)
| Pérennité Haute (3)

CARTE 5 — Durabilité & infrastructures intelligentes
Catégorie : Durabilité (badge #2D8B57)
Résumé : Jumeaux numériques des sites, gestion énergétique
en temps réel, matériaux recyclés et énergie renouvelable.
Popup : Jumeaux numériques pour la planification et gestion
des sites, énergie renouvelable, matériaux biosourcés
et béton bas carbone. Meilleur profil combiné
efficacité-acceptabilité-pérennité.
Scores : Efficacité Haute (3) | Acceptabilité Moyenne (2)
| Pérennité Haute (3)

---

## BLOC 2 — Scénarios d'adoption future

Titre : "Et demain ? Les scénarios d'adoption"
Sous-titre : "Comment ces innovations pourraient
se diffuser après les JO Paris 2024"

3 cartes côte à côte (empilées sur mobile),
bordure supérieure colorée épaisse :

CARTE A — Scénario A — Standardisation globale
Bordure : #2D8B57
Description : Les technologies deviennent la norme
pour tous les grands événements sportifs.
Billetterie numérique et diffusion 8K déployées partout,
jumeaux numériques intégrés aux cahiers des charges.
Impact : Fort — transformation systémique
Condition : Coûts raisonnables, standardisation,
formation, gouvernance claire.

CARTE B — Scénario B — Diffusion fragmentée
Bordure : #FCB131
Description : Durabilité et billetterie se diffusent
largement, mais sécurité IA et diffusion ultra-HD
restent limitées aux grands événements et pays riches.
Impact : Modéré — avancées localisées
Condition : Retour sur investissement variable.

CARTE C — Scénario C — Retournement
Bordure : #EE334E
Description : Certaines technologies abandonnées
en raison de coûts élevés, controverses sur la vie privée
ou manque d'adoption de masse.
Impact : Faible — perte d'opportunité
Condition : Scandales, crise financière, faible adoption.

---

## CONTRAINTES TECHNIQUES

- Composant client ('use client') pour Chart.js
- Filtres : masquer/afficher cartes avec animation de fondu
- Chaque popup détruit son canvas Chart.js à la fermeture
- Responsive (mobile et desktop)
- Boutons filtres état actif/inactif visible
- Popup : croix + clic extérieur pour fermer
```


## Difficultés rencontrées

Aucune difficulté significative n'a été rencontré durant la réalisation de ce projet

## Axes critiques

Par gouts personnel on aurait préférer avoir un site créer par nous même, mais dans le contexte du vibe-coding on aurait peut-être aimé pouvoir rendre le site plus intéractif et avoir plus de données officiels pour les graphes.