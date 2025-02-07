const pronote = require('pronote-api');

// Exemple
const url = 'https://demo.index-education.net/pronote/';
const username = 't.bernard514';
const password = 'ThomasB38*';

async function main()
{
    const session = await pronote.login(url, username, password/*, cas*/);
    
    const timetable = await session.timetable(); // Récupérer l'emploi du temps d'aujourd'hui

    console.log(`L'élève a ${timetable.length} cours aujourd'hui`); 
    console.log(`et a pour l'instant une moyenne de ${marks.averages.student} ce trimestre.`);
    
    // etc. les fonctions utilisables sont 'timetable', 'marks', 'contents', 'evaluations', 'absences', 
    // 'homeworks', 'infos', et 'menu', sans oublier les champs 'user' et 'params' qui regorgent d'informations.
}

main().catch(err => {
    if (err.code === pronote.errors.WRONG_CREDENTIALS.code) {
        console.error('Mauvais identifiants');    
    } else {
        console.error(err);
    }
});
