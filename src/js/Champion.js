// Exportamos por defecto la clase Pokemon
export default class Champion {
    
    constructor(data) {
        this.id = data.id;
        this.name = data.name;
        this.title = data.title;
        this.skins = [];
    }

    getId() {
        return this.id;
    }
    
    getName() {
        return this.name;
    }

    getTitle() {
        return this.title;
    }

    getSkins() {
        return this.skins;
    }

    setSkins(skins) {
        this.skins = skins;
        return this;
    }
}