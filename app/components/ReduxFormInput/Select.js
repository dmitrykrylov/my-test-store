import React, { PropTypes } from 'react';
import { Select } from 'semantic-ui-react';


const ReduxFormSelect = (props) => (
  <Select
    value={props.input.value}
    options={props.options}
    placeholder={props.placeholder}
    onChange={(event, data) => props.input.onChange(data.value)}
  />
);


ReduxFormSelect.propTypes = {
  input: PropTypes.object,
  options: PropTypes.array,
  placeholder: PropTypes.string,
};


export default ReduxFormSelect;
