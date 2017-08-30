function Person(attr) {
  this.weight = attr.weight;
  this.height = attr.height;
  this.weight_pounds = attr.weight_pounds;
  this.height_feets = attr.height_feets;
  this.height_inches = attr.height_inches;

  Person.prototype.calculate_bmi = function () {
    calculator = new BMICalculator();
    calculator.metric_bmi(this);
  };

  Person.prototype.calculate_bmi_imperial = function () {
    calculator_2 = new BMICalculator();
    calculator_2.imperial_bmi(this);
  };
}
