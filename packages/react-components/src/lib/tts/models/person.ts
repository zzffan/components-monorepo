import {action, makeObservable, observable} from 'mobx';

export interface IPerson {
    name: string;
    sex: string;
}

export class Person implements IPerson {
    name: string = '嚣张';
    sex: string = 'male';

    update = action((d: Partial<IPerson>) => {
        Object.assign(this, d);
    });

    constructor(d: Partial<IPerson>) {
        makeObservable(this, {
            name: observable,
            sex: observable,
            changeName: action,
            resetName: action
        })

        this.update(d);
    }

    changeName = action(() => {
        this.name = '校长';
    });

    resetName = action(() => {
        this.name = '嚣张';
    })
}
