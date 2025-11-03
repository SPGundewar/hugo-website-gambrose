---
title: "PA 715 – Quantitative Policy Analysis"
date: 2025-08-19
author: "Graham Ambrose"
description: "Critical, applied introduction to quantitative methods for policy analysis with emphasis on modeling assumptions, interpretation, and communication."
summary: "Covers OLS, categorical predictors, model diagnostics, panel methods, data wrangling, and communicating results for policy audiences; hands-on work in R."
cover:
    image: "course2.jpg"
    alt: "PA 715 – Quantitative Policy Analysis"
    relative: true
tags: ["Quantitative Policy Analysis", "Econometrics", "R", "OLS", "Panel Data", "Causal Inference", "OLS Regression", "Categorical Predictors", "Hypothesis Testing", "Model Diagnostics", "Heteroskedasticity", "Model Specification", "Instrumental Variables", "Two-Stage Least Squares", "Data Wrangling", "Data Visualization"]
showToc: true
disableAnchoredHeadings: false
---

## Overview

**Semester:** Fall 2025  
**Schedule:** Tuesdays, 3:00 PM – 5:45 PM  
**Location:** 113 Tompkins Hall  
**Instructor:** Professor Graham Ambrose  
**Email:** [gambros@ncsu.edu](mailto:gambros@ncsu.edu)  
**Office Hours:** Fridays, 12:00–1:00 PM ([by appointment]({{< relref "officehours.md" >}}))  
**Office:** 125 Winston Hall

---

## Course Description

Quantitative Policy Analysis will focus on critical thinking to build a conceptual understanding of statistical techniques and applications for researchers and analysts. This course also will engage with questions about observed relationships versus real-world causes, which types of analysis and statistics are the most informative, and how quantitative evidence should (or shouldn’t) influence policy making.

The main focus will be on your ability to appropriately develop and interpret statistical models based on a strong conceptual understanding of modeling assumptions and limitations. Less emphasis will be placed on mathematical proofs and derivations. Topics to be covered in this course include standard OLS regression, regression with qualitative predictors, proper handling of data issues, panel data methods, and data visualization and writing. The course will also cover data wrangling techniques (obtaining, cleaning, transforming, and merging data) that often consume much of a researcher’s time but are not often a central focus of statistics and econometric classes.

### Learning objectives

1. To help students become informed consumers and producers of empirical research in their respective fields.  
2. Teach students how to understand and apply statistics.  
3. Teach students the purpose of various research methods as well as their strengths and weaknesses.  
4. Teach students how to locate secondary data sources, download relevant data into widely used statistical software packages, prepare the data for analysis, and use advanced statistical methods to answer research questions relevant to their field of study.  
5. Provide students with practice writing up statistical results and presenting them to a policy audience. Understand statistical modeling assumptions and limitations

---

## Course Materials

### Required

- Wooldridge, J. M. (2020). **Introductory econometrics: a modern approach (5th ed.): Cengage Learning.** [Different editions are fine, but you should be able to find the 5th ed. cheap, used online]  
- Readings assigned on Moodle

### Optional

- Long, J.D. & Teetor, Paul (2019). **R cookbook**: O'Reilly. You can access this as an online resource through the NCSU library. You will have full access by following the directions at this link:  
  - https://catalog.lib.ncsu.edu/catalog/NCSU4807869
- **The Big Book of R**. This is an online repository for all things R. It does a great job of discussing the basics, covering the methods we discuss in this class, and extending far beyond.  
  - https://www.bigbookofr.com/
- More ‘practical’ discussions of the topics we will cover in this class and the following methods courses. If you are nervous about econometrics, these could be good companions to Wooldrige.  
  - Angrist, J. D., & Pischke, J. S. (2009). **Mostly harmless econometrics: An empiricist's companion.** Princeton university press.  
  - Cunningham, S. (2021). **Causal inference: The mixtape**. Yale university press.

---

## Assessments

### Midterm and Final

Both exams will be open book and open notes.

### Homework

The homework each week will focus on applying the key concepts discussed in class. You will have 10 total homework assignments assigned on Tuesday and due before the following class (i.e., Tuesday 3pm). Late work will be docked 1 point per 24-hour period. Each homework assignment will be posted on Moodle and should be submitted on Moodle. While the Problem Set problems correspond to the problems at the end of each Wooldridge chapter, I will still post a document with full questions in Moodle, as problem numbers change between editions. I encourage you to work with your classmates on these assignments to clarify and check each other’s understanding and solutions. Ultimately, each student should complete, write-up, and submit results individually. Please see NCSU's policy on academic integrity below.

### Grading

| Assessment | Points | Due date |
|---|---:|---|
| Midterm | 25 | 10/21 |
| Final | 25 | 12/9 |
| Homework Assignments (10) | 40 (4 points each) | Ongoing |
| Class Participation | 10 | Ongoing |

I reserve the right to make changes to the weekly discussion, reading schedule and course syllabus to meet the learning needs of the students and to accommodate other professional expectations which may include research activities, professional conferences and unplanned obligations. Thank you very much for your understanding and cooperation.

---

## Course Schedule

Schedule of classes and assignments is subject to change. In the event of any change in assignment, topic or due date, I will post announcements on Moodle and upload a corrected syllabus.

<div style="overflow-x:auto">

| Week | Topic | Reading | Activities |
|---|---|---|---|
| Week 1 – 8/19 | Course overview <br><br> Review of R, RStudio, and Tidyverse | Familiarize yourself with the course Moodle site<br><br>Read the posted syllabus<br><br>Additional Learning Materials:<br>• https://www.brookings.edu/research/what-all-policy-analysts-need-to-know-about-data-science/ <br> • Torfs and Brauer (2014) | Download R and RStudio to personal computer, or update to newest version<br><br>https://rstudio.cloud/learn/primers/1<br>Work through the programming and visualization basics |
| Week 2 – 8/26 | Discussion of causality in Public Administration Research | Additional Learning Materials:<br> • Little, Ch. 2 <br> • Jaccard & Jacoby, Ch. 7 | **Homework 1:** ‘Box and Arrow Assignment’ (Moodle) |
| Week 3 – 9/2 | Thinking clearly with data | Wooldridge, Ch. 1 | **Homework 2:** Problem Set #1<br>Ch. 1 <br>• (Problems 1 & 2)<br>Computer Exercises 2 & 3 |
| Week 4 – 9/9 | Simple Regression | Wooldridge, Ch. 2 | Start **Homework 3:** Problem Set #2 |

**NO CLASS 9/16 – WELLNESS DAY**

| Week | Topic | Reading | Activities |
|---|---|---|---|
| Week 5 – 9/23 | Multiple Regression | Wooldridge, Ch. 3 | **Homework 3:** Problem Set #2<br>Wooldridge Ch. 2<br>• Problems 3 & 5<br>Wooldridge Ch. 3<br>• Problems 1, 5 & 7<br>Computer Exercises 1 & 9 |
| Week 6 – 9/30 | Hypothesis testing and interpreting model output | Wooldridge, Ch. 4 | **Homework 4:** Problem Set #3<br>Ch. 4<br>• (Problem 6)<br>• Computer Exercises 1 & 5 |
| Week 7 – 10/7 | Categorical predictors and interpretations | Wooldridge, Ch. 7 | Review for midterm |

**NO CLASS 10/14 – FALL BREAK**

| Week | Topic | Reading | Activities |
|---|---|---|---|
| Week 8 – 10/21 | Midterm exam | - | **Homework 5:** Problem Set #4<br>Wooldridge Ch. 7<br>• (Problems 3 & 8)<br>• Computer Exercises 4 & 12 (iii–vi) |
| Week 9 – 10/28 | Non-linear relationships, heteroscedasticity, and issues with regression assumptions | Wooldridge, Ch. 8 | **Homework 6:** Problem Set #5<br> Ch. 8<br>• (Problems 1 & 4)<br>• Computer Exercises 4 |
| Week 10 – 11/4 | Model specification and data issues | Wooldridge, Ch. 9 | **Homework 7:** Problem Set #6<br> Ch. 9<br>• (Problems 3 & 4)<br>• Computer Exercises 2 & 3 |
| Week 11 – 11/11 | Panel data part 1 | Wooldridge, Ch. 13 | **Homework 8:** Problem Set #7<br> Wooldridge Ch. 13<br>• (Problems 3, 5 & 6)<br> Computer Exercises 7 |
| Week 12 – 11/18 | Panel data part 2 | Wooldridge, Ch. 14 | **Homework 9:** Problem Set #8<br> Wooldridge Ch. 14<br>• (Problem 5)<br>• Computer Exercises 3 & 12 |
| Week 13 – 11/25 | Instrumental Variables Estimation and Two-Stage Least Squares | Wooldridge, Ch. 15 | **Homework 10:** Problem Set #9<br> Wooldridge Ch. 15<br>• (Problem 1)<br>• Computer Exercises 1 |
| Week 14 – 12/2 | Interpreting results; Writing your Data/Results/Conclusion |   | Begin reviewing for final exam |
| - | Data visualization & Review | Wickham, H. and Grolemund, G. (2017).<br> R for Data Science: Chapter 3: Data Visualization:<br>https://r4ds.had.co.nz/data-visualisation.html<br><br>Healy, Kieran (2019). Data Visualization. Chapter 3: Make a Plot:<br>https://socviz.co/makeplot.html<br><br>Wilkes, Claus (2019). Fundamentals of Data Visualization. Sections 1-5:<br>https://clauswilke.com/dataviz/introduction.html | Begin reviewing for final exam |

**FINAL EXAM – 12/9 3:30 – 6:00**
</div>

---

## Course Policies

### Assignment Submittal Guidelines

Any written work except for in-class exams is expected to be typed, 12-point standard font (double spaced), on 8.5” x 11” page size with 1” margins. American Psychological Association (APA) 6th edition style, formatting, and references must be used. When R code is required for an exercise, the code can either be copied and pasted into the word file or submitted as a corresponding .R file. All work should be uploaded to Moodle. E-mailed work will not be accepted. Late work will be docked 1 point per 24-hour period.

### Attendance Policy

Attendance at all sessions, and for the duration of all sessions, is expected. If you miss a class session, you should obtain any notification of change of future assignments or other course material from a class member—not the faculty member.

### Course Modifications

The instructor reserves the right to make modifications to the syllabus and course schedule throughout the course, thus the syllabus is not a contract and may be modified at their discretion. Any changes will be announced in class, on Moodle and/or email; it is the responsibility of the student to adhere to these changes.

### Note on Class Meeting Time

Should an emergency or unforeseen circumstances arise for the instructor, it may be necessary to cancel a class meeting. Should the faculty member not be able to meet the class at the regularly-scheduled time, the class will be notified via Moodle and/or email, with as much advance notice as is possible. Alternative online activities or class sessions will be provided within 24 hours of the cancellation to provide content and activities as originally planned for the class meeting. Be sure to check announcements and/or Moodle email on the days of class.

### Additional books broadly related to this course

The topics covered in the course, at a high level, consider how we ask questions as researchers to evaluate how X causes Y (or more likely, how variation in X is associated with some variation in Y). We will cover well recognized and accepted methods for doing this in the course – but these are not the only methods of doing this. If you are interested in case study or multi-method approaches, please find a few books below. These books and topics will not be covered in this course but are a resource for those interested.

• Gerring, J. (2006). Case study research: Principles and practices. Cambridge university press.  
• George, A. L., & Bennett, A. (2005). Case studies and theory development in the social sciences. mit Press.  
• Goertz, G. (2017). Multimethod research, causal mechanisms, and case studies: An integrated approach. Princeton University Press.  
• Ragin, C. C. (2014). The comparative method: Moving beyond qualitative and quantitative strategies. Univ of California Press.  
• Miller, J. H., & Page, S. E. (2009). Complex adaptive systems: an introduction to computational models of social life: an introduction to computational models of social life. Princeton university press.

---

## Download Full Syllabus

📄 [PA 715 – Fall 2025 Syllabus (PDF)](Ambrose_PA_715_Fall2025.pdf)
