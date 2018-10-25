import React, { Component } from 'react';
import '../App.css';

class Signup1 extends Component {
  render() {
    return (
      <div>
     		<form action="/action_page.php">
			    <label for="fname">First Name</label>
			    <input type="text" id="fname" name="firstname" placeholder="Your name.." /><br/>

			    <label for="lname">Last Name</label>
			    <input type="text" id="lname" name="lastname" placeholder="Your last name.." /><br/>

			    <label for="email">Email</label>
			    <input type="email" id="email" name="email" placeholder="Your last email.." /><br/>

		    </form>
       </div>
    );
  }
}

export default Signup1;