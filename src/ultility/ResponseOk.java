package ultility;

import javax.servlet.http.HttpServletResponse;

public class ResponseOk {
    public ResponseOk(HttpServletResponse response) {
        response.setStatus(Constants.OK);
    }
}
