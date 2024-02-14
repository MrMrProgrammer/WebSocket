import asyncio
import websockets
import time

async def stream_data(websocket, path):
    # تولید داده به صورت stream
    for i in range(50):
        await websocket.send(f'Data {i}')
        await asyncio.sleep(1)  # شبیه‌سازی تولید داده در طول زمان

# آدرس و پورت مورد استفاده برای برقراری اتصال
HOST = '127.0.0.1'
PORT = 8000

# ایجاد و اجرای سرور WebSocket
async def main():
    start_server = await websockets.serve(stream_data, HOST, PORT)
    await start_server.wait_closed()

# اجرای برنامه
if __name__ == "__main__":
    asyncio.run(main())
