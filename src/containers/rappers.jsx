
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";

import * as myActions from "../actions/rappersActions.js";
import {ArtistList} from "../components/Rappers/ArtistList/ArtistList";
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
  )(ArtistList)
  
  export default RappersContainer;
  
  
  