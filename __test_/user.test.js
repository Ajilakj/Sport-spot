//import {expect, jest, test} from '@jest/globals';
const User = require("../models/User");
describe("User", () => {
  // Test for all use cases when initializing a new User object
  describe("Initialization", () => {
    it("should create an object with a name and password if provided valid arguments", () => {

      const user = new User("ballislyfe", "password");
      // Verify that the new object has the correct properties
      expect(user.name).toEqual("ballislyfe");
      expect(user.password).toEqual("password");
    });

    // it("User name and password are mandatory. So should throw an error if provided no arguments", () => {
  
    //   const cb = () => new User();
    //   const err = new Error("User name and password are mandatory.");
    //   expect(cb).toThrowError(err);
    // });

    it("should throw an error if not provided a password", () => {
      const cb = new User("ballislyfe");
      // const err = new Error("Expected password");
      // expect(cb).toThrowError(err);
      //expect(cb.name).toEqual("ballislyfe");
      //if(expect(cb.password).toEqual(undefined)){
        const err = new Error("Expected password");
        expect(cb).toThrowError(err);
      //};
    });

    // it("should throw an error if 'name' is not a string", () => {
    //   const cb = () => new User(10, "test");
    //   const err = new Error("Expected parameter 'name' to be a non-empty string");

    //   expect(cb).toThrowError(err);
    // });

  });
});
