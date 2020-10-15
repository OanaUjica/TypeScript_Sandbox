class Customer {
    name: string;

    constructor(name: string) {
        this.name = name;
    }

    announce() {
        return 'Hello, my name is ' + this.name;
    }
}

//create a new instance
let firstCustomer = new Customer('Oana');
let newMessage: string = firstCustomer.announce();

//change the text on the page
//take the reference
let webHeading = document.querySelector('h1');
webHeading!.textContent = newMessage;
