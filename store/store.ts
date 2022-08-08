import { applyMiddleware, createStore } from 'redux';
// import createSagaMiddleware from 'redux-saga';
// import { persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';

import rootReducer from './rootReducer';
// import rootSaga from './rootSaga';

// const bindMiddleware = middleware => {
//     if (process.env.NODE_ENV !== 'production') {
//         const { composeWithDevTools } = require('redux-devtools-extension');
//         return composeWithDevTools(applyMiddleware(...middleware));
//     }
//     return applyMiddleware(...middleware);
// };

// const persistConfig = {
//     key: 'brandstart',
//     storage,
//     // whitelist: ['cart', 'compare', 'auth', 'wishlist'],
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(
            rootReducer
        );
    


export default store;