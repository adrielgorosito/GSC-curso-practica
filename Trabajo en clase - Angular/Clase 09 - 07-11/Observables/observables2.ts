import { Subject, interval } from "rxjs";

const clock$ = interval(1000);

const sub = new Subject();

clock$.subscribe(sub);

sub.subscribe((x) => console.log("A:" + x));

clock$.subscribe(sub).unsubscribe();

setTimeout(() => {
  sub.subscribe((x) => {
    console.log("B:" + x);
  });
}, 3000);
