FROM python:3.10-slim

WORKDIR /app


RUN apt-get update && apt-get install -y curl dos2unix


COPY startup.sh /app/startup.sh
COPY brute-force-python.py /app/brute-force-python.py
COPY requirements.txt /app/requirements.txt
COPY wordlist.txt /app/wordlist.txt

RUN chmod +x /app/startup.sh && dos2unix /app/startup.sh


RUN pip install --no-cache-dir -r /app/requirements.txt

RUN dos2unix /app/wordlist.txt /app/startup.sh /app/brute-force-python.py

CMD ["/bin/bash", "/app/startup.sh"]
