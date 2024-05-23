import * as React from "react";
import { PlasmicCanvasHost, registerComponent, registerFunction, registerGlobalContext } from "@plasmicapp/react-web/lib/host";

import Card                  from "@/components/Card/Card";
import Button                from "@/components/Button/Button";
import Avatar                from "@/components/Avatar/Avatar";
import Cropper               from "@/components/Cropper/Cropper";
import Divider               from "@/components/Divider/Divider";
import Dropdown              from "@/components/Dropdown/Dropdown";
import TextInput             from "@/components/TextInput/TextInput";
import CardConfig            from "@/components/Card/Register";
import NumberInput           from "@/components/NumberInput/NumberInput";
import AvatarConfig          from "@/components/Avatar/Register";
import ButtonConfig          from "@/components/Button/Register";
import DividerConfig         from "@/components/Divider/Register";
import PasswordInput         from "@/components/PasswordInput/PasswordInput";
import CropperConfig         from "@/components/Cropper/Register";
import DropdownConfig        from "@/components/Dropdown/Register";
import AnimatedNumber        from "@/components/AnimatedNumber/AnimatedNumber";
import TextInputConfig       from "@/components/TextInput/Register";
import NumberInputConfig     from "@/components/NumberInput/Register";
import PasswordInputConfig   from "@/components/PasswordInput/Register";
import AnimatedNumberConfig  from "@/components/AnimatedNumber/Register";
import { AppGlobalContext }  from "@/components/AppGlobalContext";
import { AuthGlobalContext } from "@/components/AuthGlobalContext";

import { showNotification, showNotificationConfig } from "@/helpers/showNotification";
import { validateEmail, validateEmailConfig } from "@/helpers/validateEmail";
import { getApps, getAppsConfig } from "@/helpers/appsHelpers";
import { validatePone, validatePoneConfig } from "@/helpers/validatePhone";

// Components
registerComponent( Card, CardConfig );
registerComponent( Avatar, AvatarConfig );
registerComponent( Button, ButtonConfig );
registerComponent( Cropper, CropperConfig );
registerComponent( Divider, DividerConfig );
registerComponent( Dropdown, DropdownConfig );
registerComponent( TextInput, TextInputConfig);
registerComponent( NumberInput, NumberInputConfig );
registerComponent( PasswordInput, PasswordInputConfig );
registerComponent( AnimatedNumber, AnimatedNumberConfig );

// Functions
registerFunction( getApps, getAppsConfig);
registerFunction( validatePone, validatePoneConfig );
registerFunction( validateEmail, validateEmailConfig);
registerFunction( showNotification, showNotificationConfig);

// Global Context
registerGlobalContext( AuthGlobalContext, {
  name         : "AuthGlobalContext",
  importPath   : "./components/AuthGlobalContext",
  props        : {},
  providesData : true,
  globalActions : {
    login : {
      parameters : [
        { name : "token", type : "string" },
        { name : "user", type : "object" },
      ],
    },
    update : {
      parameters : [
        { name : "user", type : "object" },
      ],
    },
    logout : {
      parameters : [],
    },
  },
});

registerGlobalContext( AppGlobalContext, {
  name         : "AppGlobalContext",
  importPath   : "./components/AppGlobalContext",
  props        : {},
  providesData : true,
  globalActions : {
    setApp : {
      parameters : [
        { name : "app", type : "string" },
      ],
    },
  },
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}