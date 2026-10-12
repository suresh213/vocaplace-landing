import { SLACK_WEBHOOKS } from '../../../constants/webhooks';

interface HRLeadBody {
  companyName?: string;
  industry?: string;
  role?: string;
  numPositions?: string | number;
  skills?: string;
  contactName: string;
  phone: string;
  email?: string;
  notes?: string;
  source?: string;
}

export async function onRequestPost({ request }: { request: Request }) {
  try {
    const body: HRLeadBody = await request.json();
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
      return new Response(
        JSON.stringify({ error: 'Contact Name and Phone number are required' }),
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
        message: 'Hiring requirement submitted successfully',
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
