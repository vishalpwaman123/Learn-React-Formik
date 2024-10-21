import { createStore } from "redux";
import CounterRedux from "./counter/CounterReducer";

const store = createStore(CounterRedux);

export default store;
