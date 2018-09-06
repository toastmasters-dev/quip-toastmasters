// import fs from 'fs'; // not working with webpack
// TODO: import this from speeches.json
const speeches = [{
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "1) The Ice Breaker (4-6 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "2) Organize Your Speech (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "3) Get to the Point (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "4) How to Say It (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "5) Your Body Speaks (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "6) Vocal Variety (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "7) Research Your Topic (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "8) Get Comfortable with Visual Aids (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "9) Persuade with Power (5-7 min)"
}, {
    "manual": "COMPETENT COMMUNICATION (CC) MANUAL",
    "project": "10) Inspire Your Audience (8-10 min)"
}, {
    "manual": "COMMUNICATING ON TELEVISION",
    "project": "1) Straight Talk (3 min)"
}, {
    "manual": "COMMUNICATING ON TELEVISION",
    "project": "2) The Talk Show (10 min)"
}, {
    "manual": "COMMUNICATING ON TELEVISION",
    "project": "3) When You're the Host (10 min)"
}, {
    "manual": "COMMUNICATING ON TELEVISION",
    "project": "4) The Press Conference (4-6 min presentation; 8-10 min Q&amp;A)"
}, {
    "manual": "COMMUNICATING ON TELEVISION",
    "project": "5) Training on Television (5-7 min; 5-7 min video tape playback)"
}, {
    "manual": "COMMUNICATING ON VIDEO",
    "project": "1) The Straight Talk (3 min)"
}, {
    "manual": "COMMUNICATING ON VIDEO",
    "project": "2) The Interview Show (5-7 min)"
}, {
    "manual": "COMMUNICATING ON VIDEO",
    "project": "3) When You're the Host (5-7 min)"
}, {
    "manual": "COMMUNICATING ON VIDEO",
    "project": "4) The Press Conference (3-5 min; 2-3 min for Q&amp;A)"
}, {
    "manual": "COMMUNICATING ON VIDEO",
    "project": "5) Instructing on the Internet (5-7 min; 5-7 min for video playback)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "1) Beginning Your Speech (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "2) Concluding Your Speech (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "3) Controlling Your Fear (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "4) Impromptu Speaking (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "5) Selecting Your Topic (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "6) Know Your Audience (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "7) Organizing Your Speech (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "8) Creating an Introduction (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "9) Preparation and Practice (10-15 min)"
}, {
    "manual": "EDUCATIONAL BETTER SPEAKER SERIES",
    "project": "10) Using Body Language (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "1) The Visionary Leader (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "2) Developing a Mission (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "3) Values and Leadership (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "4) Goal Setting and Planning (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "5) Delegate to Empower (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "6) Building a Team (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "7) Giving Effective Feedback (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "8) The Leader as a Coach (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "9) Motivating People (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "10) Service and Leadership (10-15 min)"
}, {
    "manual": "EDUCATIONAL LEADERSHIP EXCELLENCE SERIES",
    "project": "11) Resolving Conflict (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "1) Moments Of Truth (60-90 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "2) Finding New Members for Your Club (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "3) Evaluate to Motivate (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "4) Closing the Sale (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "5) Creating the Best Club Climate (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "6) Meeting Roles and Responsibilities (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "7) Mentoring (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "8) Keeping the Commitment (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "9) Going Beyond Our Club (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "10) How to Be a Distinguished Club (10-15 min)"
}, {
    "manual": "EDUCATIONAL SUCCESSFUL CLUB SERIES",
    "project": "11) The Toastmasters Educational Program (10-15 min)"
}, {
    "manual": "FACILITATING DISCUSSION",
    "project": "1) The Panel Moderator (28-30 min or optional 22-26 min)"
}, {
    "manual": "FACILITATING DISCUSSION",
    "project": "2) The Brainstorming Session (31-33 min or optional 20-22 min)"
}, {
    "manual": "FACILITATING DISCUSSION",
    "project": "3) The Problem-Solving Discussion (26-31 min or optional 19-23 min)"
}, {
    "manual": "FACILITATING DISCUSSION",
    "project": "4) Handling Challenging Situations (22-32 min or optional 12-21 min)"
}, {
    "manual": "FACILITATING DISCUSSION",
    "project": "5) Reaching a Consensus (31-37 min or optional 20-26 min)"
}, {
    "manual": "HIGH PERFORMANCE LEADERSHIP",
    "project": "1) Vision (5-7 min)"
}, {
    "manual": "HIGH PERFORMANCE LEADERSHIP",
    "project": "2) Learning (5-7 min)"
}, {
    "manual": "HIGH PERFORMANCE LEADERSHIP",
    "project": "3) Experience (5-7 min)"
}, {
    "manual": "HIGH PERFORMANCE LEADERSHIP (Rev. 9/2012)",
    "project": "1) Sharing Your Vision (5-6 min)"
}, {
    "manual": "HIGH PERFORMANCE LEADERSHIP (Rev. 9/2012)",
    "project": "2) Presenting the Results (5-7 min)"
}, {
    "manual": "HUMOROUSLY SPEAKING",
    "project": "1) Warm Up Your Audience (5-7 min)"
}, {
    "manual": "HUMOROUSLY SPEAKING",
    "project": "2) Leave Them with a Smile (5-7 min)"
}, {
    "manual": "HUMOROUSLY SPEAKING",
    "project": "3) Make Them Laugh (5-7 min)"
}, {
    "manual": "HUMOROUSLY SPEAKING",
    "project": "4) Keep Them Laughing (5-7 min)"
}, {
    "manual": "HUMOROUSLY SPEAKING",
    "project": "5) The Humorous Speech (5-7 min)"
}, {
    "manual": "INTERPERSONAL COMMUNICATIONS",
    "project": "1) Conversing with Ease (10-14 min)"
}, {
    "manual": "INTERPERSONAL COMMUNICATIONS",
    "project": "2) The Successful Negotiator (10-14 min)"
}, {
    "manual": "INTERPERSONAL COMMUNICATIONS",
    "project": "3) Diffusing Verbal Criticism (10-14 min)"
}, {
    "manual": "INTERPERSONAL COMMUNICATIONS",
    "project": "4) The Coach (10-14 min)"
}, {
    "manual": "INTERPERSONAL COMMUNICATIONS",
    "project": "5) Asserting Yourself Effectively (10-14 min)"
}, {
    "manual": "INTERPRETIVE READING",
    "project": "1) Read a Story (8-10 min)"
}, {
    "manual": "INTERPRETIVE READING",
    "project": "2) Interpreting Poetry (6-8 min)"
}, {
    "manual": "INTERPRETIVE READING",
    "project": "3) The Monodrama (5-7 min)"
}, {
    "manual": "INTERPRETIVE READING",
    "project": "4) The Play (12-15 min)"
}, {
    "manual": "INTERPRETIVE READING",
    "project": "5) The Oratorical Speech (8-10 min)"
}, {
    "manual": "PERSUASIVE SPEAKING",
    "project": "1) The Effective Salesperson (3-4 min speech; 3-5 min role play; 2-3 min discussion)"
}, {
    "manual": "PERSUASIVE SPEAKING",
    "project": "2) Conquering the Cold Call (3-4 min speech; 5-7 min role play; 2-3 min discussion)"
}, {
    "manual": "PERSUASIVE SPEAKING",
    "project": "3) The Winning Proposal (5-7 min)"
}, {
    "manual": "PERSUASIVE SPEAKING",
    "project": "4) Addressing the Opposition (7-9 min speech; 2-3 min Q&amp;A)"
}, {
    "manual": "PERSUASIVE SPEAKING",
    "project": "5) The Persuasive Leader (6-8 min)"
}, {
    "manual": "PUBLIC RELATIONS",
    "project": "1) The Persuasive Approach (8-10 min)"
}, {
    "manual": "PUBLIC RELATIONS",
    "project": "2) Speaking Under Fire (6-8 min; 8-10 min Q&amp;A)"
}, {
    "manual": "PUBLIC RELATIONS",
    "project": "3) The Goodwill Speech (5-7 min)"
}, {
    "manual": "PUBLIC RELATIONS",
    "project": "4) The Radio Talk Show (8-10 min)"
}, {
    "manual": "PUBLIC RELATIONS",
    "project": "5) The Crisis Management Speech (8-10 min; 30 sec Q&amp;A)"
}, {
    "manual": "PUBLIC RELATIONS (revised 5/2011)",
    "project": "1) The Goodwill Speech (5-7 min)"
}, {
    "manual": "PUBLIC RELATIONS (revised 5/2011)",
    "project": "2) The Radio Talk Show (3-5 min; 2-3 min Q&amp;A)"
}, {
    "manual": "PUBLIC RELATIONS (revised 5/2011)",
    "project": "3) The Persuasive Approach (5-7 min)"
}, {
    "manual": "PUBLIC RELATIONS (revised 5/2011)",
    "project": "4) Speaking Under Fire (3-5 min; 2-3 min Q&amp;A)"
}, {
    "manual": "PUBLIC RELATIONS (revised 5/2011)",
    "project": "5) The Crisis Management Speech (4-6 min; 3-5 min Q&amp;A)"
}, {
    "manual": "SPEAKING TO INFORM",
    "project": "1) The Speech to Inform (5-7 min)"
}, {
    "manual": "SPEAKING TO INFORM",
    "project": "2) Resources for Informing (5-7 min)"
}, {
    "manual": "SPEAKING TO INFORM",
    "project": "3) The Demonstration Talk (5-7 min)"
}, {
    "manual": "SPEAKING TO INFORM",
    "project": "4) A Fact-Finding Report (5-7 min; 2-3 min Q&amp;A)"
}, {
    "manual": "SPEAKING TO INFORM",
    "project": "5) The Abstract Concept (6-8 min)"
}, {
    "manual": "SPECIAL OCCASION SPEECHES",
    "project": "1) Mastering the Toast (2-3 min)"
}, {
    "manual": "SPECIAL OCCASION SPEECHES",
    "project": "2) Speaking in Praise (5-7 min)"
}, {
    "manual": "SPECIAL OCCASION SPEECHES",
    "project": "3) The Roast (3-5 min)"
}, {
    "manual": "SPECIAL OCCASION SPEECHES",
    "project": "4) Presenting an Award (3-4 min)"
}, {
    "manual": "SPECIAL OCCASION SPEECHES",
    "project": "5) Accepting an Award (5-7 min)"
}, {
    "manual": "SPECIALTY SPEECHES",
    "project": "1) Speak Off the Cuff (5-7 min)"
}, {
    "manual": "SPECIALTY SPEECHES",
    "project": "2) Uplift the Spirit (8-10 min)"
}, {
    "manual": "SPECIALTY SPEECHES",
    "project": "3) Sell a Product (10-12 min)"
}, {
    "manual": "SPECIALTY SPEECHES",
    "project": "4) Read Out Loud (12-15 min)"
}, {
    "manual": "SPECIALTY SPEECHES",
    "project": "5) Introduce the Speaker (duration of a club meeting)"
}, {
    "manual": "SPECIALTY SPEECHES (Rev.05/2011)",
    "project": "1) Impromptu Speaking (5-7 min)"
}, {
    "manual": "SPECIALTY SPEECHES (Rev.05/2011)",
    "project": "2) Uplift the Spirit (8-10 min)"
}, {
    "manual": "SPECIALTY SPEECHES (Rev.05/2011)",
    "project": "3) Sell a Product (10-12 min)"
}, {
    "manual": "SPECIALTY SPEECHES (Rev.05/2011)",
    "project": "4) Read Out Loud (12-15 min)"
}, {
    "manual": "SPECIALTY SPEECHES (Rev.05/2011)",
    "project": "5) Introduce the Speaker (duration of a club meeting)"
}, {
    "manual": "SPEECHES BY MANAGEMENT",
    "project": "1) The Briefing (8-10 min; 5 min Q&amp;A)"
}, {
    "manual": "SPEECHES BY MANAGEMENT",
    "project": "2) The Technical Speech (8-10 min)"
}, {
    "manual": "SPEECHES BY MANAGEMENT",
    "project": "3) Manage and Motivate (10-12 min)"
}, {
    "manual": "SPEECHES BY MANAGEMENT",
    "project": "4) The Status Report (10-12 min)"
}, {
    "manual": "SPEECHES BY MANAGEMENT",
    "project": "5) Confrontation: The Adversary Relationship (5 min speech; 10 min Q&amp;A)"
}, {
    "manual": "SPEECHES BY MANAGEMENT Revised",
    "project": "1) The Briefing (3-5 min; 2-3 min  Q&amp;A)"
}, {
    "manual": "SPEECHES BY MANAGEMENT Revised",
    "project": "2) Appraise with Praise (5-7 min)"
}, {
    "manual": "SPEECHES BY MANAGEMENT Revised",
    "project": "3) Persuade and Inspire (5-7 min)"
}, {
    "manual": "SPEECHES BY MANAGEMENT Revised",
    "project": "4) Communicating Change (5-7 min)"
}, {
    "manual": "SPEECHES BY MANAGEMENT Revised",
    "project": "5) Delivering Bad News (5-7 min)"
}, {
    "manual": "STORYTELLING",
    "project": "1) The Folk Tale (7-9 min)"
}, {
    "manual": "STORYTELLING",
    "project": "2) Let's Get Personal(6 - 8 min)"
}, {
    "manual": "STORYTELLING",
    "project": "3) The Moral of the Story (4-6 min)"
}, {
    "manual": "STORYTELLING",
    "project": "4) The Touching Story (6-8 min)"
}, {
    "manual": "STORYTELLING",
    "project": "5) Bringing History to Life (7-9 min)"
}, {
    "manual": "STORYTELLING (Rev 05/2011)",
    "project": "1) The Folk Tale (7-9 min)"
}, {
    "manual": "STORYTELLING (Rev 05/2011)",
    "project": "2) Let's Get Personal(6 - 8 min)"
}, {
    "manual": "STORYTELLING (Rev 05/2011)",
    "project": "3) The Moral of the Story (5-7 min)"
}, {
    "manual": "STORYTELLING (Rev 05/2011)",
    "project": "4) The Touching Story (6-8 min)"
}, {
    "manual": "STORYTELLING (Rev 05/2011)",
    "project": "5) Bringing History to Life (7-9 min)"
}, {
    "manual": "TECHNICAL PRESENTATIONS",
    "project": "1) The Technical Briefing (8-10 min)"
}, {
    "manual": "TECHNICAL PRESENTATIONS",
    "project": "2) The Proposal (8-10 min; 3-5 min Q&amp;A)"
}, {
    "manual": "TECHNICAL PRESENTATIONS",
    "project": "3) The Nontechnical Audience (10-12 min)"
}, {
    "manual": "TECHNICAL PRESENTATIONS",
    "project": "4) Presenting a Technical Paper (10-12 min)"
}, {
    "manual": "TECHNICAL PRESENTATIONS",
    "project": "5) Enhancing a Technical Talk with the Internet (12-15 min)"
}, {
    "manual": "THE DISCUSSION LEADER",
    "project": "1) The Seminar Solution (20-30 min)"
}, {
    "manual": "THE DISCUSSION LEADER",
    "project": "2) The Round Robin (20-30 min)"
}, {
    "manual": "THE DISCUSSION LEADER",
    "project": "3) Pilot a Panel (30-40 min)"
}, {
    "manual": "THE DISCUSSION LEADER",
    "project": "4) Make Believe (Role Playing) (20-30 min)"
}, {
    "manual": "THE DISCUSSION LEADER",
    "project": "5) The Workshop Leader (30-40 min)"
}, {
    "manual": "THE ENTERTAINING SPEAKER",
    "project": "1) The Entertaining Speech (5-7 min)"
}, {
    "manual": "THE ENTERTAINING SPEAKER",
    "project": "2) Resources for Entertainment (5-7 min)"
}, {
    "manual": "THE ENTERTAINING SPEAKER",
    "project": "3) Make Them Laugh (5-7 min)"
}, {
    "manual": "THE ENTERTAINING SPEAKER",
    "project": "4) A Dramatic Talk (5-7 min)"
}, {
    "manual": "THE ENTERTAINING SPEAKER",
    "project": "5) Speaking After Dinner (8-10 min)"
}, {
    "manual": "THE PROFESSIONAL SALESPERSON",
    "project": "1) The Winning Attitude (8-10 min)"
}, {
    "manual": "THE PROFESSIONAL SALESPERSON",
    "project": "2) Closing the Sale (10-12 min)"
}, {
    "manual": "THE PROFESSIONAL SALESPERSON",
    "project": "3) Training the Sales Force (6-8 min; 8-10 min role play; 2-5 min discussion)"
}, {
    "manual": "THE PROFESSIONAL SALESPERSON",
    "project": "4) The Sales Meeting (15-20 min)"
}, {
    "manual": "THE PROFESSIONAL SALESPERSON",
    "project": "5) The Team Sales Presentation (15-20 min; 5-7 min per person for manual credit)"
}, {
    "manual": "THE PROFESSIONAL SPEAKER",
    "project": "1) The Keynote Address (15-20 min)"
}, {
    "manual": "THE PROFESSIONAL SPEAKER",
    "project": "2) Speaking to Entertain (15-20 min)"
}, {
    "manual": "THE PROFESSIONAL SPEAKER",
    "project": "3) The Sales Training Speech (15-20 min)"
}, {
    "manual": "THE PROFESSIONAL SPEAKER",
    "project": "4) The Professional Seminar (20-40 min)"
}, {
    "manual": "THE PROFESSIONAL SPEAKER",
    "project": "5) The Motivational Speech (15-20 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (3-5 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (5-7 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (8-10 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (10-12 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (13-15 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (18-20 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (23-25 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (28-30 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (35-40 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (40-45 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (45-50 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (55-60 min)"
}, {
    "manual": "Other Manual or Non Manual Speech",
    "project": "Custom Speech (&gt;1 hour)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L2) Understanding Your Communication Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3) Negotiate the Best Outcome (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4) Manage Change (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5) Lead in Any Situation (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Dynamic Leadership",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L2) Understanding Your Communication Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3) Reaching Consensus (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4) Improvement Through Positive Coaching (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Effective Coaching",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L2) Connect With Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3) Present a Proposal (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Innovative Planning",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L2) Managing Time (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3) Planning and Implementing (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4) Leading Your Team (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5) Manage Successful Events (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Leadership Development",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Mentoring Program",
    "project": "(L4) Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Mentoring Program",
    "project": "(L5) Advanced Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L2) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L2) Understanding Your Communication Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3) Understanding Emotional Intelligence (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4) Motivate Others (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5) Team Building (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Motivational Strategies",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L2) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3) Understanding Conflict Resolution (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4) Leading in Difficult Situations (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Persuasive Influence",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L2) Understanding Your Communication Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L2) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3) Persuasive Speaking (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Presentation Mastery",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L2) Cross-Cultural Understanding (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Strategic Relationships",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L2) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3) Successful Collaboration (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4) Motivate Others (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5) Lead in Any Situation (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Team Collaboration",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L1) Ice Breaker (4-6 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L1) Evaluation and Feedback #1 (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L1) Evaluation and Feedback #2 (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L1) Researching and Presenting (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L2) Understanding Your Leadership Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L2) Understanding Your Communication Style (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L2) Introduction to Toastmasters Mentoring (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3) Develop a Communication Plan (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Deliver Social Speeches (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Using Presentation Software (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Connect with Storytelling (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Creating Effective Visual Aids (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Using Descriptive Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Connect with Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Make Connections Through Networking (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Focus on the Positive (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Inspire Your Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Prepare for an Interview (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Understanding Vocal Variety (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Effective Body Language (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L3 elective) Active Listening (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4) Communicate Change (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Create a Podcast (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Building a Social Media Presence (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Managing a Difficult Audience (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Write a Compelling Blog (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Manage Online Meetings (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Question-and-Answer Session (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Public Relations Strategies (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L4 elective) Manage Projects Successfully (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5) Develop Your Vision (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5) Reflect on Your Path (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5 elective) Lessons Learned (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5 elective) Moderate a Panel Discussion (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5 elective) Ethical Leadership (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5 elective) Leading in Your Volunteer Organization (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5 elective) Prepare to Speak Professionally (5-7 min)"
}, {
    "manual": "PATHWAYS - Visionary Communication",
    "project": "(L5 elective) High Performance Leadership (5-7 min)"
}];

function findMatches(wordToMatch) { 
    return speeches.filter(place => {
        const regex = new RegExp(wordToMatch, 'gi');
        return place.manual.match(regex) || place.project.match(regex)
    }).slice(0, 5); // only return this many results
} 

export default class PickList extends React.Component {
    static propTypes = {
        setSelectedSpeech: React.PropTypes.function,
    };    

    constructor(props) {
        super(props);
        this.state = {
            value: '',
            suggestions: [],
        }
    }     

    componentDidMount() {
        this.setState({value : this.props.card.get('details')});
    }

    componentWillReceiveProps(nextProps) {
        this.setState({value : nextProps.card.get('details')});
    }

    setSpeech = (event) => {
        const _value = event.target.textContent.trim().toUpperCase();
        const speechInt = event.target.parentNode.parentNode.title;
        this.props.setSpeech(_value, speechInt);
        // hide suggestions
        this.setState({ suggestions: [] });
    }
     
    displayMatches = (event) => {
        const _value = event.target.value;
        const matchArray = findMatches(_value);
        this.setState({ 
            suggestions: matchArray,
            value: _value,
        });
    }
     
    render() {
        const style = {
            cursor: "pointer"
        };
        const { card } = this.props;
        const _html = this.state.suggestions.map((_value) => {
            return <li onClick={ this.setSpeech } style={style}>
                <span class="hl">{_value.manual} {_value.project}</span>
            </li>
        });

        return <div>
            <input type="text" 
                onChange={ this.displayMatches }
                class="search" 
                value={ this.state.value }
                placeholder="Choose Manual / Speech"/>
            <ul title={ card.get("number") } class="suggestions">
                { _html }
            </ul>
        </div>
    }
}

