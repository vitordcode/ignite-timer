import { Scroll, Timer } from "phosphor-react";
import { NavLink } from "react-router-dom";
import LogoIgnite from "../../assets/Logo.svg";
import { HeaderContainer } from "./styles";

export function Header() {
	return (
		<HeaderContainer>
			<img src={LogoIgnite} alt="Logo Ignite Timer" />
			<nav>
				<NavLink to="/" title="Timer">
					<Timer size={24} />
				</NavLink>
				<NavLink to="/history" title="Histórico">
					<Scroll size={24} />
				</NavLink>
			</nav>
		</HeaderContainer>
	);
}
