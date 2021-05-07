import React, { useContext } from 'react';
import { useRouter } from 'next/router';
import Aside from '../../components/Aside';
import SignUpForm from '../../components/SignUpForm';
import UserContext from '../../contexts/UserContext.js';
import { mainContainer, signContainer, loginBox, footer } from './index.module.css';

export default function RegisterPage () {
  const { registered, setRegistered } = useContext(UserContext);
  const router = useRouter();

  function goToLogin() {
    setRegistered(!registered);
    router.push('/login')
  }

  return (
    <div className={mainContainer}>
      <Aside />
      <div className={signContainer}>
        <div className={loginBox}>
          <h2>Bem-vindo!</h2>
          <p>Crie sua conta Liava</p>
          <SignUpForm />
          <button onClick={goToLogin} className={footer}>Já tem uma conta? Faça login</button>
          {/* <button className="footer" onClick={() => router.push('/recover-password')}>Esqueceu sua senha ?</button> */}
        </div>
      </div>
    </div>
  );
}
