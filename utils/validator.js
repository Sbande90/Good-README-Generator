function validator(response, name) {
    if (name == "title") {
        if (response) {
            return true;
        } else {
            return "please enter title";
        }
    }

    if (name == "description") {
        if (response) {
            return true;
        } else {
            return "please enter description";
        }
    }

    if (name == "installation") {
        if (response) {
            return true;
        } else {
            return "please enter installation guideline";
        }
    }


    if (name == "usage") {
        if (response) {
            return true;
        } else {
            return "please show how to use";
        }
    }


    if (name == "license") {
        return true;
    }


    if (name == "contribution") {
        return true; //not require
    }



    if (name == "tests") {
        return true;
    }
 // github
    if (name == "username") {
        if (response) {
            return true;
        } else {
            return "please provide user name";
        }
    }
// email
    if (name == "email") {
        if (response) {
            return true;
        } else {
            return "please provide email address";
        }
    }

    //info
    if (name == "info") {
        if (response) {
            return true;
        } else {
            return "please indicate the best way to reach you";
        }
    }
}

module.exports = validator;