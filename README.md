# qrcp

Inspired by [claudiodangelis/qrcp](https://github.com/claudiodangelis/qrcp).
It is a familiar implementation written by javascript. Quickly transfer files
over your local network through QR code in pure terminal.

## Install

```bash
npm install -g @aguang/qrcp
```

## QR Copy Command Line

Download files through QRCode in pure command line. 

## Synopsis

```bash
$ qrcp <options> <path> 
```

## Options

```base
-f, --forever    Do not stop sever once downloading succeed. 
--path string    Path.                                       
```

## Examples

1. Download a file.   `qrcp sample.png`
