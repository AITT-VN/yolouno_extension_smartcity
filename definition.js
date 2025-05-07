Blockly.Blocks["smartcity_uv_read"] = {
	init: function () {
		this.jsonInit({
			colour: "#CC6600",
			tooltip: "",
			message0: "cảm biến IR %1 đọc được nút %2 trên remote",
			args0: [
				{
					"type": "field_dropdown",
					"name": "pin",
					"options": [
						[
							"P1",
							"pin1"
						],
						[
							"P0",
							"pin0"
						],
						[
							"P4",
							"pin4"
						],
						[
							"P5",
							"pin5"
						],
						[
							"P6",
							"pin6"
						],
						[
							"P7",
							"pin7"
						],
						[
							"P8",
							"pin8"
						],
						[
							"P9",
							"pin9"
						],
						[
							"P10",
							"pin10"
						],
						[
							"P11",
							"pin11"
						],
						[
							"P12",
							"pin12"
						],
						[
							"P13",
							"pin13"
						],
						[
							"P14",
							"pin14"
						],
						[
							"P15",
							"pin15"
						],
						[
							"P16",
							"pin16"
						],
						[
							"P19",
							"pin19"
						],
						[
							"P20",
							"pin20"
						]
					]
				},
				{
					type: "field_dropdown",
					name: "remote",
					options: [
						["A", "A"],
						["B", "B"],
						["C", "C"],
						["D", "D"],
						["E", "E"],
						["F", "F"],
						[
							{
								"src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/forward.svg",
								"width": 15,
								"height": 15,
								"alt": "*"
							},
							"UP"
						],
						[
							{
								"src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/backward.svg",
								"width": 15,
								"height": 15,
								"alt": "*"
							},
							"DOWN"
						],
						[
							{
								"src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_left.svg",
								"width": 15,
								"height": 15,
								"alt": "*"
							},
							"LEFT"
						],
						[
							{
								"src": "https://ohstem-public.s3.ap-southeast-1.amazonaws.com/extensions/AITT-VN/yolobit_homebit_v3/images/turn_right.svg",
								"width": 15,
								"height": 15,
								"alt": "*"
							},
							"RIGHT"
						],
						["Setup", "SETUP"],
						["0", "0"],
						["1", "1"],
						["2", "2"],
						["3", "3"],
						["4", "4"],
						["5", "5"],
						["6", "6"],
						["7", "7"],
						["8", "8"],
						["9", "9"],
					],
				},
			],
			output: "Boolean",
			helpUrl: "",
		});
	},
	getDeveloperVars: function () {
		return ['homebit3_ir_rx'];
	}
};