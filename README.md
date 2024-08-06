# ns-detag
**works with fast.nationstates.net :D**

this is meant to be used on top of existing update tools such as breeze++ or gauntlet, thats why i chose keybinds that these scripts dont/rarely use

i pieced this together by pattern recognition and sampling different ns scripts, i dont know js

# Installation
I use [TamperMonkey](https://www.tampermonkey.net/) for this, you can use whatever works for you

Download [script.user.js](https://github.com/ducky4life/ns-detag/raw/main/script.user.js) (or paste it in your script runner), optionally change keybinds and RO name, run it, enjoy

If you use TamperMonkey, go to the script.user.js link above and TamperMonkey should pop up automatically with the latest release

[Latest Release](https://github.com/ducky4life/ns-detag/releases/latest), read the changelogs here

## Setting/Changing keybinds and RO name

You can change the keybinds by replacing the constant value with another key of your choice in the script, and replace `detag` with your RO name/`password123` with your password for puppets :D

for a list of key names, go [here](https://www.toptal.com/developers/keycode) and copy the `event.code` info!

```
const ROname = "detag"
const password = "password123"
const restoregovkey = "KeyL"
const eyebeastkey = "KeyO"
const toggletemplatekey = "KeyK"
const togglefastkey = "KeyI"
const appointselfROkey = "KeyJ"
const puppetloginkey = "KeyY"
```

## Having problems?

Contact Ducky on Discord, email: ducky4life@duck.com, or [telegram me on NationStates](https://www.nationstates.net/page=compose_telegram?tgto=ducky)!

# Functionalities

## Governor Rename (defaults to L)

First button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there (works with fast.nationstates.net)
 
Second one replaces current gov name with the default one and immediately renames it, no confirmation required

## Appoint Self as Regional Officer (defaults to J)

Same functionality as renaming governor, but appointing your nation as RO instead with Appearance, Communications, and Embassies authorities

## Switcher Log In (defaults to Y)

**Please set your password in the `const password = ` line**

Logs in to another puppet on the nation page of the puppet that you want to log into

Works with template-overall=none pages, pressing the login key on the nation page of the puppet will take you to the World Assembly page

**Only works if you have the same password across your puppets, obviously don't use this on nations that aren't yours if you don't want to spam people with bad login attempts**

## Eyebeast (defaults to O)

Takes you to the [Eyebeast](https://eyebeast.calref.ca) page of the current region page (only works if you are on a region page)

## Toggle template (defaults to K)

Toggles between the template-overall=none version of current page

This feature is the same as the Breeze++ and Gauntlet feature, for my Reliant homies

## Toggle fast (defaults to I)

Toggles between the fast.nationstates.net version of current page
