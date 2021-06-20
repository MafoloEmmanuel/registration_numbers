describe('Registration numbers project tests', function(){
    it('should be able to get a value from the textBox ', function(){
        let registrationNumber = RegistrationNumbersEvent();
        registrationNumber.setRegistration(12345);
        assert.deepEqual('12345',  registrationNumber.setRegistration(12345) );
    })
})