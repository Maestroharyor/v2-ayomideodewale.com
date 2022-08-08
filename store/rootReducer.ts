import { combineReducers } from 'redux';
import theme from './theme/reducer';
import modal from './modal/reducer';

export default combineReducers({
    theme,
    modal
});
