
  function message(name, age) {
     console.log("Hello, " + name + "! You are " + age + " years old.");
     function greet() {
        console.log("Welcome to the program, " + name + "!");
     }
     greet();
 }
 message("Omer", 14);