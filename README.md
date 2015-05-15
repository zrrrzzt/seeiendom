# seeiendom [![Build Status](https://travis-ci.org/zrrrzzt/seeiendom.svg?branch=master)](https://travis-ci.org/zrrrzzt/seeiendom)
Node module for [www.seeiendom.no](http://www.seeiendom.no/)

## Installation
From npm
```
$ npm install seeiendom
```

From GitHub
```
$ git clone git@github.com:zrrrzzt/seeiendom.git
```

cd into directory and run setup
```
$ npm run setup
```

## Usage

Pass an options object.

**query** Your query, like an address or "gårds- og bruksnummer" **required**

**sources** An array of sources for search. Defaults to ['sted', 'matreiendom']

**key** Your siteurlkey. Deafults to 'httpwwwseeiendomno'

**groups** An array of viewers. Defaults to ['guests']

```javascript
var getDataFromSeEiendom = require('seeiendom');

var options = {
  query: '0806-60/77'
};

getDataFromSeEiendom(options, function(err, data) {
  if (err) {
    console.error(err);
  } else {
    console.log(data);
  }
});
```

Example of returned data

```javascript
[ 
  { 
    ID: '41515792',
    TITTEL: '0806-60/77',
    TITTEL2: 'SKIEN-60/77',
    TITTEL3: '60/77, SKIEN',
    TITTEL4: 'FYLKESBAKKEN 6, 3715 SKIEN-60/77',
    NAVN: '0806-60/77',
    TILHOERIGHET: 'SKIEN, SKIEN, TELEMARK',
    GARDSNR: '60',
    BRUKSNR: '77',
    FESTENR: '0',
    SEKSJONSNR: '0',
    KOMMUNENR: '0806',
    KOMMUNENAVN: 'SKIEN',
    VEGADRESSE: 'FYLKESBAKKEN 6, 3715 SKIEN',
    VEGADRESSE2: 'FYLKESBAKKEN 6',
    LATITUDE: '6564248.55',
    LONGITUDE: '534927.62',
    FYLKESNR: '08',
    FYLKESNAVN: 'TELEMARK',
    OBJEKTTYPE: 'EIENDOM',
    KILDE: 'EIENDOM' 
  },
  { 
    ID: '41515792',
    TITTEL: '0806-60/77',
    TITTEL2: 'SKIEN-60/77',
    TITTEL3: '60/77, SKIEN',
    TITTEL4: 'FYLKESBAKKEN 8, 3715 SKIEN-60/77',
    NAVN: '0806-60/77',
    TILHOERIGHET: 'SKIEN, SKIEN, TELEMARK',
    GARDSNR: '60',
    BRUKSNR: '77',
    FESTENR: '0',
    SEKSJONSNR: '0',
    KOMMUNENR: '0806',
    KOMMUNENAVN: 'SKIEN',
    VEGADRESSE: 'FYLKESBAKKEN 8, 3715 SKIEN',
    VEGADRESSE2: 'FYLKESBAKKEN 8',
    LATITUDE: '6564248.55',
    LONGITUDE: '534927.62',
    FYLKESNR: '08',
    FYLKESNAVN: 'TELEMARK',
    OBJEKTTYPE: 'EIENDOM',
    KILDE: 'EIENDOM' 
  },
  { 
    ID: '41515792',
    TITTEL: '0806-60/77',
    TITTEL2: 'SKIEN-60/77',
    TITTEL3: '60/77, SKIEN',
    TITTEL4: 'FYLKESBAKKEN 10, 3715 SKIEN-60/77',
    NAVN: '0806-60/77',
    TILHOERIGHET: 'SKIEN, SKIEN, TELEMARK',
    GARDSNR: '60',
    BRUKSNR: '77',
    FESTENR: '0',
    SEKSJONSNR: '0',
    KOMMUNENR: '0806',
    KOMMUNENAVN: 'SKIEN',
    VEGADRESSE: 'FYLKESBAKKEN 10, 3715 SKIEN',
    VEGADRESSE2: 'FYLKESBAKKEN 10',
    LATITUDE: '6564248.55',
    LONGITUDE: '534927.62',
    FYLKESNR: '08',
    FYLKESNAVN: 'TELEMARK',
    OBJEKTTYPE: 'EIENDOM',
    KILDE: 'EIENDOM' 
  } 
]
```

## Disclaimer
This is not an official module from [www.seeiendom.no](http://www.seeiendom.no/) and it is meant for private use only.
For professional services please contact [Kartverket](http://kartverket.no/Bestille/Bestille-eiendomsdata/)