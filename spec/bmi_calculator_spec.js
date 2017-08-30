describe("BMICalculator", function () {
  var calculator;
  var person;

  beforeEach(function() {
    person = new Person({weight: 90, height: 186});
    person_imperial = new Person({weight_pounds: 198.42, height_feets: 6, height_inches: 1.23});
    calculator = new BMICalculator();
    calculator_2 = new BMICalculator();
  });

  it("calculates BMI for a person using metric method", function() {
    calculator.metric_bmi(person);
    expect(person.bmi_value).toEqual(26.01);
  });

  it("calculates BMI for a person using imperial method", function() {
    calculator_2.imperial_bmi(person_imperial);
    expect(person_imperial.bmi_value).toEqual(26.01);
  });
});
