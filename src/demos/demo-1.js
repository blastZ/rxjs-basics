import { fromEvent } from "rxjs";
import { map } from "rxjs/operators";

fromEvent(document, "scroll")
  .pipe(
    map((o) => {
      const { clientHeight, scrollHeight, scrollTop } =
        o.target.documentElement;

      if (scrollHeight === clientHeight) {
        return 100;
      }

      const percentage = Math.round(
        (scrollTop / (scrollHeight - clientHeight)) * 100
      );

      return percentage;
    })
  )
  .subscribe((o) => {
    document.getElementById("progress").children[0].textContent = `${o}%`;
  });
