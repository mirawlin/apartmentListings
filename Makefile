# This is an auto documented Makefile. For more information see the following article
# @see http://marmelab.com/blog/2016/02/29/auto-documented-makefile.html

SHELL := /bin/bash
.SHELLFLAGS = -ec

.ONESHELL:

.EXPORT_ALL_VARIABLES:

.DEFAULT_GOAL: help

.PHONY: help ## 🛟 To display this prompts. This will list all available targets with their documentation
help:
	echo "❓ Use \`make <target>' where <target> is one of 👇"
	grep -E '^\.PHONY: [a-zA-Z0-9_-]+ .*?##' $(MAKEFILE_LIST) | \
		awk 'BEGIN {FS = "(: |##)"}; {printf "\033[36m%-30s\033[0m %s\n", $$2, $$3}'
	echo "Tips 💡"
	echo "	- use tab for auto-completion"
	echo "	- use the dry run option '-n' to show what make is attempting to do. example: environmentName=dev make -n deploy"

.PHONY: install ## install dependencies
install:
	npm ci

.PHONY: run ## Run the application
run:
	npm run start

.PHONY: test ## Run all tests
test:
	mocha 'tests/**'

.PHONY: test-unit ## Run unit tests
test-unit:
	mocha 'tests/**/unit/**'

.PHONY: test-pact ## Run pact tests
test-pact:
	npm run test:pact

.PHONY: docker-build ## build docker image
docker-build: TAG:=limi-local
docker-build:
	docker build -t limi.azurecr.io/aptlistings:${TAG} .

