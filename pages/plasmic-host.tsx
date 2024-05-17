import * as React from "react";
import { PlasmicCanvasHost, registerComponent, registerFunction, registerGlobalContext } from "@plasmicapp/react-web/lib/host";

import Card                  from "@/components/Card/Card";
import Button                from "@/components/Button/Button";
import Divider               from "@/components/Divider/Divider";
import Dropdown              from "@/components/Dropdown/Dropdown";
import TextInput             from "@/components/TextInput/TextInput";
import CardConfig            from "@/components/Card/Register";
import ButtonConfig          from "@/components/Button/Register";
import validateEmail         from "@/helpers/validateEmail";
import DividerConfig         from "@/components/Divider/Register";
import PasswordInput         from "@/components/PasswordInput/PasswordInput";
import DropdownConfig        from "@/components/Dropdown/Register";
import AnimatedNumber        from "@/components/AnimatedNumber/AnimatedNumber";
import TextInputConfig       from "@/components/TextInput/Register";
import PasswordInputConfig   from "@/components/PasswordInput/Register";
import AnimatedNumberConfig  from "@/components/AnimatedNumber/Register";
import { showNotification }  from "@/helpers/showNotification";
import { AuthGlobalContext } from "@/components/AuthGlobalContext";

// Components
registerComponent( Card, CardConfig );
registerComponent( Button, ButtonConfig );
registerComponent( Divider, DividerConfig );
registerComponent( Dropdown, DropdownConfig );
registerComponent( TextInput, TextInputConfig);
registerComponent( PasswordInput, PasswordInputConfig );
registerComponent( AnimatedNumber, AnimatedNumberConfig );

// Functions
registerFunction( validateEmail, {
  name       : "validateEmail",
  importPath : "~/helpers/validateEmail",
  params     : [
    {
      name        : "email",
      type        : "string",
      description : "The email address to validate",
    },
  ],
});

registerFunction( showNotification, {
  name       : "showNotification",
  importPath : "~/helpers/showNotification",
  params     : [
    {
      name        : "message",
      type        : "string",
      description : "The message to show in the notification",
    },
    {
      name        : "config",
      type        : "object",
      description : "The config for the notification",
    },
  ],
});

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
    logout : {
      parameters : [],
    },
  },
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}