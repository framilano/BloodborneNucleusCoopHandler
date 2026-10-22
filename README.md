# Bloodborne Nucleus Co-op Handler
Bloodborne handlers for [shadPS4](https://github.com/shadps4-emu/shadps4), [bbhost](https://github.com/droogie/bbhost) and [bbport](https://github.com/Supermedo/bloodborne_pc). 

<img width="2268" height="638" alt="Screenshot 2026-09-21 213939" src="https://github.com/user-attachments/assets/4dccd5dd-abc8-42d6-8673-3605592cd34d" />

## Table of contents
- [bbhost](#bbhost)
  - [How does it work](#how-does-it-work)
  - [How to install](#how-to-install)
  - [Handler Instructions](#handler-instructions)
  - [Extra](#extra)
- [bbport](#bbport)
  - [How does it work](#how-does-it-work-1)
  - [How to install](#how-to-install-1)
  - [Handler Instructions](#handler-instructions-1)
  - [Extra](#extra-1)
- [Linux](#linux)
- [Todo](#todo)
- [AI Disclaimer](#ai-disclaimer)
- [Support](#support)

# bbhost
<img width="2559" height="1436" alt="Screenshot 2026-10-10 124222" src="https://github.com/user-attachments/assets/01ecbf7f-6665-4977-b4b9-4ad28961958a" />

## Features
- **This handler only works with [bbhost](https://github.com/droogie/bbhost)**
- Supports ultrawide resolutions
- This handler is **always-online**
- Uses bbhost official [server](https://thehuntersdream.com/) to connect two local players in the same instance. You can play locally with 2 or more player and join other people online! It runs better than shadPS4 and has more PC specific customizations too.

## How to install
1. Download the latest `bbhostHandler.zip` from [releases](https://github.com/framilano/BloodborneNucleusCoopHandler/releases)
2. Move the downloaded file to the NucleusCoop `handlers` folder
3. Select `bbhost.exe` from NucleusCoop GUI
  <img width="140" height="81" alt="immagine" src="https://github.com/user-attachments/assets/9b8b3bcf-0b06-4903-8b63-5004036f2db5" />

## Handler Instructions
1. The handler will ask you to select your Bloodborne CUSAXXXXX folder and your `eboot-bin.decrypted`
2. Done, edit the `bbhost.toml` options, login into your accounts and play!

## Extra
- Enable the in-game music only on the first instance, so you won't have music echoing while playing
- You can import your own save file on all instances and then register them on each profile, the save folder for each player is `C:\Users\<YOUR_USERNAME>\NucleusCoop\<PlayerX>\AppData\Roaming\bbhost\data\saves`. Launch the game after replacing the save files and the server will associate them with the shadnet user you're using. Remember that you can use the [Bloodborne save editor](https://github.com/Noxde/Bloodborne-save-editor) to setup your saves more quickly

# bbport

## Features
- **This handler only works with this [bbport fork](https://github.com/Supermedo/bloodborne_pc)**
- Supports [BBSC Seamless Coop](https://github.com/CLSAMG22/BBSC), BBSC only works with [Supermedo fork <= 1.7.8](https://github.com/Supermedo/bloodborne_pc/releases/tag/windows-v1.7.8)
- This handler works with BBSC offline/online and vanilla coop completely offline (also only with [Supermedo fork <= 1.7.8](https://github.com/Supermedo/bloodborne_pc/releases/tag/windows-v1.7.8))
- Supports ultrawide resolutions (without BBSC)
  
## How to install
1. Please use a clean folder for your Supermedo fork, do not reuse an existing installations, create a separate folder!
2. Download and extract the latest `bbportHandler.zip` from [releases](https://github.com/framilano/BloodborneNucleusCoopHandler/releases)
3. Move the downloaded files to the NucleusCoop `handlers` folder
4. Select `Bloodborne.exe` from NucleusCoop GUI, 
  <img width="140" height="81" alt="immagine" src="https://github.com/user-attachments/assets/9b8b3bcf-0b06-4903-8b63-5004036f2db5" />

## Handler Instructions
1. Select your `CUSAXXXXX` folder where your Bloodborne games files are stored
2. The handler will ask you which stats and server IPs to use, type `127.0.0.1` in both to let the handler start the servers autonomously.
3. Enter your credentials, if using `127.0.0.1` as a coop server you must leave these fields blank, otherwise you must input both username and password for each player registered on the external coop server.
4. If you want to use BBSC Seamless Mod, download the files from [here](https://install.seamlesshunt.com/index.html#downloads) and extract the zip content into the `bbsc-files` folder present in my handler. Seamless by Classmg is started automatically when selecting both stats and coop server with `127.0.0.1` and `Enable Seamless option` is also enabled. If using it locally the BBSC account will be handled automatically, if you're using it with `play.seamlesshunt.com` then you'll need to [create an account first](https://install.seamlesshunt.com/index.html) for each instance.
5. When the handler starts the *Nucleus Coop Process Picker* will appear, you need to wait for the first instance of `Bloodborne.exe` to boot, click **Refresh** on the process picker and select process `bb-probe.exe`
6. Repeat the previous step for each instance that starts automatically
7. When all the windows are locked in positions correctly, press `End` key to lock input, all controllers should work at that point.
8. Done!

## Extra
- If you're using DS4Windows, remember to go to settings and check `Hide DS4 Controller`
- Due to how BBSC injection works, it might take a few minutes to load Kin and Hunt Bell, try traveling or open the inventory a bunch of times if they don't appear immediately.
- Enable the in-game music only on the first instance, so you won't have music echoing while playing
- You can import your own save file on all instances and then register them on each profile, the save folder for each player is `C:\Users\<YOUR_USERNAME>\NucleusCoop\<PlayerX>\AppData\Roaming\bbport-launcher\user\savedata\1`. Launch the game after replacing the save files and the server will associate them with the shadnet user you're using. Remember that you can use the [Bloodborne save editor](https://github.com/Noxde/Bloodborne-save-editor) to setup your saves more quickly

## Linux
I already released a [Linux Bloodborne handler for PartyDeck](https://github.com/partydeck/partydeck/issues/219), it requires you to manually retrieve an run the server files though.

## Todo
- [X] Waiting for a proper Seamless Co-op mod
- [X] Support for [BBPort](https://github.com/Supermedo/bloodborne_pc)
- [X] Support for [BBHost](https://github.com/droogie/bbhost)
- [X] Support for other servers other than Wozzardman forks

## AI Disclaimer
This project is not being hosted on Nucleus Co-op because it has been falsely accused of being developed using AI, a less than 300 lines js script that I made for fun in a weekend. 
This is completely false and based on nothing, when I asked the mods of Nucleus for an explanation or the chance to "prove" that this is 100% human written code and even proposing to just call me and gladly explain every choice that I made in it they promptly banned me for 7 days on their Discord Server without saying a word. So no, this very small project wasn't written with AI, maybe I used Google AI Overview to check some english translations for a bunch of terms and checked how to lower a string in JS because I couldn't remember the correct syntax.

## Support
If you want to support me with a ☕ here's my [ko-fi](https://ko-fi.com/framilano)!
