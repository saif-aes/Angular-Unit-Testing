describe('First Test', () => {
  let testVariable: any;

  beforeEach(() => {
    testVariable = {};
  });

  it("should return true if 'a' is true", () => {
    // arrange
    testVariable.a = false;

    // act
    testVariable.a = true;

    // assert
    expect(testVariable.a).toBe(true);
  });
});

// User service -> getUser() method -> should return the correct given user
describe('User Service', () => {
  describe('getUser() method', () => {
    it('should return the correct given user', () => {});
  });
});
