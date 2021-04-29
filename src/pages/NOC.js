import React from 'react'
import info from '../jsonInfo';
import Table from 'react-bootstrap/Table';

export default function NOC() {
  const sport = info.NOCMedals
  return (
    <div className="table-medal-first">
      <p>NOC Table</p>
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>NOC Team</th>
            <th className="gold">Golden</th>
            <th className="silver">Silver</th>
            <th className="bronze">Bronze</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{sport.NOC.c_Name}</td>
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
