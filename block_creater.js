const fs = require("fs");

const blocks = [
	{
		name: "read_uvi",
		color: "#CC6600",
		message: "đọc chỉ số UV ở chân %1",
		args: [
			{
				type: "field_dropdown",
				name: "pin",
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
		import: "smartcity_s12sd",
		initial: "smartcity_uv = S12SD(pin=(' + pin + '))",
		returnLine: "smartcity_uv.read_uvi()"
	},
	{
		name: "read_pm25",
		color: "#CC6600",
		message: "cấu hình cảm biến bụi chân TX %1 và RX %2",
		args: [
			{
				type: "field_dropdown",
				name: "pintx",
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
					["A13", "A13_PIN"],
				]
			},
			{
				type: "field_dropdown",
				name: "pinrx",
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
					["A13", "A13_PIN"],
				]
			}
		],
		import: "smartcity_pm25_untested",
		initial: "pm_sensor = HT5102(tx='+pintx+', rx='+pinrx+')",
		returnLine: "pm_sensor.read_pm_data()"
	},
	
	// Add more blocks here as needed
];

let output = `// Auto-generated Blockly blocks and Python code\n\n`;

blocks.forEach(block => {
	const blockName = `smartcity_${block.name}`;

	// --- Blockly Block Definition ---
	output += `Blockly.Blocks["${blockName}"] = {\n`;
	output += `	init: function () {\n`;
	output += `		this.jsonInit({\n`;
	output += `			colour: "${block.color}",\n`;
	output += `			tooltip: "",\n`;
	output += `			message0: "${block.message}",\n`;
	output += `			args0: ${JSON.stringify(block.args, null, 6)},\n`;
	output += `			output: "${block.output}",\n`;
	output += `			helpUrl: ""\n`;
	output += `		});\n`;
	output += `	}\n`;
	output += `};\n\n`;

	// --- Blockly Python Generator ---
	output += `Blockly.Python["${blockName}"] = function (block) {\n`;

	block.args.forEach(arg => {
		if (arg.name) {
			output += `	var ${arg.name} = block.getFieldValue("${arg.name}");\n`;
		}
	});

	output += `	Blockly.Python.definitions_['import_${block.import}'] = 'from ${block.import} import *';\n`;
	output += `	Blockly.Python.definitions_['init_${block.name}'] = '${block.initial}';\n`;
	output += `	var code = '${block.returnLine}';\n`;
	output += `	return [code, Blockly.Python.ORDER_NONE];\n`;
	output += `};\n\n`;
});

// Write to file
const path = "definition.js";
const backupPath = `definition.backup_${Date.now()}.js`;

// Backup old file if it exists
if (fs.existsSync(path)) {
	fs.copyFileSync(path, backupPath);
	console.log(`📦 Backup created: ${backupPath}`);
}

// Write new file
fs.writeFileSync(path, output);
console.log("✅ Code generated to definition.js");