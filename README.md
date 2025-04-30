# ns-detag

**works with fast.nationstates.net :D**

meant to be used on top of existing update tools such as breeze++ or gauntlet

# Installation
I use [TamperMonkey](https://www.tampermonkey.net/) for this, you can use whatever works for you

Download [script.user.js](https://github.com/ducky4life/ns-detag/raw/main/script.user.js) (or paste it in your script runner), enter your main nation, run it, enjoy

If you use TamperMonkey, go to the script.user.js link above and TamperMonkey should pop up automatically with the [Latest Release](https://github.com/ducky4life/ns-detag/releases/latest)

# Configuration

Please also set your password and Regional Officer name for all of the functions to work properly!

## Changing keybinds

You can change the keybinds by replacing the constant value with another key of your choice in the script

for a list of key names, go [here](https://www.toptal.com/developers/keycode) and copy the `event.code` info!

```js
const restoregovkey = "KeyL"
const eyebeastkey = "KeyO"
const toggletemplatekey = "KeyK"
const togglefastkey = "KeyI"
const appointselfROkey = "KeyJ"
const puppetloginkey = "KeyY"
const detaginfokey = "Digit1"
const detagactionkey = "Digit2"
const flagkey = "Digit3"
const bannerkey = "Digit4"
```

# Usage

## Semiautomatic WFE/Flag/Banner restoring using the script

> [!IMPORTANT]
> make sure you are logged in to RO nation and is on the region page

### Getting detag information

1. Press 1 to open up RMB, you can (un)suppress messages if needed
2. Press 1 to open eyebeast
3. Use arrow keys to find native snapshot
4. Press 1 to download flag/banner and copy WFE

Press 2 to go to regional control page when you are done and follow instructions below

### Restoring native information

1. (Press 2 to go to regional control page)
2. Press 2 to paste copied WFE, press 2 again to confirm
3. Press 2 to open flag field
4. Either click on a preset/no flag with mouse or press 2 again to upload flag from downloaded
5. Press 2 to save changes
6. Pressing 2 opens banner field, repeat 3-5 for banner

restoring tags/embassies is not included as of right now, but might be in the future

# Functions

## Setting flag (defaults to 3)

First press opens up flag field, either click on a preset/no flag with mouse or press 3 again to upload flag from downloaded

When the "Save Changes" button lights up, press 3 again to save it

## Setting banner (defaults to 4)

Same as above but for banners

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

## Eyebeast arrow keys (defaults to arrow keys)

Scroll through snapshots without needing to use a mouse

## Getting detag information (defaults to 1)

refer to usage section

## Semiautomatic WFE/Flag/Banner restoring (defaults to 2)

refer to usage section

## my scripts :D

<a href="https://github.com/ducky4life/ns-detag">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-detag&theme=algolia&border_color=b0ffff&title_color=b0ffff" />
</a>
<a href="https://github.com/ducky4life/ns-blender">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-blender&theme=algolia&border_color=b0ffff&title_color=b0ffff" />
</a>
<a href="https://github.com/ducky4life/ns-zombie">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-zombie&theme=algolia&border_color=b0ffff&title_color=b0ffff" />
</a>
<a href="https://github.com/ducky4life/ns-cardfinder">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-cardfinder&theme=algolia&border_color=b0ffff&title_color=b0ffff" />
</a>
<a href="https://github.com/ducky4life/ns-cardbidder">
  <img align="center" src="https://ducky4life.vercel.app/api/pin/?username=ducky4life&repo=ns-cardbidder&theme=algolia&border_color=b0ffff&title_color=b0ffff" />
</a>

## Having problems/have new ideas?

Contact me on Discord, email: ducky4life@duck.com, or [telegram me on NationStates](https://www.nationstates.net/page=compose_telegram?tgto=ducky)!