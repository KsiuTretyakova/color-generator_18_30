import React, {useState} from "react";

function App() {

  const [color, setColor] = useState('#fff')

  const generateColor = () => {
    const randomColor = `#${Math.floor(Math.random() * 16999999).toString(16)}`;
    setColor(randomColor);
  };

  return (
    <div style={{...styles.container, backgroundColor: color}}>
      <h1 style={styles.title}>Color generator</h1>
      <p style={styles.text}>This color: {color}</p>
      <button style={styles.button} onClick={generateColor}>generate color</button>
    </div>
  );
}

const styles = {
  container: {
    height: '100vh', // Висота на весь екран
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    transition: 'background-color 0.5s ease' // Плавна зміна кольору
  },
  title: {
    fontSize: '2rem',
    color: '#333'
  },
  text: {
    fontSize: '1.2rem',
    color: '#555',
    margin: '10px 0'
  },
  button: {
    padding: '10px 20px',
    fontSize: '1rem',
    color: '#fff',
    backgroundColor: '#007bff',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s ease'
  }
}

export default App;
