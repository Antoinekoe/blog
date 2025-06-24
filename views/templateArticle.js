export const templateArticle = (titre, contenu) => `
<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Accueil</title>
  <link rel="stylesheet" href="/styles.css">
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400..700;1,400..700&family=Montserrat:ital,wght@0,100..900;1,100..900&family=Play:wght@400;700&family=Playfair+Display:ital,wght@0,400..900;1,400..900&family=Press+Start+2P&family=Work+Sans:ital,wght@0,100..900;1,100..900&display=swap" rel="stylesheet">

</head>
<div class="menu-container">
  <a href="/">
    <img src="/images/blog.svg" class="filter-white" alt="" />
  </a>

  <nav>
    <ul class="ul-header">
      <li class="li-header"><a href="/create">CRÉER UN ARTICLE</a></li>
      <li class="li-header"><a href="/modify">MODIFIER UN ARTICLE</a></li>
      <li class="li-header"><a href="/delete">SUPPRIMER UN ARTICLE</a></li>
    </ul>
  </nav>
</div>
<body>
<div class="container">
    <h1>${titre}</h1>
<div class="contenu-articles">
    <p>${contenu}</p>
</div>
</div>
</body>
</html>
`;
