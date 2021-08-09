import { fromEvent, of } from "rxjs";
import { filter } from "rxjs/operators";

of(1, 2, 3, 4, 5)
  .pipe(filter((o) => o > 3))
  .subscribe(console.log);

fromEvent(document, "keyup")
  .pipe(filter((o) => o.code === "Enter"))
  .subscribe(console.log);
