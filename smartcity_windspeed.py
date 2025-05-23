from pins import Pins

class WindSpeed:
    def __init__(self, pin=0):
        self.adc = Pins(pin)

    def read_raw(self):
        return self.adc.read_analog()
    
    def read_wind_speed(self, pin):
        self.adc = Pins(pin)
        self.read_raw()
        # TODO: Calculate wind speed
        return 0
