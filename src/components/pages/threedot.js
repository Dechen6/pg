import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import axios from 'axios'

const ITEM_HEIGHT = 48;

export default function LongMenu(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

 const edit = () => {
      console.log(props.id)
  };

  const deletedata = () => {
    var url = "https://pg-backend-server.herokuapp.com/api/CandidateDataDelete/"+props.id;
    var r = window.confirm("Are you sure? Data cannot be reverted");
    if (r == true) {
      axios
      .delete(`${url}`)
      .then(() => {
        alert("Post deleted!");
        window.location.reload();
      });
    } 
};
  return (
    <div>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls="long-menu"
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        <MenuItem onClick={edit}>
            Edit
          </MenuItem>
          <MenuItem onClick={deletedata}>
            Delete
          </MenuItem>
      </Menu>
    </div>
  );
}
