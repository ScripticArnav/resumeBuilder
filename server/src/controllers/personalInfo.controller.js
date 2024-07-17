import { ApiError } from "../utils/ApiError";
import { asyncHandler } from "../utils/asyncHandler";

const postPersonalInfo = asyncHandler((req, res) => {
  const {
    firstname,
    lastname,
    city,
    province,
    phone,
    email,
    linkedin,
    github,
    codechef,
    codeforces,
    leetcode,
    atcoder,
    photo,
  } = req.body;

  if([firstname, lastname, city, province, email].some(field => field.trim() === "")){
        throw new ApiError(401, "personal info cannot be empty")
    }
  if(phone.length < 10){
    throw new ApiError(401, "Phone number cannot be less then 10 digits")
  }  


});
