import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

function Login1() {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(true);
    return (
        <Form>
            <Form.Group>
                <Button
                    style={{ minHeight: '50px', backgroundColor: 'black', minWidth: '100px', margin: '20px' }}
                    onClick={() => {
                        setOpen1(!open1)
                        setOpen(!open)
                    }}
                    aria-controls="example-collapse-text"
                    aria-expanded={open1}
                >
                    Login/SignUp
                </Button>
            </Form.Group>
            <div style={{ position: 'fixed', top: '180px', left: '470px', width: '300px', borderBlockColor: '3px #282a35' }}>
                <Collapse in={open1} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{ width: '600px' }}>
                            <Container>
                                <h2>For Login</h2>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="Text">Email or Phone number</Form.Label>
                                    <Form.Control id="Text" placeholder="Email or Phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="Text">Enter Your Full Name</Form.Label>
                                    <Form.Control id="Text" placeholder="Name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="Text">Passwaord</Form.Label>
                                    <Form.Control id="Text" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="start">
                                    <Form.Check
                                        type="checkbox"
                                        id="FieldsetCheck"
                                        label="Remember me"
                                    />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Container>
                        </Card>
                    </div>
                </Collapse>
            </div>

            <div style={{ position: 'fixed', top: '180px', left: '470px', width: '300px', borderBlockColor: '3px #282a35' }}>
                <Collapse in={open} dimension="width">
                    <div id="example-collapse-text">
                        <Card body style={{ width: '600px' }}>
                            <Container>
                                <h2>For Register</h2>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="Text">Email or Phone number</Form.Label>
                                    <Form.Control id="Text" placeholder="Email or Phone number" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label htmlFor="Text">Passwaord</Form.Label>
                                    <Form.Control id="Text" placeholder="Password" />
                                </Form.Group>
                                <Form.Group className="start">
                                    <Form.Check
                                        type="checkbox"
                                        id="FieldsetCheck"
                                        label="Remember me"
                                    />
                                </Form.Group>
                                <Button type="submit">Submit</Button>
                            </Container>
                        </Card>
                    </div>
                </Collapse>
            </div>
        </Form>
    );
}

export default Login1;
