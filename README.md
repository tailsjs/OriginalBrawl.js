# OriginalBrawl.js
First open-source Brawl Stars v2.57 JavaScript server! Based on [nodebrawl-core](https://github.com/tailsjs/nodebrawl-core)

* [Русский язык](/README-ru.md)

## Requirements
* [NodeJS](https://nodejs.org/)
* Brain

## Setting up
1. Download/clone a repository
2. Type in console `npm install`
3. `node index`

## How to play?
### Method 1.
To play you need to patch v2.57 client. [Download it right there.](https://www.mediafire.com/file/3rjv2h05rkbzyfu/OriginalBrawl+client_2.57_1684604111.ipa/file). <br>
Edit **"Brawl Stars"** file in an **hexa editor** *(if you run server from another device)* and replace every `127.0.0.1` by your IP. *(Thanks Depresive Primo for method!)*

* Unstable method.

### Method 2.
To play you need IPA client of Brawl Stars v2.57. You can download it anywhere, i guess.<br>

Then you need to somehow redirect yourself from `game.brawlstarsgame.com` to your IP.<br>

My method is simply to change the `hosts` file in `/etc/hosts`. <br>

Just add `YOUR.IP.ADDRESS.HERE game.brawlstarsgame.com` to the end of the file.

* If you hosting server on your PC, you need to type local IPv4 IP. Get it from `ipconfig` command.
* This method works only with jailbreaked iPhones.

### Method 3.
You can use risporce client with Frida Injection [Download it right there.](https://mega.nz/file/njxUTayD#srW_zwI36YG0M5JJbZJHneXeEmqfDRM6LftH9YgFnAQ) <br>
Edit IP in `/Payload/Brawl Stars.app/Dylibs/change-host.js` file. (line 5)
* This method works only with iOS 10 and higher.

## What's working?
* Battles *(NEED TO PLAY THROUGH BOT BATTLE)*
* Home *(OwnHomeData without HEX)*
* Player Profile.
* Club and Chat
* Leaderboards
* Boxes

## Credits
* Depresive Primo for helping with some structures.
* Ultracore for OHD HEX structure

## Screens
![Main menu](/Screens/menu.jpg)