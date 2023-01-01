interface UserInterface {
    name: string;
    age?: number;
    getMessage(): string;
}

const user: UserInterface = {
    name: 'Monster',
    age: 3,
    getMessage() {
        return "hello" + name;
    }
}

const user2: UserInterface = {
    name: 'Jack',
    getMessage() {
        return "hello" + name;
    }
}