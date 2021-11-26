import Fields from "../../Fields";
import { Grid,Input } from "@material-ui/core";
import Classes from "./RegisterPersonal.module.css";
import PersonalLogo from "../../../../../assets/PersonalLogo.svg";
import { motion } from "framer-motion";

const RegisterPersonal = (props) => {
  const { firstName, lastName, userName, email, phone, country } =
    props.formField;
  return (
    <>
    
      <label htmlFor="PersonalPicture">
        <Input
          accept="image/*"
          id="PersonalPicture"
          style={{ display: "none" }}
          type="file"
        />
        <div className={Classes.imgContainer}>
          <img htmlFor="PersonalPicture" src={PersonalLogo} alt="helloxs" />
        </div>
      </label>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Fields field={firstName} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={lastName} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={userName} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={email} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={phone} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={country} />
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterPersonal;
