import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Aside from '../../components/Aside';
import LoginForm from '../../components/LoginForm';
import UserContext from '../../contexts/UserContext.js';
import { mainContainer, signContainer, loginBox, footer } from './index.module.css';

export default function LoginPage () {
  const { registered, setRegistered } = useContext(UserContext);
  const router = useRouter();

  function goToRegister() {
    setRegistered(!registered);
    router.push('/register');
  }

  return (
    <div className={mainContainer}>
      <Aside />
      <div className={signContainer}>
        <div className={loginBox}>
          <h2>Bem-vindo de volta!</h2>
          <p>Faça o login na sua conta Liava</p>
          <LoginForm />
          <button onClick={goToRegister} className={footer}>Primeira vez? Crie uma conta!</button>
          {/* <button className="footer" onClick={() => router.push('/recover-password')}>Esqueceu sua senha ?</button> */}
        </div>
      </div>
    </div>
  );
}
