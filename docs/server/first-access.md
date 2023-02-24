---
sidebar_position: 1
---

# First Access

>Just after you spin a fresh virtual machine (VM).

By now you should have selected your own access credentials, either in the form of a plain `root` user, or an user with extra permissions (`sudo` user), etc. in any cases, let's use the ***username*** convention.

Additionally, you should already know the IP address(es) assigned to your VM, these could be in the form of an IPv4 address (e.g. 123.16.1.1) and/or the newer IPv6 (e.g. 2001:db8::8a2e:37:334), in any case, let's use the ***ipaddress*** convention.

Disregarding where in the world is your VM, we will refer to it as a "Remote Server" just to differentiate it from your local management machine (e.g. your laptop), you see, the big difference will be that your local machine has a keyboard and a screen attached to it, while the remote server, well, doesn't.

From any terminal in your local machine (e.g. DOS, PowerShell, etc.) access your server with the following command (be prepared to enter the password corresponding to the relevant user):

``` bash
ssh username@ipaddress
```

and you should get a response of the terminal similar to 

```
Ubuntu 22.04.1 LTS ipaddress tty1

ipaddress login:
```

Once you enter your ***username*** and ***password***, you will be executing shell commands as if you actually were in the Remote Server.

Now it is highly recommendable to update all the software packages which were provisioned by the hosting, these could be now obsolete and/or carry additional security risks, then reboot the machine to ensure the changes are enacted:

``` bash
sudo apt update
sudo apt full-upgrade
sudo reboot
```

:::note

you may find that entering separately the commands above (one line at a time) is easier to understand than to concatenate all of them with the `&&` operator.

:::

:::note

In the commands above, the `sudo` part is not needed if you are using the `root` user.

:::

You will be disconnected from the remoser server and may need to wait for a short moment while it reboots, if you try to connect too soon you will have either no response or an error returned from the below command:

``` bash
ssh username@ipaddress
```