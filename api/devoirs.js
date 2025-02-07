const fetch = require('node-fetch');

module.exports = async (req, res) => {
  try {
    // Remplacez l'URL ci-dessous par l'URL de votre API Pronote ou la logique d'extraction
    const response = await fetch('https://monapi-pronote.com/devoirs');
    if (!response.ok) throw new Error("Erreur API");
    const devoirs = await response.json();
    res.status(200).json(devoirs);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération des devoirs.' });
  }
};

