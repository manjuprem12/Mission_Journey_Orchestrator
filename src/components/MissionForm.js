import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';

//components
import { addMission, updateMission } from '../state/missionsSlice';
import { formatDate, formatDateEdit } from '../utils/dateUtils';
import { validateMission } from '../utils/validations';


const MissionForm = ({ mission, isFormVisible, handleCloseModal }) => {
  const dispatch = useDispatch();

  const initialMembers = mission && Array.isArray(mission.members) ? mission.members : [];

  const [name, setName] = useState(mission ? mission.name : '');
  const [members, setMembers] = useState(initialMembers);
  const [destination, setDestination] = useState(mission ? mission.destination : 'Mars Alpha-110');
  const [departure, setDeparture] = useState(mission ? formatDate(mission.departureDate) : '');
  const [errors, setErrors] = useState({});

  const [newMember, setNewMember] = useState({
    type: 'Pilot',
    experience: '',
    job: '',
    age: '',
    wealth: '',
  });

  const jobList = ['Navigation', 'Solar panels', 'Maintenance', 'Mechanics']
  const destinationList = ['Mars Alpha-110', 'Mars Alpha-220', 'Mars Alpha-224', 'Mars Alpha-116']
  const memberTypes = ['Pilot', 'Engineer', 'Passenger']

  useEffect(() => {
    if (mission) {
      setName(mission.name);
      setMembers(initialMembers);
      setDestination(mission.destination);
      setDeparture(formatDate(mission.departureDate));
    }
  }, [mission]);

  //Event handler for all the fields
  const handleMemberChange = (e, index = null) => {
    const { name, value } = e.target;
    if (index === null) {
      setNewMember((prevState) => ({
        ...prevState,
        [name]: value,
        ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
        ...(name === 'type' && value !== 'Engineer' && { job: '' }),
        ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
      }));
    } else {
      setMembers(members.map((member, i) => {
        if (i === index) {
          return {
            ...member,
            [name]: value,
            ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
            ...(name === 'type' && value !== 'Engineer' && { job: '' }),
            ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
          };
        }
        return member;
      }));
    }
  };

  //Event handler for Add Member button
  const handleAddMember = () => {
    setMembers([...members, newMember]);
    setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' });
  };

  //Event handler for Remove Member button
  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  //Form submit function
  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateMission(name, departure, members);
    if (Object.keys(validationErrors).length === 0) {
      const missionData = { name, members, destination, departureDate: formatDateEdit(departure) };
      if (mission) {
        dispatch(updateMission({ ...mission, ...missionData }));
      } else {
        dispatch(addMission({ id: Date.now(), ...missionData }));
      }
      handleCloseModal();
    } else {
      setErrors(validationErrors);
    }
  };

  //Error message handling function
  const renderMemberErrors = (index, field) => {
    if (errors.members) {
      const memberError = errors.members.find(err => err.index === index);
      if (memberError) {
        return Object.keys(memberError).map((key) => (
          key !== 'index' && <Form.Text key={key} className="text-danger">{memberError[key]}</Form.Text>
        ));
      }
    }
    return null;
  };

  return (
    <Modal show={isFormVisible} onHide={handleCloseModal} size="lg">
      <Modal.Header closeButton>
        <Modal.Title>{mission ? 'Edit Mission' : 'New Mission'}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Row className="mb-3">
            <Col>
              <Form.Group>
                <Form.Label>Mission Name</Form.Label>
                <Form.Control
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
                {errors.name && <Form.Text className="text-danger">{errors.name}</Form.Text>}
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Destination</Form.Label>
                <Form.Control as="select" value={destination} onChange={(e) => setDestination(e.target.value)}>
                  {destinationList.map(item => <option key={item}>{item}</option>)}
                </Form.Control>
              </Form.Group>
            </Col>
            <Col>
              <Form.Group>
                <Form.Label>Departure Date</Form.Label>
                <Form.Control
                  type="date"
                  value={departure}
                  onChange={(e) => setDeparture(e.target.value)}
                  required
                />
                {errors.departure && <Form.Text className="text-danger">{errors.departure}</Form.Text>}
              </Form.Group>
            </Col>
          </Row>
          <hr />
          <Row className="mb-3">
            <Col>
              <h4>Members</h4>
            </Col>
            <Col className="text-end">
              <Button onClick={handleAddMember} variant="outline-primary">Add Member </Button>
            </Col>
          </Row>
          {errors.pilot && <Form.Text className="text-danger">{errors.pilot}</Form.Text>} <br />
          {errors.passenger && <Form.Text className="text-danger">{errors.passenger}</Form.Text>}
          {errors.job && <Form.Text className="text-danger">{errors.job}</Form.Text>}

          {members.length > 0 && (
            members.map((member, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" name="type" value={member.type} onChange={(e) => handleMemberChange(e, index)}>
                      {memberTypes.map(item => <option key={item}>{item}</option>)}
                    </Form.Control>
                  </Form.Group>
                </Col>
                {member.type === 'Pilot' && (
                  <Col>
                    <Form.Group>
                      <Form.Label>Experience</Form.Label>
                      <Form.Control
                        type="number"
                        name="experience"
                        min="0"
                        value={member.experience}
                        onChange={(e) => handleMemberChange(e, index)}
                      />
                      {renderMemberErrors(index)}
                    </Form.Group>
                  </Col>
                )}
                {member.type === 'Engineer' && (
                  <>
                    <Col>
                      <Form.Group>
                        <Form.Label>Experience</Form.Label>
                        <Form.Control
                          type="number"
                          name="experience"
                          min="0"
                          value={member.experience}
                          onChange={(e) => handleMemberChange(e, index)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Job</Form.Label>
                        <Form.Control as="select" name="job" value={member.job} onChange={(e) => handleMemberChange(e, index)}>
                          <option>Select job</option>
                          {jobList.map(item => <option key={item}>{item}</option>)}
                        </Form.Control>
                        {renderMemberErrors(index)}
                      </Form.Group>
                    </Col>
                  </>
                )}
                {member.type === 'Passenger' && (
                  <>
                    <Col>
                      <Form.Group>
                        <Form.Label>Age</Form.Label>
                        <Form.Control
                          type="number"
                          name="age"
                          min="0"
                          value={member.age}
                          onChange={(e) => handleMemberChange(e, index)}
                        />
                        {renderMemberErrors(index)}
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Wealth</Form.Label>
                        <Form.Control
                          type="number"
                          name="wealth"
                          value={member.wealth}
                          min="0"
                          onChange={(e) => handleMemberChange(e, index)}
                        />
                      </Form.Group>
                    </Col>
                  </>
                )}
                <Col xs="auto">
                  <AiOutlineDelete
                    className="ucdelete"
                    onClick={() => handleRemoveMember(index)}
                  />
                </Col>
              </Row>
            ))
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="outline-primary" type="submit" onClick={handleSubmit}>
          {mission ? 'Update Mission' : 'Submit'}
        </Button>
        <Button variant="outline-secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MissionForm;