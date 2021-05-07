import React from 'react';
import { asideContainer } from './index.module.css';
import Link from 'next/link';
import { GiBookCover } from 'react-icons/gi';
import { IoHome, IoBusinessSharp } from 'react-icons/io5';

export default function Aside() {

  return (
    <aside className={asideContainer}>
      <div><img src='#' alt="Logo_Liava" /></div>
      <ul>
        <li>
          <div><IoHome /></div>
          <Link href="/home"><a>Home</a></Link>
        </li>
        <li>
          <div><GiBookCover /></div>
          <Link href="#"><a>Educacional</a></Link>
        </li>
        <li>
          <div><IoBusinessSharp /></div>
          <Link href="/companies"><a>Empresas</a></Link>
        </li>
      </ul>
    </aside>
  );
}