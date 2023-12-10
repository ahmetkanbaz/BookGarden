import homeBannerImage from "../../../assets/bannerImages/homeBannerImage.png";
const HomeBannerImage = () => {
  return (
    <div className="col-lg-6">
      <div className="d-flex justify-content-center align-items-center">
        <img
          src={homeBannerImage}
          alt="Home Image Book"
          className="img-fluid"
        />
      </div>
    </div>
  );
};

export default HomeBannerImage;
