const Pronote = require('pronote-api-maintained');

(async () => {
  try {
    // Remplacez les paramètres par les valeurs de votre établissement
    const urlPronote = "https://0383253e.index-education.net/pronote/eleve.html?identifiant=rcM9th37tHBbtPyU";
    const username = "t.bernard514";
    const password = "ThomasB38*";
    const cas = "eleve"; // ou 'parent', 'enseignant' selon votre cas

    // Connexion à Pronote
    const session = await Pronote.login(urlPronote, username, password, cas);
    
    // Exemple : récupération des devoirs
    const devoirs = await session.homeworks();
    console.log("Devoirs récupérés :", devoirs);
    
    // N'oubliez pas de déconnecter la session à la fin pour libérer les ressources
    await session.logout();
  } catch (error) {
    console.error("Erreur lors de la connexion ou de la récupération des données :", error);
  }
})();
