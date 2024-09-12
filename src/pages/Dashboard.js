import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaWheelchair, FaUsers, FaHouseUser } from 'react-icons/fa';
import { MdLiveHelp } from 'react-icons/md';
import CardPreview from '../components/Card';

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col className="mb-4">
                    <CardPreview 
                        cardTitle="Barangay" 
                        cardBody="Total:" 
                        ImageIcon={FaUsers}
                       
                    />
                </Col>
                <Col className="mb-4">
                    <CardPreview 
                        cardTitle="Registered PWD" 
                        cardBody="Total:" 
                        ImageIcon={FaWheelchair} 
                    />
                </Col>
                <Col className="mb-4">
                    <CardPreview 
                        cardTitle="Facilities" 
                        cardBody="Total:" 
                        ImageIcon={FaHouseUser} 
                    />
                </Col>
                <Col className="mb-4">
                    <CardPreview 
                        cardTitle="Help"
                        cardBody="Click here for help!" 
                        ImageIcon={MdLiveHelp} 
                    />
                </Col>
            </Row>
        </Container>
    );
};

export default Dashboard;
