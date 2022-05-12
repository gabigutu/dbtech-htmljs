interface IPerson {
    name: string;
    age: number;
}
class Person implements IPerson {
    name: string;
    age: number;

    Person(name: string) {
        this.name = name;
    }
}
let person: IPerson = new Person();

// interface IDatabase {
//     void connect();
//     void insert();
// }
// class MySQL implements IDatabase {
//     // ...
// }
// class Postgres implements IDatabase {

// }

// IDatabase database = new Postgres();
// database.connect();
// database.inisert();