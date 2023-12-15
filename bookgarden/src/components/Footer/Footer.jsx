import { CustomFooter } from "./FooterStyle";
import { useSelector } from "react-redux";

const Footer = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <CustomFooter className="py-5" theme={theme}>
      <div className="container">
        <p className="text-center mb-0">
          Made by ❤️‍🔥
          <a href="https://github.com/ahmetkanbaz" target="_blank" rel="noreferrer" className="ms-1 fw-semibold fst-italic">
            Ahmet KANBAZ
          </a>
        </p>
      </div>
    </CustomFooter>
  );
};

export default Footer;