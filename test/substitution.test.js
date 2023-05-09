// Write your tests here!
const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    //alphabet length = 26 or return false
    it("should return false when alphabet is not 26 characters", () => {
         const actual = substitution("message","xoyqmcgru");
         expect(actual).to.be.false;
        });
        //return false if alphabet has duplicates
    it (" should return false if given alphabet is duplicated", () => {
        const actual = substitution("message", "xoyqmcggukswaflnthxjpzibev");
        expect(actual).to.be.false;
        });
        //translates input
    it("correctly translates phrase based on alphabet given", () => {
           const actual = substitution("thinkful", "xoyqmcgrukswaflnthdjpzibev");
           const expected = "jrufscpw";
           expect(actual).to.equal(expected);
         });    
         //ignore capitilization
    it("ignores capital letters", () => {
           const actual = substitution("You are", "xoyqmcgrukswaflnthdjpzibev");
           const expected = "elp xhm";
           expect(actual).to.equal(expected);
         });
         //maintian spacing
    it("maintains spaces when encoding", () => {
       const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
       const expected = "elp xhm xf mbymwwmfj dne";
       expect(actual).to.equal(expected);
      });
   });
   