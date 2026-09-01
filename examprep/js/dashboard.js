"use strict";


const icon = name =>
    `<i data-lucide="${name}"></i>`;


function showToast(message) {

    const toast =
        document.getElementById(
            "toast"
        );


    toast.textContent =
        message;


    toast.classList.add(
        "show"
    );


    clearTimeout(
        showToast.timer
    );


    showToast.timer =
        setTimeout(
            () => {

                toast.classList.remove(
                    "show"
                );

            },
            2300
        );
}


function chart() {

    return `
    <svg
        class="chart-svg"
        viewBox="0 0 700 220"
        preserveAspectRatio="none">

        <g
            stroke="#e7ebf2"
            stroke-width="1">

            <line
                x1="0"
                y1="45"
                x2="700"
                y2="45"/>

            <line
                x1="0"
                y1="100"
                x2="700"
                y2="100"/>

            <line
                x1="0"
                y1="155"
                x2="700"
                y2="155"/>

        </g>

        <path
            d="M0 180 C75 155 105 170 165 135 S250 152 315 105 S410 123 480 82 S590 95 700 42"
            fill="none"
            stroke="#4567e8"
            stroke-width="4"/>

    </svg>
    `;
}


const studentNav = [

    ["layout-dashboard","Overview"],

    ["play-circle","My Courses"],

    ["clipboard-check","Mock Tests"],

    ["circle-help","Practice"],

    ["notebook-text","Study Material"],

    ["bookmark","Bookmarks"],

    ["chart-no-axes-combined","Performance"],

    ["bell","Notifications"],

    ["user-round","Profile"],

    ["life-buoy","Help Desk"]

];


const adminNav = [

    ["layout-dashboard","Dashboard"],

    ["users","Students"],

    ["building-2","Exams"],

    ["play-circle","Courses"],

    ["clipboard-check","Mock Tests"],

    ["circle-help","Question Bank"],

    ["notebook-text","Study Material"],

    ["newspaper","Current Affairs"],

    ["file-text","Blogs"],

    ["user-round-check","Faculty"],

    ["bell","Notifications"],

    ["life-buoy","Help Desk"],

    ["scan-search","SEO"],

    ["images","Media"],

    ["settings","Settings"]

];


function shell(admin, content) {

    const nav =
        admin
            ? adminNav
            : studentNav;


    return `
    <div class="dashboard-shell">

        <aside
            class="dash-sidebar"
            id="dashSidebar">

            <a
                class="brand"
                href="index.html">

                <span class="brand-mark">
                    E
                </span>

                EXAMPREP

            </a>


            <nav class="dash-nav">

                ${nav.map(
                    (item,index) => `

                    <a
                        href="#"
                        class="${index === 0 ? "active" : ""}"
                        data-section="${item[1]}">

                        ${icon(item[0])}

                        ${item[1]}

                    </a>

                    `
                ).join("")}

            </nav>

        </aside>


        <main class="dash-main">

            <header class="dash-topbar">

                <div class="row">

                    <button
                        class="icon-btn"
                        id="sidebarButton">

                        ${icon("menu")}

                    </button>


                    <div class="dash-search">

                        <input
                            class="field"
                            placeholder="${
                                admin
                                    ? "Search admin..."
                                    : "Search courses, tests..."
                            }">

                    </div>

                </div>


                <div class="dash-user">

                    <button
                        class="icon-btn"
                        data-toast="You have new notifications.">

                        ${icon("bell")}

                    </button>

                    <span class="avatar">
                        ${admin ? "AD" : "AS"}
                    </span>

                    <div>

                        <strong>
                            ${admin ? "Admin User" : "Aspirant"}
                        </strong>

                        <small>
                            ${admin ? "Platform Admin" : "SSC CGL 2026"}
                        </small>

                    </div>

                </div>

            </header>


            <div class="dash-content">

                ${content}

            </div>

        </main>

    </div>
    `;
}


function studentDashboard() {

    return shell(

        false,

        `
        <div class="dash-welcome">

            <div>

                <span class="eyebrow">
                    Preparation Overview
                </span>

                <h1 id="dashTitle">
                    Welcome Back, Aspirant 👋
                </h1>

                <p>
                    Continue your preparation.
                </p>

            </div>


            <a
                class="btn btn-primary"
                href="test.html">

                Start Practice

            </a>

        </div>


        <div class="dash-metrics">

            ${[
                ["Tests Attempted","24"],
                ["Questions Solved","1,240"],
                ["Average Accuracy","84%"],
                ["Study Streak","7 Days"]
            ].map(item => `

                <div class="dash-metric">

                    <small>
                        ${item[0]}
                    </small>

                    <strong>
                        ${item[1]}
                    </strong>

                </div>

            `).join("")}

        </div>


        <div class="dash-grid">

            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Continue Learning
                    </h2>

                    <a href="course-detail.html">
                        View Course
                    </a>

                </div>


                <div class="continue-course">

                    <span class="badge">
                        SSC CGL
                    </span>

                    <h3>
                        Quantitative Aptitude
                    </h3>

                    <p>
                        Next lesson:
                        Time & Work
                    </p>


                    <div class="progress">

                        <span
                            style="
                            width:68%;
                            background:#8de0d8">
                        </span>

                    </div>


                    <div
                        class="between"
                        style="margin-top:12px">

                        <small>
                            68% Complete
                        </small>

                        <a
                            class="btn btn-secondary btn-small"
                            href="course-detail.html">

                            Continue

                        </a>

                    </div>

                </div>

            </div>


            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Target Exam
                    </h2>

                </div>

                <h2>
                    28 Days
                </h2>

                <p class="text-muted">
                    Remaining for SSC CGL 2026
                </p>

                <div class="progress">

                    <span style="width:72%"></span>

                </div>

            </div>

        </div>


        <div class="dash-grid">

            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Performance Trend
                    </h2>

                </div>

                <div class="chart-box">
                    ${chart()}
                </div>

            </div>


            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Daily Goal
                    </h2>

                </div>

                <h2>
                    37 / 50
                </h2>

                <p class="text-muted">
                    Questions completed today
                </p>

                <div class="progress">

                    <span style="width:74%"></span>

                </div>

            </div>

        </div>


        <div class="dash-grid equal">

            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Recommended Tests
                    </h2>

                </div>


                <div class="list">

                    ${[
                        ["SSC CGL Full Mock 05","100 Questions · 60 min"],
                        ["Quant Sectional 12","25 Questions · 20 min"],
                        ["Reasoning Speed Test","20 Questions · 15 min"]
                    ].map(item => `

                        <a
                            class="list-row"
                            href="test.html">

                            <span class="mini-icon">
                                ${icon("clipboard-check")}
                            </span>

                            <span>

                                <strong>
                                    ${item[0]}
                                </strong>

                                <small>
                                    ${item[1]}
                                </small>

                            </span>

                        </a>

                    `).join("")}

                </div>

            </div>


            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Weak Topics
                    </h2>

                </div>


                <div class="list">

                    ${[
                        ["Time & Work","62% Accuracy"],
                        ["Current Affairs","66% Accuracy"],
                        ["Coding-Decoding","69% Accuracy"]
                    ].map(item => `

                        <div class="list-row">

                            <span class="mini-icon">
                                ${icon("triangle-alert")}
                            </span>

                            <span style="flex:1">

                                <strong>
                                    ${item[0]}
                                </strong>

                                <small>
                                    ${item[1]}
                                </small>

                            </span>

                            <a
                                class="btn btn-small"
                                href="test.html">

                                Practice

                            </a>

                        </div>

                    `).join("")}

                </div>

            </div>

        </div>
        `

    );
}


function adminDashboard() {

    return shell(

        true,

        `
        <div class="dash-welcome">

            <div>

                <span class="eyebrow">
                    Platform Overview
                </span>

                <h1 id="dashTitle">
                    Welcome Admin
                </h1>

                <p>
                    Monitor platform activity
                    and manage content.
                </p>

            </div>


            <button
                class="btn btn-primary"
                id="addExamButton">

                + Add New Exam

            </button>

        </div>


        <div class="dash-metrics">

            ${[
                ["Students","12,450"],
                ["Exams","24"],
                ["Mock Tests","148"],
                ["Questions","25,840"]
            ].map(item => `

                <div class="dash-metric">

                    <small>
                        ${item[0]}
                    </small>

                    <strong>
                        ${item[1]}
                    </strong>

                </div>

            `).join("")}

        </div>


        <div class="dash-grid">

            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Student Growth
                    </h2>

                </div>

                <div class="chart-box">
                    ${chart()}
                </div>

            </div>


            <div class="dash-card">

                <div class="dash-card-head">

                    <h2>
                        Popular Exams
                    </h2>

                </div>


                ${[
                    ["SSC",86],
                    ["Banking",72],
                    ["Railway",61],
                    ["UPSC",46]
                ].map(item => `

                    <div style="margin-bottom:14px">

                        <div class="between">

                            <span>
                                ${item[0]}
                            </span>

                            <strong>
                                ${item[1]}%
                            </strong>

                        </div>

                        <div class="progress">

                            <span style="width:${item[1]}%"></span>

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>


        <div class="dash-card">

            <div class="dash-card-head">

                <h2>
                    Recent Students
                </h2>

            </div>


            <div class="admin-table-wrap">

                <table class="admin-table">

                    <thead>

                        <tr>

                            <th>Name</th>

                            <th>Exam</th>

                            <th>Joined</th>

                            <th>Tests</th>

                            <th>Status</th>

                        </tr>

                    </thead>


                    <tbody>

                        ${[
                            ["Aarav Mehta","SSC CGL","02 Sep 2026","6"],
                            ["Nisha Kumari","IBPS PO","02 Sep 2026","3"],
                            ["Rahul Yadav","Railway NTPC","01 Sep 2026","4"],
                            ["Sneha Rao","UPSC CSE","01 Sep 2026","2"],
                            ["Karan Singh","SSC CHSL","31 Aug 2026","8"]
                        ].map(item => `

                            <tr>

                                <td>
                                    ${item[0]}
                                </td>

                                <td>
                                    ${item[1]}
                                </td>

                                <td>
                                    ${item[2]}
                                </td>

                                <td>
                                    ${item[3]}
                                </td>

                                <td>
                                    <span class="badge badge-success">
                                        Active
                                    </span>
                                </td>

                            </tr>

                        `).join("")}

                    </tbody>

                </table>

            </div>

        </div>


        <div
            class="modal-backdrop"
            id="examModal"
            hidden>

            <form
                class="modal"
                id="examForm">

                <button
                    class="modal-close"
                    type="button"
                    id="closeExamModal">

                    ×

                </button>


                <h2>
                    Add New Exam
                </h2>


                <div class="form-group">

                    <label>
                        Exam Name
                    </label>

                    <input
                        class="field w-full"
                        required
                        placeholder="SSC CGL 2027">

                </div>


                <div class="form-group">

                    <label>
                        Category
                    </label>

                    <select
                        class="select w-full">

                        <option>
                            SSC
                        </option>

                        <option>
                            Banking
                        </option>

                        <option>
                            Railway
                        </option>

                        <option>
                            UPSC
                        </option>

                    </select>

                </div>


                <div class="form-group">

                    <label>
                        Slug
                    </label>

                    <input
                        class="field w-full"
                        required
                        placeholder="ssc-cgl-2027">

                </div>


                <div class="form-group">

                    <label>
                        Description
                    </label>

                    <textarea
                        class="field w-full"
                        required
                        style="min-height:100px;padding-top:12px">
                    </textarea>

                </div>


                <div class="modal-actions">

                    <button
                        class="btn btn-ghost"
                        type="button"
                        id="cancelExamModal">

                        Cancel

                    </button>

                    <button
                        class="btn btn-primary"
                        type="submit">

                        Create Exam

                    </button>

                </div>

            </form>

        </div>
        `

    );
}


function initSidebar() {

    const sidebar =
        document.getElementById(
            "dashSidebar"
        );


    document
        .getElementById(
            "sidebarButton"
        )
        ?.addEventListener(
            "click",
            () => {

                sidebar.classList.toggle(
                    "open"
                );

            }
        );


    document
        .querySelectorAll(
            ".dash-nav a"
        )
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    event.preventDefault();


                    document
                        .querySelectorAll(
                            ".dash-nav a"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    link.classList.add(
                        "active"
                    );


                    const title =
                        document.getElementById(
                            "dashTitle"
                        );


                    if (title) {

                        title.textContent =
                            link.dataset.section;

                    }


                    showToast(
                        `${link.dataset.section} selected.`
                    );


                    sidebar.classList.remove(
                        "open"
                    );

                }
            );

        });
}


function initAdminModal() {

    const modal =
        document.getElementById(
            "examModal"
        );


    if (!modal) {
        return;
    }


    const open = () => {
        modal.hidden = false;
    };


    const close = () => {
        modal.hidden = true;
    };


    document.getElementById(
        "addExamButton"
    ).addEventListener(
        "click",
        open
    );


    document.getElementById(
        "closeExamModal"
    ).addEventListener(
        "click",
        close
    );


    document.getElementById(
        "cancelExamModal"
    ).addEventListener(
        "click",
        close
    );


    document.getElementById(
        "examForm"
    ).addEventListener(
        "submit",
        event => {

            event.preventDefault();

            close();

            showToast(
                "Exam created in prototype mode."
            );

        }
    );
}


function initToasts() {

    document.addEventListener(
        "click",
        event => {

            const target =
                event.target.closest(
                    "[data-toast]"
                );


            if (!target) {
                return;
            }


            showToast(
                target.dataset.toast
            );

        }
    );
}


function mount() {

    const admin =
        document.body.dataset.dashboard ===
        "admin";


    document.getElementById(
        "dashboardApp"
    ).innerHTML =
        admin
            ? adminDashboard()
            : studentDashboard();


    if (window.lucide) {

        lucide.createIcons();

    }


    initSidebar();

    initAdminModal();

    initToasts();

}


document.addEventListener(
    "DOMContentLoaded",
    mount
);
