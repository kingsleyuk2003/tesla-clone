import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cars: ["Model S", "Model 3", "Model X", "Model Y"],
};
const carSlice = createSlice({
  name: "car",
  initialState,
  reducers: {},
});

console.log("THIS IS STATE: ", createSlice.state); 

export const selectCars = (state) => {return  state.car.cars;}
export default carSlice.reducer;
