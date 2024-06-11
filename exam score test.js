let test_score = 50;
let total_questions = 140;
let percent_to_pass = 0.7; // this is multiplied by 100

let results;
if (test_score === total_questions) {
	results = "You pass with FLYING colors WOW!!";
} else if (test_score >= percent_to_pass * total_questions) {
	results = "You pass.";
} else {
	results = "You fail.";
}

let percentage = Math.floor((test_score / total_questions) * 100);

console.log(
	`You scored ${test_score}/${total_questions} (${percentage}%). ${results}`
);
