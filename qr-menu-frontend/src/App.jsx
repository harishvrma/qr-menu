// File: src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import TableQRGenerator from './components/TableQRGenerator';
import TableMenuPage from './pages/TableMenuPage';

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/admin"
          element={
            <div>
              <h1 style={{ textAlign: 'center', marginTop: '20px' }}>
                QR Code Generator
              </h1>
              <TableQRGenerator />
            </div>
          }
        />
        <Route path="/table/:tableId" element={<TableMenuPage />} />
        <Route path="/" element={<Navigate to="/admin" />} />
      </Routes>
    </Router>
  );
}

export default App;
