import React from 'react';

export default function CompaniesData({ name, marketPrice, targetPrice }) {
  const formatter = new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL'
  });
  const correctMarketPrice = formatter.format(marketPrice/100);
  const correctTargetPrice = formatter.format(targetPrice/100);

  return (
    <>
      <div>{name}</div>
      <div>{correctMarketPrice}</div>
      <div>{correctTargetPrice}</div>
    </>
  );
}
