import QrCode from 'qrcode';
export const generateQRCode = async (data) => {
    try {
        return await QrCode.toDataURL(data);
    } catch (error) {
        console.error("QR Error", error);
        return null;
    }
};