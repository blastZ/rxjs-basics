console.clear();

import { Observable } from "rxjs";

const observer = {
  next: (value) => console.log("next", value),
  error: (error) => console.log("error", error),
  complete: () => console.log("complete!"),
};

const observable = new Observable((subscriber) => {
  subscriber.next("Hellow");

  subscriber.next("World");

  subscriber.complete();

  subscriber.next("After");
});

observable.subscribe(observer);
