import { of } from "rxjs";

const observable = of(1, 2, 3);
const observer = {
  next: (val: number) => console.log(val),
  error: (error: string) => console.log(error),
  complete: () => console.log("Fin"),
};

const subscription = observable.subscribe(observer);
subscription.unsubscribe();
