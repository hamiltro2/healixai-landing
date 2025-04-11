import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, subject, message } = body;

    // Validate input
    if (!name || !email || !subject || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log email configuration for debugging (remove in production)
    console.log('Email configuration:', {
      host: 'smtp.office365.com', // Microsoft 365 SMTP server
      port: 587, // Microsoft 365 uses port 587 with STARTTLS
      secure: false, // Microsoft 365 uses STARTTLS on port 587
      user: process.env.EMAIL_USER ? `${process.env.EMAIL_USER.substring(0, 3)}...` : undefined,
      from: process.env.EMAIL_FROM,
    });

    // Create a Microsoft 365 SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com', // Microsoft 365 SMTP server
      port: 587, // Microsoft 365 uses port 587
      secure: false, // Microsoft 365 uses STARTTLS (not SSL)
      auth: {
        user: process.env.EMAIL_USER || 'user@example.com',
        pass: process.env.EMAIL_PASSWORD || 'password',
      },
      tls: {
        ciphers: 'SSLv3',
        rejectUnauthorized: false,
      },
      debug: true, // Show debug output
      logger: true // Log information into the console
    });

    // Skip SMTP verification in development to avoid authentication issues
    if (process.env.NODE_ENV === 'development') {
      console.log('Skipping SMTP verification in development mode');
    } else {
      // Verify SMTP connection configuration
      await transporter.verify();
    }

    // Email content
    const mailOptions = {
      from: `"HealixAI Contact Form" <${process.env.EMAIL_FROM || 'noreply@healixai.com'}>`,
      to: 'ricardohamiltonmd@healixai.com',
      replyTo: email,
      subject: `HealixAI Contact: ${subject}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0891b2;">New Contact Form Submission</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Subject:</strong> ${subject}</p>
          <div style="margin-top: 20px;">
            <h3 style="color: #0891b2;">Message:</h3>
            <p style="white-space: pre-line;">${message}</p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eaeaea; color: #666; font-size: 12px;">
            <p>This email was sent from the HealixAI website contact form.</p>
          </div>
        </div>
      `,
    };

    // For testing in development, log success without actually sending email
    if (process.env.NODE_ENV === 'development') {
      console.log('Development mode: Email would be sent with:', {
        to: 'ricardohamiltonmd@healixai.com',
        from: `"HealixAI Contact Form" <${process.env.EMAIL_FROM || 'noreply@healixai.com'}>`,
        subject: `HealixAI Contact: ${subject}`,
        text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`
      });
      
      return NextResponse.json({ success: true });
    }

    // Send the email
    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { 
        error: 'Failed to send email', 
        details: error instanceof Error ? error.message : String(error),
        code: error instanceof Error && 'code' in error ? (error as { code: string }).code : undefined,
        responseInfo: error instanceof Error && 'response' in error ? (error as { response: string }).response : undefined
      },
      { status: 500 }
    );
  }
}
