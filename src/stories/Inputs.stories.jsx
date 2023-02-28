import React from "react";

import { Input } from "components";

export default {
  title: "rakesh_s_application93/Input",
  component: Input,
};

export const SampleInput = (args) => <Input {...args} />;
SampleInput.args = {
  type: "text",
  shape: "srcCircleBorder25",
  variant: "srcFillGray101",
  size: "smSrc",
  wrapClassName: "w-[300px]",
  className: "w-full",
  placeholder: "placeholder",
};
