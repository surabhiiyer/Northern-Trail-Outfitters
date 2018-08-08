#!/bin/bash

# Default values
SFDX_CLI_EXEC=node_modules/sfdx-cli/bin/run
TARGET_ORG="-u packagingorg"

PACKAGE_VERSION="$($SFDX_CLI_EXEC force:package:version:create -p nto -x -w 10 --json | jq '.result.SubscriberPackageVersionId' | tr -d '"')"
sleep 600 # We've to wait for package replication.

$SFDX_CLI_EXEC force:package:install --package $PACKAGE_VERSION -w 10 $TARGET_ORG -r
echo "Done"
