const add = require("../src/add");
const { it } = require("mocha");
const assert = require('assert');
const sortArray = require("../src/sortArray");
const chai = require("chai");
const objects = require("../src/objects");
const expect = chai.expect

describe("add", () => {
    it('addition of two integers', async () => {
        const addition = await add(2, 2);
        assert.equal(addition, 4);
    })

    
    it('addition of two string', async () => {
        const addition = await add('2', '2');
        assert.equal(addition, '22');
    })

    it('addition of two negative integers', async () => {
        const addition = await add(-2, -2);
        assert.equal(addition, -4);
    })
})


describe("sort array", () => {
    it('sort array', async() => {
        const result = await sortArray([1,4,5,1,2]);
        expect(result).eql([1,1,2,4,5]);
    })

    it('sort object', async () => {
        const objResult = await objects({
            "name" : "Azad",
            "class" : "12"
        });

        expect(objResult).eql({
            "name" : "Azad",
            "class" : "12",
        })
    })
})
 