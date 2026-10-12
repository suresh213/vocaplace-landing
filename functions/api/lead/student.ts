import { SLACK_WEBHOOKS } from '../../../constants/webhooks';

interface StudentLeadBody {
  name: string;
  phone: string;
  email?: string;
  degree?: string;
  city?: string;
  source?: string;
  notes?: string;
}

export async function onRequestPost({ request }: { request: Request }) {
  try {
    const body: StudentLeadBody = await request.json();
    const { name, phone, email, degree, city, source, notes } = body;

    if (!name || !phone) {
      return new Response(
        JSON.stringify({ error: 'Name and Phone number are required' }),
        {
          status: 400,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
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
      return new Response(
        JSON.stringify({ error: 'Failed to dispatch to Slack', details: errText }),
        {
          status: 502,
          headers: {
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*',
          },
        }
      );
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Application received successfully',
      }),
      {
        status: 200,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ error: 'Internal Server Error' }),
      {
        status: 500,
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
        },
      }
    );
  }
}

export async function onRequestOptions() {
  return new Response(null, {
    status: 204,
    headers: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
    },
  });
}
