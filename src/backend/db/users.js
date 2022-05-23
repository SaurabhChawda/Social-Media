import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: uuid(),
    firstName: "Adarsh",
    lastName: "Balika",
    username: "adarshbalika",
    password: "adarshBalika123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Saurabh",
    lastName: "Chawda",
    username: "Sauuu__ra__bh",
    password: "admin",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shubham",
    lastName: "Chawda",
    username: "Shubham@",
    password: "shubham@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Ashish",
    lastName: "Gupta",
    username: "ashish_Gupta",
    password: "ashish@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    firstName: "Shreyash",
    lastName: "Mahajan",
    username: "Shrey",
    password: "shreyash@123",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
