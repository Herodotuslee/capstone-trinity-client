import React from 'react';
import { Nav, NavItem, NavLink, Dropdown, DropdownItem, DropdownToggle, DropdownMenu } from 'reactstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);
    this.toggleA = this.toggleA.bind(this);
    this.toggleB = this.toggleB.bind(this);
    this.state = {
      dropdownOpen: false,
      dropdownOpenA: false,
      dropdownOpenB: false
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


  toggleB() {
    this.setState({
      dropdownOpenB: !this.state.dropdownOpenB,


    });
  }

  render() {
    return (

      <Nav tabs className="navbar-light bg-light justify-content-between">
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
              </i> DASHBOARD</Link>
            </DropdownItem>

            <DropdownItem divider />

            <DropdownItem>

              <Link to="/expense/year"><i className="fas fa-chart-bar"></i> CHART</Link>
            </DropdownItem>



            <DropdownItem divider />


            <DropdownItem>
              <Link to="/expenseAll" ><i className="fas fa-table"></i> GROCERIES</Link>
            </DropdownItem>


            <DropdownItem divider />
            <DropdownItem>
              <Link to="/expense/search"><i className="fas fa-search"></i>SEARCH</Link>
            </DropdownItem>

          </DropdownMenu>
        </Dropdown>



        <Dropdown nav isOpen={this.state.dropdownOpenB} toggle={this.toggleB}>
          <DropdownToggle nav caret>
            <i className="fas fa-calendar"></i> CALENDAR
            </DropdownToggle>
          <DropdownMenu>
            <DropdownItem>
              <Link to="/myCalendar" ><i className="fas fa-tachometer-alt">
              </i> DASHBOARD</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/schedule" ><i className="fas fa-database"></i> ADD SCHEDULE</Link>
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem>
              <Link to="/schedule/All" ><i className="fas fa-database"></i> ALL SCHEDULE</Link>
            </DropdownItem>


          </DropdownMenu>
        </Dropdown>





        <NavItem>
          <NavLink href="/info" ><i className="far fa-calendar-alt"></i> INFO</NavLink>
        </NavItem>



        <NavItem >
          <NavLink href="/signin" > <i className="fas fa-user-plus">ACCOUNT</i></NavLink>
        </NavItem>
        {/* <NavItem>
            <NavLink href="/login" ><i className="fas fa-user"></i> LOGIN</NavLink>
          </NavItem> */}


      </Nav>
    );
  }
}

export default Header