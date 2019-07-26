$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("Facebook.feature");
formatter.feature({
  "line": 1,
  "name": "Facebook Login Validation",
  "description": "",
  "id": "facebook-login-validation",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login Button Validation",
  "description": "",
  "id": "facebook-login-validation;login-button-validation",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I write \u003cuserName\u003e and \u003cPassword\u003e",
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "facebook-login-validation;login-button-validation;",
  "rows": [
    {
      "cells": [
        "userName",
        "Password"
      ],
      "line": 10,
      "id": "facebook-login-validation;login-button-validation;;1"
    },
    {
      "cells": [
        "user001",
        "abcd1234"
      ],
      "line": 11,
      "id": "facebook-login-validation;login-button-validation;;2"
    },
    {
      "cells": [
        "user002",
        "abcd1234"
      ],
      "line": 12,
      "id": "facebook-login-validation;login-button-validation;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login Button Validation",
  "description": "",
  "id": "facebook-login-validation;login-button-validation;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I write user001 and abcd1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.i_browse_to_facebook()"
});
formatter.result({
  "duration": 22404572051,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user001",
      "offset": 8
    },
    {
      "val": "abcd1234",
      "offset": 20
    }
  ],
  "location": "HomePageStepDef.i_fillup_fields(String,String)"
});
formatter.result({
  "duration": 300208899,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.i_click_login()"
});
formatter.result({
  "duration": 11167186603,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.i_quit_the_app()"
});
formatter.result({
  "duration": 94647367,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login Button Validation",
  "description": "",
  "id": "facebook-login-validation;login-button-validation;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "I write user002 and abcd1234",
  "matchedColumns": [
    0,
    1
  ],
  "keyword": "Then "
});
formatter.step({
  "line": 6,
  "name": "I click login",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "I close the browser",
  "keyword": "And "
});
formatter.match({
  "location": "HomePageStepDef.i_browse_to_facebook()"
});
formatter.result({
  "duration": 15344655094,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "user002",
      "offset": 8
    },
    {
      "val": "abcd1234",
      "offset": 20
    }
  ],
  "location": "HomePageStepDef.i_fillup_fields(String,String)"
});
formatter.result({
  "duration": 228028993,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.i_click_login()"
});
formatter.result({
  "duration": 7565129736,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.i_quit_the_app()"
});
formatter.result({
  "duration": 93958411,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "UI Validation",
  "description": "",
  "id": "facebook-login-validation;ui-validation",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "I browse to facebook",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I validate all header buttons",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I close the browser",
  "keyword": "Then "
});
formatter.match({
  "location": "HomePageStepDef.i_browse_to_facebook()"
});
formatter.result({
  "duration": 21750034911,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.I_validate_all_header_buttons()"
});
formatter.result({
  "duration": 5341481274,
  "status": "passed"
});
formatter.match({
  "location": "HomePageStepDef.i_quit_the_app()"
});
formatter.result({
  "duration": 94265631,
  "status": "passed"
});
});