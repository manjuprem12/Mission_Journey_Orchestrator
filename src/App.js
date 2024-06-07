import React from 'react';
import MissionList from './components/MissionList';
// import MissionForm from './components/MissionForm';
// import CrewForm from './components/CrewForm';
import './App.scss';
import store from './Store';
import { Provider } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { Routes, Route } from "react-router-dom"

function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <h1>Mission Control</h1> */}
        {/* <div className="content"> */}
            <Routes>
              <Route
                exact
                path="/"
                element={
                  <Home />
                }
                
              > </Route>
              <Route
                exact
                path="/Mission_List"
                element={
                  <MissionList />
                }
                
              > </Route>
            </Routes>
          {/* <div className="forms">
          <MissionForm />
          <CrewForm missionId={1} />
        </div> */}
        </div>
      {/* </div> */}
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

