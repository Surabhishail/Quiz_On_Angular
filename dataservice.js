/*
 * IIFE to keep code safe and outside the global namespace
 */
(function(){

    /*
     * Declaring a factory service as part of the existing angularFacts Module.
     */
    angular
        .module("angularFacts")
        .factory("DataService", DataService);

    /*
     * Actual definition of the function used for this factory
     */
    function DataService(){
        /*
         * dataObj is used to simulate getting the data from a backend server
         * The object will hold data which will then be returned to the other
         * factory declared in js/factory/quiz.js which has this factory
         * as a dependency
         */

        var dataObj = {
            angularsData: angularsData,
            quizQuestions: quizQuestions,
            correctAnswers: correctAnswers
        };

        // returning the dataObj to anything that uses this factory as a 
        // dependency
        return dataObj;
    }

    /*
     * all of the below variables are simulating data that would typically be 
     * retrieved using an HTTP call to an API endpoint.
     *
     * For simplicity sake this data is hardcoded into the app as this tutorial
     * is about building the angular app, not the backend.
     *
     * The correctAnswers variable would be retrieved when the user has 
     * finished the quiz and would be used to mark the users answers against 
     * the correct answers
     *
     * the quizQuestions is an array of objects, each containing data 
     * pertaining to a single question. This includes:
     *                          - The type of question: image or text
     *                          - Text of the question (aka the actual question)
     *                          - A set of 4 possible answers, either text or 
     *                              images as indicated above
     *                          - a selected flag which will be used to know if
     *                              the user has selected 
     *                          an answer yet.
     *                          - Whether the user got the question correct or 
     *                              not
     *
     * The final angularData variable hold the information that will be 
     * displayed in the list view when the app loads. This includes the name 
     * and an image of each angular as well as other information such as the 
     * location and the size of the angulars
     *
     */

    var correctAnswers = [2, 1, 2, 2, 1, 1,3,2,0,0];

    var quizQuestions  = [
        {
            type: "text",
            text: "Angular JS is based on?",
            possibilities: [
                {
                    answer: " MVC Architecture"
                },
                {
                    answer: " Decorator pattern"
                },
                {
                    answer: " MVVM Architectural pattern"
                },
                {
                    answer: " Observer Pattern"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Directive intializes an Anjular JS application",
            possibilities: [
                {
                    answer: "ng-init"
                },
                {
                    answer: " ng-app"
                },
                {
                    answer: "ngSrc"
                },
                {
                    answer: "ng-start"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which Angular directive is used to binds the value of HTML controls (input, select, textarea) to application data?",
            possibilities: [
                {
                    answer: "ng-cloak"
                },
                {
                    answer:"ng-bind"
                },
                {
                    answer:"ng-model"
               
                },
                {
                    answer:"ng-blur"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which one of following is correct syntax for creating a module in AngularJs?",
            possibilities: [
                {
                 answer:" var myModule= angular.module();"

                },
                {
                 answer:" var myModule= new module();"
                },
                {
                    answer:" angular.module(app, []);"
                },
                {
                    answer:" angular.module(app, {});"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "How do you share data between controller and view?",
            possibilities: [
                {
                    answer: "using Model"
                },
                {
                   answer: "using services"                
                },
                {
                   answer: "using factory"                
                },
                {
                    answer: "using scope"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Is AngularJs supports two way binding?",
            possibilities: [
                {
                    answer: "True"
                },
                {
                    answer: "False"
                }
                ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "AngularJS directives can be written in Templates as",
            possibilities: [
                {
                    answer: "Tag"
                },
                {
                    answer: "Attribute"
                },
                {
                    answer: "Class name"
                },
                {
                    answer: "All of the above"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "Which of the following directive allows us to use a form in AngularJs?",
            possibilities: [
                {
                    answer:" ng-form"
                },
                {
                    answer:" ng-include"
                },
                {
                    answer:"ng-form"
                },
                {
                    answer:"ng-bind"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What is correct way to apply multiple filters in AngularJs.",
            possibilities: [
                {
                    answer: " {{ expression | filter1 | filter2 | ... }}"
                },
                {
                    answer: " {{ expression | {filter1} | {filter2} | ... }}"
                },
                {
                    answer: " {{ expression - {filter1} - {filter2} - ... }}"
                },
                {
                    answer: " {{ {filter1} | {filter2} | ...-expression}}"
                }
            ],
            selected: null,
            correct: null
        },
        {
            type: "text",
            text: "What are Angular Controllers are responsible for?",
            possibilities: [
                {
                    answer: " Controlling the data."
                },
                {
                    answer: " Displaying the data."
                }
            ],
            selected: null,
            correct: null
        }
    ];

    var angularsData = [
        {
            type: "Angular 8 (formerly Angular 2) - The Complete Guide",
            student_enrolled: "175,000+",
            rating: "4.7 out of 5",
            created_by: "Maximilian Schwarzmüller",
            description: "Course starts from scratch, zero knowledge of Angular 1  or 2 is perfectly fine .Develop complex, responsive and scalable web applications with Angular.Learn about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing, Offline Compilation and much moreGet trained on how to use Angular CLI.Work hands on, on a complete project to practice what you have learned.27 hours on demand video, lifetime access, great participant feedback!"
        },
        {
            type: "Online Angular Js Course and Tutorial-Learning Path(Pluralsight)",
            student_enrolled: "155,000+",
            rating: "4.6 out of 5",
            created_by: "Scott Allen",
            description: "Implement the concepts covered in the lessons by focusing on the theoretical as well as practical aspects of the concepts.The courses can be taken by anyone with a working knowledge of JavaScript and HTML..The course has complete explanations about how to install the necessary software and build reusable components..The training is divided into appropriate sections going from fundamental to the big picture which makes it easier to follow..The complete course content is available for free for the duration of the first ten days."        
         },
        {
            type: "Learn and Understand AngularJS",
            student_enrolled: "77,764",
            rating: "4.5 out of 5",
            created_by: "Anthony Alicea",
            description: "Start learning from the fundamentals of Javascript that powers AngularJS.Get trained on building a Single Page Application (SPA).Build a Weather Forecast SPA.Understand dependency injection, directives, transclusion and more."
         },
        {
            type: "Angular 8 (formerly Angular 2) - The Complete Guide",
            student_enrolled: "175,000+",
            rating: "4.7 out of 5",
            created_by: "Maximilian Schwarzmüller",
            description: "Course starts from scratch, zero knowledge of Angular 1  or 2 is perfectly fine .Develop complex, responsive and scalable web applications with Angular.Learn about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing, Offline Compilation and much moreGet trained on how to use Angular CLI.Work hands on, on a complete project to practice what you have learned.27 hours on demand video, lifetime access, great participant feedback!"
        
        },
        {
            type: "Angular 8 (formerly Angular 2) - The Complete Guide",
            student_enrolled: "175,000+",
            rating: "4.7 out of 5",
            created_by: "Maximilian Schwarzmüller",
            description: "Course starts from scratch, zero knowledge of Angular 1  or 2 is perfectly fine .Develop complex, responsive and scalable web applications with Angular.Learn about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing, Offline Compilation and much moreGet trained on how to use Angular CLI.Work hands on, on a complete project to practice what you have learned.27 hours on demand video, lifetime access, great participant feedback!"
        
        },
        {
            type: "Angular 8 (formerly Angular 2) - The Complete Guide",
            student_enrolled: "175,000+",
            rating: "4.7 out of 5",
            created_by: "Maximilian Schwarzmüller",
            description: "Course starts from scratch, zero knowledge of Angular 1  or 2 is perfectly fine .Develop complex, responsive and scalable web applications with Angular.Learn about Components, Directives, Services, Forms, Http Access, Authentication, Optimizing, Offline Compilation and much moreGet trained on how to use Angular CLI.Work hands on, on a complete project to practice what you have learned.27 hours on demand video, lifetime access, great participant feedback!"
        
        },
        
    ];

})();
