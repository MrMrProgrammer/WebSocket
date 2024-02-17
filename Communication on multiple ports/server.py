import asyncio
import websockets
import random

async def handle_client(websocket, path):
    random_port = random.randint(1024, 65535)
    print(f"Generated random port: {random_port}")
    
    await websocket.send(str(random_port))
    
    async def random_server(websocket, path):
        print(f"Connection established on random port {random_port}")
        async for data in generate_stream_data():
            await websocket.send(data)
            
    await websockets.serve(random_server, "192.168.11.30", random_port)

async def generate_stream_data():
    for i in range(50):
        yield f'Data {i}'
        await asyncio.sleep(1)

async def main():
    async with websockets.serve(handle_client, "192.168.11.30", 8000):
        await asyncio.Future()

if __name__ == "__main__":
    asyncio.run(main())