# esdoc-node-require
convert Node `require` to ES `import` so that esdoc does not complain about required variable in document coverage

## Usage
Install package
```
npm install esdoc-node-require --save-dev
```

Add the following to your esdoc config file.
```
{
  "plugins": [{"name": "esdoc-node-require"}]
}
```

## What it does
If you have following code in your file then **esdoc** will consider two variable `fs` & `express` as undocumented hence documentation coverage shown will be inaccurate. So this module convert `require` to `import` which is supported by esdoc.

#### From
```
const fs = require('fs');
const express = require('express');
```
#### To
```
import fs from 'fs';
import express from 'express';
```
