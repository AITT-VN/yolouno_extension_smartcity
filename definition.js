// Auto-generated Blockly blocks and Python code

Blockly.Blocks["smartcity_read_uvi"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "chỉ số UV ở chân %1",
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
	Blockly.Python.definitions_['import_smartcity_s12sd'] = 'from smartcity_s12sd import *';
	Blockly.Python.definitions_['init_smartcity_s12sd'] = 'smartcity_uv = S12SD(pin=(' + uv_pin + '))';
	var code = 'smartcity_uv.read_uvi()';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["smartcity_read_pm25"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "giá trị cảm biến bụi ở chân TX %1 và RX %2",
			args0: [
  {
    type: "field_dropdown",
    name: "pm25_pintx",
    options: [
      ["A0", "A0_PIN"],
      ["A1", "A1_PIN"],
      ["A2", "A2_PIN"],
      ["A3", "A3_PIN"],
      ["A4", "A4_PIN"],
      ["A5", "A5_PIN"],
      ["A6", "A6_PIN"],
      ["A7", "A7_PIN"],
      ["A8", "A8_PIN"],
      ["A9", "A9_PIN"],
      ["A10", "A10_PIN"],
      ["A11", "A11_PIN"],
      ["A12", "A12_PIN"],
      ["A13", "A13_PIN"]
    ]
  },
  {
    type: "field_dropdown",
    name: "pm25_pinrx",
    options: [
      ["A0", "A0_PIN"],
      ["A1", "A1_PIN"],
      ["A2", "A2_PIN"],
      ["A3", "A3_PIN"],
      ["A4", "A4_PIN"],
      ["A5", "A5_PIN"],
      ["A6", "A6_PIN"],
      ["A7", "A7_PIN"],
      ["A8", "A8_PIN"],
      ["A9", "A9_PIN"],
      ["A10", "A10_PIN"],
      ["A11", "A11_PIN"],
      ["A12", "A12_PIN"],
      ["A13", "A13_PIN"]
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
	Blockly.Python.definitions_['import_smartcity_pm25'] = 'from smartcity_pm25 import *';
	Blockly.Python.definitions_['init_smartcity_pm25'] = 'pm_sensor = HT5102(tx='+pm25_pintx+', rx='+pm25_pinrx+')';
	var code = 'pm_sensor.read_pm_data()';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["smartcity_sht30_read_temp"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "nhiệt độ SHT30",
			args0: [

],
			output: "undefined",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_sht30_read_temp"] = function (block) {
	Blockly.Python.definitions_['import_smartcity_sht30'] = 'from smartcity_sht30 import *';
	Blockly.Python.definitions_['init_smartcity_sht30'] = 'sht30 = SHT30(SCL_PIN, SDA_PIN)';
	var code = 'sht30.measure(fix=1)[0]';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["smartcity_sht30_read_humid"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "độ ẩm SHT30",
			args0: [

],
			output: "undefined",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_sht30_read_humid"] = function (block) {
	Blockly.Python.definitions_['import_smartcity_sht30'] = 'from smartcity_sht30 import *';
	Blockly.Python.definitions_['init_smartcity_sht30'] = 'sht30 = SHT30(SCL_PIN, SDA_PIN)';
	var code = 'sht30.measure(fix=1)[1]';
	return [code, Blockly.Python.ORDER_NONE];
};



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

	Blockly.Python.definitions_['import_smartcity_veml6040'] = 'from smartcity_veml6040 import *';

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
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['smartcity_acd1100_read_co2'] = {
	init: function () {
		this.jsonInit({
			message0: "nồng độ CO2",
			args0: [],
			output: "Number",
			colour: "#CC6600",
			tooltip: "",
			helpUrl: ""
		});
	}
};

Blockly.Python['smartcity_acd1100_read_co2'] = function (block) {
	Blockly.Python.definitions_['import_smartcity_acd1100'] = 'from smartcity_acd1100 import *';
	var code = "ACD1100.get_co2_concentration()"
	return [code, Blockly.Python.ORDER_ATOMIC];
};

// LCD 1602

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
	// TODO: Assemble Python into code variable.
	Blockly.Python.definitions_['import_lcd1602'] = 'from smartcity_lcd1602 import LCD1602';
	Blockly.Python.definitions_['import_lcd1602_init'] = 'lcd1602 = LCD1602()';
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
	Blockly.Python.definitions_['import_lcd1602_init'] = 'lcd1602 = LCD1602()';
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
			args0: [
			],
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
	// TODO: Assemble Python into code variable.
	Blockly.Python.definitions_['import_lcd1602'] = 'from smartcity_lcd1602 import LCD1602';
	Blockly.Python.definitions_['import_lcd1602_init'] = 'lcd1602 = LCD1602()';
	var code = "lcd1602.clear()\n";
	return code;
};