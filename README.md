# MunchTracker

## Instructions to start the project

### VS Code
1. Clone repository on VS Code and open the folder in the application
2. Open the terminal window in VSC and run the command 'npm install', then 'npm start'
3. Click on the plus button to open another terminal tab
4. In the new terminal tab, run 'cd client' then 'npm install' then 'npm start'

## API Endpoints
| Endpoint      | Description | Request type | Return object |
| ----------- | ------------- | ------------ | ------------- |
| /add-ingredient      | Adds an ingredient to the user's inventory | POST | ACK message |
| /remove-ingredient   | Removes the ingredient from the user's inventory | DELETE | ACK message |
| /recipes | Gets recipes from the given ingredients | GET | Objects of JSON recipes |
