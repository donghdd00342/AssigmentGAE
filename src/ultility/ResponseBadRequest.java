package ultility;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

public class ResponseBadRequest {
    public ResponseBadRequest(HttpServletResponse response, String reasonPhrase) throws IOException {
        response.sendError(Constants.BAD_REQUEST, reasonPhrase);
    }
}
