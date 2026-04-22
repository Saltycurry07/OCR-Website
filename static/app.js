const form = document.getElementById('uploadForm');
const input = document.getElementById('imageInput');
const statusEl = document.getElementById('status');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  if (!input.files[0]) return;

  const btn = form.querySelector('button');
  btn.disabled = true;
  statusEl.textContent = '正在识别，请稍候...';

  try {
    const data = new FormData();
    data.append('file', input.files[0]);

    const res = await fetch('/api/extract', { method: 'POST', body: data });
    if (!res.ok) {
      const err = await res.json().catch(() => ({}));
      throw new Error(err.detail || '识别失败');
    }

    const blob = await res.blob();
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = '手写识别结果.docx';
    document.body.appendChild(a);
    a.click();
    a.remove();
    URL.revokeObjectURL(url);

    statusEl.textContent = '完成，Word 文档已下载。';
  } catch (err) {
    statusEl.textContent = `出错：${err.message}`;
  } finally {
    btn.disabled = false;
  }
});
