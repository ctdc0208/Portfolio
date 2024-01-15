import { Link } from "react-scroll";
import { useEffect, useMemo } from "react";
import { useMediaQuery } from "react-responsive";
import createPersistedState from "use-persisted-state";
import Toggle from "react-toggle";

const useColorSchemeState = createPersistedState("colorScheme");

function useColorScheme() {
  const systemPrefersDark = useMediaQuery(
    {
      query: "(prefers-color-scheme: dark)",
    },
    undefined
  );

  const [isDark, setIsDark] = useColorSchemeState();
  const value = useMemo(
    () => (isDark === undefined ? !!systemPrefersDark : isDark),
    [isDark, systemPrefersDark]
  );

  useEffect(() => {
    if (value) {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [value]);

  return {
    isDark: value,
    setIsDark,
  };
}


export default function Header() {
    const { isDark, setIsDark } = useColorScheme();
    return (
        <div className="sticky-header">
            <div className="header-container box-shadow">
                <div className="header-name font-700">Christian.dev</div>
                <div className="header-buttons-container">
                    <Toggle
                        checked={isDark}
                        onChange={({ target }) => setIsDark(target.checked)}
                        icons={{ checked: "🌙", unchecked: "🔆" }}
                        aria-label="Dark mode toggle"
                    />
                    <div className="button-navbar-container">
                        <Link activeClass="active" className="button-header .font-400" to="home" spy={true} smooth={true} offset={-250} duration={500}>
                            Home
                        </Link>
                        <Link activeClass="active" className="button-header .font-400" to="about" spy={true} smooth={true} offset={-225} duration={500}>
                            About
                        </Link>
                        <Link activeClass="active" className="button-header .font-400" to="projects" spy={true} smooth={true} offset={-120} duration={500}>
                            Project
                        </Link>
                        <Link activeClass="active" className="button-header .font-400" to="contact" spy={true} smooth={true} offset={0} duration={500}>
                            Contact
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}