import { interval } from "rxjs";
import { scan } from "rxjs/operators";

interval(1000)
  .pipe(
    scan((result, current) => {
      return result + current;
    }, 0)
  )
  .subscribe(console.log);
