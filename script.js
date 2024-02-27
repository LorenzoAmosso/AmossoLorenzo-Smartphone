//es1
let smartphone = {
    'marca' : 'Apple',
    'modello' : 'Iphone 12',
    'price' : '700',
    'rubrica' : [
    {name : 'Matteo', number : 12345666},
    {name : 'Lorenzo', number : 22345666},
    {name : 'Michele', number : 33345666},
    ],
    'chiama' : function(nome){
        this.rubrica.forEach((contatto) => {
        if(contatto.name.toLowerCase() == nome.toLowerCase()){
         
        console.log(`Sto chiamando ${contatto.name} al 
        numero ${contatto.number}`);
            } 
        })
        
}, 

'addContact' : function(nome, numero){
    this.rubrica.push({name: nome, number: numero})
},

'removeContat' : function(nome){
    let filtered = this.rubrica.filter((contact) => 
    contact.name != nome)
    this.rubrica = filtered;

}

}

// console.log(smartphone.price);
// smartphone.addContact('Mattia', 12457809)
// smartphone.addContact('Paolo', 22256809)
// console.log(smartphone.rubrica);  
// console.log(smartphone.marca);
 // smartphone.chiama('lorenzo')   
smartphone.removeContat('Michele')
console.log(smartphone.rubrica);
// smartphone.marca = 'Sansumg' 
// smartphone.color = 'black'
// console.log(smartphone);

// smartphone.addContact('Matteo');
// smartphone.addContact('Sofia');
// console.log(smartphone.rubrica);

//es2
let garage = {
    'cars' : [
        {marca: 'Fiat', modello : 'Panda'},
        {marca: 'Fiat', modello : '500'},
        {marca: 'Fiat', modello : 'Punto'},
        {marca: 'BMW', modello : 'M2'},
        {marca: 'BMW', modello : 'M4'},
    ],
'searchModel' : function(searchedBrand){
    let filtered = this.cars.filter((car) => car.marca.
    toLowerCase() == searchedBrand.toLowerCase())
    //console.log(filtered);
    let models = filtered.map((car) => car.modello)
    console.log(models);
   }
}

garage.searchModel('fiat')
