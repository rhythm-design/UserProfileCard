import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import html2canvas from "html2canvas";
import "./ProfileCard.css";
const ProfileCard = () => {

    const exportAsJPG = () => {
        const cardContainer = document.querySelector('.card-container');
        html2canvas(cardContainer).then((canvas) => {
          const link = document.createElement('a');
          link.href = canvas.toDataURL('image/jpeg');
          link.download = 'profile-card.jpg';
          link.click();
        });
      };
    
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
    <div className="profile-card-container">
      <div className="wrapper-card-container">
        <div className="card-container">
            <div className="left-column">
                <div class="wrapper">
                    <div class="card">
                        {profilePhotoURL && (
                            <div>
                                <img className="profile-photo-img" src={profilePhotoURL} alt="" />
                            </div>
                        )}
                        <div class="info">
                            <p className="person-name-p">{formData.personname}</p>
                            <p>{formData.designation}</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="right-column">
                <div className="company-logo-container">
                    {logoURL && (
                            <div className="logo-secondary-container">
                                <img className="logo-image" src={logoURL} alt="Company Logo" />
                            </div>
                    )}
                </div>

                <div className="person-desc">
                    <h2 className="welcome-title">Welcome Aboard!</h2>
                    <p className="about-title">Get to know him!</p>
                    <p className = "about-text">"{formData.about}"</p>
                </div>

                <div className="dots">
                    <div className="dot"></div>
                </div>
            </div>
        </div>
        <div class="flex justify-between p-6">
            <div class="">
                <button 
                    class="mb-0 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                    onClick={exportAsJPG}    
                >
                Download Card</button>
            </div>

            <div class="">
            <button 
                class="mb-0 px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600"
                onClick={goBack}    
            >
            Create New Card</button>
        </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
