# Beyond Recall Project Website

Static project website for Beyond Recall, hosted at <https://beyond-recall.github.io/>.

## Publish with GitHub Pages

In this repository, open **Settings → Pages**. Select **Deploy from a branch**, choose **main** and **/ (root)**, then save. The site requires no build system, package installation, API keys, or server.

## Preview locally

```bash
python -m http.server 8000
```

Open `http://localhost:8000/` on the machine running the server.

## Update

- `index.html`: paper information, abstract, tasks, resources, and citation.
- `styles.css`: responsive page layout and typography.
- `site.js`: task filtering and citation copying.
- `assets/`: existing project banner and paper figures.
- `downloads/BeyondRecall.pdf`: current public preprint with integrated appendices.

The site links to the existing code repository and Hugging Face dataset. After arXiv publication, add the actual arXiv URL and update the citation; do not use a placeholder identifier.
