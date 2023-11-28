import { Subject } from "rxjs";

const subject = new Subject();

subject.next("b");

subject.subscribe((x) => console.log(x));

subject.next("c");
subject.next("d");

// Salida: c d
