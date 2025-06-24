import express from "express";
import bodyParser from "body-parser";
import { unlink, writeFile } from "fs";
import { dirname } from "path";
import path from "path";
import { fileURLToPath } from "url";
import { templateArticle } from "./views/templateArticle.js";
const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
let listeArticles = [];

// Création de 3 fonctions : une qui enlève les espaces/tirets/caractères spéciaux pour uniformiser la nomenclature du fichier, une qui limite la taille max et une qui appelle les 2 en donnant en variable ce que l'utilisateur a mis en nom
function securiserNomFichier(nomArticle) {
  return nomArticle
    .replace(/[^a-z0-9]+/gi, "_")
    .replace(/_+/g, "_")
    .replace(/^_|_$/g, "")
    .toLowerCase();
}

function tronquerNomFichier(nomSecurise, longueurMax = 100) {
  return nomSecurise.substring(0, longueurMax);
}

function creerNomFichierSecurise(nomArticle) {
  const nomSecurise = securiserNomFichier(nomArticle);
  const nomTronque = tronquerNomFichier(nomSecurise, 100);

  return nomTronque;
}

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

// GET
app.get("/", (req, res) => {
  res.render("index.ejs", {
    listeArticles: listeArticles,
  });
});

app.get("/Articles/:nom", (req, res) => {
  const nomArticle = req.params.nom;
  const nomArticleSecurise = creerNomFichierSecurise(nomArticle);
  res.render(
    path.join(__dirname, "views", "Articles", nomArticleSecurise + ".ejs")
  );
});

app.get("/create", (req, res) => {
  res.render("create.ejs", { nombreMaxArticle: false, articleDejaCree: false });
});

app.get("/modify", (req, res) => {
  res.render("modify.ejs", { listeArticles: listeArticles });
});

app.get("/delete", (req, res) => {
  res.render("delete.ejs", { listeArticles: listeArticles });
});

app.get("/delete/submit", (req, res) => {
  res.render("index.ejs");
});

app.get("/modify/submit", (req, res) => {
  res.render("index.ejs");
});

app.get("/create/submit", (req, res) => {
  res.render("index.ejs", {
    listeArticles: listeArticles,
    nomArticle: nomArticle,
  });
});

// POST

app.post("/create/submit", (req, res) => {
  let nomArticle = req.body.aName;
  let descriptionArticle = req.body.description;
  const nomFichier = creerNomFichierSecurise(nomArticle);

  if (listeArticles.indexOf(nomArticle) !== -1 && listeArticles.length > 7) {
    res.render("create.ejs", {
      nombreMaxArticle: true,
      articleDejaCree: true,
      nomArticle: nomArticle,
      listeArticles: listeArticles,
    });
  } else if (listeArticles.indexOf(nomArticle) !== -1) {
    res.render("create.ejs", {
      nombreMaxArticle: false,
      articleDejaCree: true,
      nomArticle: nomArticle,
      listeArticles: listeArticles,
    });
  } else if (listeArticles.length > 7) {
    res.render("create.ejs", {
      articleDejaCree: false,
      nombreMaxArticle: true,
      nomArticle: nomArticle,
      listeArticles: listeArticles,
    });
  } else {
    writeFile(
      path.join(__dirname, "views", "Articles", nomFichier + ".ejs"),
      templateArticle(nomArticle, descriptionArticle),
      (err) => {
        if (err) {
          console.log("Erreur lors de la création du fichier : " + err);
        }
      }
    );
    res.render("index.ejs", {
      nombreMaxArticle: false,
      articleDejaCree: false,
      nomArticle: nomArticle,
      listeArticles: listeArticles,
    });
  }
});

// PUT (Post car non géré par le formulaire)

app.post("/modify/submit", (req, res) => {
  let oldName = req.body.choix;
  let newName = req.body.aNewName;
  let newDescription = req.body.aNewDescription;
  let newNameSecured = creerNomFichierSecurise(newName);
  let oldNameSecured = creerNomFichierSecurise(oldName);

  listeArticles.forEach((article) => {
    // Changement de nom dans le tableau

    if (req.body.choix === article) {
      const index = listeArticles.indexOf(article);

      listeArticles[index] = newName;

      // Supprimer l'ancien fichier
      unlink(
        path.join(__dirname, "views", "Articles", oldNameSecured + ".ejs"),
        (err) => {
          if (err) throw err;
        }
      );
      // Créer le nouveau fichier

      writeFile(
        path.join(__dirname, "views", "Articles", newNameSecured + ".ejs"),
        templateArticle(newName, newDescription),
        (err) => {
          if (err) {
            console.log("Erreur lors de la création du fichier : " + err);
          }
        }
      );
    }
  });

  res.render("index.ejs", { listeArticles: listeArticles });
});

// DELETE (Post car non géré par le formulaire)

app.post("/delete/submit", (req, res) => {
  let oldName = req.body.choix;
  let oldNameSecured = creerNomFichierSecurise(oldName);
  listeArticles.forEach((article) => {
    // Supprimer l'ancien fichier
    unlink(
      path.join(__dirname, "views", "Articles", oldNameSecured + ".ejs"),
      (err) => {
        if (err) throw err;
      }
    );
    // Enlever le nom dans la tableau

    if (req.body.choix === article) {
      const index = listeArticles.indexOf(article);
      listeArticles.splice(index, 1);

      res.render("index.ejs", { listeArticles: listeArticles });
    }
  });
});

// LISTEN

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
