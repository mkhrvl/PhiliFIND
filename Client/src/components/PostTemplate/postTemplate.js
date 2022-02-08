import React from 'react';
import {Card, CardImg, Button, Placeholder, PlaceholderButton} from 'react-bootstrap';
import './postTemplate.css'
import {Container} from '@mui/material'
function postTemplate(props) {
    return (
        <div>
            <div className="card-container">
                <Container>
                        <Card style={{ width: '100%', backgroundColor: '#d4f1f4', height: 'auto', borderRadius: '5px' }}>
                            <Card.Body>
                                <Card.Title style={{ textAlign: 'center', fontSize: 18 }}>{props.title}</Card.Title>
                                <Card.Text style={{textAlign: "center", fontSize: 15}}>
                                    {props.content}
                                </Card.Text>
                                <div className="buttonWrapper">
                                    <div className="view-Wrapper">
                                        <Button variant="primary" id="view-button">View Post</Button>
                                    </div>
                                    
                                    <div className="alert-Wrapper">
                                        <Button variant="primary" id="alert-button" >Alert Owner</Button>
                                    </div>
                                </div>
                            </Card.Body>
                        </Card>
                </Container>

                <Card style={{ width: '18rem'}}>
                    <Card.Body>
                        <Placeholder as={Card.Title} animation="glow" >
                            <Placeholder xs={6} />
                        </Placeholder>
                        <Placeholder as={Card.Text} animation="glow">
                            <Placeholder xs={7} /> <Placeholder xs={4} /> <Placeholder xs={4} />{' '}
                            <Placeholder xs={6} /> <Placeholder xs={8} />
                        </Placeholder>
                        <Placeholder.Button variant="primary" xs={6} />
                    </Card.Body>
                </Card>
            </div>


        </div>
    );
}

export default postTemplate;
