// eslint-disable-next-line
import React, { useEffect } from "react";
import { from, fromEvent } from "rxjs";
import { ajax } from "rxjs/ajax";
import { filter, map, pluck, timeInterval } from "rxjs/operators";
// eslint-disable-next-line
import { observer } from "../utils/start";

const num$ = from([-2, -1, 0, 1, 2]);

export const Results = () => {
  useEffect(() => {
    num$
      .pipe(
        filter((num) => num > 0),
        map((positiveNum) => positiveNum * 3)
      )
      .subscribe(observer);

    const result = document.getElementById("result");
    const okButton = document.getElementById("okButton");
    const ajaxResult = document.getElementById("ajaxResult");
    let clicks$ = fromEvent(okButton, "click");
    clicks$
      .pipe(
        pluck("clientX"),
        timeInterval(),
        map(
          (clickInfo) =>
            `${clickInfo.interval / 1000} seconds (${clickInfo.value})`
        )
      )
      .subscribe(
        (value) => {
          ajax(
            "http://www.json-generator.com/api/json/get/cacSyGygmW?indent=2"
          ).subscribe((ajaxResponse) => {
            console.log(ajaxResponse.response);
            for (let ajaxRespons of ajaxResponse.response) {
              ajaxResult.innerHTML += ajaxRespons.name + "<br>";
            }
          });
          console.log("from component", value);
          result.innerHTML += value + "<br>";
        },
        (err) => console.log(`ERROR: ${err}`),
        () => console.log("All done.")
      );
  }, []);

  return (
    <div>
      RxJS results:
      <button id="okButton">OK</button>
      <div id="result"></div>
      <div id="ajaxResult"></div>
    </div>
  );
};

// https://www.json-generator.com
