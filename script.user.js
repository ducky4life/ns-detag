// ==UserScript==
// @name         Extra Detag Functionalities
// @namespace    https://ducky4life.github.io/tgw
// @version      2.0.0
// @description  meow
// @author       Ducky
// @match        *://*.nationstates.net/*
// @match        https://eyebeast.calref.ca/*
// @grant        none
// ==/UserScript==



// Configuration

const version = "2_0_0"
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
const detaginfokey = "Digit1"
const detagactionkey = "Digit2"
const flagkey = "Digit3"
const bannerkey = "Digit4"
const leftkey = "ArrowLeft"
const rightkey = "ArrowRight"



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
const identifier = "?script=ns_detag__v" + version + "__by_ducky__used_by_" + main + "&userclick="
const userclick = Date.now()
const useragent = identifier + userclick // .split(identifier)[0] to avoid useragent stacking

function capitalize_first_letter(val) {
    return String(val).charAt(0).toUpperCase() + String(val).slice(1);
}

function set_image(type) {
    const change_image = document.getElementById(`change${type}link`)
    const image_box = document.getElementsByClassName(`${type}sample ${type}sample-new`)[0];
    const upload_image = document.getElementsByName(`file_upload_r${type}`)[0];
    const save_button = document.getElementsByClassName("savebuttonready")[0];
    const image_field = document.getElementById(`Upload${capitalize_first_letter(type)}CustomBox`)

    // if havent set yet
    if (save_button.disabled == true) {

        // open the upload field
        if (image_field.style.getPropertyValue("display") != "block") {
            change_image.click();
            image_box.click();
            image_field.scrollIntoView({ behavior: "instant", block: "center" });
        }

        // click upload file button
        else {
            upload_image.click();
        }
    }

    // save
    else {
        save_button.click();
    }
}

// code i guess
document.addEventListener("keyup", function (event) { // no spam
	if (event.shiftKey || event.ctrlKey || event.altKey || document.activeElement.tagName == "INPUT" || document.activeElement.tagName == "TEXTAREA") { // u can use modifiers
		return;
	} else {
		switch (event.code) { // actual code starts here



                case detaginfokey:

                // go to eyebeast
                if (window.location.href.includes("page=display_region_rmb")) {
                    window.location.assign("https://eyebeast.calref.ca/?" + regionname.replace("page=display_region_rmb/", "").split(identifier)[0]);
                }

                // download flags, copy wfe
                else if (window.location.href.includes("eyebeast.calref.ca")) {
                    const flag = document.querySelector("pre:not(.inactive).data-display.flags");
                    const banner = document.querySelector("pre:not(.inactive).data-display.banners");
                    const wfe_copy = document.querySelector("#copy");

                    wfe_copy.click();
                    flag.getElementsByTagName("a")[0].click();
                    banner.getElementsByTagName("a")[0].click();
                }

                // go to rmb
                else if (window.location.href.includes("region=")){
                    window.location.assign(domain + "/page=display_region_rmb/" + regionname + useragent);
                }
                break;



                case detagactionkey:
                // detag stuff
                if (window.location.href.includes("page=region_control")) {
                    // can prob make it 1 button click if GM storage instead of clipboard
                    const wfe_box = document.getElementById("editor");
                    const notif = document.querySelector("p.info");

                    // wfe done
                    if (notif) {
                        if (notif.innerHTML == "World Factbook Entry updated!") {
                            set_image("flag");
                        }
                        
                        // flag done
                        else if (notif.innerHTML == "Regional banner/flag updated!") {
                            set_image("banner");
                        }
                    }
                    
                    // set wfe
                    else if (wfe_box.value === wfe_box.defaultValue) {
                        navigator.clipboard.readText().then((text) => {
                            wfe_box.value = text;
                        });
                    }

                    // save wfe
                    else {
                        document.getElementById("setwfebutton").click();
                    }
                }

                // go to region control page
                else if (window.location.href.includes("eyebeast.calref.ca")) {
                    const eyebeast_region = document.getElementsByClassName("gold")[1].getAttribute("href");
                    window.location.assign("https://www.nationstates.net/page=region_control/region=" + eyebeast_region.split("=")[1].split(identifier)[0] + useragent);
                }
                break;
                


                case flagkey:
                set_image("flag");
                break;


                case bannerkey:
                set_image("banner");
                break;



                case leftkey:
                document.getElementById("forward").click();
                break;


                case rightkey:
                document.getElementById("backward").click();
                break;



                // restores gov name to default for detags
                case restoregovkey:

                // first button press takes you to https://www.nationstates.net/page=regional_officer/region/office=governor/ if you are not there
                // second one replaces current gov name with the default one and immediately renames it

				if (window.location.href.includes("office=governor")) { // rename
					document.getElementsByName("office_name")[0].value = "Governor";
					document.getElementsByName("editofficer")[0].click();
				}

				else { // go to gov page
                    window.location.assign(domain + "/page=regional_officer/region/office=governor".split(identifier)[0] + useragent);
				}
				break;



                // goes to the eyebeast page of current region page
                case eyebeastkey:
                window.open("https://eyebeast.calref.ca/?" + regionname);
                break;



                // toggles template
                case toggletemplatekey:

                if (window.location.href.includes("template-overall=none")) { // on none
                window.location.href = document.URL.replace("template-overall=none/", "").split(identifier)[0] + useragent;
                }

                else { // on normal
                window.location.href = `/template-overall=none${document.URL.replace(domain, "")}`.split(identifier)[0] + useragent;
                }
                break;



                // toggles fast.nationstates.net
                case togglefastkey:

                if (window.location.href.includes("fast.nationstates.net")) { // on fast
                window.location.href = document.URL.replace("fast.", "www.").split(identifier)[0] + useragent;
                }

                else { // on normal
                window.location.href = document.URL.replace("www.", "fast.").split(identifier)[0] + useragent;
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
					window.location.assign(domain + "/page=regional_officer/nation=" + document.getElementById("loggedin").getAttribute("data-nname").split(identifier)[0] + useragent);
				}
                break;



		        // go to wa page of the current nation page after loggin in with provided password
                case puppetloginkey:

                window.location.assign(domain + "/page=un" + useragent + "&" + nationpage + "&password=" + password + "&logging_in=1");
                break;
		}
	}
});
