import { ApiError } from '../utils/APiError.js';
import {asyncHandler} from '../utils/asyncHandler.js'
import { User } from '../models/user.model.js';
import { uploadOnCloudinary } from '../utils/cloudnary.js';
import { ApiResponse } from '../utils/ApiResponse.js';


const registerUser = asyncHandler( async ( req, res) => {
    // get user details frontend
    //validation 
    //check if user already exists
    //check for images, check for avatar
    //upload them to cloudinary, avatar,
    // crete user object - create entry in db


    const {fullName, email, username, password} = req.body
    //console.log('email: ', email);

    // if(fullName === ""){
    //     throw new ApiError(400, "Fullname is required")
    // }

    if([fullName,email,username,password].some((field)=> field?.trim() ==="")
    ){
        throw new ApiError(400, "All fields are required")
    }

    const existedUser = await User.findOne({
        $or : [{username},{email}] 
    })

    if(existedUser){
        throw new ApiError(409, "User with email or username already exists")
    }

    console.log(req.files)

    const avatarLocalPath = req.files?.avatar?.[0]?.path || req.files?.["avatar[]"]?.[0]?.path;
    const coverImageLocalPath = req.files?.coverImage?.[0]?.path || req.files?.["coverImage[]"]?.[0]?.path || req.files?.coverimage?.[0]?.path


    if( !avatarLocalPath) {
        throw new ApiError(400, "Avatar is required")
    }

    const avatar = await uploadOnCloudinary(avatarLocalPath)
    const coverImage = await uploadOnCloudinary ( coverImageLocalPath)

    if(!avatar) {
        throw new ApiError(400,"Avatar file is required")
    }

    const user = await User.create({
        fullname: fullName,
        avatar: avatar.url,
        coverImge: coverImage?.url || "",
        email, 
        password,
        username: username.toLowerCase()
    })

    const createdUser = await User.findById(user._id).select(
        "-password -refreshToken"
    )

    if( !createdUser){
        throw new ApiError(500, "Something went wrong while registing user")
    }

    return res.status(201).json(
        new ApiResponse(200, createdUser, "User registered Successfully")
    )

})

export {registerUser}