// Importamos la clase champion desde el archivo champion.js
import Champion from './Champion.js';
import cardBack from '../assets/images/card_back.jpg';

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
        
        if(champions.length > 0) {
            await showChampions();
        }   else {
            console.error("No se han cargado los campeones.");
        }
    
    
};

startChampions();

function pushChampion(champion) {
    champions.push(champion);
 }
 
const showChampions = async () => {
    const champCompendium = document.getElementById("champCompendium");
    for (let i = 0; i < champions.length; i++) {
        
        champCompendium.innerHTML += `
            <div class="card" id="card">
                <div class="cardInner">
                    <div class="front" id="front">
                        <img class="champSplash" src="https://ddragon.leagueoflegends.com/cdn/img/champion/loading/${champions[i].id}_0.jpg"/>
                        <div class="champInfo">
                            <div class="champName">${champions[i].name}</div>
                            <div class="champTitle">${champions[i].title}</div>
                        </div>
                    </div>
                    <div class="back">
                        <img class="cardBack" src="${cardBack}"/>
                    </div>
                </div>
            </div>
        `;
    }
}

