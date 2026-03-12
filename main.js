function pickNumbers() {
  const pool = Array.from({ length: 45 }, (_, i) => i + 1);

  for (let i = pool.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [pool[i], pool[j]] = [pool[j], pool[i]];
  }

  const picked = pool.slice(0, 6).sort((a, b) => a - b);

  const container = document.getElementById('numbers');
  container.innerHTML = '';

  picked.forEach((num) => {
    const ball = document.createElement('div');
    ball.classList.add('ball', getRangeClass(num));
    ball.textContent = num;
    container.appendChild(ball);
  });
}

function getRangeClass(num) {
  if (num <= 10) return 'range-1';
  if (num <= 20) return 'range-2';
  if (num <= 30) return 'range-3';
  if (num <= 40) return 'range-4';
  return 'range-5';
}

function toggleTheme() {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  document.getElementById('themeBtn').textContent = isDark ? '☀️' : '🌙';
  localStorage.setItem('theme', isDark ? 'light' : 'dark');
}

// 저장된 테마 불러오기
(function () {
  const saved = localStorage.getItem('theme');
  if (saved) {
    document.documentElement.setAttribute('data-theme', saved);
    document.addEventListener('DOMContentLoaded', () => {
      document.getElementById('themeBtn').textContent = saved === 'dark' ? '🌙' : '☀️';
    });
  }
})();
