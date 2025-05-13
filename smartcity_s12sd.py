from pins import *
from yolo_uno import *


class S12SD:
    def __init__(self, pin):
        self.adc = Pins(pin)

    def read_raw(self):
        return self.adc.read_analog()

    def read_uvi(self):
        raw = self.read_raw()
        voltage = raw * 3.3 / 4095  # Convert to voltage
        return voltage / 0.858  # Convert to UVI
    
    def print_uvi(self, pin):
        self.adc = Pins(pin)
        print(self.read_uvi())
