import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

const ProfileCard = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state.formData;

  const profilePhotoURL = formData.profilePhoto
    ? URL.createObjectURL(formData.profilePhoto)
    : null;
  const logoURL = formData.companyLogo
    ? URL.createObjectURL(formData.companyLogo)
    : null;

  const goBack = () => {
    navigate(-1); // Navigate back to the previous page
  };

  return (
    <div>
      <h2>Profile Card</h2>
      <p>Name: {formData.personname}</p>
      <p>Designation: {formData.designation}</p>
      <p>About: {formData.about}</p>
      <p>Card Size: {formData.cardsize}</p>

      {profilePhotoURL && (
        <div>
          <h3>Profile Photo:</h3>
          <img src={profilePhotoURL} alt="Profile Photo" />
        </div>
      )}
      {logoURL && (
        <div>
          <h3>Company Logo:</h3>
          <img src={logoURL} alt="Company Logo" />
        </div>
      )}

      <button onClick={goBack}>Go Back</button>
    </div>
  );
};

export default ProfileCard;