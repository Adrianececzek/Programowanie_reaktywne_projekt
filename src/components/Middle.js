import React from "react"
import "./Middle.css"
import { Container, Row, Col } from "react-bootstrap"
import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';

const Middle = () => {
    return (
      <div className="srodek">
        
        <CardGroup>
      <Card>
      <img className="logo" src="https://fwcdn.pl/fpo/60/96/236096/7146343.3.jpg" />
        <Card.Body>
          <Card.Title>Prison Break</Card.Title>
          <Card.Text>
          Młodszy brat skazanego na śmierć więźnia z Fox River postanawia go uratować. Pozoruje napad na bank, by trafić do tego samego zakładu karnego.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="rating">
          <small className="text-muted">Rating: 7,6</small>
        </Card.Footer>
      </Card>
      <Card>
      <img className="logo" src="https://fwcdn.pl/fpo/73/09/37309/7515192.3.jpg" />
        <Card.Body>
          <Card.Title>PIRACI Z KARAIBÓW: KLĄTWA CZARNEJ PERŁY</Card.Title>
          <Card.Text>
          Kowal Will Turner sprzymierza się z kapitanem Jackiem Sparrowem, by odzyskać swoją miłość - porwaną córkę gubernatora..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="rating">
          <small className="text-muted">Rating: 7,7</small>
        </Card.Footer>
      </Card>
      <Card>
      <img className="logo" src="https://fwcdn.pl/fpo/60/96/236096/7146343.3.jpg" />
        <Card.Body>
          <Card.Title>Prison Break</Card.Title>
          <Card.Text>
          Młodszy brat skazanego na śmierć więźnia z Fox River postanawia go uratować. Pozoruje napad na bank, by trafić do tego samego zakładu karnego.
          </Card.Text>
        </Card.Body>
        <Card.Footer className="rating">
          <small className="text-muted">Rating: 7,6</small>
        </Card.Footer>
      </Card>
      <Card>
      <img className="logo" src="https://fwcdn.pl/fpo/73/09/37309/7515192.3.jpg" />
        <Card.Body>
          <Card.Title>PIRACI Z KARAIBÓW: KLĄTWA CZARNEJ PERŁY</Card.Title>
          <Card.Text>
          Kowal Will Turner sprzymierza się z kapitanem Jackiem Sparrowem, by odzyskać swoją miłość - porwaną córkę gubernatora..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="rating">
          <small className="text-muted">Rating: 7,7</small>
        </Card.Footer>
      </Card>
      <Card>
      <img className="logo" src="https://fwcdn.pl/fpo/73/09/37309/7515192.3.jpg" />
        <Card.Body>
          <Card.Title>PIRACI Z KARAIBÓW: KLĄTWA CZARNEJ PERŁY</Card.Title>
          <Card.Text>
          Kowal Will Turner sprzymierza się z kapitanem Jackiem Sparrowem, by odzyskać swoją miłość - porwaną córkę gubernatora..{' '}
          </Card.Text>
        </Card.Body>
        <Card.Footer className="rating">
          <small className="text-muted">Rating: 7,7</small>
        </Card.Footer>
      </Card>
    </CardGroup>
    </div>
    )
}

export default Middle