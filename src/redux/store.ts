import {applyMiddleware, compose, createStore, Store} from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';
import IState from './state'

// The initial state of application
const preloadedState = {
    // As we use `combineReducers` to
    // produce the root reducer function,
    // preloaded state must be an object with the same
    // shape as `combineReducers` keys.
    ...reducers,
};

let composed = null;
if (process.env.NODE_ENV === 'production' || !window.navigator.userAgent.includes('Chrome')) {
    composed = compose(
        // For dealing with async actions
        applyMiddleware(reduxThunk)
    );
} else {
    composed = compose(
        // For dealing with async actions
        applyMiddleware(reduxThunk),
        // For redux chrome devtools extension
        (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
    );
}

// Creates a Redux store that holds the state tree.
// There should only be a single store in this app.
export const store: Store<IState> = createStore(
    reducers,
    preloadedState,
    composed
);
