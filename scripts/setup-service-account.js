#!/usr/bin/env node

/**
 * Helper script to convert Firebase service account JSON to environment variables
 * Usage: node scripts/setup-service-account.js path/to/service-account.json
 */

const fs = require('fs');
const path = require('path');

function convertServiceAccountToEnv(serviceAccountPath) {
  try {
    // Read the service account JSON file
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    
    // Generate environment variables
    const envVars = [
      `# Firebase Service Account Configuration`,
      `FIREBASE_PROJECT_ID=${serviceAccount.project_id}`,
      `FIREBASE_PRIVATE_KEY_ID=${serviceAccount.private_key_id}`,
      `FIREBASE_PRIVATE_KEY="${serviceAccount.private_key}"`,
      `FIREBASE_CLIENT_EMAIL=${serviceAccount.client_email}`,
      `FIREBASE_CLIENT_ID=${serviceAccount.client_id}`,
      ``,
      `# Admin Access (Optional - defaults to 'admin123')`,
      `NEXT_PUBLIC_ADMIN_PASSWORD=your_secure_admin_password`
    ].join('\n');
    
    // Write to .env.local
    const envPath = path.join(process.cwd(), '.env.local');
    fs.writeFileSync(envPath, envVars);
    
    console.log('✅ Service account configuration written to .env.local');
    console.log('📝 Please review and update the admin password before deploying!');
    
  } catch (error) {
    console.error('❌ Error converting service account:', error.message);
    process.exit(1);
  }
}

// Get the service account file path from command line arguments
const serviceAccountPath = process.argv[2];

if (!serviceAccountPath) {
  console.log('Usage: node scripts/setup-service-account.js path/to/service-account.json');
  process.exit(1);
}

if (!fs.existsSync(serviceAccountPath)) {
  console.error('❌ Service account file not found:', serviceAccountPath);
  process.exit(1);
}

convertServiceAccountToEnv(serviceAccountPath);
