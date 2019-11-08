# Craft 3 Starter Kit

# Setup notes
- Copy `.env.example` to `.env`
- Configure `MIX_PROXY_URL` to your development url
- Clone repository and run `./craft setup`. If you ge error run `chmod +x ./craft`
- When setup has completed, log in, go to setting -> plugins and install the Mix plugin. Go to Mix settings and change the public path setting to `public`. 

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

# Tailwind.config.js
Your tailwind config file should be `in addition to` and not `replicating` tailwind's defaults. Your goal should be for any developer entering your project to be able to rely on tailwind's official doc, utilize any of the default classes, and know what additional classes are available by skimming your config file. 
