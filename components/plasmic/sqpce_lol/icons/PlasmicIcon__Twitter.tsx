// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type TwitterIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function TwitterIcon(props: TwitterIconProps) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 64 52"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M64 6.156a26.22 26.22 0 01-7.541 2.066A13.15 13.15 0 0062.232.96a26.307 26.307 0 01-8.339 3.186A13.11 13.11 0 0044.31 0c-8.477 0-14.706 7.908-12.792 16.117-10.909-.547-20.584-5.773-27.061-13.715-3.44 5.9-1.784 13.619 4.061 17.527a13.076 13.076 0 01-5.944-1.642c-.144 6.081 4.216 11.77 10.531 13.037a13.162 13.162 0 01-5.93.224c1.669 5.215 6.517 9.009 12.266 9.116C13.92 44.99 6.965 46.924 0 46.102A37.176 37.176 0 0020.128 52c24.379 0 38.152-20.585 37.32-39.048A26.73 26.73 0 0064 6.156z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default TwitterIcon;
/* prettier-ignore-end */
