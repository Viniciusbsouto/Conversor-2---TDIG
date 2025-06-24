import React from 'react';
import styles from './Home.module.css';
import Conversor from './Conversor';

const Home = () => {
  const [from, setFrom] = React.useState('USD');
  const [to, setTo] = React.useState('BRL');
  const [amount, setAmount] = React.useState(1);

  const [submitted, setSubmitted] = React.useState({
    from: 'USD',
    to: 'BRL',
    amount: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted({ from, to, amount });
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Conversor de Moedas</h2>

      <form onSubmit={handleSubmit}>
        <label className={styles.label}>
          Moeda de origem:
          <select
            name="from"
            className={styles.select}
            value={from}
            onChange={(e) => setFrom(e.target.value)}
          >
            <option value="USD">USD - Dólar</option>
            <option value="BRL">BRL - Real</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </label>

        <label className={styles.label}>
          Moeda de destino:
          <select
            name="to"
            className={styles.select}
            value={to}
            onChange={(e) => setTo(e.target.value)}
          >
            <option value="BRL">BRL - Real</option>
            <option value="USD">USD - Dólar</option>
            <option value="EUR">EUR - Euro</option>
          </select>
        </label>

        <label className={styles.label}>
          Valor:
          <input
            type="number"
            name="amount"
            value={amount}
            onChange={(e) => setAmount(e.target.value)}
            className={styles.input}
          />
        </label>

        <button type="submit" className={styles.button}>
          Converter
        </button>
      </form>

      <div className={styles.resultado}>
        <Conversor
          from={submitted.from}
          to={submitted.to}
          amount={submitted.amount}
        />
      </div>
    </div>
  );
};

export default Home;
