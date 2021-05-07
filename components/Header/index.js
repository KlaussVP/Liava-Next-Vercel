import React, { useContext, useState } from "react";
import {
  headerOne,
  logo,
  topMenu,
  signContainer,
  signBox,
  headerTwo,
  user,
  icon,
  dropDown,
  signOutList,
  signOutButton,
} from './index.module.css';
import Avatar from "react-avatar";
import Link from 'next/link';
import { useRouter } from 'next/router';
import { FaUserCircle } from "react-icons/fa";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import UserContext from "../../contexts/UserContext";
import axios from "axios";

export default function Header() {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const name = typeof window !== 'undefined' ? localStorage.getItem('name') : null;
  const router = useRouter();
  const { setRegistered } = useContext(UserContext);
  const [dropDownisClosed, setDropDownisClosed] = useState(true);

  function signOut() {
    axios.post(`${process.env.API_BASE_URL}clients/logout`, {}, { headers: { 'X-Access-Token': token } })
    .then(() => {
      localStorage.removeItem('token');
      localStorage.removeItem('name');
      setDropDownisClosed(true);
      router.push('/');
    })
    .catch(err => {
      alert('Erro ao efetuar o sign out');
      console.log(err.response);
    });
  }

  if (router.asPath !== '/') {
    return (
      <header className={headerTwo}>
        <div className={user} onClick={() => setDropDownisClosed(!dropDownisClosed)}>
          { dropDownisClosed 
            ? <IoIosArrowDown className={icon}/> 
            : (
              <>
                <ul className={dropDown}>
                  <li className={signOutList}><button className={signOutButton} onClick={() => signOut()}> Sair </button></li>
                </ul>
                <IoIosArrowUp className={icon}/>
              </>
            )
          }
          <Avatar name={name} round={true} size="3em" maxInitials={2}/>
        </div>
      </header>
    );
  }

  return(
    <header className={headerOne}>
      <div className={logo}><Link href="/"><a><img src="/assets/images/logo_edited.png"/></a></Link></div>
      <nav className={topMenu}>
        <Link href="#"><a>Features</a></Link>
        <Link href="#"><a>Data Coverage</a></Link>
        <Link href="#"><a>Pricing</a></Link>
        <Link href="#"><a>Resources</a></Link>
        <Link href="#"><a>About</a></Link>
      </nav>
      <div className={signContainer}>
        <button><Link href="/register" onClick={() => setRegistered(false)}><a>Sign Up</a></Link></button>
        <div className={signBox}>
          <Link href="/login" onClick={() => setRegistered(true)}>
            <a>
              <div><FaUserCircle /></div>
              <p>Log In</p>
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
