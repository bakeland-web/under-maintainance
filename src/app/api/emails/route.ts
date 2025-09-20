import { NextRequest, NextResponse } from 'next/server';
import { adminDb } from '@/lib/firebase-admin';
import { isValidEmail, normalizeEmail } from '@/lib/emailValidation';

// Check if Firebase admin is properly initialized
if (!adminDb) {
  console.error('Firebase Admin not initialized. Check environment variables.');
}

export async function POST(request: NextRequest) {
  try {
    if (!adminDb) {
      return NextResponse.json(
        { success: false, message: 'Database not available. Please check configuration.' },
        { status: 503 }
      );
    }

    const { email, source = 'landing-page' } = await request.json();

    // Validate email
    if (!email || !isValidEmail(email)) {
      return NextResponse.json(
        { success: false, message: 'Please enter a valid email address' },
        { status: 400 }
      );
    }

    const normalizedEmail = normalizeEmail(email);

    // Check if email already exists
    const emailsRef = adminDb.collection('emails');
    const existingEmail = await emailsRef.where('email', '==', normalizedEmail).get();

    if (!existingEmail.empty) {
      return NextResponse.json(
        { success: false, message: 'This email is already registered', isDuplicate: true },
        { status: 409 }
      );
    }

    // Save email to Firestore
    await emailsRef.add({
      email: normalizedEmail,
      timestamp: new Date(),
      source,
    });

    return NextResponse.json({
      success: true,
      message: 'Email successfully added to waitlist!'
    });

  } catch (error) {
    console.error('Error saving email:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to save email. Please try again.' },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    if (!adminDb) {
      return NextResponse.json(
        { success: false, message: 'Database not available. Please check configuration.' },
        { status: 503 }
      );
    }

    const emailsRef = adminDb.collection('emails');
    const snapshot = await emailsRef.orderBy('timestamp', 'desc').get();
    
    const emails = snapshot.docs.map(doc => ({
      id: doc.id,
      ...doc.data()
    }));

    return NextResponse.json({
      success: true,
      emails,
      count: emails.length
    });

  } catch (error) {
    console.error('Error fetching emails:', error);
    return NextResponse.json(
      { success: false, message: 'Failed to fetch emails' },
      { status: 500 }
    );
  }
}
