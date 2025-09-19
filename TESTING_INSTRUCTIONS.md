# Running the Live Preview Test

Follow these steps to run the application and test the LivePreviewNew component:

## Setup

1. Open a PowerShell terminal
2. Navigate to the my-react-app directory:
   ```
   cd c:\Users\miria\myLinksBrowser\my-react-app
   ```
3. Install dependencies if needed:
   ```
   npm install
   ```

## Running the Application

1. Start the development server:
   ```
   npx vite
   ```
2. Once the server is running, open a browser and go to:
   ```
   http://localhost:5173/?testpreview=true
   ```
   
   The `testpreview=true` query parameter will load the TestLivePreview component.

## Testing Features

The TestLivePreview component includes controls to test different features:

- **Toggle Theme**: Switches between 'corporate' and 'dark' themes
- **Add Credential for Calendar**: Adds a credential for the Calendar link
- **Remove Credential for Gmail**: Removes the credential for the Gmail link

These controls allow you to verify that the LivePreviewNew component correctly:
- Displays links with and without credentials
- Styles the lock icon differently based on credential status
- Adapts to different themes