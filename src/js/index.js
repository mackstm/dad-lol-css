// Importamos la clase champion desde el archivo champion.js
import Champion from './Champion.js';

var champions = [];
var skins = [];
const startChampions = async () => {

        await fetch("https://ddragon.leagueoflegends.com/cdn/14.19.1/data/es_ES/champion.json")
            .then(function(result) {
                return result.json();
            }).then(function(result) {
                for (const key in result.data) {
                    let champion = new Champion(result.data[key]);
                    getSkins(champion);
                    pushChampion(champion);
                }

            });
            
    
    await showChampions();
};

startChampions();

const getSkins = async (champion) => {
    
    await fetch("http://ddragon.leagueoflegends.com/cdn/14.9.1/data/en_US/champion/" + champion.getId() + ".json")
        .then(function(result) {
            return result.json();
        }).then(function(resultJson) {
            for (const key in resultJson.data[champion.getId()]) {
                console.log(resultJson.data[champion.getId()].skins);
            }
        });
    return skins;
}

function pushChampion(champion) {
    champions.push(champion);
 }
 
const showChampions = async () => {
    const champCompendium = document.getElementById("champCompendium");
    for (let i = 0; i < champions.length; i++) {
        champCompendium.innerHTML += `
            <div class="card">
                <img class="champSplash" src=""/>
                <p class="champName">${champions[i].name}</p>
                <p class="champTitle">${champions[i].title}</p>
            </div>
        `;
    }
}

// const showPokedex = async () => {
//     const pokedex = document.getElementById("champdex");
//     for(var i = 0; i < champions.length; i++) {
//         var aux =  0;
//         while (aux != champions[i].pkm_type.length) {
//             if (aux == 0)
//                 var tipo1 = champions[i].pkm_type[aux].type.name;                       
//             if (aux == 1)   
//                 var tipo2 = champions[i].pkm_type[aux].type.name;
//             else 
//                 tipo2 = "";          
//             aux++;
//         }
//         let hp = champions[i].stats[0].base_stat;
//         let atk = champions[i].stats[1].base_stat;
//         let def = champions[i].stats[2].base_stat;
//         let spatk = champions[i].stats[3].base_stat;
//         let spdef = champions[i].stats[4].base_stat;
//         let spe = champions[i].stats[5].base_stat;

//         pokedex.innerHTML +=    `<div class="card">
//                                     <img class="back" src="${champions[i].pkm_back}">
//                                     <img class="front" src="${champions[i].pkm_front}"><br>
//                                     ${champions[i].id}. ${champions[i].name}<br>
//                                     <div class="types">
//                                         ${tipo1} ${tipo2}
//                                     </div>
//                                     <div class="stats">
//                                         <div class="hp">HP ${hp}</div>
//                                         <div class="atk">Atk ${atk}</div>
//                                         <div class="def">Def ${def}</div>
//                                         <div class="spatk">SpAtk ${spatk}</div>
//                                         <div class="spdef">SpDef ${spdef}</div>
//                                         <div class="spe">Spe ${spe}</div>
//                                     </div>
//                                 </div>`
//     }
// }
