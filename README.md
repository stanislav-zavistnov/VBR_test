# Мои комментарии к работе:
Сборка Vite, использовал AntDesign, TypeScript, css-modules.
Загрузка данных из mock.json при инициализации компоненты, загрузка данных из localStorage для поиска.
Сортировка и поиск работают по сумме, именно по ключу amount.
Настроена пагинация по 5 элементов на страницу.
Справа в описании есть ссылка на прод.
Комментарии по коду постарался записать.

# Установка и запуск:
- npm i
- npm run dev

# Задание звучало так:
- Использовать React, Typescript
- При необходимости использовать webpack
- Использовать компоненты любой крупной библиотеки компонентов: bootstrap, material ui и тд
- Дать возможность сохранять результаты поиска на клиентской стороне и передавать эти результаты другим пользователям сервиса
- Реализовать фильтр продуктов по сумме, сумма указанная в фильтре это минимальная сумма, которую клиент хочет получить в кредит
- Изначально форма поиска не содержит фильтров и отображает все кредитные продукты. Количество продуктов не менее 5.
- Дать возможность отсортировать кредитные продукты по сумме: от большего к меньшему и наоборот.
- Работоспособность в последней версии Google Chrome
- Плюсом будут комментарии к коду, чтобы нам было проще оценить знания