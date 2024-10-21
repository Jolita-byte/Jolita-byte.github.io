import React from "react";

import axios from "axios";
import { Jumbotron } from "./migration";

const pictureLinkRegex = new RegExp(
  /[(http(s)?):(www.)?a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)/
);

const AboutMe = ({ heading, message, link, imgSize, resume }) => {
  const [profilePicUrl, setProfilePicUrl] = React.useState("");
  const [showPic, setShowPic] = React.useState(Boolean(link));
 // https://stackoverflow.com/questions/55840294/how-to-fix-missing-dependency-warning-when-using-useeffect-react-hook
  // Function to handle image fetching
  const handleRequest = async () => {
    const instaLink = "https://www.instagram.com/";
    const instaQuery = "/?__a=1";
    try {
      const response = await axios.get(instaLink + link + instaQuery);
      setProfilePicUrl(response.data.graphql.user.profile_pic_url_hd);
    } catch (error) {
      setShowPic(false);
      console.error(error.message);
    }
  };

  React.useEffect(() => {
    // Function to determine image size based on screen width (optional)
    const getImageSize = () => {
      if (window.innerWidth < 768) { // Small screen
        return { width: 100, height: 100 };
      } else if (window.innerWidth < 992) { // Medium screen
        return { width: 150, height: 150 };
      } else { // Large screen
        return { width: imgSize || 200, height: imgSize || 200 }; // Use default if no imgSize provided
      }
    };

    if (link && !pictureLinkRegex.test(link)) {
      handleRequest();
    } else {
      setProfilePicUrl(link);
    }

    // Set the image size on initial render and on resize events
    const handleResize = () => {
      const newImgSize = getImageSize();
      newImgSize(newImgSize);
    };

    window.addEventListener('resize', handleResize);
    handleResize(); // Initial adjustment

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [link, imgSize]); // Dependency array includes link and imgSize

  return (
    <Jumbotron id="aboutme" className="m-0">
      <div className="container row">
        <div className="col-lg-12">
          <h2 className="display-4 mb-5 text-center">{heading}</h2>
        </div>
      </div>
      <div className="container row">
        <div className="col-lg-5">
          {showPic && (
            <img
              className="img-fluid border border-secondary rounded-circle mx-auto"
              src={profilePicUrl}
              alt="profilepicture"
              width={imgSize.width}
              height={imgSize.height}
            />
          )}
        </div>
        <div className="col-lg-7">
          <p className="lead text-center">{message}</p>
          {resume && (
            <p className="lead text-center">
              <a
                className="btn btn-outline-dark btn-lg"
                href={resume}
                target="_blank"
                rel="noreferrer noopener"
                role="button"
                aria-label="Resume/CV"
              >
                Resume
              </a>
            </p>
          )}
        </div>
      </div>
    </Jumbotron>
  );
};

export default AboutMe;
