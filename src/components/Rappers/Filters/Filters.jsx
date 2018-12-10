import React from 'react';
import PropTypes from 'prop-types'; 
import { InputGroup,  Button,  Menu, MenuItem ,  Popover, MenuDivider} from "@blueprintjs/core";
import { handleStringChange } from "@blueprintjs/docs-theme";
import * as FF from "../constants";

import styles from './Filters.scss';

// 

const buildMenu = (props) => {
  return (
    <Menu>
      <MenuItem text=""  disabled={true} />
      <MenuItem icon="filter" text="Artist Filter">
        <MenuItem 
            text="Active" 
            active={props.showActive}
            disabled={false}
            onClick={() => {
                console.log('click');
                props.appActions.rappersToggleActive();
              }
            } 
          />
        <MenuItem text="Birth Sign"  disabled={true} />
      </MenuItem>
      <MenuItem icon="list-columns" text="View">
        <MenuItem text="Cards" onClick={() => props.appActions.rappersViewMode(FF.VIEW_CARDS)} active={props.viewMode === FF.VIEW_CARDS } />
        <MenuItem text="Table" onClick={() => props.appActions.rappersViewMode(FF.VIEW_TABLE)} active={props.viewMode === FF.VIEW_TABLE }/>
      </MenuItem>
      <MenuItem icon="sort" text="Sort">
        <MenuItem text="Age Decending" onClick={() => props.appActions.rappersSortMode(FF.SORT_AGE_DEC)} active={props.sortMode === FF.SORT_AGE_DEC } />
        <MenuItem text="Age Acending" onClick={() => props.appActions.rappersSortMode(FF.SORT_AGE_ASC)} active={props.sortMode === FF.SORT_AGE_ASC }/>
        <MenuItem text="Name Decending" onClick={() => props.appActions.rappersSortMode(FF.SORT_NAME_DEC)} active={props.sortMode === FF.SORT_NAME_DEC }/>
        <MenuItem text="Name Acending" onClick={() => props.appActions.rappersSortMode(FF.SORT_NAME_ASC)} active={props.sortMode === FF.SORT_NAME_ASC }/>
      </MenuItem>
    
      <MenuDivider />
      <MenuItem icon="refresh" text="Refresh" onClick={() => props.appActions.requestRappers()}/>
  </Menu>
  );
  
}

export class Filters extends React.Component {


  render() {
    const props = this.props;
    const handleFilterChange = handleStringChange(filterValue => props.appActions.searchRappers(filterValue));

    return (
      <div className={styles.container}>
        <InputGroup
          onChange={handleFilterChange}
          leftIcon="search"
          placeholder="Search..."
          type="search"
          value={props.searchFilter}
        />
        <Popover content={buildMenu(props)}>
          <Button icon="cog" />
        </Popover>
      </div>
    )}
};

Filters.propTypes = {
 
}

export default Filters;

/*
      <Button text="Refresh" onClick={() => props.appActions.requestRappers()} />
 <Switch 
        checked={props.showActive} 
        label="Active" 
        style={{marginTop:'6px'}}
        onChange={() => props.appActions.rappersToggleActive()}
      />

*/
