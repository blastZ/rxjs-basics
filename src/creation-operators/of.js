import { of } from "rxjs";

of(1, 2, 3, 4, 5, 6).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
