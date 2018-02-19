package service;

import entity.Product;
import ultility.Constants;
import ultility.ResponseBadRequest;
import ultility.ResponseCreated;
import ultility.ResponseOk;

import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

import static com.googlecode.objectify.ObjectifyService.ofy;

public class ProductService {

    public static Product create(Product product, HttpServletResponse response) throws IOException {
        if (product.getId() != null) {
            new ResponseBadRequest(response, Constants.CREATE_NEW_CANNOT_ALREADY_HAVE_AN_ID);
            return null;
        } else {
            product.initIdStatus();
            long id = ofy().save().entity(product).now().getId();
            product.setId(id);
            new ResponseCreated(response);
            return product;
        }
    }

    public static Product update(Product product, HttpServletResponse response) throws IOException {
        if (product.getId() == null) {
            return create(product, response);
        } else {
            Product prod = getOneById(product.getId(), response);
            if (prod == null) {
                new ResponseBadRequest(response, Constants.PRODUCT_DOES_NOT_EXIST);
                return null;
            } else {
                long id = ofy().save().entity(product).now().getId();
                product.setId(id);
                new ResponseOk(response);
                return product;
            }
        }
    }

    public static Product getOneById(long id, HttpServletResponse response) throws IOException {
        Product product = ofy().load().type(Product.class).id(id).now();
        if (product == null) {
            new ResponseBadRequest(response, Constants.PRODUCT_DOES_NOT_EXIST);
        }
        return product;
    }

    public static List<Product> getAll() {
        return ofy().load().type(Product.class).list();
    }

    public static void delete(Product product) {
        ofy().delete().entity(product).now();
    }
}
