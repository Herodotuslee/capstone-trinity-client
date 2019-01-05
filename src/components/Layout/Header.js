import React from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleA = this.toggleA.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpenA: false
    };
  }

  toggle() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,


    });
  }
  toggleA() {
    this.setState({
      dropdownOpenA: !this.state.dropdownOpenA,


    });
  }


  render() {
    return (
      <div>
        <Nav tabs>
          <Dropdown nav isOpen={this.state.dropdownOpenA} toggle={this.toggleA}>
            <DropdownToggle nav caret>
              <i className="fas fa-project-diagram"></i> PROJECT
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/dashboard" ><i className="fas fa-tachometer-alt">
                </i> DASHBOARD</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/project/overview" ><i className="fas fa-database"></i> OVERVIEW</Link>
              </DropdownItem>

            </DropdownMenu>
          </Dropdown>

          <Dropdown nav isOpen={this.state.dropdownOpen} toggle={this.toggle}>
            <DropdownToggle nav caret>
              <i className="fas fa-yen-sign"></i> EXPENSE
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem>
                <Link to="/expenseDashboard" ><i className="fas fa-tachometer-alt">
                </i> EXPENSE DASHBOARD</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/expenseAll" ><i className="fas fa-table"></i> ALL EXPENSES</Link>
              </DropdownItem>
              <DropdownItem divider />
              <DropdownItem>
                <Link to="/expense/year"><i className="fas fa-chart-bar"></i> CHART</Link>
              </DropdownItem>
            </DropdownMenu>
          </Dropdown>

          <NavItem>
            <NavLink href="/myCalendar" ><i className="far fa-calendar-alt">
              </i> CALANDER</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/info" ><i className="far fa-calendar-alt"></i> INFO</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/project/add" > <i className="fas fa-user-plus"> SIGN UP</i></NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/project/add" ><i className="fas fa-user"></i> LOGIN</NavLink>
          </NavItem>


        </Nav>
      </div>
    );
  }
}

export default Header