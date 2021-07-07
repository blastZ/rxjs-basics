import { interval } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
};

interval(1000).subscribe(observer);
