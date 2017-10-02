$(document).ready(function() {

            //here could be other url for JSON feed
            // Credit: JSON file was created using  haveibeenpwned.com API and saved as local file
            var urlForJSONfile = "listofsites.json";

            $.getJSON(urlForJSONfile, function(data) {

                for (var i = 0; i < data.length; i++) {
                    //here we have dynamically generated list items for the listview
                    $("#myList").append('<li><a class="ui-btn ui-icon-info ui-btn-icon-right" data-transition="slide" href="#' + data[i].Domain + '">' + data[i].Domain + '</a></li>').listview('refresh');
                    //here we have dynamically generated pages and appended to #parentDiv
                    $("#parentDiv").append(
                        '<div data-role="page" id="' + data[i].Domain + '">' +
                        '<div data-role="header" data-add-back-btn="true" data-back-btn-text="Go back">' +
                        '<h1>' + data[i].Name + '</h1>' + '</div>' +
                        '<div role="main" class="ui-content">' +
                        '<p>Breach date: ' + data[i].BreachDate + "</p>" +
                        '<p>Breached accounts: ' + data[i].PwnCount + "</p>" +
                        '<p>' + data[i].Description + "</p>" +
                        '<p class="ui-mini"><strong>Compromised data: </strong>' + data[i].DataClasses + "</p></div>" +
                        '<div data-role="footer"><h1>Created by M.L.</h1></div>' +
                        '</div>');
                }
                //adding some info to main page 
                $("#totalWebsites").append(data.length);
            });
        });
