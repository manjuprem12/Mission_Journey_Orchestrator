// utils/validations.js
// export const validateMission = (name, departureDate, newMember) => {
//   const errors = {};
//   if (!name) errors.name = 'Mission name is required';
//   if (!departureDate) errors.departureDate = 'Departure date is required';

//   if (newMember.type === 'Pilot' && (!newMember.experience || newMember.experience < 10)) {
//     errors.experience = 'Pilot must have at least 10 years of experience';
//   }
//   if (newMember.type === 'Engineer' && !newMember.job) {
//     errors.job = 'Job is required for Engineer';
//   }
//   if (newMember.type === 'Passenger') {
//     if (!newMember.age) errors.age = 'Age is required for Passenger';
//     if (!newMember.wealth) errors.wealth = 'Wealth is required for Passenger';
//   }
//   return errors;
// };

// validations.js
export const validateMission = (name, departureDate, members) => {
  const errors = {};
  if (!name) errors.name = 'Mission name is required';
  if (!departureDate) errors.departure = 'Departure date is required';

  const memberErrors = members.map((member, index) => {
    const memberError = {};
    if (member.type === 'Pilot' && (!member.experience || member.experience < 10)) {
      memberError.experience = 'Pilot must have at least 10 years of experience';
    }
    if (member.type === 'Engineer' && !member.job) {
      memberError.job = 'Job is required for Engineer';
    }
    if (member.type === 'Passenger') {
      if (!member.age) memberError.age = 'Age is required for Passenger';
      if (!member.wealth) memberError.wealth = 'Wealth is required for Passenger';
    }
    return Object.keys(memberError).length > 0 ? memberError : null;
  }).filter(error => error !== null);

  if (memberErrors.length > 0) {
    errors.members = memberErrors;
  }

  return errors;
};
