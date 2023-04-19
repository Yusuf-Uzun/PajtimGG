import uvicorn

if __name__ == '__main__':
    #uvicorn.run("app:app", port=6969, log_level="info")
    uvicorn.run('app:app', host='localhost', port=3888, log_level="info", reload=True) # TODO: Reveal JS implementieren
