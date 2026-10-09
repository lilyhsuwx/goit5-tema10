import { Component } from "react";

class UserList extends Component {
  render() {

    const {userData} = this.props

    return (
      <>
        <ul>
          {userData.map((id, lastname, surname, email) => {
            return (
              <li key={id}>
                <h2>{lastname}</h2>
                <p>{surname}</p>
                <p>{email}</p>
              </li>
            );
          })}
        </ul>
      </>
    );
  }
}

export default UserList;
