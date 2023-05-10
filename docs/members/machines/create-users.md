---
sidebar_position: 2
---

# Create Users

> Once you are logged in the remote server

## Secure the `root` or default user

Whether you were given a root or a default sudo user credentials, the most important task to complete as soon as you have access to your remote machine is to change all the passwords of these users, especially for the root user, with very secure and private ones.

Change first the password of the user that you are using to connect to the server (either root or a default one given to you by the hosting provider):

```shell
passwd
```

In case you were using a default user, please remember to switch users to the root one, change its password and return to the default user with the below commands:

```shell
sudo su -
passwd
logout
```

## Create your custom user(s)

Using a root user directly is not recommended in most cases, particularly for systems which will be accessed by several users, or when the applications are compartmentalised to use several application-level users. 

Create a customised user (to replace the default credentials by VPS provider): 

```shell
sudo adduser yourusername
```

You can check that the user was created by inspecting the relevant file: 

```shell
tail /etc/passwd
```

the output should look similar to:

```
landscape:x:111:116::/var/lib/landscape:/usr/sbin/nologin
ubuntu:x:1000:1000:Ubuntu:/home/ubuntu:/bin/bash
lxd:x:999:100::/var/snap/lxd/common/lxd:/bin/false
usbmux:x:112:46:usbmux daemon,,,:/var/lib/usbmux:/usr/sbin/nologin
yourusername:x:1001:1001:,,,:/home/yourusername:/bin/bash
```

Add the new user to the sudo group, this way this user will be able to execute command that otherwise would be reserved for the root user only.

```shell
sudo usermod -aG sudo yourusername
```

You can check the updated associations to the relevant groups, including sudo, with:

```shell
groups yourusername
```

The output should be similar to:

```
yourusername: yourusername sudo
```

Now you can create the rest of your custom users, or terminate your session with the default credentials:

```shell
exit
```

and login with any of the new ones:

```shell
ssh yourusername@ipaddress
```