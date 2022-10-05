import { Sample } from "../src/Sample";

describe("Sample test suite", () => {

  test("hello world output", () => {
    let s= new Sample();
    expect(s.hello("Ivan")).toEqual("Hello Mom");
  });
});

