export default class Cat{
  constructor({name, _id, description}){
    this.name = name
    this.id = _id
    this.description = description
  }

  get Template(){
    return `<li>${this.name}</li>`
  }
}
