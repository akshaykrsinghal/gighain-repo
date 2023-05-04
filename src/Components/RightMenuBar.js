import React from 'react'
import AllocateGigChain from './AllocateGigChain';
import TrackingComponent from './TrackingComponent';
import { ReactSVG } from "react-svg";
import { MenuBoxWrapper, MenuIconWraper, MenuTitle, MenuWrapper, RightWrapper, SubHeading, TitleWrapper } from '../Assets/StyledComponents/TrackingStyles';


function RightMenuBar() {

  const MenuTitleItems = ["Gig Allocation", "Attendence", "Tracking", "Payout", "History"];
  const [selectedMenu, setSelectedMenu] = React.useState(MenuTitleItems[0]);

  const selectedMenuComponent = () =>{
    switch(selectedMenu){
      case MenuTitleItems[0]: return <AllocateGigChain />; 
      case MenuTitleItems[2]: return <TrackingComponent />;
      default: <></>;
    }
  }

  const selectedMenuLogo = (i)=>{
    if(i==="logo-0" && MenuTitleItems[0] === selectedMenu) return <ReactSVG src="../Images/logo-white.svg" />
    if(i==="logo-1" && MenuTitleItems[1] === selectedMenu) return <ReactSVG src="../Images/logo1-white.svg" />
    if(i==="logo-2" && MenuTitleItems[2] === selectedMenu) return <ReactSVG src="../Images/logo2-white.svg" />
    if(i==="logo-3" && MenuTitleItems[3] === selectedMenu) return <ReactSVG src="../Images/logo3-white.svg" />
    if(i==="logo-4" && MenuTitleItems[4] === selectedMenu) return <ReactSVG src="../Images/logo4-white.svg" />

    switch(i){
      case "logo-0": return <ReactSVG src="../Images/logo.svg"  />; 
      case "logo-1": return <ReactSVG src="../Images/logo1.svg" />; 
      case 'logo-2': return <ReactSVG src="../Images/logo2.svg" />; 
      case 'logo-3': return <ReactSVG src="../Images/logo3.svg" />; 
      case 'logo-4': return <ReactSVG src="../Images/logo4.svg" />; 
      default : <></>;
    }
  }

  return (
    <RightWrapper>
      <TitleWrapper>Gig Execution Module with Docker jenkins</TitleWrapper>
      <SubHeading>Allocate Gigs, Track Execution, Track Execution by Giggers</SubHeading>
      <MenuWrapper>
        {
          [0, 1, 2, 3, 4].map((item,index) => {
            return (
            <MenuBoxWrapper key={index} isActive={selectedMenu !== MenuTitleItems[item]} onClick={() => { setSelectedMenu(MenuTitleItems[item]) }} >
                {selectedMenuLogo(`logo-${item}`)}
                <MenuTitle>
                  <MenuIconWraper>
                    {MenuTitleItems[item]}
                  </MenuIconWraper>
                </MenuTitle>
              </MenuBoxWrapper>
            )
          })
        }
      </MenuWrapper>
      {selectedMenuComponent()}

    </RightWrapper>
  )
}

export default RightMenuBar