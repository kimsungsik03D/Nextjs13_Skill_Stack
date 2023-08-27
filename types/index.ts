import { MouseEventHandler } from "react";

export interface BoardProps {
  no: string | number;
  content: string;
  regtId: string;
  page: string;
  editState?: string;
}

export interface CustomButtonProps {
  title: string;
  containerStyles?: string;
  handleClick?: MouseEventHandler<HTMLButtonElement>;
  btnType?: "button" | "submit";
  textStyles?: string;
  rightIcon?: string;
  idDisabled?: Boolean;
}
