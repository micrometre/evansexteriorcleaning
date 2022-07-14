import Head from 'next/head'
import { Container, Row, Card, Button } from 'react-bootstrap'


export default function Why() {
  return (
    <Container className="md-container">
        <Card className="mml-card ">
          <Card.Body>
            <Card.Text>
                <br />
                Why choose us?
                <br />
                • Fully insured
                <br />
                • Honest and reliable
                <br />
                • Friendly and trustworthy
                <br />
                • Efficient
                <br />
                • Highly experienced
                <br />
            </Card.Text>
          </Card.Body>
        </Card>
    </Container>
  )
}