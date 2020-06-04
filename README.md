# QR Copy Command Line

[![npm version](https://badge.fury.io/js/%40aguang%2Fqrcp.svg)](https://badge.fury.io/js/%40aguang%2Fqrcp)

Download files over your local network through QRCode in pure command line. Inspired by
[claudiodangelis/qrcp](https://github.com/claudiodangelis/qrcp). It is a familiar
implementation written by javascript.

## Install

```bash
npm install -g @aguang/qrcp
```

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
