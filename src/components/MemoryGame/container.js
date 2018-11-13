
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../../actions/memoryGame.js";
import {MemoryGame} from "./MemoryGame.js";

function mapStateToProps(state) {
    console.log('mem map')
    return {
      ...state.memoryGame,
      color: 'blue'
    };
  }
  
  function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const MemoryGameContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(MemoryGame)
  
  export default MemoryGameContainer;
  
  
  