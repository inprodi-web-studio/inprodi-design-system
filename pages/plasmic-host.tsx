import * as React from "react";
import { PlasmicCanvasHost, registerComponent, registerFunction } from "@plasmicapp/react-web/lib/host";

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
  importPath : "../helpers/validateEmail.ts",
  params     : [
    {
      name        : "email",
      type        : "string",
      description : "The email address to validate",
    },
  ],
});

export default function PlasmicHost() {
  return <PlasmicCanvasHost />;
}