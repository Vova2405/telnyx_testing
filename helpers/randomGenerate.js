class RandomEmail {

    randomEmail() {
        let strValues = "abcdefgehigklmnopqrstuvwxyz.";
        let domenValues = "abcdefghigklmnopqrstuvwxyz."
        let strEmail = "";
        let strTmp;
        for (let i = 0; i < 15; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail + "@gmail.com";
        
        return strEmail;
    };

    
    randomNumber() {
        let strValues = "1234567890";
        let domenValues = "abcdefghigklmnopqrstuvwxyz."
        let strEmail = "";
        let strTmp;
        for (let i = 0; i <= 10; i++) {
            strTmp = strValues.charAt(Math.round(strValues.length * Math.random()));
            strEmail = strEmail + strTmp;
        }
        strTmp = "";
        strEmail = strEmail;
        
        return strEmail;
    };


}

module.exports = new RandomEmail()