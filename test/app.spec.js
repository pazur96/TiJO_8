'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

'use strict';

var expect = require('chai').expect;
var app = require('../app/app');

describe('reverseNumber', function ()
{
    it('should revert 76 to 67', function()
    {
        expect(app.reverseNumber(76)).to.eql(67);
    });
});

describe('returnOnlyLetter', function ()
{
    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter('g3rsw1.')).to.eql('grsw');
    });

});

describe('isEmail', function ()
{
    it('should return true when is email', function()
    {
        expect(app.isEmail('qq23ea@rfc.pl')).to.eql(true);
    });
});