# nexrender-action-sanity-patch
Modify data in a Sanity document

## Install

`npm install nexrender-sanity-upload`

## How to use

1. Add this module to `postrender`
2. Choose the file to upload
3. In params provide Sanity connection information 
4. Provide Sanity document & field information
5. Currently only works on String fields


```json
{
    "template": {
            "src": "https://example.com/templates/ae-template-to-use.aep",
            "composition": "my_composition"
        },
    "assets": [],
    "actions": {
        "postrender": [
            {
                    "module": "nexrender-sanity-patch",
                    "params": {
                        "projectId": "Sanity project ID",
                        "dataset": "dataset name, usually production",
                        "apiVersion": "api version (see Sanity docs)",
                        "token": "your API token",
                        "useCdn": "true or false"
                    },
                    "document": "ID of document to put the asset",
                    "fieldName": "name of field where the data goes",
                    "value": "string value to send",
                }
        ]
    }
}
```