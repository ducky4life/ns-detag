// ==UserScript==
// @name         Extra Detag Functionalities
// @namespace    https://ducky4life.github.io/tgw
// @version      1.3.1
// @description  meow
// @author       Ducky
// @match        *://*.nationstates.net/*
// @grant        none
// ==/UserScript==



// Configuration

const version = "1_3_1"
const main_nation_name = "" // IMPORTANT Please set your main nation name here to comply with the new script rules. The script will not work properly if you do not.
const password = "" // your password for your puppets (all puppets must share the same password)
const ROname = "detag" // replace 'detag' with your RO name

// Keybinds

// you can change the keybinds by replacing the constant value with another key of your choice in the script
// for a list of key names, go to https://www.toptal.com/developers/keycode and copy the 'event.code' info!
// github repo: https://github.com/ducky4life/ns-detag

const restoregovkey = "KeyL"
const eyebeastkey = "KeyO"
const toggletemplatekey = "KeyK"
const togglefastkey = "KeyI"
const appointselfROkey = "KeyJ"
const puppetloginkey = "KeyY"



// Code

// some of the code here is modified from https://github.com/rootabeta/YAFFeather, thanks a lot!
// ignore my shit code

const regionlink = window.location.href
const reg = /(?<=.nationstates.net).*$/
const domain = regionlink.replace(reg, "")
const region = regionlink.replace(domain, "")
const regionname = region.replace("/", "")
const nationpage = regionname.replace("template-overall=none/", "")
const main = main_nation_name.replaceAll(" ", "_")
const useragent = "?script=ns_detag__v" + version + "__by_ducky__used_by_" + main + "&userclick=" + Date.now()


// code i guess
document.addEventListener("keyup", function (event) { // no spam
	if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") { // u can use modifiers
		return;
	} else {
		switch (event.code) { // actual code starts here



                // restores gov name to default for detags
                case restoregovkey:

                // first button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there
                // second one replaces current gov name with the default one and immediately renames it

				if (window.location.href.includes("office=governor")) { // rename
					document.getElementsByName("office_name")[0].value = "Governor";
					document.getElementsByName("editofficer")[0].click();
				}

				else { // go to gov page
					window.location.assign(domain + "/page=regional_officer/region/office=governor" + useragent);
				}
				break;



                // goes to the eyebeast page of current region page
                case eyebeastkey:
                window.location.assign("https://eyebeast.calref.ca/?" + regionname);
                break;



                // toggles template
                case toggletemplatekey:

                if (window.location.href.includes("template-overall=none")) { // on none
                window.location.href = document.URL.replace("template-overall=none/", "") + useragent;
                }

                else { // on normal
                window.location.href = `/template-overall=none${document.URL.replace(domain, "")}` + useragent;
                }
                break;



                // toggles fast.nationstates.net
                case togglefastkey:

                if (window.location.href.includes("fast.nationstates.net")) { // on fast
                window.location.href = document.URL.replace("fast.", "www.") + useragent;
                }

                else { // on normal
                window.location.href = document.URL.replace("www.", "fast.") + useragent;
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
					window.location.assign(domain + "/page=regional_officer/nation=" + document.getElementById("loggedin").getAttribute("data-nname") + useragent);
				}
                break;



		        // go to wa page of the current nation page after loggin in with provided password
                case puppetloginkey:

                window.location.assign(domain + "/page=un" + useragent + "&" + nationpage + "&password=" + password + "&logging_in=1");
                break;
		}
	}
});
