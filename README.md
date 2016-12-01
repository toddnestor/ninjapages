# NinjaPages

[NinjaPages live][ninjapages]

[ninjapages]: http://ninjapages.co
[github]: https://github.com/toddnestor/ninjapages
[hercdev]: http://hercdev.io

### Background

[NinjaPages][ninjapages] is a WYSIWYG web page builder created using Angular.js that utilizes the [Herc API][hercdev] (a former project of mine built using PHP and the Laravel framework) for authentication and data storage.

Users sign up and create a site at the same time. They are given a subdomain on ninjapages.co.  Users can create an unlimited number of web pages.  When creating a web page the user chooses a template and then drags sections from the left sidebar into the web page creation section.  The user can edit any text, image, or colors on each section.

The user can choose a title and permalink for the web page and save it.  It will then be publicly viewable at their subdomain.ninjapages.co/chosen-permalink, for example: [http://demo.ninjapages.co/demo](http://demo.ninjapages.co/demo).

Here is a brief demo video: [http://screencast.com/t/LkSC5OygYWYt](http://screencast.com/t/LkSC5OygYWYt)

![web page builder](http://content.screencast.com/users/todd_nestor/folders/Jing/media/e2149e39-a90d-448e-b52d-6835c46e0bfb/2016-11-21_0321.png)

### Features

Users Can:

- [ ] Sign up and choose a subdomain for their web pages to be hosted on
- [ ] Choose a template and drag sections to create a web page
- [ ] Edit the text, links, colors, and images on each section
- [ ] Choose a title and save each web page
- [ ] Edit/delete any of their created web pages
- [ ] Embed scripts that run on the page
- [ ] Build forms and add a script that runs when the submit button is pressed

### Architecture and Technologies

This project uses the following frontend technologies:

* Gulp for to bundle and process js files
* Angular.js for the front end framework (DOM binding, event handling, views, Ajax calls, etc.)
* Bootstrap for the CSS framework
* Angular DragDrop for the drag and drop web page creation UI
* Angular SweetAlert for well-styled alert and confirmation popups
* Angular Notify for notifications
* Restful Herc for Angular for interfacing with the Herc API
* Lodash for array and object manipulation
* Moment.js for time and date operations and formatting
* Font Awesome for the icon library
* Angular UI Router for routing
* Angular Xeditable for inline text editing
* jQuery for DOM manipulation (utilized in Angular directives)
* ngStorage for working with the local storage
* Clipboard.js for clicking to copy text
* Angular Animate for animations
* Angular Spectrum Colorpicker for the color picking UI
* NG File Upload for file uploading UI

This project utilizes the [Herc API][hercdev] which was built using PHP and the Laravel framework.  The Herc API is built using PHP and uses the following technologies:

* Laravel for the framework (routing, controllers, models)
* Sendgrid API for sending e-mails
* FB PHP SDK for oAuth using Facebook
* Dreamobjects Client for uploading media to the DreamObjects CDN
