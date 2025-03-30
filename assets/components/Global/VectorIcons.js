import { RFValue } from "react-native-responsive-fontsize";

import F5Icon from "react-native-vector-icons/FontAwesome5";
import F6Icon from "react-native-vector-icons/FontAwesome6";

const FacebookIcon = (
  <F5Icon name="facebook" size={RFValue(15)} color={"white"} />
);
const GoogleIcon = <F5Icon name="google" size={RFValue(15)} color={"white"} />;
const InstagramIcon = (
  <F5Icon name="instagram" size={RFValue(15)} color={"white"} />
);
const WebsiteIcon = <F6Icon name="globe" size={RFValue(15)} color={"white"} />;

export { FacebookIcon, GoogleIcon, InstagramIcon, WebsiteIcon };
