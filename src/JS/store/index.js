import { createStore } from "redux";
import rootReducer from "../Reducers/rootReducer.js";

const store = createStore(rootReducer /* [preloadedState], [enhancer] */); // the arguments putted between [ ] mean that this arguments are optional.

export default store;