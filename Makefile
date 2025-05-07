all: zip

zip: block
	rm -f yolouno_extension_smartcity.zip
	zip -r yolouno_extension_smartcity.zip . -x "*.git*" "*node_modules*" "*yolouno_extension_smartcity.zip*"

block:
	node block_creater.js