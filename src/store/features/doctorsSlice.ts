import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Doctor } from '@/types';

interface DoctorsState {
  doctors: Doctor[];
  isLoading: boolean;
  error: string | null;
  lastFetched: number | null;
}

const initialState: DoctorsState = {
  doctors: [],
  isLoading: false,
  error: null,
  lastFetched: null,
};

// const CACHE_DURATION = 5 * 60 * 1000; // 5 minutes in milliseconds

const doctorsSlice = createSlice({
  name: 'doctors',
  initialState,
  reducers: {
    fetchDoctorsStart: (state) => {
      state.isLoading = true;
      state.error = null;
    },
    fetchDoctorsSuccess: (state, action: PayloadAction<Doctor[]>) => {
      state.isLoading = false;
      state.doctors = action.payload;
      state.error = null;
      state.lastFetched = Date.now();
    },
    fetchDoctorsFailure: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.error = action.payload;
    },
    updateDoctor: (state, action: PayloadAction<Doctor>) => {
      const index = state.doctors.findIndex(doc => doc._id === action.payload._id);
      if (index !== -1) {
        state.doctors[index] = action.payload;
      }
    },
    clearDoctorsCache: (state) => {
      state.doctors = [];
      state.lastFetched = null;
    },
  },
});

export const {
  fetchDoctorsStart,
  fetchDoctorsSuccess,
  fetchDoctorsFailure,
  updateDoctor,
  clearDoctorsCache,
} = doctorsSlice.actions;

export default doctorsSlice.reducer; 