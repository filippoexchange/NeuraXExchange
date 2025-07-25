# ai/sentiment.py
from textblob import TextBlob

def analyze_news_sentiment(news_articles):
    total_score = 0
    for article in news_articles:
        sentiment = TextBlob(article).sentiment.polarity
        total_score += sentiment
    avg_score = total_score / len(news_articles)
    return "Bullish" if avg_score > 0.2 else "Bearish" if avg_score < -0.2 else "Neutrale"
