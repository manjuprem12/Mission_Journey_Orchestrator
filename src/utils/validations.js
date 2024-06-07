export const validateMission = (name, departureDate, members) => {
  const errors = {};
  const jobErrors = {}; // Separate object for job-related errors

  if (!name) errors.name = 'Mission name is required';
  if (!departureDate) errors.departure = 'Departure date is required';

  let pilotCount = 0;
  const engineerJobs = new Set();
  let passengerCount = 0;

  const memberErrors = members.map((member, index) => {
    const memberError = {};

    if (member.type === 'Pilot') {
      pilotCount += 1;
      if (!member.experience || member.experience < 10) {
        memberError.experience = 'Pilot must have at least 10 years of experience';
      }
    }

    if (member.type === 'Engineer') {
      if (!member.job || member.job === "Select job") {
        memberError.job = 'Job is required for Engineer';
      } else if (engineerJobs.has(member.job)) {
        jobErrors.job = 'Each Engineer must have a unique job'; // Store job error in jobErrors
      } else {
        engineerJobs.add(member.job);
      }
    }

    if (member.type === 'Passenger') {
      passengerCount += 1;
      if (!member.age) { 
        memberError.age = 'Age is required for Passenger';
      }
    }

    if (Object.keys(memberError).length > 0) {
      return { ...memberError, index };
    }
    return null;
  }).filter(error => error !== null);

  if (pilotCount !== 1) {
    errors.pilot = 'A mission must have exactly one Pilot';
  }

  if (passengerCount < 1) {
    errors.passenger = 'A mission must have at least one Passenger';
  }

  if (memberErrors.length > 0) {
    errors.members = memberErrors;
  }

  // Combine jobErrors with the main errors object
  return { ...errors, ...jobErrors };
};
