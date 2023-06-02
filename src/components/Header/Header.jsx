import Logo from "../../assets/Nu Kenzie.svg";
import { StyledHeader } from "./styles";

const Header = () => {
  return (
    <StyledHeader>
      <div>
        <img src={Logo} alt="NuKenzie Logo" />
      </div>
    </StyledHeader>
  );
};

export default Header;
