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

    it('if is not a number', function()
           {
                expect(app.reverseNumber('yyyy4')).to.eql(false);
        });
});

describe('returnOnlyLetter', function ()
{
    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter(09775)).to.eql(false);
    });

    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter('eer')).to.eql('eer');
    });

    it('should return only letters', function()
    {
        expect(app.returnOnlyLetter('g3rsw1.')).to.eql('grsw');
    });

});

describe('isEmail', function ()
{
    it('should return false when it is not a email', function()
    {
        expect(app.isEmail('qq23earfc.pl')).to.eql(false);
    });
    it('should return true when is email', function()
    {
        expect(app.isEmail('qq23ea@rfc.pl')).to.eql(true);
    });
});