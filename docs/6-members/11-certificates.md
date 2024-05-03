# Certificates for SSL termination

## Overview
This documentation covers the SSL certificate management for `*.ibp.network` 
and `*.dotters.network`, using automated processes to ensure certificates are 
consistently up-to-date and securely deployed. The certificates are stored in 
designated Git repositories, enabling version control and traceability.

### Repository Details

#### 1. IBP Network SSL Certificates

- **Repository URL:** `git@github.com:GATOTECH-LTD/ibp-ssl.git`
- **Managed by:** GATOTECH LTD

#### 2. Dotters Network SSL Certificates

- **Repository URL:** `git@github.com:senseless/dotters-ssl.git`
- **Managed by:** senseless

## Directory Structure and File Description

### IBP SSL (GATOTECH-LTD)

```
ibp-ssl/
├── cert
│   ├── cert.pem              # RSA Public key
│   ├── chain.pem             # Certificate Authorities (chain)
│   ├── fullchain.pem         # Combined cert + chain
│   ├── ibp.network.pem       # Combined key + cert + chain
│   └── privkey.pem           # RSA Private Key
└── README.md
```

### Dotters SSL (senseless)

```
dotters-ssl/
├── cert
│   ├── cert.pem              # RSA Public key
│   ├── chain.pem             # Certificate Authorities (chain)
│   ├── dotters.network.pem   # Combined key + cert + chain
│   ├── fullchain.pem         # Combined cert + chain
│   └── privkey.pem           # RSA Private Key
├── paras
│   ├── cert.pem              # RSA Public key
│   ├── chain.pem             # Certificate Authorities (chain)
│   ├── fullchain.pem         # Combined cert + chain
│   ├── paras.dotters.network.pem # Combined key + cert + chain
│   └── privkey.pem           # RSA Private Key
└── README.md
```

## Certificate Update Procedures

Certificates are updated automatically through scheduled cron jobs that fetch
the latest changes from the respective Git repositories and update the
certificates used by HAProxy. Recommended to be set on redundant servers where
your SSL termination is being handled.

### Cron Jobs Configuration

```bash
# IBP Network SSL certificates update
0 0 1,15 * * ssh-agent bash -c 'ssh-add /root/.ssh/ibp_key; \
  git -C /opt/github/ibp-ssl reset --hard HEAD && \
  git -C /opt/github/ibp-ssl clean -fd && \
  git -C /opt/github/ibp-ssl pull --rebase && \
  cp /opt/github/ibp-ssl/cert/ibp.network.pem /etc/pki/certs/ && \
  systemctl reload haproxy'

# Dotters Network SSL certificates update
0 0 1,15 * * ssh-agent bash -c 'ssh-add /root/.ssh/dotters_key; \
  git -C /opt/github/dotters-ssl reset --hard HEAD && \
  git -C /opt/github/dotters-ssl clean -fd && \
  git -C /opt/github/dotters-ssl pull --rebase && \
  cp /opt/github/dotters-ssl/cert/dotters.network.pem /etc/pki/certs/ && \
  systemctl reload haproxy'
```

## Security and Access

Access to these repositories is secured with SSH keys, and only authorized
personnel have access to perform operations. Ensure keys are stored securely
and permissions are appropriately set:

```bash
chmod 600 /root/.ssh/{ibp_key,dotters_key}
```
