# ai/evaluator.py
import random

def evaluate_trade(asset, amount, side, user_reputation):
    # Logica base: validazione risk/reward
    if user_reputation < 50 and amount > 10000:
        return {"approved": False, "reason": "Rischio eccessivo per utente inesperto"}
    
    risk_score = (amount / 1000) * (random.random() + 0.5)
    if risk_score > 8:
        return {"approved": False, "reason": "Trade troppo rischioso"}

    return {"approved": True, "reason": "Trade approvato"}
