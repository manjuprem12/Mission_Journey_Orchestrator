import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Button from 'react-bootstrap/Button';
import { useNavigate } from 'react-router-dom';

//React icons
import { GrEdit } from 'react-icons/gr';
import { FcHome } from "react-icons/fc";
import { AiOutlineSearch, AiOutlineDelete } from 'react-icons/ai';
import { IoIosArrowRoundDown, IoIosArrowRoundUp } from "react-icons/io";

//Style
import '../style/MissionList.scss';

//Components
import { deleteMission } from '../state/missionsSlice';
import { formatDateGrid } from '../utils/dateUtils';
import MissionForm from './MissionForm';


const MissionList = () => {
  const missions = useSelector((state) => state.missions);
  const dispatch = useDispatch();

  const [isFormVisible, setFormVisible] = useState(false);
  const [selectedMission, setSelectedMission] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [sortConfig, setSortConfig] = useState({ key: 'members', direction: 'asc' });
  const missionsPerPage = 6;

  const navigate = useNavigate()

  //Event handling for Add and Update button
  const handleMission = (mission = null) => {
    setSelectedMission(mission);
    setFormVisible(!isFormVisible);
  };

  //Event handler for modal closing
  const handleClose = () => {
    setFormVisible(false);
    setSelectedMission(null);
  };

  //Event handler for Search input field
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  //Event handler for Home button to navigate back to home page
  const handleSubmit = () => {
    navigate('/')
  }

  //Event occur during date calculation 
  const getStatus = (departureDate) => {
    const now = new Date();
    const [year, day, month] = departureDate.split('-');
    const departureDay = `${year}-${month}-${day}`;
    const departure = new Date(departureDay);
    const diffTime = departure - now;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    if (diffDays < 0) {
      return { text: <span className='mission-list__danger-text'>Departed</span>, isDeparted: true };
    } else if (diffDays === 0) {
      return { text: <span className='mission-list__text'>Today</span>, isDeparted: false };
    } else if (diffDays === 1) {
      return { text: <span className='mission-list__text'>In 1 Day</span>, isDeparted: false };
    } else if (diffDays < 7) {
      return { text: <span className='mission-list__text'>In {diffDays} Days</span>, isDeparted: false };
    } else if (diffDays < 30) {
      const weeks = Math.ceil(diffDays / 7);
      return { text: <span className='mission-list__text'>In {weeks} Week{weeks > 1 ? 's' : ''}</span>, isDeparted: false };
    } else {
      const months = Math.ceil(diffDays / 30);
      return { text: <span className='mission-list__text'>In {months} Month{months > 1 ? 's' : ''}</span>, isDeparted: false };
    }
  };

  //Event handler for sort functionality
  const handleSortChange = (key) => {
    let direction = 'asc';
    if (sortConfig.key === key && sortConfig.direction === 'asc') {
      direction = 'desc';
    }
    setSortConfig({ key, direction });
  };

  //Sorting event
  const sortMissions = (missions, config) => {
    const sortedMissions = [...missions];
    sortedMissions.sort((a, b) => {
      if (a[config.key].length < b[config.key].length) {
        return config.direction === 'asc' ? -1 : 1;
      }
      if (a[config.key].length > b[config.key].length) {
        return config.direction === 'asc' ? 1 : -1;
      }
      return 0;
    });
    return sortedMissions;
  };

  const filteredMissions = missions.filter((mission) =>
    mission.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const sortedMissions = sortMissions(filteredMissions, sortConfig);
  const indexOfLastMission = currentPage * missionsPerPage;
  const indexOfFirstMission = indexOfLastMission - missionsPerPage;
  const currentMissions = sortedMissions.slice(indexOfFirstMission, indexOfLastMission);
  const totalPages = Math.ceil(filteredMissions.length / missionsPerPage);

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div className='mission-list__container'>
      <div className="mission-list__mission-div">
        <h1>Missions</h1>
        <Button variant="outline-primary" onClick={() => handleMission()}>New Mission</Button>
      </div>
      <div className="mission-list__table-container">
        <table >
          <thead>
            <tr>
              <th>
                <div className="mission-list__search-container">
                  <AiOutlineSearch className="mission-list__search-container__icon" />
                  <input
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                    className="mission-list__search-container__input"
                  />
                </div>
              </th>
              <th onClick={() => handleSortChange('members')}>
                Members {sortConfig.key === 'members' ? (sortConfig.direction === 'asc' ? <IoIosArrowRoundUp /> : <IoIosArrowRoundDown />) : ''}
              </th>
              <th>Destination</th>
              <th>Departure</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {currentMissions && currentMissions.length > 0 ? (
              currentMissions.map((mission) => {
                const status = getStatus(mission.departureDate);
                return (
                  <tr key={mission.id}>
                    <td>{mission.name}</td>
                    <td>{mission.members?.length}</td>
                    <td>{mission.destination}</td>
                    <td>
                      <div>
                        {formatDateGrid(mission.departureDate)}
                        <div>{status.text}</div>
                      </div>
                    </td>
                    <td>
                      {!status.isDeparted && (
                        <>
                          <GrEdit className="mission-list__ucedit" onClick={() => handleMission(mission)} />
                          <AiOutlineDelete
                            className="ucdelete"
                            onClick={() => dispatch(deleteMission(mission.id))}
                          />
                        </>
                      )}
                    </td>
                  </tr>
                );
              })
            ) : (
              <tr>
                <td colSpan="5">No missions available</td>
              </tr>
            )}
          </tbody>
        </table>
        <ul className="mission-list__pagination">
          {Array.from({ length: totalPages }, (_, index) => (
            <li
              key={index}
              onClick={() => paginate(index + 1)}
              className={`mission-list__pagination__item ${currentPage === index + 1 ? 'active' : ''}`}
            >
              {index + 1}
            </li>
          ))}
        </ul>
      </div>
      <FcHome className='mission-list__uchome' onClick={handleSubmit} />
      {isFormVisible && (
        <MissionForm handleCloseModal={handleClose} mission={selectedMission} isFormVisible={isFormVisible} />
      )}
    </div>
  );
};

export default MissionList;