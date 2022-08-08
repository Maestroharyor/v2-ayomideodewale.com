export const actionTypes = {
    OPEN_MODAL: 'OPEN_MODAL',
    CLOSE_MODAL: 'CLOSE_MODAL'
    
};

export function openSearchModal() {
    return { type: actionTypes.OPEN_MODAL};
}


export function closeSearchModal(){
    return {type: actionTypes.CLOSE_MODAL}
}