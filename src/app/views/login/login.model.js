import Bb from 'backbone';

export default Bb.Model.extend({

    defaults: {
        email: '',
        password: ''
    },

    validate: function(attrs) {
        var errors = {};
        var hasError = false;
        var properLogin = false;
        if(!attrs.email){
            errors.email = 'email must be provide';
            hasError = true;
        }
        if(!attrs.password){
            errors.password = 'password must be provide';
            hasError = true;
        }

        if(attrs.email != 'admin' || attrs.password != 'admin'){
            errors.wrongCredentials = 'Wrong credentials, please try again.';
            hasError = true;
        }

        if(hasError){
            return errors;
        }
    }

});