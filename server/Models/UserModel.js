import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = mongoose.Schema(
  {
    profileImg: {
      type: String,
    },
    firstName: {
      type: String,
      required: true,
    },
    lastName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    // confPassword: {
    //   type: String,
    //   required: true,
    // },
    email: {
      type: String,
      required: true,
      unique: true,
      match: [
        /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
    },
    country: {
      type: String,
      required: true,
    },
    shopImg: {
      type: String,
    },
    shopAddress: {
      type: String,
      required: true,
    },
    postalCode: {
      type: String,
      required: true,
    },
    shopName: {
      type: String,
      required: true,
    },
    shopSite: {
      type: String,
    },
    shopType: {
      type: String,
      required: true,
    },
    shopPhoneNumber: {
      type: String,
    },
    shopEmail: {
      type: String,
      required: true,
    },
    salesTax: {
      type: String,
    },
    termsOfUse: {
      type: Boolean,
    },
  },
  {
    timestamps: true,
  }
);

UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();

  const salt = bcrypt.genSaltSync(10);
  const hash = bcrypt.hashSync(this.password, salt);

  this.password = hash;

  next();
});
const User = mongoose.model("User", UserSchema);

export default User;
