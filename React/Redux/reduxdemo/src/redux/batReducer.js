const initialState = {
    bats: 20,
    // ball: 23,
    // racquet:34
}

const BatReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'BUY_BAT':
            return { ...state, bats: state.bats - 1 }
        case 'SELL_BAT':
            return {
              ...state,
              bats: state.bats + 1,
            };
        default:
            return state;
    }
}

export default BatReducer