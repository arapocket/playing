import { Parent } from "./Parent";
import React from "react";
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import rootReducer from "../redux/reducer";
export default function Home () {
  const store = createStore(rootReducer)
  return (
    <Provider store={store}>
      <Parent></Parent>
    </Provider>
  )

}
