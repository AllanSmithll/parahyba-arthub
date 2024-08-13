import Item from "../models/item";
import Store from "../models/Store";

export default class StoreRepository {
  private data: Store[] = []




  constructor() {
    // SE LIGA NESSE CÒDEGO, LUGAR ONDE A MÃE CHORA E O FILHO NÃO VÊ.
    const item1 = new Item("Item 1", "https://cdn-icons-png.flaticon.com/512/2458/2458458.png", 10.0,"OSIDJS");
    const item2 = new Item("Item 2", "https://cdn-icons-png.flaticon.com/512/2458/2458458.png", 20.0,"BKZZAS");
    const item3 = new Item("Item 3", "https://cdn-icons-png.flaticon.com/512/2458/2458458.png", 15.0,"DJSCFS");
    const item4 = new Item("Item 4", "https://cdn-icons-png.flaticon.com/512/2458/2458458.png", 25.0,"DLSDLD");
    const item5 = new Item("Item 5", "https://cdn-icons-png.flaticon.com/512/2458/2458458.png", 30.0,"OASDLO");
    const item6 = new Item("Item 6", "https://cdn-icons-png.flaticon.com/512/2458/2458458.png", 30.0,"VASCAO");

    const store1 = new Store(
      "Loja 1",
      "12345678901234",
      "Endereço 1",
      "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      "Uma loja incrível com produtos variados.",
      [item1, item2],
      "A3234BOFKD216"
    );
    
    const store2 = new Store(
      "Loja 2",
      "23456789012345",
      "Endereço 2",
      "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      "Especialista em eletrônicos e gadgets.",
      [item6],
      "A3234BOFKD216"
    );
    
    const store3 = new Store(
      "Loja 3",
      "34567890123456",
      "Endereço 3",
      "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      "Moda e estilo com preços acessíveis.",
      [item3],
      "A3234BOFKD216"
    );
    
    const store4 = new Store(
      "Loja 4",
      "45678901234567",
      "Endereço 4",
      "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      "Tudo para a sua casa e decoração.",
      [item2, item3, item5],
      "BZ3234BOFKD216"
    );
    
    const store5 = new Store(
      "Loja 5",
      "56789012345678",
      "Endereço 5",
      "https://cdn-icons-png.flaticon.com/512/869/869636.png",
      "Produtos naturais e orgânicos.",
      [item2, item4],
      "45234BOFKD216"
    );

    this.data.push(store1);
    this.data.push(store2);
    this.data.push(store3);
    this.data.push(store4);
    this.data.push(store5);
  
  }

  // Método para adicionar uma loja
  add(store: Store): void {
    this.data.push(store);
  }

  // Método para listar todas as lojas
  list(): Store[] {
    return this.data;
  }

  // Método para obter uma loja pelo índice
  get(id: string): Store | null {
    return this.data.find(store => store.id === id) || null;
  }


}