import { Link } from 'react-router-dom';
import React from 'react';

class DropDown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { class: 'drop-down' };
  }


  componentDidMount() {
    setTimeout(() => this.setState({ class: 'drop-down drop-down-active' }), 1);
    // ^^^ wut, wat, why must I use setTimeout to get the transition?
  }

  render() {
    let { currentUserId, signout } = this.props;
    return (
      <ul className={this.state.class} >
        <Link to={`/profile/${currentUserId}/reservations#top`}>My Profile</Link>
        <Link to={`/profile/${currentUserId}/reservations#past`}>Dining History</Link>
        <Link to={`/profile/${currentUserId}/saved-restaurants`}>Saved Restaurants</Link>
        <a onClick={signout}>Sign out</a>
      </ul>
    )
  }
}

export default DropDown;