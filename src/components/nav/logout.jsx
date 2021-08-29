import styled from 'styled-components';
import LogoutIcon from 'assets/icons/Logout.svg';

const LogoutStyled = styled.button`
  color: white;
  display: flex;
  align-items: center;
  box-shadow: var(--shadow);
  justify-content: center;
  width: 90%;
  background-color: rgba(255, 255, 255, 0.2) !important;
  border-radius: 6px;
  height: 50px;
  position: absolute;
  bottom: 60px;
  font-weight: bold;

  .logout-icon {
    position: absolute;
    left: 20px;
    top: 12px;
  }

  transition: opacity .1s ease-in;
  :hover {
    opacity: .5;
  }

  -webkit-box-shadow: 0px 5px 7px 1px rgba(86,108,214,0.15);
  -moz-box-shadow: 0px 5px 7px 1px #33428d26;
  box-shadow: 0px 5px 7px 1px rgba(86,108,214,0.15);
  text-shadow: 0px 5px 7px 1px rgba(86,108,214,0.15);
`;
const Logout = () => (
  <LogoutStyled>
    <div className="logout-icon">
      <img src={LogoutIcon} alt="icon" />
    </div>
    <div className="button-text">
      LOG OUT
    </div>
  </LogoutStyled>
);

export default Logout;
