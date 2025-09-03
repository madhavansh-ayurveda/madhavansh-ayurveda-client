import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ConsultationState {
  consultationId: string[] | undefined;
}

const initialState: ConsultationState = {
  consultationId: undefined,
};

const consultationSlice = createSlice({
  name: 'consultation',
  initialState,
  reducers: {
    storeConsultationId: (state, action: PayloadAction<string>) => {
        if (!Array.isArray(state.consultationId)) {
          state.consultationId = [];
        }
        state.consultationId.push(action.payload);
      },
  },
});

export const { storeConsultationId } = consultationSlice.actions;
export default consultationSlice.reducer;
