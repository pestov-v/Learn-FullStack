# Fullstack для чайників

Навчальний посібник із фулстек-розробки українською: від «як працює інтернет» до system design.
Статичні HTML-файли, без збірки та залежностей.

## Як відкрити

```bash
open index.html
```

або через будь-який локальний сервер:

```bash
npx serve .
```

## Структура

- `index.html` — зміст і карта навчання
- `chapters/NN-*.html` — 17 розділів у трьох рівнях
- `assets/style.css` — спільні стилі (світла/темна тема)
- `assets/nav.js` — бічна навігація, кнопки «назад/далі», прогрес читання (localStorage)
- `chapters/_TEMPLATE.html` — шаблон для нових розділів

## Додати розділ

1. Скопіюйте `chapters/_TEMPLATE.html` у `chapters/NN-name.html`.
2. Додайте запис у список `CHAPTERS` в `assets/nav.js`.
3. Додайте картку на `index.html`.
# Learn-FullStack
