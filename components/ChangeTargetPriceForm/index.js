import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import CompanyContext from '../../contexts/CompanyContext';
import { Form, Button } from './styles';
import IntlCurrencyInput from 'react-intl-currency-input';
import axios from 'axios';

export default function ChangeTargetPriceForm () {
  const token = typeof window !== 'undefined' ? localStorage.getItem('token') : null;
  const { companies, setCompanies } = useContext(CompanyContext);
  const [companyId, setCompanyId] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  let valueToSend;

  const currencyConfig = {
    locale: "pt-BR",
    formats: {
      number: {
        BRL: {
          style: "currency",
          currency: "BRL",
          minimumFractionDigits: 2,
          maximumFractionDigits: 2,
        },
      },
    },
  };

  useEffect(() => {
    axios.get(`${process.env.API_BASE_URL}companies`, { headers: { 'X-Access-Token': token } })
    .then(resp => {
      setCompanies(resp.data);
    })
    .catch(err => {
      const errorMessage = err.response.data.message;
      if (errorMessage === "Sessão expirada." || errorMessage === "jwt expired") {
        router.push('/login');
      }
    });
  },[]);

  function handleChange (event, value) {
    event.preventDefault();
    valueToSend = Math.ceil(value*100);
  };

  function handleNewValue(e) {
    e.preventDefault();
    if (loading) return;
    setLoading(true);

    console.log(companyId);
    console.log(valueToSend);

    const data = {
      id: companyId,
      targetPrice: valueToSend
    }

    axios.put(
      `${process.env.API_BASE_URL}companies/update-target-price`, 
      data, 
      { headers: { 'X-Access-Token': token } }
    )
    .then(() => {
      setLoading(false);
      router.push('/companies');
    })
    .catch(err => {
      console.log(err.response);
      setLoading(false);
    });
  }

  return (
    <Form onSubmit={handleNewValue}>
      <select id="companies" onClick={(e) => setCompanyId(e.target.value)} required='required'>
        <option selected disabled>Selecione uma empresa...</option>
        { companies.length !== 0 
          ? companies.map(c => <option key={c.name} value={c.id}>{c.name}</option>)
          : <></>
        }
      </select>
      <IntlCurrencyInput 
        currency="BRL" 
        config={currencyConfig} 
        onChange={handleChange}
        required
      />
      <Button disabled={loading}>
        Enviar novo valor
      </Button>
    </Form>
  );
}
