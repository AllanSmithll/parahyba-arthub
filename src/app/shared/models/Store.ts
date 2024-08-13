import Item from "./item";

export default class Store {
    id: string = "";
    name: string = "";
    cnpj: string = "";
    address: string = "";
    image: string = "";

    description: string = "";

    items: Item[] = [];
    followers: number = 0;
    
    shopSince: Date = new Date();

    constructor(name: string, cnpj: string, address: string, image: string, description: string, items: Item[] = [],id:string="") {
        this.id = (id==""?this.generateId(): id);
        this.name = name;
        this.cnpj = cnpj;
        this.address = address;
        this.image = image;
        this.description = description;
        this.items = items;
    }

    private generateId(): string {
        return `${Math.abs(Date.now() - Math.floor(Math.random() * 10000))}`;
    }
}
