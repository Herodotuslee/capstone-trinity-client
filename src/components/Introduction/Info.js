import React, { Component } from 'react'
import { Container } from 'reactstrap';
import {
  Card, CardImg, CardBody, CardTitle
} from 'reactstrap';
class Info extends Component {
  render() {

    const style = {
      marginTop: '3em'

    }
    return (
      <Container style={style}>

        <Card>

          <CardBody>
            <CardTitle> Technologies</CardTitle>


            <CardImg top width="100%" src="https://i.imgur.com/VObJgcJ.png" alt="Card image cap" />

            <hr />


            <img src="https://images-na.ssl-images-amazon.com/images/I/51%2BMNH9ThxL._SX328_BO1,204,203,200_.jpg" className="rounded mx-auto d-block" alt="..."></img>

            <hr />

            <img width="100%" src=" https://upload.wikimedia.org/wikipedia/commons/3/33/7_habits_decision-making_matrix.png" className="rounded mx-auto d-block" alt="..."></img>


          </CardBody>


        </Card>





      </Container>
    )
  }
}

export default Info