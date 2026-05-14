const CONVERT = document.getElementById("convert");
const RESULT = document.getElementById("result");
const $ = (id) => document.getElementById(id);
const QS = (selector) => document.querySelector(selector);
const START = Date.now();

function verdict(isCorrect, hasAnswer) {
    if (!hasAnswer) return "Ответ не дан";
    return isCorrect ? "Верно" : "Неверно";
}

let results = [];
let score = 0;

CONVERT.addEventListener("click", () => {
    // 1
    let q1 = QS('input[name="people"]:checked');
    let has1 = !!q1;
    let is1 = q1 && q1.value === "optionT";
    let user1 = q1 ? q1.parentElement.textContent.trim() : "—";
    let score1 = is1 ? 1 : 0;
    score += score1;

    results.push({
        num: 1,
        correct: "7 млрд. человек",
        userAnswer: user1,
        verdict: verdict(is1, has1),
        score: score1
    });

    // 2
    let q2 = QS('input[name="guy"]:checked');
    let has2 = !!q2;
    let is2 = q2 && q2.value === "optionT";
    let user2 = q2 ? q2.parentElement.textContent.trim() : "-";
    let score2 = is2 ? 1 : 0;
    score += score2;

    results.push({
        num: 2,
        correct: "80–100 млн человек",
        userAnswer: user2,
        verdict: verdict(is2, has2),
        score: score2
    });

    // 3
    let user3 = [
        $("fa1").checked ? "Зимбабве" : null,
        $("fa2").checked ? "Люксембург" : null,
        $("tr1").checked ? "Индия" : null,
        $("tr2").checked ? "Китай" : null,
        $("tr3").checked ? "США" : null
    ].filter(Boolean).join(", ") || "-";

    let is3 =
        $("fa1").checked &&
        $("fa2").checked &&
        $("tr1").checked &&
        !$("tr2").checked &&
        !$("tr3").checked;

    let has3 = user3 !== "-";
    let score3 = is3 ? 1 : 0;
    score += score3;

    results.push({
        num: 3,
        correct: "Зимбабве, Люксембург",
        userAnswer: user3,
        verdict: verdict(is3, has3),
        score: score3
    });

    // 4
    let select1 = $("select1");
    let is4 = select1.value === "true";
    let score4 = is4 ? 1 : 0;
    score += score4;
    
    let Answer = select1.value !== "";
    if (!Answer) {
        console.log("Ответ не дан");
    }

    results.push({
    num: 4,
    correct: "Индия, Китай, США",
    userAnswer: Answer
        ? select1.options[select1.selectedIndex].text
        : "-",
    verdict: verdict(is4, Answer),
    score: score4
});


    // 5
    let input1 = $("input1").value.trim();
    let is5 = input1.toLowerCase() === "индия";
    let score5 = is5 ? 1 : 0;
    score += score5;

    results.push({
        num: 5,
        correct: "Индия",
        userAnswer: input1 || "-",
        verdict: verdict(is5, !!input1),
        score: score5
    });

    // 6
    let input2 = $("input2").value.trim();
    let is6 = input2.toLowerCase() === "урбанизация";
    let score6 = is6 ? 1 : 0;
    score += score6;

    results.push({
        num: 6,
        correct: "Урбанизация",
        userAnswer: input2 || "-",
        verdict: verdict(is6, !!input2),
        score: score6
    });

    // 7
    let user7 = [
        $("t1").checked ? "Индия" : null,
        $("t2").checked ? "Китай" : null,
        $("t3").checked ? "США" : null,
        $("f1").checked ? "Зимбабве" : null,
        $("f2").checked ? "Люксембург" : null
    ].filter(Boolean).join(", ") || "-";

    let is7 =
        $("t1").checked &&
        $("t2").checked &&
        $("t3").checked &&
        !$("f1").checked &&
        !$("f2").checked;

    let has7 = user7 !== "-";
    let score7 = is7 ? 1 : 0;
    score += score7;

    results.push({
        num: 7,
        correct: "Индия, Китай, США",
        userAnswer: user7,
        verdict: verdict(is7, has7),
        score: score7
    });

    // 8
    let select2 = $("select2");
    let is8 = select2.value === "true";
    let score8 = is8 ? 1 : 0;
    score += score8;

    let Aanswer = select1.value !== "";
    if (!Aanswer) {
        console.log("Ответ не дан");
    }

    results.push({
    num: 8,
    correct: "Научная дисциплина...",
    userAnswer: Aanswer
        ? select1.options[select1.selectedIndex].text
        : "-",
    verdict: verdict(is8, Aanswer),
    score: score8
});

    // время
    let seconds = Math.floor((Date.now() - START) / 1000);

    // таблица
    let table = `
    <table class="table">
    <tr>
        <th>№</th>
        <th>Правильный ответ</th>
        <th>Ваш ответ</th>
        <th>Верность</th>
        <th>Балл</th>
    </tr>
    `;

    results.forEach(r => {
        table += `
    <tr>
        <td>${r.num}</td>
        <td>${r.correct}</td>
        <td>${r.userAnswer}</td>
        <td>${r.verdict}</td>
        <td>${r.score}</td>
    </tr>
    `;
    });

    table += `</table>`;

    // вывод
    RESULT.innerHTML = `
        <h2>Результаты теста</h2>
        ${table}
        <p><b>Итог:</b> ${score} / 8</p>
        <p><b>Время:</b> ${seconds} сек.</p>
        <button onclick="location.reload()">Сброс</button>
    `;
});
