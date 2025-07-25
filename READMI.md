# NeuraXExchange 🧠💱

Un exchange decentralizzato con intelligenza artificiale integrata, per ottimizzare operazioni crypto e premiare hacker etici tramite bug bounty.  
**Stack tecnologico:** FastAPI, PostgreSQL, React, Web3, Render, Vercel

🔧 Installazione locale
 1. Clona il progetto

bash
git clone https://github.com/filippoexchange/NeuraXExchange.git
cd NeuraXExchange
2. Backend (Python + FastAPI)
bash
cd backend
python -m venv env
source env/bin/activate   # su Linux/macOS
env\Scripts\activate.bat  # su Windows

pip install -r requirements.txt
uvicorn main:app --reload
3. Frontend (React)
bash
cd frontend
npm install
npm start
🗃️ Database PostgreSQL
Assicurati di avere PostgreSQL attivo e crea lo schema:

bash
psql -U postgres -d neurax -f backend/schema.sql
Oppure usa Docker:

bash
docker run -d -p 5432:5432 -e POSTGRES_PASSWORD=yourpass -e POSTGRES_DB=neurax postgres
🌐 Deploy online
✅ GitHub (sincronizzazione repository)
Carica tutto il progetto:

bash
git init
git add .
git commit -m "Deploy iniziale NeuraXExchange"
git remote add origin https://github.com/filippoexchange/NeuraXExchange.git
git push -u origin master
✅ Vercel (frontend)
Vai su https://vercel.com

Importa il repo e imposta frontend/ come directory root

Framework: React o Next.js

Variabili d’ambiente: NEXT_PUBLIC_API_URL=https://neurax-backend.onrender.com

✅ Render (backend)
Vai su https://render.com

Crea nuovo Web Service → importa da GitHub

Imposta root directory: backend/

Build command:

bash
pip install -r requirements.txt
Start command:

bash
uvicorn main:app --host 0.0.0.0 --port 10000
📂 Variabili ambiente
Crea un file .env.example con:

bash
DATABASE_URL=postgres://postgres:yourpass@localhost:5432/neurax
WEB3_PROVIDER=https://goerli.infura.io/v3/YOUR_INFURA_KEY
WALLET_PRIVATE_KEY=0x...
FROM_ADDRESS=0x...