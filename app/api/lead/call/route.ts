import { NextResponse } from 'next/server';
import { SLACK_WEBHOOKS } from '../../../../constants/webhooks';

export async function POST(request: Request) {
  try {
    let body: {
      phoneNumber?: string;
      source?: string;
      pageUrl?: string;
      referrer?: string;
      device?: string;
    } = {};

    try {
      const raw = await request.text();
      body = raw ? JSON.parse(raw) : {};
    } catch {
      body = {};
    }

    const {
      phoneNumber = '+91 82401 27751',
      source = 'Website Call Link',
      pageUrl = 'Website',
      referrer = 'Direct',
      device = 'Unknown',
    } = body;

    const timestamp = new Date().toLocaleString('en-IN', {
      timeZone: 'Asia/Kolkata',
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    const slackPayload = {
      text: `📞 *Inbound Call Click: ${source}*`,
      blocks: [
        {
          type: 'header',
          text: {
            type: 'plain_text',
            text: '📞 Inbound Call Initiated (Vocaplace)',
            emoji: true,
          },
        },
        {
          type: 'section',
          fields: [
            {
              type: 'mrkdwn',
              text: `*📱 Target Number:*\n${phoneNumber}`,
            },
            {
              type: 'mrkdwn',
              text: `*📍 Source / Button:*\n${source}`,
            },
            {
              type: 'mrkdwn',
              text: `*🔗 Current Page:*\n${pageUrl}`,
            },
            {
              type: 'mrkdwn',
              text: `*💻 Device / Platform:*\n${device}`,
            },
            {
              type: 'mrkdwn',
              text: `*🧭 Traffic Referrer:*\n${referrer}`,
            },
            {
              type: 'mrkdwn',
              text: `*🕒 Initiated At:*\n${timestamp} IST`,
            },
          ],
        },
        {
          type: 'context',
          elements: [
            {
              type: 'mrkdwn',
              text: `⚡ Real-time Call Event Tracker · Non-blocking event`,
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
      console.error('Slack Call Webhook error:', errText);
      return NextResponse.json(
        { error: 'Failed to dispatch to Slack' },
        { status: 502 }
      );
    }

    return NextResponse.json({
      success: true,
      message: 'Call click event recorded successfully',
    });
  } catch (error) {
    console.error('Error handling call click notification:', error);
    return NextResponse.json(
      { error: 'Internal Server Error' },
      { status: 500 }
    );
  }
}

export async function OPTIONS() {
  return new NextResponse(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
