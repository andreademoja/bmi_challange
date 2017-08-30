describe('BMI_UI - index.html', function() {
    beforeEach(function() {
        jasmine.getFixtures().fixturesPath = '.';
        loadFixtures('index.html');
        $.holdReady(false);
        $('#weight').val('90');
        $('#height').val('186');
        $('#weight_pounds').val('198.42');
        $('#height_feets').val('6');
        $('#height_inches').val('1.23');
        $('#calculate').trigger('click');
        $('#calculate_2').trigger('click');
    });

    it("displays BMI value (metric)", function() {
            expect($('#display_value').text()).toBe('Your BMI is 26.01');
        });
        it("displays BMI message (metric)", function() {
            expect($('#display_message').text()).toBe('Overweight');
        });

        it("displays BMI value (imperial)", function() {
            expect($('#display_value_2').text()).toBe('Your BMI is 26.01');
        });

        it("displays BMI message (imperial)", function() {
            expect($('#display_message_2').text()).toBe('Overweight');
        });

    });
