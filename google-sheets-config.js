// Google Sheets Configuration
// Ganti nilai-nilai di bawah ini dengan konfigurasi Google Sheets Anda

const GOOGLE_SHEETS_CONFIG = {
    // ID Google Sheets - ambil dari URL Google Sheets
    // Contoh: https://docs.google.com/spreadsheets/d/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/edit
    // ID = 1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms
    spreadsheetId: '1IqwbNFkFjYECdhTlI4as9W6x1dPZ05LMV1XPVRi3-iY',
    
    // API Key Google Sheets - dapatkan dari Google Cloud Console
    apiKey: 'AIzaSyBkUCb_f0zolsE7dKuGBgIUX83MwaFyOlc',
    
    // Nama sheet untuk data tamu
    guestsSheet: 'Guests',
    
    // Nama sheet untuk data ucapan
    wishesSheet: 'Wishes'
};

// Export untuk digunakan di script.js
if (typeof module !== 'undefined' && module.exports) {
    module.exports = GOOGLE_SHEETS_CONFIG;
} else {
    window.GOOGLE_SHEETS_CONFIG = GOOGLE_SHEETS_CONFIG;
} 