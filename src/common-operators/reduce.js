import { interval } from "rxjs";
import { reduce } from "rxjs/operators";

interval(1000)
  .pipe(
    reduce((result, current) => {
      console.log(current);
      return result + current;
    }, 0)
  )
  .subscribe(console.log); // no output, because reduce never done
