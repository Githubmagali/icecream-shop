
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body; // Datos que se envían desde el cliente
  
        // Lógica para procesar los datos, guardar en la base de datos, etc.
  
        return res.status(200).json({ success: true, message: 'Data received successfully' });
      } catch (error) {
        console.error('Error processing data:', error);
        return res.status(500).json({ success: false, message: 'Error processing data' });
      }
    } else {
      return res.status(405).json({ success: false, message: 'Disallowed method' });
    }
  }
  