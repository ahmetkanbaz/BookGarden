/* eslint-disable react/prop-types */

import { CustomButton } from "./ButtonStyle";

const Button = ({
  title,
  backgroundcolor,
  borderradius,
  bordervalue,
  textcolor,
  buttonpadding,
  textfontsize,
  hoverbackgroundcolor,
  hovertextcolor,
  buttonClassName,
  buttonOnClick,
  buttonType,
}) => {
  return (
    <CustomButton
      className={buttonClassName}
      backgroundcolor={backgroundcolor}
      borderradius={borderradius}
      bordervalue={bordervalue}
      textcolor={textcolor}
      buttonpadding={buttonpadding}
      textfontsize={textfontsize}
      hoverbackgroundcolor={hoverbackgroundcolor}
      hovertextcolor={hovertextcolor}
      onClick={buttonOnClick}
      type={buttonType}
    >
      {title}
    </CustomButton>
  );
};

export default Button;
