import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './DashboardGStock.css';

function DashboardGStock() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); 

  useEffect(() => {
    fetch('http://your-api-endpoint/commandes') // Replace with your API URL
      .then((response) => response.json())
      .then((result) => {
        setData(result);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
        setLoading(false);
      });
  }, []);

  const handleAjouterClick = () => {
    navigate('/add-produit'); 
  };

  return (
    <div className="wiou">
      <div className="p">
        <div className="profile-section">
          <img
            src={`${process.env.PUBLIC_URL}/wiou.png`}
            alt="Profile"
            className="profile-pic"
          />
          <div className="profile-info">
            <h4>Jhon Doe</h4>
            <p>Admin Stock</p>
          </div>
        </div>

        <div className="pContent">
          <button>Stock</button>
        </div>
      </div>

      <div className="m">
        <div className="woiu">
          <h4>my profile</h4>
          <h4 style={{ paddingLeft: '2em', paddingRight: '2em' }}>logout</h4>
        </div>

        <div className="table-container">
          <div className="table-actions">
            <button className="add-btn" onClick={handleAjouterClick}>
              Ajouter
            </button>
            <input
              type="text"
              placeholder="rechercher un produit"
              className="search-input"
            />
          </div>
          {loading ? (
            <p>Loading...</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Nom de produit</th>
                  <th>Quantité</th>

                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    <td>{row.Nomprod}</td>
                    <td>{row.quantite}</td>
                   
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}

export default DashboardGStock;
