from web3 import Web3

provider = "https://arbitrum-mainnet.infura.io/v3/c0f20c79f20d430fa251e4ea25880384"
web3 = Web3(Web3.HTTPProvider(provider))

from_address = "0xE25D74302eb895fE6E64829aA60b17B815264D14"
private_key = "0x86bc03f2c0f0aebee25eafabaedd77b028e0beab582c03c808e7ce23fc3f7cea"

def send_ether(to, amount_eth):
    nonce = web3.eth.get_transaction_count(from_address)
    tx = {
        'nonce': nonce,
        'to': to,
        'value': web3.to_wei(amount_eth, 'ether'),
        'gas': 21000,
        'gasPrice': web3.to_wei('50', 'gwei'),
    }
    signed_tx = web3.eth.account.sign_transaction(tx, private_key)
    return web3.to_hex(web3.eth.send_raw_transaction(signed_tx.rawTransaction))
