import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import { Box } from '@mui/system';
import { deepPurple } from '@mui/material/colors';

const ProfileSection = ({ handleLogout }) => {
  const { user } = useSelector((state) => state.auth);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    handleLogout();
  };

  return (
    <div>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Avatar sx={{ bgcolor: deepPurple[500], color: '#fff' }} onClick={handleClick}>
          {user?.username?.[0]}
        </Avatar>
        {user?.username}
      </Box>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button'
        }}
      >
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
  );
};

export default ProfileSection;
