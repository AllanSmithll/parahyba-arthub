export default class Item {
  id: string = "";
  name: string = "";
  image: string = "";
  price: number = 0.0;

  constructor(name: string, image: string, price:number, id: string = "") {
    this.id = (id == "" ? this.generateId() : id);
    this.name = name;
    this.image = image;
    this.price = price;


  }
  private generateId(): string {
    return `${Math.abs(Date.now() - Math.floor(Math.random() * 6585832))}`;
  }

}
