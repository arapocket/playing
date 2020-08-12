//Create slice combines creating actions and reducer together
import { createSlice } from "@reduxjs/toolkit";
import { createSelector } from "reselect";

const numberSlice = createSlice({
    name: "numbers",

    //the initial state we start with for this slice
    initialState: {
        numberList: [1, 2, 3]
    },

    //all the reducers for this slice
    //numbers is the state of this slice so its "initialState"
    reducers: {
        addNumber: (numbers, action) => {
            numbers.numberList = [...numbers.numberList, action.payload]
        },
        removeNumber: (numbers, action) => {
            numbers.numberList = action.payload
        }
    }
})

export default numberSlice.reducer;

// //this is the reducer and the action
// const slice = createSlice({
//   name: "bugs",
//   initialState: {
//     list: [],
//     loading: false,
//     lastFetch: null,
//   },
//   reducers: {
//     bugsRequestedFailed: (bugs, action) => {
//       bugs.loading = false;
//     },
//     bugsRequested: (bugs, action) => {
//       bugs.loading = true;
//     },
//     bugsRecieved: (bugs, action) => {
//       bugs.list = action.payload;
//       bugs.loading = false;
//       bugs.lastFetch = Date.now();
//     },
//     bugAdded: (bugs, action) => {
//       bugs.list.push(action.payload);
//     },
//     bugResolved: (bugs, action) => {
//       const { list } = bugs;
//       const index = list.findIndex((bug) => bug.id === action.payload.id);
//       list[index].resolved = true;
//     },
//   },
// });

// const {
//   bugAdded,
//   bugsRecieved,
//   bugsRequested,
//   bugsRequestedFailed,
// } = slice.actions;
// export default slice.reducer;

// //Action Creators
// export const loadBugs = () =>
//   apiCallBegan({
//     url: "https://jsonplaceholder.typicode.com/todos/",
//     onSuccess: bugsRecieved.type,
//     onStart: bugsRequested.type,
//     onRequestFail: bugsRequestedFailed.type,
//   });

// export const addBugs = (bug) =>
//   apiCallBegan({
//     url: "",
//     method: "post",
//     data: bug,
//     onSuccess: bugAdded.type,
//   });
// //selector function with caching system using selector
// export const getUnresolvedBugs = createSelector(
//   (state) => state.bugs,
//   (bugs) => bugs.filter((bug) => !bug.resolved)
// );

// //createAction returns an action in the form of {type:"bugUpdated", payload:{id:"check"}}
// //create action returns a function and if we call it with an object that becomes the payload
// // // const bugAdded = createAction("bugUpdated")({ id: "plor" });
// // export const bugAdded = createAction("bugUpdated");
// // export const bugResolved = createAction("bugResolved");
// // export const bugRemoved = createAction("bugRemoved");

// // export default createReducer([], {
// //   [bugAdded.type]: (state, action) => {},

// //   [bugResolved.type]: (state, action) => {},
// // });
