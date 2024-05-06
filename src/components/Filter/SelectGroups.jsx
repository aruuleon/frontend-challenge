import {useState} from 'react';
import groups from '../../database/Groups.json';
import {MenuItem, Select} from '@mui/material';

const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: 50 * 5.1,
      width: 150
    },
  },
}

export const SelectGroups = ({onGroupChange}) => {
  const [selectedGroup, setSelectedGroup] = useState('All');
  
  const handleChange = (event) => {
    setSelectedGroup(event.target.value);
    if (onGroupChange) {
      onGroupChange(event.target.value);
    }
  }

  return (
    <Select
      className='groups-container'
      displayEmpty
      MenuProps={MenuProps}
      value={selectedGroup}
      onChange={handleChange}
      sx={{borderRadius: '10px'}}
      >
        <MenuItem value="All"> All </MenuItem>
        {
          groups.map((group) => (
            <MenuItem key={group} value={group}> Group {group} </MenuItem>
          )
        )}
    </Select>
  );
}