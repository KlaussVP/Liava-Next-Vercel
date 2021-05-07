import axios from 'axios';
import React, { useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { signupForm } from './index.module.css';
import UserContext from '../../contexts/UserContext';

export default function SignUpForm (props) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const { setRegistered } = useContext(UserContext)
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  function signUpRoute(event) {
    event.preventDefault();
    if (loading) return;
    setLoading(true);
    const bodyRequest = { name, email, occupation, password, confirmPassword };
    axios.post(`${process.env.API_BASE_URL}clients/signup`, bodyRequest).then(() => {
      setLoading(false);
      setRegistered(true);
      setName('');
      setEmail('');
      setOccupation('');
      setPassword('');
      setConfirmPassword('');
      router.push('/login');
    }).catch((err) => {
      if (err.response.data.error === 'Senhas diferentes.') {
        alert('As senhas não são iguais. Tente novamente');
      } else if (err.response.status === 422) {
        alert('Dados não estão no padrão. Nome e senha devem conter mais de 6 caracteres');
      } else {
        alert('Problema com o cadastro. Erro desconhecido');
      }
      setLoading(false);
    });
  }

  function handleOccupation(value) {
    setOccupation(value);
  }

  return (
    <form className={signupForm} onSubmit={signUpRoute}>
      <label htmlFor="name">Seu nome:</label>
      <input
        id="name"
        placeholder="Nome completo"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        required
      />
      <label htmlFor="email">Seu e-mail:</label>
      <input
        id="email"
        placeholder="E-mail"
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <label htmlFor="occupation">Qual a sua profissão?</label>
      <select id="occupation" required onChange={(e) => handleOccupation(e.target.value)}>
        <option selected disabled>Escolha uma profissão...</option>
        <option value="Buy Side">Buy Side</option>
        <option value="Sell Side">Sell Side</option>
        <option value="Private Equity/IB">Private Equity / IB</option>
        <option value="Venture Capital">Venture Capital</option>
        <option value="Advisor/Financial Planner">Assessor / Planejador Financeiro</option>
        <option value="Individual Investor">Investidor Individual</option>
        <option value="Student">Estudante / Acadêmico</option>
        <option value="Other">Outro</option>
      </select>
      <label htmlFor="password">Senha:</label>
      <input
        id="password"
        placeholder="Digite sua senha."
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <label htmlFor="confirmPassowrd">Confirme a senha:</label>
      <input
        id="confirmPassowrd"
        placeholder="Digite sua senha novamente."
        type="password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
        required
      />
      <button>
        Cadastrar
      </button>
    </form>
  );
}
