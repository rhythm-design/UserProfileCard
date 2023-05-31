import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import confetti from "canvas-confetti";
import "./UserArea.css";

const UserArea = () => {
    const [formData, setFormData] = useState({
        personname: "",
        designation: "",
        about: "",
        cardsize: "",
        profilePhoto: null,
        companyLogo: null,
    });

    function onClick() {
        confetti({
          particleCount: 150,
          spread: 60
        });
    }

    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
      
        if (name === "profilePhoto" || name === "companyLogo") {
          const file = e.target.files[0];
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: file,
          }));
        } else {
          setFormData((prevFormData) => ({
            ...prevFormData,
            [name]: value,
          }));
        }
      };
  const handleSubmit = (e) => {
    e.preventDefault();
    onClick();
    setTimeout(()=>{
        navigate("/profile", { state: { formData } });
    },"1000")
  };
    return (
        <div className="user-area-main-container">
            <section class="max-w-4xl p-6 mx-auto bg-indigo-600 rounded-md shadow-md dark:bg-gray-800 mt-20 card-form">
                <h1 class="text-xl font-bold text-white capitalize dark:text-white">Create Person Profile Card</h1>
                <form autoComplete="off" autoFocus="off" onSubmit={handleSubmit}>
                    <div class="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
                        <div>
                            <label class="text-white dark:text-gray-200" for="personname">Name</label>
                            <input
                                minLength="3"
                                maxLength="10"
                                id="personname"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={formData.personname}
                                onChange={(e) =>
                                    setFormData({ ...formData, personname: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="designation">Designation</label>
                            <input
                                minLength="3"
                                maxLength="15"
                                id="designation"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={formData.designation}
                                onChange={(e) =>
                                    setFormData({ ...formData, designation: e.target.value })
                                }
                                required
                            />
                        </div>

                        <div>
                            <label class="text-white dark:text-gray-200" for="about">About the person</label>
                            <input
                                minLength="10"
                                maxLength="20"
                                id="about"
                                type="text"
                                class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
                                value={formData.about}
                                onChange={(e) =>
                                    setFormData({ ...formData, about: e.target.value })
                                }
                                required
                            />
                        </div>
                        <div>
                            <label class="text-white dark:text-gray-200" for="cardsize">Select Size</label>
                            <select class="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                                <option>Facebook (1200 x 628 px)</option>
                                <option>Instagram (1080 x 1080 px)</option>
                                <option>LinkedIN (1350 x 440 px)</option>
                                <option>Twitter (900 x 450 px)</option>
                            </select>
                        </div>
                        <div>
                            <label class="block text-sm font-medium text-white">
                                Profile Photo
                            </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                <div class="flex text-sm text-gray-600">
                                    <label for="profile-photo-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span class="pl-2 pr-2">Upload a Photo</span>
                                        <input id="profile-photo-upload" name="profilePhoto" type="file" class="sr-only"  onChange={handleChange} required/>
                                    </label>
                                    <p class="pl-1 text-white">or drag and drop</p>
                                </div>
                                <p class="text-xs text-white">
                                    PNG, JPG up to 10MB
                                </p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <label class="block text-sm font-medium text-white">
                                Company Logo
                            </label>
                            <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md">
                                <div class="space-y-1 text-center">
                                    <svg class="mx-auto h-12 w-12 text-white" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                                        <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                    </svg>
                                <div class="flex text-sm text-gray-600">
                                    <label for="logo-upload" class="relative cursor-pointer bg-white rounded-md font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                        <span class="pl-2 pr-2">Upload Logo</span>
                                        <input id="logo-upload" name="companyLogo" type="file" class="sr-only" onChange={handleChange} required/>
                                    </label>
                                    <p class="pl-1 text-white">or drag and drop</p>
                                </div>
                                <p class="text-xs text-white">
                                    PNG, JPG up to 10MB
                                </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div class="flex justify-end mt-6">
                        {/* <div className="canvas"></div> */}
                        <button 
                            type="submit" 
                            class="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-pink-500 rounded-md hover:bg-pink-700 focus:outline-none focus:bg-gray-600">
                        Submit</button>
                    </div>
                </form>
            </section>
        </div>
    );
}

export default UserArea;