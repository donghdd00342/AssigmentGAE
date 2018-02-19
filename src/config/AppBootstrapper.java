package config;

import com.googlecode.objectify.ObjectifyService;
import entity.Product;

import javax.servlet.ServletContextEvent;
import javax.servlet.ServletContextListener;

public class AppBootstrapper implements ServletContextListener {
    @Override
    public void contextInitialized(ServletContextEvent sce) {
        ObjectifyService.init();
        ObjectifyService.register(Product.class);
    }

    @Override
    public void contextDestroyed(ServletContextEvent sce) {

    }
}
