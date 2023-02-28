import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage } from "../../components/ErrorMessage";

const variants = {
  srcFillGray101: "bg-gray_101",
  OutlineGray300: "bg-white_A700 border-[1px] border-gray_300 border-solid",
  GradientWhiteA70026WhiteA70026: "bg-gradient ",
};
const shapes = {
  srcCircleBorder25: "rounded-[25px]",
  RoundedBorder15: "rounded-[15px]",
  CustomBorderBL25:
    "rounded-bl-[25px] rounded-br-[25px] rounded-tl-[0] rounded-tr-[0]",
};
const sizes = {
  smSrc: "pr-[16px] py-[16px]",
  sm: "p-[16px]",
  md: "pb-[20px] pt-[16px] px-[16px]",
  lg: "sm:pl-[20px] pl-[21px] py-[21px]",
};

const Input = React.forwardRef(
  (
    {
      wrapClassName = "",
      className = "",
      name,
      placeholder,
      type = "text",
      children,
      errors = [],
      label = "",
      prefix,
      suffix,
      shape,
      variant,
      size,
      ...restProps
    },
    ref
  ) => {
    return (
      <>
        <div
          className={`${wrapClassName} 
              ${shapes[shape] || ""} 
              ${variants[variant] || ""} 
              ${sizes[size] || ""}`}
        >
          {!!label && label}
          {!!prefix && prefix}
          <input
            ref={ref}
            className={`${className} bg-transparent border-0`}
            type={type}
            name={name}
            placeholder={placeholder}
            {...restProps}
          />
          {!!suffix && suffix}
        </div>
        {!!errors && <ErrorMessage errors={errors} />}
      </>
    );
  }
);

Input.propTypes = {
  wrapClassName: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  type: PropTypes.string,
  shape: PropTypes.oneOf([
    "srcCircleBorder25",
    "RoundedBorder15",
    "CustomBorderBL25",
  ]),
  variant: PropTypes.oneOf([
    "srcFillGray101",
    "OutlineGray300",
    "GradientWhiteA70026WhiteA70026",
  ]),
  size: PropTypes.oneOf(["smSrc", "sm", "md", "lg"]),
};

Input.defaultProps = {
  wrapClassName: "",
  className: "",
  name: "",
  placeholder: "",
  type: "text",
  shape: "",
  variant: "",
  size: "",
};

export { Input };
