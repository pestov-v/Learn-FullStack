/* Автоматична бічна навігація та кнопки "назад/далі" для всіх розділів */
(function () {
  const CHAPTERS = [
    { lvl: "Рівень 1 · Новачок", items: [
      ["01-how-internet-works.html", "Як працює інтернет"],
      ["02-frontend-basics.html", "Frontend: HTML, CSS, JavaScript"],
      ["03-dev-tools-git.html", "Інструменти: термінал, Git, npm"],
      ["04-backend-basics.html", "Backend: сервер, Node.js, REST"],
      ["05-sql-databases.html", "Бази даних: SQL і PostgreSQL"],
      ["06-nosql-databases.html", "NoSQL: MongoDB, Redis і ко"],
    ]},
    { lvl: "Рівень 2 · Середній", items: [
      ["07-auth-security.html", "Автентифікація та безпека"],
      ["08-frontend-frameworks.html", "React, Next.js, стан застосунку"],
      ["09-api-design.html", "API: REST, GraphQL, gRPC, WebSocket"],
      ["10-testing.html", "Тестування"],
      ["11-docker-cicd-deploy.html", "Docker, CI/CD, хмара, деплой"],
    ]},
    { lvl: "Рівень 3 · Про", items: [
      ["12-caching-performance.html", "Кешування та продуктивність"],
      ["13-microservices.html", "Мікросервіси та черги повідомлень"],
      ["14-scaling-distributed.html", "Масштабування і розподілені системи"],
      ["15-observability.html", "Логи, метрики, трейсинг"],
      ["16-system-design.html", "System Design: від задачі до схеми"],
      ["17-roadmap-glossary.html", "Roadmap, ресурси, глосарій"],
    ]},
  ];
  const flat = CHAPTERS.flatMap(g => g.items);
  const cleanPath = location.pathname.replace(/\/+$/, "");
  const lastPart = cleanPath.split("/").pop() || "";
  const here = lastPart.endsWith(".html") ? lastPart : "index.html";
  const inChapters = location.pathname.includes("/chapters/");
  const root = inChapters ? "../" : "./";
  const chDir = inChapters ? "./" : "chapters/";

  const sb = document.getElementById("sidebar");
  if (sb) {
    let html = `<a class="brand" href="${root}index.html"><span>FS</span>Fullstack для чайників</a>`;
    CHAPTERS.forEach(g => {
      html += `<div class="lvl">${g.lvl}</div>`;
      g.items.forEach(([file, title]) => {
        const n = file.slice(0, 2);
        const active = file === here ? " active" : "";
        html += `<a class="ch${active}" href="${chDir}${file}"><small>${n}</small>${title}</a>`;
      });
    });
    sb.innerHTML = html;
    const btn = document.createElement("button");
    btn.className = "menu-btn"; btn.textContent = "☰ Зміст";
    btn.onclick = () => sb.classList.toggle("open");
    document.body.appendChild(btn);
  }

  const pager = document.getElementById("pager");
  if (pager && inChapters) {
    const i = flat.findIndex(([f]) => f === here);
    const prev = i > 0 ? flat[i - 1] : null;
    const next = i >= 0 && i < flat.length - 1 ? flat[i + 1] : null;
    pager.innerHTML =
      (prev ? `<a class="prev" href="${prev[0]}"><small>← Попередній</small>${prev[1]}</a>` : `<a class="prev" href="../index.html"><small>← На головну</small>Зміст</a>`) +
      (next ? `<a class="next" href="${next[0]}"><small>Наступний →</small>${next[1]}</a>` : `<a class="next" href="../index.html"><small>Кінець →</small>Повернутись до змісту</a>`);
  }

  // "Перевір себе" — маленька прогрес-фіча: зберігаємо прочитані розділи
  try {
    const key = "fs-done";
    const done = new Set(JSON.parse(localStorage.getItem(key) || "[]"));
    if (inChapters && here) { done.add(here); localStorage.setItem(key, JSON.stringify([...done])); }
    document.querySelectorAll("[data-done-count]").forEach(el => el.textContent = `${done.size} / ${flat.length}`);
  } catch (e) {}
})();
