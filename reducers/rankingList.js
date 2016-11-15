var initialState = {
  rank_type:"TODAY",
  ranking_list:[],
}

function ranking_list(state = initialState.ranking_list , action){
  switch (action.type){
    case "RENDER_RANKING_LIST":
      return action.ranking_list;
      break;
    default:
      return state;
      break;
  }
}

function rank_type(state = initialState.rank_type , action){
  switch (action.type){
    case "TOGGLE_RANKING_LIST_TYPE":
      return action.code;
      break;
    default:
      return state;
      break;
  }
}

export { rank_type,ranking_list }