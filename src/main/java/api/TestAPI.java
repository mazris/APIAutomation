package api;

import io.restassured.RestAssured;
import io.restassured.http.ContentType;
import io.restassured.path.json.JsonPath;
import io.restassured.response.Response;
import org.json.JSONObject;
import org.testng.annotations.Test;

import static io.restassured.RestAssured.given;

public class TestAPI {
    /*
    There are following public apis
#	Route	        Method  Type	                    Full route	                                Description	Details
1	/employee	    GET	    JSON	http://dummy.restapiexample.com/api/v1/employees	    Get all employee data Details
2	/employee/{id}	GET	    JSON	http://dummy.restapiexample.com/api/v1/employee/{id}	Get a single employee data Details
3	/create	        POST	JSON	http://dummy.restapiexample.com/api/v1/create	        Create new record in database Details
4	/update/{id}	PUT	    JSON	http://dummy.restapiexample.com/api/v1/update/{id}	    Update an employee record Details
5	/delete/{id}	DELETE	JSON	http://dummy.restapiexample.com/api/v1/update/{id}	    Delete an employee record Details
*/
    private String base_URI= RestAssured.baseURI="http://dummy.restapiexample.com/api/v1/";
    private String employees="employees";
    private String employeeWithID = "employee/";

    private String create = "create/";
    private String update = "update/";

    @Test
    public void testGetAllEmployee(){
        Response response = given().get(employees).then().extract().response();
        System.out.println(response.asString());
        // to get employees specific information
        JsonPath x = new JsonPath(response.asString());
        System.out.println("employee_name is : " + x.get("employee_name").toString());
        System.out.println("Response : " + response.asString());
        System.out.println("Status Code : " + response.getStatusCode());

    }
    @Test
    public void testGetSpecificEmployee() {
        Response response = given().when().get(employeeWithID + 19449).then()
                .extract().response();
        System.out.println("Response : " + response.asString());
        System.out.println("Status Code : " + response.getStatusCode());
    }
    @Test
    public void testPostCalls(){
        //creating the jsonObject first
        JSONObject jsonObject = new JSONObject();
        jsonObject.put("name","peopleNTech");
        jsonObject.put("salary","100000");
        jsonObject.put("age","24");
        System.out.println(jsonObject);
        Response response= given().header("Content-Type", "application/json").body(jsonObject.toString()).when().post(create).then().statusCode(200).extract().response();
        System.out.println(response.asString());

    }
    @Test
    public void testPutCalls() {
        String requestBody="{\r\n" +
                " \"name\":\"sonia\",\r\n" +
                " \"salary\":\"100000\",\r\n" +
                " \"age\":\"24\"\r\n" +
                "}";
        Response response = RestAssured.given().contentType(ContentType.JSON).body(requestBody).put(update+19449);
        System.out.println(response.asString());
        System.out.println(response.getStatusCode());

    }
    @Test
    public void changeName(){
        //get all the id
        //for each id change the name
    }
    @Test
    public void testDeleteCalls(){
        Response response = RestAssured.given().contentType(ContentType.JSON).delete("delete/19449");
        System.out.println(response.asString());
        System.out.println(response.getStatusCode());
    }

}
