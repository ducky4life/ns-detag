// ==UserScript==
// @name         Extra Detag Functionalities
// @namespace    https://ducky4life.github.io/tgw
// @version      1.0.0
// @description  meow
// @author       Ducky
// @match        *://*.nationstates.net/*
// @grant        none
// ==/UserScript==



// i pieced this together by pattern recognition and sampling different ns scripts, i dont know js
// some of the code here is modified from https://github.com/rootabeta/YAFFeather
// you can change the keybind by replacing L/O in KeyL/KeyO with another key of your choice


// ignore my shit code
const regionlink = window.location.href
const reg = /(?<=.nationstates.net).*$/
const domain = regionlink.replace(reg, "")
const region = regionlink.replace(domain, "")
const regionname = region.replace("/", "")


// code i guess
document.addEventListener('keyup', function (event) { // no spam
	if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName == 'INPUT' || document.activeElement.tagName == 'TEXTAREA') { // u can use modifiers
		return;
	} else {
		switch (event.code) { // actual code starts here

                // restores gov name to original for detags
                case 'KeyL':

                // first button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there
                // second one replaces current gov name with the default one and immediately renames it, no submit button required

				if (window.location.href.includes("office=governor")) { // rename
					document.getElementsByName("office_name")[0].value = "Governor";
					document.getElementsByName('editofficer')[0].click();
				}

				else { // go to gov page
					window.location.assign("https://www.nationstates.net/page=regional_officer/region/office=governor/");
				}
				break;

                // goes to the eyebeast page of current region page (PLEASE ONLY CLICK THIS IF ON A REGION PAGE)
                case 'KeyO':
				window.location.assign("https://eyebeast.calref.ca/?" + regionname);
		}
	}
});
