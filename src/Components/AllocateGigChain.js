import React from 'react';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import AllocateTableComponent from './AllocateTableComponent';
import { StyledOptionComponent, StyledSelectComponent, SubHeading, SubMenuItems, SubMenuTitle, SubMenuWrapper } from '../Assets/StyledComponents/AlocateStyles';


function AllocateGigChain() {
  return (
    <div>
        <SubMenuWrapper>
        <SubMenuTitle>Allocate Gigs To Giggers</SubMenuTitle>
        <SubMenuItems>
        <StyledSelectComponent>
          <StyledOptionComponent>Company</StyledOptionComponent>
        </StyledSelectComponent>
        <StyledSelectComponent>
          <StyledOptionComponent>Invoice ID</StyledOptionComponent>
        </StyledSelectComponent>
        </SubMenuItems>
      </SubMenuWrapper>
      <SubHeading>1023 Unallocated Open Gigs in the system</SubHeading>
      <SubMenuWrapper>
      <FormControlLabel control={<CheckBox />} label="Select All" />
      <SubMenuItems>
      <Button variant="outlined" style={{textTransform: 'none'}}>Auto Assign</Button>
      <Button variant="contained" style={{textTransform: 'none'}}>Approve</Button>
      </SubMenuItems>
      </SubMenuWrapper>
      <AllocateTableComponent />
    </div>
  )
}

export default AllocateGigChain