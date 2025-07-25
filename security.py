# ai/security.py
def detect_intrusion(ip_history, current_ip, user_id):
    if current_ip not in ip_history[user_id]:
        return {"alert": True, "reason": "IP non riconosciuto"}
    return {"alert": False}
