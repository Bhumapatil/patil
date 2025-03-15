function sendEmail() {
    const recipient = "krushnashahane17592@gmail.com";
    const subject = "";
    const body = "";
  
    // Construct the mailto URL
    const mailtoURL = `mailto:${recipient}?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;
  
    // Open the mailto link
    window.location.href = mailtoURL;
  }