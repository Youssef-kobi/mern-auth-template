import { countries, ShopTypes } from '../Fields/Options'
import PersonalLogo from '../../../assets/PersonalLogo.svg'
import ShopLogo from '../../../assets/ShopLogo.svg'

const formFields = {
  profileImg: {
    defaultImg: PersonalLogo,
    name: 'profilePicture',
    label: 'Profile picture',
    type: 'picture',
  },
  firstName: {
    name: 'firstName',
    label: 'First name *',
    type: 'text',
  },
  lastName: {
    name: 'lastName',
    label: 'Last name *',
    type: 'text',
  },
  userName: {
    name: 'userName',
    label: 'Username *',
    type: 'text',
  },
  password: {
    name: 'password',
    label: 'Password *',
    type: 'password',
  },
  confPassword: {
    name: 'confPassword',
    label: 'Password confirmation *',
    type: 'password',
  },
  email: {
    name: 'email',
    label: 'Email *',
    type: 'text',
  },
  phone: {
    name: 'phone',
    label: 'Phone number',
    type: 'text',
  },
  country: {
    name: 'country',
    label: 'Country*',
    type: 'select',
    options: countries,
  },
  // Step 1 Shop Details
  shopImg: {
    defaultImg: ShopLogo,
    name: 'shopImg',
    label: 'Shop Picture',
    type: 'picture',
  },
  shopAddress: {
    name: 'shopAddress',
    label: "shop's Address *",
    type: 'text',
  },
  postalCode: {
    name: 'postalCode',
    label: 'Postal code *',
    type: 'text',
  },
  shopName: {
    name: 'shopName',
    label: "Shop's name*",
    type: 'text',
  },
  shopSite: {
    name: 'shopSite',
    label: "Shop's Website",
    type: 'text',
  },
  shopType: {
    name: 'shopType',
    label: "shop's type *",
    type: 'select',
    options: ShopTypes,
  },
  shopPhoneNumber: {
    name: 'shopPhoneNumber',
    label: "Shop's phone number *",
    type: 'text',
  },
  shopEmail: {
    name: 'shopEmail',
    label: "Shop's Email *",
    type: 'text',
  },
  salesTax: {
    name: 'salesTax',
    label: 'Sales tax',
    type: 'text',
  },
  termsOfUse: {
    name: 'termsOfUse',
    label: `Please read and Accept our `,
    type: 'checkbox',
  },
}
export default formFields
