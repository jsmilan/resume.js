$(document).ready(function () {

    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });

});

$(function () {
    var jqconsole = $('#console').jqconsole('Welcome to my digital resume! Type "help()" or click a link in the sidebar, then press enter to get started.\n', '>>>');
    var startPrompt = function () {
      var e = jQuery.Event( 'keydown', { which: 13 } );

      $("#overview").click(function() {
          jqconsole.SetPromptText('overview()');
          jqconsole.Focus();
      });

      $("#education").click(function() {
        jqconsole.SetPromptText('education()');
        jqconsole.Focus();
      }); 

      $("#skills").click(function() {
        jqconsole.SetPromptText('skills()');
        jqconsole.Focus();
      });

      $("#projects").click(function() {
        jqconsole.SetPromptText('projects()');
        jqconsole.Focus();
      });

      $("#contact").click(function() {
        jqconsole.SetPromptText('contact()');
        jqconsole.Focus();
      });

      // Start the prompt with history enabled.
      jqconsole.Prompt(true, function (input) {
        // Output input with the class jqconsole-output.
        switch(input){
            case "banana()":
                jqconsole.Write('Congrats, you\'ve found the secret function! I don\'t have any money to give you, but I\'m very proud of you.\n', 'jqconsole-output');
                break;
            case "overview()":
                jqconsole.Write('Name: Justin Smilan\n', 'jqconsole-output');
                jqconsole.Write('Professional Interests: Programming, UX Design, Data Analysis\n', 'jqconsole-output');
                jqconsole.Write('Mission: To use my talents to make the world a more beautiful, friendly, and accessible place\n', 'jqconsole-output');
                jqconsole.Write('Other Interests: Music, Cooking, Puns\n', 'jqconsole-output');
                break;
            case "education()":
                jqconsole.Write('Highest Education: Williams College \'18\n', 'jqconsole-output');
                jqconsole.Write('Degree: B.A. in Computer Science\n', 'jqconsole-output');
                jqconsole.Write('GPA: 3.0 / 4.0\n', 'jqconsole-output');
                //jqconsole.Write('Favorite Courses: \n', 'jqconsole-output');
                break;
            case "skills()":
                jqconsole.Write('Skill              Proficiency\n', 'jqconsole-output');
                jqconsole.Write('Python.................4/5\n', 'jqconsole-output');
                jqconsole.Write('Java...................3/5\n', 'jqconsole-output');
                jqconsole.Write('HTML\&CSS...............5/5\n', 'jqconsole-output');
                jqconsole.Write('Javascript.............3/5\n', 'jqconsole-output');
                jqconsole.Write('R......................3/5\n', 'jqconsole-output');
                jqconsole.Write('C......................3/5\n', 'jqconsole-output');
                break;
            case "projects()":
                jqconsole.Write('Github: https://github.com/jsmilan/ \n', 'jqconsole-output');
                jqconsole.Write('Favorite Projects: LoLJunglerPathRegression, LyricGen, SousShopper \n', 'jqconsole-output');
                break;
            case "contact()":
                jqconsole.Write('I can be reached by email at jsmilan123@gmail.com. Send me a message if you\'re interested in my work!\n', 'jqconsole-output');
                break;
            case "clear()":
                jqconsole.Clear();
                break;
            case "help()":
                jqconsole.Write('Available commands: overview(), education(), skills(), projects(), contact(), clear(), help()\n', 'jqconsole-output');      
                break;
            default:
                jqconsole.Write('Command not recognized, type "help()" to list available commands. (Note: everything is case-sensitive!)\n', 'jqconsole-output');
        }

        // Restart the prompt.
        startPrompt();
      });
    };
    startPrompt();
  });

function overview(){
    jqconsole.Write("My name is Justin Smilan, and I'm a recent grad looking for work.")
}
