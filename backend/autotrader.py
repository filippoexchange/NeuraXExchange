# ai/autotrader.py
def rebalance_portfolio(portfolio):
    # Distribuisci 50% in asset principali, 30% in crescita, 20% in stable
    new_allocation = {}
    total_value = sum(portfolio.values())

    for asset in portfolio:
        if asset in ['BTC', 'ETH']:
            new_allocation[asset] = total_value * 0.25
        elif asset in ['SOL', 'AVAX']:
            new_allocation[asset] = total_value * 0.15
        else:
            new_allocation[asset] = total_value * 0.10
    return new_allocation
