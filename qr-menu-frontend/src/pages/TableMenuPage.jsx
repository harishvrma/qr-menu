import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import API from '../api';

const TableMenuPage = () => {
  const { tableId } = useParams();
  const [menu, setMenu] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    API.get('/menu')
      .then((res) => {
        setMenu(res.data);
        setLoading(false);
      })
      .catch((err) => {
        setError('Failed to load menu');
        setLoading(false);
      });
  }, []);

  const categories = [...new Set(menu.map((item) => item.category))];

  return (
    <div style={styles.container}>
      <h1 style={styles.title}>Menu for Table {tableId}</h1>
      {loading && <p>Loading...</p>}
      {error && <p style={{ color: 'red' }}>{error}</p>}
      {!loading && !error &&
        categories.map((category) => (
          <div key={category} style={styles.section}>
            <h2 style={styles.category}>{category}</h2>
            <ul style={styles.list}>
              {menu
                .filter((item) => item.category === category)
                .map((item) => (
                  <li key={item._id} style={styles.item}>
                    <span>{item.name}</span>
                    <span>₹{item.price}</span>
                  </li>
                ))}
            </ul>
          </div>
        ))}
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#ffffff',
    borderRadius: '10px',
    boxShadow: '0 0 10px rgba(0,0,0,0.1)',
    fontFamily: 'sans-serif',
  },
  title: {
    textAlign: 'center',
    fontSize: '2rem',
    marginBottom: '1rem',
  },
  section: {
    marginBottom: '2rem',
  },
  category: {
    borderBottom: '2px solid #ccc',
    paddingBottom: '0.5rem',
    marginBottom: '1rem',
  },
  list: {
    listStyle: 'none',
    padding: 0,
    margin: 0,
  },
  item: {
    display: 'flex',
    justifyContent: 'space-between',
    padding: '0.5rem 0',
    borderBottom: '1px solid #ddd',
  },
};

export default TableMenuPage;