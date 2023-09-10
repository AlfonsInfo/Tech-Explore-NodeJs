const validator = require('validator');

function testEmail()
{
    const exampleTestValidEmail = validator.isEmail("alfonsussetiawan@gmail.com");
    console.log(exampleTestValidEmail);
}

function testMobilePhone()
{
    const mobilePhoneNumberDummy = ['0822-8411-0712', '0812 1234 1231', '082172804011', '082284990912'];
    mobilePhoneNumberDummy.forEach((data)=>{
        const exampleTestValidMobilePhoneNumber = validator.isMobilePhone(data,"id-ID");
        console.log(exampleTestValidMobilePhoneNumber);
    })

}

testMobilePhone()