import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  userList: [
    { id: 1, name: "John Doe", email: "john.doe@example.com" },
    { id: 2, name: "Jane Smith", email: "jane.smith@example.com" },
    { id: 3, name: "Michael Johnson", email: "michael.johnson@example.com" },
    { id: 4, name: "Chris Evans", email: "chris.evans@example.com" },
    { id: 5, name: "Emily Davis", email: "emily.davis@example.com" },
    { id: 6, name: "David Brown", email: "david.brown@example.com" },
    { id: 7, name: "Olivia Garcia", email: "olivia.garcia@example.com" },
    { id: 8, name: "Daniel Wilson", email: "daniel.wilson@example.com" },
    { id: 9, name: "Sophia Moore", email: "sophia.moore@example.com" },
    { id: 10, name: "James Taylor", email: "james.taylor@example.com" },
  ],
};

const userSlice = createSlice({
  name: "users",
  initialState,
  reducers: {},
});

export const selectUsers = (state) => state.users.userList;

export default userSlice.reducer;
