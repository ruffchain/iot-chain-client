[![Build Status](https://travis-ci.org/ruff-drivers/rs485-uart2.svg)](https://travis-ci.org/ruff-drivers/rs485-uart2)

# RS-485 driver for Ruff

RS-485 driver with UART interface.

## Supported Engines

* Ruff: >= 1.9.0 <2.0.0

## Supported Models

- [rs485-uart2](https://rap.ruff.io/devices/rs485-uart2)

## Installing

Execute following command and enter a **supported model** to install.

```sh
# Please replace `<device-id>` with a proper ID.
# And this will be what you are going to query while `$('#<device-id>')`.
rap device add <device-id>

# Then enter a supported model, for example:
# ? model: rs485-uart2
# ? value (number) for argument "baudRate": (9600)
# ? value (number) for argument "stopBits": (1)
# ? value (number) for argument "dataBits": (8)
# ? value (string) for argument "parity": (none)
```

## Usage

Here is the basic usage of this driver.

```js
$('#<device-id>').setup({
    dataBits: 8,
    parity: "even"
}, function () {
    $('#<device-id>').open();
});

$('#<device-id>').write(data, callback);
```

## API References

### Methods

#### `setup(options, callback)`

Configure the arguments of the uart interface.

#### `open(callback)`

Open the virtual rs485 bus.

#### `write(data[, callback])`

Write data to the rs485 bus.

- **callback:** No argument other than a possible error is given to the completion callback.

### Events

#### `data`

Emitted when data is received from rs485 bus.

#### `error`

Emitted when error happens.

## Contributing

Contributions to this project are warmly welcome. But before you open a pull request, please make sure your changes are passing code linting and tests.

You will need the latest [Ruff SDK](https://ruff.io/) to install rap dependencies and then to run tests.

### Installing Dependencies

```sh
npm install
rap install
```

### Running Tests

```sh
npm test
```

## License

The MIT License (MIT)

Copyright (c) 2016 Nanchao Inc.

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
