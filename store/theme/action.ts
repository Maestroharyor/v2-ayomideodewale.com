export const actionTypes = {
    SET_DARK_MODE: 'SET_DARK_MODE',
    SET_LIGHT_MODE: 'SET_LIGHT_MODE'
    
};

export function setDarkModeTheme() {
    return { type: actionTypes.SET_DARK_MODE};
}


export function setLightModeTheme(){
    return {type: actionTypes.SET_LIGHT_MODE}
}