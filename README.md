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

## Contributing

Follow the instructions in [Contributing](https://github.com/facebook/reason/tree/master/bspacks) to create a new `ml/refmt_main3.ml` and `ml/refmt_main3.mli` files and make a PR with them! Making an `npm` release is as simple as creating a new tag that starts with a `v` thanks to GitHub actions _AND THE POWER OF AUTOMATION_!

## License

All the [Reason] code remains fully copyrighted to Facebook under MIT. My contribution here is only the continuos deployment in `.github` folder.

[Reason]: (https://github.com/facebook/reason)
