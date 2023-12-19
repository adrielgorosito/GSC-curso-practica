import { BehaviorSubject } from "rxjs";

const subject = new BehaviorSubject("a");

subject.next("b");

subject.subscribe((x) => console.log(x));

subject.next("c");
subject.next("d");

// Salida: b c d
