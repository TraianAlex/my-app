// eslint-disable-next-line
import { Observable, from, fromEvent } from "rxjs";
// eslint-disable-next-line
import { ajax } from "rxjs/ajax";
import { filter, map, pluck, timeInterval } from "rxjs/operators";

import { allBooks } from "./data";

//#region Observable examples video 2, 3 Creating Observables
let bookArray = [
  { bookID: 1, title: "Goodnight Moon" },
  { bookID: 2, title: "Winnnie-the-Pooh" },
  { bookID: 2, title: "Where the Wild Thinks Are" },
];
let bookObservable$ = from(bookArray);
bookObservable$
  .subscribe
  // process values
  // process error
  // process completion
  ();

// let okButton = document.getElementById("okButton");
// let clickObservable$ = fromEvent(okButton, "click");
// clickObservable$
//   .subscribe
//   // process values
//   // process error
//   // process completion (unnecessary)
//   ();

// let httpObservable$ = ajax.getJSON("api/book");
// httpObservable$
//   .subscribe
//   // process values
//   // process error
//   // process completion
//   ();

let num$ = from([-2, -1, 0, 1, 2]);
export const observer = {
  next: (value) => console.log(value),
  error: (err) => console.log(`ERROR: ${err}`),
  complete: () => console.log("All done"),
};
//num$.subscribe(observer);
num$
  .pipe(
    filter((num) => num > 0),
    map((positiveNum) => positiveNum * 3)
  )
  .subscribe(observer);

let customObservable = Observable.create((subscriber) => {
  //   if (newValue) {
  //     subscribe.next(newValue);
  //   }
  //   if (newError) {
  //     subscriber.error(newError);
  //   }
  //   if (done) {
  //     subscriber.complete();
  //   }
});
num$.subscribe(customObservable); // ?

let clicks$ = fromEvent(document, "click");
clicks$
  .pipe(
    pluck("clientX"),
    timeInterval(),
    map(
      (clickInfo) => `${clickInfo.interval / 1000} seconds (${clickInfo.value})`
    )
  )
  .subscribe(
    (value) => console.log('from start', value),
    (err) => console.log(`ERROR: ${err}`),
    () => console.log("All done.")
  );

// let nums = [2, 4, 6, 9, 10];

// // let numsObservable$ = from(nums);

// let evenNumbers$ = Observable.create(subscriber => {
//   for (let currentNum of nums) {
//     if (currentNum % 2 === 0) {
//       subscriber.next(currentNum);
//     }
//     else {
//       subscriber.error('Value is not even.');
//     }
//   }
//   subscriber.complete();
// });

// evenNumbers$.subscribe(
//   (value) => console.log(value),
//   (err) => console.log(`ERROR: ${err}`),
//   () => console.log('All done.')
// );
//#endregion 

//#region video 4 Subscribing to Observables with Observers
let books$ = from(allBooks);

// let booksObserver = {
//   next: book => console.log(`Title: ${book.title}`),
//   error: err => console.log(`ERROR: ${err}`),
//   complete: () => console.log(`All done!`)
// };

books$.subscribe(
  book => console.log(`Title: ${book.title}`),
  err => console.log(`ERROR: ${err}`),
  () => console.log(`All done!`)
);

//#endregion
