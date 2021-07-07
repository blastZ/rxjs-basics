import { range } from "rxjs";

range(1, 6).subscribe({
  next: (val) => console.log("next", val),
  complete: () => console.log("complete"),
});
