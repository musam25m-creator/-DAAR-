FROM python:3.12-slim

ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

WORKDIR /app
COPY . /app

# Supports both contexts:
# 1) build context is this folder (site.py exists at /app/site.py)
# 2) build context is monorepo root with app in /app/hisob_fayl/site.py
CMD ["sh", "-c", "if [ -f /app/site.py ]; then python /app/site.py; else python /app/hisob_fayl/site.py; fi"]
