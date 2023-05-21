# OriginalBrawl.js
Первый опенсурс приватный JavaScript сервер Brawl Stars на версию v2.57! Основан на [nodebrawl-core](https://github.com/tailsjs/nodebrawl-core)

* [English language](/README.md)

## Требования
* [NodeJS](https://nodejs.org/)
* Мозг

## Настройка
1. Скачайте/клонируйте репозиторий
2. Введите в консоль `npm install`
3. `node index`

## Как играть?
### Метод 1.
Для игры вам необходимо пропатчить клиент v2.57. [Скачайте его тут](https://www.mediafire.com/file/3rjv2h05rkbzyfu/OriginalBrawl+client_2.57_1684604111.ipa/file). <br>
Измените **"Brawl Stars"** файл в любом **HEX-редакторе** *(если вы запускаете сервер через другое устройство)* и замените каждый `127.0.0.1` на свой IP *(Спасибо Depresive Primo за метод!)*
### Метод 2.
Для игры вам нужен IPA-клиент Brawl Stars v2.57. Вы можете скачать его где угодно, я полагаю.<br>

Затем вам нужно каким-то образом перенаправить себя с `game.brawlstarsgame.com` на ваш IP.<br>

Мой метод заключается в том, чтобы изменить файл `hosts` в `/etc/hosts`. **НЕОБХОДИМ JAILBREAK**<br>

Просто добавьте `YOUR.IP.ADDRESS.HERE game.brawlstarsgame.com` в конец файла.

## Что работает?
* Бои *(НЕОБХОДИМО ИГРАТЬ ЧЕРЕЗ BOT BRAWL)*.
* Меню *(OwnHomeData без HEX)*
* Профиль игрока.
* Клуб и чат.
* Лидерборды.
* Ящики

## Кредиты
* Depresive Primo за помощь с некоторыми структурами (ну и за клиент).
* Ultracore за структуру OHD в HEX

## Скриншоты
![Main menu](/Screens/menu.jpg)