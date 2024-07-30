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