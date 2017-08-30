describe("Person", function() {
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186})
    person_imperial = new Person({weight_pounds: 198.42, height_feets: 6, height_inches: 1.23})
});

  it ("should have a weight of 90", function() {
    expect(person.weight).toEqual(90);
  });

  it("should have a height of 186", function() {
    expect(person.height).toEqual(186);
  });

  it("should calculate BMI value (metric)", function() {
    person.calculate_bmi();
    expect(person.bmi_value).toEqual(26.01);
  });

  it("should have a BMI Message (metric)", function() {
    person.calculate_bmi();
    expect(person.bmi_message).toEqual("Overweight");
  });

  it("should have a weight in pounds of 198.42", function() {
    expect(person_imperial.weight_pounds).toEqual(198.42);
  });

  it("should have a height in feets of 6", function() {
    expect(person_imperial.height_feets).toEqual(6);
  });

  it("should have a height in inches of 1.23", function() {
    expect(person_imperial.height_inches).toEqual(1.23);
  });

  it("should calculate BMI value (imperial)", function() {
    person_imperial.calculate_bmi_imperial();
    expect(person_imperial.bmi_value).toEqual(26.01);
  });

  it("should have a BMI message (imperial)", function() {
    person_imperial.calculate_bmi_imperial();
    expect(person_imperial.bmi_message).toEqual("Overweight");
  });
});
