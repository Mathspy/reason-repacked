# reason-repacked

This is just [Reason] repacked into a binary for easy use with BuckleScript.

The goal is to have an always up-to-date distribution of [Reason] as BuckleScript ships with an often outdated version.

## Usage
Run this in your project:
```sh
$ npm install -D reason-repacked
```

Then in `bsconfig.json` change or add a `refmt` field as follows:
```json
{
  "refmt": "./node_modules/.bin/refmt"
}
```

Enjoy your let binding operators! ❤️

## License

[Reason] is Facebook open source project licensed under MIT.

[Reason]: (https://github.com/facebook/reason)
