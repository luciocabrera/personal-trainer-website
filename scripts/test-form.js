// Simple Node.js script to test form submission

async function testFormSubmission() {
  try {
    const formData = new URLSearchParams();
    formData.append("name", "Test User");
    formData.append("email", "test@example.com");
    formData.append("message", "Hello, this is a test message");

    console.log("Testing form submission...");

    const response = await fetch("http://localhost:5173/", {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
      body: formData,
    });

    console.log("Response status:", response.status);
    console.log("Response headers:", [...response.headers.entries()]);

    const responseText = await response.text();
    console.log("Response body length:", responseText.length);
    console.log("Response body preview:", responseText.substring(0, 500));
  } catch (error) {
    console.error("Error testing form submission:", error);
  }
}

testFormSubmission();
