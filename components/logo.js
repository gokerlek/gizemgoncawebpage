/* eslint-disable react/display-name */
import { forwardRef } from 'react';
import logo from '../public/images/logo.png';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

export const Logo = ({ small = false }) => {
  const ImageComponent = forwardRef((props, ref) => (
    <a ref={ref} {...props}>
      <Image
        src={logo}
        layout="fixed"
        width={small ? 106 : 148}
        height={small ? 50 : 70}
        alt="logo"
      />
    </a>
  ));
  return (
    <div className="flex items-center pl-1 cursor-pointer">
      <Link href="/" passHref>
        <ImageComponent />
      </Link>
    </div>
  );
};
