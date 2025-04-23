import { NextResponse } from 'next/server';

export async function POST(req) {
  const body = await req.json();

  const airtableBaseId = process.env.AIRTABLE_BASE_ID;
  const airtableApiKey = process.env.AIRTABLE_API_KEY;
  const tableName = 'Leads';

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
  return NextResponse.json(data);
}
