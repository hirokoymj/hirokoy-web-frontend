import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import List from '@mui/material/List';
import InboxIcon from '@mui/icons-material/Inbox';
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined';
import MmsOutlinedIcon from '@mui/icons-material/MmsOutlined';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { Theme } from '@mui/material/styles';

// import { useAppDispatch } from '../../redux/hooks';
// import { resetActiveTab } from '../../redux/techTab/techTabSlice';

const useStyles = makeStyles()((theme: Theme) => ({
  icon: {
    color: 'rgba(0, 0, 0, 0.8)',
    minWidth: '40px',
  },
  listButton: {
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
    },
  },
}));

interface ListItemLinkProps {
  icon?: React.ReactElement<unknown>;
  text: string;
  to: string;
  onClick?: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

const ListItemLink: React.FC<ListItemLinkProps> = (props) => {
  const { icon, text, to, onClick } = props;
  const { classes } = useStyles();
  //const dispatch = useAppDispatch();

  return (
    <ListItemButton component={Link} to={to} onClick={onClick} classes={{ root: classes.listButton }}>
      {icon ? <ListItemIcon>{icon}</ListItemIcon> : null}
      <ListItemText primary={text} />
    </ListItemButton>
  );
};

export const LeftNaviagtion = () => {
  const handleClick = () => {
    //dispatch(() => resetActiveTab);
  };

  return (
    <>
      <List>
        <ListItemLink to="/tech/react" text="Tech Topics" icon={<InboxIcon />} onClick={handleClick} />
      </List>
      <Divider />
      <List>
        <ListItemLink to="/category" text="Create Category" icon={<InboxIcon />} />
        <ListItemLink to="/subCategory" text="Create Subcategory" icon={<InboxIcon />} />
        <ListItemLink to="/topic" text="Create Link" icon={<InboxIcon />} />
      </List>
      <Divider />
      <List>
        <ListItemLink to="/weather/dallas" text="Weather" icon={<CloudOutlinedIcon />} />
      </List>
      <Divider />
      <List>
        <ListItemLink to="/ai" text="AI demo" icon={<MmsOutlinedIcon />} />
      </List>
      <Divider />
    </>
  );
};
