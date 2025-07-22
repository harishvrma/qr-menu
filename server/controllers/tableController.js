import Table from "../models/table.js";
import { generateQRCode } from "../utils/generateQr.js";
const frontendBaseURL = 'https://fastidious-caramel-82ddf6.netlify.app'
export const createTable = async (req, res) => {
    try {
        const {tableNumber} = req.body;
        const qrData = `${frontendBaseURL}/table/${tableNumber}`;
        const qrCodeUrl = await generateQRCode(qrData);

        const newtable = new Table({tableNumber, qrCodeUrl});
        await newtable.save();
        
        res.status(201).json(newtable);
    } catch (error) {
        console.error("❌ Error in createTable:", error);
        res.status(500).json({ error: error.message });
    }
};