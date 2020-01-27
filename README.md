# Craft 3 Starter Kit
Getting started with a fresh new project.

- Clone repo `git clone https://github.com/crash31/craft3-starter project-name`
- Go into the new project folder and remove old git info `cd project-name && rm -rf .git`
- Initialize a fresh git repo on project `git init`
- Install backend dependencies `composer install`
- Install frontend dependencies `npm install` or `yarn install`

# Setup notes
- Copy `.env.example` to `.env`
- Configure `MIX_PROXY_URL` to your development url
- Clone repository and run `./craft setup`. If you ge error run `chmod +x ./craft`
- When setup has completed, log in, go to setting -> plugins and install the Mix plugin. Go to Mix settings and change the public path setting to `public`. 
- Everything in the root of the `templates` folder should start with an underscore, including folders. This prevents craft rendering files if a url matches the filename. 

# External Services
Before starting the project it is good to find out if we are hosting the website or not, this has impact on if we configure the following services. 
- SMTP email sending through Mandrill
- Asset storage on DigitalOcean spaces/cdn. 

If we are not hosting, do not configure either of the above services.

# General Best Practices
- If using external fonts, try to import only the fonts and weights you need. 
- If you feel like using font awesome, don't. It is heavy! Consider just extracting the icons you need or using something like [Fontello](https://github.com/fontello/fontello).

# .env file
Everything from machine specific configurations to sensitive details should live in the config file, including:
- SMTP Information
- Mix Proxy URL
- etc.

In a project repository, if you add to the config file, be sure to update the .env.example file as well. 

# Standard Plugins
These are the Craft CMS Plugins that we use on every project:

*Free:*
- [Redactor](https://imperavi.com/redactor/)
- [Mix](https://github.com/mister-bk/craft-plugin-mix/blob/master/README.md)
- [Typed Link Field](https://plugins.craftcms.com/typedlinkfield)

# Tailwind.config.js
Your tailwind config file should be `in addition to` and not `replicating` tailwind's defaults. Your goal should be for any developer entering your project to be able to rely on tailwind's official doc, utilize any of the default classes, and know what additional classes are available by skimming your config file. 

[TailwindCss Docs](https://tailwindcss.com/docs/installation/)

## Tools for an optimal frontend

[Type-Scale](https://type-scale.com/) is a great tool for laying out the scale of your typography.

[Color Shades Generator](https://javisperez.github.io/tailwindcolorshades/#/) will layout a gradient of colors legible for Tailwind's config file.

# Alpine.js
[Documentation](https://github.com/alpinejs/alpine)

Alpine.js offers you the reactive and declarative nature of big frameworks like Vue or React at a much lower cost.

You get to keep your DOM, and sprinkle in behavior as you see fit.

Think of it like Tailwind for JavaScript.

# Buddy config (buddy.crash31.com)
**Sync Files Action**

Set ignore paths based on project requirements. A good default:
```
/.git/
.env
/vendor/
/public/.htaccess
/public/imager/
/public/content/
/storage/
/node_modules/
```
**SSH Commands**
```
composer7.3-sp install
./craft project-config/sync
yarn install
yarn run prod
```
