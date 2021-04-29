import React from 'react';
import Table from 'react-bootstrap/Table';

function SportMedalsOverviewTable(sport, name) {
  return (
    <div className="table-medal-first">
      <p>{name}</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th className="gold">Golden</th>
            <th className="silver">Silver</th>
            <th className="bronze">Bronze</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sport.Medals.n_RankTotal}</td>
            <td>{sport.Medals.n_Gold}</td>
            <td>{sport.Medals.n_Silver}</td>
            <td>{sport.Medals.n_Bronze}</td>
            <td>{sport.Medals.n_Total}</td>
          </tr>
        </tbody>
      </Table>
    </div>
  )
}

function SportEventMedalsTable(eventToMedalsData, name) {
  let sportEventNames = Object.keys(eventToMedalsData)

  if (sportEventNames.length === 0) {
    return null
  }

  sportEventNames.sort((a, b) => {
    a = parseInt(a) || Number.MAX_SAFE_INTEGER
    b = parseInt(b) || Number.MAX_SAFE_INTEGER
    return a - b
  })

  return (
    <div className="table-medal-gender">
      <p>{name}</p>
      <Table striped bordered hover >
        <thead>
          <tr>
            <th>Event</th>
            <th className="gold">Golden</th>
            <th className="silver">Silver</th>
            <th className="bronze">Bronze</th>
          </tr>
        </thead>

        <tbody>
          {sportEventNames.map((sportEventName) => (
            <tr>
              <td>{sportEventName}</td>
              <td>{eventToMedalsData[sportEventName]["Gold"]}</td>
              <td>{eventToMedalsData[sportEventName]["Silver"]}</td>
              <td>{eventToMedalsData[sportEventName]["Bronze"]}</td>
            </tr>
          ))}
        </tbody>
      </Table >
    </div>
  )
}

function getGenderDictionaries(sport) {
  // Generating two dictionaries based on the gender of the winners:
  // Event name -> { Gold: "<winner name>", Silver: "<winner name>", Bronze: "<winner name>"}
  let eventToMedalsMen = {}
  let eventToMedalsWomen = {}

  for (let medalType of ["Gold", "Silver", "Bronze"]) {
    for (let { Event, Gender, Participant } of sport[`${medalType}MedalList`]) {
      let eventToMedalsDict = (Gender.c_Name === "Men") ? eventToMedalsMen : eventToMedalsWomen

      let eventMedalWinners = eventToMedalsDict[Event.c_Name]
      if (!eventMedalWinners) {
        eventMedalWinners = {}
        eventToMedalsDict[Event.c_Name] = eventMedalWinners
      }

      eventMedalWinners[medalType] = Participant.c_Participant
    }
  }

  return [eventToMedalsMen, eventToMedalsWomen]
}


export default function TableInfo({ sport }) {
  let [eventToMedalsMen, eventToMedalsWomen] = getGenderDictionaries(sport)

  return (
    <>
      <h3>{sport.Sport.c_Name}</h3>
      {SportMedalsOverviewTable(sport, "Medal table")}

      <div className="gender-blocks">
        {SportEventMedalsTable(eventToMedalsMen, "Men's events")}
        {SportEventMedalsTable(eventToMedalsWomen, "Women's events")}
      </div>
    </>
  )
}
