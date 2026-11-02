# Fullstack для чайників 🧸→🎓

Навчальний посібник із фулстек-розробки українською: від «як працює інтернет» до system design.
Статичні HTML-файли, без важкої збірки та залежностей.

🌐 **Онлайн-версія:** [https://pestov-v.github.io/Learn-FullStack/](https://pestov-v.github.io/Learn-FullStack/)

---

## Як відкрити локально

Просто відкрийте головний файл у будь-якому браузері:

```bash
open index.html
```

або запустіть локальний веб-сервер:

```bash
npx serve .
# або
python3 -m http.server 8000
```

---

## Деплой на GitHub Pages

Проєкт повністю готовий до автоматичного розгортання на GitHub Pages за допомогою GitHub Actions:

1. Запушіть зміни в репозиторій у гілку `main`:
   ```bash
   git add .
   git commit -m "Підготовка до деплою на GitHub Pages"
   git push origin main
   ```
2. У вашому GitHub-репозиторії перейдіть у **Settings** → **Pages**.
3. У блоці **Build and deployment** у полі **Source** виберіть **GitHub Actions**.
4. GitHub автоматично запустить workflow `.github/workflows/deploy.yml` і опублікує сайт за адресою:  
   **`https://pestov-v.github.io/Learn-FullStack/`**

---

## Структура

- `index.html` — зміст, карта навчання та легенда блоків
- `chapters/NN-*.html` — 17 розділів у трьох рівнях (від Новачка до Про)
- `chapters/_TEMPLATE.html` — шаблон для нових розділів
- `assets/style.css` — спільні стилі (адаптивність, темна/світла тема)
- `assets/nav.js` — бічна навігація, кнопки «назад/далі», трекінг прогресу читання (localStorage)
- `.nojekyll` — вимикає обробку Jekyll на GitHub Pages
- `.github/workflows/deploy.yml` — автоматичний CI/CD деплой через GitHub Actions
- `404.html` — стилізована сторінка помилки 404

---

## Додати або змінити розділ

1. Скопіюйте `chapters/_TEMPLATE.html` у `chapters/NN-name.html`.
2. Додайте запис у список `CHAPTERS` в `assets/nav.js`.
3. Додайте картку на `index.html`.
