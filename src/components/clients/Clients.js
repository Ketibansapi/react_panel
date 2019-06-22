import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Clients extends Component {
  render () {
    const clients = [
    {
      id: '43312312',
      firstName: 'Deary',
      lastName: 'Herdiano',
      email: 'deary@gmail.com',
      phone: '444-444-4444',
      balance: '100.05'
    },
    {
      id: '5331125',
      firstName: 'Andrea',
      lastName: 'Leoni',
      email: 'andrea@gmail.com',
      phone: '134-442-3444',
      balance: '3000'
    }
  ];

    if(clients) {
      return (
        <div>
          <div className="row">
            <div className="col-md-6">
              <h2> {' '} <i className="fas fa-users"></i> Clients {' '} </h2>
            </div>
            <div className="col-md-6">
            </div>
          </div>

          <table className="table table-stripped">
            <thead className="thead-inverse">
            <tr>
              <th> Name </th>
              <th> Email </th>
              <th> Balance </th>
              <th />
            </tr>
            </thead>
            <tbody>
              {clients.map(client => (
                <tr key={client.id}>
                  <td> {client.firstName} {client.lastName} </td>
                  <td> {client.email} </td>
                  <td> ${parseFloat(client.balance).toFixed(2)} </td>
                  <td>
                    <Link to = {`/client/${client.id}`} className="btn btn-secondary btn-sm">
                      <i className="fas fa-arrow-circle-right"></i> Details
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else {
      return <h1> Loading.. </h1>
    }
  }
}

export default Clients;
