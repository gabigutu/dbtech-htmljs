var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.Person = function (name) {
        this.name = name;
    };
    return Person;
}());
var person = new Person();
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
