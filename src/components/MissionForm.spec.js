// MissionForm.test.js
import React from 'react';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import MissionForm from './MissionForm';
import { addMission, updateMission } from '../state/missionsSlice';

// Mock the useDispatch hook from react-redux
import { useDispatch } from 'react-redux';
jest.mock('react-redux', () => ({
  ...jest.requireActual('react-redux'),
  useDispatch: jest.fn(),
}));

jest.mock('../state/missionsSlice', () => ({
  addMission: jest.fn(),
  updateMission: jest.fn(),
}));

const renderComponent = (props) => {
  return render(
    <MissionForm {...props} />
  );
};

describe('MissionForm Component', () => {
  const defaultProps = {
    mission: null,
    isFormVisible: true,
    handleCloseModal: jest.fn(),
  };

  it('renders the form correctly', () => {
    renderComponent(defaultProps);
    expect(screen.getByLabelText(/Mission Name/iu)).toBeInTheDocument();
    expect(screen.getByLabelText(/Destination/iu)).toBeInTheDocument();
    expect(screen.getByLabelText(/Departure Date/iu)).toBeInTheDocument();
  });

  it('displays validation errors on form submission', async () => {
    renderComponent(defaultProps);

    fireEvent.click(screen.getByText(/Add Mission/i));

    await waitFor(() => {
      expect(screen.getByText(/Mission name is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Departure date is required/i)).toBeInTheDocument();
    });
  });

  it('adds a new member', () => {
    renderComponent(defaultProps);

    fireEvent.click(screen.getByText(/Add Member/i));

    expect(screen.getAllByLabelText(/Type/i).length).toBe(1);
  });

  it('removes a member', () => {
    const modifiedProps = {
      ...defaultProps,
      mission: {
        name: 'Test Mission',
        members: [{ type: 'Pilot', experience: '10', job: '', age: '', wealth: '' }],
        destination: 'Mars_Alpha_110',
        departureDate: '2023-10-10',
      },
    };

    renderComponent(modifiedProps);

    fireEvent.click(screen.getByTestId('remove-member-0'));

    expect(screen.queryByLabelText(/Experience/i)).not.toBeInTheDocument();
  });

  it('submits the form and dispatches addMission action', async () => {
    renderComponent(defaultProps);

    fireEvent.change(screen.getByLabelText(/Mission Name/i), { target: { value: 'Test Mission' } });
    fireEvent.change(screen.getByLabelText(/Departure Date/i), { target: { value: '2023-10-10' } });
    fireEvent.click(screen.getByText(/Add Mission/i));

    await waitFor(() => {
      expect(addMission).toHaveBeenCalled();
      expect(defaultProps.handleCloseModal).toHaveBeenCalled();
    });
  });

  it('submits the form and dispatches updateMission action', async () => {
    const modifiedProps = {
      ...defaultProps,
      mission: {
        id: 1,
        name: 'Test Mission',
        members: [],
        destination: 'Mars_Alpha_110',
        departureDate: '2023-10-10',
      },
    };

    renderComponent(modifiedProps);

    fireEvent.change(screen.getByLabelText(/Mission Name/i), { target: { value: 'Updated Mission' } });
    fireEvent.click(screen.getByText(/Update Mission/i));

    await waitFor(() => {
      expect(updateMission).toHaveBeenCalled();
      expect(defaultProps.handleCloseModal).toHaveBeenCalled();
    });
  });

  it('updates the member details correctly', () => {
    renderComponent(defaultProps);

    fireEvent.click(screen.getByText(/Add Member/i));

    fireEvent.change(screen.getByLabelText(/Type/i), { target: { value: 'Pilot' } });
    fireEvent.change(screen.getByLabelText(/Experience/i), { target: { value: '10' } });

    expect(screen.getByDisplayValue('Pilot')).toBeInTheDocument();
    expect(screen.getByDisplayValue('10')).toBeInTheDocument();
  });
});
