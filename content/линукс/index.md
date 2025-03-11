---
title: Linux
subtitle: Установка, настройка и использование
author: Andreway
author_avatar: /images/authors/andreway_classic.png
date: 2025-02-06T08:42:11+03:00
draft: false
no_footer: true
no_author: true
---

В данном руководстве по установке и настройке операционной системы Linux мы рассмотрим

- Установка Debian
- Настройка системы
- Установка программ

# Установка Debian

## Balena Etcher

Скачайте [Balena Etcher](https://etcher.balena.io) 

![Pasted image](../linux/20250126112126.png)

Запустите установщик

Скачайте образ [Debian](https://www.debian.org) 

![Pasted image](../linux/20250126112229.png)

Загрузите на флешку через Balena Etcher

1. Выберите опцию `Flash from file`
2. Выберите образ Debian
3. Нажмите `Select target`
4. Выберите флешку
5. Нажмите `Flash!`

После окончания загрузки образа на флешку - выключите свой компьютер. Запустите установочную флешку через компьютер через BIOS. Способ выхода в BIOS отличается для каждого компьютера, в зависимости от материнской платы

## Графическая установка Debian

![Pasted image](../linux/20250126114321.png)

Выберите язык и следуйте инструкциям из установщика

![](../linux/localechooser_languagelist_0.png)

![](../linux/clock-setup_utc_0.png)

![](../linux/finish-install_reboot_in_progress_0.png)

![](../linux/grub-installer_bootdev_0.png)

![](../linux/grub-installer_choose_bootdev_0.png)

![](../linux/grub-installer_choose_bootdev_1.png)

![](../linux/grub-installer_with_other_os_0.png)

![](../linux/keyboard-configuration_toggle_0.png)

![](../linux/keyboard-configuration_xkb-keymap_0.png)

![](../linux/localechooser_shortlist_0.png)

![](../linux/mirror_http_countries_0.png)

![](../linux/mirror_http_mirror_0.png)

![](../linux/mirror_http_proxy_0.png)

![](../linux/netcfg_get_domain_0.png)

![](../linux/netcfg_get_hostname_0.png)

![](../linux/partman_active_partition_0.png)

![](../linux/partman_active_partition_1.png)

![](../linux/partman_choose_partition_0.png)

![](../linux/partman_choose_partition_1.png)

![](../linux/partman_choose_partition_2.png)

![](../linux/partman_choose_partition_3.png)

![](../linux/partman_confirm_0.png)

![](../linux/partman_free_space_0.png)

![](../linux/partman-auto_choose_recipe_0.png)

![](../linux/partman-auto_init_automatically_partition_0.png)

![](../linux/passwd_root-password_0.png)

![](../linux/passwd_user-fullname_0.png)

![](../linux/passwd_user-password_0.png)

![](../linux/passwd_username_0.png)

![](../linux/popularity-contest_participate_0.png)

![](../linux/tasksel_first_0.png)

![](../linux/tasksel_first_1.png)

![](../linux/time_zone_0.png)
## Драйвера NVIDIA

Если при запуске системы у вас отображается чёрный экран - нажмите `Ctrl + F2` и установите драйвера NVIDIA 

В открывшейся консоли введите

```
sudo nano /etc/apt/sources.list
```

Добавьте новую строку с кодом

```
deb http://deb.debian.org/debian/ bookworm main contrib non-free non-free-firmware
```

Затем нажмите `Ctrl+S`, чтобы сохранить изменения в файле и `Ctrl+X`, чтобы выйти. И введите следующие команды

```
sudo apt update
sudo apt install nvidia-driver firmware-misc-nonfree
```

# Настройка системы

## Оптимизация
Для оптимизации работы компьютера установите следующие программы с помощью консоли

Earlyoom

```
sudo apt install earlyoom
```

ZRAM

```
sudo apt install zram-tools
```

Откройте файл `/etc/default/zramswap` при помощи команды

```
sudo nano /etc/default/zramswap
```

И добавьте в него следующие строки

```
ALGO=zstd
PERCENT=100
PRIORITY=100
```

Запустите команду

```
systemctl restart zramswap
```

## Магазин приложений

Далее рекомендуется установить flathub для удобной установки большинства приложений

```
sudo apt install flatpak
sudo apt install plasma-discover-backend-flatpak
flatpak remote-add --if-not-exists flathub https://dl.flathub.org/repo/flathub.flatpakrepo
```

После перезагрузки компьютера изменения вступят в силу
