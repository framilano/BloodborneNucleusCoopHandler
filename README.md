# Bloodborne Nucleus Co-op Handler
Nucleus Co-op splitscreen handler for Bloodborne using shadPS4 emulation

<img width="2268" height="638" alt="Screenshot 2026-09-21 213939" src="https://github.com/user-attachments/assets/4dccd5dd-abc8-42d6-8673-3605592cd34d" />

## How does it work
Bloodborne servers emulation currently requires two components:
- **A stats server**, that handles user messages, ghosts and generic stats
- **A co-op server**, that allows for summonings and invasions

To have a full offline experience we need to run both these servers together, this is possible thanks to these two open source projects:
1. The [NoDreamForHunter](https://github.com/fhody125-web/NoDreamForHunter/) from fhody125-web gives us an offline stats server
2. The [Shadnet-P2P](https://github.com/Wozzardman/shadnet-p2p) from Wozzardman gives us an offline shadnet server that supports co-op and summonings.

Both these servers will run when launching the handler automatically, I added an option too to just use the official [The Hunter'ss Dream](https://thehuntersdream.com/), but Wozzardman fork is still required for co-op.

## How to use
1. Download the latest [release](https://github.com/framilano/BloodborneNucleusHandler/releases) and unzip it
2. Copy the content of the extracted folder to `<YOUR_NUCLEUS_INSTALLATION>/handlers`, both the `Bloodborne` folder and `Bloodborne.js`
3. Download the latest released `shadPS4.exe` from Wozzardman [shadp2p repository](https://github.com/Wozzardman/shadp2p/releases) and select it when from Nucleus Co-op UI, as soon as you select it the Bloodborne handler should appear.

## Handler Options
The handler will ask you:
1. To select your `CUSAXXXXX` folder where your Bloodborne games files are stored
2. If you want to run the handler fully offline (so enabling both servers) or to use the Hunter's Dream Server as a stats server.
3. Your desired render resolution for all instances
4. To enable the *highly* experimental Seamless Co-op by Wozzardman

A bunch of performance patches are enabled by default, you can edit them in `Bloodborne.xml` contained in the `patches` folder.

## Extra
- Enable the in-game music only on the first instance, so you won't have music echoing while playing
- You can still enable mods, using a Mod Manager or BB_Launcher.

- You can import your own save file on all instances and then register them on each profile, the save folder for each player is `C:\Users\<YOUR_USERNAME>\NucleusCoop\<PlayerX>\AppData\Roaming\shadPS4\home\1000\savedata`. Launch the game after replacing the save files and the server will associate them with the shadnet user you're using. An error could appear regarding the online profile but you can safely ignore it. Repeat this step for each instance and you're done!

## Building
The release version of this handler contains the compiled `shadnet.exe` executable, the `shadnet-sample` executable that allows us to register offline clients to the coop server for each instance and the stats server `NoDreamForHunter.exe` executable. All these executables can be build following the linked repositories READMEs.

## Linux
I already released a [Linux Bloodborne handler for PartyDeck](https://github.com/partydeck/partydeck/issues/219), it requires you to manually retrieve an run the server files though.

## Todo
- [ ] Waiting for a proper Seamless Co-op mod
- [ ] Support for other servers other than Wozzardman forks

## AI Disclaimer
This project is not being hosted on Nucleus Co-op because it has been falsely accused of being developed using AI, a less than 300 rows js script that I made for fun in a weekend. 
This is completely false and based on nothing, when I asked the mods of Nucleus for an explanation or the chance to "prove" that this is 100% human written code and even proposing to just call me and glady explain every choice that I made in it they promptly banned me for 7 days on their Discord Server without saying a word. So no, this very small project wasn't written with AI, maybe I used Google AI Overview to check some english translations for a bunch of terms and checked how to lower a string in JS because I couldn't remember the correct syntax.

## Support
If you want to support me with a ☕ here's my [ko-fi](https://ko-fi.com/framilano)!
