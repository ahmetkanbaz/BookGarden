import HomeBannerImage from "./HomeBannerImage/HomeBannerImage";
import HomeBannerInfos from "./HomeBannerInfos/HomeBannerInfos";
import { CustomBanner } from "./HomeBannerStyle";
const HomeBanner = () => {
  return (
    <CustomBanner>
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
