import React from 'react';
import MissionList from './components/MissionList';
// import MissionForm from './components/MissionForm';
// import CrewForm from './components/CrewForm';
import './styles.css';
import store from './Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <Provider store={store}>
    <div className="app-container">
      <h1>Mission Control</h1>
      <div className="content">
        <div className="missions">
          <MissionList />
        </div>
        {/* <div className="forms">
          <MissionForm />
          <CrewForm missionId={1} />
        </div> */}
      </div>
    </div>
    </Provider>
  );
  // return (
  //   <div className="App">
  //     <p>React App</p>
  //     <Mission />
  //   </div>
  // );
}

export default App;

// import React, { useState } from 'react';
// import MissionList from './components/MissionList';
// import MissionForm from './components/MissionForm';
// import CrewManagement from './components/CrewManagement';
// import { mockMissions } from './mockData';

// function App() {
//   const [missions, setMissions] = useState(mockMissions);
//   const [selectedMission, setSelectedMission] = useState(null);

//   const handleAddMission = (mission) => {
//     setMissions([...missions, mission]);
//   };

//   const handleEditMission = (updatedMission) => {
//     setMissions(missions.map(m => (m.id === updatedMission.id ? updatedMission : m)));
//   };

//   return (
//     <div className="app">
//       <MissionList
//         missions={missions}
//         setSelectedMission={setSelectedMission}
//       />
//       <MissionForm
//         onAddMission={handleAddMission}
//         onEditMission={handleEditMission}
//         selectedMission={selectedMission}
//       />
//       {selectedMission && (
//         <CrewManagement mission={selectedMission} setMissions={setMissions} />
//       )}
//     </div>
//   );
// }

// export default App;

