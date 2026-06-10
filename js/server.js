const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// CORS aktivieren (erlaubt ALLE Origins – für Testzwecke)
app.use(cors());

// JSON-Parsing für POST-Daten
app.use(express.json());

// OPTIONS-Preflight wird automatisch von 'cors' behandelt

// POST-Route für Login-Daten
app.post('/register', (req, res) => {
  console.log('📩 Erhaltene Anmeldedaten:');
  console.log('   Benutzername:', req.body.username);
  console.log('   Passwort:', req.body.password);
  
  // Hier könntest du die Daten speichern oder weiterverarbeiten
  res.json({
    status: 'ok',
    message: 'Daten empfangen',
    data: req.body
  });
});

// Test-Route (optional)
app.get('/', (req, res) => {
  res.send('🚀 API läuft! CORS ist aktiviert.');
});

app.listen(PORT, () => {
  console.log(`✅ API-Server gestartet auf Port ${PORT}`);
});
