# ns-detag

> [!WARNING]
> Per the [new script rules](https://forum.nationstates.net/viewtopic.php?p=41811907#p41811907), your script may be outdated. Please update the script with the latest version to comply with the rules.

**works with fast.nationstates.net :D**

meant to be used on top of existing update tools such as breeze++ or gauntlet

## my other scripts :D

<a href="https://github.com/ducky4life/ns-blender">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=ducky4life&repo=ns-blender&theme=algolia" />
</a>
<a href="https://github.com/ducky4life/ns-zombie">
  <img align="center" src="https://github-readme-stats.vercel.app/api/pin/?username=ducky4life&repo=ns-zombie&theme=algolia" />
</a>

# Installation
I use [TamperMonkey](https://www.tampermonkey.net/) for this, you can use whatever works for you

Download [script.user.js](https://github.com/ducky4life/ns-detag/raw/main/script.user.js) (or paste it in your script runner), enter your main nation, run it, enjoy

If you use TamperMonkey, go to the script.user.js link above and TamperMonkey should pop up automatically with the [Latest Release](https://github.com/ducky4life/ns-detag/releases/latest)

# Configuration

> [!IMPORTANT]
> Per the [new script rules](https://forum.nationstates.net/viewtopic.php?p=41811907#p41811907), you must set your main nation to use the script.
> Please enter your main nation in `const main_nation_name = ""`.

Please also set your password and Regional Officer name for all of the functions to work properly!

## Changing keybinds

You can change the keybinds by replacing the constant value with another key of your choice in the script

for a list of key names, go [here](https://www.toptal.com/developers/keycode) and copy the `event.code` info!

```
const restoregovkey = "KeyL"
const eyebeastkey = "KeyO"
const toggletemplatekey = "KeyK"
const togglefastkey = "KeyI"
const appointselfROkey = "KeyJ"
const puppetloginkey = "KeyY"
```

## Having problems/have new ideas?

Contact me on Discord, email: ducky4life@duck.com, or [telegram me on NationStates](https://www.nationstates.net/page=compose_telegram?tgto=ducky)!

# Functionalities

## Governor Rename (defaults to L)

First button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there
 
Second one replaces current gov name with the default one and immediately renames it

## Appoint Self as Regional Officer (defaults to J)

Similar to renaming governor, but appointing your nation as RO instead with Appearance, Communications, and Embassies authorities.

First button press takes you to https://www.nationstates.net/page=regional_officer/nation=yournationhere/ if you are not there, second one appoints RO.

## Switcher Login (defaults to Y)

**Please set your password in the `const password = ` line in Configuration**

Logs in to another puppet on the nation page of the puppet that you want to log into

Works with template-overall=none pages, pressing the login key on the nation page of the puppet will take you to the World Assembly page logged in to the puppet, thanks Reliant :D

**Only works if you have the same password across your puppets, obviously don't use this on nations that aren't yours if you don't want to spam people with bad login attempts**

## Eyebeast (defaults to O)

Takes you to the [Eyebeast](https://eyebeast.calref.ca) page of the current region page (only works if you are on a region page)

## Toggle template (defaults to K)

Toggles between the template-overall=none version of current page

This feature is the same as the Breeze++ and Gauntlet feature, for my Reliant homies

## Toggle fast (defaults to I)

Toggles between the fast.nationstates.net version of current page
