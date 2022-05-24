import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: "c4fb8f44-5033-4fcf-bb41-bff6f1a57de8",
    firstName: "Adarsh",
    lastName: "Rathi",
    username: "Adarsh",
    password: "adarshBalika123",
    profile: "/assets/image/Profile/Adarsh.jpg",
    bio: "Front-End-Developer",
    website: "http://saurabh-chawda.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "07c45cea-76c5-4124-bcfc-8f7c43a0b188",
    firstName: "Saurabh",
    lastName: "Chawda",
    username: "Sauuu__ra__bh",
    password: "admin",
    profile: "/assets/image/Profile/Saurabh.jpg",
    bio: "Front-End-Developer",
    website: "http://saurabh-chawda.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "0453176e-2910-432e-8ce4-c95494fb8c4a",
    firstName: "Shubham",
    lastName: "Chawda",
    username: "Shubham@",
    password: "shubham@123",
    profile: "/assets/image/Profile/Shubham.jpg",
    bio: "Front-End-Developer",
    website: "http://saurabh-chawda.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "a5ecdd4c-9bfc-41c5-b93f-d566ac29e510",
    firstName: "Ashish",
    lastName: "Gupta",
    username: "ashish_Gupta",
    password: "ashish@123",
    profile: "/assets/image/Profile/Ashish.jpg",
    bio: "Front-End-Developer",
    website: "http://saurabh-chawda.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: "216d753a-3d97-4256-93d1-0207f710867e",
    firstName: "Shreyash",
    lastName: "Mahajan",
    username: "Shrey__123",
    password: "shreyash@123",
    profile: "/assets/image/Profile/Shreyash.jpg",
    bio: "Front-End-Developer",
    website: "http://saurabh-chawda.netlify.app/",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
