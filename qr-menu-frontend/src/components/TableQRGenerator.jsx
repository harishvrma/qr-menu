import { useState } from "react";
import API from "../api";
import './TableQRGenerator.css';

const TableQRGenerator = ()=>{
    const [tableNumber, SetTableNumber] = useState('');
    const [qrData, setqrData] = useState(null);

    const generateQr = async () => {
        try {
            const res = await API.post('tables/create', {tableNumber});
            setqrData(res.data);
        } catch (error) {
            alert('Error creating Qr');
            console.error(error);
            
        }
    };

    return (
        <div className="qr-generator">
            <h2>Generate Qr for Table</h2>
            <input type="number" 
            placeholder="Enter table number"
            value={tableNumber}
            onChange={(e)=> SetTableNumber(e.target.value)}
            />

            <button onClick={generateQr}>Generate QR</button>

            {qrData && (
                <div className="qr-preview">
                    <p>Table #{qrData.tableNumber}</p>
                    <img src={qrData.qrCodeUrl} alt="QR Code" />
                </div>
            )}
        </div>
    )


}

export default TableQRGenerator;