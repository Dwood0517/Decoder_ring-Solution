// Write your tests here!
const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => {
 it ("should return a string when encoding", () => {
     const actual = polybius("dev");
     expect(actual).to.be.a("string");
     });
 it("returns false if the number of characters in the string, excluding spaces, is odd when decoding", () => {
      const actual = polybius("43535", false);
      expect(actual).to.be.false;
     });
 it ("should encode input into numbers", () => {
     const actual = polybius("dev");
     const expected = "415115";
     expect(actual).to.equal(expected);
     });
 it("translates letters i and j to 42 when encoding", () => {
        const expected = "424233221351";
        const actual = polybius("jingle");
        expect(actual).to.equal(expected);
      });
 it("translates 42 to 'i' and 'j' when decoding", () => {
     const actual = polybius("42", false);
     expect(actual).to.include("i");
     expect(actual).to.include("j");
     });    
 it("ignores capital letters", () => {
        const expected = '23513434112251';
        const actual = polybius("Message");
        expect(actual).to.equal(expected);
      });
 it("maintians spaces when decoding", () => {
    const actual = polybius("2345 23513434112251", false);
    const expected = "my message";
    expect(actual).to.equal(expected);
   });
});

