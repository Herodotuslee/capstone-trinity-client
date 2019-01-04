import React, { Component } from 'react'
import { Container } from 'reactstrap';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button, Row, Col
} from 'reactstrap';
class Info extends Component {
  render() {

    const style = {
      marginTop: '3em'

    }
    return (
      <Container style={style}>

        <Card>

          <CardBody> <CardTitle>Unfamiliar Technologies</CardTitle>


            <CardImg top width="100%" src="https://i.imgur.com/VObJgcJ.png" alt="Card image cap" />


          </CardBody>


        </Card>





      </Container>
    )
  }
}

export default Info