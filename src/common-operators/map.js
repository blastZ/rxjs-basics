import { map, mapTo } from "rxjs/operators";
import { of, fromEvent } from "rxjs";

of(1, 2, 3, 4, 5)
  .pipe(map((value) => value * 10))
  .subscribe(console.log);

fromEvent(document, "keyup")
  .pipe(map((o) => o.code))
  .subscribe(console.log);

fromEvent(document, "keyup").pipe(mapTo(1)).subscribe(console.log);
