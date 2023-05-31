import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import DomToImage from "dom-to-image";
import "./ProfileCard.css";
const ProfileCard = () => {

    const exportAsJPG = () => DomToImage.toJpeg(document.querySelector('.card-container'))
    .then(function (dataUrl) {
        var link = document.createElement('a');
        link.download = `${formData.personname}_card_${Math.round(Math.random()*100)}.jpeg`;
        link.href = dataUrl;
        link.click();
    });
    
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
            <div className="wave">
                <div class="custom-shape-divider-top-1685505344">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                    </svg>
                </div>

                <div class="custom-shape-divider-top-1685506080">
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z" class="shape-fill"></path>
                    </svg>
                </div>
                </div>
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
