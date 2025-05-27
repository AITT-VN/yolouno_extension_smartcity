/* S12SD UV sensor */
Blockly.Blocks["smartcity_read_uvi"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "chỉ số UV chân %1",
			args0: [
				{
					type: "field_dropdown",
					name: "uv_pin",
					options: [
						["A0", "A0_PIN"],
						["A1", "A1_PIN"],
						["A2", "A2_PIN"],
						["A3", "A3_PIN"],
						["A4", "A4_PIN"],
						["A5", "A5_PIN"],
						["A6", "A6_PIN"],
						["A7", "A7_PIN"]
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_read_uvi"] = function (block) {
	var uv_pin = block.getFieldValue("uv_pin");
	Blockly.Python.definitions_['import_S12SD'] = 'from smartcity_s12sd import S12SD';
	Blockly.Python.definitions_['init_S12SD'] = 'uv_sensor = S12SD()';
	var code = 'uv_sensor.read_uvi(pin=' + uv_pin + ')';
	return [code, Blockly.Python.ORDER_NONE];
};

/* PM25 sensor */
Blockly.Blocks["smartcity_read_pm25"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "đọc cảm biến bụi mịn chân TX %1 RX %2",
			args0: [
				{
					type: "field_dropdown",
					name: "pm25_pintx",
					options: [
						["D0", "D0_PIN"],
						["D1", "D1_PIN"],
						["D2", "D2_PIN"],
						["D3", "D3_PIN"],
						["D4", "D4_PIN"],
						["D5", "D5_PIN"],
						["D6", "D6_PIN"],
						["D7", "D7_PIN"],
						["D8", "D8_PIN"],
						["D9", "D9_PIN"],
						["D10", "D10_PIN"],
						["D11", "D11_PIN"],
						["D12", "D12_PIN"],
						["D13", "D13_PIN"]
					]
				},
				{
					type: "field_dropdown",
					name: "pm25_pinrx",
					options: [
						["D0", "D0_PIN"],
						["D1", "D1_PIN"],
						["D2", "D2_PIN"],
						["D3", "D3_PIN"],
						["D4", "D4_PIN"],
						["D5", "D5_PIN"],
						["D6", "D6_PIN"],
						["D7", "D7_PIN"],
						["D8", "D8_PIN"],
						["D9", "D9_PIN"],
						["D10", "D10_PIN"],
						["D11", "D11_PIN"],
						["D12", "D12_PIN"],
						["D13", "D13_PIN"]
					]
				}
			],
			output: "undefined",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_read_pm25"] = function (block) {
	var pm25_pintx = block.getFieldValue("pm25_pintx");
	var pm25_pinrx = block.getFieldValue("pm25_pinrx");
	Blockly.Python.definitions_['import_pm25'] = 'from smartcity_pm25 import HT5102';
	Blockly.Python.definitions_['init_pm25'] = 'pm25_sensor = HT5102(tx_pin=' + pm25_pintx + ', rx_pin=' + pm25_pinrx + ')';
	var code = 'pm25_sensor.read_pm_data()';
	return [code, Blockly.Python.ORDER_NONE];
};

/* SHT30 temperature and humidity sensor */
Blockly.Blocks["smartcity_sht30_read_temp"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "nhiệt độ SHT30",
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_sht30_read_temp"] = function (block) {
	Blockly.Python.definitions_['import_sht30'] = 'from smartcity_sht30 import SHT30';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_sht30'] = 'sht30_sensor = SHT30(i2c_bus=i2c_bus)';
	var code = 'sht30_sensor.measure(fix=1)[0]';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["smartcity_sht30_read_humid"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "độ ẩm SHT30",
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_sht30_read_humid"] = function (block) {
	Blockly.Python.definitions_['import_sht30'] = 'from smartcity_sht30 import SHT30';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_sht30'] = 'sht30_sensor = SHT30(i2c_bus=i2c_bus)';
	var code = 'sht30_sensor.measure(fix=1)[1]';
	return [code, Blockly.Python.ORDER_NONE];
};

/* VEML6040 light sensor */
Blockly.Blocks['smartcity_veml6040_read_color'] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "Đọc giá trị RGB từ cảm biến",
			message0: "cảm biến VEML6040 đọc %1",
			args0: [
				{
					"type": "field_dropdown",
					"name": "COLOR",
					"options": [
						["độ sáng (lux)", "LUX"],
						["giá trị đỏ", "RED"],
						["giá trị xanh lá", "GREEN"],
						["giá trị xanh dương", "BLUE"],
						["nhiệt độ màu", "CCT"]
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python['smartcity_veml6040_read_color'] = function (block) {
	var color = block.getFieldValue('COLOR');
	var code = '';

	if (color === 'LUX') {
		code = 'veml6040_sensor.get_lux()';
	} else if (color === 'CCT') {
		code = 'veml6040_sensor.get_cct()';
	} else {
		code = 'veml6040_sensor.get_' + color.toLowerCase() + '()';
	}

	Blockly.Python.definitions_['import_veml6040'] = 'from smartcity_veml6040 import VEML6040';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_veml6040'] = "veml6040_sensor = VEML6040(i2c_bus=i2c_bus)"

	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['smartcity_veml6040_detect_color'] = {
	init: function () {
		this.jsonInit({
			message0: "cảm biến VEML6040 phát hiện màu %1",
			args0: [
				{
					"type": "field_dropdown",
					"name": "DETECT_COLOR",
					"options": [
						["vàng", "yellow"],
						["đỏ", "red"],
						["xanh lá", "green"],
						["xanh lơ", "cyan"],
						["xanh dương", "blue"],
						["hồng thẫm", "magenta"]
					]
				}
			],
			output: "Boolean",
			colour: "#CC6600",
			tooltip: "Phát hiện màu sắc cụ thể",
			helpUrl: ""
		});
	}
};

Blockly.Python['smartcity_veml6040_detect_color'] = function (block) {
	var detectColor = block.getFieldValue('DETECT_COLOR');
	var code = '(veml6040_sensor.Classify_Hue() == "' + detectColor + '")';
	Blockly.Python.definitions_['import_veml6040'] = 'from smartcity_veml6040 import VEML6040';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_veml6040'] = "veml6040_sensor = VEML6040(i2c_bus=i2c_bus)"
	return [code, Blockly.Python.ORDER_ATOMIC];
};

/* ACD1100 CO2 sensor */
Blockly.Blocks['smartcity_acd1100_read_co2'] = {
	init: function () {
		this.jsonInit({
			message0: "nồng độ CO2",
			output: "Number",
			colour: "#CC6600",
			tooltip: "",
			helpUrl: ""
		});
	}
};

Blockly.Python['smartcity_acd1100_read_co2'] = function (block) {
	Blockly.Python.definitions_['import_acd1100'] = 'from smartcity_acd1100 import ACD1100';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_acd1100'] = 'co2_sensor = ACD1100(i2c_bus=i2c_bus)';
	var code = "co2_sensor.get_co2_concentration()"
	return [code, Blockly.Python.ORDER_ATOMIC];
};

/* LCD1602 */
Blockly.Blocks["smartcity_lcd1602_backlight"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "%1 đèn màn hình LCD1602",
			args0: [
				{
					type: "field_dropdown",
					name: "action",
					options: [
						["bật", "on"],
						["tắt", "off"],
					],
				},
			],
			previousStatement: null,
			nextStatement: null,
			helpUrl: "",
		});
	},
	getDeveloperVars: function () {
		return ['lcd1602'];
	}
};

Blockly.Python['smartcity_lcd1602_backlight'] = function (block) {
	var action = block.getFieldValue("action");
	Blockly.Python.definitions_['import_lcd1602'] = 'from smartcity_lcd1602 import LCD1602';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_lcd1602'] = 'lcd1602 = LCD1602(i2c_bus=i2c_bus)';
	var code = 'lcd1602.backlight_' + action + '()\n';
	return code;
};

Blockly.Blocks["smartcity_lcd1602_display"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "hiện lên LCD1602 %1 tại x %2 y %3 %4",
			args0: [
				{
					type: "input_value",
					name: "string"
				},
				{
					type: "input_value",
					name: "X",
					check: "Number",
					min: 0,
					max: 16
				},
				{
					type: "input_value",
					name: "Y",
					check: "Number",
					min: 0,
					max: 2
				},
				{
					type: "input_dummy"
				},
			],
			previousStatement: null,
			nextStatement: null,
			helpUrl: "",
		});
	},
	getDeveloperVars: function () {
		return ['lcd1602'];
	}
};

Blockly.Python["smartcity_lcd1602_display"] = function (block) {
	Blockly.Python.definitions_['import_lcd1602'] = 'from smartcity_lcd1602 import LCD1602';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_lcd1602'] = 'lcd1602 = LCD1602(i2c_bus=i2c_bus)';
	var string = Blockly.Python.valueToCode(block, 'string', Blockly.Python.ORDER_ATOMIC);
	var x = Blockly.Python.valueToCode(block, 'X', Blockly.Python.ORDER_ATOMIC);
	var y = Blockly.Python.valueToCode(block, 'Y', Blockly.Python.ORDER_ATOMIC);  // TODO: Assemble Python into code variable.
	var code = "lcd1602.move_to(" + x + ", " + y + ")\n" + "lcd1602.putstr(" + string + ")\n";
	return code;
};

Blockly.Blocks["smartcity_lcd1602_clear"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "xóa màn hình LCD1602",
			previousStatement: null,
			nextStatement: null,
			helpUrl: "Xóa trắng màn hình LCD1602",
		});
	},
	getDeveloperVars: function () {
		return ['lcd1602'];
	}
};

Blockly.Python["smartcity_lcd1602_clear"] = function (block) {
	Blockly.Python.definitions_['import_lcd1602'] = 'from smartcity_lcd1602 import LCD1602';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_lcd1602'] = 'lcd1602 = LCD1602(i2c_bus=i2c_bus)';
	var code = "lcd1602.clear()";
	return code;
};

/* BMP280 pressure and temperature sensor */
Blockly.Blocks['smartcity_bmp280_read'] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "đọc %1 cảm biến BMP280",
			args0: [
				{
					"type": "field_dropdown",
					"name": "bmp280_data_type",
					"options": [
						["áp suất", "pressure"],
						["nhiệt độ", "temperature"],
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python['smartcity_bmp280_read'] = function (block) {
	var data_type = block.getFieldValue('bmp280_data_type');
	var code = 'bmp280_sensor.' + data_type;

	Blockly.Python.definitions_['import_bmp280'] = 'from smartcity_bmp280 import BMP280';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_bmp280'] = "bmp280_sensor = BMP280(i2c_bus=i2c_bus)"

	return [code, Blockly.Python.ORDER_ATOMIC];
};

/* Noise sensor */
Blockly.Blocks['smartcity_read_noise'] = {
	init: function () {
		this.jsonInit({
			message0: "độ ồn (dB)",
			output: "Number",
			colour: "#CC6600",
			tooltip: "",
			helpUrl: ""
		});
	}
};

Blockly.Python['smartcity_read_noise'] = function (block) {
	Blockly.Python.definitions_['import_read_noise'] = 'from smartcity_noise_sensor import ??';
	Blockly.Python.definitions_['init_read_noise'] = 'noise_sensor = ??';
	var code = "??"
	return [code, Blockly.Python.ORDER_ATOMIC];
};