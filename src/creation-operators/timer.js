import { timer } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
};

timer(2000, 1000).subscribe(observer);
