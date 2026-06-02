export async function POST(request) {
    const data = await request.json();
  
    console.log("Contact Form Submission:");
    console.log(data);
  
    return Response.json({
      success: true,
      message: "Message received successfully",
    });
  }