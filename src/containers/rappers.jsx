
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/rappersActions.js";
import {RapperInfo} from "../components/Rappers/ArtistList/RapperInfo";
import {filteredArtists} from "../reducers/rappersReducer";

export function mapStateToProps(state) {
    return {
      ...state.rappers,
      filteredArtists: filteredArtists(state)
    };
  }
  
 export function mapDispatchToProps(dispatch) {
    return {
      appActions: bindActionCreators(myActions, dispatch)
    };
  }


  
const RappersContainer = connect(
    mapStateToProps,
    mapDispatchToProps
  )(RapperInfo)
  
  export default RappersContainer;
  
  
  