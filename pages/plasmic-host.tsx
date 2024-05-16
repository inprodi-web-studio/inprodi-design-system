import * as React from "react";
import { PlasmicCanvasHost, registerComponent, registerFunction, registerGlobalContext } from "@plasmicapp/react-web/lib/host";

import Card                 from "@/components/Card/Card";
import Button               from "@/components/Button/Button";
import Divider              from "@/components/Divider/Divider";
import TextInput            from "@/components/TextInput/TextInput";
import CardConfig           from "@/components/Card/Register";
import ButtonConfig         from "@/components/Button/Register";
import validateEmail        from "@/helpers/validateEmail";
import DividerConfig        from "@/components/Divider/Register";
import PasswordInput        from "@/components/PasswordInput/PasswordInput";
import TextInputConfig      from "@/components/TextInput/Register";
import PasswordInputConfig  from "@/components/PasswordInput/Register";
import AnimatedNumber       from "@/components/AnimatedNumber/AnimatedNumber";
import AnimatedNumberConfig from "@/components/AnimatedNumber/Register";
import { showNotification } from "@/helpers/showNotification";

// Components
registerComponent( Card, CardConfig );
registerComponent( Button, ButtonConfig );
registerComponent( Divider, DividerConfig );
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
  // params     : [
  //   {
  //     name        : "message",
  //     type        : "string",
  //     description : "The message to show in the notification",
  //   },
  // ],
});

// Global Context

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}