function createFindingCard(finding) {
  const article = document.createElement("article");
  article.className = "finding";

  const title = document.createElement("h3");
  title.textContent = `${finding.id}: ${finding.title}`;

  article.appendChild(title);

  return article;
}