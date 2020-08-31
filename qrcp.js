#!/usr/bin/env node

const Fs = require("fs");
const Proc = require("process");
const Path = require("path");
const Ip = require("ip");
const Args = require("command-line-args");
const Usage = require("command-line-usage");
const Express = require("express");
const QRCode = require("qrcode-terminal");
const PackageInfo = require("./package.json");

const options = [
  {
    name: "forever",
    alias: "f",
    type: Boolean,
    description: "Do not stop sever once downloading succeed.",
  },
  {
    name: "path",
    type: String,
    description: "Path.",
    defaultOption: true,
  },
];

const sections = [
  {
    header: `QR Copy Command Line - v${PackageInfo.version}`,
    content: "Download files through QRCode in pure command line.",
  },
  {
    header: "Synopsis",
    content: "$ qrcp <options> <path>",
  },
  {
    header: "Options",
    optionList: options,
  },
  {
    header: "Examples",
    content: [
      {
        desc: "1. Download a file.",
        example: "$ qrcp sample.png",
      },
    ],
  },
];

const args = Args(options),
  usage = Usage(sections);

if (!args.path) {
  console.log(usage);

  Proc.exit(0);
}

const path = Path.resolve(Proc.cwd(), args.path);

if (!args.upload) {
  if (!Fs.existsSync(path)) {
    console.log(`${path} does not exist.`);

    Proc.exit(1);
  }

  if (!Fs.statSync(path).isFile()) {
    console.log(`${path} is not a file.`);

    Proc.exit(1);
  }
}

const app = Express();

app.get("/", (req, res, next) => {
  res.download(path, (err) => {
    if (err) return next(err);

    if (!args.forever) {
      Proc.exit(0);
    }
  });
});

const listener = app.listen(0, (err, address) => {
  const url = `http://${Ip.address()}:${listener.address().port}`;

  console.log(`Please visit: ${url}`);

  QRCode.generate(url);
});
