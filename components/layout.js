import Head from "next/head";
import { SideButton } from "./sideButton";
import { useState } from "react";
import Icon from "./getIcons";

export const Layout = ({ children, title = "Gizem Gonca", menu, footer }) => {
  const [isOpenLeft, setIsOpenLeft] = useState(true);
  const [isOpenRight, setIsOpenRight] = useState(true);

  return (
    <>
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="w-full h-screen grid grid-cols-layout">
        <SideButton
          left
          open={isOpenLeft}
          hide={isOpenRight}
          onClick={() => {
            setIsOpenRight(!isOpenRight);
            setIsOpenLeft(true);
          }}
        />
        {isOpenLeft && !isOpenRight && (
          <div className="fixed inset-y-0 left-32 w-[400px] shadow-leftSidebar  ">
            <div className="relative flex justify-center items-center w-full h-full ">
              <div className="absolute flex justify-evenly  inset-x-0 bottom-0 h-20 ">
                {footer?.socialLinks.map((social) => (
                  <Icon
                    key={social.id}
                    purpose={social.icon}
                    link={social.link}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
        {!isOpenLeft && isOpenRight && (
          <div className="fixed inset-y-0 right-32 w-[400px] shadow-rightSidebar  "></div>
        )}
        {children}
        <SideButton
          open={isOpenRight}
          hide={isOpenLeft}
          onClick={() => {
            setIsOpenLeft(!isOpenLeft);
            setIsOpenRight(true);
          }}
        />
      </div>
    </>
  );
};
