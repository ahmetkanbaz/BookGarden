import HomeBannerImage from "./HomeBannerImage/HomeBannerImage";
import HomeBannerInfos from "./HomeBannerInfos/HomeBannerInfos";
import { CustomBanner } from "./HomeBannerStyle";
import {useSelector} from 'react-redux'

const HomeBanner = () => {
  const theme = useSelector((state) => state.theme.theme)
  return (
    <CustomBanner theme={theme}>
      <div className="container py-5">
        <div className="row align-items-center">
          <HomeBannerInfos />
          <HomeBannerImage />
        </div>
      </div>
    </CustomBanner>
  );
};

export default HomeBanner;
