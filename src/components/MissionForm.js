// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMission, updateMission } from '../state/missionsSlice';
// import { validateMission } from '../utils/validations';
// import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineDelete } from 'react-icons/ai'

// const MissionForm = ({ mission, isFormVisible, handleCloseModal }) => {
//     const dispatch = useDispatch();

//     // Ensure mission members are initialized as an empty array if undefined
//     const initialMembers = mission && Array.isArray(mission.members) ? mission.members : [];

//     const [name, setName] = useState(mission ? mission.name : '');
//     const [members, setMembers] = useState(initialMembers);
//     const [destination, setDestination] = useState(mission ? mission.destination : '');
//     const [departure, setDeparture] = useState(mission ? mission.departure : '');
//     const [errors, setErrors] = useState({});

//     const [newMember, setNewMember] = useState({
//         type: 'Pilot',
//         experience: '',
//         job: '',
//         age: '',
//         wealth: '',
//     });

//     useEffect(() => {
//         if (mission) {
//             setName(mission.name);
//             setMembers(initialMembers);
//             setDestination(mission.destination);
//             setDeparture(mission.departure);
//         }
//     }, [mission]);

//     const handleMemberChange = (e) => {
//         const { name, value } = e.target;
//         setNewMember((prevState) => ({
//             ...prevState,
//             [name]: value,
//         }));
//     };

//     const handleAddMember = () => {
//         setMembers([...members, newMember]);
//         setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' });
//     };

//     const handleRemoveMember = (index) => {
//         setMembers(members.filter((_, i) => i !== index));
//     };

//     const handleSubmit = (e) => {
//         e.preventDefault();
//         const validationErrors = validateMission(name, departure, newMember);
//         if (Object.keys(validationErrors).length === 0) {
//             const missionData = { name, members, destination, departure };
//             if (mission) {
//                 dispatch(updateMission({ ...mission, ...missionData }));
//             } else {
//                 dispatch(addMission({ id: Date.now(), ...missionData }));
//             }
//             handleCloseModal();
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     return (
//         <Modal show={isFormVisible} onHide={handleCloseModal} size="lg">
//             <Modal.Header closeButton>
//                 <Modal.Title>{mission ? 'Edit Mission' : 'New Mission'}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <form onSubmit={handleSubmit}>
//                     <div style={{ display: "flex" }}>
//                         <div>
//                             <label>Mission Name:</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                             {errors.name && <span className="error">{errors.name}</span>}
//                         </div>
//                         <div>
//                             <label>Destination:</label>
//                             <select  value={destination} onChange={(e) => setDestination(e.target.value)}>
//                                 <option value="Mars_Alpha_110">Mars Alpha-110</option>
//                                 <option value="Mars_Alpha_220">Mars Alpha-220</option>
//                                 <option value="Mars_Alpha_224">Mars Alpha-224</option>
//                                 <option value="Mars_Alpha_116">Mars Alpha-116</option>


//                             </select>
//                         </div>
//                         <div>
//                             <label>Departure Date:</label>
//                             <input
//                                 type="date"
//                                 value={departure}
//                                 onChange={(e) => setDeparture(e.target.value)}
//                                 required
//                             />
//                             {errors.departure && <span className="error">{errors.departure}</span>}
//                         </div>
//                     </div>


//                     <hr />
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                         <h4>Members</h4>
//                         <Button onClick={handleAddMember}>Add Member</Button>
//                     </div>

//                     {members.length > 0 && (
//                         members.map((member, index) => (
//                             <div>
//                                 <div key={index} style={{ marginBottom: '1em', display: "flex" }}>
//                                     <div>
//                                         <label>Type:</label>
//                                         <select value={member.type} onChange={(e) => handleMemberChange(e)}>
//                                             <option value="Pilot">Pilot</option>
//                                             <option value="Engineer">Engineer</option>
//                                             <option value="Passenger">Passenger</option>
//                                         </select>
//                                     </div>
//                                     {member.type === 'Pilot' && (
//                                         <div>
//                                             <label>Experience:</label>
//                                             <input
//                                                 type="number"
//                                                 value={member.experience}
//                                                 readOnly
//                                             />
//                                         </div>
//                                     )}
//                                     {member.type === 'Engineer' && (
//                                         <>
//                                             <div>
//                                                 <label>Experience:</label>
//                                                 <input
//                                                     type="number"
//                                                     value={member.experience}
//                                                     readOnly
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label>Job:</label>
//                                                 <input
//                                                     type="text"
//                                                     value={member.job}
//                                                     readOnly
//                                                 />
//                                             </div>
//                                         </>
//                                     )}
//                                     {member.type === 'Passenger' && (
//                                         <>
//                                             <div>
//                                                 <label>Age:</label>
//                                                 <input
//                                                     type="number"
//                                                     value={member.age}
//                                                     readOnly
//                                                 />
//                                             </div>
//                                             <div>
//                                                 <label>Wealth:</label>
//                                                 <input
//                                                     type="number"
//                                                     value={member.wealth}
//                                                     readOnly
//                                                 />
//                                             </div>
//                                         </>
//                                     )}
//                                     <div style={{ display: "flex", alignItems: "center" }}>
//                                         <AiOutlineDelete className={'ucdelete'} onClick={() => handleRemoveMember(index)} style={{ cursor: "pointer" }} />
//                                     </div>
//                                 </div>
//                                 <hr />

//                             </div>

//                         ))
//                     )}
//                     {/* <Button variant="danger" onClick={() => setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' })}>Clear New Member</Button> */}
//                 </form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button type="submit" onClick={handleSubmit}>
//                     {mission ? 'Update' : 'Add'} Mission
//                 </Button>
//                 <Button variant="secondary" onClick={handleCloseModal}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default MissionForm;

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMission, updateMission } from '../state/missionsSlice';
// import { validateMission } from '../utils/validations';
// import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineDelete } from 'react-icons/ai';

// const MissionForm = ({ mission, isFormVisible, handleCloseModal }) => {
//     const dispatch = useDispatch();

//     const initialMembers = mission && Array.isArray(mission.members) ? mission.members : [];

//     const [name, setName] = useState(mission ? mission.name : '');
//     const [members, setMembers] = useState(initialMembers);
//     const [destination, setDestination] = useState(mission ? mission.destination : '');
//     const [departure, setDeparture] = useState(mission ? mission.departure : '');
//     const [errors, setErrors] = useState({});

//     const [newMember, setNewMember] = useState({
//         type: 'Pilot',
//         experience: '',
//         job: '',
//         age: '',
//         wealth: '',
//     });

//     useEffect(() => {
//         if (mission) {
//             setName(mission.name);
//             setMembers(initialMembers);
//             setDestination(mission.destination);
//             setDeparture(mission.departure);
//         }
//     }, [mission]);

//     const handleMemberChange = (e, index = null) => {
//         const { name, value } = e.target;
//         if (index === null) {
//             setNewMember((prevState) => ({
//                 ...prevState,
//                 [name]: value,
//                 ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
//                 ...(name === 'type' && value !== 'Engineer' && { job: '' }),
//                 ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
//             }));
//         } else {
//             setMembers(members.map((member, i) => {
//                 if (i === index) {
//                     return {
//                         ...member,
//                         [name]: value,
//                         ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
//                         ...(name === 'type' && value !== 'Engineer' && { job: '' }),
//                         ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
//                     };
//                 }
//                 return member;
//             }));
//         }
//     };

//     const handleAddMember = () => {
//         setMembers([...members, newMember]);
//         setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' });
//     };

//     const handleRemoveMember = (index) => {
//         setMembers(members.filter((_, i) => i !== index));
//     };

//     const handleSubmit = (e) => {
//         console.log('newMember-----', newMember)
//         console.log('member---', members)
//         e.preventDefault();
//         const validationErrors = validateMission(name, departure, members);
//         if (Object.keys(validationErrors).length === 0) {
//             const missionData = { name, members, destination, departure };
//             if (mission) {
//                 dispatch(updateMission({ ...mission, ...missionData }));
//             } else {
//                 dispatch(addMission({ id: Date.now(), ...missionData }));
//             }
//             handleCloseModal();
//         } else {
//             setErrors(validationErrors);
//         }
//     };

//     return (
//         <Modal show={isFormVisible} onHide={handleCloseModal} size="lg">
//             <Modal.Header closeButton>
//                 <Modal.Title>{mission ? 'Edit Mission' : 'New Mission'}</Modal.Title>
//             </Modal.Header>
//             <Modal.Body>
//                 <form onSubmit={handleSubmit}>
//                     <div style={{ display: "flex", justifyContent: "space-between" }}>
//                         <div>
//                             <label>Mission Name:</label>
//                             <input
//                                 type="text"
//                                 value={name}
//                                 onChange={(e) => setName(e.target.value)}
//                                 required
//                             />
//                             {errors.name && <span className="error">{errors.name}</span>}
//                         </div>
//                         <div>
//                             <label>Destination:</label>
//                             <select value={destination} onChange={(e) => setDestination(e.target.value)}>
//                                 <option value="Mars_Alpha_110">Mars Alpha-110</option>
//                                 <option value="Mars_Alpha_220">Mars Alpha-220</option>
//                                 <option value="Mars_Alpha_224">Mars Alpha-224</option>
//                                 <option value="Mars_Alpha_116">Mars Alpha-116</option>
//                             </select>
//                         </div>
//                         <div>
//                             <label>Departure Date:</label>
//                             <input
//                                 type="date"
//                                 value={departure}
//                                 onChange={(e) => setDeparture(e.target.value)}
//                                 required
//                             />
//                             {errors.departure && <span className="error">{errors.departure}</span>}
//                         </div>
//                     </div>
//                     <hr />
//                     <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//                         <h4>Members</h4>
//                         <Button onClick={handleAddMember}>Add Member</Button>
//                     </div>
                
//                     {members.length > 0 && (
//                         members.map((member, index) => (
//                             <div key={index} style={{ marginBottom: '1em', display: "flex", alignItems: "center" }}>
//                                 <div>
//                                     <label>Type:</label>
//                                     <select name="type" value={member.type} onChange={(e) => handleMemberChange(e, index)}>
//                                         <option value="Pilot">Pilot</option>
//                                         <option value="Engineer">Engineer</option>
//                                         <option value="Passenger">Passenger</option>
//                                     </select>
//                                 </div>
//                                 {member.type === 'Pilot' && (
//                                     <div>
//                                         <label>Experience:</label>
//                                         <input
//                                             type="number"
//                                             name="experience"
//                                             value={member.experience}
//                                             onChange={(e) => handleMemberChange(e, index)}
//                                         />
//                                     </div>
//                                 )}
//                                 {member.type === 'Engineer' && (
//                                     <>
//                                         <div>
//                                             <label>Experience:</label>
//                                             <input
//                                                 type="number"
//                                                 name="experience"
//                                                 value={member.experience}
//                                                 onChange={(e) => handleMemberChange(e, index)}
//                                             />
//                                         </div>
//                                         <div>
//                                             <label>Job:</label>
//                                             <input
//                                                 type="text"
//                                                 name="job"
//                                                 value={member.job}
//                                                 onChange={(e) => handleMemberChange(e, index)}
//                                             />
//                                         </div>
//                                     </>
//                                 )}
//                                 {member.type === 'Passenger' && (
//                                     <>
//                                         <div>
//                                             <label>Age:</label>
//                                             <input
//                                                 type="number"
//                                                 name="age"
//                                                 value={member.age}
//                                                 onChange={(e) => handleMemberChange(e, index)}
//                                             />
//                                         </div>
//                                         <div>
//                                             <label>Wealth:</label>
//                                             <input
//                                                 type="number"
//                                                 name="wealth"
//                                                 value={member.wealth}
//                                                 onChange={(e) => handleMemberChange(e, index)}
//                                             />
//                                         </div>
//                                     </>
//                                 )}
//                                 <AiOutlineDelete
//                                     className="ucdelete"
//                                     onClick={() => handleRemoveMember(index)}
//                                     style={{ cursor: "pointer", marginLeft: "1em" }}
//                                 />
//                             </div>
//                         ))
//                     )}
                    
//                 </form>
//             </Modal.Body>
//             <Modal.Footer>
//                 <Button type="submit" onClick={handleSubmit}>
//                     {mission ? 'Update' : 'Add'} Mission
//                 </Button>
//                 <Button variant="secondary" onClick={handleCloseModal}>
//                     Close
//                 </Button>
//             </Modal.Footer>
//         </Modal>
//     );
// };

// export default MissionForm;

  // MissionForm.js
//   import React, { useState, useEffect } from 'react';
//   import { useDispatch } from 'react-redux';
//   import { addMission, updateMission } from '../state/missionsSlice';
//   import { validateMission } from '../utils/validations';
//   import { Modal, Button } from 'react-bootstrap';
//   import { AiOutlineDelete } from 'react-icons/ai';
  
//   const MissionForm = ({ mission, isFormVisible, handleCloseModal }) => {
//     const dispatch = useDispatch();
  
//     const initialMembers = mission && Array.isArray(mission.members) ? mission.members : [];
  
//     const [name, setName] = useState(mission ? mission.name : '');
//     const [members, setMembers] = useState(initialMembers);
//     const [destination, setDestination] = useState(mission ? mission.destination : '');
//     const [departure, setDeparture] = useState(mission ? mission.departure : '');
//     const [errors, setErrors] = useState({});
  
//     const [newMember, setNewMember] = useState({
//       type: 'Pilot',
//       experience: '',
//       job: '',
//       age: '',
//       wealth: '',
//     });
  
//     useEffect(() => {
//       if (mission) {
//         setName(mission.name);
//         setMembers(initialMembers);
//         setDestination(mission.destination);
//         setDeparture(mission.departure);
//       }
//     }, [mission]);
  
//     const handleMemberChange = (e, index = null) => {
//       const { name, value } = e.target;
//       if (index === null) {
//         setNewMember((prevState) => ({
//           ...prevState,
//           [name]: value,
//           ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
//           ...(name === 'type' && value !== 'Engineer' && { job: '' }),
//           ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
//         }));
//       } else {
//         setMembers(members.map((member, i) => {
//           if (i === index) {
//             return {
//               ...member,
//               [name]: value,
//               ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
//               ...(name === 'type' && value !== 'Engineer' && { job: '' }),
//               ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
//             };
//           }
//           return member;
//         }));
//       }
//     };
  
//     const handleAddMember = () => {
//       setMembers([...members, newMember]);
//       setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' });
//     };
  
//     const handleRemoveMember = (index) => {
//       setMembers(members.filter((_, i) => i !== index));
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
//       const validationErrors = validateMission(name, departure, members);
//       if (Object.keys(validationErrors).length === 0) {
//         const missionData = { name, members, destination, departure };
//         if (mission) {
//           dispatch(updateMission({ ...mission, ...missionData }));
//         } else {
//           dispatch(addMission({ id: Date.now(), ...missionData }));
//         }
//         handleCloseModal();
//       } else {
//         setErrors(validationErrors);
//       }
//     };
  
//     return (
//       <Modal show={isFormVisible} onHide={handleCloseModal} size="lg">
//         <Modal.Header closeButton>
//           <Modal.Title>{mission ? 'Edit Mission' : 'New Mission'}</Modal.Title>
//         </Modal.Header>
//         <Modal.Body>
//           <form onSubmit={handleSubmit}>
//             <div style={{ display: "flex", justifyContent: "space-between" }}>
//               <div>
//                 <label>Mission Name:</label>
//                 <input
//                   type="text"
//                   value={name}
//                   onChange={(e) => setName(e.target.value)}
//                   required
//                 />
//                 {errors.name && <span className="error">{errors.name}</span>}
//               </div>
//               <div>
//                 <label>Destination:</label>
//                 <select value={destination} onChange={(e) => setDestination(e.target.value)}>
//                   <option value="Mars_Alpha_110">Mars Alpha-110</option>
//                   <option value="Mars_Alpha_220">Mars Alpha-220</option>
//                   <option value="Mars_Alpha_224">Mars Alpha-224</option>
//                   <option value="Mars_Alpha_116">Mars Alpha-116</option>
//                 </select>
//               </div>
//               <div>
//                 <label>Departure Date:</label>
//                 <input
//                   type="date"
//                   value={departure}
//                   onChange={(e) => setDeparture(e.target.value)}
//                   required
//                 />
//                 {errors.departure && <span className="error">{errors.departure}</span>}
//               </div>
//             </div>
//             <hr />
//             <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//               <h4>Members</h4>
//               <Button onClick={handleAddMember}>Add Member</Button>
//             </div>
//             {errors.members && errors.members.map((memberError, index) => (
//               <div key={index} className="error">
//                 {`Member ${index + 1}: ${Object.values(memberError).join(', ')}`}
//               </div>
//             ))}
//             {members.length > 0 && (
//               members.map((member, index) => (
//                 <div key={index} style={{ marginBottom: '1em', display: "flex", alignItems: "center" }}>
//                   <div>
//                     <label>Type:</label>
//                     <select name="type" value={member.type} onChange={(e) => handleMemberChange(e, index)}>
//                       <option value="Pilot">Pilot</option>
//                       <option value="Engineer">Engineer</option>
//                       <option value="Passenger">Passenger</option>
//                     </select>
//                   </div>
//                   {member.type === 'Pilot' && (
//                     <div>
//                       <label>Experience:</label>
//                       <input
//                         type="number"
//                         name="experience"
//                         value={member.experience}
//                         onChange={(e) => handleMemberChange(e, index)}
//                       />
//                     </div>
//                   )}
//                   {member.type === 'Engineer' && (
//                     <>
//                       <div>
//                         <label>Experience:</label>
//                         <input
//                           type="number"
//                           name="experience"
//                           value={member.experience}
//                           onChange={(e) => handleMemberChange(e, index)}
//                         />
//                       </div>
//                       <div>
//                         <label>Job:</label>
//                         <input
//                           type="text"
//                           name="job"
//                           value={member.job}
//                           onChange={(e) => handleMemberChange(e, index)}
//                         />
//                       </div>
//                     </>
//                   )}
//                   {member.type === 'Passenger' && (
//                     <>
//                       <div>
//                         <label>Age:</label>
//                         <input
//                           type="number"
//                           name="age"
//                           value={member.age}
//                           onChange={(e) => handleMemberChange(e, index)}
//                         />
//                       </div>
//                       <div>
//                         <label>Wealth:</label>
//                         <input
//                           type="number"
//                           name="wealth"
//                           value={member.wealth}
//                           onChange={(e) => handleMemberChange(e, index)}
//                         />
//                       </div>
//                     </>
//                   )}
//                   <AiOutlineDelete
//                     className="ucdelete"
//                     onClick={() => handleRemoveMember(index)}
//                     style={{ cursor: "pointer", marginLeft: "1em" }}
//                   />
//                 </div>
//               ))
//             )}
//           </form>
//         </Modal.Body>
//         <Modal.Footer>
//           <Button type="submit" onClick={handleSubmit}>
//             {mission ? 'Update' : 'Add'} Mission
//           </Button>
//           <Button variant="secondary" onClick={handleCloseModal}>
//             Close
//           </Button>
//         </Modal.Footer>
//       </Modal>
//     );
//   };
  
//   export default MissionForm;
  

// import React, { useState, useEffect } from 'react';
// import { useDispatch } from 'react-redux';
// import { addMission, updateMission } from '../state/missionsSlice';
// import { validateMission } from '../utils/validations';
// import { Modal, Button } from 'react-bootstrap';
// import { AiOutlineDelete } from 'react-icons/ai';

// const MissionForm = ({ mission, isFormVisible, handleCloseModal }) => {
//   const dispatch = useDispatch();

//   const initialMembers = mission && Array.isArray(mission.members) ? mission.members : [];

//   const [name, setName] = useState(mission ? mission.name : '');
//   const [members, setMembers] = useState(initialMembers);
//   const [destination, setDestination] = useState(mission ? mission.destination : '');
//   const [departure, setDeparture] = useState(mission ? mission.departureDate : '');
//   const [errors, setErrors] = useState({});

//   const [newMember, setNewMember] = useState({
//     type: 'Pilot',
//     experience: '',
//     job: '',
//     age: '',
//     wealth: '',
//   });

//   useEffect(() => {
//     if (mission) {
//       setName(mission.name);
//       setMembers(initialMembers);
//       setDestination(mission.destination);
//       setDeparture(mission.departureDate);
//     }
//   }, [mission]);

//   const handleMemberChange = (e, index = null) => {
//     const { name, value } = e.target;
//     if (index === null) {
//       setNewMember((prevState) => ({
//         ...prevState,
//         [name]: value,
//         ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
//         ...(name === 'type' && value !== 'Engineer' && { job: '' }),
//         ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
//       }));
//     } else {
//       setMembers(members.map((member, i) => {
//         if (i === index) {
//           return {
//             ...member,
//             [name]: value,
//             ...(name === 'type' && value !== 'Pilot' && { experience: '' }),
//             ...(name === 'type' && value !== 'Engineer' && { job: '' }),
//             ...(name === 'type' && value !== 'Passenger' && { age: '', wealth: '' })
//           };
//         }
//         return member;
//       }));
//     }
//   };

//   const handleAddMember = () => {
//     setMembers([...members, newMember]);
//     setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' });
//   };

//   const handleRemoveMember = (index) => {
//     setMembers(members.filter((_, i) => i !== index));
//   };

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     const validationErrors = validateMission(name, departure, members);
//     if (Object.keys(validationErrors).length === 0) {
//       const missionData = { name, members, destination, departureDate: departure };
//       if (mission) {
//         dispatch(updateMission({ ...mission, ...missionData }));
//       } else {
//         dispatch(addMission({ id: Date.now(), ...missionData }));
//       }
//       handleCloseModal();
//     } else {
//       setErrors(validationErrors);
//     }
//   };

//   return (
//     <Modal show={isFormVisible} onHide={handleCloseModal} size="lg">
//       <Modal.Header closeButton>
//         <Modal.Title>{mission ? 'Edit Mission' : 'New Mission'}</Modal.Title>
//       </Modal.Header>
//       <Modal.Body>
//         <form onSubmit={handleSubmit}>
//           <div style={{ display: "flex", justifyContent: "space-between" }}>
//             <div>
//               <label>Mission Name:</label>
//               <input
//                 type="text"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 required
//               />
//               {errors.name && <span className="error">{errors.name}</span>}
//             </div>
//             <div>
//               <label>Destination:</label>
//               <select value={destination} onChange={(e) => setDestination(e.target.value)}>
//                 <option value="Mars_Alpha_110">Mars Alpha-110</option>
//                 <option value="Mars_Alpha_220">Mars Alpha-220</option>
//                 <option value="Mars_Alpha_224">Mars Alpha-224</option>
//                 <option value="Mars_Alpha_116">Mars Alpha-116</option>
//               </select>
//             </div>
//             <div>
//               <label>Departure Date:</label>
//               <input
//                 type="date"
//                 value={departure}
//                 onChange={(e) => setDeparture(e.target.value)}
//                 required
//               />
//               {errors.departure && <span className="error">{errors.departure}</span>}
//             </div>
//           </div>
//           <hr />
//           <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//             <h4>Members</h4>
//             <Button onClick={handleAddMember}>Add Member</Button>
//           </div>
//           {errors.members && errors.members.map((memberError, index) => (
//             <div key={index} className="error">
//               {`Member ${index + 1}: ${Object.values(memberError).join(', ')}`}
//             </div>
//           ))}
//           {members.length > 0 && (
//             members.map((member, index) => (
//               <div key={index} style={{ marginBottom: '1em', display: "flex", alignItems: "center" }}>
//                 <div>
//                   <label>Type:</label>
//                   <select name="type" value={member.type} onChange={(e) => handleMemberChange(e, index)}>
//                     <option value="Pilot">Pilot</option>
//                     <option value="Engineer">Engineer</option>
//                     <option value="Passenger">Passenger</option>
//                   </select>
//                 </div>
//                 {member.type === 'Pilot' && (
//                   <div>
//                     <label>Experience:</label>
//                     <input
//                       type="number"
//                       name="experience"
//                       value={member.experience}
//                       onChange={(e) => handleMemberChange(e, index)}
//                     />
//                   </div>
//                 )}
//                 {member.type === 'Engineer' && (
//                   <>
//                     <div>
//                       <label>Experience:</label>
//                       <input
//                         type="number"
//                         name="experience"
//                         value={member.experience}
//                         onChange={(e) => handleMemberChange(e, index)}
//                       />
//                     </div>
//                     <div>
//                       <label>Job:</label>
//                       <input
//                         type="text"
//                         name="job"
//                         value={member.job}
//                         onChange={(e) => handleMemberChange(e, index)}
//                       />
//                     </div>
//                   </>
//                 )}
//                 {member.type === 'Passenger' && (
//                   <>
//                     <div>
//                       <label>Age:</label>
//                       <input
//                         type="number"
//                         name="age"
//                         value={member.age}
//                         onChange={(e) => handleMemberChange(e, index)}
//                       />
//                     </div>
//                     <div>
//                       <label>Wealth:</label>
//                       <input
//                         type="number"
//                         name="wealth"
//                         value={member.wealth}
//                         onChange={(e) => handleMemberChange(e, index)}
//                       />
//                     </div>
//                   </>
//                 )}
//                 <AiOutlineDelete
//                   className="ucdelete"
//                   onClick={() => handleRemoveMember(index)}
//                   style={{ cursor: "pointer", marginLeft: "1em" }}
//                 />
//               </div>
//             ))
//           )}
//         </form>
//       </Modal.Body>
//       <Modal.Footer>
//         <Button type="submit" onClick={handleSubmit}>
//           {mission ? 'Update' : 'Add'} Mission
//         </Button>
//         <Button variant="secondary" onClick={handleCloseModal}>
//           Close
//         </Button>
//       </Modal.Footer>
//     </Modal>
//   );
// };

// export default MissionForm;

import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addMission, updateMission } from '../state/missionsSlice';
import { validateMission } from '../utils/validations';
import { Modal, Button, Form, Row, Col } from 'react-bootstrap';
import { AiOutlineDelete } from 'react-icons/ai';

const MissionForm = ({ mission, isFormVisible, handleCloseModal }) => {
  const dispatch = useDispatch();

  const initialMembers = mission && Array.isArray(mission.members) ? mission.members : [];

  const [name, setName] = useState(mission ? mission.name : '');
  const [members, setMembers] = useState(initialMembers);
  const [destination, setDestination] = useState(mission ? mission.destination : '');
  const [departure, setDeparture] = useState(mission ? mission.departureDate : '');
  const [errors, setErrors] = useState({});

  const [newMember, setNewMember] = useState({
    type: 'Pilot',
    experience: '',
    job: '',
    age: '',
    wealth: '',
  });

  useEffect(() => {
    if (mission) {
      setName(mission.name);
      setMembers(initialMembers);
      setDestination(mission.destination);
      setDeparture(mission.departureDate);
    }
  }, [mission]);

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

  const handleAddMember = () => {
    setMembers([...members, newMember]);
    setNewMember({ type: 'Pilot', experience: '', job: '', age: '', wealth: '' });
  };

  const handleRemoveMember = (index) => {
    setMembers(members.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validateMission(name, departure, members);
    if (Object.keys(validationErrors).length === 0) {
      const missionData = { name, members, destination, departureDate: departure };
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
                <Form.Label htmlFor='missionname'>Mission Name</Form.Label>
                <Form.Control
                  id='missionname'
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
                  <option value="Mars_Alpha_110">Mars Alpha-110</option>
                  <option value="Mars_Alpha_220">Mars Alpha-220</option>
                  <option value="Mars_Alpha_224">Mars Alpha-224</option>
                  <option value="Mars_Alpha_116">Mars Alpha-116</option>
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
              <Button onClick={handleAddMember}>Add Member</Button>
            </Col>
          </Row>
          {errors.members && errors.members.map((memberError, index) => (
            <div key={index} className="text-danger">
              {`Member ${index + 1}: ${Object.values(memberError).join(', ')}`}
            </div>
          ))}
          {members.length > 0 && (
            members.map((member, index) => (
              <Row key={index} className="mb-3 align-items-center">
                <Col>
                  <Form.Group>
                    <Form.Label>Type</Form.Label>
                    <Form.Control as="select" name="type" value={member.type} onChange={(e) => handleMemberChange(e, index)}>
                      <option value="Pilot">Pilot</option>
                      <option value="Engineer">Engineer</option>
                      <option value="Passenger">Passenger</option>
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
                        value={member.experience}
                        onChange={(e) => handleMemberChange(e, index)}
                      />
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
                          value={member.experience}
                          onChange={(e) => handleMemberChange(e, index)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Job</Form.Label>
                        <Form.Control
                          type="text"
                          name="job"
                          value={member.job}
                          onChange={(e) => handleMemberChange(e, index)}
                        />
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
                          value={member.age}
                          onChange={(e) => handleMemberChange(e, index)}
                        />
                      </Form.Group>
                    </Col>
                    <Col>
                      <Form.Group>
                        <Form.Label>Wealth</Form.Label>
                        <Form.Control
                          type="number"
                          name="wealth"
                          value={member.wealth}
                          onChange={(e) => handleMemberChange(e, index)}
                        />
                      </Form.Group>
                    </Col>
                  </>
                )}
                <Col xs="auto">
                  <AiOutlineDelete
                    className="text-danger"
                    onClick={() => handleRemoveMember(index)}
                    style={{ cursor: "pointer" }}
                  />
                </Col>
              </Row>
            ))
          )}
        </Form>
      </Modal.Body>
      <Modal.Footer>
        <Button type="submit" onClick={handleSubmit}>
          {mission ? 'Update' : 'Add'} Mission
        </Button>
        <Button variant="secondary" onClick={handleCloseModal}>
          Close
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default MissionForm;

