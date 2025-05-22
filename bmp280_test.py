from smartcity_bmp280 import *
from yolo_uno import *

bmp = BMP280(scl=SCL_PIN, sda=SDA_PIN)

while True:
    print(bmp.temperature)
    print(bmp.pressure)
    time.sleep(1)
