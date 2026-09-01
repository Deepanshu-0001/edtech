"use strict";


const icon = name =>
    `<i data-lucide="${name}"></i>`;


const exams = [

    {
        name: "SSC CGL",
        category: "ssc",
        type: "Graduate Level",
        date: "Tier I · Oct 2026",
        tests: 24,
        courses: 4,
        icon: "building-2"
    },

    {
        name: "SSC CHSL",
        category: "ssc",
        type: "10+2 Level",
        date: "Tier I · Nov 2026",
        tests: 18,
        courses: 3,
        icon: "files"
    },

    {
        name: "IBPS PO",
        category: "banking",
        type: "Probationary Officer",
        date: "Prelims · Oct 2026",
        tests: 28,
        courses: 4,
        icon: "landmark"
    },

    {
        name: "SBI Clerk",
        category: "banking",
        type: "Junior Associate",
        date: "Prelims · Dec 2026",
        tests: 22,
        courses: 3,
        icon: "badge-indian-rupee"
    },

    {
        name: "Railway NTPC",
        category: "railway",
        type: "Graduate & UG",
        date: "CBT · Upcoming",
        tests: 20,
        courses: 3,
        icon: "train-front"
    },

    {
        name: "UPSC CSE",
        category: "upsc",
        type: "Civil Services",
        date: "Prelims · May 2027",
        tests: 16,
        courses: 4,
        icon: "library"
    },

    {
        name: "UPPSC PCS",
        category: "state",
        type: "State Civil Services",
        date: "Prelims · Dec 2026",
        tests: 12,
        courses: 2,
        icon: "map-pinned"
    },

    {
        name: "NDA",
        category: "defence",
        type: "Defence Academy",
        date: "Written · Apr 2027",
        tests: 14,
        courses: 2,
        icon: "shield"
    }

];


const courses = [

    {
        category: "ssc",
        name: "SSC CGL Complete Preparation",
        faculty: "Rahul Sharma",
        initials: "RS",
        lessons: 120,
        tests: 25,
        language: "Hindi + English",
        validity: "12 Months",
        theme: "",
        badge: "Bestseller"
    },

    {
        category: "banking",
        name: "Banking Quant & Reasoning Mastery",
        faculty: "Neha Verma",
        initials: "NV",
        lessons: 96,
        tests: 30,
        language: "Bilingual",
        validity: "10 Months",
        theme: "green",
        badge: "Popular"
    },

    {
        category: "railway",
        name: "Railway NTPC Complete Batch",
        faculty: "Amit Kumar",
        initials: "AK",
        lessons: 88,
        tests: 22,
        language: "Hindi + English",
        validity: "9 Months",
        theme: "gold",
        badge: "Updated"
    },

    {
        category: "upsc",
        name: "UPSC Prelims GS Foundation",
        faculty: "Dr. Meera Rao",
        initials: "MR",
        lessons: 142,
        tests: 18,
        language: "Hindi + English",
        validity: "15 Months",
        theme: "violet",
        badge: "Foundation"
    },

    {
        category: "ssc",
        name: "SSC English Score Booster",
        faculty: "Priya Singh",
        initials: "PS",
        lessons: 62,
        tests: 15,
        language: "Bilingual",
        validity: "6 Months",
        theme: "",
        badge: "Focused"
    },

    {
        category: "banking",
        name: "IBPS PO Prelims Sprint",
        faculty: "Arjun Mehta",
        initials: "AM",
        lessons: 74,
        tests: 35,
        language: "Hindi + English",
        validity: "8 Months",
        theme: "green",
        badge: "Exam Ready"
    }

];


const tests = [

    {
        type: "full",
        exam: "ssc",
        name: "SSC CGL Mock Test 04",
        questions: 100,
        time: "60 Minutes",
        marks: 200,
        difficulty: "Moderate",
        badge: "FREE"
    },

    {
        type: "full",
        exam: "banking",
        name: "IBPS PO Prelims Mock 06",
        questions: 100,
        time: "60 Minutes",
        marks: 100,
        difficulty: "Moderate",
        badge: "FREE"
    },

    {
        type: "sectional",
        exam: "railway",
        name: "Railway NTPC Mathematics 03",
        questions: 30,
        time: "25 Minutes",
        marks: 30,
        difficulty: "Moderate",
        badge: "FREE"
    },

    {
        type: "previous",
        exam: "upsc",
        name: "UPSC Prelims GS Paper",
        questions: 100,
        time: "120 Minutes",
        marks: 200,
        difficulty: "Advanced",
        badge: "PYQ"
    },

    {
        type: "topic",
        exam: "ssc",
        name: "SSC Time & Work Topic Test",
        questions: 20,
        time: "15 Minutes",
        marks: 40,
        difficulty: "Moderate",
        badge: "FREE"
    },

    {
        type: "full",
        exam: "ssc",
        name: "SSC CHSL Mock Test 07",
        questions: 100,
        time: "60 Minutes",
        marks: 200,
        difficulty: "Moderate",
        badge: "NEW"
    }

];


function header() {

    return `
    <header class="site-header" id="header">

        <div class="container navbar">

            <a class="brand" href="index.html">

                <span class="brand-mark">
                    E
                </span>

                <span>
                    EXAMPREP
                </span>

            </a>


            <nav class="nav-links">

                <a class="nav-link" href="index.html">
                    Home
                </a>


                <div class="nav-item">

                    <button class="nav-link dropdown-trigger">
                        Exams
                        ${icon("chevron-down")}
                    </button>

                    <div class="dropdown-menu">

                        <a href="exams.html?category=ssc">
                            SSC
                        </a>

                        <a href="exams.html?category=banking">
                            Banking
                        </a>

                        <a href="exams.html?category=railway">
                            Railway
                        </a>

                        <a href="exams.html?category=upsc">
                            UPSC
                        </a>

                        <a href="exams.html">
                            View All Exams
                        </a>

                    </div>

                </div>


                <a class="nav-link" href="courses.html">
                    Courses
                </a>

                <a class="nav-link" href="mock-tests.html">
                    Mock Tests
                </a>

                <a class="nav-link" href="study-material.html">
                    Study Material
                </a>

                <a class="nav-link" href="current-affairs.html">
                    Current Affairs
                </a>


                <div class="nav-item">

                    <button class="nav-link dropdown-trigger">
                        More
                        ${icon("chevron-down")}
                    </button>

                    <div class="dropdown-menu">

                        <a href="study-material.html">
                            Previous Papers
                        </a>

                        <a href="current-affairs.html">
                            Blog
                        </a>

                        <a href="index.html#faculty">
                            Faculty
                        </a>

                        <a href="#siteFooter">
                            Help Desk
                        </a>

                    </div>

                </div>

            </nav>


            <div class="nav-actions">

                <a class="nav-link" href="login.html">
                    Login
                </a>

                <a class="btn btn-primary btn-small"
                   href="dashboard.html">
                    Start Learning
                </a>

                <button
                    class="icon-btn mobile-menu-trigger"
                    id="mobileMenuButton">

                    ${icon("menu")}

                </button>

            </div>

        </div>


        <nav class="mobile-nav" id="mobileNav">

            <a href="index.html">
                Home
            </a>

            <a href="exams.html">
                Exams
            </a>

            <a href="courses.html">
                Courses
            </a>

            <a href="mock-tests.html">
                Mock Tests
            </a>

            <a href="study-material.html">
                Study Material
            </a>

            <a href="current-affairs.html">
                Current Affairs
            </a>

            <a href="dashboard.html">
                Student Dashboard
            </a>

            <a href="login.html">
                Login
            </a>

        </nav>

    </header>
    `;
}


function footer() {

    return `
    <footer class="site-footer" id="siteFooter">

        <div class="container">

            <div class="footer-grid">

                <div class="footer-about">

                    <a class="brand" href="index.html">

                        <span class="brand-mark">
                            E
                        </span>

                        EXAMPREP

                    </a>

                    <p>
                        Government exam preparation with
                        structured learning, realistic mock tests
                        and performance analytics.
                    </p>

                </div>


                <div class="footer-col">

                    <h4>
                        Popular Exams
                    </h4>

                    <a href="exams.html">
                        SSC
                    </a>

                    <a href="exams.html">
                        Banking
                    </a>

                    <a href="exams.html">
                        Railway
                    </a>

                    <a href="exams.html">
                        UPSC
                    </a>

                </div>


                <div class="footer-col">

                    <h4>
                        Resources
                    </h4>

                    <a href="mock-tests.html">
                        Mock Tests
                    </a>

                    <a href="study-material.html">
                        Study Material
                    </a>

                    <a href="current-affairs.html">
                        Current Affairs
                    </a>

                </div>


                <div class="footer-col">

                    <h4>
                        Company
                    </h4>

                    <a href="#">
                        About
                    </a>

                    <a href="#">
                        Blog
                    </a>

                    <a href="#faculty">
                        Faculty
                    </a>

                </div>


                <div class="footer-col">

                    <h4>
                        Support
                    </h4>

                    <a href="#">
                        Help Desk
                    </a>

                    <a href="#">
                        Privacy
                    </a>

                    <a href="admin.html">
                        Admin Demo
                    </a>

                </div>

            </div>


            <div class="footer-bottom">

                Prototype demonstration only.
                All numbers and exam content are mock data.

            </div>

        </div>

    </footer>
    `;
}


function examCard(exam) {

    return `
    <article
        class="card card-hover exam-card filter-item"
        data-category="${exam.category}">

        <span class="icon-tile">
            ${icon(exam.icon)}
        </span>

        <span class="badge">
            ${exam.type}
        </span>

        <h3 style="margin-top:12px">
            ${exam.name}
        </h3>

        <p>
            ${exam.date}
        </p>

        <div class="course-meta">

            <span>
                ${exam.tests} Mock Tests
            </span>

            <span>
                ${exam.courses} Courses
            </span>

        </div>

        <a
            class="link-arrow"
            href="exam-detail.html">

            View Exam →

        </a>

    </article>
    `;
}


function courseCard(course) {

    return `
    <article
        class="card card-hover course-card filter-item"
        data-category="${course.category}">

        <div class="course-thumb ${course.theme}">

            <span class="badge">
                ${course.badge}
            </span>

            <h3>
                ${course.name}
            </h3>

        </div>


        <div class="course-body">

            <div class="faculty-row">

                <span class="avatar">
                    ${course.initials}
                </span>

                <span>
                    Faculty ·
                    <strong>
                        ${course.faculty}
                    </strong>
                </span>

            </div>


            <div class="course-meta">

                <span>
                    ${course.lessons}+ Lessons
                </span>

                <span>
                    ${course.tests} Tests
                </span>

                <span>
                    ${course.language}
                </span>

                <span>
                    ${course.validity}
                </span>

            </div>


            <a
                class="btn btn-secondary w-full"
                href="course-detail.html">

                Explore Course

            </a>

        </div>

    </article>
    `;
}


function testCard(test) {

    return `
    <article
        class="card card-hover test-card filter-item"
        data-category="${test.type}">

        <span class="badge badge-success">
            ${test.badge}
        </span>

        <h3 style="margin-top:15px">
            ${test.name}
        </h3>

        <p>
            Latest-pattern practice with
            detailed solutions.
        </p>


        <div class="test-specs">

            <div>
                <span>
                    Questions
                </span>
                <strong>
                    ${test.questions}
                </strong>
            </div>

            <div>
                <span>
                    Time
                </span>
                <strong>
                    ${test.time}
                </strong>
            </div>

            <div>
                <span>
                    Marks
                </span>
                <strong>
                    ${test.marks}
                </strong>
            </div>

            <div>
                <span>
                    Difficulty
                </span>
                <strong>
                    ${test.difficulty}
                </strong>
            </div>

        </div>


        <a
            class="btn btn-primary w-full"
            href="test.html">

            Start Test

        </a>

    </article>
    `;
}


function homePage() {

    return `
    <section class="hero">

        <div class="container hero-grid">

            <div class="hero-copy reveal">

                <span class="pill">

                    ${icon("sparkles")}

                    #1 Preparation Platform for Aspirants

                </span>


                <h1>

                    Prepare Smarter.

                    <br>

                    Practice Better.

                    <br>

                    <span>
                        Crack Your Exam.
                    </span>

                </h1>


                <p>

                    Prepare for government and competitive exams
                    with structured courses, realistic mock tests,
                    study material, current affairs and performance
                    insights — all in one place.

                </p>


                <div class="hero-actions">

                    <a
                        class="btn btn-primary btn-large"
                        href="dashboard.html">

                        Start Preparing Free

                    </a>

                    <a
                        class="btn btn-secondary btn-large"
                        href="test.html">

                        Take Free Mock Test

                    </a>

                </div>


                <div class="hero-points">

                    <span>
                        ${icon("circle-check")}
                        Free Mock Tests
                    </span>

                    <span>
                        ${icon("circle-check")}
                        Detailed Solutions
                    </span>

                    <span>
                        ${icon("circle-check")}
                        Performance Analysis
                    </span>

                </div>


                <div class="trust-row">

                    <div class="avatar-stack">

                        <span class="avatar">
                            AS
                        </span>

                        <span class="avatar teal">
                            NK
                        </span>

                        <span class="avatar gold">
                            PR
                        </span>

                        <span class="avatar rose">
                            SM
                        </span>

                    </div>

                    <div>

                        <strong>
                            10K+ Aspirants Learning
                        </strong>

                        <small>
                            One focused preparation workspace.
                        </small>

                    </div>

                </div>

            </div>


            <div class="hero-product reveal">

                <div class="product-window">

                    <div class="window-top">
                        <i></i>
                        <i></i>
                        <i></i>
                    </div>

                    <div class="window-body">

                        <aside class="mini-sidebar">

                            <div class="mini-logo"></div>

                            <div class="mini-nav active"></div>

                            <div class="mini-nav"></div>

                            <div class="mini-nav"></div>

                            <div class="mini-nav"></div>

                        </aside>


                        <div class="mini-main">

                            <div class="mini-title"></div>

                            <div class="mini-metrics">

                                <div class="mini-metric">
                                    <i></i>
                                    <b></b>
                                </div>

                                <div class="mini-metric">
                                    <i></i>
                                    <b></b>
                                </div>

                                <div class="mini-metric">
                                    <i></i>
                                    <b></b>
                                </div>

                            </div>


                            <div class="mini-chart">

                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>
                                <span></span>

                            </div>

                        </div>

                    </div>

                </div>


                <div class="float-card result">

                    <small>
                        Mock Test Result
                    </small>

                    <strong>
                        82 / 100
                    </strong>

                    <small>
                        Accuracy 87%
                    </small>

                </div>


                <div class="float-card performance">

                    <small>
                        Performance
                    </small>

                    <strong class="text-success">
                        ↑ 18%
                    </strong>

                    <small>
                        Last 4 weeks
                    </small>

                </div>


                <div class="float-card exam">

                    <small>
                        Next Exam
                    </small>

                    <strong>
                        SSC CGL
                    </strong>

                    <small>
                        28 Days Left
                    </small>

                </div>


                <div class="float-card streak">

                    <small>
                        Study Streak
                    </small>

                    <strong>
                        🔥 7 Days
                    </strong>

                </div>

            </div>

        </div>

    </section>


    <section class="stats-strip">

        <div class="container stats-grid">

            <div class="stat">

                <strong data-counter="10">
                    0
                </strong>

                <span>
                    10K+ Students
                </span>

            </div>


            <div class="stat">

                <strong data-counter="120">
                    0
                </strong>

                <span>
                    Mock Tests
                </span>

            </div>


            <div class="stat">

                <strong data-counter="25">
                    0
                </strong>

                <span>
                    25K+ Questions
                </span>

            </div>


            <div class="stat">

                <strong data-counter="20">
                    0
                </strong>

                <span>
                    Exams
                </span>

            </div>

        </div>

    </section>


    <section class="section section-soft">

        <div class="container">

            <div class="section-heading">

                <span class="eyebrow">
                    Exam Categories
                </span>

                <h2>
                    Choose Your Exam
                </h2>

                <p>
                    Start your preparation with the
                    exam you're targeting.
                </p>

            </div>


            <div class="exam-grid">

                ${exams.slice(0,8).map(examCard).join("")}

            </div>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="search-band reveal">

                <h2>
                    What Are You Preparing For?
                </h2>

                <p>
                    Find your target exam and start
                    preparing immediately.
                </p>


                <div class="search-shell">

                    ${icon("search")}

                    <input
                        id="examSearch"
                        placeholder="Search SSC CGL, IBPS PO, Railway NTPC...">

                    <button
                        class="btn btn-primary"
                        id="examSearchButton">

                        Search Exam

                    </button>

                </div>


                <div class="search-suggestions">

                    <button data-search="SSC CGL">
                        SSC CGL
                    </button>

                    <button data-search="IBPS PO">
                        IBPS PO
                    </button>

                    <button data-search="Railway NTPC">
                        Railway NTPC
                    </button>

                    <button data-search="UPSC CSE">
                        UPSC CSE
                    </button>

                </div>

            </div>

        </div>

    </section>


    <section class="section section-soft">

        <div class="container">

            <div class="section-heading">

                <span class="eyebrow">
                    Structured Learning
                </span>

                <h2>
                    Popular Courses
                </h2>

                <p>
                    Focused learning paths for
                    competitive examinations.
                </p>

            </div>


            <div
                class="tabs"
                data-filter-group="courses">

                <button
                    class="tab-btn active"
                    data-filter="all">

                    All

                </button>

                <button
                    class="tab-btn"
                    data-filter="ssc">

                    SSC

                </button>

                <button
                    class="tab-btn"
                    data-filter="banking">

                    Banking

                </button>

                <button
                    class="tab-btn"
                    data-filter="railway">

                    Railway

                </button>

                <button
                    class="tab-btn"
                    data-filter="upsc">

                    UPSC

                </button>

            </div>


            <div
                class="course-grid"
                data-filter-container="courses">

                ${courses.map(courseCard).join("")}

            </div>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="section-heading">

                <span class="eyebrow">
                    Exam-like Practice
                </span>

                <h2>
                    Practice Like It's Exam Day
                </h2>

                <p>
                    Attempt full-length, sectional and
                    topic-wise tests based on the
                    latest exam pattern.
                </p>

            </div>


            <div
                class="tabs"
                data-filter-group="tests">

                <button
                    class="tab-btn active"
                    data-filter="all">

                    All Tests

                </button>

                <button
                    class="tab-btn"
                    data-filter="full">

                    Full Tests

                </button>

                <button
                    class="tab-btn"
                    data-filter="sectional">

                    Sectional

                </button>

                <button
                    class="tab-btn"
                    data-filter="topic">

                    Topic Tests

                </button>

                <button
                    class="tab-btn"
                    data-filter="previous">

                    Previous Year

                </button>

            </div>


            <div
                class="test-grid"
                data-filter-container="tests">

                ${tests.map(testCard).join("")}

            </div>

        </div>

    </section>


    <section class="section section-blue">

        <div class="container preview-grid">

            <div>

                <span class="eyebrow">
                    Performance Intelligence
                </span>

                <h2>
                    Know Exactly Where You Stand
                </h2>

                <p class="text-muted">

                    Track accuracy, identify weak subjects,
                    monitor score trends and make better
                    preparation decisions.

                </p>


                <div class="benefit-list">

                    <span>
                        ✓ Track Accuracy
                    </span>

                    <span>
                        ✓ Find Weak Subjects
                    </span>

                    <span>
                        ✓ Monitor Progress
                    </span>

                    <span>
                        ✓ Improve Test Strategy
                    </span>

                </div>


                <a
                    class="btn btn-primary"
                    href="dashboard.html">

                    Explore Your Dashboard

                </a>

            </div>


            <div class="fake-dashboard">

                <div class="fake-dashboard-inner">

                    <aside class="fake-side">

                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>
                        <i></i>

                    </aside>


                    <div class="fake-main">

                        <strong>
                            Welcome Back, Aspirant
                        </strong>


                        <div class="fake-metrics">

                            <div class="fake-metric">

                                <span>
                                    Tests Attempted
                                </span>

                                <strong>
                                    24
                                </strong>

                            </div>


                            <div class="fake-metric">

                                <span>
                                    Average Score
                                </span>

                                <strong>
                                    72%
                                </strong>

                            </div>


                            <div class="fake-metric">

                                <span>
                                    Accuracy
                                </span>

                                <strong>
                                    84%
                                </strong>

                            </div>


                            <div class="fake-metric">

                                <span>
                                    Study Streak
                                </span>

                                <strong>
                                    7 Days
                                </strong>

                            </div>

                        </div>


                        <div class="fake-chart">

                            <svg
                                width="100%"
                                height="100%"
                                viewBox="0 0 500 150"
                                preserveAspectRatio="none">

                                <path
                                    d="M0 125 C70 100 100 110 160 80 S250 95 310 55 S410 75 500 25"
                                    fill="none"
                                    stroke="#4567e8"
                                    stroke-width="4"/>

                            </svg>

                        </div>

                    </div>

                </div>

            </div>

        </div>

    </section>


    <section class="section section-soft">

        <div class="container">

            <div class="section-heading center">

                <span class="eyebrow">
                    Why EXAMPREP
                </span>

                <h2>
                    Built for Serious Preparation
                </h2>

            </div>


            <div class="feature-grid">

                ${[
                    ["scan-line","Real Exam Pattern","Practice in test formats designed around actual exam structures."],
                    ["book-check","Detailed Solutions","Understand the reasoning behind each answer after practice."],
                    ["chart-no-axes-combined","Performance Analytics","Turn your attempts into clear improvement signals."],
                    ["users","Expert Faculty","Learn important concepts from experienced subject educators."],
                    ["languages","Bilingual Learning","Prepare using Hindi and English learning experiences."],
                    ["bell-ring","Regular Updates","Keep exam milestones and important preparation updates visible."]
                ].map(item => `

                    <article class="card card-hover feature-card">

                        <span class="icon-tile">
                            ${icon(item[0])}
                        </span>

                        <h3>
                            ${item[1]}
                        </h3>

                        <p>
                            ${item[2]}
                        </p>

                    </article>

                `).join("")}

            </div>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="section-heading">

                <span class="eyebrow">
                    Preparation Library
                </span>

                <h2>
                    Everything You Need to Prepare
                </h2>

            </div>


            <div class="material-grid">

                ${[
                    ["newspaper","Daily Current Affairs"],
                    ["files","Previous Year Papers"],
                    ["notebook-text","PDF Notes"],
                    ["list-checks","Exam Syllabus"],
                    ["circle-help","Practice Questions"],
                    ["calendar-days","Monthly Current Affairs"]
                ].map(item => `

                    <article class="card card-hover material-card">

                        <span class="icon-tile">
                            ${icon(item[0])}
                        </span>

                        <h3>
                            ${item[1]}
                        </h3>

                        <p>
                            Structured exam-focused resources
                            designed for quick revision.
                        </p>

                        <a
                            class="link-arrow"
                            href="study-material.html">

                            Explore →

                        </a>

                    </article>

                `).join("")}

            </div>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="section-heading center">

                <span class="eyebrow">
                    Common Questions
                </span>

                <h2>
                    Frequently Asked Questions
                </h2>

            </div>


            <div class="faq-list">

                ${[
                    ["Is registration free?","Yes. The prototype shows a free starting experience with selected resources."],
                    ["Which exams are available?","SSC, Banking, Railway, UPSC, State exams, Defence and other categories are represented."],
                    ["Are mock tests bilingual?","The interface is designed to support Hindi and English test experiences."],
                    ["Can I review solutions?","Yes. The result flow includes detailed analysis and solution review."],
                    ["Can I track performance?","Yes. The dashboard shows accuracy, score trends and weak topics."],
                    ["Does it work on mobile?","Yes. The prototype includes responsive public, dashboard and mock-test layouts."]
                ].map(item => `

                    <div class="faq">

                        <button class="faq-question">

                            ${item[0]}

                            ${icon("chevron-down")}

                        </button>

                        <div class="faq-answer">

                            ${item[1]}

                        </div>

                    </div>

                `).join("")}

            </div>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="final-cta">

                <span class="eyebrow"
                      style="color:#aebfff">

                    Start Your Preparation

                </span>

                <h2>
                    Your Next Attempt Can Be
                    Your Best Attempt.
                </h2>

                <p>

                    Start preparing with structured learning,
                    realistic mock tests and clear performance
                    insights.

                </p>


                <div class="hero-actions">

                    <a
                        class="btn btn-primary btn-large"
                        href="dashboard.html">

                        Start Learning Free

                    </a>

                    <a
                        class="btn btn-secondary btn-large"
                        href="test.html">

                        Take Free Mock Test

                    </a>

                </div>

            </div>

        </div>

    </section>
    `;
}


function examsPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <div class="breadcrumb">
                Home / Exams
            </div>

            <span class="eyebrow">
                Government Exams
            </span>

            <h1>
                Explore Government Exams
            </h1>

            <p>

                Select your target examination and access
                mock tests, courses and preparation resources.

            </p>

        </div>

    </section>


    <section class="section">

        <div class="container">


            <div class="filter-toolbar">

                <div
                    class="tabs"
                    data-filter-group="examlist">

                    <button
                        class="filter-btn active"
                        data-filter="all">
                        All Exams
                    </button>

                    <button
                        class="filter-btn"
                        data-filter="ssc">
                        SSC
                    </button>

                    <button
                        class="filter-btn"
                        data-filter="banking">
                        Banking
                    </button>

                    <button
                        class="filter-btn"
                        data-filter="railway">
                        Railway
                    </button>

                    <button
                        class="filter-btn"
                        data-filter="upsc">
                        UPSC
                    </button>

                    <button
                        class="filter-btn"
                        data-filter="state">
                        State
                    </button>

                    <button
                        class="filter-btn"
                        data-filter="defence">
                        Defence
                    </button>

                </div>


                <div class="compact-search">

                    <input
                        class="field"
                        id="listingSearch"
                        placeholder="Search exams...">

                </div>

            </div>


            <div
                class="exam-grid"
                data-filter-container="examlist">

                ${exams.map(examCard).join("")}

            </div>

        </div>

    </section>
    `;
}


function examDetailPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <div class="breadcrumb">
                Home / Exams / SSC CGL
            </div>

            <span class="badge badge-primary">
                SSC · Graduate Level
            </span>

            <h1>
                SSC CGL 2026
            </h1>

            <p>
                Staff Selection Commission
                Combined Graduate Level Examination
            </p>


            <div class="hero-actions">

                <a
                    class="btn btn-primary"
                    href="course-detail.html">

                    Start Preparation

                </a>

                <a
                    class="btn btn-secondary"
                    href="test.html">

                    Take Mock Test

                </a>

            </div>

        </div>

    </section>


    <nav class="detail-tabs">

        <a href="#overview">Overview</a>

        <a href="#updates">Latest Updates</a>

        <a href="#dates">Important Dates</a>

        <a href="#eligibility">Eligibility</a>

        <a href="#pattern">Exam Pattern</a>

        <a href="#syllabus">Syllabus</a>

        <a href="#preparation">Preparation</a>

    </nav>


    <div class="container detail-content">

        <main>

            <section
                class="content-card"
                id="overview">

                <h2>
                    SSC CGL Overview
                </h2>

                <p>

                    This prototype presents SSC CGL as
                    one complete preparation journey containing
                    courses, mock tests, previous papers and
                    performance analytics.

                </p>

            </section>


            <section
                class="content-card"
                id="updates">

                <h2>
                    Latest Updates
                </h2>

                <p>

                    Application and examination milestones can
                    be managed from the administration dashboard.

                </p>

            </section>


            <section
                class="content-card"
                id="dates">

                <h2>
                    Important Dates
                </h2>

                <ul>

                    <li>
                        Application Opens:
                        01 September 2026
                    </li>

                    <li>
                        Prototype Last Date:
                        15 September 2026
                    </li>

                    <li>
                        Tier I:
                        October 2026
                    </li>

                </ul>

            </section>


            <section
                class="content-card"
                id="eligibility">

                <h2>
                    Eligibility
                </h2>

                <p>
                    Graduation-level qualification is
                    represented for prototype purposes.
                </p>

            </section>


            <section
                class="content-card"
                id="pattern">

                <h2>
                    Exam Pattern
                </h2>

                <ul>

                    <li>
                        General Intelligence & Reasoning
                    </li>

                    <li>
                        General Awareness
                    </li>

                    <li>
                        Quantitative Aptitude
                    </li>

                    <li>
                        English Comprehension
                    </li>

                </ul>

            </section>


            <section
                class="content-card"
                id="syllabus">

                <h2>
                    Syllabus
                </h2>

                <p>

                    Arithmetic, algebra, reasoning, vocabulary,
                    grammar, history, polity, geography,
                    economics, science and current affairs.

                </p>

            </section>


            <section
                class="content-card"
                id="preparation">

                <h2>
                    Preparation Strategy
                </h2>

                <p>

                    Learn concepts, practise topic tests,
                    attempt sectional tests and analyse
                    full-length mock performance.

                </p>

            </section>

        </main>


        <aside>

            <div class="card side-card">

                <span class="badge badge-primary">
                    Target Exam
                </span>

                <h3 style="margin-top:15px">
                    SSC CGL 2026
                </h3>

                <p class="text-muted">

                    Build a structured preparation plan
                    around lessons, practice and analysis.

                </p>

                <div class="progress">
                    <span style="width:28%"></span>
                </div>

                <a
                    class="btn btn-primary w-full"
                    style="margin-top:18px"
                    href="dashboard.html">

                    Open Dashboard

                </a>

            </div>

        </aside>

    </div>
    `;
}


function coursesPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <span class="eyebrow">
                Courses
            </span>

            <h1>
                Learn With a Clear Preparation Plan
            </h1>

            <p>

                Choose structured courses designed around
                exam concepts, practice and revision.

            </p>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div
                class="tabs"
                data-filter-group="courselist">

                <button
                    class="filter-btn active"
                    data-filter="all">
                    All
                </button>

                <button
                    class="filter-btn"
                    data-filter="ssc">
                    SSC
                </button>

                <button
                    class="filter-btn"
                    data-filter="banking">
                    Banking
                </button>

                <button
                    class="filter-btn"
                    data-filter="railway">
                    Railway
                </button>

                <button
                    class="filter-btn"
                    data-filter="upsc">
                    UPSC
                </button>

            </div>


            <div
                class="course-grid"
                data-filter-container="courselist">

                ${courses.map(courseCard).join("")}

            </div>

        </div>

    </section>
    `;
}


function courseDetailPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <span class="badge badge-success">
                Free Course
            </span>

            <h1>
                SSC CGL Complete Preparation Course
            </h1>

            <p>

                Complete Quantitative Aptitude, Reasoning,
                English and General Awareness preparation.

            </p>

        </div>

    </section>


    <section class="section">

        <div class="container detail-content">

            <main>

                <section class="content-card">

                    <h2>
                        Course Overview
                    </h2>

                    <p>

                        A structured learning path with
                        concept lessons, revision,
                        practice sets and mock tests.

                    </p>

                </section>


                <section class="content-card">

                    <h2>
                        What You'll Learn
                    </h2>

                    <ul>

                        <li>
                            Quantitative Aptitude
                        </li>

                        <li>
                            General Intelligence & Reasoning
                        </li>

                        <li>
                            English Language
                        </li>

                        <li>
                            General Awareness
                        </li>

                    </ul>

                </section>


                <section class="content-card">

                    <h2>
                        Curriculum
                    </h2>

                    <p>
                        120+ structured video lessons
                        and revision sessions.
                    </p>

                </section>


                <section class="content-card">

                    <h2>
                        Faculty
                    </h2>

                    <div class="faculty-row">

                        <span class="avatar">
                            RS
                        </span>

                        Rahul Sharma ·
                        Quantitative Aptitude ·
                        8+ Years Experience

                    </div>

                </section>

            </main>


            <aside>

                <div class="card side-card">

                    <span class="badge badge-success">
                        Prototype Access
                    </span>

                    <h2 style="margin-top:14px">
                        FREE COURSE
                    </h2>

                    <p class="text-muted">
                        120+ Lessons
                    </p>

                    <p class="text-muted">
                        25 Mock Tests
                    </p>

                    <p class="text-muted">
                        Hindi + English
                    </p>

                    <a
                        class="btn btn-primary w-full"
                        href="dashboard.html">

                        Start Learning

                    </a>

                </div>

            </aside>

        </div>

    </section>
    `;
}


function mockTestsPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <span class="eyebrow">
                Mock Tests
            </span>

            <h1>
                Test Your Preparation
            </h1>

            <p>

                Full-length, sectional, topic-wise and
                previous-year exam practice.

            </p>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div
                class="tabs"
                data-filter-group="mocklist">

                <button
                    class="filter-btn active"
                    data-filter="all">
                    All Tests
                </button>

                <button
                    class="filter-btn"
                    data-filter="full">
                    Full Tests
                </button>

                <button
                    class="filter-btn"
                    data-filter="sectional">
                    Sectional
                </button>

                <button
                    class="filter-btn"
                    data-filter="topic">
                    Topic
                </button>

                <button
                    class="filter-btn"
                    data-filter="previous">
                    Previous Year
                </button>

            </div>


            <div
                class="test-grid"
                data-filter-container="mocklist">

                ${tests.map(testCard).join("")}

            </div>

        </div>

    </section>
    `;
}


function materialsPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <span class="eyebrow">
                Study Material
            </span>

            <h1>
                Your Preparation Library
            </h1>

            <p>

                Exam-oriented notes, previous papers,
                question sets and revision resources.

            </p>

        </div>

    </section>


    <section class="section">

        <div class="container material-grid">

            ${[
                ["newspaper","Daily Current Affairs"],
                ["files","Previous Year Papers"],
                ["notebook-text","PDF Notes"],
                ["list-checks","Exam Syllabus"],
                ["circle-help","Practice Questions"],
                ["calendar-days","Monthly Current Affairs"],
                ["calculator","Formula Sheets"],
                ["bookmark","Saved Resources"],
                ["calendar-clock","Exam Calendar"]
            ].map(item => `

                <article class="card card-hover material-card">

                    <span class="icon-tile">
                        ${icon(item[0])}
                    </span>

                    <h3>
                        ${item[1]}
                    </h3>

                    <p>

                        Structured revision material designed
                        for competitive-exam preparation.

                    </p>

                    <button
                        class="btn btn-secondary"
                        data-toast="${item[1]} opened in prototype mode.">

                        Explore

                    </button>

                </article>

            `).join("")}

        </div>

    </section>
    `;
}


function affairsPage() {

    return `
    <section class="page-hero">

        <div class="container">

            <span class="eyebrow">
                Current Affairs
            </span>

            <h1>
                Current Affairs Without the Noise
            </h1>

            <p>

                Daily, weekly and monthly
                exam-oriented revision briefs.

            </p>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="tabs">

                <button class="tab-btn active">
                    Daily
                </button>

                <button class="tab-btn">
                    Weekly
                </button>

                <button class="tab-btn">
                    Monthly
                </button>

            </div>


            <div class="material-grid">

                ${[
                    ["National","Key government initiatives for competitive exams"],
                    ["Economy","Important economic indicators for quick revision"],
                    ["International","International affairs weekly roundup"],
                    ["Science & Tech","Important science and technology developments"],
                    ["Sports","Major sports events, awards and records"],
                    ["Appointments","Important appointments and organisations"]
                ].map(item => `

                    <article class="card card-hover material-card">

                        <span class="badge badge-primary">
                            ${item[0]}
                        </span>

                        <h3 style="margin-top:15px">
                            ${item[1]}
                        </h3>

                        <p>

                            Exam-focused summary with
                            revision points and key facts.

                        </p>

                        <button
                            class="link-arrow"
                            data-toast="Article opened in prototype mode."
                            style="border:0;background:none;padding:0">

                            Read Article →

                        </button>

                    </article>

                `).join("")}

            </div>

        </div>

    </section>
    `;
}


function resultPage() {

    let result = {

        score: 74,
        maxScore: 100,
        correct: 74,
        incorrect: 16,
        unattempted: 10,
        accuracy: 82,
        percentile: 78,
        time: "52m 14s"

    };


    try {

        const saved =
            JSON.parse(
                localStorage.getItem(
                    "examPrepResult"
                )
            );

        if (saved) {

            result =
                {
                    ...result,
                    ...saved
                };

        }

    } catch (error) {

        console.warn(
            "Unable to read previous result.",
            error
        );

    }


    return `
    <section class="result-hero">

        <div class="container">

            <span class="pill">
                Test Complete
            </span>

            <h1>
                Great Work!
            </h1>

            <p class="text-muted">
                Here's your SSC CGL mock-test performance.
            </p>


            <div class="score-circle">

                <div>

                    <strong>
                        ${result.score}
                        /
                        ${result.maxScore}
                    </strong>

                    <small>
                        Your Score
                    </small>

                </div>

            </div>


            <div class="hero-actions"
                 style="justify-content:center">

                <a
                    class="btn btn-secondary"
                    href="test.html">

                    Reattempt Test

                </a>

                <a
                    class="btn btn-primary"
                    href="dashboard.html">

                    Back to Dashboard

                </a>

            </div>

        </div>

    </section>


    <section class="section">

        <div class="container">

            <div class="result-metrics">

                <div class="card result-metric">

                    <small>
                        Correct
                    </small>

                    <strong>
                        ${result.correct}
                    </strong>

                </div>


                <div class="card result-metric">

                    <small>
                        Incorrect
                    </small>

                    <strong>
                        ${result.incorrect}
                    </strong>

                </div>


                <div class="card result-metric">

                    <small>
                        Unattempted
                    </small>

                    <strong>
                        ${result.unattempted}
                    </strong>

                </div>


                <div class="card result-metric">

                    <small>
                        Accuracy
                    </small>

                    <strong>
                        ${result.accuracy}%
                    </strong>

                </div>


                <div class="card result-metric">

                    <small>
                        Percentile
                    </small>

                    <strong>
                        ${result.percentile}%
                    </strong>

                </div>


                <div class="card result-metric">

                    <small>
                        Time Taken
                    </small>

                    <strong>
                        ${result.time}
                    </strong>

                </div>

            </div>


            <div class="analytics-grid">

                <div class="card analytics-card">

                    <h3>
                        Performance Trend
                    </h3>

                    <svg
                        width="100%"
                        height="240"
                        viewBox="0 0 700 240"
                        preserveAspectRatio="none">

                        <g
                            stroke="#e7ebf2"
                            stroke-width="1">

                            <line
                                x1="0"
                                y1="50"
                                x2="700"
                                y2="50"/>

                            <line
                                x1="0"
                                y1="110"
                                x2="700"
                                y2="110"/>

                            <line
                                x1="0"
                                y1="170"
                                x2="700"
                                y2="170"/>

                        </g>

                        <path
                            d="M0 185 C80 165 110 172 170 140 S260 155 320 110 S420 125 480 85 S600 95 700 40"
                            fill="none"
                            stroke="#4567e8"
                            stroke-width="4"/>

                    </svg>

                </div>


                <div class="card analytics-card">

                    <h3>
                        Subject Breakdown
                    </h3>


                    <div class="subject-list">

                        ${[
                            ["Quantitative Aptitude",80],
                            ["Reasoning",72],
                            ["English",88],
                            ["General Awareness",64]
                        ].map(item => `

                            <div class="subject-row">

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

            </div>

        </div>

    </section>
    `;
}


function loginPage() {

    return `
    <div class="auth-shell">

        <section class="auth-brand">

            <a class="brand"
               href="index.html">

                <span class="brand-mark">
                    E
                </span>

                EXAMPREP

            </a>


            <div>

                <span class="eyebrow"
                      style="color:#9cb2ff">

                    One Preparation Workspace

                </span>

                <h1>
                    Make Every Study Session Count.
                </h1>

                <p>

                    Continue courses, practise mock tests
                    and understand your performance
                    from one focused dashboard.

                </p>

            </div>


            <small>
                Structured Learning · Mock Tests · Analytics
            </small>

        </section>


        <section class="auth-main">

            <form class="auth-card"
                  id="loginForm">

                <span class="pill">
                    Student Login
                </span>

                <h2 style="margin-top:18px">
                    Welcome Back
                </h2>

                <p class="text-muted">
                    Login to continue your preparation.
                </p>


                <div class="form-group">

                    <label for="email">
                        Email
                    </label>

                    <input
                        class="field"
                        id="email"
                        type="email"
                        required
                        placeholder="aspirant@example.com">

                </div>


                <div class="form-group">

                    <label for="password">
                        Password
                    </label>

                    <input
                        class="field"
                        id="password"
                        type="password"
                        required
                        placeholder="Enter your password">

                </div>


                <button
                    class="btn btn-primary w-full"
                    type="submit">

                    Login

                </button>


                <div class="divider">
                    OR
                </div>


                <button
                    class="btn btn-secondary w-full"
                    type="button"
                    data-toast="Google login is visual-only in this prototype.">

                    Continue with Google

                </button>


                <p
                    class="text-muted"
                    style="text-align:center;margin-top:20px">

                    Don't have an account?

                    <a
                        href="#"
                        style="color:#4567e8;font-weight:700">

                        Create Account

                    </a>

                </p>

            </form>

        </section>

    </div>
    `;
}


const pages = {

    home: homePage,

    exams: examsPage,

    "exam-detail":
        examDetailPage,

    courses: coursesPage,

    "course-detail":
        courseDetailPage,

    "mock-tests":
        mockTestsPage,

    "study-material":
        materialsPage,

    "current-affairs":
        affairsPage,

    result:
        resultPage,

    login:
        loginPage

};


function showToast(message) {

    const toast =
        document.getElementById("toast");

    if (!toast) {
        return;
    }

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
            2400
        );
}


function initFilters() {

    document
        .querySelectorAll(
            "[data-filter-group]"
        )
        .forEach(group => {

            const name =
                group.dataset.filterGroup;


            group.addEventListener(
                "click",
                event => {

                    const button =
                        event.target.closest(
                            "[data-filter]"
                        );


                    if (!button) {
                        return;
                    }


                    group
                        .querySelectorAll(
                            "[data-filter]"
                        )
                        .forEach(item => {

                            item.classList.remove(
                                "active"
                            );

                        });


                    button.classList.add(
                        "active"
                    );


                    const value =
                        button.dataset.filter;


                    const container =
                        document.querySelector(
                            `[data-filter-container="${name}"]`
                        );


                    if (!container) {
                        return;
                    }


                    container
                        .querySelectorAll(
                            ".filter-item"
                        )
                        .forEach(item => {

                            const visible =
                                value === "all" ||
                                item.dataset.category === value;


                            item.classList.toggle(
                                "hidden",
                                !visible
                            );

                        });

                }
            );

        });
}


function initMenu() {

    const button =
        document.getElementById(
            "mobileMenuButton"
        );


    const menu =
        document.getElementById(
            "mobileNav"
        );


    if (!button || !menu) {
        return;
    }


    button.addEventListener(
        "click",
        () => {

            const opened =
                menu.classList.toggle(
                    "open"
                );


            document.body
                .classList.toggle(
                    "menu-open",
                    opened
                );

        }
    );
}


function initDropdowns() {

    document
        .querySelectorAll(
            ".dropdown-trigger"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                event => {

                    event.stopPropagation();

                    button
                        .closest(".nav-item")
                        .classList.toggle(
                            "open"
                        );

                }
            );

        });


    document.addEventListener(
        "click",
        () => {

            document
                .querySelectorAll(
                    ".nav-item.open"
                )
                .forEach(item => {

                    item.classList.remove(
                        "open"
                    );

                });

        }
    );
}


function initHeader() {

    const header =
        document.getElementById(
            "header"
        );


    if (!header) {
        return;
    }


    const update = () => {

        header.classList.toggle(
            "scrolled",
            window.scrollY > 8
        );

    };


    update();


    window.addEventListener(
        "scroll",
        update,
        {
            passive: true
        }
    );
}


function initFAQ() {

    document
        .querySelectorAll(
            ".faq-question"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    button
                        .closest(".faq")
                        .classList.toggle(
                            "open"
                        );

                }
            );

        });
}


function initSearch() {

    const input =
        document.getElementById(
            "examSearch"
        );


    document
        .querySelectorAll(
            "[data-search]"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    if (input) {

                        input.value =
                            button.dataset.search;

                    }

                }
            );

        });


    document
        .getElementById(
            "examSearchButton"
        )
        ?.addEventListener(
            "click",
            () => {

                const query =
                    input?.value.trim();


                if (!query) {

                    showToast(
                        "Enter an exam name."
                    );

                    return;
                }


                location.href =
                    `exams.html?search=${encodeURIComponent(query)}`;

            }
        );
}


function initCounters() {

    document
        .querySelectorAll(
            "[data-counter]"
        )
        .forEach(element => {

            const target =
                Number(
                    element.dataset.counter
                );


            let current = 0;


            const timer =
                setInterval(
                    () => {

                        current +=
                            Math.max(
                                1,
                                Math.ceil(
                                    target / 35
                                )
                            );


                        if (current >= target) {

                            current =
                                target;

                            clearInterval(
                                timer
                            );

                        }


                        element.textContent =
                            current;

                    },
                    25
                );

        });
}


function initReveal() {

    const items =
        document.querySelectorAll(
            ".reveal"
        );


    if (!(
        "IntersectionObserver"
        in window
    )) {

        items.forEach(
            item =>
                item.classList.add(
                    "visible"
                )
        );

        return;
    }


    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(
                    entry => {

                        if (
                            entry.isIntersecting
                        ) {

                            entry.target
                                .classList.add(
                                    "visible"
                                );

                            observer.unobserve(
                                entry.target
                            );

                        }

                    }
                );

            },
            {
                threshold: .08
            }
        );


    items.forEach(
        item =>
            observer.observe(
                item
            )
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


function initLogin() {

    document
        .getElementById(
            "loginForm"
        )
        ?.addEventListener(
            "submit",
            event => {

                event.preventDefault();

                showToast(
                    "Prototype login successful."
                );


                setTimeout(
                    () => {

                        location.href =
                            "dashboard.html";

                    },
                    450
                );

            }
        );
}


function initListingSearch() {

    const input =
        document.getElementById(
            "listingSearch"
        );


    if (!input) {
        return;
    }


    input.addEventListener(
        "input",
        () => {

            const value =
                input.value
                    .trim()
                    .toLowerCase();


            document
                .querySelectorAll(
                    ".filter-item"
                )
                .forEach(item => {

                    const visible =
                        item.textContent
                            .toLowerCase()
                            .includes(value);


                    item.classList.toggle(
                        "hidden",
                        !visible
                    );

                });

        }
    );


    const params =
        new URLSearchParams(
            location.search
        );


    const search =
        params.get(
            "search"
        );


    if (search) {

        input.value =
            search;

        input.dispatchEvent(
            new Event(
                "input"
            )
        );

    }

}


function mount() {

    const page =
        document.body.dataset.page;


    if (!pages[page]) {
        return;
    }


    if (page !== "login") {

        document.getElementById(
            "siteHeader"
        ).innerHTML =
            header();


        document.getElementById(
            "siteFooter"
        ).innerHTML =
            footer();

    }


    document.getElementById(
        "page"
    ).innerHTML =
        pages[page]();


    if (window.lucide) {

        lucide.createIcons();

    }


    initMenu();

    initDropdowns();

    initHeader();

    initFilters();

    initFAQ();

    initSearch();

    initCounters();

    initReveal();

    initToasts();

    initLogin();

    initListingSearch();

}


document.addEventListener(
    "DOMContentLoaded",
    mount
);
