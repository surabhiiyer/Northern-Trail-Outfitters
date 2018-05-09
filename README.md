## Northern Trail Outfitters Sample App

[![CircleCI](https://circleci.com/gh/trailheadapps/northern-trail-outfitters.svg?style=svg)](https://circleci.com/gh/trailheadapps/northern-trail-outfitters)

Northern Trail Outfitters is a fictional outdoor clothing company. It helps with creation and management of merchandise mixes with retailers. A merchandise mix is a collection of products a retailer carries for a season. These merchandise mixes are then submitted to the manufacturing division of the company to let them know how many of each product to produce.

Read [this blog post](https://developer.salesforce.com/blogs/developer-relations/2017/07/northern-trail-outfitters-new-sample-application-lightning-components-platform-events-salesforce-dx.html) to learn more about the application.

## Table of Contents

*   [Features](#features)
*   Installation
    *   [One-Click Demo](#one-click-demo-environment)
    *   [Salesforce DX](#salesforce-dx)
*   [Code Highlights](#code-highlights)
*   [Additional Resources](#additional-resources)

## Features

## Installation

### Salesforce DX

1.  Authenticate with your hub org (if not already done):

    ```zsh
    sfdx force:auth:web:login -d -a myhuborg
    ```

1.  Clone this repository:

    ```zsh
    git clone https://github.com/trailheadapps/northern-trail-outfitters
    cd northern-trail-outfitters
    ```

1.  Create a scratch org and provide it with an alias (nto):

    ```zsh
    sfdx force:org:create -s -f config/project-scratch-def.json -a nto
    ```

1.  Push the app to your scratch org:

    ```zsh
    sfdx force:source:push
    ```

1.  Assign the nto permission set to the default user:

    ```zsh
    sfdx force:user:permset:assign -n nto
    ```

1.  Load sample data:

    ```
    sfdx force:data:tree:import --plan ./data/Merchandise__c-plan.json
    sfdx force:data:tree:import --plan ./data/Account-Merchandising_Mix__c-plan.json
    ```

1.  Open the scratch org:
    ```
    sfdx force:org:open -p /lightning/page/home
    ```

## Code Highlights

## Additional Resources
