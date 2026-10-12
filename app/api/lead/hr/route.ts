import { NextResponse } from 'next/server';
import { SLACK_WEBHOOKS } from '../../../../constants/webhooks';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const {
      companyName,
      industry,
      role,
      numPositions,
      skills,
      contactName,
      phone,
      email,
      notes,
      source,
    } = body;

    if (!contactName || !phone) {
      return NextResponse.json(
        { error: 'Contact Name and Phone number are required' },
        { status: 400 }
      );
    }

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const slackPayload = {
      text: `🏢 *New HR / Hiring Requirement from ${companyName || contactName} (${phone})*`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '🏢 New Hiring Partner Requirement (Vocaplace)',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*🏢 Company Name:*\n${companyName || 'Not specified'}`,
            },
            {
              type: 'mrkdwn',
              text: `*👤 Contact Person:*\n${contactName}`,
            },
            {
              type: 'mrkdwn',
              text: `*📱 Phone / WhatsApp:*\n${phone}`,
            },
            {
              type: 'mrkdwn',
              text: `*✉️ Work Email:*\n${email || 'Not specified'}`,
            },
            {
              type: 'mrkdwn',
              text: `*💼 Target Role / Position:*\n${role || 'Digital Marketer'}`,
            },
            {
              type: 'mrkdwn',
              text: `*👥 Number of Positions:*\n${numPositions || '1'}`,
            },
            {
              type: 'mrkdwn',
              text: `*🏭 Industry:*\n${industry || 'Not specified'}`,
            },
            {
              type: 'mrkdwn',
              text: `*🔗 Source Page:*\n${source || 'Hire Talent Page'}`,
            },
          ],
        },
        ...(skills
          ? [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*🛠️ Required Skills / Tools:*\n${skills}`,
                },
              },
            ]
          : []),
        ...(notes
          ? [
              {
                type: 'section',
                text: {
                  type: 'mrkdwn',
                  text: `*📝 Additional Details:*\n${notes}`,
                },
              },
            ]
          : []),
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `⚡ Received at ${timestamp} IST · Vocaplace HR Lead Pipeline`,
            },
          ],
        },
      ],
    };

    const slackRes = await fetch(SLACK_WEBHOOKS.HR_LEADS, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(slackPayload),
    });

    if (!slackRes.ok) {
      const errText = await slackRes.text();
      console.error('Slack HR Webhook error:', errText);
      return NextResponse.json(
        { error: 'Failed to dispatch to Slack' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Hiring requirement submitted successfully',
    });
  } catch (error) {
    console.error('Error handling HR lead submission:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}
