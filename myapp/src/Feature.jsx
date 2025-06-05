import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { FaLaptopCode, FaPaperPlane, FaUsers, FaTasks } from 'react-icons/fa';

export default function FeatureCards() {
  const features = [
    {
      title: 'User-Friendly Interface',
      Number: '01',
      icon: <FaLaptopCode size={30} className="text-danger mb-3" />,
      desc: 'Our platform offers seamless task management to boost your efficiency.',
    },
    {
      title: 'Collaborate & Share Effortlessly',
      Number: '02',
      icon: <FaPaperPlane size={30} className="text-danger mb-3" />,
      desc: 'Invite team members to work together and achieve your goals faster.',
    },
    {
      title: 'Effortless Collaboration',
      Number: '03',
      icon: <FaUsers size={30} className="text-danger mb-3" />,
      desc: 'Invite team members to work together and achieve your goals faster.',
    },
    {
      title: 'Seamless Access',
      Number: '04',
      icon: <FaTasks size={30} className="text-danger mb-3" />,
      desc: 'Stay connected and manage your tasks on the go with ease.',
    },
  ];

  return (
    <Container className="my-5 text-center">
      <Row className="g-4 ">
        {features.map((item, idx) => (
          <Col key={idx} md={6} lg={3}>
            <Card className="h-100 shadow-sm ">
              <Card.Body>
                <div className='d-flex justify-content-between'>
                {item.icon}
                <div className='fs-2  fw-bold' style={{color:'#E0E1E6' ,marginTop:'-20px'}}>
                {item.Number}
                </div>
                </div>
                <Card.Title className="fw-semibold mt-2">{item.title}</Card.Title>
                <Card.Text className="text-muted">{item.desc}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
);
}