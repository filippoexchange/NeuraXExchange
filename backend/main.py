# main.py
from fastapi import FastAPI, Request
from pydantic import BaseModel
from ai.evaluator import evaluate_trade
from ai.security import detect_intrusion
from ai.sentiment import analyze_news_sentiment

app = FastAPI(title="NeuraX Exchange")

# Dummy data per test
ip_history = {
    "user123": ["192.168.1.2", "192.168.1.3"]
}

class TradeRequest(BaseModel):
    user_id: str
    reputation: int
    asset: str
    amount: float
    side: str   # "buy" or "sell"
    current_ip: str
    news_articles: list[str]

@app.post("/trade")
async def execute_trade(trade: TradeRequest):
    # Step 1 – Security Check
    intrusion_result = detect_intrusion(ip_history, trade.current_ip, trade.user_id)
    if intrusion_result["alert"]:
        return {"status": "blocked", "reason": intrusion_result["reason"]}

    # Step 2 – Sentiment Analysis
    sentiment = analyze_news_sentiment(trade.news_articles)

    # Step 3 – Trade Evaluation
    decision = evaluate_trade(
        asset=trade.asset,
        amount=trade.amount,
        side=trade.side,
        user_reputation=trade.reputation
    )

    if not decision["approved"]:
        return {
            "status": "rejected",
            "reason": decision["reason"],
            "market_sentiment": sentiment
        }

    return {
        "status": "success",
        "message": f"Trade eseguito: {trade.side} {trade.amount} {trade.asset}",
        "market_sentiment": sentiment
    }
