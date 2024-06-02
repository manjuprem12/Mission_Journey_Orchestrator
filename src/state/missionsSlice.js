// state/missionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {
    id: 1,
    name: "Expedition 2021-11",
    members: [
      {
        type: 'Pilot',
        experience: '1',
        job: '',
        age: '',
        wealth: ''
      },
      {
        type: 'Engineer',
        experience: '5',
        job: 'IT',
        age: '',
        wealth: ''
      },
      {
        type: 'Engineer',
        experience: '6',
        job: 'Analyst',
        age: '',
        wealth: ''
      },
      {
        type: 'Engineer',
        experience: '7',
        job: 'Developer',
        age: '',
        wealth: ''
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '10',
        wealth: '1000'
      }
    ],
    destination: "Mars Alpha-116",
    departureDate: "22/05/2024",
    
  },
  {
    id: 2,
    name: "Expedition 2021-10",
    members: [
      {
        type: 'Pilot',
        experience: '1',
        job: '',
        age: '',
        wealth: ''
      },
      {
        type: 'Pilot',
        experience: '10',
        job: '',
        age: '',
        wealth: ''
      },
      {
        type: 'Engineer',
        experience: '5',
        job: 'IT',
        age: '',
        wealth: ''
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '10',
        wealth: '1000'
      }
    ],
    destination: "Mars Alpha-220",
    departureDate: "6/06/2024"
  },
  {
    id: 3,  // Fixed duplicate ID
    name: "Expedition 2022-05",  // Fixed year
    members: [
      {
        type: 'Engineer',
        experience: '5',
        job: 'IT',
        age: '',
        wealth: ''
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '10',
        wealth: '1000'
      }
    ],
    destination: "Mars Alpha-116",
    departureDate: "15/09/2024"
  },
  {
    id: 4,  // Fixed duplicate ID
    name: "Expedition 2021-12",
    members: [
      {
        type: 'Pilot',
        experience: '1',
        job: '',
        age: '',
        wealth: ''
      },
      {
        type: 'Engineer',
        experience: '5',
        job: 'IT',
        age: '',
        wealth: ''
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '10',
        wealth: '1000'
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '50',
        wealth: '1050'
      }
    ],
    destination: "Mars Alpha-224",
    departureDate: "13/06/2024"
  },
  {
    id: 5,  // Fixed duplicate ID
    name: "Expedition 2022-01",  // Fixed month and year
    members: [
      {
        type: 'Pilot',
        experience: '1',
        job: '',
        age: '',
        wealth: ''
      },
      {
        type: 'Engineer',
        experience: '5',
        job: 'IT',
        age: '',
        wealth: ''
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '10',
        wealth: '1000'
      },
      {
        type: 'Engineer',
        experience: '2',
        job: 'Mech',
        age: '',
        wealth: ''
      },
      {
        type: 'Passenger',
        experience: '',
        job: '',
        age: '30',
        wealth: '2000'
      }
    ],
    destination: "Mars Alpha-220",
    departureDate: "10/05/2024"
  },
  {
    id: 6,  // Fixed duplicate ID
    name: "Expedition 2021-08",
    members: [],
    destination: "Mars Alpha-110",
    departureDate: "01/08/2024"
  }
];

// const missionsSlice = createSlice({
//   name: 'missions',
//   initialState,
//   reducers: {
//     addMission: (state, action) => {
//       state.push({ ...action.payload, id: Date.now(), crew: [] });
//     },
//     updateMission: (state, action) => {
//         console.log('hiii edit', action)
//       const { id, name, departureDate } = action.payload;
//       const mission = state.find((m) => m.id === id);
//       console.log('mission----!!!!!!!11', mission)
//       if (mission) {
//         mission.name = name;
//         mission.departureDate = departureDate;
//       }
//     },
//     deleteMission: (state, action) => {
//       return state.filter((mission) => mission.id !== action.payload);
//     },
//     addCrewMember: (state, action) => {
//       const { missionId, newCrewMember } = action.payload;
//       const mission = state.find((m) => m.id === missionId);
//       if (mission) {
//         mission.crew.push({ ...newCrewMember, id: Date.now() });
//       }
//     },
//     updateCrewMember: (state, action) => {
//       const { missionId, crewId, newCrewMember } = action.payload;
//       const mission = state.find((m) => m.id === missionId);
//       if (mission) {
//         const memberIndex = mission.crew.findIndex((member) => member.id === crewId);
//         if (memberIndex > -1) {
//           mission.crew[memberIndex] = { ...newCrewMember, id: crewId };
//         }
//       }
//     }
//   }
// });

const missionsSlice = createSlice({
  name: 'missions',
  initialState,
  reducers: {
    addMission: (state, action) => {
      state.push(action.payload);
    },
    updateMission: (state, action) => {
      const { id, name, members, destination, departureDate } = action.payload;
      const existingMission = state.find((mission) => mission.id === id);
      if (existingMission) {
        existingMission.name = name;
        existingMission.members = members;
        existingMission.destination = destination;
        existingMission.departureDate = departureDate;
      }
    },
    removeMission: (state, action) => {
      return state.filter((mission) => mission.id !== action.payload);
    },
  },
});


export const {
  addMission,
  updateMission,
  deleteMission,
  addCrewMember,
  updateCrewMember
} = missionsSlice.actions;

export default missionsSlice.reducer;
