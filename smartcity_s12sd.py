from pins import Pins


class S12SD:
    def __init__(self, pin = 0):
        self.adc = Pins(pin)
        # TODO: find a better way to declare

    def read_raw(self):
        return self.adc.read_analog()

    def read_uvi(self, pin):
        self.adc = Pins(pin)
        raw = self.read_raw()
        voltage = raw * 3.3 / 4095  # Convert to voltage
        return voltage / 0.858  # Convert to UVI
    
    def print_uvi(self, pin):
        self.adc = Pins(pin)
        print(self.read_uvi())
