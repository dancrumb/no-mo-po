# No More Polyfills (no-mo-po)

The NPM ecosystem is riddled with polyfills and shims that are no longer required by anyone who targets current environments.

This repo contains a growing catalogue of tiny modules that can override these polyfills to trim the fat from your node_modules folder.

To use them, just add an `overrides` property to your `package.json`:

```jsonc
{
    //...
    "overrides": {
        "array-buffer-byte-length": "@nomopo/array-buffer-byte-length",
        "array-includes": "@nomopo/array-includes",
        "array.prototype.flat": "@nomopo/array.prototype.flat",
        "array.prototype.flatmap": "@nomopo/array.prototype.flatmap",
        "array.prototype.includes": "@nomopo/array-includes",
        "array.prototype.slice": "@nomopo/array.prototype.slice",
        "array.prototype.tosorted": "@nomopo/array.prototype.tosorted",
        "arraybuffer.prototype.slice": "@nomopo/array.prototype.slice",
        "call-bind": "@nomopo/call-bind",
        "define-data-property": "@nomopo/define-data-property",
        "define-properties": "@nomopo/define-properties",
        "function-bind": "@nomopo/function-bind",
        "function.prototype.name": "@nomopo/function.prototype.name",
        "isarray":"@nomopo/isarray",
        "object-assign": "@nomopo/object.assign",
        "object-keys": "@nomopo/object-keys",
        "object.assign": "@nomopo/object.assign",
        "object.entries": "@nomopo/object.entries",
        "object.fromentries": "@nomopo/object.fromentries",
        "object.hasown": "@nomopo/object.hasown",
        "object.values": "@nomopo/object.values",
        "regexp.prototype.flags": "@nomopo/regexp.prototype.flags",
        "string.prototype.matchall": "@nomopo/string.prototype.matchall",
        "string.prototype.trim": "@nomopo/string.prototype.trim",
        "string.prototype.trimend": "@nomopo/string.prototype.trimend",
        "string.prototype.trimstart": "@nomopo/string.prototype.trimstart"
    },
    //...
}

```

See https://marvinh.dev/blog/speeding-up-javascript-ecosystem-part-6/