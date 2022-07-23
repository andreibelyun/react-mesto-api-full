# react-mesto-api-full
Репозиторий для приложения проекта `Mesto`, включающий фронтенд и бэкенд части приложения со следующими возможностями: авторизации и регистрации пользователей, операции с карточками и пользователями. Бэкенд расположен в директории `backend/`, а фронтенд - в `frontend/`. 

## Описание

Для демонстрации работы сайта создан облачный сервер на платформе [Яндекс.Облако](https://cloud.yandex.ru/).

Ссылка на сайт: https://mesto.vstrechi.nomoredomains.work/.

Публичный IP-адрес сервера: 62.84.126.64.

Фронтенд часть проекта размещена на основном домене `mesto.vstrechi.nomoredomains.work`, бэкенд часть проекта размещена на поддомене: `api.mesto.vstrechi.nomoredomains.work`.

Реализовано логирование запросов и ошибок:
- каждый запрос к API сохраняется в файле request.log
- если API возвращает ошибку, информация о ней сохраняется в файле error.log

Логи сохраняются в формате JSON и не добавляются в репозиторий.

Чтобы обеспечить безопасность приложения на сервере создан .env - файл, в котором хранится секретный ключ для создания и верификации JWT.

Выпущены и подключены SSL-сертификаты для шифрования данных по протоколу HTTPS.

Чтобы сервер не "падал" установлен и запущен менеджер процессов pm2.

Для раздачи статичных файлов используется nginx.

## Ссылки на проекты

Фронтенд: [react-mesto-auth](https://github.com/andreibelyun/react-mesto-auth)  
Бэкенд: [express-mesto](https://github.com/andreibelyun/express-mesto)

## Планы по доработке
Перенести проект на бесплатный сервис Heroku
