// eslint-disable-next-line import/no-anonymous-default-export
export default (state, action) => {
  switch (action.type) {
    case "SET_ACTIVE_QUESTION":
      return {
        ...state,
        activeQuestion: action.payload.activeQuestion,
      };

    case "SET_RESULT":
      return {
        ...state,
        result: action.payload.result,
      };

    case "SET_ANSWER1":
      return {
        ...state,
        answer1: action.payload.answer1,
      };

    case "SET_LOADING":
      return {
        ...state,
        loading: action.payload.loading,
      };

    case "SET_TOTAL_PRICE":
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
      };

    default:
      return state;
  }
};
