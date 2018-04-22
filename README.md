# BeeTime Activity Tracker for Chrome
Monitors websites visited and how much time is spent on each site.

## How to install?
+ Step 1: Clone this github repo or download the github project as a zip using the ``` clone or download ``` button.
![Clone or Download](https://github.com/nishkumar/browser-timetracker/tree/master/chrome-extension/images/clone-or-download.png)
+ Step 2: Type ``` chrome://extensions ``` in a chrome tab to bring up the extensions page.
![Clone or Download](https://github.com/nishkumar/browser-timetracker/tree/master/chrome-extension/images/chrome-extensions.png)
+ Step 3: Check ``` Developer mode ``` to enable loading unpacked extensions.
![Clone or Download](https://github.com/nishkumar/browser-timetracker/tree/master/chrome-extension/images/developer-mode.png)
+ Step 4: Finally, click ``` Load unpacked extension ``` or simply drag the Extension folder onto the page to load up the extension. You should immediately see the extension show up as a Browser Action with your icon in the toolbar window of the current tab.
![Clone or Download](https://github.com/nishkumar/browser-timetracker/tree/master/chrome-extension/images/load-unpacked.png)
+ Step 5: Verify that the extension has been installed as the extension details will appear as shown below. The extension logo will also appear on the right hand side of the address bar on the browser.
![Clone or Download](https://github.com/nishkumar/browser-timetracker/tree/master/chrome-extension/images/beetime.png)

## Getting started
What you need to know to get started.
+ manifest.json -  The Manifest file tells Chrome everything it needs to know to properly load up the extension in Chrome.
+ icon - Chrome needs a 19x19px PNG file to be used as the icon for the extension.
+ Browser Action HTML page - an HTML page to show when a user clicks our Browser Action.
+ javascript files - Due to security constraints, we can’t put inline JavaScript into our HTML files inside of our Chrome extensions, so we have to create a separate file to hold any JavaScript code.

The getting started tutorial can be found [here](https://www.sitepoint.com/create-chrome-extension-10-minutes-flat/).


## The manifest file
### Permissions
Many of the APIs Chrome exposes for you to use with your extensions require you to specify any permissions you require.
Permissions section of the manifest file specifies the permissions needed to access the activeTab. This is required in order to enable us to get the URL of the current tab to pass on to GTmetrix.


## Testing the extension
+ Step 1: Type ``` chrome://extensions ``` in a tab to bring up the extensions page.
+ Step 2: Check ``` Developer mode ``` to enable loading unpacked extensions.
+ Step 3: Finally, click ``` Load unpacked extension ``` or simply drag the Extension folder onto the page to load up the extension. You should immediately see the extension show up as a Browser Action with your icon in the toolbar window of the current tab.


## Software Package Distribution Options
An extension that's installed neither from the Chrome Web Store nor as an inline installation is known as an external extension. For developers who want to distribute an extension as part of the installation process for other software Google Chrome supports the following extension installation methods:
+ Using a preferences JSON file (for Mac OS X and Linux only)
+ Using the Windows registry (for Windows only)

###  External Extension Package Distribution
Windows and Mac installs must come from Chrome Web Store. As of Chrome 33, no external installs are allowed from a path to a local .crx on Windows. As of Chrome 44, no external installs are allowed from a path to a local .crx on Mac.
+ First, publish the extension in the Chrome Web Store, or package a .crx file and make sure that it installs successfully.


Details about various distribution options can be found [here](https://developer.chrome.com/apps/external_extensions)
