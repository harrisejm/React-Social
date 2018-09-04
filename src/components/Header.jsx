import React from "react";
import PropTypes from "prop-types";
// import { Button } from 'reactstrap';

function App(){

var boxes = {

  border: 'solid',
  borderColor: 'grey',
  color: 'grey',
  width: '70px',
  height: '40px',
  textAlign: 'center'
}

return (

  <div className="container">
    <table>
      <tr>
        <td style={boxes}>
          Home
        </td>
        <td style={boxes}>
          Notifications
        </td>
        <td style={boxes}>
          Messages
        </td>
      </tr>
    </table>
    
  </div>
    // <button type="button" class="btn btn-secondary">
);

}
export default App;
