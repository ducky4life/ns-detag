// ==UserScript==
// @name         Extra Detag Functionalities
// @namespace    https://ducky4life.github.io/tgw
// @version      1.2.2
// @description  meow
// @author       Ducky
// @match        *://*.nationstates.net/*
// @grant        none
// ==/UserScript==


// please set your keybinds and RO name here
// you can change the keybinds by replacing the constant value with another key of your choice in the script, and replace 'detag' with your RO name :D
// for a list of key names, go to https://www.toptal.com/developers/keycode and copy the 'event.code' info!
// github repo: https://github.com/ducky4life/ns-detag

const ROname = "detag"
const restoregovkey = "KeyL"
const eyebeastkey = "KeyO"
const toggletemplatekey = "KeyK"
const togglefastkey = "KeyI"
const appointselfROkey = "KeyJ"



// some of the code here is modified from https://github.com/rootabeta/YAFFeather, thanks a lot!

// ignore my shit code
const regionlink = window.location.href
const reg = /(?<=.nationstates.net).*$/
const domain = regionlink.replace(reg, "")
const region = regionlink.replace(domain, "")
const regionname = region.replace("/", "")

// code i guess
document.addEventListener("keyup", function (event) { // no spam
	if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") { // u can use modifiers
		return;
	} else {
		switch (event.code) { // actual code starts here



                // restores gov name to original for detags
                case restoregovkey:

                // first button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there
                // second one replaces current gov name with the default one and immediately renames it, no submit button required

				if (window.location.href.includes("office=governor")) { // rename
					document.getElementsByName("office_name")[0].value = "Governor";
					document.getElementsByName("editofficer")[0].click();
				}

				else { // go to gov page
					window.location.assign(domain + "/page=regional_officer/region/office=governor/");
				}
				break;



                // goes to the eyebeast page of current region page (PLEASE ONLY CLICK THIS IF ON A REGION PAGE)
                case "KeyO":
                window.location.assign("https://eyebeast.calref.ca/?" + regionname);
                break;



                // toggles template
                case toggletemplatekey:

                if (window.location.href.includes("template-overall=none")) { // on none
                window.location.href = document.URL.replace("template-overall=none/", "");
                }

                else { // on normal
                window.location.href = `/template-overall=none${document.URL.replace(domain, "")}`;
                }
                break;



                // toggles fast.nationstates.net
                case togglefastkey:

                if (window.location.href.includes("fast.nationstates.net")) { // on fast
                window.location.href = document.URL.replace("fast.", "www.");
                }

                else { // on normal
                window.location.href = document.URL.replace("www.", "fast.");
                }
                break;



                // appoint self as RO
                case appointselfROkey:

                if (window.location.href.includes("page=regional_officer/nation=" + document.getElementById("loggedin").getAttribute("data-nname"))) {
					document.getElementsByName("office_name")[0].value = ROname;
                    document.getElementsByName("authority_A")[0].click();
                    document.getElementsByName("authority_C")[0].click();
                    document.getElementsByName("authority_E")[0].click();
                    document.getElementsByName("editofficer")[0].click();
				}

				else { // go to self RO page
					window.location.assign(domain + "/page=regional_officer/nation=" + document.getElementById("loggedin").getAttribute("data-nname"));
				}
                break;

		}
	}
});
