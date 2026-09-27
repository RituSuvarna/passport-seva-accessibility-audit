async function loadFindings() {
  const container = document.getElementById("findings");

  try {
    const response = await fetch("http://localhost:5000/api/accessibility/findings");
    const data = await response.json();

    container.innerHTML = "";

    data.findings.forEach((finding) => {
      const article = document.createElement("article");
      article.className = "finding";

      const title = document.createElement("h3");
      title.textContent = `${finding.id}: ${finding.title}`;

      article.appendChild(title);
      container.appendChild(article);
    });
  } catch (error) {
    container.textContent = "Unable to load audit findings.";
  }
}

loadFindings();