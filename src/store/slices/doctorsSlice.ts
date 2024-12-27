import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { doctorsApi } from '../../api/doctorsApi'; // Adjust the import based on your API setup
import { Doctor } from '@/types';

interface DoctorsState {
    doctors: Doctor[];
    loading: boolean;
    error: string | null;
}



const initialState: DoctorsState = {
    doctors: [],
    loading: false,
    error: null,
};

// Async thunk for fetching doctors
export const fetchDoctors = createAsyncThunk('doctors/fetchDoctors', async () => {
    const response = await doctorsApi.getAllActiveDoctors(); // Adjust the API call as needed
    return response.data;
});

const doctorsSlice = createSlice({
    name: 'doctors',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchDoctors.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchDoctors.fulfilled, (state, action) => {
                state.loading = false;
                console.log(action.payload);
                state.doctors = (action.payload as any).doctors as Doctor[];
            })
            .addCase(fetchDoctors.rejected, (state, action) => {
                state.loading = false;
                state.error = action.error.message || 'Failed to fetch doctors';
            });
    },
});

export default doctorsSlice.reducer; 