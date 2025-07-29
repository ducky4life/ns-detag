// ==UserScript==
// @name         Extra Detag Functionalities
// @namespace    https://ducky4life.github.io/tgw
// @version      2.1.0
// @description  hopefully makes detags easier
// @author       Ducky
// @match        *://*.nationstates.net/*
// @match        https://eyebeast.calref.ca/*
// @grant        GM_setValue
// @grant        GM_getValue
// ==/UserScript==



// Configuration

const version = "2_1_0"
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
const setembassykey = "Digit3"
const settagskey = "Digit4"
const flagkey = "Digit5"
const bannerkey = "Digit6"
const leftkey = "ArrowLeft"
const rightkey = "ArrowRight"



// Code

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

function set_tags(tags_list) {
    const add_tags_box = document.getElementsByName("add_tag")[0];
    const notif = document.querySelector("p.info");
    const save_tags_button = document.getElementsByName("updatetagsbutton")[0];

    // i have no idea what im doing
    try {
        add_tags_box.value = tags_list.at(-1);

        console.log(tags_list)
        console.log(tags_list.at(-1))

        // if its a tag you cant add and tags arent done yet, remove the unaddable tag and try again
        if (add_tags_box.options[add_tags_box.selectedIndex] === undefined && GM_getValue("tags").length != 0)  {
            tags_list.pop();
            GM_setValue("tags", tags_list);
            set_tags(tags_list) // recursion scary
        }

        // if you are on your last tag, save that and remove the last one
        else if (GM_getValue("tags").length == 1) {
            tags_list.pop();
            GM_setValue("tags", tags_list);
            console.log("saved last")
            save_tags_button.click();
        }

        // if there are no tags left, notify the user
        else if (GM_getValue("tags").length == 0) {
            notif.innerHTML = "from ns-detag: all tags are done"
        }

        // if the tag can be added, add it
        else {
            if (GM_getValue("tags").length > 1) {
                tags_list.pop();
                GM_setValue("tags", tags_list);
            }
            console.log("saved")
            save_tags_button.click();
        }
    }
    catch (error) {
        console.log(error)
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
                    const wfe = document.querySelector("pre:not(.inactive).data-display.wfes").textContent;
                    const tags = document.querySelector("pre:not(.inactive).data-display.tags").textContent.split("\n");

                    tags_list = tags.map(element => {
                        const output = element.toLowerCase().replaceAll(' ', '-');
                        return output;
                    });

                    GM_setValue("wfe", wfe);
                    GM_setValue("tags", tags_list);
                    GM_setValue("done_removing_tags", "false");
                    console.log(GM_getValue("tags"));
                    flag.getElementsByTagName("a")[0].click();
                    banner.getElementsByTagName("a")[0].click();
                }

                // go to rmb
                else if (window.location.href.includes("region=")){
                    window.location.assign(domain + "/page=display_region_rmb/" + regionname + useragent);
                }
                break;



                case detagactionkey:

                // reset wfe/flag/banner
                if (window.location.href.includes("page=region_control")) {

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
                        //navigator.clipboard.readText().then((text) => {
                        //    wfe_box.value = text;
                        //});
                        wfe_box.value = GM_getValue("wfe", "error");
                        document.getElementById("setwfebutton").click();
                    }
                }

                // go to region control page
                else if (window.location.href.includes("eyebeast.calref.ca")) {
                    const eyebeast_region = document.getElementsByClassName("gold")[1].getAttribute("href");
                    window.location.assign("https://www.nationstates.net/page=region_control/region=" + eyebeast_region.split("=")[1].split(identifier)[0] + useragent);
                }
                break;
                

                // reset embassies
                case setembassykey:
                
                embassies = [];
                embassies_all = document.getElementsByClassName("shiny wide embassies mcollapse")[0].querySelectorAll("button.button.primary.icon.remove.danger");

                // make a list of abort/withdraw embassies buttons
                for (let j = 0; j < embassies_all.length; j++) {
                    if (embassies_all[j].name === "cancelembassyregion" || embassies_all[j].name === "abortembassyregion") {
                        embassies.push(embassies_all[j]);
                    }
                }
                embassy_number = embassies.length;

                // initial focus, if not already focused on embassy button, set focus to first button
                if (document.activeElement.name != "cancelembassyregion" && document.activeElement.name != "abortembassyregion") {
                    focused_index = 0;
                    embassies[focused_index].focus();
                }

                // if focused on a button, click it
                else {
                    document.activeElement.click();
                }
                break;


                // remove all tags, then add stored tags from eyebeast snapshot
                case settagskey:

                add_tags_box = document.getElementsByName("add_tag")[0];
                remove_tags_box = document.getElementsByName("remove_tag")[0];
                save_tags_button = document.getElementsByName("updatetagsbutton")[0];

                // if all tags are removed, add back saved tags
                if (GM_getValue("done_removing_tags") == "true") {
                    set_tags(GM_getValue("tags"));
                }

                // if just finished removing tags, remember that
                else if (remove_tags_box.options[2] === undefined) {
                    GM_setValue("done_removing_tags", "true");
                    save_tags_button.click();
                }

                // if there are still tags left, remove them
                else {
                    remove_tags_box.selectedIndex = 2; // the first tag is at index 2
                    save_tags_button.click();
                    console.log("removed");
                }

                break;


                case flagkey:
                set_image("flag");
                break;


                case bannerkey:
                set_image("banner");
                break;



                case leftkey:

                // if on eyebeast, change snapshot
                if (window.location.href.includes("eyebeast.calref.ca")) {
                    document.getElementById("forward").click();
                }

                // if on region control, cycle through embassy buttons
                else {
                    if (focused_index > 0) {
                        focused_index = focused_index - 1;
                        embassies[focused_index].focus();
                    }
                }
                break;


                case rightkey:

                // if on eyebeast, change snapshot
                if (window.location.href.includes("eyebeast.calref.ca")) {
                document.getElementById("backward").click();
                }

                // if on region control, cycle through embassy buttons
                else {
                    if (focused_index < embassy_number - 1) {
                        focused_index = focused_index + 1;
                        embassies[focused_index].focus();
                    }
                }
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