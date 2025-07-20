import table from "../models/table.js";
import { generateQRCode } from "../utils/generateQr.js";
const frontendBaseURL = 'https://fastidious-caramel-82ddf6.netlify.app/admin/'
export const createTable = async (req, res) => {
    try {
        const {tableNumber} = req.body;
        const qrData = `${frontendBaseURL}/table/${tableNumber}`;
        const qrCodeUrl = await generateQRCode(qrData);

        const newtable = new table({tableNumber, qrCodeUrl});
        await newtable.save();
        
        res.status(201).json(newtable);
    } catch (error) {
        res.status(500).json({error:error.message})
    }
};