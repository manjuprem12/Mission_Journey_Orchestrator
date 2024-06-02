// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteMission } from '../state/missionsSlice';
// import MissionForm from './MissionForm';
// import { Modal } from 'react-bootstrap';
// import { GrEdit } from 'react-icons/gr'
// const MissionList = () => {
//   const missions = useSelector((state) => state.missions);
//   const dispatch = useDispatch();
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [selectedMission, setSelectedMission] = useState(null);

//   const toggleFormVisibility = (mission = null) => {
//     setSelectedMission(mission);
//     setFormVisible(!isFormVisible);
//   };

//   const handleClose = () => {
//     setFormVisible(false);
//     setSelectedMission(null);
//   };

//   return (
//     <React.Fragment>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1>Missions</h1>
//         <button onClick={() => toggleFormVisibility()}>New Mission</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>Name</th>
//             <th>Crew Count</th>
//             <th>Destination</th>
//             <th>Departure Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {missions && missions.length > 0 ? (
//             missions.map((mission) => (
//               <tr key={mission.id}>
//                 <td>{mission.name}</td>
//                 <td>{mission.members?.length}</td>
//                 <td>{mission.destination}</td>
//                 <td>{mission.departure}</td>
//                 <td>
//                   {/* <button onClick={() => toggleFormVisibility(mission)}>Edit</button> */}
//                   <GrEdit className={'ucedit'} onClick={() => toggleFormVisibility(mission)} />&nbsp;
//                   {/* <button onClick={() => dispatch(deleteMission(mission.id))}>Delete</button> */}
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No missions available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {isFormVisible && <MissionForm handleCloseModal={handleClose} mission={selectedMission} isFormVisible={isFormVisible} />}
//     </React.Fragment>
//   );
// };

// export default MissionList;

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteMission } from '../state/missionsSlice';
// import MissionForm from './MissionForm';
// import { Modal } from 'react-bootstrap';
// import { GrEdit } from 'react-icons/gr';
// import { AiOutlineSearch } from "react-icons/ai";

// const MissionList = () => {
//   const missions = useSelector((state) => state.missions);
//   const dispatch = useDispatch();
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [selectedMission, setSelectedMission] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleFormVisibility = (mission = null) => {
//     setSelectedMission(mission);
//     setFormVisible(!isFormVisible);
//   };

//   const handleClose = () => {
//     setFormVisible(false);
//     setSelectedMission(null);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredMissions = missions.filter((mission) =>
//     mission.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <React.Fragment>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1>Missions</h1>
//         <button onClick={() => toggleFormVisibility()}>New Mission</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               Name
//               <br />
//               <div style={styles.searchContainer}>
//                 <input
//                   type="text"
//                   placeholder="Search by name"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   style={styles.searchInput}
//                 />
//                 <AiOutlineSearch style={styles.searchIcon} />
//               </div>
//             </th>
//             <th>Crew Count</th>
//             <th>Destination</th>
//             <th>Departure Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredMissions && filteredMissions.length > 0 ? (
//             filteredMissions.map((mission) => (
//               <tr key={mission.id}>
//                 <td>{mission.name}</td>
//                 <td>{mission.members?.length}</td>
//                 <td>{mission.destination}</td>
//                 <td>{mission.departure}</td>
//                 <td>
//                   <GrEdit className={'ucedit'} onClick={() => toggleFormVisibility(mission)} />&nbsp;
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No missions available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {isFormVisible && (
//         <MissionForm handleCloseModal={handleClose} mission={selectedMission} isFormVisible={isFormVisible} />
//       )}
//     </React.Fragment>
//   );
// };

// export default MissionList;

// const styles = {
//   searchContainer: {
//     position: 'relative',
//     width: '100%',
//   },
//   searchInput: {
//     width: '100%',
//     padding: '10px 30px 10px 10px',
//     border: 'none',
//     borderBottom: '1px solid #ccc',
//     outline: 'none',
//     fontSize: '16px',
//   },
//   searchIcon: {
//     position: 'absolute',
//     top: '50%',
//     right: '10px',
//     transform: 'translateY(-50%)',
//     cursor: 'pointer',
//     color: '#888',
//   },
// };

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteMission } from '../state/missionsSlice';
// import MissionForm from './MissionForm';
// import { Modal } from 'react-bootstrap';
// import { GrEdit } from 'react-icons/gr';
// import { AiOutlineSearch } from "react-icons/ai";

// const MissionList = () => {
//   const missions = useSelector((state) => state.missions);
//   const dispatch = useDispatch();
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [selectedMission, setSelectedMission] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleFormVisibility = (mission = null) => {
//     setSelectedMission(mission);
//     setFormVisible(!isFormVisible);
//   };

//   const handleClose = () => {
//     setFormVisible(false);
//     setSelectedMission(null);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredMissions = missions.filter((mission) =>
//     mission.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <React.Fragment>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1>Missions</h1>
//         <button onClick={() => toggleFormVisibility()}>New Mission</button>
//       </div>
//       <table>
//         <thead>
//           <tr>
//             <th>
//               Name
//               <br />
//               <div style={styles.searchContainer}>
//                 <input
//                   type="text"
//                   placeholder="Search by name"
//                   value={searchTerm}
//                   onChange={handleSearchChange}
//                   style={styles.searchInput}
//                 />
//                 <AiOutlineSearch style={styles.searchIcon} />
//               </div>
//             </th>
//             <th>Crew Count</th>
//             <th>Destination</th>
//             <th>Departure Date</th>
//             <th>Actions</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredMissions && filteredMissions.length > 0 ? (
//             filteredMissions.map((mission) => (
//               <tr key={mission.id}>
//                 <td>{mission.name}</td>
//                 <td>{mission.members?.length}</td>
//                 <td>{mission.destination}</td>
//                 <td>{mission.departure}</td>
//                 <td>
//                   <GrEdit className={'ucedit'} onClick={() => toggleFormVisibility(mission)} />&nbsp;
//                 </td>
//               </tr>
//             ))
//           ) : (
//             <tr>
//               <td colSpan="5">No missions available</td>
//             </tr>
//           )}
//         </tbody>
//       </table>
//       {isFormVisible && (
//         <MissionForm handleCloseModal={handleClose} mission={selectedMission} isFormVisible={isFormVisible} />
//       )}
//     </React.Fragment>
//   );
// };

// export default MissionList;

// const styles = {
//   searchContainer: {
//     position: 'relative',
//     width: '100%',
//   },
//   searchInput: {
//     width: '100%',
//     padding: '10px 30px 10px 10px',
//     border: 'none',
//     borderBottom: '1px solid #ccc',
//     outline: 'none',
//     fontSize: '16px',
//   },
//   searchIcon: {
//     position: 'absolute',
//     top: '50%',
//     right: '10px',
//     transform: 'translateY(-50%)',
//     cursor: 'pointer',
//     color: '#888',
//   },
// };

// import React, { useState } from 'react';
// import { useSelector, useDispatch } from 'react-redux';
// import { deleteMission } from '../state/missionsSlice';
// import MissionForm from './MissionForm';
// import { Modal } from 'react-bootstrap';
// import { GrEdit } from 'react-icons/gr';
// import { AiOutlineSearch } from "react-icons/ai";
// import './MissionList.css';

// const MissionList = () => {
//   const missions = useSelector((state) => state.missions);
//   const dispatch = useDispatch();
//   const [isFormVisible, setFormVisible] = useState(false);
//   const [selectedMission, setSelectedMission] = useState(null);
//   const [searchTerm, setSearchTerm] = useState('');

//   const toggleFormVisibility = (mission = null) => {
//     setSelectedMission(mission);
//     setFormVisible(!isFormVisible);
//   };

//   const handleClose = () => {
//     setFormVisible(false);
//     setSelectedMission(null);
//   };

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredMissions = missions.filter((mission) =>
//     mission.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <React.Fragment>
//       <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
//         <h1>Missions</h1>
//         <button onClick={() => toggleFormVisibility()}>New Mission</button>
//       </div>
//       <div className="table-container">
//         <table>
//           <thead>
//             <tr>
//               <th>Name
//                 <div className="search-container">
//                 <AiOutlineSearch className="search-icon" />
//                   <input
//                     type="text"
//                     placeholder="Search by name"
//                     value={searchTerm}
//                     onChange={handleSearchChange}
//                     className="search-input"
//                   />
                  
//                 </div>
//               </th>
//               <th>Crew Count</th>
//               <th>Destination</th>
//               <th>Departure Date</th>
//               <th>Actions</th>
//             </tr>
//           </thead>
//           <tbody>
//             {filteredMissions && filteredMissions.length > 0 ? (
//               filteredMissions.map((mission) => (
//                 <tr key={mission.id}>
//                   <td>{mission.name}</td>
//                   <td>{mission.members?.length}</td>
//                   <td>{mission.destination}</td>
//                   <td>{mission.departure}</td>
//                   <td>
//                     <GrEdit className={'ucedit'} onClick={() => toggleFormVisibility(mission)} />&nbsp;
//                   </td>
//                 </tr>
//               ))
//             ) : (
//               <tr>
//                 <td colSpan="5">No missions available</td>
//               </tr>
//             )}
//           </tbody>
//         </table>
//       </div>


//       {isFormVisible && (
//         <MissionForm handleCloseModal={handleClose} mission={selectedMission} isFormVisible={isFormVisible} />
//       )}
//     </React.Fragment>
//   );
// };

// export default MissionList;


import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteMission } from '../state/missionsSlice';
import MissionForm from './MissionForm';
import { GrEdit } from 'react-icons/gr';
import { AiOutlineSearch } from "react-icons/ai";
import './MissionList.css';

const MissionList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();
  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const toggleFormVisibility = (mission = null) => {
    setSelectedMission(mission);
    setFormVisible(!isFormVisible);
  };

  const handleClose = () => {
    setFormVisible(false);
    setSelectedMission(null);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const getStatus = (departureDate) => {
    const now = new Date();
    const departure = new Date(departureDate.split('/').reverse().join('-')); // Convert "dd/mm/yyyy" to "yyyy-mm-dd"
    const diffTime = departure - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return <span style={{ color: 'red', fontSize:' xx-small' }} >Departed</span>;
    } else if (diffDays === 0) {
      return "Today";
    } else if (diffDays === 1) {
      return "In 1 Day";
    } else if (diffDays < 7) {
      return `In ${diffDays} Days`;
    } else if (diffDays < 30) {
      const weeks = Math.ceil(diffDays / 7);
      return `In ${weeks} Week${weeks > 1 ? 's' : ''}`;
    } else {
      const months = Math.ceil(diffDays / 30);
      return `In ${months} Month${months > 1 ? 's' : ''}`;
    }
  };

  const filteredMissions = missions.filter((mission) =>
    mission.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <React.Fragment>
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <h1>Missions</h1>
        <button onClick={() => toggleFormVisibility()}>New Mission</button>
      </div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Name
                <div className="search-container">
                <AiOutlineSearch className="search-icon" />
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="search-input"
                  />
                </div>
              </th>
              <th>Crew Count</th>
              <th>Destination</th>
              <th>Departure Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredMissions && filteredMissions.length > 0 ? (
              filteredMissions.map((mission) => (
                <tr key={mission.id}>
                  <td>{mission.name}</td>
                  <td>{mission.members?.length}</td>
                  <td>{mission.destination}</td>
                  <td>
                    <div>
                      {mission.departureDate}
                      <div style={{ textAlign: 'right'}}>{getStatus(mission.departureDate)}</div>
                      
                    </div>
                    </td>
                  <td>
                    <GrEdit className={'ucedit'} onClick={() => toggleFormVisibility(mission)} />&nbsp;
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5">No missions available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {isFormVisible && (
        <MissionForm handleCloseModal={handleClose} mission={selectedMission} isFormVisible={isFormVisible} />
      )}
    </React.Fragment>
  );
};

export default MissionList;

const styles = {
  // tableContainer: {
  //   marginTop: '20px',
  //   border: '1px solid #ddd',
  //   borderRadius: '8px',
  //   overflow: 'hidden',
  // },
  searchContainer: {
    position: 'relative',
    marginTop: '10px',
    width: '100%',
  },
  searchInput: {
    width: '100%',
    padding: '10px 30px 10px 10px',
    border: 'none',
    borderBottom: '1px solid #ccc',
    outline: 'none',
    fontSize: '16px',
  },
  searchIcon: {
    position: 'absolute',
    top: '50%',
    right: '10px',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    color: '#888',
  },
  // table: {
  //   width: '100%',
  //   borderCollapse: 'collapse',
  // },
  // th: {
  //   textAlign: 'left',
  //   backgroundColor: '#f9f9f9',
  //   padding: '10px',
  //   borderBottom: '1px solid #ddd',
  // },
  // td: {
  //   padding: '10px',
  //   borderBottom: '1px solid #ddd',
  // },
};
