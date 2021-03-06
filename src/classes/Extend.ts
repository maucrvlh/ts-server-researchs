class Person {
    constructor(public name: string) {}
}

interface Loggable {
    log(): void;
}

class ConsoleLogger implements Loggable {
    log() {

    }
}


function extend<T, U>(first: T, second: U): T & U {
    let result = <T & U>{};

    for (let id in first) {
        (<any>result)[id] = (<any>first)[id];
    }

    for (let id in second) {
        if (!result.hasOwnProperty(id)) {
            (<any>result)[id] = (<any>second)[id];
        }
    }

    return result;
}



export default class {
    static test() {
        var kim = extend(new Person("Kim"), new ConsoleLogger());
        var n = kim.name;
        kim.log();
    }
}