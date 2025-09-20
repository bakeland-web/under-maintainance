#!/usr/bin/env node

/**
 * Script to generate .env.local from serviceAccount.json
 * Usage: node scripts/generate-env-from-service-account.js [path/to/serviceAccount.json]
 */

const fs = require('fs');
const path = require('path');

function generateEnvFromServiceAccount(serviceAccountPath = 'serviceAccount.json') {
  try {
    // Check if service account file exists
    if (!fs.existsSync(serviceAccountPath)) {
      console.error(`❌ Service account file not found: ${serviceAccountPath}`);
      console.log('Usage: node scripts/generate-env-from-service-account.js [path/to/serviceAccount.json]');
      process.exit(1);
    }

    // Read the service account JSON file
    const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, 'utf8'));
    
    // Generate environment variables
    const envVars = [
      `# Firebase Service Account Configuration`,
      `# Generated from ${serviceAccountPath} on ${new Date().toISOString()}`,
      ``,
      `FIREBASE_PROJECT_ID=${serviceAccount.project_id}`,
      `FIREBASE_PRIVATE_KEY_ID=${serviceAccount.private_key_id}`,
      `FIREBASE_PRIVATE_KEY="${serviceAccount.private_key}"`,
      `FIREBASE_CLIENT_EMAIL=${serviceAccount.client_email}`,
      `FIREBASE_CLIENT_ID=${serviceAccount.client_id}`,
      ``,
      `# Admin Access (Optional - defaults to 'admin123')`,
      `NEXT_PUBLIC_ADMIN_PASSWORD=admin123`,
      ``,
      `# Note: You can change the admin password above to something more secure`
    ].join('\n');
    
    // Write to .env.local
    const envPath = path.join(process.cwd(), '.env.local');
    fs.writeFileSync(envPath, envVars);
    
    console.log('✅ Environment variables generated successfully!');
    console.log(`📝 Created: ${envPath}`);
    console.log('🔐 Admin password set to: admin123 (change this for production)');
    console.log('🚀 You can now run the application with: npm run dev');
    
  } catch (error) {
    console.error('❌ Error generating environment variables:', error.message);
    process.exit(1);
  }
}

// Get the service account file path from command line arguments
const serviceAccountPath = process.argv[2] || 'serviceAccount.json';
generateEnvFromServiceAccount(serviceAccountPath);
