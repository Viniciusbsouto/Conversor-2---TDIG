import React from 'react';

const Conversor = ({ from, to, amount }) => {
  const [converted, setConverted] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (!amount || isNaN(amount)) return;

    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`,
        );
        const data = await res.json();
        if (data.rates && typeof data.rates[to] === 'number') {
          setConverted(data.rates[to]);
        } else {
          setConverted(null);
        }
      } catch (error) {
        console.error('Erro ao buscar conversão:', error);
        setConverted(null);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [from, to, amount]);

  if (!from || !to || !amount) return null;

  return (
    <div>
      {loading ? (
        <p>Carregando conversão...</p>
      ) : converted !== null ? (
        <p>
          {amount} {from} ={' '}
          <strong>
            {converted.toFixed(2)} {to}
          </strong>
        </p>
      ) : (
        <p>Não foi possível converter.</p>
      )}
    </div>
  );
};

export default Conversor;
