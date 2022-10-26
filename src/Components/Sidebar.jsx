import React from 'react'
import './Sidebar.css'
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './ui/SidebarOption';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';


function Sidebar() {
  return (
    <div className='sidebar'>
        <TwitterIcon />

        <SidebarOption Icon={HomeIcon} text='Home' />
        <SidebarOption Icon={SearchIcon} text='Home' />
        <SidebarOption Icon={NotificationsNoneIcon} text='Home'/>
        {/* <SidebarOption Icon={} text='Home' />
        <SidebarOption Icon={} text='Home' />
        <SidebarOption Icon={} text='Home' /> */}
    </div>
  )
}

export default Sidebar