package ultility;

import javax.servlet.http.HttpServletResponse;

public class ResponseCreated {
    public ResponseCreated(HttpServletResponse response) {
        response.setStatus(Constants.CREATED);
    }
}
