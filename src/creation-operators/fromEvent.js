import { fromEvent } from "rxjs";

const click$ = fromEvent(document, "click");

const sub1 = click$.subscribe((val) => console.log("next", val));

const sub2 = click$.subscribe((val) => console.log("next2", val));

setTimeout(() => {
  console.log("unsubscribing...");
  sub2.unsubscribe();
}, 3000);
