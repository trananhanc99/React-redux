
import thunk from 'redux-thunk';
import myReducers from "reducers";
import { createStore, applyMiddleware, compose } from "redux";
const middleware = [thunk];
const composeEnhancers =
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ ?   
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({
      // Specify extension’s options like name, actionsBlacklist, actionsCreators, serialize...
    }) : compose;
const enhancer = composeEnhancers(
  applyMiddleware(...middleware),
);

export default function configureStore(preloadedState) {
    return createStore(
        myReducers,
        preloadedState,
        enhancer
    )
}
