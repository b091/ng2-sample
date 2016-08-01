SHELL:=/bin/bash
BIN=./node_modules/.bin


test-unit:
	rm -rf ./coverage
	$(BIN)/karma start ./config/karma.conf.js --single-run --watch false
