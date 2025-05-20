import { NextResponse } from 'next/server';

export async function POST(req) {
  console.log("[submit-handler] POST called");

  let body;
  try {
    body = await req.json();
    console.log("[submit-handler] Body received:", JSON.stringify(body));
  } catch (err) {
    console.error("[submit-handler] Failed to parse body:", err.message);
    return NextResponse.json({ error: 'Invalid JSON body' }, { status: 400 });
  }

  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const tableName = 'Leads';

  try {
    const response = await fetch(`https://api.airtable.com/v0/${airtableBaseId}/${tableName}`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${airtableApiKey}`,
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        fields: {
          "First Name": body.first_name,
          "Last Name": body.last_name,
          "Email": body.email,
          "Phone": body.phone,
          "Website": body.website,
          "Business Stage": body.business_stage,
          "Company Size": body.company_size,
          "Industry": body.industry || body.custom_industry,
          "Role": body.role,
          "Priority": body.top_priority,
          "Bottlenecks": body.bottlenecks,
          "Tools Used": body.tools,
          "Comfort Level": body.comfort_level,
          "Documentation Status": body.has_documentation,
          "Approach Preference": body.approach_preference,
          "Consent Given": body.consent ? "Yes" : "No"
        }
      })
    });

    const data = await response.json();
    console.log("[submit-handler] Airtable response:", JSON.stringify(data));

    if (!response.ok) {
      console.error("[submit-handler] Airtable returned error:", data);
      return NextResponse.json({ error: 'Airtable API error', details: data }, { status: response.status });
    }

    return NextResponse.json(data);
  } catch (err) {
    console.error("[submit-handler] Airtable fetch failed:", err.message);
    return NextResponse.json({ error: 'Unexpected server error' }, { status: 500 });
  }
}
