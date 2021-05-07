import React, { useEffect, useMemo, useState } from 'react';
import { fromEvent } from 'rxjs';
import { ajax } from 'rxjs/ajax';
import { map, pluck, timeInterval } from 'rxjs/operators';
import { Button } from 'react-bootstrap';
//import { useData } from "../common/hooks/Providers/DataProvider";
import { LocalDataProvider } from '../common/hooks/Providers/LocalDataProvider';
import { ResultModal } from './ResultModal';
import { modelObs } from './models/time-names';
import './Results.scss';

export const Results = () => {
  const [open, setOpen] = useState(false);
  const [timeLocation, setTimeLocation] = useState('');
  const [names, setNames] = useState([]);
  //const [, setData] = useData();
  const [modelData, setModelData] = useState({});

  useEffect(() => {
    const okButton = document.getElementById('okButton');
    let clicks$ = fromEvent(okButton, 'click');
    clicks$
      .pipe(
        pluck('clientX'),
        timeInterval(),
        map(
          (clickInfo) =>
            `${clickInfo.interval / 1000} seconds (${clickInfo.value})`,
        ),
      )
      .subscribe(
        (value) => {
          ajax(
            'http://www.json-generator.com/api/json/get/cacSyGygmW?indent=2',
          ).subscribe((ajaxResponse) => {
            setNames(ajaxResponse.response);
            //setData({ names: ajaxResponse.response, timeLocation: value });
          });
          setTimeLocation(value);
          setOpen(true);
        },
        (err) => console.log(`ERROR: ${err}`),
        () => console.log('All done.'),
      );

    modelObs.subscribe(
      (value) => setModelData(value),
      (err) => console.log(`ERROR: ${err}`),
      () => console.log('All done.'),
    );
  }, []);

  // dataService.getData().subscribe((message) => {
  //   setModelData(message.value);
  // });

  const getData = useMemo(() => ({ names, timeLocation, modelData }), [
    names,
    timeLocation,
    modelData,
  ]);

  return (
    <div className="d-flex flex-column results">
      <LocalDataProvider getData={getData}>
        <div className="results-content">
          RxJS:
          <Button className="text-dark" id="okButton">Fetch data</Button>
        </div>
        <ResultModal open={open} />
      </LocalDataProvider>
    </div>
  );
};

// https://www.json-generator.com
