from setting import *
from utility import *
from machine import UART

# from machine import Pin
# import utime
# import ujson


class HT5102:
    def __init__(self, uart_id=2, baudrate=9600, rx_pin=16, tx_pin=17):
        self.uart = UART(
            uart_id,
            baudrate=baudrate,
            rx=rx_pin,
            tx=tx_pin,
            timeout=1000,  # Timeout để đợi dữ liệu (ms)
        )
        self.buffer = bytearray(32)  # Buffer lưu dữ liệu raw

    def _validate_checksum(self, data):
        """Kiểm tra checksum (tổng 15 byte đầu == 2 byte cuối)"""
        if len(data) < 17:
            return False
        checksum = sum(data[:15])  # Tổng từ byte 0 đến byte 14
        received_checksum = (data[15] << 8) | data[16]  # 2 byte cuối
        return checksum == received_checksum

    def read_pm_data(self, tx_pin, rx_pin):
        """Đọc giá trị PM2.5 và PM10 từ cảm biến."""
        # self.rx = rx_pin
        # self.tx = tx_pin
        # TODO: Add UART TX RX change implementation
        while True:
            # Tìm header 0x42 0x4D
            header = self.uart.read(2)
            if header == b"\x42\x4d":
                # Đọc 15 byte tiếp theo (tổng 17 byte)
                data = self.uart.read(15)
                if data and len(data) == 15:
                    full_data = header + data
                    if self._validate_checksum(full_data):
                        # PM2.5 = byte 5 (high) + byte 6 (low) / 10
                        pm25 = ((data[3] << 8) | data[4]) / 10.0
                        # PM10 = byte 7 (high) + byte 8 (low) / 10
                        pm10 = ((data[5] << 8) | data[6]) / 10.0
                        return pm25, pm10
            time.sleep(0.1)  # Tránh đọc liên tục

    def measure(self):
        """Trả về giá trị PM2.5 và PM10 (dạng dictionary)."""
        pm25, pm10 = self.read_pm_data()
        return {"pm25": pm25, "pm10": pm10}
