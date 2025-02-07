module.exports = async (req, res) => {
  try {
    // Utilisez l'URL de votre API Pronote ou une logique de test
    const response = await fetch('https://demo.index-education.net/pronote/');
    if (!response.ok) throw new Error("Erreur API");
    const devoirs = await response.json();
    res.status(200).json(devoirs);
  } catch (error) {
    console.error("Erreur dans la fonction /api/devoirs :", error);
    res.status(500).json({ error: 'Erreur lors de la récupération des devoirs.' });
  }
};
