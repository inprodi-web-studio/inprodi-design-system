import * as React from "react";
import { PlasmicCanvasHost, registerComponent, registerFunction } from "@plasmicapp/react-web/lib/host";

import Card            from "@/components/Card/Card";
import TextInput       from "@/components/TextInput/TextInput";
import CardConfig      from "@/components/Card/Register";
import validateEmail   from "@/helpers/validateEmail";
import TextInputConfig from "@/components/TextInput/Register";

// Components
registerComponent( Card, CardConfig );
registerComponent( TextInput, TextInputConfig);

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