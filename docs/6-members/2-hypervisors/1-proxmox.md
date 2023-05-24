---
sidebar_position: 1
---

# Proxmox

Proxmox VE is a open-source server management platform for enterprise virtualization.

It integrates the KVM hypervisor and Linux Containers (LXC), software-defined storage and networking functionality, on a single platform.

With the integrated web-based user interface you can manage VMs and containers, high availability for clusters, or the integrated disaster recovery tools with relative ease.

## Proxmox Cluster

Download the ISO image of proxmox [here](https://www.proxmox.com/en/downloads/category/iso-images-pve)

In case you don’t have access to virtual media via IPMI, then the ISO image must be loaded into an USB drive with a tool like USBimager [here](https://gitlab.com/bztsrc/usbimager). 

Insert the USB, power on your rig and install Proxmox.

## First Virtual Machine (VM)

Unless you are using OpenStack, AWS, or similar services, then `cloud-init` may actually be slowing down the booting of your VM and eventually halt it from booting if it does not have a proper working IP.

This is how to disable cloud-init in Ubuntu (source [here](https://gist.github.com/zoilomora/f862f76335f5f53644a1b8e55fe98320))

```shell
# Create an empty file to prevent the service from starting
sudo touch /etc/cloud/cloud-init.disabled
# Disable all services (uncheck everything except "None"):
sudo dpkg-reconfigure cloud-init
# Uninstall the package and delete the folders
sudo apt purge cloud-init
sudo rm -rf /etc/cloud/ && sudo rm -rf /var/lib/cloud/
```

Check that Emulator Agent is installed by installing it and reboot the system:

```shell
sudo apt install qemu-guest-agent
sudo reboot
```

## Preconfigure VM

You may want to perform some minor configuration in your freshly deployed VM by following the instruction in this [section](/docs/6-members/4-machines/1-first-access.md).

Once you are happy with the basic accessibilty and security of the virtual machine, you can then proceed to convert it in a template for future and recursive use in deploying additional machines of the same basic characteristics.

:::warn
Converting a VM to Template in Proxmox is a one-way street, you will not be able to go back and make changes. The recommendation in this case is:
1- Make a copy (clone) of this VM,
2- Convert the clone to Template
3- Thus you can keep the original VM deactivated but available in case you want to update it, clone it and convert to a new template.
:::

## Convert VM to Template

Remove ssh keys

```shell
sudo rm /etc/ssh/ssh_host_*
```

Empty the machine id file:

```shell
sudo truncate -s 0 /etc/machine-id
cat /etc/machine-id
```

Check or create the symlink to the machine id file

```shell
sudo rm /var/lib/dbus/machine-id
sudo ln -s /etc/machine-id /var/lib/dbus/machine-id
ll /var/lib/dbus/machine-id
```

Delete the command history

```shell
sudo rm .bash_history
```

## Cloning from Template

After spawning, 

```shell
sudo nano /etc/hostname
sudo nano /etc/hosts
sudo dpkg-reconfigure openssh-server
sudo systemctl restart ssh
```

If increasing the disk size

```shell
sudo fdisk -l
sudo parted /dev/sda
(parted) print-> Fix
(parted) resizepart 2 100% -> Yes
(parted) quit
sudo resize2fs /dev/sda2
```