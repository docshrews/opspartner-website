// /app/api/submit-assessment/route.js
import { NextResponse } from 'next/server';
import Airtable from 'airtable';

// Set up Airtable - replace with your actual credentials
const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
  .base(process.env.AIRTABLE_BASE_ID);

export async function POST(request) {
  try {
    const data = await request.json();
    
    // Format the data for Airtable
    const formattedData = {
      "Business Stage": data.business_stage,
      "Company Size": data.company_size,
      "Industry": data.industry,
      "Role": data.role,
      "Top Priority": data.top_priority,
      "Website": data.website,
      "Social Media": JSON.stringify(data.social_media),
      "Bottlenecks": data.bottlenecks.join(", "),
      "Tools": data.tools.join(", "),
      "Comfort Level": data.comfort_level,
      "Has Documentation": data.has_documentation,
      "Approach Preference": data.approach_preference,
      "First Name": data.first_name,
      "Last Name": data.last_name,
      "Email": data.email,
      "Phone": data.phone,
      "Raw Data": JSON.stringify(data),
      "Submission Date": new Date().toISOString(),
    };
    
    // Create record in Airtable
    const record = await base('Assessments').create([
      {fields: formattedData}
    ]);
    
    // Send email notification (implement with your preferred email service)
    // Example: await sendEmailNotification(data);
    
    return NextResponse.json({ success: true, id: record[0].id });
  } catch (error) {
    console.error('Error submitting assessment:', error);
    return NextResponse.json(
      { success: false, error: 'Failed to submit assessment' },
      { status: 500 }
    );
  }
}