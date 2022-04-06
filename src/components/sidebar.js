// sidebar icon
import { ReactComponent as AdminIcon } from '../images/icons/admin.svg'
import { ReactComponent as MessageIcon } from '../images/icons/message.svg'
import { ReactComponent as TimeIcon } from '../images/icons/time.svg'
import { ReactComponent as CheckIcon } from '../images/icons/check.svg'
import { ReactComponent as ScheduleIcon } from '../images/icons/schedule.svg'


import { useState } from "react";
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';;


const Sidebar = () => {
    const sidebarContent =[
      {icon: AdminIcon, title: "Admin", id:1 },
      {icon: CheckIcon, title: "Knowledge Base", id:2 },
      {icon: CheckIcon, title: "Train SAM", id:3 },
      {icon: ScheduleIcon, title: "Agent Inbox", id:4 },
      {icon: TimeIcon, title: "Help Center", id:5 },
      {icon: MessageIcon, title: "Analytics", id:6, subMenu:['Teams','Knowledge Base','Training SAM','Help Center'] }
    ];
    const [open, setOpen] = useState({});
    const showSubMenu = (id) => {
      setOpen((prevState) => ({ ...prevState, [id]: !prevState[id] }));
  };
  return (
    <div className="sidebar h-screen bg-white w-64 border-strok border">
      <div className="border border-stroke rounded-xl m-5 p-2 pl-12 leading-tight">
        <div className="font-bold ">Metacare</div>
        <small className="font-thin">adeyinka@metacare.app</small>
      </div>
      <div>
      <List
      sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', color:'gray' }}
      component="nav"
      aria-labelledby="nested-list-subheader"
     
    >
     {
        sidebarContent.map((items)=>{
        return (
          <div key={items.id}>
            <ListItemButton onClick={()=> showSubMenu(items.id)} >
              <ListItemIcon>
                <items.icon/>
              </ListItemIcon>
              <ListItemText primary={items.title}/>
              {open[items.id] ? <ExpandLess/> : <ExpandMore/>}
            </ListItemButton>
            <Collapse in={open[items.id]} timeout="auto" unmountOnExit>
              <List component="div" sx={{ pl: 7 }} disablePadding>
                <ListItemButton className="pl-4">
                  <ListItemText primary={items.subMenu} />
                </ListItemButton>
              </List>
            </Collapse>
          </div>

        )
        })
     }
    </List>

      </div>
    </div>
  );
};

export default Sidebar;
