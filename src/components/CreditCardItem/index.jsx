import React from "react";

import { Text, Img, Input } from "components";

const CreditCardItem = (props) => {
  return (
    <>
      <div className={props.className}>
        <div className="flex flex-col gap-[29px] items-start justify-start md:w-[100%] w-[87%]">
          <div className="flex flex-row items-start justify-between w-[100%]">
            <div className="flex flex-col items-start justify-start w-[auto]">
              <Text
                className="font-lato not-italic text-left text-white_A700 w-[auto]"
                variant="body5"
              >
                Balance
              </Text>
              <Text
                className="font-inter font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                as="h4"
                variant="h4"
              >
                {props?.price}
              </Text>
            </div>
            <Img
              src="images/img_chipcard.png"
              className="h-[34px] md:h-[auto] object-cover w-[34px]"
              alt="ChipCard"
            />
          </div>
          <div className="flex flex-row gap-[59px] items-center justify-start md:ml-[0] ml-[2px] md:w-[100%] w-[76%]">
            <div className="flex flex-col items-start justify-start w-[auto]">
              <Text
                className="font-inter not-italic text-left text-white_A700_b2 w-[auto]"
                variant="body5"
              >
                CARD HOLDER
              </Text>
              <Text
                className="font-inter font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                {props?.name}
              </Text>
            </div>
            <div className="flex flex-col items-start justify-start w-[auto]">
              <Text
                className="font-inter not-italic text-left text-white_A700_b2 w-[auto]"
                variant="body5"
              >
                VALID THRU
              </Text>
              <Text
                className="font-inter font-normal mt-[4px] not-italic text-left text-white_A700 w-[auto]"
                variant="body2"
              >
                {props?.date}
              </Text>
            </div>
          </div>
        </div>
        <Input
          className="font-inter font-normal leading-[normal] not-italic p-[0] sm:text-[18px] md:text-[20px] text-[22px] text-left placeholder:text-white_A700 text-white_A700 w-[100%]"
          wrapClassName="flex w-[100%]"
          name="Group319"
          placeholder="3778 **** **** 1234"
          suffix={
            <Img
              src="images/img_contrast.svg"
              className="ml-[35px] mr-[24px] my-[auto]"
              alt="contrast"
            />
          }
          shape="CustomBorderBL25"
          size="lg"
          variant="GradientWhiteA70026WhiteA70026"
        ></Input>
      </div>
    </>
  );
};

CreditCardItem.defaultProps = {
  price: "$5,756",
  name: "Eddy Cusuma",
  date: "12/22",
};

export default CreditCardItem;
