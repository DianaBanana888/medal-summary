import React, { useState } from 'react';
import info from '../jsonInfo';
import Button from 'react-bootstrap/Button';
import TableInfo from '../components/TableInfo';

export default function Detailed() {
  const [eachSport, setEachSport] = useState(null);
  const sportList = info.SportList;

  const onClickSubmitHandler = (sport) => {
    setEachSport({ sport })
  }

  return (
    <>
      <div className="buttons">
        {(sportList)
          ? sportList.map((sport) => (
            <Button
              key={sport.Sport.c_Short}
              size="lg"
              variant="info"
              className="show-delailing-button"
              onClick={() => onClickSubmitHandler(sport)}
            >
              {sport.Sport.c_Name}
            </Button>
          ))
          : null}
      </div>

      {eachSport
        ? <TableInfo sport={eachSport.sport} />
        : null
      }
    </>
  )
}

