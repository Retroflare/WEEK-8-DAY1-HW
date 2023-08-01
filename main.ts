// Question #1

// Create a type to represent the following instances of `CTStudent` Also declare three 3 students below as type `CTStudent` and set their values  */



interface CTStudent {
  id: string
  name: string
  age: number
  isTired: boolean
  projectsCompleted: string[];
  pet?: string
}

let student1: CTStudent = {
  id: 'GMK435&g62L00',
  name: 'John Smith',
  age: 24,
  isTired: true,
  projectsCompleted: ["HTML Portfolio", "Fakebook", "Pokemon API Project", "Weather Bug"],
  pet: 'dog'
};

let student2: CTStudent = {
  id: '6KGS%54GmlY76',
  name: 'Jenny Hawthorne',
  age: 28,
  isTired: false,
  projectsCompleted: ["HTML Portfolio"],
};

let student3: CTStudent = {
  id: '6KGS%54GmlY76',
  name: 'Neo',
  age: 57,
  isTired: true,
  projectsCompleted: ["Matrix", "Biological Interface Program"],
  pet: 'cat'
};

console.log(student1);
console.log(student2);
console.log(student3);

// 2.Write a function that will accept a an object of type `Fruit`, the object of type Fruit could also be `null`.  If their is a Fruit print the color of the fruit, otherwise print `You ate my fruit already` be sure to annoate the return type of the function  */
type Fruit = {
    color: string;
    shape: string;
  };
  
  let apple: Fruit = { color: "red", shape: "sphere" }
  let eaten: Fruit | null = null
  
  function printFruitColor(fruit: Fruit | null): void {
    if (fruit !== null) {
      console.log(fruit.color);
    } else {
      console.log("You ate my fruit already");
    }
  }
  
  printFruitColor(apple); 
  printFruitColor(eaten); 



// 3. Create a Union Type named `Ebook` for `Book` and `DigitalBook` and create one instance of the new union type */
// type Book={

type Book = {
    isbn: string;
    title: string;
    author: string;
  };
  
  type DigitalBook = {
    fileType: string;
  };
  
  type Ebook = Book | DigitalBook;

  let myEbook: Ebook = {
    isbn: "123456789",
    title: "Digital Book Title",
    author: "Tajay",
  };
  
//   Question #4

//   Create a Type to represent a `ShopItem` that will fit the following rules. You may need to create additional structures
  
  enum Category {
    Shirts = "Shirts",
    Shoes = "Shoes",
    Pants = "Pants",
    Hats = "Hats",
  }
  
  type ShopItem = {
    readonly id: number
    price: number
    description: string
    color?: string
    category: Category
    keywords: string[];
  };
  

  let item1: ShopItem = {
    id: 1,
    price: 25.99,
    description: "Cool T-Shirt",
    category: Category.Shirts,
    keywords: ["T-Shirt", "Cool", "Fashion"],
  };
  
  let item2: ShopItem = {
    id: 2,
    price: 59.99,
    description: "Stylish Shoes",
    color: "Black",
    category: Category.Shoes,
    keywords: ["Shoes", "Stylish", "Footwear"],
  };
  
  let item3: ShopItem = {
    id: 3,
    price: 39.99,
    description: "Casual Pants",
    color: "Blue",
    category: Category.Pants,
    keywords: ["Pants", "Casual", "Fashion"],
  };
  