#!/usr/bin/env node

/**
 * Script to validate Firebase environment variables
 * Usage: node scripts/validate-env.js
 */

const requiredVars = [
  'FIREBASE_PROJECT_ID',
  'FIREBASE_PRIVATE_KEY_ID', 
  'FIREBASE_PRIVATE_KEY',
  'FIREBASE_CLIENT_EMAIL',
  'FIREBASE_CLIENT_ID'
];

const optionalVars = [
  'NEXT_PUBLIC_ADMIN_PASSWORD'
];

console.log('🔍 Validating Firebase environment variables...\n');

let hasErrors = false;

// Check required variables
requiredVars.forEach(varName => {
  if (!process.env[varName]) {
    console.error(`❌ Missing required variable: ${varName}`);
    hasErrors = true;
  } else {
    console.log(`✅ ${varName}: Set`);
  }
});

// Check optional variables
optionalVars.forEach(varName => {
  if (!process.env[varName]) {
    console.log(`⚠️  Optional variable not set: ${varName} (will use default)`);
  } else {
    console.log(`✅ ${varName}: Set`);
  }
});

console.log('\n📋 Environment Variable Setup:');
console.log('Create a .env.local file with the following variables:');
console.log('\n# Firebase Service Account Configuration');
requiredVars.forEach(varName => {
  console.log(`${varName}=your_${varName.toLowerCase()}_here`);
});
console.log('\n# Admin Access (Optional)');
optionalVars.forEach(varName => {
  console.log(`${varName}=your_${varName.toLowerCase()}_here`);
});

if (hasErrors) {
  console.log('\n❌ Environment validation failed. Please set the missing variables.');
  process.exit(1);
} else {
  console.log('\n✅ All required environment variables are set!');
  console.log('🚀 You can now run the application.');
}
