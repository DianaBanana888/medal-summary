import React from 'react';
import Table from 'react-bootstrap/Table';

export default function TableInfo({ sport }) {
  return (
    <>
      <h3>{sport.Sport.c_Name}</h3>
      Medal table
      <Table className="table-medal-first" striped bordered hover>
        <thead>
          <tr>
            <th>Rank</th>
            <th>Golden</th>
            <th>Silver</th>
            <th>Bronze</th>
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

      Men's events
      <Table className="table-medal-men" striped bordered hover>
        <thead>
          <tr>
            <th>Event</th>
            <th>Golden</th>
            <th>Silver</th>
            <th>Bronze</th>
          </tr>
        </thead>

        <tbody>

          {(sport.GoldMedalList.length > 0)

            ? sport.GoldMedalList.map((goldenParticipant) =>
              (goldenParticipant.Gender.c_Short === "M")
                // ? <p>Hello</p>
                ? <tr key={goldenParticipant.n_EventPhaseID}>
                  <td className="1">{goldenParticipant.Event.c_Name}</td>
                  <td className="2">{goldenParticipant.Participant.c_Participant}</td>

                  {(sport.SilverMedalList.length > 0)

                    ? sport.SilverMedalList.map((silverParticipant) =>
                      (silverParticipant.Event.c_Name === goldenParticipant.Event.c_Name && silverParticipant.Gender.c_Short === "M")

                        ? <td className="3" key={silverParticipant.n_EventPhaseID}>{silverParticipant.Participant.c_Participant}</td>
                        : null
                    )
                    : <td className="3"></td>
                    // : null
                  }

                  {(sport.BronzeMedalList.length > 0)

                    ? sport.BronzeMedalList.map((bronzeParticipant) =>
                      (bronzeParticipant.Event.c_Name === goldenParticipant.Event.c_Name && bronzeParticipant.Gender.c_Short === "M")

                        ? <td className="4" key={bronzeParticipant.n_EventPhaseID}>{bronzeParticipant.Participant.c_Participant}</td>
                        : null
                    )
                    : <td className="4"></td>
                  }

                </tr>
                : null
            )


            : null}
          {
            (sport.SilverMedalList.length > 0)
              ? sport.SilverMedalList.map((silverParticipant) =>
                (silverParticipant.Gender.c_Short === "M")

                  ? <tr key={silverParticipant.n_EventPhaseID}>
                    <td className="1">{silverParticipant.Event.c_Name}</td>
                    <td className="2"></td>
                    <td className="3" key={silverParticipant.n_EventPhaseID}>{silverParticipant.Participant.c_Participant}</td>

                    {(sport.BronzeMedalList.length > 0)

                      ? sport.BronzeMedalList.map((bronzeParticipant) =>
                        (bronzeParticipant.Event.c_Name === silverParticipant.Event.c_Name && bronzeParticipant.Gender.c_Short === "M")

                          ? <td className="4" key={bronzeParticipant.n_EventPhaseID}>{bronzeParticipant.Participant.c_Participant}</td>
                          : null
                      )
                      : <td className="4"></td>
                    }

                  </tr>
                  : null
              )
              : null}
          {
            (sport.BronzeMedalList.length > 0)

              ? sport.BronzeMedalList.map((bronzeParticipant) =>
                (bronzeParticipant.Gender.c_Short === "M")

                  ? <tr key={bronzeParticipant.n_EventPhaseID}>
                    <td className="1">{bronzeParticipant.Event.c_Name}</td>
                    <td className="2"></td>
                    <td className="3"></td>
                    <td className="4" key={bronzeParticipant.n_EventPhaseID}>{bronzeParticipant.Participant.c_Participant}</td>
                  </tr>
                  : null
              )
              : null
          }
        </tbody>
      </Table>


      Women's events
      {(sport.GoldMedalList.some(el => el.Gender.c_Short === "W"))
        ?
        <Table className="table-medal-women" striped bordered hover>
          <thead>
            <tr>
              <th>Event</th>
              <th>Golden</th>
              <th>Silver</th>
              <th>Bronze</th>
            </tr>
          </thead>

          <tbody>

            {(sport.GoldMedalList.length > 0)

              ? sport.GoldMedalList.map((goldenParticipant) =>
                (goldenParticipant.Gender.c_Short === "W")
                  // ? <p>Hello</p>
                  ? <tr key={goldenParticipant.n_EventPhaseID}>
                    <td className="1">{goldenParticipant.Event.c_Name}</td>
                    <td className="2">{goldenParticipant.Participant.c_Participant}</td>

                    {(sport.SilverMedalList.length > 0)

                      ? sport.SilverMedalList.map((silverParticipant) =>
                        (silverParticipant.Event.c_Name === goldenParticipant.Event.c_Name && silverParticipant.Gender.c_Short === "W")

                          ? <td className="3" key={silverParticipant.n_EventPhaseID}>{silverParticipant.Participant.c_Participant}</td>
                          : null
                      )
                      : <td className="3"></td>
                      // : null
                    }

                    {(sport.BronzeMedalList.length > 0)

                      ? sport.BronzeMedalList.map((bronzeParticipant) =>
                        (bronzeParticipant.Event.c_Name === goldenParticipant.Event.c_Name && bronzeParticipant.Gender.c_Short === "W")

                          ? <td className="4" key={bronzeParticipant.n_EventPhaseID}>{bronzeParticipant.Participant.c_Participant}</td>
                          : null
                      )
                      : <td className="4"></td>
                    }

                  </tr>
                  : null
              )


              : (sport.SilverMedalList.length > 0)
                ? sport.SilverMedalList.map((silverParticipant) =>
                  (silverParticipant.Gender.c_Short === "W")

                    ? <tr key={silverParticipant.n_EventPhaseID}>
                      <td className="1">{silverParticipant.Event.c_Name}</td>
                      <td className="2"></td>
                      <td className="3" key={silverParticipant.n_EventPhaseID}>{silverParticipant.Participant.c_Participant}</td>

                      {(sport.BronzeMedalList.length > 0)

                        ? sport.BronzeMedalList.map((bronzeParticipant) =>
                          (bronzeParticipant.Event.c_Name === silverParticipant.Event.c_Name && bronzeParticipant.Gender.c_Short === "W")

                            ? <td className="4" key={bronzeParticipant.n_EventPhaseID}>{bronzeParticipant.Participant.c_Participant}</td>
                            : null
                        )
                        : <td className="4"></td>
                      }

                    </tr>
                    : null
                )
                : (sport.BronzeMedalList.length > 0)

                  ? sport.BronzeMedalList.map((bronzeParticipant) =>
                    (bronzeParticipant.Gender.c_Short === "W")

                      ? <tr key={bronzeParticipant.n_EventPhaseID}>
                        <td className="1">{bronzeParticipant.Event.c_Name}</td>
                        <td className="2"></td>
                        <td className="3"></td>
                        <td className="4" key={bronzeParticipant.n_EventPhaseID}>{bronzeParticipant.Participant.c_Participant}</td>
                      </tr>
                      : null
                  )
                  : null
            }
          </tbody>
        </Table>
        : null
      }
    </>
  )
}
