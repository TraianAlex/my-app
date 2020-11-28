import { from } from "rxjs";
import { filter, map } from "rxjs/operators";

// const subject = new Subject();
// export const dataService = {
//   setData: (data) => subject.next({ value: data }),
//   clearData: () => subject.next(),
//   getData: () => subject.asObservable(),
// };

const num$ = from([-2, -1, 0, 1, 2]);

// export const observer = {
//   next: (value) => dataService.setData(value),
//   error: (err) => console.log(`ERROR: ${err}`),
//   complete: () => console.log("All done"),
// };

export const modelObs = num$
  .pipe(
    filter((num) => num > 0),
    map((positiveNum) => positiveNum * 3)
  );
  // .subscribe(
  //   (value) => dataService.setData(value),
  //   (err) => console.log(`ERROR: ${err}`),
  //   () => console.log("All done.")
  // );
