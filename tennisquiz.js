function checkAnswers() {
    let score = 0;
    let quiz = document.forms.quiz.elements;
    let answer1 = quiz.q1.value;
        if (answer1 == "rogerfederer") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer2 = quiz.q2.value;
        if (answer2 == "miami") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer3 = quiz.q3.value;
        if (answer3 == "novakdjokovic") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer4 = quiz.q4.value;
        if (answer4 == "5") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer5 = quiz.q5.value;
        if (answer5 == "barcelona") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer6 = quiz.q6.value;
        if (answer6 == "alexanderzverev") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer7 = quiz.q7.value;
        if (answer7 == "45") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer8 = quiz.q8.value;
        if (answer8 == "sg") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer9 = quiz.q9.value;
        if (answer9 == "greece") {
            score = score + 1;
        }
        else {
            score = score +0;
        }
    let answer10 = quiz.q10.value;
        if (answer10 == "belgium") {
            score = score + 1;
        }
        else {
            score = score +0;
        }

        if (score < 4) {
            alert ("Your tennis knowledge is very weak.");
        }
        else if (score < 7) {
            alert ("Your tennis knowledge is moderate.");
        }
        else if (score < 9) {
            alert ("Your tennis knowledge is not bad.");
        }
        else {
            alert ("Your tennis knowledge is massive.");
        }
    }