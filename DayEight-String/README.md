# STRING METHODS

String is a **TEXT** datatype that is written inside a double quotes.

We have already discussed the string datatype but for this lesson, I want us to focus on **String Methods** 

### Length() Method
Just like array, the length method is use to identify the size of the string or the number of characters in a string.

syntax : 
```
let Name = "Kratos";
Name.length; // 6
```

### toUpperCase() and toLowerCase Methods
These methods is commonly use to modify the format of string texts. Just like its name, you can use it to turn letters to upper-case or lower-case depend on your preferences.

syntax :
```
let Name = "Kratos";
Name.toUpperCase(); // KRATOS
Name.toLowerCase(); // kratos
```

### charAt() Method
Is use to returns the character at a specified index (position) in a string.

syntax :
```
let text = "HELLO WORLD";
let char = text.charAt(0); // H
```

You can also use String at() method as the alternative. It work the same way as charAt() *but since it is a new function, it might not work with some browsers*.

syntax :
```
let text = "HELLO WORLD";
let char = text.at(0); // H  
```

### String trim() method
This method is use to "trim" or removes whitespace from both sides of a string.

syntax : 
```
let text1 = "      Hello World!      ";
let text2 = text1.trim(); // "Hello World";
```

### String replace() method
This method is use to replaces a specified value with another value in a string.

syntax :
```
let text = "Please visit Phnom Penh!";
let newText = text.replace("Phnom Penh", "Siem Reap"); // "Please visit Siem Reap!"
```

### String search() method

Search is a method use to identify the index of a character or the index of the beginning letter of a word.

syntax :
```
let text = "Please locate where 'locate' occurs!";
text.search("locate"); // 7
```

### String include() method
Use to returns true if a string contains a specified value.

syntax : 
```
let text = "Hello world, welcome to the universe.";
text.includes("world"); //true
```