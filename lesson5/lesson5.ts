interface UserInterface3 {
   getFullName(): string 
}
class User implements UserInterface3 {
    private firstname: string
    protected lastname: string
    readonly unchangableName: string
    static readonly maxAge = 50

    constructor(firstname: string, lastname: string) {
        this.firstname = firstname
        this.lastname = lastname
        this.unchangableName = lastname
    }

    getFullName(): string {
        return this.firstname + ' ' + this.lastname
    }
}


const user3 = new User('Monster', 'lesson');
const intro = user3.getFullName();
console.log(intro);
console.log(User.maxAge);

class Admin extends User {
    private editor: string

    setEditor(editor: string): void {
        this.editor = editor
    }

    getEditor(): string {
        return this.editor
    }
}

const admin = new Admin("Monster", "lesson")
admin.setEditor("min")
console.log(admin.getEditor());
