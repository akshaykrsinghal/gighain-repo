import React from 'react'
import { TitleUserWrapper } from '../Assets/StyledComponents/TrackingStyles';
import { TitleUsers, Wrapper } from '../Assets/StyledComponents/TrackingStyles';

function LeftMenuBar() {
  
  return (
    <Wrapper>
        <TitleUserWrapper>
            <img src='../Images/logo.png'/>
        </TitleUserWrapper>
        <TitleUsers>
            Admin Consoles
        </TitleUsers>
    </Wrapper>
  )
}

export default LeftMenuBar