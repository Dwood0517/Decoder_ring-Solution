// Write your tests here!
const { expect } = require("chai");
const { caesar } = require("../src/caesar");

// Describe the test suite for the caesar function
describe("caesar", () => {
    //return false if shift value is not present, equal to 0, < -25 or > 25
    it("should return false if shift value is not present", () => {
        const actual = caesar("dev");
        expect(actual).to.be.false;
     });
    it("should return false if shift value is equal to 0", () => {
        const actual = caesar("dev", 0);
        expect(actual).to.be.false;
     });
    it("should return false if shift value is less than -25", () => {
        const actual = caesar("dev", -29);
        expect(actual).to.be.false;
     });
    it("should return false if shift value is greater than 25", () => {
        const actual = caesar("dev", 29);
        expect(actual).to.be.false;
     });

     //encode text correctly with shift value
    it('should encode text correctly with shift value', () => {
        const actual = caesar("dev", 3);
        const expected = "ghy";
        expect(actual).to.equal(expected);
      });

     //shift beyond the alphabet by wrapping around
    it("should handle shifting beyond the alphabet when decoding", () => {
        const actual = caesar("jxmp", -3, false);
        const expected = "maps";
        expect(actual).to.equal(expected);
       });
    it("should handle shifting beyond the alphabet when encoding", () => {
        const actual = caesar("zebra", 3);
        const expected = "cheud";
        expect(actual).to.equal(expected);
      });

     //maintain spaces & other non-alphabetic symbols
    it('should maintain spaces and other non-alphabetic symbols', () => {
        const actual = caesar("dev tools", 3);
        const expected = "ghy wrrov"
        expect(actual).to.equal(expected);
      });
    });
