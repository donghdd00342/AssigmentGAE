package endpoint;

import com.google.gson.Gson;
import entity.Product;
import service.ProductService;
import ultility.*;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.HashMap;
import java.util.List;


public class ProductServlet extends HttpServlet {
    private static Gson gson = new Gson();

    protected void processRequest(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
    }

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
        GetActionCallback getActionCallback = new GetActionCallback();

        try {
            EndpointHeper.getAction(request, getActionCallback);
        } catch (NumberFormatException ex) {
            ex.printStackTrace();
            new ResponseBadRequest(response, Constants.SOMETHING_WENT_WRONG);
            return;
        }

        switch (getActionCallback.getAction()) {
            case Constants.ACTION_GET_LIST:
                List<Product> list = ProductService.getAll();
                HashMap<String, Object> responseData = new HashMap<>();
                responseData.put("products", list);
                response.getWriter().println(gson.toJson(responseData));
                break;
            case Constants.ACTION_GET_DETAIL:
                Product obj = ProductService.getOneById(getActionCallback.getId(), response);
                if (obj != null) {
                    response.getWriter().println(gson.toJson(obj));
                }
                break;
            default:
                new ResponseBadRequest(response, Constants.INVALID_PARAMETER);
                break;
        }
    }

    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);

        Product product = EndpointHeper.getProduct(request);
        if (product != null) {
            response.getWriter().println(gson.toJson(ProductService.create(product, response)));
        } else {
            new ResponseInternalServerError(response, Constants.SOMETHING_WENT_WRONG);
        }
    }

    @Override
    protected void doPut(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);

        Product product = EndpointHeper.getProduct(request);
        if (product != null) {
            response.getWriter().println(gson.toJson(ProductService.update(product, response)));
        } else {
            new ResponseInternalServerError(response, Constants.SOMETHING_WENT_WRONG);
        }
    }

    @Override
    protected void doDelete(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        processRequest(request, response);
        GetActionCallback getActionCallback = new GetActionCallback();

        try {
            EndpointHeper.getAction(request, getActionCallback);
            long id = getActionCallback.getId();
            if (id != 0) {
                Product product = ProductService.getOneById(id, response);
                if (product != null) {
                    ProductService.delete(product);
                    response.getWriter().println(gson.toJson(product));
                }
            } else {
                new ResponseBadRequest(response, Constants.ID_NOT_FOUND);
            }
        } catch (NumberFormatException ex) {
            ex.printStackTrace();
            new ResponseBadRequest(response, Constants.SOMETHING_WENT_WRONG);
            return;
        }
    }
}
