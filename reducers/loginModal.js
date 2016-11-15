function loginModalShow( state = false, action ){
  switch (action.type){
    case "TOGGLE_LOGIN_MODAL":
      return action.visibility;
      break;
    default:
      return state;
      break;
  }
}

export { loginModalShow }