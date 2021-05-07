import axios from 'axios';
import { useRouter } from 'next/router';
import React, { useContext, useState } from 'react';
import UserContext from '../../contexts/UserContext';
import { loginForm } from './index.module.css';

export default function LoginForm () {
  const router = useRouter();
  const { setUser } = useContext(UserContext);
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);

  function loginInRoute(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    const bodyRequest = { email, password };
    axios.post(`${process.env.API_BASE_URL}clients/signin`, bodyRequest).then(({ data }) => {
      setLoading(false);
      setUser(data);
      localStorage.setItem('token', data.token);
      localStorage.setItem('name', data.name);
      router.push('/home');
    }).catch((err) => {
      console.log(err);
      setLoading(false);
    });
  }

  return (
    <form className={loginForm} onSubmit={loginInRoute}>
      <input
        placeholder="e-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        placeholder="senha"
        type="password"
        value={password}
        onChange={ (e) => setPassword(e.target.value)}
        required
      />
      <button>
        Entrar
      </button>
    </form>
  );
}
