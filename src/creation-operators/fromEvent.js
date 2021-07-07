import { fromEvent } from "rxjs";

const click$ = fromEvent(document, "click");

click$.subscribe((event) => console.log(event));
