import React from 'react';
import CheckBox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Button } from '@mui/material';
import { LocationOnOutlined } from '@mui/icons-material';
import { StyledOptionComponent, StyledSelectComponent, SubHeading, SubMenuItems, SubMenuTitle, SubMenuWrapper } from '../Assets/StyledComponents/TrackingStyles';
import TrackingTableComponent from './TrackingTableComponent';


function TrackingComponent() {

  return (
    <div>
        <SubMenuWrapper>
        <SubMenuTitle>Track Gigs To Completion</SubMenuTitle>
        <Button variant="contained" startIcon={<LocationOnOutlined />}>View Map</Button>
        <SubMenuItems>
        <StyledSelectComponent>
          <StyledOptionComponent>Company</StyledOptionComponent>
        </StyledSelectComponent>
        <StyledSelectComponent>
          <StyledOptionComponent>Invoice ID</StyledOptionComponent>
        </StyledSelectComponent>
        <StyledSelectComponent>
            <StyledOptionComponent>Gigger</StyledOptionComponent>
        </StyledSelectComponent>
        <StyledSelectComponent>
            <StyledOptionComponent>Status</StyledOptionComponent>
        </StyledSelectComponent>
        </SubMenuItems>
      </SubMenuWrapper>
      <SubHeading>1023 Unallocated Open Gigs in the system</SubHeading>
      <SubMenuWrapper>
      <FormControlLabel control={<CheckBox />} label="Select All" />
      <SubMenuItems>
      <Button variant="outlined" style={{textTransform: 'none'}}>Admin Verified</Button>
      <Button variant="outlined" style={{textTransform: 'none'}}>Generate Report</Button>
      <Button variant="contained" style={{textTransform: 'none'}}>Client Verified</Button>
      </SubMenuItems>
      </SubMenuWrapper>
      <TrackingTableComponent />
    </div>
  )
}

export default TrackingComponent