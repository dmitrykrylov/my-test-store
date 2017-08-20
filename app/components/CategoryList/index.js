import React, { PropTypes } from 'react';
import styled from 'styled-components';
import { List } from 'semantic-ui-react';


const ListItem = styled(List.Item)`
  cursor: ${(props) => props.active ? 'auto' : 'pointer'};
  fontWeight: ${(props) => props.active ? 'normal' : 'bold'};
  color: ${(props) => props.active ? 'grey' : null};
`;


const CategoryList = (props) => (
  <List relaxed>
    {
      props.categories.map((category, index) => (
        <ListItem
          key={index}
          active={props.activeCategory === category._id}
          onClick={() => props.setActiveCategory(category._id)}
        >
          <List.Icon
            name="remove"
            color="grey"
            style={{ cursor: 'pointer' }}
            onClick={(e) => {
              e.stopPropagation();
              props.openDeleteCategoryModal(category._id);
            }}
          />
          <List.Content>{category.name}</List.Content>
        </ListItem>
      ))
    }
    <ListItem
      active={!props.activeCategory}
      onClick={() => props.setActiveCategory(null)}
    >
      <List.Icon />
      <List.Content>Без категории</List.Content>
    </ListItem>
  </List>
);


CategoryList.propTypes = {
  categories: PropTypes.array,
  activeCategory: PropTypes.string,
  setActiveCategory: PropTypes.func,
};


export default CategoryList;
