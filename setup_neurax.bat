@echo off
setlocal

echo ===========================================
echo NeuraX Exchange — Setup Iniziale .BAT 💥
echo ===========================================

REM Controlla Python
python --version 2>NUL | findstr /C:"Python 3.11"
IF %ERRORLEVEL% NEQ 0 (
    echo ❌ Python 3.11 NON rilevato.
    echo 👉 Scarica e installa Python 3.11 da https://www.python.org/downloads/release/python-3110/
    pause
    exit /b
) ELSE (
    echo ✅ Python 3.11 rilevato!
)

REM Crea ambiente virtuale
echo 🔧 Creazione ambiente virtuale...
python -m venv env

REM Attiva l'ambiente virtuale
call env\Scripts\activate

REM Aggiorna pip
echo 🔁 Aggiornamento pip...
python -m pip install --upgrade pip

REM Installa moduli NeuraX
echo 📦 Installazione moduli AI...
pip install fastapi uvicorn textblob numpy scikit-learn tensorflow

echo ✅ Setup completato con successo!
echo 💡 Per avviare il server: uvicorn main:app --reload

pause
endlocal
