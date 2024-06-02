
// const dataMission = useSelector((state) => state.missions)
// console.log('dataMission---', dataMission, missionId)

// const mission = useSelector((state) =>
//     state.missions.find((m) => m.id === missionId)
// );

// const crewMember = mission?.crew.find((member) => member.id === crewId);

// const [type, setType] = useState(crewMember ? crewMember.type : 'Pilot');
// const [experience, setExperience] = useState(crewMember ? crewMember.experience : '');
// const [job, setJob] = useState(crewMember ? crewMember.job : '');
// const [age, setAge] = useState(crewMember ? crewMember.age : '');
// const [wealth, setWealth] = useState(crewMember ? crewMember.wealth : '');

 // const handleSubmitCrew = (e) => {
    //     e.preventDefault();
    //     const validationErrors = validateCrewMember(type, experience, job, age, wealth);
    //     if (Object.keys(validationErrors).length === 0) {
    //         const newCrewMember = { type, experience, job, age, wealth };
    //         if (crewId) {
    //             dispatch(updateCrewMember({ missionId, crewId, newCrewMember }));
    //         } else {
    //             dispatch(addCrewMember({ missionId, newCrewMember }));
    //         }
    //         setType('Pilot');
    //         setExperience('');
    //         setJob('');
    //         setAge('');
    //         setWealth('');
    //         setErrors({});
    //     } else {
    //         setErrors(validationErrors);
    //     }
    // };
    // console.log('mission--11111111111', mission)

{/* <button type="submit">{mission ? 'Update' : 'Add'} Mission</button> */ }
{/* <div>
                <label>Type:</label>
                <select value={type} onChange={(e) => setType(e.target.value)}>
                    <option value="Pilot">Pilot</option>
                    <option value="Engineer">Engineer</option>
                    <option value="Passenger">Passenger</option>
                </select>
            </div>
            {type === 'Pilot' && (
                <div>
                    <label>Experience:</label>
                    <input
                        type="number"
                        value={experience}
                        onChange={(e) => setExperience(e.target.value)}
                        required
                    />
                    {errors.experience && <span className="error">{errors.experience}</span>}
                </div>
            )}
            {type === 'Engineer' && (
                <>
                    <div>
                        <label>Experience:</label>
                        <input
                            type="number"
                            value={experience}
                            onChange={(e) => setExperience(e.target.value)}
                            required
                        />
                        {errors.experience && <span className="error">{errors.experience}</span>}
                    </div>
                    <div>
                        <label>Job:</label>
                        <input
                            type="text"
                            value={job}
                            onChange={(e) => setJob(e.target.value)}
                            required
                        />
                        {errors.job && <span className="error">{errors.job}</span>}
                    </div>
                </>
            )}
            {type === 'Passenger' && (
                <>
                    <div>
                        <label>Age:</label>
                        <input
                            type="number"
                            value={age}
                            onChange={(e) => setAge(e.target.value)}
                            required
                        />
                        {errors.age && <span className="error">{errors.age}</span>}
                    </div>
                    <div>
                        <label>Wealth:</label>
                        <input
                            type="number"
                            value={wealth}
                            onChange={(e) => setWealth(e.target.value)}
                            required
                        />
                        {errors.wealth && <span className="error">{errors.wealth}</span>}
                    </div>
                </>
            )} */}


                {/* <div style={{ marginTop: '1em', display: 'flex', alignItems: 'center' }}>
                        <label>Type:</label>
                        <select name="type" value={newMember.type} onChange={handleMemberChange}>
                            <option value="Pilot">Pilot</option>
                            <option value="Engineer">Engineer</option>
                            <option value="Passenger">Passenger</option>
                        </select>
                        {newMember.type === 'Pilot' && (
                            <div>
                                <label>Experience:</label>
                                <input
                                    type="number"
                                    name="experience"
                                    value={newMember.experience}
                                    onChange={handleMemberChange}
                                />
                            </div>
                        )}
                        {newMember.type === 'Engineer' && (
                            <>
                                <div>
                                    <label>Experience:</label>
                                    <input
                                        type="number"
                                        name="experience"
                                        value={newMember.experience}
                                        onChange={handleMemberChange}
                                    />
                                </div>
                                <div>
                                    <label>Job:</label>
                                    <input
                                        type="text"
                                        name="job"
                                        value={newMember.job}
                                        onChange={handleMemberChange}
                                    />
                                </div>
                            </>
                        )}
                        {newMember.type === 'Passenger' && (
                            <>
                                <div>
                                    <label>Age:</label>
                                    <input
                                        type="number"
                                        name="age"
                                        value={newMember.age}
                                        onChange={handleMemberChange}
                                    />
                                </div>
                                <div>
                                    <label>Wealth:</label>
                                    <input
                                        type="number"
                                        name="wealth"
                                        value={newMember.wealth}
                                        onChange={handleMemberChange}
                                    />
                                </div>
                            </>
                        )}
                        <AiOutlineDelete
                            className="ucdelete"
                            onClick={() => handleRemoveMember()}
                            style={{ cursor: "pointer", marginLeft: "1em" }}
                        />
                    </div> */}