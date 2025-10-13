console.log("Hello World");
console.log("Hello World");
        
        var msg = "Welcome to JavaScript";
        console.log(msg);
        var msg = "Welcome to JS";
        let msg1 = "Hello JS";
        console.log(msg1);

        const greeting = {
            text: "Hello",
            sender: "Admin"

        };
        console.log(greeting);

        function Hello() {
            console.log("Hello Everyone");
        }
        Hello();

        helloArrowFunction = () => {
            console.log("Hello Arrow Function");
        }
        helloArrowFunction();

        function Person(name, age) {
            this.name = name;
            this.age = age;
        }
        let person1 = new Person("John", 25);
        console.log(person1.name);
        console.log(person1.age);
        console.log(typeof person1);

        