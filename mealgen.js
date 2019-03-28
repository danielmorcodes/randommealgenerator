

const menu = {
    _courses : {
    appetizers: [],
    mains: [],
    desserts: [],
    },
    get appetizers(){
    return this._courses.appetizers;
    },
    get mains(){
    return this._courses.mains;
    },
    get desserts(){
    return this._courses.desserts;
    },
    set appetizers(appetizers){
      this._courses.appetizers === appetizers
    },
    set mains(mains){
      this._courses.mains === mains
    },
    set desserts(desserts){
      this._courses.desserts === desserts
    },
    get courses() {
      return {
        appetizers : this.appetizers,
        mains : this.mains,
        desserts : this.desserts
      };
    },
    addDishToCourse(courseName, dishName, dishPrice){
      const dish ={
        name : dishName,
        price : dishPrice,
      }
      return this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      const dishes = this._courses[courseName];
      const randomIndex = Math.floor(Math.random()* dishes.length)
      return dishes[randomIndex];
    },

    generateRandomMeal(){
      const appetizers = this.getRandomDishFromCourse('appetizers')
      const mains = this.getRandomDishFromCourse('mains')
      const desserts = this.getRandomDishFromCourse('desserts')
            const totalPrice = appetizers.price + mains.price + desserts.price
      
      return `Your meal is ${appetizers.name}, ${mains.name}, ${desserts.name}, ... The price is $${totalPrice}`
    }

    
};
menu.addDishToCourse('appetizers', 'Caesar Salad', 4.25);
menu.addDishToCourse('appetizers', 'wings', 4.25);
menu.addDishToCourse('appetizers', 'fries', 4.25);

menu.addDishToCourse('mains', 'steak', 10.45);
menu.addDishToCourse('mains', 'salmon', 7.02);
menu.addDishToCourse('mains', 'tofu', 5.67);

menu.addDishToCourse('desserts', 'cheese cake', 6.50);
menu.addDishToCourse('desserts', 'ice cream', 3.78);
menu.addDishToCourse('desserts', 'Coke', 1.25);



 const meal = menu.generateRandomMeal()
 
 console.log(meal);