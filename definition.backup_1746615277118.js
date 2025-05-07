// Auto-generated Blockly blocks and Python code

Blockly.Blocks["smartcity_read_uvi"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "đọc chỉ số UV ở chân %1",
			args0: [
      {
            "type": "field_dropdown",
            "name": "pin",
            "options": [
                  [
                        "A0",
                        "A0_PIN"
                  ],
                  [
                        "A1",
                        "A1_PIN"
                  ],
                  [
                        "A2",
                        "A2_PIN"
                  ],
                  [
                        "A3",
                        "A3_PIN"
                  ],
                  [
                        "A4",
                        "A4_PIN"
                  ],
                  [
                        "A5",
                        "A5_PIN"
                  ],
                  [
                        "A6",
                        "A6_PIN"
                  ],
                  [
                        "A7",
                        "A7_PIN"
                  ]
            ]
      }
],
			output: "Number",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_read_uvi"] = function (block) {
	var pin = block.getFieldValue("pin");
	Blockly.Python.definitions_['import_smartcity_s12sd'] = 'from smartcity_s12sd import *';
	Blockly.Python.definitions_['init_read_uvi'] = 'smartcity_uv = S12SD(pin=(' + pin + '))';
	var code = 'smartcity_uv.read_uvi()';
	return [code, Blockly.Python.ORDER_NONE];
};

Blockly.Blocks["smartcity_read_pm25"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "cấu hình cảm biến bụi chân TX %1 và RX %2",
			args0: [
      {
            "type": "field_dropdown",
            "name": "pintx",
            "options": [
                  [
                        "A0",
                        "A0_PIN"
                  ],
                  [
                        "A1",
                        "A1_PIN"
                  ],
                  [
                        "A2",
                        "A2_PIN"
                  ],
                  [
                        "A3",
                        "A3_PIN"
                  ],
                  [
                        "A4",
                        "A4_PIN"
                  ],
                  [
                        "A5",
                        "A5_PIN"
                  ],
                  [
                        "A6",
                        "A6_PIN"
                  ],
                  [
                        "A7",
                        "A7_PIN"
                  ],
                  [
                        "A8",
                        "A8_PIN"
                  ],
                  [
                        "A9",
                        "A9_PIN"
                  ],
                  [
                        "A10",
                        "A10_PIN"
                  ],
                  [
                        "A11",
                        "A11_PIN"
                  ],
                  [
                        "A12",
                        "A12_PIN"
                  ],
                  [
                        "A13",
                        "A13_PIN"
                  ]
            ]
      },
      {
            "type": "field_dropdown",
            "name": "pinrx",
            "options": [
                  [
                        "A0",
                        "A0_PIN"
                  ],
                  [
                        "A1",
                        "A1_PIN"
                  ],
                  [
                        "A2",
                        "A2_PIN"
                  ],
                  [
                        "A3",
                        "A3_PIN"
                  ],
                  [
                        "A4",
                        "A4_PIN"
                  ],
                  [
                        "A5",
                        "A5_PIN"
                  ],
                  [
                        "A6",
                        "A6_PIN"
                  ],
                  [
                        "A7",
                        "A7_PIN"
                  ],
                  [
                        "A8",
                        "A8_PIN"
                  ],
                  [
                        "A9",
                        "A9_PIN"
                  ],
                  [
                        "A10",
                        "A10_PIN"
                  ],
                  [
                        "A11",
                        "A11_PIN"
                  ],
                  [
                        "A12",
                        "A12_PIN"
                  ],
                  [
                        "A13",
                        "A13_PIN"
                  ]
            ]
      }
],
			output: "undefined",
			helpUrl: ""
		});
	}
};

Blockly.Python["smartcity_read_pm25"] = function (block) {
	var pintx = block.getFieldValue("pintx");
	var pinrx = block.getFieldValue("pinrx");
	Blockly.Python.definitions_['import_smartcity_pm25_untested'] = 'from smartcity_pm25_untested import *';
	Blockly.Python.definitions_['init_read_pm25'] = 'pm_sensor = HT5102(tx='+pintx+', rx='+pinrx+')';
	var code = 'pm_sensor.read_pm_data()';
	return [code, Blockly.Python.ORDER_NONE];
};

