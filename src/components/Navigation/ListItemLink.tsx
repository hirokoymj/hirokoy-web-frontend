import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/Inbox';
import { Link } from 'react-router-dom';
//import { useDispatch } from 'react-redux';

interface ListItemLinkProps {
  icon?: React.ReactElement<unknown>;
  text: string;
  to: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  const { icon, text, to, onClick } = props;

  return (
    <ListItemButton component={Link} to={to} onClick={onClick}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export const LeftNaviagtion = () => {
  const handleClick = () => {
    console.log('ListItem clicked!');
    //dispatch(setActiveTab(0))
  };
  return (
    <>
      <List>
        <ListItemLink to="/" text="Weather" icon={<InboxIcon />} />
        <ListItemLink to="/tech/react" text="Tech Links" icon={<InboxIcon />} onClick={handleClick} />
      </List>
      <List>
        <ListItemLink to="/category" text="Create Category" icon={<InboxIcon />} />
        <ListItemLink to="/subCategory" text="Create Subcategory" icon={<InboxIcon />} />
        <ListItemLink to="/topic" text="Create Links" icon={<InboxIcon />} />
      </List>
    </>
  );
};
