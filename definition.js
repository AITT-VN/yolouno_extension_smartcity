/* CoreIoT */
var virtualPins = [
  [
    "V0",
    "0"
  ],
  [
    "V1",
    "1"
  ],
  [
    "V2",
    "2"
  ],
  [
    "V3",
    "3"
  ],
  [
    "V4",
    "4"
  ],
  [
    "V5",
    "5"
  ],
  [
    "V6",
    "6"
  ],
  [
    "V7",
    "7"
  ],
  [
    "V8",
    "8"
  ],
  [
    "V9",
    "9"
  ],
  [
    "V10",
    "10"
  ],
  [
    "V11",
    "11"
  ],
  [
    "V12",
    "12"
  ],
  [
    "V13",
    "13"
  ],
  [
    "V14",
    "14"
  ],
  [
    "V15",
    "15"
  ],
  [
    "V16",
    "16"
  ],
  [
    "V17",
    "17"
  ],
  [
    "V18",
    "18"
  ],
  [
    "V19",
    "19"
  ],
  [
    "V20",
    "20"
  ]
];

Blockly.Blocks["coreiot_connect"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      tooltip: "Connect to server Core IoT",
      message0: "connect Core IoT wifi %1 password %2 %3 access token %4 %5 server %6 port %7",
      previousStatement: null,
      nextStatement: null,
      args0: [
        {
          "type": "field_input",
          "name": "WIFI",
          "text": "ssid"
        },
        {
          "type": "field_input",
          "name": "PASSWORD",
          "text": "password"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "TOKEN",
          "text": "xxxxxxxxxxxxxxxxxxxx"
        },
        {
          "type": "input_dummy"
        },
        {
          "type": "field_input",
          "name": "HOST",
          "text": "app.coreiot.io"
        },
        {
          "type": "field_input",
          "name": "PORT",
          "text": "1883"
        },
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python['coreiot_connect'] = function(block) {
  var wifi = block.getFieldValue('WIFI');
  var password = block.getFieldValue('PASSWORD');
  var token = block.getFieldValue('TOKEN');
  var host = block.getFieldValue('HOST');
  var port = block.getFieldValue('PORT');

  Blockly.Python.definitions_['import_coreiot'] = 'from ci_device_mqtt import *';
  Blockly.Python.definitions_['init_coreiot_mqtt'] = "ci_client = CIDeviceMqttClient('" + wifi + "', '" + password + "', '" + token + "', '" + host+ "', " + port + ")\n";
  
  // TODO: Assemble Python into code variable.
  var code = "await ci_client.connect()\n";
  return code;
};

Blockly.Blocks["coreiot_send_telemetry_short"] = {
  init: function () {
    this.jsonInit({
      colour: "#CC6600",
      nextStatement: null,
      tooltip: "Send telemetry to server",
      message0: "send telemetry %1 %2 : %3 %4",
      previousStatement: null,
      args0: [
        {
          type: "field_dropdown",
          name: "KEY",
          options: virtualPins,
        },
        {
          type: "input_dummy",
        },
        {
          type: "input_value",
          name: "VALUE",
        },        
        {
          type: "input_dummy",
        }
      ],
      helpUrl: "",
    });
  },
};

Blockly.Python['coreiot_send_telemetry_short'] = function(block) {
  var value = Blockly.Python.valueToCode(block, 'VALUE', Blockly.Python.ORDER_ATOMIC);
  var key = block.getFieldValue('KEY');
  // TODO: Assemble Python into code variable.
  Blockly.Python.definitions_['import_coreiot'] = 'from ci_device_mqtt import *';
  var code = "await ci_client.send_telemetry({'V" + key + "': " + value + "})\n";
  return code;
};

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
			output: "Number",
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
Blockly.Blocks["smartcity_sht30_read"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "đọc %1 SHT30",
			args0: [
				{
					"type": "field_dropdown",
					"name": "sht30_data_type",
					"options": [
						["nhiệt độ", "0"],
						["độ ẩm", "1"],
					]
				}
			],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_sht30_read"] = function (block) {
	Blockly.Python.definitions_['import_sht30'] = 'from smartcity_sht30 import SHT30';
	Blockly.Python.definitions_['define_SoftI2C'] = 'i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)';
	Blockly.Python.definitions_['init_sht30'] = 'sht30_sensor = SHT30(i2c_bus=i2c_bus)';
	var data_type = block.getFieldValue('sht30_data_type');
	var code = 'sht30_sensor.measure(fix=1)[' + data_type + ']';
	return [code, Blockly.Python.ORDER_NONE];
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
	var code = "lcd1602.clear()\n";
	return code;
};

/* Sound Level Meter sensor */
Blockly.Blocks['smartcity_slm_read'] = {
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

Blockly.Python['smartcity_slm_read'] = function (block) {
	Blockly.Python.definitions_['import_read_noise'] = 'from smartcity_sound_level_meter import SoundLevelSensor';
	Blockly.Python.definitions_['define_SoftI2C'] = "i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)"
	Blockly.Python.definitions_['init_read_noise'] = 'sl_sensor = SoundLevelSensor(i2c_bus=i2c_bus)';
	var code = "sl_sensor.read_decibel()"
	return [code, Blockly.Python.ORDER_ATOMIC];
};

Blockly.Blocks['smartcity_slm_calibrate'] = {
	init: function () {
		this.jsonInit({
			message0: "hiệu chỉnh module đo độ ồn giá trị %1 %2",
			colour: "#CC6600",
			args0: [
				{
					type: "input_value",
					name: "slm_cal_value",
					check: "Number",
					min: -32768,
					max: 32767
				},
				{
					type: "input_dummy"
				},
			],
			tooltip: "",
			helpUrl: "",
			previousStatement: null,
			nextStatement: null,
		});
	}
};

Blockly.Python['smartcity_slm_calibrate'] = function (block) {
	Blockly.Python.definitions_['import_read_noise'] = 'from smartcity_sound_level_meter import SoundLevelSensor';
	Blockly.Python.definitions_['define_SoftI2C'] = "i2c_bus = machine.SoftI2C(scl=SCL_PIN, sda=SDA_PIN)"
	Blockly.Python.definitions_['init_read_noise'] = 'sl_sensor = SoundLevelSensor(i2c_bus=i2c_bus)';
	var cal_val = Blockly.Python.valueToCode(block, 'slm_cal_value', Blockly.Python.ORDER_ATOMIC);
	var code = "sl_sensor.calibrate(" + cal_val + ")\n";
	return code
};

/* Anemometer */

Blockly.Blocks["smartcity_anemometer_read"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "tốc độ gió chân %1",
			args0: [
				{
					type: "field_dropdown",
					name: "ane_pin",
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

Blockly.Python["smartcity_anemometer_read"] = function (block) {
	var uv_pin = block.getFieldValue("ane_pin");
	Blockly.Python.definitions_['import_Anemometer'] = 'from smartcity_anemometer import Anemometer';
	Blockly.Python.definitions_['init_Anemometer'] = 'ane_sensor = Anemometer()';
	var code = 'ane_sensor.read_wind_speed(pin=' + uv_pin + ')';
	return [code, Blockly.Python.ORDER_NONE];
}; 
