'use strict';
const filters = [...document.querySelectorAll('[data-filter]')];
const tasks = [...document.querySelectorAll('[data-dimension]')];
for (const button of filters) {
  button.addEventListener('click', () => {
    const dimension = button.dataset.filter;
    for (const filter of filters) {
      const active = filter === button;
      filter.classList.toggle('active', active);
      filter.setAttribute('aria-pressed', String(active));
    }
    let count = 0;
    for (const task of tasks) {
      task.hidden = dimension !== 'all' && task.dataset.dimension !== dimension;
      if (!task.hidden) count += 1;
    }
    document.querySelector('#filter-status').textContent = `Showing ${count} ${dimension === 'all' ? '' : dimension + ' '}tasks.`;
  });
}
const copyButton = document.querySelector('#copy-citation');
copyButton.addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(document.querySelector('#citation').textContent.trim());
    status.textContent = 'BibTeX copied to clipboard.';
    copyButton.textContent = 'Copied';
    setTimeout(() => { copyButton.textContent = 'Copy BibTeX'; }, 2000);
  } catch {
    status.textContent = 'Clipboard access is unavailable. Select and copy the BibTeX above.';
  }
});
