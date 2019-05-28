const initialState = {
    results: []
  };
  
  const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'STORE_RESULT' :
          return {
            ...state,
            // Update array ummutably with concat
            results: state.results.concat({id: new Date(), value: action.result})
          }
      }
      return state;
  };
  
  export default reducer;
  