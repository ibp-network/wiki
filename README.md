# Website

This website is built using [Docusaurus 2](https://docusaurus.io/), a modern static website generator.

### Clone Repository

It is recommended that you clone this repository in your `/var/www` directory

``` shell
cd /var/www
git clone https://github.com/ibp-network/wiki.git
```

### Build Package

You need to generate the static pages from the source code, using `npm`:

``` shell
cd wiki
apt install npm
npm run build
```

### Publish Site

Finally, you only need to point your web server software (e.g. Apache) to server the site stored at `/var/www/wiki/build`