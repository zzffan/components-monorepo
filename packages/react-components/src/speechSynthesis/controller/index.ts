import { Person } from "../models";

export class PersonStore {
    person: Person = new Person({});
}

export default new PersonStore();
