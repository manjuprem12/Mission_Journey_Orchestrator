import { createSlice } from '@reduxjs/toolkit';
import MockData  from './MockData.json'

const initialState = MockData

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
    deleteMission: (state, action) => {
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
