
export default async function handler(req, res) {
    if (req.method === 'POST') {
      try {
        const data = req.body; // Datos que se envían desde el cliente
  
        // Lógica para procesar los datos, guardar en la base de datos, etc.
  
        return res.status(200).json({ success: true, message: 'Datos recibidos con éxito' });
      } catch (error) {
        console.error('Error al procesar los datos:', error);
        return res.status(500).json({ success: false, message: 'Error al procesar los datos' });
      }
    } else {
      return res.status(405).json({ success: false, message: 'Método no permitido' });
    }
  }
  