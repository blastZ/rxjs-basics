import { from } from "rxjs";

const observer = {
  next: (val) => console.log("next", val),
  error: (err) => console.log("error", err),
  complete: () => console.log("complete"),
};

from([1, 2, 3, 4, 5, 6]).subscribe(observer);

from(fetch("http://localhost:1234")).subscribe(observer);
