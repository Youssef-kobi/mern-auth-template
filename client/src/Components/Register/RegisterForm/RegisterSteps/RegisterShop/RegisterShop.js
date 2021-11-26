import Fields from "../../Fields";
import { Grid, Input } from "@material-ui/core";
import Classes from "./RegisterShop.module.css";
import ShopLogo from "../../../../../assets/ShopLogo.svg";

const RegisterShop = (props) => {
  const {
    shopAddress,
    postalCode,
    shopName,
    shopSite,
    shopType,
    shopPhoneNumber,
    shopEmail,
    salesTax,
  } = props.formField;
  // const ImgUpload =({
  //   onChange,
  //   src
  // })=>
  // <label htmlFor="photo-upload" className="custom-file-upload fas">
  // <div className="img-wrap img-upload" >
  //   <img for="photo-upload" src={src}/>
  // </div>
  // <input id="photo-upload" type="file" onChange={onChange}/>
  // </label>
  return (
    <>
      <label htmlFor="logoPicture">
        <Input
          accept="image/*"
          id="logoPicture"
          style={{ display: "none" }}
          type="file"
        />
        <div className={Classes.imgContainer}>
          <img htmlFor="logoPicture" src={ShopLogo} alt="helloxs" />
        </div>
      </label>
      <Grid container spacing={2}>
        <Grid item xs={10}>
          <Fields field={shopAddress} />
        </Grid>
        <Grid item xs={2}>
          <Fields field={postalCode} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopName} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopSite} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopType} />
        </Grid>
        <Grid item xs={6}>
          <Fields field={shopPhoneNumber} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={shopEmail} />
        </Grid>
        <Grid item xs={12}>
          <Fields field={salesTax} />
        </Grid>
      </Grid>
    </>
  );
};

export default RegisterShop;
