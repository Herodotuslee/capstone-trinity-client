import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      dropdownOpen: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

  render() {
    return (
      <div>
        <Nav tabs>

          <NavItem>
            <NavLink href="/dashboard" >DashBoard</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/project/add" >Add</NavLink>
          </NavItem>

        </Nav>
      </div>
    );
  }
}

export default Header