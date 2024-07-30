# ns-detag
**works with fast.nationstates.net :D**

this is meant to be used on top of existing update tools such as breeze++ or gauntlet, thats why i chose keybinds that these scripts dont/rarely use

i pieced this together by pattern recognition and sampling different ns scripts, i dont know js

# Installation
I use [TamperMonkey](https://www.tampermonkey.net/) for this, you can use whatever works for you

Download [user.js](https://github.com/ducky4life/ns-detag/raw/main/user.js) (or paste it in your script runner), optionally change keybinds and RO name, run it, enjoy

[Latest Release](https://github.com/ducky4life/ns-detag/releases/latest), read the changelogs here

## Setting/Changing keybinds and RO name

You can change the keybinds by replacing the constant value with another key of your choice in the script, and replace `detag` with your RO name :D

for a list of key names, go [here](https://www.toptal.com/developers/keycode) and copy the `event.code` info!

```
const ROname = "detag"
const restoregovkey = "KeyL"
const eyebeastkey = "KeyO"
const toggletemplatekey = "KeyK"
const togglefastkey = "KeyI"
const appointselfROkey = "KeyJ"
```

## Having problems?

Contact Ducky on Discord, email: ducky4life@duck.com, or [telegram me on NationStates](https://www.nationstates.net/page=compose_telegram?tgto=ducky)!

# Functionalities

## Governor Rename (defaults to L)

First button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there (works with fast.nationstates.net)
 
Second one replaces current gov name with the default one and immediately renames it, no confirmation required

## Appoint Self as Regional Officer (defaults to J)

Same functionality as renaming governor, but appointing your nation as RO instead with Appearance, Communications, and Embassies authorities

## Eyebeast (defaults to O)

Takes you to the [Eyebeast](https://eyebeast.calref.ca) page of the current region page (only works if you are on a region page)

## Toggle template (defaults to K)

Toggles between the template-overall=none version of current page

This feature is the same as the Breeze++ and Gauntlet feature, for my Reliant homies

## Toggle fast (defaults to I)

Toggles between the fast.nationstates.net version of current page
