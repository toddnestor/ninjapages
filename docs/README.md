# NinjaPages

[NinjaPages live][ninjapages]

[ninjapages]: http://ninjapages.co
[github]: https://github.com/toddnestor/ninjapages
[hercdev]: http://hercdev.io

### Background

[NinjaPages][ninjapages] is a WYSIWYG web page builder created using Angular.js that utilizes the [Herc API][hercdev] (a former project of mine built using PHP and the Laravel framework) for authentication and data storage.

The Ninja Pages prototype project was built in March 2016 and will now be completed to MVP status.  Users sign up at the [Ninja Pages][ninjapages] home page and choose a subdomain where their web pages will be hosted.

Users can create an unlimited number of web pages.  When creating a web page the user chooses a template and then drags sections from the left sidebar into the web page creation section.  The user can edit any text, image, or colors on each section.

The user can choose a title and permalink for the web page and save it.  It will then be publicly viewable at their subdomain.ninjapages.co/chosen-permalink, for example: [http://demo.ninjapages.co/demo](http://demo.ninjapages.co/demo).

You can test the current functionality here: [http://demo.ninjapages.co/builder](http://demo.ninjapages.co/builder?access_token=848f45d91786aff360d20d34b13e726f1cedef84a017c75b1815f2a6968e2154)

Or for a brief demo video: [http://screencast.com/t/LkSC5OygYWYt](http://screencast.com/t/LkSC5OygYWYt)

### Functionality & MVP

Users will be able to:

- [ ] Sign up and choose a subdomain for their web pages to be hosted on
- [ ] Choose a template and drag sections to create a web page
- [ ] Edit the text, links, colors, and images on each section
- [ ] Choose a title and save each web page
- [ ] Edit/delete any of their created web pages

### Wireframes

This app will consist of a sign up page, dashboard with a list of created web pages, web page creation/editing page, and a public view for created web pages.

![sign up page](docs/images/sign-up.png)

![dashboard](docs/images/dashboard.png)

![web page builder](http://content.screencast.com/users/todd_nestor/folders/Jing/media/e2149e39-a90d-448e-b52d-6835c46e0bfb/2016-11-21_0321.png)

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

This project will utilize the [Herc API][hercdev] which was built using PHP and the Laravel framework.  This project may involve refactoring the Herc API some.  The Herc API is built using PHP and uses the following technologies:

* Laravel for the framework (routing, controllers, models)
* Sendgrid API for sending e-mails
* FB PHP SDK for oAuth using Facebook
* Dreamobjects Client for uploading media to the DreamObjects CDN

### Implementation timeline

**Day 1**: I originally built Ninja Pages in March 2016, so the basic functionality is in place.  The first day will be spent refactoring the existing code.

- Refactor `configSettings` directive.
- Modify Restful Herc to be a standalone module
- Refactor web page builder controller, particularly how the template sections are stored.

**Day 2**: Break remaining two templates into editable sections and implement template chooser.

- Create a template chooser on the builder page that swaps out the available sections based on what template is chosen.
- Break up two remaining templates into editable sections.

**Day 3**: Test each section from each template to ensure all parts are easily editable and fix any bugs.

- Test each section on each template.
- Note any bugs.
- Fix bugs found.

**Day 4**: Create a landing page and dashboard.  Create a landing page that itself is built using Ninja Pages where users can sign up.  Create a dashboard where users see all of their web pages they've created and can click to edit them.

- Create a section that allows script and form embeds so the sign up form can be placed inside of it.
- Create a page using Ninja Pages that explains what it is and has the sign up form.
- Ensure the Herc API sends a welcome e-mail when a user signs up.
- Build a dashboard that shows the users what pages they've created and allows them to choose one to edit or create a new one.
