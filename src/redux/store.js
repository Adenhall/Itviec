import { createStore } from "redux";

const initialstate = {
    user:{email:'',password:'',isAuthenticated:false}
  }
  
  function reducer (state=initialstate,action){
    if(action.type==='LOGIN'){
      state.user = action.payload
      state.user.isAuthenticated = true;
    }
    if (action.type === "LOGOUT") {
      state.user.email = null
      state.user.password = null
      state.user.isAuthenticated = false
    }
    return state
  
  }

  const store = createStore(reducer);
  
  export default store