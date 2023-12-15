import AboutAuthorImage from "./AboutAuthorImage/AboutAuthorImage";
import AboutAuthorInfos from "./AboutAuthorInfos/AboutAuthorInfos";
import { AboutAuthorWrapper } from "./AboutAuthorStyle";
import { useSelector } from "react-redux";

const AboutAuthor = () => {
  const theme = useSelector((state) => state.theme.theme);
  return (
    <AboutAuthorWrapper className="py-5" theme={theme}>
      <div className="container">
        <h6 className="text-center">LEARN ABOUT THE BOOK WRITER</h6>
        <h4 className="text-center text-uppercase mt-3">About Author</h4>
        <div className="row mt-5">
          <AboutAuthorImage />
          <AboutAuthorInfos />
        </div>
      </div>
    </AboutAuthorWrapper>
  );
};

export default AboutAuthor;
