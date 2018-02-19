package ultility;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ResponseInternalServerError {
    public ResponseInternalServerError(HttpServletResponse response, String reasonPhrase) throws IOException {
        response.sendError(Constants.INTERNAL_SERVER_ERROR, reasonPhrase);
    }
}
