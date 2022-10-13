var tcsEligibilityCheck = function (grad_score, hsc_score, ssc_score, candidate_name) {
    console.log(grad_score >= 70 );
        var result = grad_score >= 70 || hsc_score >= 80 || ssc_score > 90  // false || true
            ? `Congrates ${candidate_name} you are eligible for TCS interview`
            : "Unfortunately you are not eligible for interview";
        console.log(result);
    }
    tcsEligibilityCheck(80, 86, 90, "Mamata Yeul");
    tcsEligibilityCheck(69, 65, 95, "Ashish Bhunte");
    tcsEligibilityCheck(60,79,88,"Abhishek Pawar");
    