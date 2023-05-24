---
sidebar_position: 3
---

# Harden Security

> Finally, the machine will appreciate some protections against security risks and external threats.

Most of the security recommendations of this chapter have been compiled from sources pertaining to the cryptographic security fields, like these ones:

1. https://stribika.github.io/2015/01/04/secure-secure-shell.html
2. https://wiki.polkadot.network/docs/maintain-guides-secure-validator
3. https://password.jcu.edu/public/passphrase.php
4. https://www.fbi.gov/contact-us/field-offices/phoenix/news/press-releases/fbi-tech-tuesday-strong-passphrases-and-account-protection
5. https://www.ssh.com/academy/ssh/public-key-authentication

## Secure SSH connection

### Passwords, Passphrases and Keypairs

You are surely familiar with the concept of **passwords**, which are a combination of special characters, letters, and numbers with variable lengths. Most are around 10 characters, like, for example: "Passw0rd1!"

A **passphrase** is basically a longer password, usually at least 14 characters in length, or a combination of several words with spaces between them, better if the words are completely random and make no sense as a phrase. A passphrase can also contain symbols, and it does not need to be grammatically correct. The passphrase meaning should not be easy to guess or be a typical or common phrase, like a saying or song's lyrics. using a random phrase makes a passphrase stronger. An example of a passphrase can be “Daughter seeking pine4ppl3! bookstore philanthropy” A passphrase should be easy to remember but hard for hackers to crack and guess.

A **keypair**, on the other hand is a set of two related keys used in asymmetrical cryptography to share messages between peers using their destination **public** keys and deciphering at destination using the relevant **private** key. The public key is usually shorter than the private key, and there is an ongoing analogy comparing the public key with "addresses" or "usernames" and private keys to "passwords". Finally, public keys can be obtained from the private key, but the opposite is not possible.

## Deploy SSH keypair

To best protect the way you establish SSH connections to your remote server, let's create a SSH key pair directly in your local terminal (for this, please have prepared a good passphrase with at least 128 bits of entropy, and store it securely, preferably in a offline medium). Note: you may prefer creating ed25519 keys instead of default RSA ones, like that: 

```shell
ssh-keygen -t ed25519
```

After providing a passphrase, two files will be created in a hidden folder of your home directory:

- /home/username/.ssh/id_ed25519 <- Caution!, this is your **Private Key**!!
- /home/username/.ssh/id_ed25519.pub <- this is the **Public Key** (you can share this file)

The next step is to copy the public key to the correct directory of remote server, and that is done by means of the following command (this action will prompt for the current password of the user in the remote server):

```shell
ssh-copy-id -i /home/username/.ssh/id_ed25519.pub username@yourhost.yourdomain.tld
```

From now on, every time to start a SSH connection to your server, the authentication mechanism will determine the existence of a keypair and you will be now asked for the passphrase to decode the keys (and not the user password) for establishing this connection.

## Configure Remote SSH Daemon

In this step, you will edit the `sshd_config` file to 1) disable the transmission of passwords, 2) specify the cryptographic algorithms to use 3) limit the incoming logins, 4) limit the time needed to login and 5) show a warning message (optional):

```shell
sudo cp /etc/ssh/sshd_config /etc/ssh/sshd_config.bak
sudo nano /etc/ssh/sshd_config
```

Go through the file and enable and update the following lines according to your requirements:

```conf
(...)
Port yourcustomport
(...)
KexAlgorithms curve25519-sha256
Protocol 2
(...)
HostKey /etc/ssh/ssh_host_ed25519_key
(...)
Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr
MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-512,hmac-sha2-256,umac-128@openssh.com
(...)
LoginGraceTime 30
PermitRootLogin no
AllowUsers yourusername
DenyUsers defaultusername
StrictModes yes
(...)
PubkeyAuthentication yes
(...)
PasswordAuthentication no
PermitEmptyPasswords no
(...)
ChallengeResponseAuthentication no
(...)
UsePAM yes
(...)
X11Forwarding no
MaxStartups 2:30:5
Banner /etc/issue.net
```

:::note
As you are using Pluggable Authentication Modules (PAM), you may want to study this particular service and make additional security checks to the default behaviour, a good starting point may be this one:
- [The Linux Documentation Project: Securing User Authentication](https://tldp.org/HOWTO/User-Authentication-HOWTO/x263.html)
:::

Now you can edit the default banner that is presented when the server requires the password/passphrases:

```shell
sudo nano /etc/issue.net
```

A message like the following one will not deter any convinced attacker, but it will let them know that you may be watching! 

```
***************************************************************************
                            NOTICE TO USERS

This computer system is the private property of its owner, whether
individual, corporate or government.  It is for authorized use only.
Users (authorized or unauthorized) have no explicit or implicit
expectation of privacy.

Any or all uses of this system and all files on this system may be
intercepted, monitored, recorded, copied, audited, inspected, and
disclosed to your employer, to authorized site, government, and law
enforcement personnel, as well as authorized officials of government
agencies, both domestic and foreign.

By using this system, the user consents to such interception, monitoring,
recording, copying, auditing, inspection, and disclosure at the
discretion of such personnel or officials.  Unauthorized or improper use
of this system may result in civil and criminal penalties and
administrative or disciplinary action, as appropriate. By continuing to
use this system you indicate your awareness of and consent to these terms
and conditions of use. LOG OFF IMMEDIATELY if you do not agree to the
conditions stated in this warning.

****************************************************************************
```

You may also want to customise the Message-of-the-Day (MOTD) to greet users after authenticating correctly in your server:

```shell
sudo nano /etc/motd
```

and insert your custom message here

```
 █████╗  ██████╗███╗   ███╗███████╗    ██╗███╗   ██╗ ██████╗   
██╔══██╗██╔════╝████╗ ████║██╔════╝    ██║████╗  ██║██╔════╝   
███████║██║     ██╔████╔██║█████╗      ██║██╔██╗ ██║██║        
██╔══██║██║     ██║╚██╔╝██║██╔══╝      ██║██║╚██╗██║██║        
██║  ██║╚██████╗██║ ╚═╝ ██║███████╗    ██║██║ ╚████║╚██████╗██╗
╚═╝  ╚═╝ ╚═════╝╚═╝     ╚═╝╚══════╝    ╚═╝╚═╝  ╚═══╝ ╚═════╝╚═╝
Welcome to Acme Incorporated, beep beep!                    
```

finally, if you want that the MOTD includes information about the hardware, check that you have installed the following package:

```shell
sudo apt install landscape-common
```

now you must restart the SSH service:

```shell
sudo systemctl restart ssh
```

:::note
As you changed critical settings for the SSH daemon, it is strongly advisable that, after restarting the service, you open a second terminal and try to connect to your server using the new configuration (pay special attention to new ports and allowed usernames, etc.) only when you have succeeded establishing connection in this second terminal, you can proceed with the following commands.
:::

```shell
sudo reboot
```

Now remember to use the following command structure to connect to your server with this customised SSH daemon configuration:

```shell
ssh -p yourcustomport yourusername@yourhost.yourdomain.tld
```

## Using SSH Agent 

Another alternative to providing the passphrase on every connection start is to use “agents” to facilitate the exchange of keys via SSH for authentication, this is specially useful when logging in and out frequently, or when maintaining a considerable number of deferent servers. To start an agent instance, you use the command:

```shell
eval $(ssh-agent -s)
```

You can always check the newly created instance with:

```shell
ps axo pid,comm
```

which returns a list like this one:

```
  PID COMMAND
    1 init
    9 init
   10 init
   11 bash
   63 ssh-agent
   65 ps
```

Now you attach you key to the agent with (it will request your keys' passphrase):

```shell
ssh-add
```

now, go ahead and test connecting to your server, if everything is OK, it will establish the connection without asking for any passphrase of password from you.

```shell
ssh -p yourcustomport username@yourhost.yourdomain.tld
```

## Configure local SSH settings

In order to match the remote SSH daemon configuration with your local machine, you can set up the following entries: 

```shell
sudo nano /etc/ssh/ssh_config
```

You should add the following block under `Host yourserver`, before the block titled `Host *`, that acts like a placeholder for the rest of the default settings. 

```conf
Host yourserver
    HostName yourhost.yourdomain.tld
    Port mycustomport
    User yourusername

    ForwardAgent no
    PasswordAuthentication no
    KexAlgorithms curve25519-sha256
    HostKeyAlgorithms ssh-ed25519-cert-v01@openssh.com,ssh-ed25519
    Ciphers chacha20-poly1305@openssh.com,aes256-gcm@openssh.com,aes128-gcm@openssh.com,aes256-ctr,aes192-ctr,aes128-ctr
    MACs hmac-sha2-512-etm@openssh.com,hmac-sha2-256-etm@openssh.com,umac-128-etm@openssh.com,hmac-sha2-512,hmac-sha2-256,umac-128@openssh.com
    ChallengeResponseAuthentication no
    PubkeyAuthentication yes
    UseRoaming no

(...)

Host *
(...)
```

Once you save and exit this file, you will enjoy securely connecting to your remote servers using this shorter command:

```shell
ssh yourserver
```

enjoy! :smiley:

## Configure Two Factor Authentication (2FA)

A second layer of security can be added to Ubuntu Linux systems by adding Two Factor Authentication to the already hardened SSH connections achieved above.

:::note
More information here:
https://ubuntu.com/tutorials/configure-ssh-2fa
:::

However, this manual will not cover these aspects for the moment.

## Configure Firewall

The original Linux solution, **iptables** is an set of IP packet filter rules of the Linux kernel firewall, implemented as different Netfilter modules, however, its utilisation is complex and the learning curve is steep, that is why you better go with the alternative: **UFW**, which was developed to ease iptables firewall configuration.

UFW should come preinstalled in your system, so the next steps are just configuring and activating it, for that purpose, you must decide which services must become available to the Internet. For the sake of this basic manual, the only service is actually SSH (in this manual we will use a custom SSH port on 2222 and we recommend restricting the origin to **yourIP**:

```shell
sudo ufw default allow outgoing
sudo ufw default deny incoming
sudo ufw allow proto tcp from **yourIP** to any port 2222 comment 'SSH Port'
# (allow all other ports as needed)
sudo ufw enable
```

You can check the status of the firewall with the command:

```shell
sudo ufw status verbose
```

and will show the following result for a SSH service in the customised port #2222:

```
Status: active
Logging: on (low)
Default: deny (incoming), allow (outgoing), disabled (routed)
New profiles: skip

To                         Action      From
--                         ------      ----
3232/tcp                   ALLOW IN    Anywhere                   # SSH Port
3232/tcp (v6)              ALLOW IN    Anywhere (v6)              # SSH Port
```

## Configure Intrusion Prevention

Install Fail2ban, this is an intrusion prevention software framework designed to block unknown IP addresses that are trying to penetrate your system. 

```shell
sudo apt update
sudo apt full-upgrade
sudo apt install fail2ban
```

Go to Fail2ban directory and make a local copy of the configuration file

```shell
sudo cp /etc/fail2ban/jail.conf /etc/fail2ban/jail.local
```

Then open and edit the file:

```shell
sudo nano /etc/fail2ban/jail.local
```

Find the relevant lines and enter the relevant information:

```conf
(...)
ignoreip 127.0.0.1/8 ::1 youripaddress/32
bantime 10m
findtime 10m
maxretry 5
(...)
[sshd]
enabled = true
mode = aggressive
port = ssh
(...)
```

Then make sure to activate the service and check its status:

```shell
sudo systemctl restart fail2ban
sudo systemctl enable fail2ban
sudo fail2ban-client status
```

If everything is OK, the standard installation should protect SSH by default:
```
Status
|- Number of jail:      1
`- Jail list:   sshd
```
