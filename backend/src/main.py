import uvicorn

if __name__ == '__main__':
    uvicorn.run("app:app", port=6969, log_level="info")