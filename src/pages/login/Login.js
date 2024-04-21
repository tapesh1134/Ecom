import { Container } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Collapse from 'react-bootstrap/Collapse';

export const Login = () => {
    const [open, setOpen] = useState(true);
    const [open1, setOpen1] = useState(true);
    const [nu, setNu] = useState(false);

    return (
        <div className="flex flex-col items-center gap-4">
            {!nu ?
                <>
                    <div style={{
                        maxWidth: "650px",
                        margin: "auto",
                        paddingTop: "100px"
                    }}>
                        <Collapse in={open1} dimension="width">
                            <div id="example-collapse-text">
                                <Card body style={{
                                    width: '600px',
                                    backgroundImage: `url("https://media.istockphoto.com/id/1212342896/vector/abstract-hexagon-wallpaper-white-background-3d-vector-illustration.jpg?s=612x612&w=0&k=20&c=ynRzXUZ4_Ga3Y7joKBABdXUQI4xBvrdHJnYueJWEiw8=")`,
                                    color: "black",
                                    borderRadius: "40px"
                                }}>
                                    <Container>
                                        <h2>For Register</h2>
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
                                        <button type="submit" style={{
                                            border: 'none',
                                            background: "inherit",
                                            padding: "14px",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            color: 'blue'
                                        }} onClick={() => setNu(!nu)}>Already have an account</button>
                                        <br></br>
                                        <Button type="submit">Submit</Button>
                                    </Container>
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>
                :
                <>
                    <div style={{ maxWidth: "650px", margin: "auto", paddingTop: "100px" }}>
                        <Collapse in={open} dimension="width">
                            <div id="example-collapse-text">
                                <Card body style={{
                                    width: '600px',
                                    backgroundImage: `url("https://media.istockphoto.com/id/1212342896/vector/abstract-hexagon-wallpaper-white-background-3d-vector-illustration.jpg?s=612x612&w=0&k=20&c=ynRzXUZ4_Ga3Y7joKBABdXUQI4xBvrdHJnYueJWEiw8=")`,
                                    color: "black",
                                    borderRadius: "40px"
                                }}>
                                    <Container>
                                        <h2>For Login</h2>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="Text">Email or Phone number</Form.Label>
                                            <Form.Control id="Text" placeholder="Email or Phone number" />
                                        </Form.Group>
                                        <Form.Group className="mb-3">
                                            <Form.Label htmlFor="Text">Passwaord</Form.Label>
                                            <Form.Control id="Text" placeholder="Password" />
                                        </Form.Group>

                                        <button style={{
                                            border: 'none',
                                            background: "inherit",
                                            padding: "14px",
                                            fontSize: "16px",
                                            cursor: "pointer",
                                            display: "inline-block",
                                            color: 'blue'
                                        }} onClick={() => setNu(!nu)}>Don't have any account</button>
                                        <br></br>
                                        <Button type="submit">Submit</Button>
                                    </Container>
                                </Card>
                            </div>
                        </Collapse>
                    </div>
                </>}
        </div >
    )
}




