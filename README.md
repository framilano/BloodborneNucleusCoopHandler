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
- [shadPS4](#shadps4)
  - [How does it work](#how-does-it-work-2)
  - [How to install](#how-to-install-2)
  - [Handler Instructions](#handler-instructions-2)
  - [Extra](#extra-2)
- [Building](#building)
- [Linux](#linux)
- [Todo](#todo)
- [AI Disclaimer](#ai-disclaimer)
- [Support](#support)

# bbhost
<img width="2559" height="1436" alt="Screenshot 2026-10-10 124222" src="https://github.com/user-attachments/assets/01ecbf7f-6665-4977-b4b9-4ad28961958a" />

**This handler supports 32:9 ratios!**

## How does it work
**This handler only works with [bbhost](https://github.com/droogie/bbhost)**

Uses bbhost official [server](https://thehuntersdream.com/) to connect two local players in the same instance. You can play locally with 2 or more player and join other people online! It runs better than shadPS4 and has more PC specific customizations too.
**This handler is always-online**

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
**This handler only works with this [bbport fork](https://github.com/Supermedo/bloodborne_pc)**

**This handler works both completely offline and online**

## How does it work
Uses [wozzardman fork](https://github.com/Wozzardman/shadnet-p2p), [fhody125-web-fork](https://github.com/fhody125-web/NoDreamForHunter/) server forks to play coop **completely offline** and it supports BBSC seamless coop! It runs way better than shadPS4 and has more PC specific customizations too.

## How to install
1. Download and extract the latest `bbportHandler.zip` from [releases](https://github.com/framilano/BloodborneNucleusCoopHandler/releases)
2. Move the downloaded files to the NucleusCoop `handlers` folder
3. Select `Bloodborne.exe` from NucleusCoop GUI, 
  <img width="140" height="81" alt="immagine" src="https://github.com/user-attachments/assets/9b8b3bcf-0b06-4903-8b63-5004036f2db5" />

## Handler Instructions
1. Select your `CUSAXXXXX` folder where your Bloodborne games files are stored
2. The handler will ask you which stats and server IPs to use, type `127.0.0.1` in both to let the handler start the servers autonomously.
3. Enter your credentials, if using `127.0.0.1` as a coop server you must leave these fields blank, otherwise you must input both username and password for each player registered on the external coop server.
4. Seamless by Classmg is started automatically when selecting both stats and coop server with `127.0.0.1` and `Enable Seamless option` is also enabled. If using it locally the BBSC account will be handled automatically, if you're using it with `play.seamlesshunt.com` then you'll need to [create an account first](https://install.seamlesshunt.com/index.html) for each instance.
5. When the handler starts the *Nucleus Coop Process Picker* will appear, you need to wait for the first instance of `Bloodborne.exe` to boot, click **Refresh** on the process picker and select process `bb-probe.exe`
6. Repeat step 4 for each instance that starts automatically
7. When all the windows are locked in positions correctly, press `End` key to lock input, all controllers should work at that point.
8. Done!

## Extra
- Enable the in-game music only on the first instance, so you won't have music echoing while playing
- You can import your own save file on all instances and then register them on each profile, the save folder for each player is `C:\Users\<YOUR_USERNAME>\NucleusCoop\<PlayerX>\AppData\Roaming\bbport-launcher\user\savedata\1`. Launch the game after replacing the save files and the server will associate them with the shadnet user you're using. Remember that you can use the [Bloodborne save editor](https://github.com/Noxde/Bloodborne-save-editor) to setup your saves more quickly

# shadPS4
## Showcase
https://youtu.be/Jml26Eonlv0
 
## How does it work
Bloodborne servers emulation currently requires two components:
- **A stats server**, that handles user messages, ghosts and generic stats
- **A co-op server**, that allows for summonings and invasions

To have a full offline experience we need to run both these servers together, this is possible thanks to these two open source projects:
1. The [NoDreamForHunter](https://github.com/fhody125-web/NoDreamForHunter/) from fhody125-web gives us an offline stats server, this is not the same as [nodreamforthehunter](https://nodreamforthehunter.com/)
2. The [Shadnet-P2P](https://github.com/Wozzardman/shadnet-p2p) from Wozzardman gives us an offline shadnet server that supports co-op and summonings.
3. The[ Seamless Coop mod](https://github.com/Classmg22/BBSC) by Classmg22, give us both coop and stats server to run locally

## How to install
1. Download and extract the latest `shadPS4Handler.zip` from [releases](https://github.com/framilano/BloodborneNucleusCoopHandler/releases)
2. Copy the content of the extracted folder to `<YOUR_NUCLEUS_INSTALLATION>/handlers`, both the `Bloodborne-shadPS4` folder and `Bloodborne-shadPS4.js`
  * 2a) If you want to play with **Wozzardman** fork of the coop server, download the latest released `shadPS4.exe` from Wozzardman [shadp2p repository](https://github.com/Wozzardman/shadp2p/releases).
  * 2b) If you want to play using the **NoDreamForTheHunter** version, download the latest release `shadps4.exe` from their [site](https://nodreamforthehunter.com/howtoplay) and rename it to `shadPS4.exe`
  * 2c) If you want to play with BBSC seamless coop, download the latest Nucleus release from [BBSC repository](https://github.com/Classmg22/BBSC)
3. Select the `shadPS4.exe` **(it must have the mods folder near the it if using seamless coop!)** you downloaded using Nucleus Co-op UI, as soon as you select it the Bloodborne handler should appear
  <img width="140" height="81" alt="immagine" src="https://github.com/user-attachments/assets/9b8b3bcf-0b06-4903-8b63-5004036f2db5" />

## Handler Instructions
The handler will ask you:
1. To select your `CUSAXXXXX` folder where your Bloodborne games files are stored
2. Your desired render resolution for all instances
3. Your **stats server**, if you type `127.0.0.1` the handler will automatically run the stats server from fhody125-web locally
4. Your **co-op server**, if you type `127.0.0.1` the handler will automatically run the co-op server from Wozzardman locally
4. If you want to enable the `Seamless Coop mod` from Classmg22, only makes sense if you're using a Classmg22 Co-op server 
5. **Players' credentials**, if you're using an online custom co-op server then you'll need to provide each player credential for each instance you're running

A bunch of performance patches are enabled by default, you can edit them in `Bloodborne.xml` contained in the `patches` folder.

## Extra
- If you want to see ghosts and messages from the official shadPS4 shadnet server, just type `thehuntersdream.com` as a **stats Server**, this requires of course to be online
- Enable the in-game music only on the first instance, so you won't have music echoing while playing
- You can still enable mods, using a Mod Manager or BB_Launcher.
- You can import your own save file on all instances and then register them on each profile, the save folder for each player is `C:\Users\<YOUR_USERNAME>\NucleusCoop\<PlayerX>\AppData\Roaming\shadPS4\home\1000\savedata`. Launch the game after replacing the save files and the server will associate them with the shadnet user you're using. An error could appear regarding the online profile but you can safely ignore it. Repeat this step for each instance and you're done! WARNING: Normal shadPS4 saves do not work on NoDreamForTheHunter coop server, you must start a new game for them, remember that you can use the [Bloodborne save editor](https://github.com/Noxde/Bloodborne-save-editor) to setup your saves more quickly

## Building
The release version of this shadPS4 handler contains the `shadnet-sample` executable that allows us to register offline clients to the coop server for each instance and the stats server `NoDreamForHunter.exe` executable. All these executables can be build following the linked repositories READMEs.

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
