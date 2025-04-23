import { NextResponse } from 'next/server';
import Airtable from 'airtable';

export async function POST(request) {
  const data = await request.json();
  
  // Configure Airtable
  const base = new Airtable({apiKey: process.env.AIRTABLE_API_KEY})
    .base(process.env.AIRTABLE_BASE_ID);
  const table = base(process.env.AIRTABLE_TABLE_NAME);
  
  try {
    // Create record
    const record = await table.create({
      "Name": data.name,
      "Email": data.email,
      "Company": data.company,
      "Answers": JSON.stringify(data.answers),
      // Add other fields as needed
    });
    
    return NextResponse.json({ success: true, id: record.id });
  } catch (error) {
    console.error('Error submitting to Airtable:', error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}