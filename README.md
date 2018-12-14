[![Build Status](https://travis-ci.org/zrrrzzt/seeiendom.svg?branch=master)](https://travis-ci.org/zrrrzzt/seeiendom)
[![js-standard-style](https://img.shields.io/badge/code%20style-standard-brightgreen.svg?style=flat)](https://github.com/feross/standard)

# seeiendom

Node module for [seeiendom.kartverket.no](https://seeiendom.kartverket.no)

## Installation

```bash
$ npm i seeiendom
```

## Usage

Pass in a searchstring, like an address or "gårds- og bruksnummer" **required**

### Promise

```JavaScript
const getDataFromSeEiendom = require('seeiendom')

const searchstring = '0806-60/77'

getDataFromSeEiendom(searchstring)
  .then(console.log)
  .catch(console.error)
```

### Callback

```JavaScript
const getDataFromSeEiendom = require('seeiendom')

const searchstring = '0806-60/77'

getDataFromSeEiendom(searchstring, (error, data) => {
  if (error) {
    console.error(error)
  } else {
    console.log(data)
  }
})
```

## Result
Example of returned data

```JavaScript
[ 
  { 
    id: 41515792,
    kommunenavn: 'SKIEN',
    kommunenr: '0806',
    gaardsnr: 60,
    bruksnr: 77,
    festenr: 0,
    seksjonsnr: 0,
    veiadresse: 'FYLKESBAKKEN 6, 3715 SKIEN' 
  },
  { 
    id: 41515792,
    kommunenavn: 'SKIEN',
    kommunenr: '0806',
    gaardsnr: 60,
    bruksnr: 77,
    festenr: 0,
    seksjonsnr: 0,
    veiadresse: 'FYLKESBAKKEN 8, 3715 SKIEN' 
  },
  { 
    id: 41515792,
    kommunenavn: 'SKIEN',
    kommunenr: '0806',
    gaardsnr: 60,
    bruksnr: 77,
    festenr: 0,
    seksjonsnr: 0,
    veiadresse: 'FYLKESBAKKEN 10, 3715 SKIEN' 
  }
]
```

## Disclaimer

This is not an official module from [seeiendom.kartverket.no](https://seeiendom.kartverket.no) and it is meant for private use only.
For professional services please contact [Kartverket](https://kartverket.no/eiendom/eiendomsinformasjon/tilgang-til-eiendomsdata/)

## Related

- [seeiendom-cli](https://github.com/zrrrzzt/seeiendom-cli) CLI for this module

## License

[MIT](LICENSE)
