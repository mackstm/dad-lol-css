// Importamos la clase champion desde el archivo champion.js
import Champion from './Champion.js';

var champions = [];
const startChampions = async () => {

        await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                for (const key in result.data) {
                    let champion = new Champion(result.data[key]);
                    pushChampion(champion);
                }
            });
            
    
    await showChampions();
};

startChampions();

function pushChampion(champion) {
    champions.push(champion);
 }
 
const showChampions = async () => {
    const champCompendium = document.getElementById("champCompendium");
    for (let i = 0; i < champions.length; i++) {
        champCompendium.innerHTML += `
            <div class="card">
                <img class="champSplash" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[i].id}_0.jpg"/>
                <div class="champName">${champions[i].name}</div>
                <div class="champTitle">${champions[i].title}</div>
            </div>
        `;
    }
}