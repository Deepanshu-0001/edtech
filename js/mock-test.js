"use strict";


const questions = [

    {
        text:
            "If 15% of a number is 45, what is 40% of that number?",

        options:
            [
                "100",
                "120",
                "140",
                "160"
            ],

        correct: 1
    },

    {
        text:
            "Choose the number that replaces the question mark: 3, 8, 15, 24, 35, ?",

        options:
            [
                "46",
                "48",
                "50",
                "52"
            ],

        correct: 1
    },

    {
        text:
            "A train covers 360 km in 4.5 hours. What is its average speed?",

        options:
            [
                "72 km/h",
                "76 km/h",
                "80 km/h",
                "84 km/h"
            ],

        correct: 2
    },

    {
        text:
            "Choose the word most nearly opposite in meaning to 'Scarce'.",

        options:
            [
                "Limited",
                "Rare",
                "Abundant",
                "Small"
            ],

        correct: 2
    },

    {
        text:
            "If A is the brother of B and B is the sister of C, how is A related to C?",

        options:
            [
                "Brother",
                "Sister",
                "Father",
                "Cannot be determined"
            ],

        correct: 0
    },

    {
        text:
            "The average of five consecutive even numbers is 28. What is the largest number?",

        options:
            [
                "30",
                "32",
                "34",
                "36"
            ],

        correct: 1
    },

    {
        text:
            "Select the correctly spelt word.",

        options:
            [
                "Accomodation",
                "Accommodation",
                "Acommodation",
                "Accommadation"
            ],

        correct: 1
    },

    {
        text:
            "A shopkeeper marks an item at ₹1,200 and gives a 15% discount. What is the selling price?",

        options:
            [
                "₹980",
                "₹1,000",
                "₹1,020",
                "₹1,040"
            ],

        correct: 2
    },

    {
        text:
            "Book : Read :: Song : ?",

        options:
            [
                "Write",
                "Listen",
                "Speak",
                "Draw"
            ],

        correct: 1
    },

    {
        text:
            "A can complete a work in 12 days and B in 18 days. Approximately how many days will they take together?",

        options:
            [
                "6.2 days",
                "7.2 days",
                "8.2 days",
                "9.2 days"
            ],

        correct: 1
    }

];


const state = {

    current: 0,

    answers:
        Array(
            questions.length
        ).fill(null),

    visited:
        new Set([0]),

    review:
        new Set(),

    seconds:
        60 * 60,

    started:
        Date.now()

};


const number =
    document.getElementById(
        "questionNumber"
    );


const text =
    document.getElementById(
        "questionText"
    );


const options =
    document.getElementById(
        "answerOptions"
    );


const palette =
    document.getElementById(
        "paletteGrid"
    );


function renderQuestion() {

    const question =
        questions[state.current];


    number.textContent =
        state.current + 1;


    text.textContent =
        question.text;


    options.innerHTML =
        question.options
            .map(
                (option,index) => `

                <button
                    class="answer-option ${
                        state.answers[state.current] === index
                            ? "selected"
                            : ""
                    }"
                    data-option="${index}">

                    <span class="option-letter">
                        ${String.fromCharCode(65 + index)}
                    </span>

                    ${option}

                </button>

                `
            )
            .join("");


    options
        .querySelectorAll(
            "[data-option]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    state.answers[
                        state.current
                    ] =
                        Number(
                            button.dataset.option
                        );


                    renderQuestion();

                    renderPalette();

                }
            );

        });


    document.getElementById(
        "previousBtn"
    ).disabled =
        state.current === 0;

}


function status(index) {

    if (
        state.review.has(index)
    ) {

        return "review";

    }


    if (
        state.answers[index] !== null
    ) {

        return "answered";

    }


    if (
        state.visited.has(index)
    ) {

        return "unanswered";

    }


    return "unvisited";

}


function renderPalette() {

    palette.innerHTML =
        questions
            .map(
                (_,index) => `

                <button
                    class="palette-btn
                    ${status(index)}
                    ${
                        index === state.current
                            ? "current"
                            : ""
                    }"
                    data-question="${index}">

                    ${index + 1}

                </button>

                `
            )
            .join("");


    palette
        .querySelectorAll(
            "[data-question]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    navigate(
                        Number(
                            button.dataset.question
                        )
                    );

                }
            );

        });


    const attempted =
        state.answers
            .filter(
                answer =>
                    answer !== null
            )
            .length;


    document.getElementById(
        "attemptedCount"
    ).textContent =
        `${attempted} / ${questions.length}`;


    document.getElementById(
        "attemptProgress"
    ).style.width =
        `${attempted / questions.length * 100}%`;

}


function navigate(index) {

    state.current =
        Math.max(
            0,
            Math.min(
                questions.length - 1,
                index
            )
        );


    state.visited.add(
        state.current
    );


    renderQuestion();

    renderPalette();

}


document.getElementById(
    "previousBtn"
).addEventListener(
    "click",
    () => {

        navigate(
            state.current - 1
        );

    }
);


document.getElementById(
    "nextBtn"
).addEventListener(
    "click",
    () => {

        if (
            state.current ===
            questions.length - 1
        ) {

            openSubmit();

            return;

        }


        navigate(
            state.current + 1
        );

    }
);


document.getElementById(
    "clearBtn"
).addEventListener(
    "click",
    () => {

        state.answers[
            state.current
        ] =
            null;


        renderQuestion();

        renderPalette();

    }
);


document.getElementById(
    "reviewBtn"
).addEventListener(
    "click",
    () => {

        if (
            state.review.has(
                state.current
            )
        ) {

            state.review.delete(
                state.current
            );

        } else {

            state.review.add(
                state.current
            );

        }


        renderPalette();


        if (
            state.current <
            questions.length - 1
        ) {

            navigate(
                state.current + 1
            );

        }

    }
);


const modal =
    document.getElementById(
        "submitModal"
    );


function openSubmit() {

    const answered =
        state.answers
            .filter(
                answer =>
                    answer !== null
            )
            .length;


    const unanswered =
        questions.length -
        answered;


    document.getElementById(
        "submitSummary"
    ).innerHTML = `

        <div>
            <strong>${answered}</strong>
            <span>Answered</span>
        </div>

        <div>
            <strong>${unanswered}</strong>
            <span>Unanswered</span>
        </div>

        <div>
            <strong>${state.review.size}</strong>
            <span>Marked</span>
        </div>

    `;


    modal.hidden = false;

}


function closeSubmit() {

    modal.hidden = true;

}


document.getElementById(
    "submitTrigger"
).addEventListener(
    "click",
    openSubmit
);


document.getElementById(
    "modalClose"
).addEventListener(
    "click",
    closeSubmit
);


document.getElementById(
    "continueTest"
).addEventListener(
    "click",
    closeSubmit
);


document.getElementById(
    "paletteToggle"
).addEventListener(
    "click",
    () => {

        document.getElementById(
            "questionPalette"
        ).classList.add(
            "open"
        );

    }
);


document.getElementById(
    "paletteClose"
).addEventListener(
    "click",
    () => {

        document.getElementById(
            "questionPalette"
        ).classList.remove(
            "open"
        );

    }
);


function submit() {

    let correct = 0;

    let incorrect = 0;


    state.answers.forEach(
        (answer,index) => {

            if (answer === null) {
                return;
            }


            if (
                answer ===
                questions[index].correct
            ) {

                correct++;

            } else {

                incorrect++;

            }

        }
    );


    const unattempted =
        questions.length -
        correct -
        incorrect;


    const attempted =
        correct +
        incorrect;


    const accuracy =
        attempted
            ? Math.round(
                correct /
                attempted *
                100
            )
            : 0;


    const secondsUsed =
        Math.floor(
            (
                Date.now() -
                state.started
            ) /
            1000
        );


    const minutes =
        Math.floor(
            secondsUsed /
            60
        );


    const seconds =
        secondsUsed % 60;


    localStorage.setItem(

        "examPrepResult",

        JSON.stringify({

            score:
                correct * 10,

            maxScore:
                100,

            correct,

            incorrect,

            unattempted,

            accuracy,

            percentile:
                Math.min(
                    98,
                    50 + correct * 4
                ),

            time:
                `${minutes}m ${String(seconds).padStart(2,"0")}s`

        })

    );


    location.href =
        "test-result.html";

}


document.getElementById(
    "confirmSubmit"
).addEventListener(
    "click",
    submit
);


const timerElement =
    document.getElementById(
        "timer"
    );


function updateTimer() {

    const minutes =
        Math.floor(
            state.seconds /
            60
        );


    const seconds =
        state.seconds % 60;


    timerElement.textContent =
        `${String(minutes).padStart(2,"0")}:${String(seconds).padStart(2,"0")}`;

}


const timer =
    setInterval(
        () => {

            state.seconds--;


            updateTimer();


            if (
                state.seconds <= 0
            ) {

                clearInterval(
                    timer
                );

                submit();

            }

        },
        1000
    );


renderQuestion();

renderPalette();

updateTimer();


if (window.lucide) {

    lucide.createIcons();

}
