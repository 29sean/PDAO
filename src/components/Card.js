import React from 'react';
import { Card } from 'react-bootstrap';

const CardPreview = ({ cardTitle, cardBody, ImageIcon }) => {
    return (
        <Card style={{ width: '18rem', textAlign: 'center', cursor: 'pointer' }}>
            <Card.Body>
                <div style={{ fontSize: '3rem', color: '#007bff' }}>
                    <ImageIcon />
                </div>
                <Card.Title>{cardTitle}</Card.Title>
                <Card.Text>
                    {cardBody}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

export default CardPreview;
