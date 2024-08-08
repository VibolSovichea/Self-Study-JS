# OBJECTS

Object is a collection of properties where each properties associate with **Key** and **Value**.

syntax :
```
const ObjectName = {
     property1 : value,
     property2 : value,
     property3 : value,
     ...
};
```
To Access object's property :
```
console.log(ObjectName.property); // option one

let something = ObjectName.property; // option two
```

To modify properties's value :
```
ObjectName.property = newValue;
```
An object can also have a function which called method. To create a method inside an object :
```
const ObjectName = {
     property1 : value,
     property2 : value,
     property3 : value,
     FunctionName : functon() { // can also use arrow function if prefered.
          // funciton body
     }
};
```

To add new property to an Object : 
```
ObjectName.NewProperty = Value;
```

To delete property of an Object :
```
delete ObjectName.property;
```

Example :
```
// Create an Object
const PersonOne = {
     Name : "Vichea",
     Age : 20,
     isaStudent : true,
     Speak = function(){
          return `Hello I am ${Name}`;
     }
};

// Modify Property
PersonOne.Age = 19;

// Add new property
PersonOne.Nationality = "Cambodian";

// Delete property
delete PersonOne.isaStudent;
```

***
### Object Constructor

You can also create an object using constructor just like an OOP language. Constructor is use when you need to create many objects of the same type.

syntax : 
```
// Create an Object type via Constructor Function
function TypeName(parameterOne,parameterTwo,parameterThree){
     this.propertyOne = parameterOne;
     this.propertyTwo = parameterTwo;
     this.propertyThree = parameterThree;
}

// Create objects
const objectOne = new TypeName(propertyOne, propertyTwo, propertyThree);
const objectTwo = new TypeName(propertyOne, propertyTwo, propertyThree);
const objectThree = new TypeName(propertyOne, propertyTwo, propertyThree);
```

# Exercises
### Managing a Library of Books
**Objective** : Create and manipulate a collection of book objects to simulate a simple library system. You'll practice creating objects, accessing and modifying properties, using methods, and iterating over object properties.

**Instructions** : 
- Create Book Objects
> Create a constructor function Book that initializes a book object with the following properties: title (string) , author (string) , year (number) , genre (string) , isAvailable (boolean, default value is true)
- Add Methods
> Add a method toggleAvailability to the Book prototype that changes the isAvailable property to its opposite value.

- Create a Library Object

> Create an object library with an empty array property books to store the book objects.