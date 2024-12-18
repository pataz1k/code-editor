# Code Editor Project

## Краткое описание задачи

Этот проект представляет собой веб-приложение для редактирования кода с поддержкой нескольких языков программирования. Пользователи могут выбирать язык программирования (JavaScript, Go, Python), редактировать код и выполнять задания в интерактивном редакторе. Приложение отображает задание рядом с редактором кода, позволяя пользователям работать над решением в режиме реального времени.

## Инструкции по установке и запуску

1. Клонируйте репозиторий
2. Запустите проект
   ```bash
   npm install
   npm run dev
    ```
3. Проект будет запущен на https://localhost:5173/

## Информация о том как устроен мок-сервер
1. Запрос (ExecuteCodeRequest):
- Параметры запроса включают язык программирования и сам код, который нужно "выполнить".

2. Ответ (ExecuteCodeResponse):
- Результат выполнения запроса содержит статус выполнения (success или error).
- В случае успеха возвращается строковый вывод.
- В случае ошибки возвращается описание ошибки.

3. Механизм работы:
- Функция симулирует задержку с помощью setTimeout, создавая задержку в 1 секунду, что имитирует сетевые задержки.
- Далее, с вероятностью 80% она возвращает успешный результат с выводом "Hello, world!", а с вероятностью 20% — ошибку синтаксиса.
