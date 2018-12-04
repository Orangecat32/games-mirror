
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/rappers.js";
import {RapperInfo} from "../components/Rappers/RapperInfo";

function mapStateToProps(state) {
    return {
      ...state.rappers
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
  )(RapperInfo)
  
  export default MemoryGameContainer;
  
  
  