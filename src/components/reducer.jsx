import SharedReducer from 'shared-reducer-hooks';
const initialState = {
    phrase:'',
};
const [mapState, dispatch] = SharedReducer((state = initialState, action) => {
    switch(action.type) {
        case 'phrase':
            return { ...state, phrase: action.str };
        default:
            return state;
    }
});
export const usePhrase = mapState((state) => state.phrase);


export const phraseAction = (ph) => dispatch({ type: 'phrase' ,str:ph});