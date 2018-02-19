package endpoint;

import entity.Product;
import service.ProductService;
import ultility.EndpointHeper;

import javax.servlet.ServletException;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class ProductMockServlet extends HttpServlet {
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        createSampleData(request, response);
    }

    private void createSampleData(HttpServletRequest request, HttpServletResponse response) {
        String numberStr = request.getParameter("number");
        if (numberStr != null) {
            int number;
            Product product = new Product();
            try {
                number = Integer.valueOf(numberStr);
                for (int i = 0; i < number; i++) {
                    product.setId(null);
                    product.setName(EndpointHeper.randName());
                    product.setProducer(EndpointHeper.randProducer());
                    product.setUnitPrice(EndpointHeper.randInt(100, 300));
                    product.setRate(EndpointHeper.randInt(1, 10));
                    product.setQuantity(EndpointHeper.randInt(100, 300));
                    ProductService.create(product, response);
                }
            } catch (Exception ex) {
                ex.printStackTrace();
            }
        }
    }
}
