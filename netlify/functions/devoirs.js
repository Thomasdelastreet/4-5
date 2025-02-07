const fetch = require("node-fetch");

exports.handler = async () => {
  try {
    // Remplacez par votre URL d'API Pronote
    const response = await fetch("https://monapi-pronote.com/devoirs");  
    if (!response.ok) throw new Error("Erreur API");

    const devoirs = await response.json();
    
    return {
      statusCode: 200,
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(devoirs),
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Impossible de récupérer les devoirs." }),
    };
  }
};

