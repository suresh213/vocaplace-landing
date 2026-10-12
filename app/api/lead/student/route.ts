import { NextResponse } from 'next/server';
import { SLACK_WEBHOOKS } from '../../../../constants/webhooks';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, degree, city, source, notes } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: 'Name and Phone number are required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const slackPayload = {
      text: `🎓 *New Student Lead: ${name} (${phone})*`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🎓 New Student Application (Vocaplace)',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*👤 Full Name:*\n${name}`,
            },
            {
              type: 'mrkdwn',
              text: `*📱 Phone / WhatsApp:*\n${phone}`,
            },
            {
              type: 'mrkdwn',
              text: `*✉️ Email:*\n${email || 'Not provided'}`,
            },
            {
              type: 'mrkdwn',
              text: `*🎓 Degree / Background:*\n${degree || 'Not specified'}`,
            },
            {
              type: 'mrkdwn',
              text: `*📍 City:*\n${city || 'Not specified'}`,
            },
            {
              type: 'mrkdwn',
              text: `*🔗 Source Page:*\n${source || 'Website'}`,
            },
          ],
        },
        ...(notes
          ? [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*📝 Additional Notes / Goal:*\n${notes}`,
                },
              },
            ]
          : []),
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `⚡ Received at ${timestamp} IST · Vocaplace Lead Capture System`,
            },
          ],
        },
      ],
    };

    const slackRes = await fetch(SLACK_WEBHOOKS.STUDENT_LEADS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      const errText = await slackRes.text();
      console.error('Slack Student Webhook error:', errText);
      return NextResponse.json(
        { error: 'Failed to dispatch to Slack' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Application received successfully',
    });
  } catch (error) {
    console.error('Error handling student lead submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
