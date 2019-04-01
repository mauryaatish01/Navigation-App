import {createStore} from 'redux'

const initialState={
          item:[],
          
}

const reducer=(state=initialState,action)=>{

          switch (action.type){
            case 'ADD_ITEM':
             return {
                 item:[...state.item,action.payload]      
             }
             break;
            default:
             return state 
          }
        
          
        }
export default store = createStore(reducer)        