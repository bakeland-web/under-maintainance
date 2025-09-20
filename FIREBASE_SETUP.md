# Firebase Setup Instructions

## 1. Create a Firebase Project

1. Go to [Firebase Console](https://console.firebase.google.com/)
2. Click "Create a project" or "Add project"
3. Enter your project name (e.g., "cult-wars-web")
4. Follow the setup wizard

## 2. Enable Firestore Database

1. In your Firebase project, go to "Firestore Database"
2. Click "Create database"
3. Choose "Start in test mode" for now (you can secure it later)
4. Select a location for your database

## 3. Create Service Account (Recommended)

1. Go to Project Settings (gear icon)
2. Click on "Service accounts" tab
3. Click "Generate new private key"
4. Download the JSON file and save it securely
5. **Never commit this file to version control!**

## 4. Set Environment Variables

Create a `.env.local` file in your project root with the following variables:

### Option A: Service Account (Recommended)
```env
# Firebase Service Account Configuration
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_PRIVATE_KEY_ID=your_private_key_id
FIREBASE_PRIVATE_KEY="-----BEGIN PRIVATE KEY-----\nYOUR_PRIVATE_KEY_HERE\n-----END PRIVATE KEY-----\n"
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_CLIENT_ID=your_client_id

# Admin Access (Optional - defaults to 'admin123')
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_admin_password
```

### Option B: Client-side Configuration (Less Secure)
```env
# Firebase Client Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_api_key_here
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project_id.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project_id.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Admin Access (Optional - defaults to 'admin123')
NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_admin_password
```

**Important:** 
- Use the service account method for production (more secure)
- Change the admin password to something secure
- Never commit the service account JSON file to version control

## 5. Security Rules (Optional)

For production, update your Firestore security rules to:

```javascript
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /emails/{document} {
      allow read, write: if true; // Adjust based on your needs
    }
  }
}
```

## 6. Test the Integration

Once you've set up the environment variables, the email collection should work automatically on your landing page.

