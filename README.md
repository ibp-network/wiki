# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Install Software

``` shell
curl -fsSL https://deb.nodesource.com/setup_current.x | sudo -E bash
apt update && apt full-upgrade
apt install nodejs
apt install build-essential
apt install apache2
apt install npm
```

### Clone Repository

It is recommended that you clone this repository in your `/var/www` directory

``` shell
cd /var/www
git clone https://github.com/ibp-network/wiki.git
cd wiki
```

### Build Package

You need to generate the static pages from the source code, using `npm`:

``` shell
npm install
npm run build
```

### Publish Site

Finally, you only need to point your web server software (e.g. Apache) to server the site stored at `/var/www/wiki/build`