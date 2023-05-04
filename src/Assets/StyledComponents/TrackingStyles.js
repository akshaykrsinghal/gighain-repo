import styled from 'styled-components';

export const Wrapper = styled.div`
    width: 269px;
    height: 100%;
    left: 0px;
    top: 0px;
    background: #3344FF;
    border-radius: 0px 20px 20px 0px
  `;
export const TitleUserWrapper = styled.div`
    display:flex;
    height: 65px;
    left: 27px;
    margin-top: 60px;
  `;
export const TitleUsers = styled.div`
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    color: #FFFFFF;
  `;

export const SubHeading = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 20px;
    line-height: 30px;
    color: #2951D5;
  `;

export const SubMenuWrapper = styled.div`
  display:flex;
  margin-top:40px;
  padding-right:15px;
  gap:24px;
`;

export const SubMenuTitle = styled.div`
  font-family: 'Poppins';
  font-style: normal;
  font-weight: 300;
  font-size: 28px;
  line-height: 42px;
  color: #2E2E2E;
`;

export const SubMenuItems = styled.div`
  margin-left:auto;
  display:flex;
  gap:7px;
`;

export const StyledSelectComponent = styled.select`
  width: 120px;
  height: 40px;
  left: 1118px;
  top: 300px;
  background: #FFFFFF;
  box-shadow: 0px 0px 40px rgba(0, 0, 0, 0.025);
  border-radius: 10px;
  text-align: center;
`;

export const StyledOptionComponent = styled.option`
  
  `;

export const RightWrapper = styled.div`
    text-align:left;
  `;

export const TitleWrapper = styled.div`
    font-style: normal;
    font-weight: 300;
    font-size: 28px;
    line-height: 42px;
    color: #808080;
  `;

// export const SubHeading = styled.div`
//     font-style: normal;
//     font-weight: 400;
//     font-size: 20px;
//     line-height: 30px;
//     color: #2951D5;
//   `;

export const MenuWrapper = styled.div`
    display:flex;
  `;

export const MenuBoxWrapper = styled.div`
    width: 20%;
    height: 121px;
    margin-right:7px;
    ${(props) => props.isActive ? `background: #FFF;color: #000;` : `background: #3344FF; color: #FFF;`}
    box-shadow: 0px 0px 50px rgba(0, 0, 0, 0.025);
    border-radius: 10px;
    text-align:center;
    cursor:pointer;
    padding-top:20px;
  `;

export const MenuTitle = styled.div`
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
  `;

export const MenuIconWraper = styled.div`
  
  `;